import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { TRPCError } from "@trpc/server";

export const pendaftaranRouter = createTRPCRouter({
    // Poin 4 & 7: Validasi & Pendaftaran Anggota UKM Ketat (1 Mahasiswa = 1 UKM)
    daftarUkm: publicProcedure
        .input(
            z.object({
                mahasiswaId: z.string(),
                ukmId: z.string(),
                approvedBy: z.enum(["Ketua UKM", "Sekretaris UKM"]),
            })
        )
        .mutation(async ({ ctx, input }) => {
            // 1. Cek apakah entitas mahasiswa sah tersedia di DB
            const mhs = await ctx.db.mahasiswa.findUnique({
                where: { id: input.mahasiswaId }
            });
            if (!mhs) {
                throw new TRPCError({
                    code: "NOT_FOUND",
                    message: "Mahasiswa tidak ditemukan di database akademik!"
                });
            }

            // 2. ATURAN VALIDASI KUNCI POIN 7: Cek apakah mahasiswa sudah terikat di UKM manapun
            const sudahTerdaftar = await ctx.db.anggotaUKM.findUnique({
                where: { mahasiswaId: input.mahasiswaId },
            });
            if (sudahTerdaftar) {
                throw new TRPCError({
                    code: "BAD_REQUEST",
                    message: "Gagal validasi! Mahasiswa bersangkutan sudah terdaftar aktif di organisasi UKM lain.",
                });
            }

            // 3. Eksekusi penyimpanan relasi pendaftaran baru
            return await ctx.db.anggotaUKM.create({ data: input });
        }),

    // Poin 1, 9, & 10: Rekapitulasi Seluruh Anggota untuk Dokumen Cetak Laporan PDF
    getRekapAnggota: publicProcedure.query(async ({ ctx }) => {
        const data = await ctx.db.anggotaUKM.findMany({
            include: {
                mahasiswa: true,
                ukm: true,
            },
            orderBy: { tanggalGabung: "desc" },
        });

        return data.map((item) => ({
            id: item.id,
            nim: item.mahasiswa.nim,
            nama: item.mahasiswa.nama,
            prodi: item.mahasiswa.prodi,
            ukm: item.ukm.namaUkm, // Membaca nama UKM relasional asli
            disetujui: item.approvedBy,
            tanggal: item.tanggalGabung.toLocaleDateString("id-ID"),
        }));
    }),


    updatePendaftaran: publicProcedure
        .input(z.object({
            id: z.string(),
            approvedBy: z.enum(["Ketua UKM", "Sekretaris UKM"]),
        }))
        .mutation(async ({ ctx, input }) => {
            return await ctx.db.anggotaUKM.update({
                where: { id: input.id },
                data: { approvedBy: input.approvedBy }
            });
        }),

    // Delete / Cabut Keanggotaan Mahasiswa dari UKM
    cancelPendaftaran: publicProcedure
        .input(z.object({ id: z.string() }))
        .mutation(async ({ ctx, input }) => {
            return await ctx.db.anggotaUKM.delete({
                where: { id: input.id }
            });
        }),

    // Dashboard: Tren Pendaftaran Anggota Bulanan (Real Data dari DB)
    getTrenBulanan: publicProcedure.query(async ({ ctx }) => {
        const data = await ctx.db.anggotaUKM.findMany({
            select: { tanggalGabung: true },
            orderBy: { tanggalGabung: "asc" },
        });

        const monthNames = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
        const monthlyCount: Record<string, number> = {};

        // Inisialisasi semua bulan dengan 0
        monthNames.forEach((m) => { monthlyCount[m] = 0; });

        // Hitung jumlah pendaftaran per bulan
        for (const item of data) {
            const monthIdx = item.tanggalGabung.getMonth(); // 0-11
            const key = monthNames[monthIdx] as string;
            monthlyCount[key] = (monthlyCount[key] || 0) + 1;
        }

        // Balikin 6 bulan terakhir aja biar chart-nya gak terlalu panjang
        const now = new Date();
        const currentMonth = now.getMonth();
        const result: Array<{ bulan: string; pendaftaran: number }> = [];
        for (let i = 5; i >= 0; i--) {
            const idx = ((currentMonth - i) % 12 + 12) % 12;
            const bulan = monthNames[idx] as string;
            result.push({ bulan, pendaftaran: monthlyCount[bulan] ?? 0 });
        }

        return result;
    }),
});
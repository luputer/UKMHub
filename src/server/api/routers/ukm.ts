import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { TRPCError } from "@trpc/server";

export const ukmRouter = createTRPCRouter({
    // ─── MANAGEMENT DATA ORGANISASI UKM ──────────────────────────────────

    // Read All UKM (Untuk Tabel List & Dropdown Pendaftaran)
    getUkmList: publicProcedure
        .input(z.object({ search: z.string().optional() }).optional())
        .query(async ({ ctx, input }) => {
            if (input?.search) {
                return await ctx.db.ukm.findMany({
                    where: {
                        namaUkm: { contains: input.search },
                    },
                    orderBy: { namaUkm: "asc" },
                });
            }
            return await ctx.db.ukm.findMany({
                orderBy: { namaUkm: "asc" },
            });
        }),

    // Read Detail UKM by ID (Untuk Form Edit)
    getUkmById: publicProcedure
        .input(z.object({ id: z.string() }))
        .query(async ({ ctx, input }) => {
            const ukm = await ctx.db.ukm.findUnique({
                where: { id: input.id },
            });
            if (!ukm) {
                throw new TRPCError({
                    code: "NOT_FOUND",
                    message: "Organisasi UKM tidak ditemukan!",
                });
            }
            return ukm;
        }),


    // Distribusi Anggota Per-UKM untuk Dashboard Chart
    getDistribusiUkm: publicProcedure.query(async ({ ctx }) => {
        const ukms = await ctx.db.ukm.findMany({
            include: {
                _count: { select: { paraAnggota: true } },
            },
            orderBy: { namaUkm: "asc" },
        });

        const colors = ["#0d9488", "#3b82f6", "#8b5cf6", "#f43f5e", "#eab308", "#f97316", "#06b6d4"];

        return ukms.map((ukm, index) => ({
            nama: ukm.namaUkm,
            anggota: ukm._count.paraAnggota,
            color: colors[index % colors.length] ?? "#0d9488",
        }));
    }),

    // Create Organisasi UKM Baru
    createUkm: publicProcedure
        .input(
            z.object({
                kodeUkm: z.string(),
                namaUkm: z.string(),
                pembina: z.string().optional(),
            })
        )
        .mutation(async ({ ctx, input }) => {
            const exists = await ctx.db.ukm.findFirst({
                where: { kodeUkm: input.kodeUkm },
            });
            if (exists) {
                throw new TRPCError({
                    code: "BAD_REQUEST",
                    message: "Kode identitas organisasi UKM sudah digunakan!",
                });
            }

            // Fix: Petakan data input frontend agar sesuai dengan properti schema.prisma Anda
            return await ctx.db.ukm.create({
                data: {
                    kodeUkm: input.kodeUkm,
                    namaUkm: input.namaUkm,
                    deskripsi: input.pembina, // Masuk ke kolom deskripsi yang ada di skema Anda
                    registeredBy: "Wakil Direktur III", // Wajib diisi karena di skema required
                }
            });
        }),

    // Update / Edit Organisasi UKM
    updateUkm: publicProcedure
        .input(
            z.object({
                id: z.string(),
                kodeUkm: z.string(),
                namaUkm: z.string(),
                pembina: z.string().optional(),
            })
        )
        .mutation(async ({ ctx, input }) => {
            // Fix: Petakan ulang properti agar tidak mengirimkan objek mentah 'pembina' ke Prisma
            return await ctx.db.ukm.update({
                where: { id: input.id },
                data: {
                    kodeUkm: input.kodeUkm,
                    namaUkm: input.namaUkm,
                    deskripsi: input.pembina, // Masuk ke kolom deskripsi
                    registeredBy: "Wakil Direktur III", // Tetap jaga integritas field required
                },
            });
        }),

    // Delete / Hapus Kelompok UKM
    deleteUkm: publicProcedure
        .input(z.object({ id: z.string() }))
        .mutation(async ({ ctx, input }) => {
            return await ctx.db.ukm.delete({
                where: { id: input.id },
            });
        }),


    // ─── TRANSAKSI & PENDAFTARAN ANGGOTA UKM ─────────────────────────────

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
            // 1. Cek validasi apakah entitas mahasiswa sah ada di DB
            const mhs = await ctx.db.mahasiswa.findUnique({
                where: { id: input.mahasiswaId }
            });
            if (!mhs) throw new TRPCError({ code: "NOT_FOUND", message: "Mahasiswa tidak ditemukan!" });

            // 2. ATURAN VALIDASI POIN 7: Cek apakah mahasiswa sudah gabung di UKM manapun
            const sudahTerdaftar = await ctx.db.anggotaUKM.findUnique({
                where: { mahasiswaId: input.mahasiswaId },
            });
            if (sudahTerdaftar) {
                throw new TRPCError({
                    code: "BAD_REQUEST",
                    message: "Gagal validasi! Mahasiswa bersangkutan sudah terdaftar aktif di UKM lain.",
                });
            }

            // 3. Eksekusi penyimpanan relasi pendaftaran baru
            return await ctx.db.anggotaUKM.create({ data: input });
        }),

    // Poin 1, 9, & 10: Rekapitulasi Data untuk Dokumen Cetak Laporan PDF
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
            ukm: item.ukm.namaUkm, // Membaca nama UKM dinamis asli dari MySQL relasional
            disetujui: item.approvedBy,
            tanggal: item.tanggalGabung.toLocaleDateString("id-ID"),
        }));
    }),
});
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { TRPCError } from "@trpc/server";

export const mahasiswaRouter = createTRPCRouter({
    // Read All & Search (Poin 6 & 8)
    getMahasiswa: publicProcedure
        .input(z.object({ search: z.string().optional() }))
        .query(async ({ ctx, input }) => {
            if (input.search) {
                return await ctx.db.mahasiswa.findMany({
                    where: {
                        OR: [
                            { nama: { contains: input.search } },
                            { nim: { contains: input.search } },
                        ],
                    },
                    orderBy: { createdAt: "desc" },
                });
            }
            return await ctx.db.mahasiswa.findMany({
                orderBy: { createdAt: "desc" },
            });
        }),

    // Read Detail by ID (Untuk Form Edit)
    getMahasiswaById: publicProcedure
        .input(z.object({ id: z.string() }))
        .query(async ({ ctx, input }) => {
            const mhs = await ctx.db.mahasiswa.findUnique({
                where: { id: input.id },
            });
            if (!mhs) {
                throw new TRPCError({
                    code: "NOT_FOUND",
                    message: "Data mahasiswa tidak ditemukan!",
                });
            }
            return mhs;
        }),

    // Create (Poin 3 & 6)
    createMahasiswa: publicProcedure
        .input(
            z.object({
                nim: z.string(),
                nama: z.string(),
                jurusan: z.string(),
                prodi: z.string(),
                registeredBy: z.enum(["Wakil Direktur III", "Kepala Bagian Akademik"]),
            })
        )
        .mutation(async ({ ctx, input }) => {
            const exists = await ctx.db.mahasiswa.findUnique({
                where: { nim: input.nim },
            });
            if (exists) {
                throw new TRPCError({
                    code: "BAD_REQUEST",
                    message: "NIM Mahasiswa sudah terdaftar resmi!",
                });
            }
            return await ctx.db.mahasiswa.create({ data: input });
        }),

    // Update / Edit (Poin 6)
    updateMahasiswa: publicProcedure
        .input(
            z.object({
                id: z.string(),
                nim: z.string(),
                nama: z.string(),
                jurusan: z.string(),
                prodi: z.string(),
                registeredBy: z.enum(["Wakil Direktur III", "Kepala Bagian Akademik"]),
            })
        )
        .mutation(async ({ ctx, input }) => {
            const { id, ...dataWithoutId } = input;
            return await ctx.db.mahasiswa.update({
                where: { id },
                data: dataWithoutId,
            });
        }),

    // Delete / Hapus (Poin 6)
    deleteMahasiswa: publicProcedure
        .input(z.object({ id: z.string() }))
        .mutation(async ({ ctx, input }) => {
            return await ctx.db.mahasiswa.delete({
                where: { id: input.id },
            });
        }),
});
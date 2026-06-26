import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import jwt from "jsonwebtoken";
import { TRPCError } from "@trpc/server";

const JWT_SECRET = process.env.JWT_SECRET ?? "super-secret-lsp-key";

export const authRouter = createTRPCRouter({
    // Router untuk menangani login administrator sistem
    loginAdmin: publicProcedure
        .input(
            z.object({
                username: z.string(),
                password: z.string(),
            })
        )
        .mutation(async ({ ctx, input }) => {
            // 1. Cari akun administrator di database MySQL via Prisma
            const admin = await ctx.db.admin.findUnique({
                where: { username: input.username },
            });

            // 2. Validasi Login (Bisa string cocok langsung untuk kebutuhan kilat LSP)
            if (!admin || admin?.password !== input.password) {
                throw new TRPCError({
                    code: "UNAUTHORIZED",
                    message: "Username atau password salah!",
                });
            }

            // 3. Buat token JWT yang berlaku selama 24 jam
            const token = jwt.sign(
                { id: admin.id, username: admin.username },
                JWT_SECRET,
                { expiresIn: "1d" }
            );

            // 4. Set cookie langsung ke response headers agar disimpan oleh browser
            ctx.headers.set(
                "Set-Cookie",
                `admin_token=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=86400`
            );

            return {
                success: true,
                message: "Login berhasil!",
                admin: { username: admin.username },
            };
        }),

    // Router untuk menghapus session cookie admin (Logout)
    logoutAdmin: publicProcedure.mutation(({ ctx }) => {
        ctx.headers.set(
            "Set-Cookie",
            `admin_token=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0`
        );
        return { success: true, message: "Logout berhasil!" };
    }),
});
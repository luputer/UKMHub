import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { authRouter } from "~/server/api/routers/auth";
import { ukmRouter } from "./routers/ukm";
import { mahasiswaRouter } from "./routers/mahasiswa";
import { pendaftaranRouter } from "./routers/perndaftaran";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  mahasiswa: mahasiswaRouter,
  ukm: ukmRouter,
  pendaftaran: pendaftaranRouter,
});

export type AppRouter = typeof appRouter;

// Tambah dua baris ini
const createCaller = createCallerFactory(appRouter);
export { createCaller };
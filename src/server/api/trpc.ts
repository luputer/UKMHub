import { initTRPC } from "@trpc/server";
import { PrismaClient } from "generated/prisma";
import superjson from "superjson";
import { ZodError } from "zod";
import { env } from "~/env";

// 1. Inisialisasi Prisma Client dari custom output directory Anda

const createPrismaClient = () =>
  new PrismaClient({
    log:
      env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined;
};

// Instance DB tunggal yang aman dari hot-reload memory leaks
const dbInstance = globalForPrisma.prisma ?? createPrismaClient();

if (env.NODE_ENV !== "production") globalForPrisma.prisma = dbInstance;

/**
 * 1. CONTEXT
 *
 * Di sinilah data database dialirkan ke dalam ctx setiap router tRPC.
 */
export const createTRPCContext = async (opts: { headers: Headers }) => {
  return {
    db: dbInstance, // 👈 Terpasang aman sebagai ctx.db ke seluruh router
    ...opts,
  };
};

/**
 * 2. INITIALIZATION
 *
 * Setup internal engine tRPC beserta penanganan error validasi Zod.
 */
const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

/**
 * Create a server-side caller.
 */
export const createCallerFactory = t.createCallerFactory;

/**
 * 3. ROUTER & PROCEDURE
 */
export const createTRPCRouter = t.router;

/**
 * Middleware untuk memonitor kecepatan durasi eksekusi data API
 */
const timingMiddleware = t.middleware(async ({ next, path }) => {
  const start = Date.now();

  if (t._config.isDev) {
    const waitMs = Math.floor(Math.random() * 400) + 100;
    await new Promise((resolve) => setTimeout(resolve, waitMs));
  }

  const result = await next();
  const end = Date.now();
  console.log(`[TRPC] ${path} took ${end - start}ms to execute`);

  return result;
});

// Base procedure yang Anda gunakan di router auth dan ukm
export const publicProcedure = t.procedure.use(timingMiddleware);
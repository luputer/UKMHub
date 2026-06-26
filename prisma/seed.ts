import { PrismaClient } from "generated/prisma";

const prisma = new PrismaClient();

async function main() {
    console.log("🌱 Menjalankan database seeder...");

    // Hapus data admin lama jika ada (opsional, untuk mencegah duplikasi saat seed ulang)
    await prisma.admin.deleteMany();

    // Memasukkan akun administrator default
    const defaultAdmin = await prisma.admin.create({
        data: {
            username: "admin_ukm",
            password: "password123", // Cocok dengan placeholder password di template login Anda
        },
    });

    console.log(`✅ Seeder berhasil! Akun admin dibuat:`);
    console.log(`👉 Username: ${defaultAdmin.username}`);
    console.log(`👉 Password: password123`);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
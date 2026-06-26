# Pengelola UMKM

Dashboard pengelolaan UMKM (Usaha Mikro, Kecil, dan Menengah) untuk koperasi, dirancang khusus untuk memudahkan administrasi dan pengawasan usaha-usaha anggota koperasi.

![Pengelola UMKM Dashboard](https://placehold.co/800x400/1e40af/white?text=Pengelola+UMKM+Dashboard)

## Fitur Utama

- **Manajemen UKM**: Kelola data UKM anggota koperasi (profil, bidang usaha, lokasi, status)
- **Manajemen Mahasiswa**: Registrasi dan pengelolaan data mahasiswa yang terlibat dalam program UKM
- **Manajemen Anggota**: Kelola daftar anggota koperasi dan hubungan mereka dengan UKM
- **Dashboard Analitik**: Visualisasi kinerja UKM dan statistik koperasi
- **Sistem Login & Autentikasi**: Keamanan berbasis NextAuth.js dengan manajemen sesi
- **API Terproteksi**: tRPC untuk komunikasi aman antara frontend dan backend
- **Database Modern**: Prisma ORM dengan schema database terstruktur

## Teknologi yang Digunakan

- **Frontend**: Next.js 14 (App Router), React Server Components, TypeScript
- **Styling**: Tailwind CSS dengan shadcn/ui components
- **Backend**: tRPC API routes, Node.js runtime
- **Database**: PostgreSQL dengan Prisma ORM
- **Authentication**: NextAuth.js
- **Deployment**: Optimized for Vercel, Netlify, atau Docker

## Struktur Direktori

```
src/
├── app/
│   ├── login/          # Halaman login dan autentikasi
│   ├── dashboard/      # Dashboard utama dan modul manajemen
│   │   ├── ukm/        # Manajemen UKM (create, edit, list)
│   │   ├── mahasiswa/  # Manajemen mahasiswa
│   │   ├── anggota/    # Manajemen anggota koperasi
│   │   └── page.tsx    # Dashboard utama
│   ├── layout.tsx      # Layout aplikasi global
│   └── page.tsx        # Halaman landing/home
├── server/
│   ├── api/            # tRPC router dan prosedur API
│   │   ├── root.ts     # Root router
│   │   ├── trpc.ts     # tRPC initialization
│   │   └── routers/    # Modul router: auth, ukm, mahasiswa, perndaftaran
│   └── db.ts           # Konfigurasi koneksi database
├── trpc/
│   ├── react.tsx       # tRPC React client
│   ├── server.ts       # tRPC server configuration
│   └── query-client.ts # Query client untuk tanpa SSR
├── components/
│   └── ui/             # Komponen UI reusable (shadcn/ui)
└── lib/
    └── utils.ts        # Utility functions dan helper
```

## Persiapan Lingkungan Pengembangan

### 1. Instalasi Dependensi
```bash
npm install
# atau
bun install
```

### 2. Konfigurasi Lingkungan
Buat file `.env` berdasarkan contoh:
```bash
# .env
DATABASE_URL="postgresql://user:password@localhost:5432/pengelola_umkm"
NEXTAUTH_SECRET="your-secret-key"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### 3. Inisialisasi Database
```bash
npx prisma migrate dev --name init
npx prisma db seed
```

### 4. Jalankan Aplikasi
```bash
npm run dev
# atau
bun run dev
```

Aplikasi akan berjalan di http://localhost:3000

## Deployment

Aplikasi ini siap untuk deployment ke platform berikut:

- **Vercel**: [Panduan deployment Vercel](https://create.t3.gg/en/deployment/vercel)
- **Netlify**: [Panduan deployment Netlify](https://create.t3.gg/en/deployment/netlify)
- **Docker**: [Panduan deployment Docker](https://create.t3.gg/en/deployment/docker)

## Kontribusi

Kami menerima kontribusi dari komunitas! Silakan ikuti langkah-langkah berikut:

1. Fork repository ini
2. Buat branch baru (`git checkout -b fitur-baru`)
3. Commit perubahan Anda (`git commit -m 'Tambahkan fitur baru'`)
4. Push ke branch (`git push origin fitur-baru`)
5. Buat pull request

## Lisensi

Proyek ini dilisensikan di bawah MIT License.

## Kontak

Untuk pertanyaan lebih lanjut, hubungi tim pengembangan koperasi.
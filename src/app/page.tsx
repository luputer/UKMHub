import Link from "next/link";
import { Users, BarChart3, Bell, FileText, Store } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Data Anggota",
    desc: "Profil lengkap, dokumen, dan riwayat usaha setiap anggota.",
    delay: "[animation-delay:0.25s]",
  },
  {
    icon: BarChart3,
    title: "Laporan & Analitik",
    desc: "Grafik perkembangan usaha dan iuran yang bisa diunduh.",
    delay: "[animation-delay:0.40s]",
  },
  {
    icon: Bell,
    title: "Notifikasi Iuran",
    desc: "Pengingat otomatis via WhatsApp atau email ke anggota.",
    delay: "[animation-delay:0.55s]",
  },
  {
    icon: FileText,
    title: "Surat & Dokumen",
    desc: "Generate surat keterangan anggota dalam hitungan detik.",
    delay: "[animation-delay:0.70s]",
  },
];

export default function Home() {
  return (
    <div className="bg-[#f8fafb] min-h-screen font-sans">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes statIn {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }
        .fade-up { animation: fadeUp 0.6s cubic-bezier(.22,.68,0,1.2) both; }
        .float-badge { animation: floatBadge 3s ease-in-out infinite; }
        .shimmer-text {
          background: linear-gradient(90deg, #0d9488 0%, #14b8a6 40%, #22d3ee 60%, #0d9488 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 2.5s linear infinite;
        }
        .stat-num { animation: statIn 0.5s cubic-bezier(.22,.68,0,1.2) both; }
      `}</style>

      {/* Navbar */}
      <nav className="fade-up [animation-delay:0.05s] bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
              <Store className="w-4 h-4 text-white" />
            </div>
            <span className="font-medium text-[15px]">UMKMHub</span>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/login"
              className="text-sm text-gray-600 hover:text-gray-900 px-3 py-1.5 rounded-md hover:bg-gray-100 transition-colors"
            >
              Masuk
            </Link>
            <Link
              href="/register"
              className="text-sm bg-teal-600 hover:bg-teal-700 text-white px-4 py-1.5 rounded-md font-medium transition-colors"
            >
              Daftar Gratis
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-12 text-center">
        {/* Floating badge */}
        <div className="fade-up [animation-delay:0.05s] float-badge inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-3 py-1 mb-6">
          <span className="w-1.5 h-1.5 bg-teal-600 rounded-full" />
          <span className="text-xs text-teal-700 font-medium">Platform UMKM #1 di Indonesia</span>
        </div>

        <h1 className="fade-up [animation-delay:0.15s] text-4xl font-medium leading-tight tracking-tight mb-4">
          Kelola anggota UMKM <br />
          <span className="shimmer-text">lebih cerdas &amp; efisien</span>
        </h1>

        <p className="fade-up [animation-delay:0.25s] text-gray-500 text-[15px] leading-relaxed max-w-xl mx-auto mb-8">
          Satu platform untuk daftarkan anggota, pantau perkembangan usaha,
          dan kelola administrasi koperasi UMKM secara digital.
        </p>

        <div className="fade-up [animation-delay:0.40s] flex gap-3 justify-center flex-wrap mb-12">
          <Link
            href="/register"
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-lg font-medium text-sm transition-colors"
          >
            Mulai Gratis
          </Link>
          <Link
            href="/demo"
            className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-2.5 rounded-lg font-medium text-sm transition-colors bg-white"
          >
            Lihat Demo →
          </Link>
        </div>

        {/* Stats */}
        <div className="fade-up [animation-delay:0.55s] grid grid-cols-3 divide-x divide-gray-200 border border-gray-200 rounded-xl overflow-hidden bg-white">
          <div className="py-5 px-4 text-center">
            <div className="stat-num [animation-delay:0.65s] text-2xl font-medium text-teal-600">12.500+</div>
            <div className="text-xs text-gray-400 mt-1">Anggota aktif</div>
          </div>
          <div className="py-5 px-4 text-center">
            <div className="stat-num [animation-delay:0.75s] text-2xl font-medium text-teal-600">340+</div>
            <div className="text-xs text-gray-400 mt-1">Koperasi terdaftar</div>
          </div>
          <div className="py-5 px-4 text-center">
            <div className="stat-num [animation-delay:0.85s] text-2xl font-medium text-teal-600">27 Kota</div>
            <div className="text-xs text-gray-400 mt-1">Jangkauan wilayah</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h2 className="fade-up [animation-delay:0.1s] text-xl font-medium text-center mb-2">
          Semua yang kamu butuhkan
        </h2>
        <p className="fade-up [animation-delay:0.2s] text-sm text-gray-400 text-center mb-8">
          dalam satu dashboard yang simpel
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {features.map(({ icon: Icon, title, desc, delay }) => (
            <div
              key={title}
              className={`fade-up ${delay} bg-white border border-gray-200 rounded-xl p-5 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(13,148,136,0.12)] transition-all duration-200`}
            >
              <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-3">
                <Icon className="w-5 h-5 text-teal-600" />
              </div>
              <p className="font-medium text-sm mb-1">{title}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="fade-up [animation-delay:0.3s] max-w-5xl mx-auto px-6 py-8 pb-16">
        <div className="bg-teal-600 rounded-2xl p-10 text-center">
          <span className="inline-block bg-white/20 text-white text-xs px-3 py-1 rounded-full mb-4">
            Gratis selamanya untuk koperasi kecil
          </span>
          <h2 className="text-xl font-medium text-white mb-3">
            Siap digitalisasi UMKM-mu?
          </h2>
          <p className="text-sm text-teal-100 leading-relaxed mb-6 max-w-md mx-auto">
            Bergabung dengan ribuan pengurus koperasi yang sudah beralih ke UMKMHub.
          </p>
          <Link
            href="/register"
            className="inline-block bg-white text-teal-700 hover:bg-teal-50 font-medium px-6 py-2.5 rounded-lg text-sm transition-colors"
          >
            Daftar Sekarang — Gratis
          </Link>
        </div>
      </section>
    </div>
  );
}
"use client";

import React from "react";
import {
  Users,
  Building2,
  UserCheck,
  ArrowRight,
  Activity,
  TrendingUp,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { api } from "~/trpc/react";
import Link from "next/link";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  Cell,
} from "recharts";

export default function DashboardPage() {
  const { data: mahasiswaList } = api.mahasiswa.getMahasiswa.useQuery({});
  const { data: rekapLaporan } = api.pendaftaran.getRekapAnggota.useQuery();
  const { data: distribusiUkm } = api.ukm.getDistribusiUkm.useQuery();
  const { data: trenBulanan } = api.pendaftaran.getTrenBulanan.useQuery();

  const dataTrenBulanan = trenBulanan ?? [];

  const totalMahasiswa = mahasiswaList?.length ?? 0;
  const totalPendaftaran = rekapLaporan?.length ?? 0;
  const pendaftaranTerbaru = rekapLaporan?.slice(0, 5) ?? [];
  const dataDistribusiUkm = distribusiUkm ?? [];

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-foreground text-2xl font-semibold tracking-tight">
          Selamat Datang, Admin
        </h1>
        <p className="text-muted-foreground text-sm">
          Berikut adalah ringkasan grafik perkembangan data organisasi mahasiswa
          POLIBAN hari ini.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-border rounded-lg shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
              Mahasiswa Terdaftar
            </CardTitle>
            <div className="bg-secondary text-primary rounded-md p-2">
              <Users className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-foreground text-2xl font-semibold">
              {totalMahasiswa}
            </div>
            <p className="text-muted-foreground mt-1 text-xs">
              Mahasiswa resmi aktif POLIBAN
            </p>
          </CardContent>
        </Card>

        <Card className="border-border rounded-lg shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
              Unit Kegiatan (UKM)
            </CardTitle>
            <div className="rounded-md bg-blue-50 p-2 text-blue-700">
              <Building2 className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-foreground text-2xl font-semibold">
              {dataDistribusiUkm.length || 0}
            </div>
            <p className="text-muted-foreground mt-1 text-xs">
              Organisasi kemahasiswaan resmi
            </p>
          </CardContent>
        </Card>

        <Card className="border-border rounded-lg shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
              Anggota Resmi UKM
            </CardTitle>
            <div className="rounded-md bg-emerald-50 p-2 text-emerald-700">
              <UserCheck className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-foreground text-2xl font-semibold">
              {totalPendaftaran}
            </div>
            <p className="text-muted-foreground mt-1 text-xs">
              Telah disetujui pengurus dan tersinkronisasi
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-border rounded-lg shadow-sm">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center gap-2 text-base font-semibold">
              <TrendingUp className="text-primary h-4 w-4" />
              Tren Pendaftaran Anggota
            </CardTitle>
            <CardDescription className="text-xs">
              Statistik pertumbuhan minat mahasiswa masuk UKM 2026
            </CardDescription>
          </CardHeader>
          <CardContent className="h-64 pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={dataTrenBulanan}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <defs>
                  <linearGradient
                    id="colorPendaftaran"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.22} />
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="bulan"
                  stroke="#64748b"
                  fontSize={11}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#64748b"
                  fontSize={11}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  contentStyle={{
                    fontSize: "12px",
                    borderRadius: "8px",
                    border: "1px solid #e5e7eb",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="pendaftaran"
                  stroke="#2563eb"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorPendaftaran)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-border rounded-lg shadow-sm">
          <CardHeader>
            <CardTitle className="text-foreground text-base font-semibold">
              Distribusi Per-UKM Teraktif
            </CardTitle>
            <CardDescription className="text-xs">
              Perbandingan kuantitas jumlah mahasiswa anggota aktif saat ini
            </CardDescription>
          </CardHeader>
          <CardContent className="h-64 pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={dataDistribusiUkm}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <XAxis
                  dataKey="nama"
                  stroke="#64748b"
                  fontSize={11}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#64748b"
                  fontSize={11}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  contentStyle={{
                    fontSize: "12px",
                    borderRadius: "8px",
                    border: "1px solid #e5e7eb",
                  }}
                />
                <Bar dataKey="anggota" radius={[4, 4, 0, 0]} barSize={30}>
                  {dataDistribusiUkm.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-border rounded-lg shadow-sm md:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between pb-4">
            <div className="space-y-1">
              <CardTitle className="text-foreground text-base font-semibold">
                Aktivitas Pendaftaran Terbaru
              </CardTitle>
              <CardDescription className="text-xs">
                Log masuk verifikasi mahasiswa ke masing-masing UKM
              </CardDescription>
            </div>
            <Activity className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            {pendaftaranTerbaru.length === 0 ? (
              <div className="text-muted-foreground rounded-lg border border-dashed py-8 text-center text-sm">
                Belum ada data keanggotaan baru yang tercatat.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="text-muted-foreground border-b text-xs font-medium tracking-wider uppercase">
                      <th className="pb-3 font-medium">Mahasiswa</th>
                      <th className="pb-3 font-medium">UKM Dituju</th>
                      <th className="pb-3 font-medium">Tanggal</th>
                    </tr>
                  </thead>
                  <tbody className="divide-border divide-y">
                    {pendaftaranTerbaru.map((item) => (
                      <tr
                        key={item.id}
                        className="text-muted-foreground hover:bg-muted/60 transition-colors"
                      >
                        <td className="text-foreground py-3 font-medium">
                          <div className="flex flex-col">
                            <span>{item.nama}</span>
                            <span className="text-muted-foreground font-mono text-xs">
                              {item.nim}
                            </span>
                          </div>
                        </td>
                        <td className="py-3">
                          <span className="bg-accent text-accent-foreground inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium">
                            {item.ukm}
                          </span>
                        </td>
                        <td className="text-muted-foreground py-3 text-xs">
                          {item.tanggal}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="border-border flex flex-col justify-between rounded-lg shadow-sm">
          <CardHeader>
            <CardTitle className="text-foreground text-base font-semibold">
              Akses Jalan Pintas
            </CardTitle>
            <CardDescription className="text-xs">
              Kelola entitas data sistem secara langsung
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 space-y-3">
            <Button
              variant="outline"
              asChild
              className="group border-border hover:bg-secondary w-full justify-between transition-all"
            >
              <Link href="/dashboard/mahasiswa">
                <span className="text-xs font-medium">
                  Pendaftaran Mahasiswa Resmi
                </span>
                <ArrowRight className="text-muted-foreground h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              asChild
              className="group border-border hover:bg-secondary w-full justify-between transition-all"
            >
              <Link href="/dashboard/anggota">
                <span className="text-xs font-medium">
                  Validasi Anggota Baru
                </span>
                <ArrowRight className="text-muted-foreground h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              asChild
              className="group border-border hover:bg-secondary w-full justify-between transition-all"
            >
              <Link href="/dashboard/list-anggota">
                <span className="text-xs font-medium">
                  Cetak Laporan Rekapitulasi
                </span>
                <ArrowRight className="text-muted-foreground h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </CardContent>
          <div className="bg-muted/40 text-muted-foreground mt-4 border-t px-6 py-3 text-center text-xs">
            Sistem Informasi Pengelolaan UKM POLIBAN
          </div>
        </Card>
      </div>
    </div>
  );
}

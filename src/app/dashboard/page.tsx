"use client";

import React from "react";
import { Users, Building2, UserCheck, ArrowRight, Activity, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "~/components/ui/card";
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
    Cell
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
        <div className="space-y-6 max-w-7xl mx-auto">
            <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">Selamat Datang, Admin</h1>
                <p className="text-sm text-gray-500">
                    Berikut adalah ringkasan grafik perkembangan data organisasi mahasiswa POLIBAN hari ini.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <Card className="border-gray-200/60 shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            Mahasiswa Terdaftar
                        </CardTitle>
                        <div className="p-2 bg-teal-50 rounded-lg">
                            <Users className="h-4 w-4 text-teal-600" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-gray-900">{totalMahasiswa}</div>
                        <p className="text-xs text-gray-400 mt-1">Mahasiswa resmi aktif POLIBAN</p>
                    </CardContent>
                </Card>

                <Card className="border-gray-200/60 shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            Unit Kegiatan (UKM)
                        </CardTitle>
                        <div className="p-2 bg-blue-50 rounded-lg">
                            <Building2 className="h-4 w-4 text-blue-600" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-gray-900">{dataDistribusiUkm.length || 0}</div>
                        <p className="text-xs text-gray-400 mt-1">Organisasi kemahasiswaan resmi</p>
                    </CardContent>
                </Card>

                <Card className="border-gray-200/60 shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            Anggota Resmi UKM
                        </CardTitle>
                        <div className="p-2 bg-purple-50 rounded-lg">
                            <UserCheck className="h-4 w-4 text-purple-600" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-gray-900">{totalPendaftaran}</div>
                        <p className="text-xs text-gray-400 mt-1">Telah disetujui pengurus & tersinkronisasi</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-gray-200/60 shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-base font-medium text-gray-900 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-teal-600" />
                            Tren Pendaftaran Anggota
                        </CardTitle>
                        <CardDescription className="text-xs">Statistik pertumbuhan minat mahasiswa masuk UKM 2026</CardDescription>
                    </CardHeader>
                    <CardContent className="h-64 pt-4">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={dataTrenBulanan} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorPendaftaran" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#0d9488" stopOpacity={0.2} />
                                        <stop offset="95%" stopColor="#0d9488" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="bulan" stroke="#9ca3af" fontSize={11} tickLine={false} axisLine={false} />
                                <YAxis stroke="#9ca3af" fontSize={11} tickLine={false} axisLine={false} />
                                <Tooltip contentStyle={{ fontSize: '12px', borderRadius: '8px', border: '1px solid #e5e7eb' }} />
                                <Area type="monotone" dataKey="pendaftaran" stroke="#0d9488" strokeWidth={2} fillOpacity={1} fill="url(#colorPendaftaran)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                <Card className="border-gray-200/60 shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-base font-medium text-gray-900">Distribusi Per-UKM Teraktif</CardTitle>
                        <CardDescription className="text-xs">Perbandingan kuantitas jumlah mahasiswa anggota aktif saat ini</CardDescription>
                    </CardHeader>
                    <CardContent className="h-64 pt-4">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={dataDistribusiUkm} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                <XAxis dataKey="nama" stroke="#9ca3af" fontSize={11} tickLine={false} axisLine={false} />
                                <YAxis stroke="#9ca3af" fontSize={11} tickLine={false} axisLine={false} />
                                <Tooltip contentStyle={{ fontSize: '12px', borderRadius: '8px', border: '1px solid #e5e7eb' }} />
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
                <Card className="md:col-span-2 border-gray-200/60 shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between pb-4">
                        <div className="space-y-1">
                            <CardTitle className="text-base font-medium text-gray-900">Aktivitas Pendaftaran Terbaru</CardTitle>
                            <CardDescription className="text-xs">Log masuk verifikasi mahasiswa ke masing-masing UKM</CardDescription>
                        </div>
                        <Activity className="w-4 h-4 text-gray-300" />
                    </CardHeader>
                    <CardContent>
                        {pendaftaranTerbaru.length === 0 ? (
                            <div className="text-center py-8 text-sm text-gray-400 border border-dashed rounded-xl">
                                Belum ada data keanggotaan baru yang tercatat.
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm">
                                    <thead>
                                        <tr className="border-b text-gray-400 text-xs font-medium uppercase tracking-wider">
                                            <th className="pb-3 font-medium">Mahasiswa</th>
                                            <th className="pb-3 font-medium">UKM Dituju</th>
                                            <th className="pb-3 font-medium">Tanggal</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {pendaftaranTerbaru.map((item) => (
                                            <tr key={item.id} className="text-gray-600 hover:bg-gray-50/60 transition-colors">
                                                <td className="py-3 font-medium text-gray-900">
                                                    <div className="flex flex-col">
                                                        <span>{item.nama}</span>
                                                        <span className="text-[11px] font-mono text-gray-400">{item.nim}</span>
                                                    </div>
                                                </td>
                                                <td className="py-3">
                                                    <span className="inline-flex items-center bg-teal-50 text-teal-700 text-xs px-2 py-0.5 rounded-md font-medium">
                                                        {item.ukm}
                                                    </span>
                                                </td>
                                                <td className="py-3 text-xs text-gray-400">{item.tanggal}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </CardContent>
                </Card>

                <Card className="border-gray-200/60 shadow-sm flex flex-col justify-between">
                    <CardHeader>
                        <CardTitle className="text-base font-medium text-gray-900">Akses Jalan Pintas</CardTitle>
                        <CardDescription className="text-xs">Kelola entitas data sistem secara langsung</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3 flex-1">
                        <Button variant="outline" asChild className="w-full justify-between hover:bg-teal-50/40 border-gray-200 transition-all group">
                            <Link href="/dashboard/mahasiswa">
                                <span className="text-gray-700 text-xs font-medium">Pendaftaran Mahasiswa Resmi</span>
                                <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                        </Button>
                        <Button variant="outline" asChild className="w-full justify-between hover:bg-teal-50/40 border-gray-200 transition-all group">
                            <Link href="/dashboard/anggota">
                                <span className="text-gray-700 text-xs font-medium">Validasi Anggota Baru</span>
                                <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                        </Button>
                        <Button variant="outline" asChild className="w-full justify-between hover:bg-teal-50/40 border-gray-200 transition-all group">
                            <Link href="/dashboard/list-anggota">
                                <span className="text-gray-700 text-xs font-medium">Cetak Laporan Rekapitulasi</span>
                                <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                        </Button>
                    </CardContent>
                    <div className="p-6 pt-0 text-[11px] text-gray-400 text-center border-t border-gray-50 mt-4 py-3 bg-gray-50/50 rounded-b-2xl">
                        Sistem Informasi Pengelolaan UKM POLIBAN
                    </div>
                </Card>
            </div>
        </div>
    );
}
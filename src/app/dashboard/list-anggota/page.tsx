"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowLeft, Users, Search, Filter } from "lucide-react";
import { api } from "~/trpc/react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "~/components/ui/table";

export default function ListSemuaAnggotaPage() {
    const { data: rekapAnggota, isLoading } = api.pendaftaran.getRekapAnggota.useQuery();
    const [searchQuery, setSearchQuery] = useState("");

    // Menggunakan useMemo agar filtering hanya berjalan saat data atau query berubah
    const filteredData = useMemo(() => {
        if (!rekapAnggota) return [];
        return rekapAnggota.filter((item) =>
            item.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.nim.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.ukm.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [rekapAnggota, searchQuery]);

    return (
        <div className="w-full max-w-5xl mx-auto space-y-6">

            {/* TOP HEADER */}
            <div className="flex items-center gap-3 border-b border-gray-100 pb-5">
                <Button variant="outline" size="icon" asChild className="h-8 w-8 rounded-lg border-gray-200">
                    <Link href="/dashboard">
                        <ArrowLeft className="w-4 h-4 text-gray-500" />
                    </Link>
                </Button>
                <div>
                    <h1 className="text-xl font-bold tracking-tight text-gray-900">Daftar Seluruh Anggota UKM</h1>
                    <p className="text-xs text-gray-500">Rekapitulasi lengkap mahasiswa yang tergabung dalam UKM POLIBAN.</p>
                </div>
            </div>

            {/* KONTROL TABEL & FILTER */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                        <Filter className="w-4 h-4 text-teal-600" />
                        <span>Filter Anggota</span>
                    </div>
                    <div className="relative w-full sm:w-80">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                            placeholder="Cari NIM, Nama, atau UKM..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-9 h-9 text-xs border-gray-200 bg-white"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-gray-50/20">
                                <TableHead className="w-[50px] text-center text-xs">No</TableHead>
                                <TableHead className="w-[140px] text-xs">NIM</TableHead>
                                <TableHead className="text-xs">Nama Mahasiswa</TableHead>
                                <TableHead className="text-xs">Program Studi</TableHead>
                                <TableHead className="text-xs">Organisasi UKM</TableHead>
                                <TableHead className="w-[150px] text-xs">Disetujui Oleh</TableHead>
                                <TableHead className="w-[120px] text-xs">Tanggal Gabung</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {isLoading ? (
                                <TableRow>
                                    <TableCell colSpan={7} className="h-40 text-center">
                                        <div className="flex flex-col items-center justify-center text-gray-400 gap-3">
                                            <Users className="w-8 h-8 animate-pulse text-gray-300" />
                                            <span className="text-xs font-medium">Memuat data anggota...</span>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ) : filteredData.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={7} className="h-24 text-center text-xs text-gray-500 italic">
                                        Tidak ada data yang cocok dengan pencarian "{searchQuery}"
                                    </TableCell>
                                </TableRow>
                            ) : (
                                filteredData.map((item, index) => (
                                    <TableRow key={item.id} className="hover:bg-gray-50/60 transition-colors">
                                        <TableCell className="text-center text-xs text-gray-400">{index + 1}</TableCell>
                                        <TableCell className="font-mono text-xs font-bold text-gray-700">{item.nim}</TableCell>
                                        <TableCell className="font-medium text-sm text-gray-900">{item.nama}</TableCell>
                                        <TableCell className="text-xs text-gray-600">{item.prodi}</TableCell>
                                        <TableCell>
                                            <span className="bg-teal-50 text-teal-700 text-xs px-2.5 py-1 rounded-md font-medium border border-teal-100">
                                                {item.ukm}
                                            </span>
                                        </TableCell>
                                        <TableCell className="text-xs text-gray-600">{item.disetujui}</TableCell>
                                        <TableCell className="text-xs text-gray-500">{item.tanggal}</TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>

                {/* Footer Informasi */}
                <div className="px-4 py-3 bg-gray-50 border-t border-gray-100 text-[11px] text-gray-500 font-medium">
                    Menampilkan {filteredData.length} dari {rekapAnggota?.length ?? 0} total anggota
                </div>
            </div>
        </div>
    );
}
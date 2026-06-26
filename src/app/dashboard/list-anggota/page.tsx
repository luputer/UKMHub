"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowLeft, Users, Search, Filter, ChevronDown, FileSpreadsheet, Printer, SlidersHorizontal } from "lucide-react";
import { api } from "~/trpc/react";
import { exportToExcel, triggerPrint } from "~/lib/export-utils";
import { toast } from "sonner";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

export default function ListSemuaAnggotaPage() {
  const { data: rekapAnggota, isLoading } =
    api.pendaftaran.getRekapAnggota.useQuery();
  const [searchQuery, setSearchQuery] = useState("");

  // Menggunakan useMemo agar filtering hanya berjalan saat data atau query berubah
  const filteredData = useMemo(() => {
    if (!rekapAnggota) return [];
    return rekapAnggota.filter(
      (item) =>
        item.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.nim.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.ukm.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [rekapAnggota, searchQuery]);

  // Handler Export Excel
  const handleExportExcel = () => {
    if (!filteredData.length) {
      toast.error("Tidak ada data untuk di-export!");
      return;
    }
    const exportData = filteredData.map((item, index) => ({
      No: index + 1,
      NIM: item.nim,
      "Nama Lengkap": item.nama,
      "Program Studi": item.prodi,
      UKM: item.ukm,
      "Disetujui Oleh": item.disetujui,
      "Tanggal Gabung": item.tanggal,
    }));
    exportToExcel(exportData, "data-anggota-ukm-poliban", "Data Anggota UKM");
    toast.success("File Excel berhasil didownload!");
  };

  return (
    <div className="mx-auto w-full max-w-5xl space-y-6">
      {/* TOP HEADER */}
      <div className="flex items-center gap-3 border-b border-gray-100 pb-5">
        <Button
          variant="outline"
          size="icon"
          asChild
          className="h-8 w-8 rounded-lg border-gray-200"
        >
          <Link href="/dashboard">
            <ArrowLeft className="h-4 w-4 text-gray-500" />
          </Link>
        </Button>
        <div>
          <h1 className="text-xl font-bold tracking-tight text-gray-900">
            Daftar Seluruh Anggota UKM
          </h1>
          <p className="text-xs text-gray-500">
            Rekapitulasi lengkap mahasiswa yang tergabung dalam UKM POLIBAN.
          </p>
        </div>
      </div>

      {/* KONTROL TABEL & FILTER */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="flex flex-col items-center justify-between gap-4 border-b border-gray-100 bg-gray-50/50 p-4 sm:flex-row">
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <Filter className="h-4 w-4 text-teal-600" />
            <span>Filter Anggota</span>
          </div>
          <div className="flex flex-col items-center justify-between gap-2 w-full sm:flex-row sm:items-center sm:w-auto">
            <div className="relative w-full sm:w-80">
              <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Cari NIM, Nama, atau UKM..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-9 border-gray-200 bg-white pl-9 text-xs"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="gap-2 border-gray-200 text-xs text-gray-600 h-9"
                >
                  <SlidersHorizontal className="h-3.5 w-3.5 text-gray-400" />
                  Aksi Lainnya
                  <ChevronDown className="h-3.5 w-3.5 text-gray-400" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuLabel className="text-xs text-gray-400">
                  Opsi Export/Cetak
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleExportExcel} className="text-xs">
                  <FileSpreadsheet className="mr-2 h-3.5 w-3.5" />
                  Export ke Excel
                </DropdownMenuItem>
                <DropdownMenuItem onClick={triggerPrint} className="text-xs">
                  <Printer className="mr-2 h-3.5 w-3.5" />
                  Cetak Halaman
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50/20">
                <TableHead className="w-[50px] text-center text-xs">
                  No
                </TableHead>
                <TableHead className="w-[140px] text-xs">NIM</TableHead>
                <TableHead className="text-xs">Nama Mahasiswa</TableHead>
                <TableHead className="text-xs">Program Studi</TableHead>
                <TableHead className="text-xs">Organisasi UKM</TableHead>
                <TableHead className="w-[150px] text-xs">
                  Disetujui Oleh
                </TableHead>
                <TableHead className="w-[120px] text-xs">
                  Tanggal Gabung
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={7} className="h-40 text-center">
                    <div className="flex flex-col items-center justify-center gap-3 text-gray-400">
                      <Users className="h-8 w-8 animate-pulse text-gray-300" />
                      <span className="text-xs font-medium">
                        Memuat data anggota...
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
              ) : filteredData.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    className="h-24 text-center text-xs text-gray-500 italic"
                  >
                    Tidak ada data yang cocok dengan pencarian &quot;
                    {searchQuery}&quot;
                  </TableCell>
                </TableRow>
              ) : (
                filteredData.map((item, index) => (
                  <TableRow
                    key={item.id}
                    className="transition-colors hover:bg-gray-50/60"
                  >
                    <TableCell className="text-center text-xs text-gray-400">
                      {index + 1}
                    </TableCell>
                    <TableCell className="font-mono text-xs font-bold text-gray-700">
                      {item.nim}
                    </TableCell>
                    <TableCell className="text-sm font-medium text-gray-900">
                      {item.nama}
                    </TableCell>
                    <TableCell className="text-xs text-gray-600">
                      {item.prodi}
                    </TableCell>
                    <TableCell>
                      <span className="rounded-md border border-teal-100 bg-teal-50 px-2.5 py-1 text-xs font-medium text-teal-700">
                        {item.ukm}
                      </span>
                    </TableCell>
                    <TableCell className="text-xs text-gray-600">
                      {item.disetujui}
                    </TableCell>
                    <TableCell className="text-xs text-gray-500">
                      {item.tanggal}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

        {/* Footer Informasi */}
        <div className="border-t border-gray-100 bg-gray-50 px-4 py-3 text-[11px] font-medium text-gray-500">
          Menampilkan {filteredData.length} dari {rekapAnggota?.length ?? 0}{" "}
          total anggota
        </div>
      </div>
    </div>
  );
}

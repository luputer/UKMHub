"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Plus,
    Search,
    Trash2,
    Building2,
    ArrowUpDown,
    Pencil,
    FileSpreadsheet,
    Printer,
    SlidersHorizontal,
    ChevronDown,
} from "lucide-react";
import { toast } from "sonner";

import { api } from "~/trpc/react";
import { exportToExcel, triggerPrint } from "~/lib/export-utils";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "~/components/ui/table";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "~/components/ui/dropdown-menu";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "~/components/ui/alert-dialog";

export default function UkmPage() {
    const utils = api.useUtils();

    // Local States untuk Table Kontrol
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [limit] = useState(10);
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

    // State Kontrol Modal Dialog Hapus
    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const [selectedUkm, setSelectedUkm] = useState<{ id: string; namaUkm: string } | null>(null);

    // HTTP Queries via tRPC ukmRouter (Sesuaikan nama procedure di backend Anda jika berbeda)
    const { data: ukmList, isLoading } = api.ukm.getUkmList.useQuery({
        search: search || undefined,
    });

    // Mutasi Hapus UKM via tRPC
    const deleteMutation = api.ukm.deleteUkm.useMutation({
        onSuccess: async () => {
            toast.success("Organisasi UKM berhasil dihapus dari sistem.");
            await utils.ukm.getUkmList.invalidate();
            setIsAlertOpen(false);
            setSelectedUkm(null);
        },
        onError: (err) => {
            toast.error(`Gagal menghapus organisasi: ${err.message}`);
        }
    });

    const triggerDeleteConfirm = (id: string, namaUkm: string) => {
        setSelectedUkm({ id, namaUkm });
        setIsAlertOpen(true);
    };

    const handleExecuteDelete = () => {
        if (selectedUkm?.id) {
            deleteMutation.mutate({ id: selectedUkm.id });
        }
    };

    // Handler Export Excel
    const handleExportExcel = () => {
        if (!sortedUkm.length) {
            toast.error("Tidak ada data untuk di-export!");
            return;
        }
        const exportData = sortedUkm.map((item, index) => ({
            No: index + 1,
            "Kode UKM": item.kodeUkm,
            "Nama Organisasi UKM": item.namaUkm,
            Pembina: item.deskripsi ?? "-",
        }));
        exportToExcel(exportData, "data-ukm-poliban", "Data UKM");
        toast.success("File Excel berhasil didownload!");
    };

    // Logika Filter Sorting & Pagination Sisi Klien
    const sortedUkm = [...(ukmList ?? [])].sort((a, b) => {
        if (sortOrder === "asc") return a.namaUkm.localeCompare(b.namaUkm);
        return b.namaUkm.localeCompare(a.namaUkm);
    });

    const displayedUkm = sortedUkm.slice((page - 1) * limit, page * limit);
    const total = sortedUkm.length;
    const totalPages = Math.ceil(total / limit) || 1;

    return (
        <div className="w-full max-w-7xl mx-auto space-y-6">

            {/* HEADER SECTION */}
            <div className="flex flex-col gap-1 border-b border-gray-100 pb-5">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">Daftar Unit Kegiatan Mahasiswa (UKM)</h1>
                <p className="text-sm text-gray-500">Kelola direktori wadah organisasi dan unit kegiatan kemahasiswaan resmi POLIBAN.</p>
            </div>

           {/* TOOLBAR SECTION */}
            <div className="no-print flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                        placeholder="Cari nama organisasi UKM..."
                        value={search}
                        onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                        className="pl-9 bg-white border-gray-200 focus-visible:ring-teal-500/20 focus-visible:border-teal-500"
                    />
                </div>

                {/* Tombol Tambah dan Dropdown didekatkan di sini */}
                <div className="flex items-center gap-2">
                    <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white gap-1.5 font-medium shadow-sm">
                        <Link href="/dashboard/ukm/create">
                            <Plus className="w-4 h-4" />
                            Tambah UKM Baru
                        </Link>
                    </Button>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="border-gray-200 text-gray-600 gap-2 text-xs">
                                <SlidersHorizontal className="w-3.5 h-3.5 text-gray-400" />
                                Aksi Lainnya
                                <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-[200px]">
                            <DropdownMenuLabel className="text-xs text-gray-400">Opsi Export/Cetak</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={handleExportExcel} className="text-xs">
                                <FileSpreadsheet className="w-3.5 h-3.5 mr-2" />
                                Export ke Excel
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={triggerPrint} className="text-xs">
                                <Printer className="w-3.5 h-3.5 mr-2" />
                                Cetak Halaman
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            {/* TABLE CONTENT */}
            <div className="hidden sm:block w-full border border-gray-200/80 bg-white rounded-xl overflow-hidden shadow-sm">
                <Table>
                    <TableHeader className="bg-gray-50/70">
                        <TableRow className="border-b border-gray-200">
                            <TableHead className="w-[60px] text-center font-medium text-gray-400 text-xs">No</TableHead>
                            <TableHead className="w-[120px] font-medium text-gray-400 text-xs">Kode UKM</TableHead>
                            <TableHead>
                                <button
                                    onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                                    className="flex items-center gap-1.5 font-medium text-gray-500 hover:text-gray-950 transition-colors text-xs"
                                >
                                    Nama Organisasi UKM <ArrowUpDown className="w-3 h-3 text-gray-400" />
                                </button>
                            </TableHead>
                            <TableHead className="font-medium text-gray-400 text-xs">Pembina</TableHead>
                            <TableHead className="w-[120px] text-center font-medium text-gray-400 text-xs">Aksi</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {isLoading ? (
                            <TableRow>
                                <TableCell colSpan={5} className="h-32 text-center text-sm text-gray-400">Menghubungkan data direktori UKM...</TableCell>
                            </TableRow>
                        ) : displayedUkm.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={5} className="h-40 text-center">
                                    <span className="text-sm text-gray-400">Data organisasi UKM tidak ditemukan.</span>
                                </TableCell>
                            </TableRow>
                        ) : (
                            displayedUkm.map((item, index) => {
                                const rowNumber = (page - 1) * limit + index + 1;
                                return (
                                    <TableRow key={item.id} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                                        <TableCell className="text-center font-medium text-gray-400 text-xs">{rowNumber}</TableCell>
                                        <TableCell className="font-mono font-bold text-gray-600 text-xs uppercase">{item.kodeUkm}</TableCell>
                                        <TableCell className="font-medium text-gray-900 text-sm">
                                            <div className="flex items-center gap-2">
                                                <div className="p-1.5 bg-teal-50 rounded-md text-teal-600">
                                                    <Building2 className="w-3.5 h-3.5" />
                                                </div>
                                                {item.namaUkm}
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-gray-600 text-sm">{item.deskripsi ?? "-"}</TableCell>
                                        <TableCell className="text-center">
                                            <div className="flex items-center justify-center gap-1">
                                                <Button asChild variant="ghost" size="icon" className="h-8 w-8 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-md">
                                                    <Link href={`/dashboard/ukm/edit/${item.id}`}>
                                                        <Pencil className="w-3.5 h-3.5" />
                                                    </Link>
                                                </Button>
                                                <Button
                                                    onClick={() => triggerDeleteConfirm(item.id, item.namaUkm)}
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50 rounded-md"
                                                >
                                                    <Trash2 className="w-3.5 h-3.5" />
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                );
                            })
                        )}
                    </TableBody>
                </Table>

                {/* BOTTOM PAGINATION CONTROLS */}
                <div className="no-print flex items-center justify-between px-6 py-4 border-t border-gray-100 bg-gray-50/30">
                    <span className="text-xs text-gray-400">
                        Menampilkan <span className="font-semibold text-gray-700">{displayedUkm.length}</span> dari <span className="font-semibold text-gray-700">{total}</span> organisasi UKM
                    </span>
                    <div className="flex items-center gap-1.5">
                        <Button variant="outline" size="sm" className="text-xs border-gray-200 h-8" disabled={page === 1} onClick={() => setPage((p) => Math.max(p - 1, 1))}>Sebelumnya</Button>
                        <Button variant="outline" size="sm" className="text-xs border-gray-200 h-8" disabled={page === totalPages} onClick={() => setPage((p) => Math.min(p + 1, totalPages))}>Selanjutnya</Button>
                    </div>
                </div>
            </div>

            {/* SHADCN ALERT DIALOG */}
            <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
                <AlertDialogContent className="rounded-xl">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-gray-950 font-semibold">Hapus Organisasi Kemahasiswaan?</AlertDialogTitle>
                        <AlertDialogDescription className="text-gray-500 text-xs leading-normal">
                            Tindakan ini akan menghapus secara permanen struktur entitas kelompok organisasi bernama{" "}
                            <strong className="text-gray-900 font-medium">&quot;{selectedUkm?.namaUkm}&quot;</strong> beserta seluruh riwayat relasi anggotanya.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="gap-1.5 sm:gap-0">
                        <AlertDialogCancel className="border-gray-200 text-xs">Batal</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={handleExecuteDelete}
                            disabled={deleteMutation.isPending}
                            className="bg-red-600 hover:bg-red-700 text-white text-xs font-medium"
                        >
                            {deleteMutation.isPending ? "Menghapus..." : "Ya, Hapus Kelompok"}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

        </div>
    );
}
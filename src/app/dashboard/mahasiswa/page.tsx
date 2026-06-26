"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Plus,
    Search,
    SlidersHorizontal,
    Trash2,
    UserCheck,
    ChevronDown,
    ArrowUpDown,
    Pencil,
    FileSpreadsheet,
    Printer,
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
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem,
} from "~/components/ui/dropdown-menu";

// Import komponen AlertDialog Shadcn
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

export default function MahasiswaPage() {
    const utils = api.useUtils();

    // Local States untuk Table & Filter
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [limit] = useState(10);
    const [sortBy, setSortBy] = useState<"nama" | "nim">("nama");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

    const [jurusanFilter, setJurusanFilter] = useState<string>("ALL");
    const [registeredByFilter, setRegisteredByFilter] = useState<string>("ALL");

    // State untuk Kontrol Modal Hapus
    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const [selectedMhs, setSelectedMhs] = useState<{ id: string; nama: string } | null>(null);

    // HTTP Queries via tRPC
    const { data: mahasiswaList, isLoading } = api.mahasiswa.getMahasiswa.useQuery({
        search: search || undefined,
    });

    // Mutasi Delete via tRPC
    const deleteMutation = api.mahasiswa.deleteMahasiswa.useMutation({
        onSuccess: async () => {
            toast.success("Data mahasiswa berhasil dihapus resmi.");
            await utils.mahasiswa.getMahasiswa.invalidate();
            setIsAlertOpen(false);
            setSelectedMhs(null);
        },
        onError: (err) => {
            toast.error(`Gagal menghapus: ${err.message}`);
        }
    });

    const triggerDeleteConfirm = (id: string, nama: string) => {
        setSelectedMhs({ id, nama });
        setIsAlertOpen(true);
    };

    const handleExecuteDelete = () => {
        if (selectedMhs?.id) {
            deleteMutation.mutate({ id: selectedMhs.id });
        }
    };

    // Logika Filter, Sorting, & Pagination (Sisi Klien)
    const filteredMahasiswa = mahasiswaList?.filter((mhs) => {
        const matchJurusan = jurusanFilter === "ALL" || mhs.jurusan === jurusanFilter;
        const matchRegistrar = registeredByFilter === "ALL" || mhs.registeredBy === registeredByFilter;
        return matchJurusan && matchRegistrar;
    }) ?? [];

    const sortedMahasiswa = [...filteredMahasiswa].sort((a, b) => {
        const fieldA = a[sortBy].toLowerCase();
        const fieldB = b[sortBy].toLowerCase();
        if (sortOrder === "asc") return fieldA > fieldB ? 1 : -1;
        return fieldA < fieldB ? 1 : -1;
    });

    const displayedMahasiswa = sortedMahasiswa.slice((page - 1) * limit, page * limit);
    const total = sortedMahasiswa.length;
    const totalPages = Math.ceil(total / limit) || 1;

    const handleSort = (field: "nama" | "nim") => {
        if (sortBy === field) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            setSortBy(field);
            setSortOrder("asc");
        }
        setPage(1);
    };

    // Handler Export Excel
    const handleExportExcel = () => {
        if (!filteredMahasiswa.length) {
            toast.error("Tidak ada data untuk di-export!");
            return;
        }
        const exportData = filteredMahasiswa.map((item, index) => ({
            No: index + 1,
            NIM: item.nim,
            "Nama Lengkap": item.nama,
            Jurusan: item.jurusan,
            "Program Studi": item.prodi,
            "Didaftarkan Oleh": item.registeredBy,
        }));
        exportToExcel(exportData, "data-mahasiswa-poliban", "Data Mahasiswa");
        toast.success("File Excel berhasil didownload!");
    };

    return (
        <div className="w-full max-w-7xl mx-auto space-y-6">

            {/* HEADER SECTION */}
            <div className="flex flex-col gap-1 border-b border-gray-100 pb-5">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">Database Mahasiswa Resmi</h1>
                <p className="text-sm text-gray-500">Pantau dan kelola seluruh biodata akademik mahasiswa POLIBAN yang sah.</p>
            </div>

            {/* TOOLBAR SECTION */}
            <div className="no-print flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                        placeholder="Cari berdasarkan Nama atau NIM..."
                        value={search}
                        onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                        className="pl-9 bg-white border-gray-200 focus-visible:ring-teal-500/20 focus-visible:border-teal-500"
                    />
                </div>

                <div className="flex flex-wrap items-center gap-2">
                    <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white gap-1.5 font-medium shadow-sm">
                        <Link href="/dashboard/mahasiswa/create">
                            <Plus className="w-4 h-4" />
                            Tambah Mahasiswa
                        </Link>
                    </Button>
                    {/* Filter Jurusan */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="border-gray-200 text-gray-600 gap-2 text-xs">
                                <SlidersHorizontal className="w-3.5 h-3.5 text-gray-400" />
                                Jurusan: {jurusanFilter === "ALL" ? "Semua" : jurusanFilter}
                                <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-[200px]">
                            <DropdownMenuLabel className="text-xs text-gray-400">Pilih Jurusan</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuRadioGroup value={jurusanFilter} onValueChange={(v) => { setJurusanFilter(v); setPage(1); }}>
                                <DropdownMenuRadioItem value="ALL" className="text-xs">Semua Jurusan</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="Teknik Elektro" className="text-xs">Teknik Elektro</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="Informatika" className="text-xs">Informatika</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="Akuntansi" className="text-xs">Akuntansi</DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Filter Otoritas */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="border-gray-200 text-gray-600 gap-2 text-xs">
                                Otoritas: {registeredByFilter === "ALL" ? "Semua" : registeredByFilter}
                                <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-[220px]">
                            <DropdownMenuLabel className="text-xs text-gray-400">Otoritas Penginput</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuRadioGroup value={registeredByFilter} onValueChange={(v) => { setRegisteredByFilter(v); setPage(1); }}>
                                <DropdownMenuRadioItem value="ALL" className="text-xs">Semua Otoritas</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="Wakil Direktur III" className="text-xs">Wakil Direktur III</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="Kepala Bagian Akademik" className="text-xs">Kepala Bagian Akademik</DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>

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
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild className="bg-teal-600 hover:bg-teal-700 text-white text-xs gap-1.5 font-medium shadow-sm">
                                <Link href="/dashboard/mahasiswa/create">
                                    <Plus className="w-4 h-4" />
                                    Registrasi Mahasiswa
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            {/* TABLE DATA CONTAINER */}
            <div className="hidden sm:block w-full border border-gray-200/80 bg-white rounded-xl overflow-hidden shadow-sm">
                <Table>
                    <TableHeader className="bg-gray-50/70">
                        <TableRow className="border-b border-gray-200">
                            <TableHead className="w-[60px] text-center font-medium text-gray-400 text-xs">No</TableHead>
                            <TableHead className="w-[160px]">
                                <button onClick={() => handleSort("nim")} className="flex items-center gap-1.5 font-medium text-gray-500 hover:text-gray-950 transition-colors text-xs">
                                    NIM <ArrowUpDown className="w-3 h-3 text-gray-400" />
                                </button>
                            </TableHead>
                            <TableHead>
                                <button onClick={() => handleSort("nama")} className="flex items-center gap-1.5 font-medium text-gray-500 hover:text-gray-950 transition-colors text-xs">
                                    Nama Lengkap <ArrowUpDown className="w-3 h-3 text-gray-400" />
                                </button>
                            </TableHead>
                            <TableHead className="font-medium text-gray-400 text-xs">Jurusan</TableHead>
                            <TableHead className="font-medium text-gray-400 text-xs">Program Studi</TableHead>
                            <TableHead className="font-medium text-gray-400 text-xs">Didaftarkan Oleh</TableHead>
                            <TableHead className="w-[100px] text-center font-medium text-gray-400 text-xs">Aksi</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {isLoading ? (
                            <TableRow>
                                <TableCell colSpan={7} className="h-32 text-center text-sm text-gray-400">Memuat data mahasiswa...</TableCell>
                            </TableRow>
                        ) : displayedMahasiswa.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={7} className="h-40 text-center">
                                    <span className="text-sm text-gray-400">Data mahasiswa tidak ditemukan.</span>
                                </TableCell>
                            </TableRow>
                        ) : (
                            displayedMahasiswa.map((item, index) => {
                                const rowNumber = (page - 1) * limit + index + 1;
                                return (
                                    <TableRow key={item.id} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                                        <TableCell className="text-center font-medium text-gray-400 text-xs">{rowNumber}</TableCell>
                                        <TableCell className="font-mono font-semibold text-gray-700 text-xs">{item.nim}</TableCell>
                                        <TableCell className="font-medium text-gray-900 text-sm">{item.nama}</TableCell>
                                        <TableCell className="text-gray-600 text-xs">{item.jurusan}</TableCell>
                                        <TableCell className="text-gray-600 text-xs">{item.prodi}</TableCell>
                                        <TableCell>
                                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-gray-100 text-gray-700">
                                                <UserCheck className="w-3 h-3 text-gray-400" /> {item.registeredBy}
                                            </span>
                                        </TableCell>
                                        <TableCell className="text-center">
                                            <div className="flex items-center justify-center gap-1">
                                                <Button asChild variant="ghost" size="icon" className="h-8 w-8 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-md">
                                                    <Link href={`/dashboard/mahasiswa/edit/${item.id}`}>
                                                        <Pencil className="w-3.5 h-3.5" />
                                                    </Link>
                                                </Button>
                                                <Button
                                                    onClick={() => triggerDeleteConfirm(item.id, item.nama)}
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

                {/* BOTTOM PAGINATION */}
                <div className="no-print flex items-center justify-between px-6 py-4 border-t border-gray-100 bg-gray-50/30">
                    <span className="text-xs text-gray-400">
                        Menampilkan <span className="font-semibold text-gray-700">{displayedMahasiswa.length}</span> dari <span className="font-semibold text-gray-700">{total}</span> mahasiswa
                    </span>
                    <div className="flex items-center gap-1.5">
                        <Button variant="outline" size="sm" className="text-xs border-gray-200 h-8" disabled={page === 1} onClick={() => setPage((p) => Math.max(p - 1, 1))}>Sebelumnya</Button>
                        <Button variant="outline" size="sm" className="text-xs border-gray-200 h-8" disabled={page === totalPages} onClick={() => setPage((p) => Math.min(p + 1, totalPages))}>Selanjutnya</Button>
                    </div>
                </div>
            </div>

            {/* MODAL CONFIGURATION (Pure Shadcn AlertDialog) */}
            <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
                <AlertDialogContent className="rounded-xl">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-gray-950 font-semibold">Apakah Anda benar-benar yakin?</AlertDialogTitle>
                        <AlertDialogDescription className="text-gray-500 text-xs leading-normal">
                            Tindakan ini akan menghapus permanen data berkas akademik mahasiswa bernama{" "}
                            <strong className="text-gray-900 font-medium">&quot;{selectedMhs?.nama}&quot;</strong> dari database resmi POLIBAN.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="gap-1.5sm:gap-0">
                        <AlertDialogCancel className="border-gray-200 text-xs">Batal</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={handleExecuteDelete}
                            disabled={deleteMutation.isPending}
                            className="bg-red-600 hover:bg-red-700 text-white text-xs font-medium"
                        >
                            {deleteMutation.isPending ? "Menghapus..." : "Ya, Hapus Permanen"}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

        </div>
    );
}
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
  const [selectedMhs, setSelectedMhs] = useState<{
    id: string;
    nama: string;
  } | null>(null);

  // HTTP Queries via tRPC
  const { data: mahasiswaList, isLoading } =
    api.mahasiswa.getMahasiswa.useQuery({
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
    },
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
  const filteredMahasiswa =
    mahasiswaList?.filter((mhs) => {
      const matchJurusan =
        jurusanFilter === "ALL" || mhs.jurusan === jurusanFilter;
      const matchRegistrar =
        registeredByFilter === "ALL" || mhs.registeredBy === registeredByFilter;
      return matchJurusan && matchRegistrar;
    }) ?? [];

  const sortedMahasiswa = [...filteredMahasiswa].sort((a, b) => {
    const fieldA = a[sortBy].toLowerCase();
    const fieldB = b[sortBy].toLowerCase();
    if (sortOrder === "asc") return fieldA > fieldB ? 1 : -1;
    return fieldA < fieldB ? 1 : -1;
  });

  const displayedMahasiswa = sortedMahasiswa.slice(
    (page - 1) * limit,
    page * limit,
  );
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
    <div className="mx-auto w-full max-w-7xl space-y-6">
      {/* HEADER SECTION */}
      <div className="flex flex-col gap-1 border-b border-gray-100 pb-5">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          Database Mahasiswa Resmi
        </h1>
        <p className="text-sm text-gray-500">
          Pantau dan kelola seluruh biodata akademik mahasiswa POLIBAN yang sah.
        </p>
      </div>

      {/* TOOLBAR SECTION */}
      <div className="no-print flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-sm flex-1">
          <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Cari berdasarkan Nama atau NIM..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="border-gray-200 bg-white pl-9 focus-visible:border-teal-500 focus-visible:ring-teal-500/20"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Button
            asChild
            className="gap-1.5 bg-teal-600 font-medium text-white shadow-sm hover:bg-teal-700"
          >
            <Link href="/dashboard/mahasiswa/create">
              <Plus className="h-4 w-4" />
              Tambah Mahasiswa
            </Link>
          </Button>
          {/* Filter Jurusan */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="gap-2 border-gray-200 text-xs text-gray-600"
              >
                <SlidersHorizontal className="h-3.5 w-3.5 text-gray-400" />
                Jurusan: {jurusanFilter === "ALL" ? "Semua" : jurusanFilter}
                <ChevronDown className="h-3.5 w-3.5 text-gray-400" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuLabel className="text-xs text-gray-400">
                Pilih Jurusan
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={jurusanFilter}
                onValueChange={(v) => {
                  setJurusanFilter(v);
                  setPage(1);
                }}
              >
                <DropdownMenuRadioItem value="ALL" className="text-xs">
                  Semua Jurusan
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value="Teknik Elektro"
                  className="text-xs"
                >
                  Teknik Elektro
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Informatika" className="text-xs">
                  Informatika
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Akuntansi" className="text-xs">
                  Akuntansi
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Filter Otoritas */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="gap-2 border-gray-200 text-xs text-gray-600"
              >
                Otoritas:{" "}
                {registeredByFilter === "ALL" ? "Semua" : registeredByFilter}
                <ChevronDown className="h-3.5 w-3.5 text-gray-400" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[220px]">
              <DropdownMenuLabel className="text-xs text-gray-400">
                Otoritas Penginput
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={registeredByFilter}
                onValueChange={(v) => {
                  setRegisteredByFilter(v);
                  setPage(1);
                }}
              >
                <DropdownMenuRadioItem value="ALL" className="text-xs">
                  Semua Otoritas
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value="Wakil Direktur III"
                  className="text-xs"
                >
                  Wakil Direktur III
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value="Kepala Bagian Akademik"
                  className="text-xs"
                >
                  Kepala Bagian Akademik
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="gap-2 border-gray-200 text-xs text-gray-600"
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
              <DropdownMenuSeparator />
              <DropdownMenuItem
                asChild
                className="gap-1.5 bg-teal-600 text-xs font-medium text-white shadow-sm hover:bg-teal-700"
              >
                <Link href="/dashboard/mahasiswa/create">
                  <Plus className="h-4 w-4" />
                  Registrasi Mahasiswa
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* TABLE DATA CONTAINER */}
      <div className="hidden w-full overflow-hidden rounded-xl border border-gray-200/80 bg-white shadow-sm sm:block">
        <Table>
          <TableHeader className="bg-gray-50/70">
            <TableRow className="border-b border-gray-200">
              <TableHead className="w-[60px] text-center text-xs font-medium text-gray-400">
                No
              </TableHead>
              <TableHead className="w-[160px]">
                <button
                  onClick={() => handleSort("nim")}
                  className="flex items-center gap-1.5 text-xs font-medium text-gray-500 transition-colors hover:text-gray-950"
                >
                  NIM <ArrowUpDown className="h-3 w-3 text-gray-400" />
                </button>
              </TableHead>
              <TableHead>
                <button
                  onClick={() => handleSort("nama")}
                  className="flex items-center gap-1.5 text-xs font-medium text-gray-500 transition-colors hover:text-gray-950"
                >
                  Nama Lengkap <ArrowUpDown className="h-3 w-3 text-gray-400" />
                </button>
              </TableHead>
              <TableHead className="text-xs font-medium text-gray-400">
                Jurusan
              </TableHead>
              <TableHead className="text-xs font-medium text-gray-400">
                Program Studi
              </TableHead>
              <TableHead className="text-xs font-medium text-gray-400">
                Didaftarkan Oleh
              </TableHead>
              <TableHead className="w-[100px] text-center text-xs font-medium text-gray-400">
                Aksi
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell
                  colSpan={7}
                  className="h-32 text-center text-sm text-gray-400"
                >
                  Memuat data mahasiswa...
                </TableCell>
              </TableRow>
            ) : displayedMahasiswa.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="h-40 text-center">
                  <span className="text-sm text-gray-400">
                    Data mahasiswa tidak ditemukan.
                  </span>
                </TableCell>
              </TableRow>
            ) : (
              displayedMahasiswa.map((item, index) => {
                const rowNumber = (page - 1) * limit + index + 1;
                return (
                  <TableRow
                    key={item.id}
                    className="border-b border-gray-100 transition-colors hover:bg-gray-50/50"
                  >
                    <TableCell className="text-center text-xs font-medium text-gray-400">
                      {rowNumber}
                    </TableCell>
                    <TableCell className="font-mono text-xs font-semibold text-gray-700">
                      {item.nim}
                    </TableCell>
                    <TableCell className="text-sm font-medium text-gray-900">
                      {item.nama}
                    </TableCell>
                    <TableCell className="text-xs text-gray-600">
                      {item.jurusan}
                    </TableCell>
                    <TableCell className="text-xs text-gray-600">
                      {item.prodi}
                    </TableCell>
                    <TableCell>
                      <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-gray-700">
                        <UserCheck className="h-3 w-3 text-gray-400" />{" "}
                        {item.registeredBy}
                      </span>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Button
                          asChild
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-md text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                        >
                          <Link href={`/dashboard/mahasiswa/edit/${item.id}`}>
                            <Pencil className="h-3.5 w-3.5" />
                          </Link>
                        </Button>
                        <Button
                          onClick={() =>
                            triggerDeleteConfirm(item.id, item.nama)
                          }
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-md text-red-500 hover:bg-red-50 hover:text-red-600"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
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
        <div className="no-print flex items-center justify-between border-t border-gray-100 bg-gray-50/30 px-6 py-4">
          <span className="text-xs text-gray-400">
            Menampilkan{" "}
            <span className="font-semibold text-gray-700">
              {displayedMahasiswa.length}
            </span>{" "}
            dari <span className="font-semibold text-gray-700">{total}</span>{" "}
            mahasiswa
          </span>
          <div className="flex items-center gap-1.5">
            <Button
              variant="outline"
              size="sm"
              className="h-8 border-gray-200 text-xs"
              disabled={page === 1}
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
            >
              Sebelumnya
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-8 border-gray-200 text-xs"
              disabled={page === totalPages}
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            >
              Selanjutnya
            </Button>
          </div>
        </div>
      </div>

      {/* MODAL CONFIGURATION (Pure Shadcn AlertDialog) */}
      <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
        <AlertDialogContent className="rounded-xl">
          <AlertDialogHeader>
            <AlertDialogTitle className="font-semibold text-gray-950">
              Apakah Anda benar-benar yakin?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-xs leading-normal text-gray-500">
              Tindakan ini akan menghapus permanen data berkas akademik
              mahasiswa bernama{" "}
              <strong className="font-medium text-gray-900">
                &quot;{selectedMhs?.nama}&quot;
              </strong>{" "}
              dari database resmi POLIBAN.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="gap-1.5 sm:gap-0">
            <AlertDialogCancel className="border-gray-200 text-xs">
              Batal
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleExecuteDelete}
              disabled={deleteMutation.isPending}
              className="bg-red-600 text-xs font-medium text-white hover:bg-red-700"
            >
              {deleteMutation.isPending ? "Menghapus..." : "Ya, Hapus Permanen"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

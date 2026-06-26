"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle,
  Filter,
  Pencil,
  Search,
  Trash2,
  UserCheck,
} from "lucide-react";
import { toast } from "sonner";

import { api } from "~/trpc/react";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

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

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";

export default function DaftarAnggotaPage() {
  const utils = api.useUtils();

  // ─── LOCAL STATES FORM ──────────────────────────────────────────────────
  const [mahasiswaId, setMahasiswaId] = useState("");
  const [ukmId, setUkmId] = useState("");
  const [approvedBy, setApprovedBy] = useState<"Ketua UKM" | "Sekretaris UKM">(
    "Ketua UKM",
  );

  const [searchMahasiswa, setSearchMahasiswa] = useState("");
  const [isMahasiswaOpen, setIsMahasiswaOpen] = useState(false);

  const [searchUkm, setSearchUkm] = useState("");
  const [isUkmOpen, setIsUkmOpen] = useState(false);

  const [searchTable, setSearchTable] = useState("");

  // ─── STATE MODALS ───────────────────────────────────────────────────────
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedEditItem, setSelectedEditItem] = useState<{
    id: string;
    approvedBy: "Ketua UKM" | "Sekretaris UKM";
  } | null>(null);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // ─── DATA FETCHING ──────────────────────────────────────────────────────
  const { data: mahasiswaList } = api.mahasiswa.getMahasiswa.useQuery({
    search: searchMahasiswa || undefined,
  });
  const { data: ukmList } = api.ukm.getUkmList.useQuery({
    search: searchUkm || undefined,
  });
  const { data: rekapAnggota, isLoading: loadingRekap } =
    api.pendaftaran.getRekapAnggota.useQuery();

  // ─── MUTATIONS ──────────────────────────────────────────────────────────
  const daftarMutation = api.pendaftaran.daftarUkm.useMutation({
    onSuccess: async () => {
      toast.success("Anggota baru berhasil didaftarkan ke UKM!");
      setMahasiswaId("");
      setUkmId("");
      setSearchMahasiswa("");
      setSearchUkm("");
      await utils.pendaftaran.getRekapAnggota.invalidate();
    },
    onError: (err) => toast.error(err.message),
  });

  const updateMutation = api.pendaftaran.updatePendaftaran.useMutation({
    onSuccess: async () => {
      toast.success("Pejabat pengesah berhasil diperbarui!");
      setIsEditModalOpen(false);
      setSelectedEditItem(null);
      await utils.pendaftaran.getRekapAnggota.invalidate();
    },
    onError: (err) => {
      toast.error(`Gagal memperbarui: ${err.message}`);
    },
  });

  const deleteMutation = api.pendaftaran.cancelPendaftaran.useMutation({
    onSuccess: async () => {
      toast.success("Keanggotaan berhasil dicabut.");
      setIsAlertOpen(false);
      setSelectedId(null);
      await utils.pendaftaran.getRekapAnggota.invalidate();
    },
    onError: (err) => {
      toast.error(`Gagal mencabut anggota: ${err.message}`);
    },
  });

  // ─── HANDLERS ───────────────────────────────────────────────────────────
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mahasiswaId || !ukmId) {
      toast.error("Pilih mahasiswa dan UKM terlebih dahulu dari daftar.");
      return;
    }

    const mahasiswaTerpilih = mahasiswaList?.find((m) => m.id === mahasiswaId);
    const sudahTerdaftar = rekapAnggota?.some(
      (item) => item.nim === mahasiswaTerpilih?.nim,
    );

    if (sudahTerdaftar) {
      toast.error(
        `Mahasiswa dengan NIM ${mahasiswaTerpilih?.nim} sudah terdaftar di UKM.`,
      );
      return;
    }

    daftarMutation.mutate({ mahasiswaId, ukmId, approvedBy });
  };

  const filteredRekap = rekapAnggota?.filter(
    (item) =>
      item.nama.toLowerCase().includes(searchTable.toLowerCase()) ||
      item.nim.toLowerCase().includes(searchTable.toLowerCase()) ||
      item.ukm.toLowerCase().includes(searchTable.toLowerCase()),
  );

  return (
    <div className="mx-auto w-full max-w-7xl space-y-6">
      <div className="border-border flex items-start gap-3 border-b pb-5">
        <Button
          variant="outline"
          size="icon"
          asChild
          className="border-border h-9 w-9 rounded-md"
        >
          <Link href="/dashboard" aria-label="Kembali ke dashboard">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div className="min-w-0">
          <h1 className="text-foreground text-2xl font-semibold tracking-tight">
            Validasi & Pendaftaran Anggota
          </h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Daftarkan mahasiswa ke UKM dan kelola pejabat pengesah keanggotaan.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)]">
        <Card className="border-border rounded-lg shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base font-semibold">
              <UserCheck className="text-primary h-4 w-4" />
              Form Keanggotaan
            </CardTitle>
            <CardDescription className="text-sm">
              Pilih mahasiswa, UKM tujuan, dan otoritas pengesah sebelum
              menyimpan.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="mahasiswa-search">Cari Mahasiswa</Label>
                <Input
                  id="mahasiswa-search"
                  placeholder="Ketik nama atau NIM mahasiswa"
                  value={searchMahasiswa}
                  onChange={(e) => {
                    setSearchMahasiswa(e.target.value);
                    setIsMahasiswaOpen(true);
                    setMahasiswaId("");
                  }}
                  onFocus={() => setIsMahasiswaOpen(true)}
                  onBlur={() =>
                    setTimeout(() => setIsMahasiswaOpen(false), 200)
                  }
                  className="bg-card"
                />
                {isMahasiswaOpen && (
                  <div className="relative">
                    <div className="border-border bg-popover absolute z-50 max-h-44 w-full overflow-y-auto rounded-md border p-1 shadow-lg">
                      {mahasiswaList?.length ? (
                        mahasiswaList.map((m) => (
                          <button
                            key={m.id}
                            type="button"
                            onMouseDown={() => {
                              setMahasiswaId(m.id);
                              setSearchMahasiswa(`${m.nim} - ${m.nama}`);
                            }}
                            className="hover:bg-muted flex w-full cursor-pointer flex-col rounded-md px-3 py-2 text-left text-sm transition-colors"
                          >
                            <span className="text-foreground font-medium">
                              {m.nama}
                            </span>
                            <span className="text-muted-foreground font-mono text-xs">
                              {m.nim}
                            </span>
                          </button>
                        ))
                      ) : (
                        <div className="text-muted-foreground px-3 py-2 text-sm">
                          Mahasiswa tidak ditemukan.
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="ukm-search">Cari UKM</Label>
                <Input
                  id="ukm-search"
                  placeholder="Ketik nama UKM"
                  value={searchUkm}
                  onChange={(e) => {
                    setSearchUkm(e.target.value);
                    setIsUkmOpen(true);
                    setUkmId("");
                  }}
                  onFocus={() => setIsUkmOpen(true)}
                  onBlur={() => setTimeout(() => setIsUkmOpen(false), 200)}
                  className="bg-card"
                />
                {isUkmOpen && (
                  <div className="relative">
                    <div className="border-border bg-popover absolute z-50 max-h-44 w-full overflow-y-auto rounded-md border p-1 shadow-lg">
                      {ukmList?.length ? (
                        ukmList.map((u) => (
                          <button
                            key={u.id}
                            type="button"
                            onMouseDown={() => {
                              setUkmId(u.id);
                              setSearchUkm(u.namaUkm);
                            }}
                            className="hover:bg-muted flex w-full cursor-pointer flex-col rounded-md px-3 py-2 text-left text-sm transition-colors"
                          >
                            <span className="text-foreground font-medium">
                              {u.namaUkm}
                            </span>
                            <span className="text-muted-foreground font-mono text-xs">
                              {u.kodeUkm}
                            </span>
                          </button>
                        ))
                      ) : (
                        <div className="text-muted-foreground px-3 py-2 text-sm">
                          UKM tidak ditemukan.
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="approved-by">Disetujui Oleh</Label>
                <Select
                  value={approvedBy}
                  onValueChange={(value) =>
                    setApprovedBy(value as "Ketua UKM" | "Sekretaris UKM")
                  }
                >
                  <SelectTrigger id="approved-by" className="bg-card">
                    <SelectValue placeholder="Pilih pejabat pengesah" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Ketua UKM">Ketua UKM</SelectItem>
                    <SelectItem value="Sekretaris UKM">
                      Sekretaris UKM
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                disabled={daftarMutation.isPending}
                className="w-full"
              >
                <CheckCircle className="h-4 w-4" />
                {daftarMutation.isPending
                  ? "Mendaftarkan..."
                  : "Daftarkan Anggota"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="border-border rounded-lg shadow-sm">
          <CardHeader>
            <CardTitle className="text-base font-semibold">
              Aturan Validasi
            </CardTitle>
            <CardDescription className="text-sm">
              Ketentuan ini menjaga data anggota tetap rapi dan tidak ganda.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-3 text-sm">
            <div className="border-border bg-muted/40 flex gap-3 rounded-md border p-3">
              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
              <span>1 mahasiswa hanya boleh terdaftar di 1 UKM.</span>
            </div>
            <div className="border-border bg-muted/40 flex gap-3 rounded-md border p-3">
              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
              <span>
                Hanya Ketua atau Sekretaris UKM yang dapat menjadi pengesah.
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="border-border bg-card overflow-hidden rounded-lg border shadow-sm">
        <div className="border-border bg-muted/40 flex flex-col gap-3 border-b p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-foreground flex items-center gap-2 text-sm font-semibold">
            <Filter className="text-primary h-4 w-4" />
            <span>Data Transaksi</span>
          </div>
          <div className="relative w-full sm:w-80">
            <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
            <Input
              className="bg-card h-9 pl-9 text-sm"
              placeholder="Cari NIM, nama, atau UKM..."
              value={searchTable}
              onChange={(e) => setSearchTable(e.target.value)}
            />
          </div>
        </div>
        <Table>
          <TableHeader className="bg-muted/30">
            <TableRow>
              <TableHead className="text-muted-foreground w-[64px] text-center text-xs">
                No
              </TableHead>
              <TableHead className="text-muted-foreground w-[140px] text-xs">
                NIM
              </TableHead>
              <TableHead className="text-muted-foreground text-xs">
                Nama
              </TableHead>
              <TableHead className="text-muted-foreground text-xs">
                UKM
              </TableHead>
              <TableHead className="text-muted-foreground w-[120px] text-center text-xs">
                Aksi
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loadingRekap ? (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-muted-foreground h-32 text-center text-sm"
                >
                  Memuat data transaksi anggota...
                </TableCell>
              </TableRow>
            ) : filteredRekap?.length ? (
              filteredRekap.map((item, index) => (
                <TableRow key={item.id} className="hover:bg-muted/50">
                  <TableCell className="text-muted-foreground text-center text-xs font-medium">
                    {index + 1}
                  </TableCell>
                  <TableCell className="text-foreground font-mono text-xs font-semibold">
                    {item.nim}
                  </TableCell>
                  <TableCell className="text-foreground font-medium">
                    {item.nama}
                  </TableCell>
                  <TableCell>
                    <span className="bg-accent text-accent-foreground inline-flex items-center rounded-md px-2 py-1 text-xs font-medium">
                      {item.ukm}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-center gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-primary hover:bg-secondary h-8 w-8"
                        onClick={() => {
                          setSelectedEditItem({
                            id: item.id,
                            approvedBy: item.disetujui as
                              | "Ketua UKM"
                              | "Sekretaris UKM",
                          });
                          setIsEditModalOpen(true);
                        }}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-destructive hover:bg-destructive/10 h-8 w-8"
                        onClick={() => {
                          setSelectedId(item.id);
                          setIsAlertOpen(true);
                        }}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-muted-foreground h-32 text-center text-sm"
                >
                  Belum ada data anggota yang cocok.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="border-border bg-muted/30 text-muted-foreground border-t px-4 py-3 text-xs font-medium">
          Menampilkan {filteredRekap?.length ?? 0} transaksi anggota
        </div>
      </div>

      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="rounded-lg">
          <DialogHeader>
            <DialogTitle>Edit Pengesah</DialogTitle>
            <DialogDescription>
              Perbarui pejabat yang mengesahkan status keanggotaan.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-2">
            <Label htmlFor="edit-approved-by">Disetujui Oleh</Label>
            <Select
              value={selectedEditItem?.approvedBy}
              onValueChange={(v) =>
                setSelectedEditItem((prev) =>
                  prev
                    ? {
                        ...prev,
                        approvedBy: v as "Ketua UKM" | "Sekretaris UKM",
                      }
                    : null,
                )
              }
            >
              <SelectTrigger id="edit-approved-by">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Ketua UKM">Ketua UKM</SelectItem>
                <SelectItem value="Sekretaris UKM">Sekretaris UKM</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <DialogFooter>
            <Button
              onClick={() =>
                selectedEditItem &&
                updateMutation.mutate({
                  id: selectedEditItem.id,
                  approvedBy: selectedEditItem.approvedBy,
                })
              }
              disabled={!selectedEditItem || updateMutation.isPending}
            >
              {updateMutation.isPending ? "Menyimpan..." : "Simpan Perubahan"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
        <AlertDialogContent className="rounded-lg">
          <AlertDialogHeader>
            <AlertDialogTitle>Cabut Keanggotaan?</AlertDialogTitle>
            <AlertDialogDescription>
              Tindakan ini akan menghapus relasi keanggotaan mahasiswa dari UKM
              terkait.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Batal</AlertDialogCancel>
            <AlertDialogAction
              onClick={() =>
                selectedId && deleteMutation.mutate({ id: selectedId })
              }
              disabled={deleteMutation.isPending}
              className="bg-destructive hover:bg-destructive/90 text-white"
            >
              {deleteMutation.isPending ? "Mencabut..." : "Ya, Cabut"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

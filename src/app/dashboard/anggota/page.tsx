"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Save, Search, UserCheck, AlertCircle, CheckCircle, Trash2, Pencil, Filter } from "lucide-react";
import { toast } from "sonner";

import { api } from "~/trpc/react";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
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
    const [approvedBy, setApprovedBy] = useState<"Ketua UKM" | "Sekretaris UKM">("Ketua UKM");

    // States Pencarian & Kontrol Autocomplete UI
    const [searchMahasiswa, setSearchMahasiswa] = useState("");
    const [isMahasiswaOpen, setIsMahasiswaOpen] = useState(false);

    const [searchUkm, setSearchUkm] = useState("");
    const [isUkmOpen, setIsUkmOpen] = useState(false);

    const [searchTable, setSearchTable] = useState(""); // Filter tabel bawah

    // ─── STATE MODALS ───────────────────────────────────────────────────────
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedEditItem, setSelectedEditItem] = useState<{ id: string; approvedBy: "Ketua UKM" | "Sekretaris UKM" } | null>(null);
    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const [selectedId, setSelectedId] = useState<string | null>(null);

    // ─── DATA FETCHING HTTP VIA TRPC ────────────────────────────────────────
    const { data: mahasiswaList } = api.mahasiswa.getMahasiswa.useQuery({ search: searchMahasiswa || undefined });
    const { data: ukmList } = api.ukm.getUkmList.useQuery({ search: searchUkm || undefined });
    const { data: rekapAnggota, isLoading: loadingRekap } = api.pendaftaran.getRekapAnggota.useQuery();

    // ─── MUTATIONS MANAGEMENT ───────────────────────────────────────────────
    const daftarMutation = api.pendaftaran.daftarUkm.useMutation({
        onSuccess: async () => {
            toast.success("Anggota baru berhasil didaftarkan ke UKM!");
            setMahasiswaId("");
            setUkmId("");
            setSearchMahasiswa(""); // Reset text pencarian mahasiswa
            setSearchUkm("");       // Reset text pencarian ukm
            await utils.pendaftaran.getRekapAnggota.invalidate();
        },
        onError: (err) => {
            toast.error(err.message);
        },
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
        }
    });

    const deleteMutation = api.pendaftaran.cancelPendaftaran.useMutation({
        onSuccess: async () => {
            toast.success("Keanggotaan mahasiswa berhasil dicabut.");
            setIsAlertOpen(false);
            setSelectedId(null);
            await utils.pendaftaran.getRekapAnggota.invalidate();
        },
        onError: (err) => {
            toast.error(`Gagal mencabut anggota: ${err.message}`);
        }
    });

    // ─── HANDLERS ───────────────────────────────────────────────────────────
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!mahasiswaId || !ukmId) {
            toast.error("Pilih mahasiswa dan UKM terlebih dahulu dari daftar pencarian!");
            return;
        }

        const mahasiswaTerpilih = mahasiswaList?.find(m => m.id === mahasiswaId);
        const sudahTerdaftar = rekapAnggota?.some(item => item.nim === mahasiswaTerpilih?.nim);

        if (sudahTerdaftar) {
            toast.error(`Gagal mendaftarkan! Mahasiswa dengan NIM ${mahasiswaTerpilih?.nim} sudah terdaftar di UKM.`);
            return;
        }

        daftarMutation.mutate({ mahasiswaId, ukmId, approvedBy });
    };

    const triggerEdit = (id: string, currentApproved: string) => {
        setSelectedEditItem({ id, approvedBy: currentApproved as any });
        setIsEditModalOpen(true);
    };

    const handleExecuteEdit = () => {
        if (selectedEditItem) {
            updateMutation.mutate({ id: selectedEditItem.id, approvedBy: selectedEditItem.approvedBy });
        }
    };

    const triggerDelete = (id: string) => {
        setSelectedId(id);
        setIsAlertOpen(true);
    };

    const handleExecuteDelete = () => {
        if (selectedId) {
            deleteMutation.mutate({ id: selectedId });
        }
    };

    // ─── FILTER DATA TABEL CLIENT-SIDE ──────────────────────────────────────
    const filteredRekap = rekapAnggota?.filter((item) => {
        const query = searchTable.toLowerCase();
        return (
            item.nama.toLowerCase().includes(query) ||
            item.nim.toLowerCase().includes(query) ||
            item.ukm.toLowerCase().includes(query)
        );
    });

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
                    <h1 className="text-xl font-bold tracking-tight text-gray-900">Validasi & Pendaftaran Anggota</h1>
                    <p className="text-xs text-gray-500">Daftarkan mahasiswa ke organisasi UKM (1 Mahasiswa = 1 UKM).</p>
                </div>
            </div>

            {/* SPLIT LAYOUT FORM & RULES */}
            <div className="grid gap-6 lg:grid-cols-2">
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-6">
                    <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                        <UserCheck className="w-4 h-4 text-teal-600" />
                        Formulir Pendaftaran
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-5">

                        {/* PANEL 1: AUTOCOMPLETE MAHASISWA */}
                        <div className="p-4 bg-gray-50/50 border border-gray-100 rounded-lg space-y-3">
                            <Label className="text-gray-700 font-semibold">1. Cari & Pilih Mahasiswa</Label>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <Input
                                    placeholder="Ketik Nama atau NIM..."
                                    value={searchMahasiswa}
                                    onChange={(e) => {
                                        setSearchMahasiswa(e.target.value);
                                        setIsMahasiswaOpen(true);
                                        setMahasiswaId(""); // Reset ID jika user mengubah teks manual
                                    }}
                                    onFocus={() => setIsMahasiswaOpen(true)}
                                    onBlur={() => setTimeout(() => setIsMahasiswaOpen(false), 200)}
                                    className={`pl-9 h-9 bg-white transition-colors ${mahasiswaId ? 'border-teal-500 ring-1 ring-teal-500' : 'border-gray-200'}`}
                                />

                                {/* Dropdown Melayang */}
                                {isMahasiswaOpen && searchMahasiswa.length > 0 && (
                                    <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-52 overflow-y-auto">
                                        {mahasiswaList?.length === 0 ? (
                                            <div className="p-3 text-xs text-gray-500 text-center">Data mahasiswa tidak ditemukan.</div>
                                        ) : (
                                            mahasiswaList?.map((m) => (
                                                <div
                                                    key={m.id}
                                                    onClick={() => {
                                                        setMahasiswaId(m.id);
                                                        setSearchMahasiswa(`${m.nim} - ${m.nama}`); // Tampilkan yang dipilih di input
                                                        setIsMahasiswaOpen(false);
                                                    }}
                                                    className="px-3 py-2 cursor-pointer hover:bg-teal-50 border-b border-gray-50 last:border-0 transition-colors"
                                                >
                                                    <div className="font-medium text-sm text-gray-900">{m.nama}</div>
                                                    <div className="text-[11px] text-gray-500 font-mono">{m.nim}</div>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* PANEL 2: AUTOCOMPLETE UKM */}
                        <div className="p-4 bg-gray-50/50 border border-gray-100 rounded-lg space-y-3">
                            <Label className="text-gray-700 font-semibold">2. Cari & Pilih Organisasi UKM</Label>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <Input
                                    placeholder="Ketik Nama UKM..."
                                    value={searchUkm}
                                    onChange={(e) => {
                                        setSearchUkm(e.target.value);
                                        setIsUkmOpen(true);
                                        setUkmId(""); // Reset ID jika teks berubah manual
                                    }}
                                    onFocus={() => setIsUkmOpen(true)}
                                    onBlur={() => setTimeout(() => setIsUkmOpen(false), 200)}
                                    className={`pl-9 h-9 bg-white transition-colors ${ukmId ? 'border-teal-500 ring-1 ring-teal-500' : 'border-gray-200'}`}
                                />

                                {/* Dropdown Melayang */}
                                {isUkmOpen && searchUkm.length > 0 && (
                                    <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-52 overflow-y-auto">
                                        {ukmList?.length === 0 ? (
                                            <div className="p-3 text-xs text-gray-500 text-center">Organisasi UKM tidak ditemukan.</div>
                                        ) : (
                                            ukmList?.map((u) => (
                                                <div
                                                    key={u.id}
                                                    onClick={() => {
                                                        setUkmId(u.id);
                                                        setSearchUkm(u.namaUkm);
                                                        setIsUkmOpen(false);
                                                    }}
                                                    className="px-3 py-2.5 cursor-pointer hover:bg-teal-50 border-b border-gray-50 last:border-0 transition-colors"
                                                >
                                                    <div className="font-medium text-sm text-gray-900">{u.namaUkm}</div>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* PANEL 3: PENGESAHAN */}
                        <div className="space-y-2">
                            <Label>Disetujui Oleh</Label>
                            <Select value={approvedBy} onValueChange={(v) => setApprovedBy(v as any)}>
                                <SelectTrigger className="border-gray-200 h-9 bg-white">
                                    <SelectValue placeholder="Pilih jabatan pengesah" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Ketua UKM">Ketua UKM</SelectItem>
                                    <SelectItem value="Sekretaris UKM">Sekretaris UKM</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex justify-end pt-2">
                            <Button type="submit" disabled={daftarMutation.isPending} className="bg-teal-600 hover:bg-teal-700 text-white text-xs gap-1.5 font-medium shadow-sm w-full sm:w-auto">
                                <Save className="w-4 h-4" />
                                {daftarMutation.isPending ? "Mendaftarkan..." : "Daftarkan Anggota"}
                            </Button>
                        </div>
                    </form>
                </div>

                {/* RULES INFOGRAPHIC CARD */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm h-fit">
                    <h3 className="font-semibold text-gray-900 mb-4">Aturan Validasi Ketat</h3>
                    <ul className="space-y-4 text-sm text-gray-600">
                        <li className="flex items-start gap-3">
                            <div className="p-1.5 bg-green-50 rounded-md shrink-0">
                                <CheckCircle className="w-4 h-4 text-green-600" />
                            </div>
                            <span className="leading-snug">1 Mahasiswa hanya boleh terdaftar di <strong className="text-gray-900">1 UKM</strong> saja.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="p-1.5 bg-green-50 rounded-md shrink-0">
                                <CheckCircle className="w-4 h-4 text-green-600" />
                            </div>
                            <span className="leading-snug">Sistem akan <strong className="text-gray-900">menolak otomatis</strong> jika mahasiswa sudah terdaftar di UKM lain.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="p-1.5 bg-amber-50 rounded-md shrink-0">
                                <AlertCircle className="w-4 h-4 text-amber-600" />
                            </div>
                            <span className="leading-snug">Hanya <strong className="text-gray-900">Ketua UKM</strong> atau <strong className="text-gray-900">Sekretaris UKM</strong> yang berhak menyetujui berkas.</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* TABEL 2: REAL-TIME CRUD DATA TRANSAKSI ANGGOTA UKM */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <h3 className="font-semibold text-sm text-gray-900">Data Transaksi Keanggotaan Terkini</h3>

                    {/* SEARCH BAR UNTUK TABEL */}
                    <div className="relative w-full sm:w-72">
                        <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                        <Input
                            placeholder="Cari di tabel (NIM, Nama, UKM)..."
                            value={searchTable}
                            onChange={(e) => setSearchTable(e.target.value)}
                            className="pl-8 h-8 text-xs border-gray-200 bg-white"
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
                                <TableHead className="text-xs">Organisasi UKM</TableHead>
                                <TableHead className="w-[150px] text-xs">Disetujui Oleh</TableHead>
                                <TableHead className="w-[100px] text-center text-xs">Aksi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {loadingRekap ? (
                                <TableRow>
                                    <TableCell colSpan={6} className="h-24 text-center text-xs text-gray-400">Menyusun baris transaksi...</TableCell>
                                </TableRow>
                            ) : filteredRekap?.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={6} className="h-24 text-center text-xs text-gray-400">
                                        {searchTable ? "Data tidak ditemukan." : "Belum ada mahasiswa yang sah bergabung ke UKM."}
                                    </TableCell>
                                </TableRow>
                            ) : (
                                filteredRekap?.map((item, index) => (
                                    <TableRow key={item.id} className="hover:bg-gray-50/60 transition-colors">
                                        <TableCell className="text-center text-xs text-gray-400">{index + 1}</TableCell>
                                        <TableCell className="font-mono text-xs font-bold text-gray-700">{item.nim}</TableCell>
                                        <TableCell className="font-medium text-sm text-gray-900">{item.nama}</TableCell>
                                        <TableCell>
                                            <span className="bg-teal-50 text-teal-700 text-xs px-2.5 py-1 rounded-md font-medium border border-teal-100">
                                                {item.ukm}
                                            </span>
                                        </TableCell>
                                        <TableCell className="text-xs text-gray-600">
                                            {item.disetujui}
                                        </TableCell>
                                        <TableCell className="text-center">
                                            <div className="flex items-center justify-center gap-1">
                                                <Button onClick={() => triggerEdit(item.id, item.disetujui)} variant="ghost" size="icon" className="h-7 w-7 text-blue-600 hover:bg-blue-50 rounded-md">
                                                    <Pencil className="w-3.5 h-3.5" />
                                                </Button>
                                                <Button onClick={() => triggerDelete(item.id)} variant="ghost" size="icon" className="h-7 w-7 text-red-500 hover:bg-red-50 rounded-md">
                                                    <Trash2 className="w-3.5 h-3.5" />
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>

            {/* MODAL EDIT DATA */}
            <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
                <DialogContent className="sm:max-w-[425px] rounded-xl">
                    <DialogHeader>
                        <DialogTitle className="text-gray-950 font-semibold">Edit Validasi Pendaftaran</DialogTitle>
                        <DialogDescription className="text-gray-500 text-xs leading-normal">
                            Ubah penandatangan berkas yang mengesahkan keanggotaan mahasiswa ini.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="grid gap-4 py-4">
                        <div className="space-y-2">
                            <Label>Disetujui Oleh</Label>
                            <Select
                                value={selectedEditItem?.approvedBy}
                                onValueChange={(v) => setSelectedEditItem(prev => prev ? { ...prev, approvedBy: v as any } : null)}
                            >
                                <SelectTrigger className="border-gray-200">
                                    <SelectValue placeholder="Pilih jabatan pengesah" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Ketua UKM">Ketua UKM</SelectItem>
                                    <SelectItem value="Sekretaris UKM">Sekretaris UKM</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsEditModalOpen(false)} className="text-xs">Batal</Button>
                        <Button onClick={handleExecuteEdit} disabled={updateMutation.isPending} className="bg-teal-600 hover:bg-teal-700 text-white text-xs">
                            {updateMutation.isPending ? "Menyimpan..." : "Simpan Perubahan"}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* MODAL HAPUS DATA */}
            <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
                <AlertDialogContent className="rounded-xl">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-gray-950 font-semibold">Cabut Keanggotaan Mahasiswa?</AlertDialogTitle>
                        <AlertDialogDescription className="text-gray-500 text-xs leading-normal">
                            Tindakan ini akan membatalkan status keanggotaan mahasiswa aktif dari unit kegiatan bersangkutan di database POLIBAN.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel className="border-gray-200 text-xs">Batal</AlertDialogCancel>
                        <AlertDialogAction onClick={handleExecuteDelete} disabled={deleteMutation.isPending} className="bg-red-600 hover:bg-red-700 text-white text-xs font-medium">
                            {deleteMutation.isPending ? "Mencabut..." : "Ya, Batalkan Status"}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}
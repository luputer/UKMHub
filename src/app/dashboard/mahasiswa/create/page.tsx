"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";
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

export default function CreateMahasiswaPage() {
    const router = useRouter();
    const [nim, setNim] = useState("");
    const [nama, setNama] = useState("");
    const [jurusan, setJurusan] = useState("");
    const [prodi, setProdi] = useState("");
    const [registeredBy, setRegisteredBy] = useState<"Wakil Direktur III" | "Kepala Bagian Akademik">("Kepala Bagian Akademik");

    const createMutation = api.mahasiswa.createMahasiswa.useMutation({
        onSuccess: () => {
            toast.success("Mahasiswa resmi berhasil didaftarkan!");
            router.push("/dashboard/mahasiswa");
            router.refresh();
        },
        onError: (err) => {
            // 1. Cek apakah error berasal dari validasi schema (Zod)
            if (err.data?.zodError?.fieldErrors) {
                const fieldErrors = err.data.zodError.fieldErrors;
                // Ambil pesan error pertama yang ditemukan dari Zod
                const firstError = Object.values(fieldErrors).flat()[0];
                toast.error(`Validasi Gagal: ${firstError}`);
                return;
            }

            // 2. Jika error merupakan pesan JSON bertumpuk dari server, coba parse
            try {
                const parsedError = JSON.parse(err.message);
                if (Array.isArray(parsedError) && parsedError[0]?.message) {
                    toast.error(parsedError[0].message);
                    return;
                }
            } catch {
                // Biarkan lanjut ke nomor 3 jika bukan JSON
            }

            // 3. Tangani error umum dari tRPC Backend (seperti TRPCError CONFLICT "NIM sudah terdaftar")
            toast.error(err.message);
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validasi Client-Side sederhana sebelum hit ke server
        if (!nim || !nama || !jurusan || !prodi) {
            toast.error("Gagal! Semua kolom formulir wajib diisi.");
            return;
        }

        createMutation.mutate({ nim, nama, jurusan, prodi, registeredBy });
    };

    return (
        <div className="w-full max-w-2xl mx-auto space-y-6">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-5">
                <Button variant="outline" size="icon" asChild className="h-8 w-8 rounded-lg border-gray-200">
                    <Link href="/dashboard/mahasiswa">
                        <ArrowLeft className="w-4 h-4 text-gray-500" />
                    </Link>
                </Button>
                <div>
                    <h1 className="text-xl font-bold tracking-tight text-gray-900">Registrasi Mahasiswa Baru</h1>
                    <p className="text-xs text-gray-500">Tambahkan data mahasiswa ke dalam database validasi akademik.</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-5">
                <div className="space-y-1.5">
                    <Label htmlFor="nim">Nomor Induk Mahasiswa (NIM)</Label>
                    <Input
                        id="nim"
                        placeholder="Contoh: C030323001"
                        value={nim}
                        onChange={(e) => setNim(e.target.value)}
                        className="border-gray-200 focus-visible:ring-teal-500/20 focus-visible:border-teal-500"
                    />
                </div>

                <div className="space-y-1.5">
                    <Label htmlFor="nama">Nama Lengkap</Label>
                    <Input
                        id="nama"
                        placeholder="Masukkan nama lengkap mahasiswa"
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                        className="border-gray-200 focus-visible:ring-teal-500/20 focus-visible:border-teal-500"
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <Label htmlFor="jurusan">Jurusan</Label>
                        <Input
                            id="jurusan"
                            placeholder="Contoh: Informatika"
                            value={jurusan}
                            onChange={(e) => setJurusan(e.target.value)}
                            className="border-gray-200 focus-visible:ring-teal-500/20 focus-visible:border-teal-500"
                        />
                    </div>
                    <div className="space-y-1.5">
                        <Label htmlFor="prodi">Program Studi</Label>
                        <Input
                            id="prodi"
                            placeholder="Contoh: D4 Teknik Informatika"
                            value={prodi}
                            onChange={(e) => setProdi(e.target.value)}
                            className="border-gray-200 focus-visible:ring-teal-500/20 focus-visible:border-teal-500"
                        />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <Label>Otoritas Pengesah Data</Label>
                    <Select value={registeredBy} onValueChange={(v) => setRegisteredBy(v as "Wakil Direktur III" | "Kepala Bagian Akademik")}>
                        <SelectTrigger className="border-gray-200">
                            <SelectValue placeholder="Pilih Otoritas" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Kepala Bagian Akademik">Kepala Bagian Akademik</SelectItem>
                            <SelectItem value="Wakil Direktur III">Wakil Direktur III</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="flex justify-end gap-2 pt-2 border-t border-gray-50">
                    <Button variant="outline" asChild className="border-gray-200 text-xs">
                        <Link href="/dashboard/mahasiswa">Batal</Link>
                    </Button>
                    <Button type="submit" disabled={createMutation.isPending} className="bg-teal-600 hover:bg-teal-700 text-white text-xs gap-1.5 font-medium shadow-sm">
                        <Save className="w-3.5 h-3.5" />
                        {createMutation.isPending ? "Menyimpan..." : "Simpan Data"}
                    </Button>
                </div>
            </form>
        </div>
    );
}
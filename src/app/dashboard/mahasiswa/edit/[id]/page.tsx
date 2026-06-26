"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save, Loader2 } from "lucide-react";
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

export default function EditMahasiswaPage() {
    const router = useRouter();
    const params = useParams();
    const id = params.id as string;

    // States Form
    const [nim, setNim] = useState("");
    const [nama, setNama] = useState("");
    const [jurusan, setJurusan] = useState("");
    const [prodi, setProdi] = useState("");
    const [registeredBy, setRegisteredBy] = useState<"Wakil Direktur III" | "Kepala Bagian Akademik">("Kepala Bagian Akademik");

    // Fetching Data Existing Detail Mahasiswa
    const { data: mahasiswa, isLoading } = api.mahasiswa.getMahasiswaById.useQuery(
        { id },
        { enabled: !!id } // Hanya berjalan jika ID ada di URL
    );

    // Pasang data lama ke state form ketika fetch berhasil
    useEffect(() => {
        if (mahasiswa) {
            setNim(mahasiswa.nim);
            setNama(mahasiswa.nama);
            setJurusan(mahasiswa.jurusan);
            setProdi(mahasiswa.prodi);
            setRegisteredBy(mahasiswa.registeredBy as "Wakil Direktur III" | "Kepala Bagian Akademik");
        }
    }, [mahasiswa]);

    // Mutasi Update tRPC
    const updateMutation = api.mahasiswa.updateMahasiswa.useMutation({
        onSuccess: () => {
            toast.success("Perubahan biodata mahasiswa berhasil disimpan!");
            router.push("/dashboard/mahasiswa");
            router.refresh();
        },
        onError: (err) => {
            toast.error(`Gagal menyimpan perubahan: ${err.message}`);
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!nim || !nama || !jurusan || !prodi) {
            toast.error("Semua bidang wajib diisi!");
            return;
        }
        updateMutation.mutate({ id, nim, nama, jurusan, prodi, registeredBy });
    };

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center h-64 gap-2 text-gray-500">
                <Loader2 className="w-8 h-8 animate-spin text-teal-600" />
                <span className="text-sm">Memuat data biodata lama...</span>
            </div>
        );
    }

    return (
        <div className="w-full max-w-2xl mx-auto space-y-6">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-5">
                <Button variant="outline" size="icon" asChild className="h-8 w-8 rounded-lg border-gray-200">
                    <Link href="/dashboard/mahasiswa">
                        <ArrowLeft className="w-4 h-4 text-gray-500" />
                    </Link>
                </Button>
                <div>
                    <h1 className="text-xl font-bold tracking-tight text-gray-900">Ubah Biodata Mahasiswa</h1>
                    <p className="text-xs text-gray-500">Sesuaikan atau koreksi data berkas akademik mahasiswa.</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-5">
                <div className="space-y-1.5">
                    <Label htmlFor="nim">Nomor Induk Mahasiswa (NIM)</Label>
                    <Input
                        id="nim"
                        value={nim}
                        onChange={(e) => setNim(e.target.value)}
                        className="border-gray-200 bg-gray-50 text-gray-500 cursor-not-allowed focus-visible:ring-0"
                        disabled // Biasanya NIM dikunci agar integritas data relasional aman
                    />
                </div>

                <div className="space-y-1.5">
                    <Label htmlFor="nama">Nama Lengkap</Label>
                    <Input
                        id="nama"
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
                            value={jurusan}
                            onChange={(e) => setJurusan(e.target.value)}
                            className="border-gray-200 focus-visible:ring-teal-500/20 focus-visible:border-teal-500"
                        />
                    </div>
                    <div className="space-y-1.5">
                        <Label htmlFor="prodi">Program Studi</Label>
                        <Input
                            id="prodi"
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
                    <Button type="submit" disabled={updateMutation.isPending} className="bg-teal-600 hover:bg-teal-700 text-white text-xs gap-1.5 font-medium shadow-sm">
                        <Save className="w-3.5 h-3.5" />
                        {updateMutation.isPending ? "Menyimpan..." : "Simpan Perubahan"}
                    </Button>
                </div>
            </form>
        </div>
    );
}
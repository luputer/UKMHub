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

export default function CreateUkmPage() {
    const router = useRouter();
    const [kodeUkm, setKodeUkm] = useState("");
    const [namaUkm, setNamaUkm] = useState("");
    const [pembina, setPembina] = useState("");

    const createMutation = api.ukm.createUkm.useMutation({
        onSuccess: () => {
            toast.success("Kelompok UKM baru berhasil didaftarkan resmi!");
            router.push("/dashboard/ukm");
            router.refresh();
        },
        onError: (err) => {
            toast.error(`Gagal menambahkan UKM: ${err.message}`);
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!kodeUkm || !namaUkm) {
            toast.error("Kode UKM dan Nama Organisasi wajib diisi!");
            return;
        }
        createMutation.mutate({ kodeUkm, namaUkm, pembina });
    };

    return (
        <div className="w-full max-w-2xl mx-auto space-y-6">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-5">
                <Button variant="outline" size="icon" asChild className="h-8 w-8 rounded-lg border-gray-200">
                    <Link href="/dashboard/ukm">
                        <ArrowLeft className="w-4 h-4 text-gray-500" />
                    </Link>
                </Button>
                <div>
                    <h1 className="text-xl font-bold tracking-tight text-gray-900">Registrasi Organisasi UKM Baru</h1>
                    <p className="text-xs text-gray-500">Tambahkan kelompok unit kegiatan mahasiswa resmi tingkat kampus POLIBAN.</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-5">
                <div className="space-y-1.5">
                    <Label htmlFor="kodeUkm">Kode Identitas UKM</Label>
                    <Input
                        id="kodeUkm"
                        placeholder="Contoh: UKM-WRSH, UKM-PNK"
                        value={kodeUkm}
                        onChange={(e) => setKodeUkm(e.target.value)}
                        className="border-gray-200 uppercase focus-visible:ring-teal-500/20 focus-visible:border-teal-500"
                    />
                </div>

                <div className="space-y-1.5">
                    <Label htmlFor="namaUkm">Nama Lengkap Organisasi UKM</Label>
                    <Input
                        id="namaUkm"
                        placeholder="Masukkan nama resmi UKM (cth: UKM Kewirausahaan)"
                        value={namaUkm}
                        onChange={(e) => setNamaUkm(e.target.value)}
                        className="border-gray-200 focus-visible:ring-teal-500/20 focus-visible:border-teal-500"
                    />
                </div>

                <div className="space-y-1.5">
                    <Label htmlFor="pembina">Dosen Pembina Organisasi (Opsional)</Label>
                    <Input
                        id="pembina"
                        placeholder="Masukkan nama dosen pembina beserta gelar"
                        value={pembina}
                        onChange={(e) => setPembina(e.target.value)}
                        className="border-gray-200 focus-visible:ring-teal-500/20 focus-visible:border-teal-500"
                    />
                </div>

                <div className="flex justify-end gap-2 pt-2 border-t border-gray-50">
                    <Button variant="outline" asChild className="border-gray-200 text-xs">
                        <Link href="/dashboard/ukm">Batal</Link>
                    </Button>
                    <Button type="submit" disabled={createMutation.isPending} className="bg-teal-600 hover:bg-teal-700 text-white text-xs gap-1.5 font-medium shadow-sm">
                        <Save className="w-3.5 h-3.5" />
                        {createMutation.isPending ? "Menyimpan data..." : "Daftarkan Organisasi"}
                    </Button>
                </div>
            </form>
        </div>
    );
}
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

export default function EditUkmPage() {
    const router = useRouter();
    const params = useParams();
    const id = params.id as string;

    const [kodeUkm, setKodeUkm] = useState("");
    const [namaUkm, setNamaUkm] = useState("");
    const [pembina, setPembina] = useState("");

    // Query Detail UKM via tRPC
    const { data: ukmData, isLoading } = api.ukm.getUkmById.useQuery(
        { id },
        { enabled: !!id }
    );

    useEffect(() => {
        if (ukmData) {
            setKodeUkm(ukmData.kodeUkm);
            setNamaUkm(ukmData.namaUkm);
            setPembina(ukmData.deskripsi ?? "");
        }
    }, [ukmData]);

    // Mutasi Update UKM via tRPC
    const updateMutation = api.ukm.updateUkm.useMutation({
        onSuccess: () => {
            toast.success("Perubahan data organisasi berhasil disimpan!");
            router.push("/dashboard/ukm");
            router.refresh();
        },
        onError: (err) => {
            toast.error(`Gagal menyimpan perubahan: ${err.message}`);
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!kodeUkm || !namaUkm) {
            toast.error("Kode UKM dan Nama Organisasi tidak boleh kosong!");
            return;
        }
        updateMutation.mutate({ id, kodeUkm, namaUkm, pembina });
    };

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center h-64 gap-2 text-gray-500">
                <Loader2 className="w-8 h-8 animate-spin text-teal-600" />
                <span className="text-sm">Memuat profil organisasi lama...</span>
            </div>
        );
    }

    return (
        <div className="w-full max-w-2xl mx-auto space-y-6">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-5">
                <Button variant="outline" size="icon" asChild className="h-8 w-8 rounded-lg border-gray-200">
                    <Link href="/dashboard/ukm">
                        <ArrowLeft className="w-4 h-4 text-gray-500" />
                    </Link>
                </Button>
                <div>
                    <h1 className="text-xl font-bold tracking-tight text-gray-900">Ubah Data Kelompok UKM</h1>
                    <p className="text-xs text-gray-500">Perbarui atau koreksi informasi internal unit kegiatan mahasiswa.</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-5">
                <div className="space-y-1.5">
                    <Label htmlFor="kodeUkm">Kode Identitas UKM</Label>
                    <Input
                        id="kodeUkm"
                        value={kodeUkm}
                        onChange={(e) => setKodeUkm(e.target.value)}
                        className="border-gray-200 uppercase focus-visible:ring-teal-500/20 focus-visible:border-teal-500"
                    />
                </div>

                <div className="space-y-1.5">
                    <Label htmlFor="namaUkm">Nama Lengkap Organisasi UKM</Label>
                    <Input
                        id="namaUkm"
                        value={namaUkm}
                        onChange={(e) => setNamaUkm(e.target.value)}
                        className="border-gray-200 focus-visible:ring-teal-500/20 focus-visible:border-teal-500"
                    />
                </div>

                <div className="space-y-1.5">
                    <Label htmlFor="pembina">Dosen Pembina Organisasi</Label>
                    <Input
                        id="pembina"
                        value={pembina}
                        onChange={(e) => setPembina(e.target.value)}
                        className="border-gray-200 focus-visible:ring-teal-500/20 focus-visible:border-teal-500"
                    />
                </div>

                <div className="flex justify-end gap-2 pt-2 border-t border-gray-50">
                    <Button variant="outline" asChild className="border-gray-200 text-xs">
                        <Link href="/dashboard/ukm">Batal</Link>
                    </Button>
                    <Button type="submit" disabled={updateMutation.isPending} className="bg-teal-600 hover:bg-teal-700 text-white text-xs gap-1.5 font-medium shadow-sm">
                        <Save className="w-3.5 h-3.5" />
                        {updateMutation.isPending ? "Menyimpan perubahan..." : "Simpan Perubahan"}
                    </Button>
                </div>
            </form>
        </div>
    );
}
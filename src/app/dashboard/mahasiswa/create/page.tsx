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
  const [registeredBy, setRegisteredBy] = useState<
    "Wakil Direktur III" | "Kepala Bagian Akademik"
  >("Kepala Bagian Akademik");

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
        const parsedError = JSON.parse(err.message) as unknown;
        const parsedErrorList = Array.isArray(parsedError)
          ? (parsedError as unknown[])
          : [];
        const firstParsedError = parsedErrorList[0];
        if (hasStringMessage(firstParsedError)) {
          toast.error(firstParsedError.message);
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
    <div className="mx-auto w-full max-w-2xl space-y-6">
      <div className="flex items-center gap-3 border-b border-gray-100 pb-5">
        <Button
          variant="outline"
          size="icon"
          asChild
          className="h-8 w-8 rounded-lg border-gray-200"
        >
          <Link href="/dashboard/mahasiswa">
            <ArrowLeft className="h-4 w-4 text-gray-500" />
          </Link>
        </Button>
        <div>
          <h1 className="text-xl font-bold tracking-tight text-gray-900">
            Registrasi Mahasiswa Baru
          </h1>
          <p className="text-xs text-gray-500">
            Tambahkan data mahasiswa ke dalam database validasi akademik.
          </p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-5 rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
      >
        <div className="space-y-1.5">
          <Label htmlFor="nim">Nomor Induk Mahasiswa (NIM)</Label>
          <Input
            id="nim"
            placeholder="Contoh: C030323001"
            value={nim}
            onChange={(e) => setNim(e.target.value)}
            className="border-gray-200 focus-visible:border-teal-500 focus-visible:ring-teal-500/20"
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="nama">Nama Lengkap</Label>
          <Input
            id="nama"
            placeholder="Masukkan nama lengkap mahasiswa"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="border-gray-200 focus-visible:border-teal-500 focus-visible:ring-teal-500/20"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="jurusan">Jurusan</Label>
            <Input
              id="jurusan"
              placeholder="Contoh: Informatika"
              value={jurusan}
              onChange={(e) => setJurusan(e.target.value)}
              className="border-gray-200 focus-visible:border-teal-500 focus-visible:ring-teal-500/20"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="prodi">Program Studi</Label>
            <Input
              id="prodi"
              placeholder="Contoh: D4 Teknik Informatika"
              value={prodi}
              onChange={(e) => setProdi(e.target.value)}
              className="border-gray-200 focus-visible:border-teal-500 focus-visible:ring-teal-500/20"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <Label>Otoritas Pengesah Data</Label>
          <Select
            value={registeredBy}
            onValueChange={(v) =>
              setRegisteredBy(
                v as "Wakil Direktur III" | "Kepala Bagian Akademik",
              )
            }
          >
            <SelectTrigger className="border-gray-200">
              <SelectValue placeholder="Pilih Otoritas" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Kepala Bagian Akademik">
                Kepala Bagian Akademik
              </SelectItem>
              <SelectItem value="Wakil Direktur III">
                Wakil Direktur III
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex justify-end gap-2 border-t border-gray-50 pt-2">
          <Button variant="outline" asChild className="border-gray-200 text-xs">
            <Link href="/dashboard/mahasiswa">Batal</Link>
          </Button>
          <Button
            type="submit"
            disabled={createMutation.isPending}
            className="gap-1.5 bg-teal-600 text-xs font-medium text-white shadow-sm hover:bg-teal-700"
          >
            <Save className="h-3.5 w-3.5" />
            {createMutation.isPending ? "Menyimpan..." : "Simpan Data"}
          </Button>
        </div>
      </form>
    </div>
  );
}

function hasStringMessage(value: unknown): value is { message: string } {
  return (
    typeof value === "object" &&
    value !== null &&
    "message" in value &&
    typeof (value as { message?: unknown }).message === "string"
  );
}

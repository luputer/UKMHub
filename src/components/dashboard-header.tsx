"use client";

import { SidebarTrigger } from "~/components/ui/sidebar";
import { LogOut, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import {
  Avatar,
  AvatarFallback,
} from "~/components/ui/avatar";

export function DashboardHeader() {
  const router = useRouter();

  const logoutMutation = api.auth.logoutAdmin.useMutation({
    onSuccess: () => {
      router.push("/login");
      router.refresh();
    },
  });

  // Ambil tanggal hari ini untuk UI Header
  const today = new Date().toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  return (
    <header className="h-16 bg-white/70 backdrop-blur-lg border-b border-gray-200/60 sticky top-0 z-40 print:hidden transition-all duration-200">
      <div className="flex h-full items-center justify-between px-4 sm:px-8">

        {/* Kiri: Trigger & Konteks */}
        <div className="flex items-center gap-4 sm:gap-6">
          <SidebarTrigger className="hover:bg-gray-100 text-gray-600 transition-colors" />
          <div className="h-5 w-[1px] bg-gray-200 hidden sm:block" />
          <div className="hidden sm:flex flex-col justify-center">
            <h1 className="text-sm font-semibold text-gray-800 tracking-tight">
              Sistem Informasi Organisasi Mahasiswa
            </h1>
            <p className="text-[11px] text-gray-500 font-medium">
              {today}
            </p>
          </div>
        </div>

        {/* Kanan: Profil & Aksi */}
        <div className="flex items-center gap-3 sm:gap-4">

          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full border border-green-100">
            <ShieldCheck className="w-3.5 h-3.5 text-green-600" />
            <span className="text-[11px] font-semibold text-green-700">Status Aktif</span>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full ring-2 ring-transparent hover:ring-teal-100 transition-all focus-visible:ring-teal-500 p-0">
                <Avatar className="h-9 w-9 border border-gray-100 shadow-sm">
                  <AvatarFallback className="bg-gradient-to-br from-teal-500 to-teal-700 text-white font-bold text-xs tracking-wider">
                    AD
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 mt-2 rounded-xl border-gray-100 shadow-lg shadow-gray-200/50 p-1.5">
              <DropdownMenuLabel className="flex flex-col py-2.5 px-3">
                <span className="font-semibold text-sm text-gray-900">Admin Utama</span>
                <span className="text-[11px] font-medium text-gray-500 mt-0.5">Administrator Sistem</span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-gray-100" />

              <DropdownMenuItem
                onClick={() => logoutMutation.mutate()}
                disabled={logoutMutation.isPending}
                className="text-red-600 focus:text-red-700 focus:bg-red-50 cursor-pointer text-[13px] py-2.5 px-3 rounded-lg font-medium transition-colors"
              >
                <LogOut className="w-4 h-4 mr-2.5 text-red-500" />
                {logoutMutation.isPending ? "Keluar..." : "Keluar Aplikasi"}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
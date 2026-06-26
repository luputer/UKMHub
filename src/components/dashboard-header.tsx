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
import { Avatar, AvatarFallback } from "~/components/ui/avatar";

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
    year: "numeric",
  });

  return (
    <header className="border-border bg-card/95 sticky top-0 z-40 h-16 border-b backdrop-blur print:hidden">
      <div className="flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3 sm:gap-5">
          <SidebarTrigger className="text-muted-foreground hover:bg-muted hover:text-foreground transition-colors" />
          <div className="bg-border hidden h-5 w-px sm:block" />
          <div className="hidden flex-col justify-center sm:flex">
            <h1 className="text-foreground truncate text-sm font-semibold tracking-tight">
              Sistem Informasi Organisasi Mahasiswa
            </h1>
            <p className="text-muted-foreground text-xs font-medium">{today}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden items-center gap-2 rounded-md border border-emerald-200 bg-emerald-50 px-3 py-1.5 md:flex">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-700" />
            <span className="text-xs font-semibold text-emerald-800">
              Status Aktif
            </span>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="hover:bg-muted focus-visible:ring-primary/40 relative h-10 w-10 rounded-full p-0 ring-2 ring-transparent transition-all"
              >
                <Avatar className="border-border h-9 w-9 border shadow-sm">
                  <AvatarFallback className="bg-primary text-primary-foreground text-xs font-bold tracking-wider">
                    AD
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="border-border mt-2 w-56 rounded-lg p-1.5 shadow-lg"
            >
              <DropdownMenuLabel className="flex flex-col px-3 py-2.5">
                <span className="text-foreground text-sm font-semibold">
                  Admin Utama
                </span>
                <span className="text-muted-foreground mt-0.5 text-xs font-medium">
                  Administrator Sistem
                </span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuItem
                onClick={() => logoutMutation.mutate()}
                disabled={logoutMutation.isPending}
                className="text-destructive focus:bg-destructive/10 focus:text-destructive cursor-pointer rounded-md px-3 py-2.5 text-sm font-medium transition-colors"
              >
                <LogOut className="mr-2.5 h-4 w-4" />
                {logoutMutation.isPending ? "Keluar..." : "Keluar Aplikasi"}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

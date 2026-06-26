"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Building2,
  UserPlus,
  LogOut,
  List,
} from "lucide-react";
import { api } from "~/trpc/react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  useSidebar,
} from "~/components/ui/sidebar";

// Kelompok 1: Navigasi Master Data
const masterNavigationItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Pendaftaran Mahasiswa",
    href: "/dashboard/mahasiswa",
    icon: Users,
  },
  {
    title: "Unit Kegiatan (UKM)",
    href: "/dashboard/ukm",
    icon: Building2,
  },
] as const;

// Kelompok 2: Navigasi Transaksi / Anggota
const transactionNavigationItems = [
  {
    title: "Pendaftaran Anggota",
    href: "/dashboard/anggota",
    icon: UserPlus,
  },
  {
    title: "List Anggota UKM",
    href: "/dashboard/list-anggota",
    icon: List,
  },
] as const;

export function DashboardSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { state } = useSidebar();

  const logoutMutation = api.auth.logoutAdmin.useMutation({
    onSuccess: () => {
      router.push("/login");
      router.refresh();
    },
  });

  return (
    <Sidebar collapsible="icon" variant="inset" className="border-r border-gray-100 bg-gray-50/30">
      <SidebarHeader className="pt-4 pb-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <Link href="/dashboard" className="flex items-center gap-3 px-2 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center shrink-0 shadow-sm shadow-teal-600/20 group-hover:shadow-teal-600/40 transition-all">
                <Building2 className="w-4.5 h-4.5 text-white" />
              </div>
              {state !== "collapsed" && (
                <div className="flex flex-col overflow-hidden">
                  <span className="font-bold text-sm tracking-tight text-gray-900 truncate">POLIBAN UKM</span>
                  <span className="text-[11px] font-medium text-gray-500 truncate">Sistem Pengelolaan</span>
                </div>
              )}
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="px-2 mt-4 space-y-6">
        {/* GROUP 1: MENU UTAMA */}
        <SidebarGroup className="p-0">
          <SidebarGroupLabel className="px-3 mb-2 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
            Menu Utama
          </SidebarGroupLabel>
          <SidebarMenu className="gap-1">
            {masterNavigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive}
                    tooltip={state === "collapsed" ? item.title : undefined}
                    className={`relative overflow-hidden transition-all duration-200 h-9 ${isActive
                        ? "bg-teal-50/80 text-teal-700 font-semibold hover:bg-teal-50 hover:text-teal-800"
                        : "text-gray-500 hover:bg-gray-100 hover:text-gray-900 font-medium"
                      }`}
                  >
                    <Link href={item.href} className="flex items-center gap-3">
                      {/* Indikator vertikal aktif */}
                      {isActive && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-600 rounded-r-full" />
                      )}
                      <item.icon className={`w-4 h-4 shrink-0 ${isActive ? "text-teal-600" : "text-gray-400"}`} />
                      <span className="text-[13px]">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>

        {/* GROUP 2: MANAJEMEN KEANGGOTAAN */}
        <SidebarGroup className="p-0">
          <SidebarGroupLabel className="px-3 mb-2 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
            Manajemen Anggota
          </SidebarGroupLabel>
          <SidebarMenu className="gap-1">
            {transactionNavigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive}
                    tooltip={state === "collapsed" ? item.title : undefined}
                    className={`relative overflow-hidden transition-all duration-200 h-9 ${isActive
                        ? "bg-teal-50/80 text-teal-700 font-semibold hover:bg-teal-50 hover:text-teal-800"
                        : "text-gray-500 hover:bg-gray-100 hover:text-gray-900 font-medium"
                      }`}
                  >
                    <Link href={item.href} className="flex items-center gap-3">
                      {isActive && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-600 rounded-r-full" />
                      )}
                      <item.icon className={`w-4 h-4 shrink-0 ${isActive ? "text-teal-600" : "text-gray-400"}`} />
                      <span className="text-[13px]">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 pb-6">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => logoutMutation.mutate()}
              disabled={logoutMutation.isPending}
              tooltip={state === "collapsed" ? "Keluar Sistem" : undefined}
              className="w-full justify-start text-red-600 font-medium hover:text-red-700 hover:bg-red-50/80 transition-colors h-9"
            >
              <LogOut className="w-4 h-4 text-red-500 shrink-0" />
              <span className="text-[13px]">Keluar Sistem</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
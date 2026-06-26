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

const navigationButtonClass =
  "relative h-10 overflow-hidden rounded-md px-3 text-sm font-medium transition-colors";

const activeNavigationClass =
  "bg-sidebar-accent text-sidebar-accent-foreground shadow-none hover:bg-sidebar-accent hover:text-sidebar-accent-foreground";

const inactiveNavigationClass =
  "text-sidebar-foreground/75 hover:bg-muted hover:text-sidebar-foreground";

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
    <Sidebar
      collapsible="icon"
      variant="inset"
      className="border-sidebar-border bg-sidebar border-r"
    >
      <SidebarHeader className="px-3 pt-4 pb-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <Link
              href="/dashboard"
              className="group flex items-center gap-3 rounded-md px-2 py-1.5"
            >
              <div className="bg-primary text-primary-foreground group-hover:bg-primary/90 flex h-9 w-9 shrink-0 items-center justify-center rounded-md shadow-sm transition-colors">
                <Building2 className="h-4.5 w-4.5" />
              </div>
              {state !== "collapsed" && (
                <div className="flex flex-col overflow-hidden">
                  <span className="text-sidebar-foreground truncate text-sm font-semibold tracking-tight">
                    POLIBAN UKM
                  </span>
                  <span className="text-muted-foreground truncate text-xs font-medium">
                    Sistem Pengelolaan
                  </span>
                </div>
              )}
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent className="mt-2 space-y-5 px-2">
        <SidebarGroup className="p-0">
          <SidebarGroupLabel className="text-muted-foreground mb-2 px-3 text-[11px] font-semibold tracking-wider uppercase">
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
                    className={`${navigationButtonClass} ${isActive ? activeNavigationClass : inactiveNavigationClass}`}
                  >
                    <Link href={item.href} className="flex items-center gap-3">
                      {isActive && (
                        <div className="bg-primary absolute inset-y-2 left-0 w-1 rounded-r-full" />
                      )}
                      <item.icon
                        className={`h-4 w-4 shrink-0 ${isActive ? "text-primary" : "text-muted-foreground"}`}
                      />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup className="p-0">
          <SidebarGroupLabel className="text-muted-foreground mb-2 px-3 text-[11px] font-semibold tracking-wider uppercase">
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
                    className={`${navigationButtonClass} ${isActive ? activeNavigationClass : inactiveNavigationClass}`}
                  >
                    <Link href={item.href} className="flex items-center gap-3">
                      {isActive && (
                        <div className="bg-primary absolute inset-y-2 left-0 w-1 rounded-r-full" />
                      )}
                      <item.icon
                        className={`h-4 w-4 shrink-0 ${isActive ? "text-primary" : "text-muted-foreground"}`}
                      />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-3 pb-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => logoutMutation.mutate()}
              disabled={logoutMutation.isPending}
              tooltip={state === "collapsed" ? "Keluar Sistem" : undefined}
              className="text-destructive hover:bg-destructive/10 hover:text-destructive h-10 w-full justify-start rounded-md font-medium transition-colors"
            >
              <LogOut className="h-4 w-4 shrink-0" />
              <span className="text-sm">Keluar Sistem</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

"use client";

import { SidebarProvider } from "~/components/ui/sidebar";
import { DashboardSidebar } from "~/components/dashboard-sidebar";
import { DashboardHeader } from "~/components/dashboard-header";
import { SidebarInset } from "~/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="group/sidebar-wrapper flex min-h-svh w-full bg-background">
        <DashboardSidebar />
        <SidebarInset>
          <DashboardHeader />
          <main className="flex-1 p-4 md:p-6">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
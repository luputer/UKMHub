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
      <div className="group/sidebar-wrapper bg-background flex min-h-svh w-full">
        <DashboardSidebar />
        <SidebarInset className="bg-background">
          <DashboardHeader />
          <main className="flex-1 px-4 py-5 sm:px-6 lg:px-8">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

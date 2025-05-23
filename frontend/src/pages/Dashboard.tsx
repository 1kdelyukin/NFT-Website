import { AppSidebar } from "@/components/app-sidebar"
import { DashboardChart } from "@/components/dashboard-chart"
import { DashboardCards } from "@/components/dashboard-cards"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

import { useIsMobile } from "@/hooks/use-mobile"

export default function Dashboard() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <SidebarProvider>
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader />
          <div className="flex flex-1 flex-col space-y-4 p-4">
            <div className="@container/main flex flex-1 flex-col gap-4">
              <DashboardCards />
              <div className="flex-1 px-4 lg:px-6 mt-4">
                <DashboardChart />
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    );
  }

  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <div className="h-screen flex flex-col overflow-hidden">
          <SiteHeader />
          <div className="flex flex-1 overflow-hidden">
            <div className="@container/main flex flex-1 flex-col gap-6 overflow-hidden p-6">
              <DashboardCards />
              <div className="flex-1 px-4 lg:px-6 mt-1 overflow-hidden">
                <DashboardChart />
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

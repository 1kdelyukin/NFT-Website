import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

import { useIsMobile } from "@/hooks/use-mobile"

export default function Home() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <SidebarProvider>
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader />
          <div className="flex flex-1 flex-col space-y-4 p-4">
            <div className="@container/main flex flex-1 flex-col gap-4">
              <SectionCards />
              <div className="flex-1 px-4 lg:px-6 mt-4">
                <ChartAreaInteractive />
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
              <SectionCards />
              <div className="flex-1 px-4 lg:px-6 mt-1 overflow-hidden">
                <ChartAreaInteractive />
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

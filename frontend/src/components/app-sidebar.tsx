import * as React from "react"
import {
  IconHelp,
  IconCoinBitcoinFilled,
  IconSettings,
  IconHome,
  IconGavel,
  IconBuildingStore,
  IconWallet,
  IconBooks,
  IconMoneybag
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-platforms"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Kirill Delyukin",
    email: "1kdelyukin@gmail.com",
    avatar: "frontend\src\assets\sampleAvatar.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: IconHome,
    },
    {
      title: "Active Bids",
      url: "#",
      icon: IconGavel,
    },
    {
      title: "Marketplace",
      url: "#",
      icon: IconBuildingStore,
    },
    {
      title: "My Collection",
      url: "#",
      icon: IconBooks,
    },
    {
      title: "Sell",
      url: "#",
      icon: IconMoneybag,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    },

  ],
  platforms: [
    {
      name: "OpenSea",
      url: "#",
      icon: IconWallet,
    },
    {
      name: "Binance",
      url: "#",
      icon: IconWallet,
    },
    {
      name: "Phantom",
      url: "#",
      icon: IconWallet,
    },
    {
      name: "pumpfun",
      url: "#",
      icon: IconWallet,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconCoinBitcoinFilled className="!size-5" />
                <span className="text-base font-semibold">Company name Inc.</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.platforms} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}

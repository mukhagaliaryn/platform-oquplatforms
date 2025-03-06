"use client"
import * as React from "react"
import { Home, LayoutGrid, } from "lucide-react"
import { NavUser } from "@/components/layouts/sidebar/nav-user"
import { NavMain } from "@/components/layouts/sidebar/nav-main"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarRail, } from "@/components/ui/sidebar"
import Link from "next/link"
import Image from "next/image"


// This is sample data.
const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
        {
            title_kz: "Басты бет",
            title_ru: "Главная",
            title_en: "Home",
            url: "/",
            icon: Home,
        },
        {
            title_kz: "Ресурстар",
            title_ru: "Ресурсы",
            title_en: "Resourses",
            url: "/resources",
            icon: LayoutGrid,
        },
    ],
}


type Props = React.ComponentProps<typeof Sidebar>


export function BaseSidebar({ ...props }: Props) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/">
                                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                    <Image src={"/logo_light.svg"} width={32} height={32} alt="Logo" />
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-semibold">OQU platforms</span>
                                    <span className="truncate text-xs">ЖШС</span>
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
                <NavMain items={data.navMain} />
            </SidebarHeader>
            <SidebarContent>
                {/* Future... */}
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
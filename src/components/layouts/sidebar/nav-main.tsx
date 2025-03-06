"use client"
import { type LucideIcon } from "lucide-react"
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, } from "@/components/ui/sidebar"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLocale } from "next-intl"


type Props = {
    items: {
        title_kz: string
        title_ru: string
        title_en: string
        url: string
        icon: LucideIcon
    }[]
}


export function NavMain({ items, }: Props) {
    const pathname = usePathname()
    const locale = useLocale()

    const getCurrentURL = (url: string) => {
        const currentURL = "/" + locale + (url === "/" ? "" : url)
        return pathname === currentURL
    }

    return (
        <SidebarMenu>
            {items.map((item) => (
                <SidebarMenuItem key={item.title_kz}>
                    <SidebarMenuButton asChild isActive={getCurrentURL(item.url)}>
                        <Link href={item.url}>
                            <item.icon />
                            <span>{item.title_kz}</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            ))}
        </SidebarMenu>
    )
}
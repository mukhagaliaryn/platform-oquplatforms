'use client'
import { House, LayoutGrid } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"


type Props = {
    locale: string
}

export default function BaseSidebar({ locale }: Props) {
    const pathname = usePathname()
    
    return (
        <div className="h-screen overflow-auto border-r w-16">
            <Link href={`/${locale}`} className="block w-full h-16 overflow-hidden p-3 transition-all hover:bg-secondary">
                <Image 
                    src={"/logo_light.svg"} width={1080} height={1080} alt="logo" priority 
                    className="w-full"
                />
            </Link>
            
            <ul className="flex flex-col gap-2 p-2 overflow-auto" style={{ height: "calc(100vh - 64px)" }}>
                <li>
                    <Link
                        href={`/${locale}`} 
                        className={`flex justify-center items-center p-2.5 rounded-md transition-all hover:bg-secondary ${pathname === `/${locale}` && "bg-secondary"}`}
                    >
                        <House strokeWidth={1.5} />
                    </Link>
                </li>
                <li>
                    <Link href={`/${locale}/resources`} className={`flex justify-center items-center p-2.5 rounded-md transition-all hover:bg-secondary ${pathname === `/${locale}/resources` && "bg-secondary"}`}>
                        <LayoutGrid strokeWidth={1.5} />
                    </Link>
                </li>
            </ul>
        </div>
    )
}

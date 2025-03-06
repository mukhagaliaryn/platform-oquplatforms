"use client"
import { ReactNode } from "react";
import MainLayout from "./main-layout";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";


type Props = {
    children: ReactNode;
    locale: string
};


const navLinks = [
    {
        id: 1,
        title_kk: "Аккаунт",
        url: "/myaccount/account"
    },
    {
        id: 2,
        title_kk: "Баптаулар",
        url: "/myaccount/settings"
    },
    {
        id: 3,
        title_kk: "Тарифтік жоспарлар",
        url: "/myaccount/subscriptions"
    },
    {
        id: 4,
        title_kk: "Төлемдер",
        url: "/myaccount/payments"
    },
]

export default function AccountLayout({ children, locale }: Props) {
    const pathname = usePathname()

    return (
        <MainLayout>
            <div className="grid gap-4 container">
                <div className="mx-4">
                    <h1 className="text-2xl font-semibold">Аккаунт баптаулары</h1>
                    <span className="text-muted-foreground text-sm">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, ipsa.
                    </span>
                </div>
                <Separator />
                <div className="flex">
                    <div className="min-w-48">
                        <ul>
                            {navLinks.map(item => (
                                <li key={item.id}>
                                    <Link href={item.url} className="w-full">
                                        <Button variant={pathname === "/" + locale + item.url ? "secondary" : "link"} className="w-full justify-start">
                                            {item.title_kk}
                                        </Button>
                                    </Link>
                                </li>
                            ))}

                        </ul>
                    </div>
                    <div className="flex-1">
                        <div className="max-w-screen-md pl-8">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

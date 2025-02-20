import { ReactNode } from "react";
import BaseLayout from "@/layouts/BaseLayout";
import MainSidebar from "@/components/app/MainSidebar";
import MainNavbar from "@/components/app/Navbar/MainNavbar";


type Props = {
    children: ReactNode;
    locale: string
};


export default function MainLayout({ children, locale }: Props) {

    return (
        <BaseLayout locale={locale}>
            <div className="h-full w-full flex">
                <MainSidebar />
                
                <div className="flex-1">
                    <MainNavbar />
                    {children}
                </div>
            </div>
        </BaseLayout>
    )
}

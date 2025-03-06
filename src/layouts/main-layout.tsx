import { ReactNode } from "react";
import BaseLayout from "@/layouts/base-layout";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { BaseSidebar } from "@/components/layouts/sidebar/main-sidebar";


type Props = {
    children: ReactNode;
    locale?: string
};


export default function MainLayout({ children }: Props) {

    return (
        <BaseLayout>
            <SidebarProvider>
                <BaseSidebar />
                <SidebarInset>
                    <div className="h-screen overflow-auto">
                        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 sticky top-0 bg-background/50 backdrop-blur">
                            <div className="flex items-center gap-2 px-4">
                                <SidebarTrigger className="-ml-1" />
                                <Separator orientation="vertical" className="mr-2 h-4" />
                                <Breadcrumb>
                                    <BreadcrumbList>
                                        <BreadcrumbItem className="hidden md:block">
                                            <BreadcrumbLink href="#">
                                                Платформа
                                            </BreadcrumbLink>
                                        </BreadcrumbItem>
                                        <BreadcrumbSeparator className="hidden md:block" />
                                        <BreadcrumbItem>
                                            <BreadcrumbPage>Басты бет</BreadcrumbPage>
                                        </BreadcrumbItem>
                                    </BreadcrumbList>
                                </Breadcrumb>
                            </div>
                        </header>
                        <div className="p-4">
                            {children}
                        </div>
                    </div>

                </SidebarInset>
            </SidebarProvider>
        </BaseLayout>
    )
}

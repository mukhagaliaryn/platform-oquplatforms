import { ReactNode } from "react";
import BaseSidebar from '@/components/layouts/BaseSidebar';


type Props = {
    children: ReactNode;
    locale: string
};


export default function BaseLayout({ children, locale }: Props) {

    return (
        <div className="h-screen w-full relative flex">
            <BaseSidebar locale={locale} />
            
            <main className="flex-1">
                {children}
            </main>
        </div>
    )
}

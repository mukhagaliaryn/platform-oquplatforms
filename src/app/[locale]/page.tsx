import Link from "next/link";
import { Button } from "@/components/ui/button"
import { getLocale, getTranslations } from "next-intl/server";
import MainLayout from "@/layouts/MainLayout";


export default async function HomePage() {
    const locale =  await getLocale()
    const t = await getTranslations('HomePage');

    return (
        <MainLayout locale={locale}>
            <div className="w-full h-full flex justify-center items-center">
                <div className="max-w-lg w-full grid gap-4 p-6 rounded-xl bg-accent text-center">
                    <div>
                        <h1 className="text-4xl font-bold">{t('title')}</h1>
                        <Link href={'/about'} className="text-zinc-500">{t('about')}</Link>
                    </div>
                    <Button>Click me</Button>
                </div>
            </div>
        </MainLayout>
    )
}

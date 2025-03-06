import MainLayout from "@/layouts/main-layout";
import { getLocale, getTranslations } from "next-intl/server";


export default async function ResourcesPage () {
    const locale =  await getLocale()
    const t = await getTranslations('HomePage')
    
    return (
        <MainLayout locale={locale}>
            <div className="max-w-screen-2xl mx-auto">
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-semibold">Ресурстар беті</h1>
                    <div className="grid gap-4 md:grid-cols-2">
                        {Array.from({ length: 20 }).map((_, i) => (
                            <div key={i} className="aspect-video rounded-xl bg-muted/50 p-4">
                                <h1 className="text-lg font-semibold text-foreground">{t("title")}</h1>
                                <span className="text-sm text-muted-foreground">{t("about")}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </MainLayout>
    )
}
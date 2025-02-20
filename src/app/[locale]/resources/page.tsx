import MainLayout from "@/layouts/MainLayout";
import { getLocale } from "next-intl/server";


export default async function ResourcesPage () {
    const locale =  await getLocale()

    return (
        <MainLayout locale={locale}>
            <h1 className="text-4xl">Hello from Resources page</h1>
        </MainLayout>
    )
}
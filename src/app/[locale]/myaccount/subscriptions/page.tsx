import AccountLayout from "@/layouts/account-layout";
import { getLocale } from "next-intl/server";


export default async function SubscriptionsPage() {
    const locale = await getLocale()
    return (
        <AccountLayout locale={locale}>
            <h1 className="text-xl font-semibold">Қолданушының тарифтік жазылымы</h1>
        </AccountLayout>
    )
}
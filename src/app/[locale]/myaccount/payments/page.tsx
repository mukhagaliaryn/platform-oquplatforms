import AccountLayout from "@/layouts/account-layout";
import { getLocale } from "next-intl/server";


export default async function PaymentsPage() {
    const locale = await getLocale()

    return (
        <AccountLayout locale={locale}>
            <h1 className="text-2xl font-semibold">Төлемдер</h1>
        </AccountLayout>
    )
}
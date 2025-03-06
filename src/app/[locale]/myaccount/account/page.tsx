import AccountLayout from "@/layouts/account-layout";
import { getLocale } from "next-intl/server";


export default async function AccountPage() {
    const locale = await getLocale()

    return (
        <AccountLayout locale={locale}>
            <h1 className="text-2xl font-semibold">Аккаунт</h1>
        </AccountLayout>
    )
}
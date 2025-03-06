import LanguageControl from "@/components/app/myaccount/settings/language-control";
import ThemeControl from "@/components/app/myaccount/settings/theme-control";
import { Separator } from "@/components/ui/separator";
import AccountLayout from "@/layouts/account-layout";
import { getLocale } from "next-intl/server";


export default async function SettingsPage() {
    const locale = await getLocale()

    return (
        <AccountLayout locale={locale}>
            <div className="grid gap-8">
                <div className="">
                    <h1 className="text-2xl font-semibold">Баптаулар</h1>
                    <span className="text-muted-foreground text-sm">Интерфейсті қалаған күйге келтіру</span>
                </div>
                <Separator />

                <div className="grid gap-16">
                    <div className="flex justify-between items-center">
                        <div className="grid">
                            <h1 className="font-semibold">Тілдер</h1>
                            <span className="text-muted-foreground text-sm">
                                Өрісте берілген өзіңе тансық тілді белгіле
                            </span>
                        </div>
                        <LanguageControl />
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="grid">
                            <h1 className="font-semibold">Түс режимі</h1>
                            <span className="text-muted-foreground text-sm">
                                Уақытқа қарай ыңғайлы режимді таңдауға болады
                            </span>
                        </div>
                        <ThemeControl />
                    </div>
                </div>
            </div>
        </AccountLayout>
    )
}
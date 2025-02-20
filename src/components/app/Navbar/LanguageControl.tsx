"use client"
import { startTransition, useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Locale, routing, usePathname, useRouter } from '@/i18n/routing';
import { useLocale } from "next-intl"
import { Languages } from "lucide-react";
import { useParams } from "next/navigation";


export default function LanguageControl() {
    const locale = useLocale()
    const [value, setValue] = useState(locale)
    const router = useRouter();
    const pathname = usePathname()
    const params = useParams()


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function selectLanguage(event: any) {
        const nextLocale = event.target.id as Locale
        startTransition(() => {
            router.replace(
                // @ts-expect-error -- TypeScript will validate that only known `params`
                { pathname, params },
                { locale: nextLocale }
            );
        });
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild >
                <Button variant="outline" className="w-36 justify-start [&_svg]:size-5">
                    <Languages />
                    {locale === "kz" ? "Қазақша" : locale === "ru" ? "Русский": null}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-36">
                <DropdownMenuRadioGroup value={value} onValueChange={setValue} >
                    {routing.locales.map(item => (
                        <DropdownMenuRadioItem 
                            key={item}
                            id={item}
                            value={item}
                            onClick={selectLanguage}
                        >
                            {item === "kz" ? "Қазақша" : item === "ru" ? "Русский": null}
                        </DropdownMenuRadioItem>
                    ))}
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}


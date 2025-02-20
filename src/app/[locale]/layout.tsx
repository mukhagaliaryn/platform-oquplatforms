import { notFound } from 'next/navigation';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { ReactNode } from 'react';
import { Locale, routing } from '@/i18n/routing';
import { NextIntlClientProvider } from 'next-intl';
import clsx from 'clsx';
import { Inter_Tight } from 'next/font/google';
import { ThemeProvider } from '@/components/layouts/ThemeProvider';


const inter = Inter_Tight({ subsets: ['latin'] });

type Props = {
    children: ReactNode;
    params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Omit<Props, 'children'>) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'LocaleLayout' });

    return {
        title: t('title')
    };
}


export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params;
    const messages = await getMessages();

    if (!routing.locales.includes(locale as Locale)) {
        notFound();
    }

    setRequestLocale(locale);
    return (
        <html lang={locale} suppressHydrationWarning={true}>
            <body className={clsx(inter.className, "h-screen overflow-hidden")}>
                <NextIntlClientProvider messages={messages}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        {children}
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    )
}

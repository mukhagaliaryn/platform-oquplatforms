import { getRequestConfig } from 'next-intl/server';
import { Locale, routing } from '@/i18n/routing';


export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale;

    if (!locale || !routing.locales.includes(locale as Locale)) {
        locale = routing.defaultLocale;
    }

    return {
        locale,
        messages: (
            await (locale === 'kz'
                ? import('../../messages/kz.json')
                : import(`../../messages/${locale}.json`))
        ).default
    };
});

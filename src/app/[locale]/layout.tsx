import {notFound} from 'next/navigation';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {ReactNode} from 'react';
import BaseLayout from '@/src/components/BaseLayout';
import {routing} from '@/src/i18n/routing';
import { NextIntlClientProvider } from 'next-intl';

/**
 * Props interface for the layout component.
 * 
 * @interface Props
 * @property {ReactNode} children - The child components to be rendered within the layout.
 * @property {Object} params - An object containing route parameters.
 * @property {string} params.locale - The locale string representing the language/region.
 */
interface Props {
  children: ReactNode;
  params: {
    locale: string;
  };
}






export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}




export default async function LocaleLayout({
  children,
  params: {locale}
}: Props) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <>
    <NextIntlClientProvider>
    <BaseLayout locale={locale}>
      {children}
    </BaseLayout>
    </NextIntlClientProvider>
    </>
  );
}

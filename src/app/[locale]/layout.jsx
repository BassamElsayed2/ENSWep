import { Urbanist, Nunito, Cairo } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/main.css";

import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "../i18n/routing";
import { getMessages } from "next-intl/server";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--body-color-font",
});
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--heading-font",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--cairo-font",
});

export const metadata = {
  title: {
    absolute: "",
    default: "Niotech - Saas & App Landing Page NextJS Template",
    template: "%s | Niotech - Saas & App Landing Page NextJS Template",
  },
  description: "Niotech - Saas & App Landing Page NextJS Template",
  openGraph: {
    title: "Niotech - Saas & App Landing Page NextJS Template",
    description: "Niotech - Saas & App Landing Page NextJS Template",
  },
};

export default async function RootLayout({ children, params }) {
  const { locale } = params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html
      lang={locale}
      suppressHydrationWarning={true}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <head>
        <meta name="author" content="Themeservices" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${urbanist.variable} ${nunito.variable} ${cairo.variable}`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

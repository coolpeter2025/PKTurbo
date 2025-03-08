import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import dynamic from "next/dynamic";

// Use dynamic imports with no SSR for client components
const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Delightful Bean Coffee Cart Rental",
    default: "Delightful Bean Coffee Cart Rental | Tampa Bay, Florida",
  },
  description: "Premium coffee cart rental services for birthdays, weddings, and private parties in Tampa Bay, Florida. Book your barista service today!",
  keywords: ["coffee cart rental", "barista service", "Tampa Bay", "Florida", "wedding coffee", "birthday coffee", "private party coffee", "mobile coffee cart"],
  alternates: {
    canonical: "https://delightfulbean.com",
    languages: {
      "en": "https://delightfulbean.com",
      "x-default": "https://delightfulbean.com",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

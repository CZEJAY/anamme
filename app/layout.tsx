import "./globals.css";
import { DM_Sans } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import ThemeContextProvider from "@/context/theme-context";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeSwitch from "@/components/theme-switch";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Anamme Nigeria Enterprise ICT Service Company",
  description: "Anamme Nigeria Enterprise ICT Service Company",
  openGraph: {
    title: "Anamme Nigeria Enterprise ICT Service Company",
    description: "Anamme Nigeria Enterprise ICT Service Company",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dmSans.variable} suppressHydrationWarning>
      <body className="grid dark:text-gray-50 text-gray-950 dark:bg-[#070815] relative ">
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}

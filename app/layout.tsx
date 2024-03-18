import "./globals.css";
import { DM_Sans } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = ({
  title: "Anamme Nigeria Enterprise - IT & ICT Service Company",
  description: "Anamme",
  openGraph: {
    title: "Anamme",
    description: "Anamme",
  },
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="grid bg-[#070815] text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

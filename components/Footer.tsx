"use client"
import WordMark from "@/components/WordMark";
import { navbarLinks } from "@/constants";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default async function Footer() {
  const pathname = usePathname()
  return (
    <>
      <div className="mx-auto text-sm sm:text-xl md:text-3xl font-bold p-12">Join Our Satisfied Clients​ Today!</div>

      <footer className="flex flex-col items-center justify-between gap-6 border-t border-slate-600 px-8 py-7 md:flex-row">
        <Link href="/">
          <WordMark />
          <span className="sr-only">Anamme Home Page</span>
        </Link>
        <div className="text-xs flex flex-col lg:flex-row items-center">
          Copyright &copy; 2006 - 2024 Anamme Nigeria Enterpise | <br />{" "}
          <span className="ml-1 text-center"> All Rights Reserved</span>
        </div>
        <nav aria-label="Footer">
          <div className="flex items-center gap-6">
            {navbarLinks.map((item) => {
              const isActive = pathname === item.link;
              return (
                <Link className={`text-xs ${isActive && "bg-gray-700/5 rounded py-1 px-2"}`} key={item.title} href={item.link}>
                  {item.title}
                </Link>
              );
            })}
          </div>
        </nav>
      </footer>
    </>
  );
}

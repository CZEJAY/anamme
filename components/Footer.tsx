import WordMark from "@/components/WordMark";
import { navbarLinks } from "@/constants";

import Link from "next/link";

export default async function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-6 border-t border-slate-600 px-8 py-7 md:flex-row">
      <Link href="/">
        <WordMark />
        <span className="sr-only">Anamme Home Page</span>
      </Link>
      <div className="text-xs flex flex-col lg:flex-row items-center">
        Copyright &copy; 2006 - 2024 Anamme Nigeria Enterpise | <br /> <span className="ml-1 text-center">  All Rights Reserved</span>
      </div>
      <nav aria-label="Footer">
        <div className="flex gap-6">
          {navbarLinks.map((item) => {
            return (
              <Link key={item.title} href={item.link}>
                {item.title}
              </Link>
            );
          })}
        </div>
      </nav>
    </footer>
  );
}

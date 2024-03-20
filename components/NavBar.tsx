"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ButtonLink from "@/components/ButtonLink";
import WordMark from "@/components/WordMark";
import { MdMenu, MdClose } from "react-icons/md";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { navbarLinks } from "@/constants";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import StarBackground from "./Integrations/StarBackground";
import SectionHeading from "./section-heading";
import StarGrid from "./StarGrid";

type NavBarProps = {
  settings?: "";
};

export default function NavBar({ settings }: NavBarProps) {
  const pathname = usePathname();
  const isContact = pathname === "/contact";
  
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if(!isMounted){
      setIsMounted(true)
    }
  }, [])

  if(!isMounted){
    return null
  }
  return (
    <nav
      className="md-:py-6 relative px-4 py-4 md:px-6 overflow-hidden"
      aria-label="Main"
    >
      {isContact && <StarBackground />}
      {isContact && <StarGrid />}
      <div className="mx-auto flex max-w-6xl flex-col justify-between py-2 font-medium text-white md:flex-row md:items-center">
        <div className="flex z-50 items-center justify-between">
          <Link href="/" className="z-50">
            <WordMark />
            <span className="sr-only">Anamme Home Page</span>
          </Link>
          <Sheet>
            <SheetTrigger>
              <MdMenu
                className="text-gray-950 z-50 cursor-pointer dark:text-gray-50 flex md:hidden"
                size={28}
              />
            </SheetTrigger>
            {/* @ts-ignore-error */}
            <SheetContent className="dark:bg-[#070815] overflow-hidden border-l-0 w-[200px] sm:w-[540px]">
              <StarBackground />
              <div className="flex items-center flex-col  justify-items-end gap-8 mt-9 -mr-3">
                {navbarLinks.map((item) => {
                  const isActive = pathname === item.link;
                  return (
                    <Link
                      className={clsx(
                        "text-gray-950 z-50 dark:text-gray-50",
                        isActive && "bg-gray-700/5 rounded py-1 px-3"
                      )}
                      href={item.link}
                      key={item.title}
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Nav */}
        <div className="z-[999] hidden gap-6 md:flex items-center">
          {navbarLinks.map((item) => {
            const isActive = pathname === item.link;
            return (
              <Link
                className={clsx(
                  "text-gray-950 dark:text-gray-50 cursor-pointer",
                  isActive && "bg-gray-700/5 text-center rounded py-1 px-2"
                )}
                href={item.link}
                key={item.title}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
      {isContact && (
        <div className="mx-auto mt-16 mb-32">
          <SectionHeading >
            <span className="gold">Get in Touch With Us</span>
          </SectionHeading>
          <p className="text-center font-medium">Reach us via our contact details below</p>
        </div>
      )}
    </nav>
  );
}

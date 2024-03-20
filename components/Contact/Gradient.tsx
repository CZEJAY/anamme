"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "@/context/theme-context";
import { useSectionInView } from "@/lib/hooks";
import { contactInfo } from "@/constants";
import clsx from "clsx";

export default function AboutTree() {
  const { ref } = useSectionInView("about");
//   const [isMounted, setIsMounted] = useState(false)

//   useEffect(() => {
//     if(!isMounted){
//       setIsMounted(true)
//     }
//   }, [])

//   if(!isMounted){
//     return null
//   }
  return (
    <section id="experience" ref={ref} className="w-full px-10 lg:px-3 flex items-center justify-center scroll-mt-28 mb-28 sm:mb-40">
      <div className="mt-16 grid max-w-6xl grid-rows-[auto_auto_auto] gap-8 md:grid-cols-3 lg:grid-cols-4 md:gap-10">
        {contactInfo.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              className={clsx(
                "glass-container row-span-3 relative grid grid-rows-subgrid gap-4 rounded-lg bg-gradient-to-b from-gray-900 to-gray-950 p-4"
                // item?.wide ? "md:col-span-2" : "md:col-span-1",
              )}
              key={item.title}
            >
              {/* <Icon className="absolute top-2 -right-1 h-8 w-8 text-balance" /> */}
              <h3 className="text-2xl text-gray-50 ">{item.title}</h3>
              <div className={` max-w-md text-balance text-slate-300`}>
                { !item.isMail && item.description}
              </div>
              {
                item.isMail && (
                    <a className="max-w-md text-balance -mt-7 lg:-mt-20 text-slate-300" href={`mailto:${item.description}`}>{item.description}</a>
                )
              }
              <div className="max-w-md lg:-mt-8 mb-2 text-balance text-slate-300">
                {item.decription2}
              </div>
              {/* <Image alt="image" src={item.image} width={100} height={100}  className="max-h-36 w-auto" />  */}
              <div className="mt-6"><Icon size={30} className="text-gray-50" /></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

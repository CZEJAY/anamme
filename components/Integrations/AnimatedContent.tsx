"use client";

import React, { useEffect, useState } from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import StylizedLogoMark from "./StylizedLogoMark";
import clsx from "clsx";

import {
  FaDigitalOcean,
  FaCloudflare,
  FaNpm,
  FaGithub,
  FaFigma,
  FaFly,
} from "react-icons/fa6";
import { integrations } from "@/constants";
import WordMark from "../WordMark";

export default function AnimatedContent() {
  const container = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  gsap.registerPlugin(useGSAP);

  const icons = {
    digitalocean: <FaDigitalOcean />,
    cloudflare: <FaCloudflare />,
    npm: <FaNpm />,
    github: <FaGithub />,
    figma: <FaFigma />,
    fly: <FaFly />,
  };

  

  useGSAP(
    () => {
      const tl = gsap.timeline({
        repeat: -1,
        defaults: { ease: "power2.inOut" },
      });

      tl.to(".pulsing-logo", {
        keyframes: [
          {
            filter: "brightness(2)",
            opacity: 1,
            duration: 0.4,
            ease: "power2.in",
          },
          {
            filter: "brightness(1)",
            opacity: 0.7,
            duration: 0.9,
          },
        ],
      });

      tl.to(
        ".signal-line",
        {
          keyframes: [
            { backgroundPosition: "0% 0%" },
            {
              backgroundPosition: "100% 100%",
              stagger: { from: "center", each: 0.3 },
              duration: 1,
            },
          ],
        },
        "-=1.4",
      );

      tl.to(
        ".pulsing-icon",
        {
          keyframes: [
            {
              opacity: 1,
              stagger: {
                from: "center",
                each: 0.3,
              },
              duration: 1,
            },
            {
              opacity: 0.4,
              duration: 1,
              stagger: {
                from: "center",
                each: 0.3,
              },
            },
          ],
        },
        "-=2",
      );
    },
    { scope: container },
  );
  return (
    <div
      className="mt-20 flex flex-col items-center md:flex-row"
      ref={container}
    >
      {integrations.map((item, index) => {
          const Icon = item.icon
        return (
          <React.Fragment key={index}>
            {index === Math.floor(integrations.length / 2) && (
              <>
                <div className="pulsing-icon relative flex aspect-square shrink-0 items-center justify-center rounded-full border border-blue-50/30 bg-blue-500/25 p-3 text-3xl text-blue-100 opacity-40 md:text-4xl lg:text-5xl">
                AME<span className="text-xs font-bold text-white italic absolute top-5 lg:top-8 right-0">ng</span>
                </div>
                <div className="signal-line rotate-180 bg-gradient-to-t" />
              </>
            )}
            <div className="pulsing-icon  relative flex aspect-square shrink-0 items-center justify-center rounded-full border border-blue-50/30 bg-blue-50/25 p-3 text-3xl text-blue-100 opacity-40 md:text-4xl lg:text-5xl">
              <Icon />
              <div  className="text-xs w-40 text-center font-bold  italic absolute -bottom-4  lg:-bottom-5">
                {item.title}
              </div>
            </div>
            {index !== integrations.length - 1 && (
              <div
                className={clsx(
                  "signal-line",
                  index >= Math.floor(integrations.length / 2)
                    ? "rotate-180"
                    : "rotate-0",
                )}
              />
            )}
          </React.Fragment>
        )
      })}
    </div>
  );
}

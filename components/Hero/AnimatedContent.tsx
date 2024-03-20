"use client";
import ButtonLink from "@/components/ButtonLink";
import StarGrid from "@/components/StarGrid";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import Image from "next/image";

export default function AnimatedContent() {
  const container = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      if (prefersReducedMotion) {
        gsap.set(
          ".hero__heading, .hero__body, .hero__button, .hero__image, .hero__glow",
          { opacity: 1 }
        );
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

      tl.fromTo(
        ".hero__heading",
        { scale: 0.5 },
        { scale: 1, opacity: 1, duration: 1.4 }
      );

      tl.fromTo(
        ".hero__body",
        { y: 20 },
        { y: 0, opacity: 1, duration: 1.2 },
        "-=0.6"
      );

      tl.fromTo(
        ".hero__button",
        { scale: 1.5 },
        { scale: 1, opacity: 1, duration: 1.3 },
        "-=0.8"
      );
      tl.fromTo(
        ".hero__image",
        { y: 100 },
        { y: 0, opacity: 1, duration: 1.3 },
        "+=0.3"
      );
      tl.fromTo(
        ".hero__glow",
        { scale: 0.5 },
        { scale: 1, opacity: 1, duration: 1.8 },
        "-=1"
      );
    },
    { scope: container }
  );

  return (
    <div className="relative" ref={container}>
      <StarGrid />
      <h1 className="hero__heading flex flex-col items-center gap-3 text-balance text-5xl font-medium opacity-0 md:text-6xl">
        Anamme Nigeria Enterprise
      <span className="text-sm md:text-xl lg:text-2xl font-bold bg-gradient-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">IT & ICT Service Company</span>
      </h1>

      <div className="hero__body mx-auto mt-6 max-w-md text-balance font-medium text-gray-600 dark:text-gray-300 opacity-0">
        The services you need to transport your business from the little leagues
        to the big time.
      </div>

      <ButtonLink className="hero__button mt-8 opacity-0" href="/about">
        Learn more
      </ButtonLink>

      <div className="hero__image glass-container mt-16 w-fit opacity-0">
        <div className="hero__glow absolute inset-0 -z-10 bg-blue-500/30 opacity-0 blur-2xl filter" />

        <Image
          className="w-full brightness-50"
          src={"/hero.jpg"}
          alt="hero"
          width={900}
          height={900}
        />
      </div>
    </div>
  );
}

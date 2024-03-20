import Bounded from "@/components/Bounded";
import StarBackground from "./StarBackground";
import Image from "next/image";

import StylizedLogoMark from "./StylizedLogoMark";

import background from "./background.jpg";
import React from "react";
import clsx from "clsx";
import AnimatedContent from "./AnimatedContent";

/**
 * Props for `Integrations`.
 */
// export type IntegrationsProps = SliceComponentProps<Content.IntegrationsSlice>;

/**
 * Component for "Integrations" Slices.
 */
const Integrations = (): JSX.Element => {
  return (
    <Bounded className="relative overflow-hidden">
      <Image
        src={background}
        alt=""
        fill
        className="object-cover"
        quality={90}
      />
      <StarBackground />

      <div className="relative">
        <h2 className="mx-auto max-w-2xl text-gray-50 text-balance text-center text-5xl font-medium md:text-7xl">
          Integrations galore.
        </h2>

        <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
          The integrations your team needs to be productive at scale with no
          impact on your burn rate.
        </div>

        <AnimatedContent />
      </div>
    </Bounded>
  );
};

export default Integrations;

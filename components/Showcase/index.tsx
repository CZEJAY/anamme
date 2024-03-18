import Bounded from "@/components/Bounded";
import ButtonLink from "@/components/ButtonLink";
import clsx from "clsx";
import { PiArrowsClockwise, PiGear } from "react-icons/pi";
import AnimatedContent from "./AnimatedContent";
import { Settings } from "lucide-react";
import Image from "next/image";

const icons = {
  gear: <PiGear />,
  cycle: <PiArrowsClockwise />,
};

/**
 * Props for `Showcase`.
 */
// export type ShowcaseProps = SliceComponentProps<Content.ShowcaseSlice>;

/**
 * Component for "Showcase" Slices.
 */
const Showcase = (): JSX.Element => {
  return (
    <Bounded className="relative">
      <div className="glow absolute -z-10 aspect-square w-full max-w-xl rounded-full bg-blue-400/20 blur-3xl filter" />

      <AnimatedContent>
        <h2 className="text-balance text-center text-5xl font-medium md:text-7xl">
          lets create something awesome.
          <br />
          <span className="text-blue-500">
            <span className="text-balance">AME</span>
          </span>
        </h2>
      </AnimatedContent>
      <div className="mt-16 grid items-center gap-8 rounded-xl border border-blue-50/20 bg-gradient-to-b from-slate-50/15 to-slate-50/5 px-8 py-8 backdrop-blur-sm lg:grid-cols-3 lg:gap-0 lg:py-12">
        <div>
          <div className="w-fit flex items-center gap-4 rounded-lg bg-blue-500/35 p-4 text-3xl">
            <Settings />
            <div className="">Developers</div>
          </div>
          <small className="text-xs">
            Introducing our revolutionary web services, designed to streamline
            your development process and leave traditional methods in the dust.
          </small>
          <div className="mt-6 text-2xl font-normal">
            Design the next big thing.
          </div>

          <div className="prose prose-invert mt-4 max-w-xl">
            Enhance your development workflow effortlessly using our
            user-friendly web services designed for seamless integration and
            efficiency.
          </div>

          <div className="mt-8 prose prose-invert max-w-xl">
            Effortlessly incorporate our APIs into your projects, ensuring
            seamless integration and enhanced functionality for your development
            endeavors.
            <p className="mt-8">
              We'll take care of the business logic for you, allowing you to
              concentrate solely on crafting an exceptional website.
            </p>
          </div>

          <ButtonLink className="mt-6">Get started</ButtonLink>
        </div>

        <Image
          src={"/hero.jpg"}
          alt="image"
          width={500}
          height={500}
          className={clsx(
            "opacity-90 shadow-2xl lg:col-span-2 lg:pt-0",
            false
              ? "lg:order-1 lg:translate-x-[15%]"
              : "lg:-order-1 lg:translate-x-[-15%]"
          )}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </Bounded>
  );
};

export default Showcase;

import Bounded from "@/components/Bounded";
import { milestones } from "@/constants";

import clsx from "clsx";
import Image from "next/image";

/**
 * Props for `Bento`.
 */
// export type BentoProps = SliceComponentProps<Content.BentoSlice>;

/**
 * Component for "Bento" Slices.
 */
const Bento = (): JSX.Element => {
  return (
    <Bounded>
      <div>
        <h2 className="text-balance text-center text-5xl font-medium md:text-7xl">
          Milestones
        </h2>
        <em className="text-4xl md:text-6xl font-bold bg-gradient-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
          Gold Standard<span className="text-gray-950 dark:text-gray-50">.</span>
        </em>
      </div>

      <div className="mx-auto mt-6 max-w-md text-balance text-center text-gray-600 dark:text-gray-300 font-medium">
      Introducing our revolutionary milestones, designed by our very best teams with industry standards leaving traditional methods in the dust.
      </div>

      <div className="mt-16 grid max-w-4xl grid-rows-[auto_auto_auto] gap-8 md:grid-cols-3 md:gap-10">
        {milestones.map((item, index) => {
            const Icon = item.icon
          return (
            <div
              className={clsx(
                "glass-container row-span-3 relative grid grid-rows-subgrid gap-4 rounded-lg bg-gradient-to-b from-gray-900 to-gray-950 p-4",
                item?.wide ? "md:col-span-2" : "md:col-span-1",
              )}
              key={item.title}
            >
              {/* <Icon className="absolute top-2 -right-1 h-8 w-8 text-balance" /> */}
              <h3 className="text-2xl text-gray-50 ">
                {item.title} 
              </h3>
              <div className="max-w-md text-balance text-slate-300">
                {item.short}
              </div>
              {/* <Image alt="image" src={item.image} width={100} height={100}  className="max-h-36 w-auto" />  */}
              <Icon size={30} className="text-gray-50"/>
              {/* {index !== milestones.length - 1 && (
              <div
                className={clsx(
                  "signal-line",
                  index >= Math.floor(milestones.length / 2)
                    ? "rotate-180"
                    : "rotate-0",
                )}
              />
            )} */}
            </div>
          )
        })}
      </div>
    </Bounded>
  );
};

export default Bento;

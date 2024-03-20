import Bounded from "@/components/Bounded";
import { services } from "@/constants";
import clsx from "clsx";
import Image from "next/image";

/**
 * Props for `CaseStudies`.
 */
// export type CaseStudiesProps = SliceComponentProps<Content.CaseStudiesSlice>;

/**
 * Component for "CaseStudies" Slices.
 */
const CaseStudies = async (): Promise<JSX.Element> => {
  return (
    <Bounded>
      <h2 className="max-w-2xl text-balance text-center text-5xl font-medium md:text-7xl">
        Our Services
      </h2>

      <div className="mx-auto mt-6 max-w-md text-balance text-center font-medium text-gray-600 dark:text-gray-300">
        Learn about the services we offer, and which you&apos;d like to embark on with us.
      </div>

      <div className="mt-20 grid gap-16">
        {services.map(
          (service, index) =>
            service && (
              <div
                key={service.title}
                className="relative grid gap-4 opacity-85 transition-opacity duration-300 hover:cursor-pointer hover:opacity-100 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
              >
                <div className="col-span-1 flex flex-col justify-center gap-4">
                  <h3 className="text-2xl md:text-3xl">{service.title}</h3>
                  <div className="max-w-md">{service.body}</div>
                </div>
                <Image
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 50vw "
                  className={clsx(
                    "rounded-xl lg:col-span-2",
                    index % 2 ? "md:-order-1 " : "ml-auto"
                  )}
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={500}
                />
              </div>
            )
        )}
      </div>
    </Bounded>
  );
};

export default CaseStudies;

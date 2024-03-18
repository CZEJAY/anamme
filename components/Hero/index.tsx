import Bounded from "@/components/Bounded";
import ButtonLink from "@/components/ButtonLink";
import StarGrid from "@/components/StarGrid";
import AnimatedContent from "./AnimatedContent";

/**
 * Props for `Hero`.
 */
// export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = (): JSX.Element => {
  return (
    <Bounded
      
      className="text-center"
    >
      <AnimatedContent />
    </Bounded>
  );
};

export default Hero;

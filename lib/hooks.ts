import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function useSectionInView(sectionName: string, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastSeen } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastSeen > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastSeen, sectionName]);

  return {
    ref,
  };
}

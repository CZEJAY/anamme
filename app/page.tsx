import Bento from "@/components/Bento";
import CaseStudies from "@/components/CaseStudies";
import Consultant from "@/components/Consultant";
import Hero from "@/components/Hero";
import Integrations from "@/components/Integrations";
import Showcase from "@/components/Showcase";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Bento />
      <Showcase />
      <CaseStudies />
      <Consultant />
      <Integrations />
    </main>
  );
}

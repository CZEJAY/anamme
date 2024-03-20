"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";
import AutoText from "../AutoText";
import StarBackground from "../Integrations/StarBackground";
import StarGrid from "../StarGrid";

const AnimatedContent = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".hero__glow",
      { scale: 0.5 },
      { scale: 1, opacity: 1, duration: 1.1 },
      "-=1"
    );
    tl.fromTo(
      ".hero__glow",
      { scale: 0.5 },
      { scale: 1, opacity: 1, duration: 1.8 },
      "-=1"
    );
    tl.to(".about", {
      y: 1,
      opacity: 1,
      duration: 1.3,
      stagger: 0.3,
      ease: "power4.out",
    });
    tl.fromTo(".main", { scale: 0.5 }, { scale: 1, opacity: 1, duration: 1.2 });
    tl.fromTo(
      ".about_1",
      { scale: 0.5 },
      { scale: 1, opacity: 1, duration: 1.2 }
    );

    tl.to(".image", {
      translateX: 0,
      duration: 1,
      opacity: 1,
      // stagger: 0.3,
      ease: "sine.inOut",
    });
    tl.fromTo(
      ".CEO",
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1 },
      "-=1"
    );
  }, []);
  return (
    <div className="w-full flex-col rounded-md overflow-hidden z-20 flex justify-between relative -translate-y-96 p-3 items-center glass-container opacity-0 about">
      <div className="hero__glow absolute inset-0 -z-10 bg-blue-500/30 opacity-0 blur-2xl filter" />
      <div className="absolute">
        <div className="gold text-xl md:text-3xl main opacity-0">About us</div>
        <StarBackground />
      </div>
      <StarGrid />

      <div className="w-full flex flex-col md:flex-row items-center gap-9 about min-h-[200px] about mt-14">
        <div className="">
          <Image
            className="rounded-md object-cover  w-[300px] h-[28rem] image lg:w-[567px] lg:h-[450px] -translate-x-20 opacity-0  shadow-md"
            src={"/ceo.jpg"}
            alt="MD/CEO"
            width={200}
            height={200}
            priority
          />
          <p className="font-semibold CEO text-sm text-center mt-3">
            <AutoText
              className=""
              delay={8000}
              stopAfterFirst
              speed={100}
              textArray={["Emmanuel Peter — MD/CEO"]}
            />
          </p>
        </div>

        <div className="content font-medium hidden md:flex flex-col text-center lg:text-left items-center max-w-3xl ml-auto h-[100%] p-9 rounded-md shadow-sm bg-gray-900/5 overflow-hidden">
          <p className="about_1 opacity-0">
            At our core, we represent a dynamic fusion of diverse expertise and
            seasoned professionals. Our team is meticulously crafted, comprising
            a mosaic of highly skilled individuals spanning various fields, each
            bringing their unique strengths to the table. From seasoned software
            engineers adept at crafting innovative solutions to astute data
            warehouse experts proficient in handling vast troves of information,
            our collective experience spans decades. Moreover, our ensemble
            includes adept network and communications specialists who ensure the
            seamless integration and fluid functionality of our systems. Working
            in tandem with our project managers, who possess a wealth of
            knowledge in orchestrating successful ventures, we synergize our
            efforts for efficient project execution. Additionally, our team
            boasts database analysts proficient in dissecting intricate data
            patterns, allowing us to derive actionable insights and drive
            informed decisions. Collectively, we wield a combined industry
            experience exceeding two decades, a testament to our unwavering
            commitment to excellence. This wealth of experience not only
            signifies our proficiency in navigating the ever-evolving
            technological landscape but also underscores our dedication to
            delivering top-tier solutions and services to our clients.
          </p>
          <p className="mt-8 about_1 opacity-0">
            We offer our clients the ability to automate and manage their
            business processes through cutting edge technological solutions
          </p>
        </div>

        <div className="flex md:hidden flex-col items-center font-medium">
          <div className="content flex flex-col text-center items-center max-w-3xl ml-auto bg-gray-950/5 h-[100%] p-9 rounded-md shadow-sm dark:bg-gray-900/25 overflow-hidden">
            <p className="about_1 opacity-0">
              Our team embodies a dynamic blend of seasoned professionals from
              diverse backgrounds, each contributing unique expertise. With
              decades of combined experience, we excel in software engineering,
              data management, network integration, and project management.
            </p>
          </div>
          <div className="content mt-5 flex flex-col text-center items-center max-w-3xl bg-gray-950/5 ml-auto h-[100%] p-9 rounded-md shadow-sm dark:bg-gray-900/25 overflow-hidden">
            <p className="mt-8 about_1 opacity-0">
              Our synergy enables efficient execution and informed
              decision-making, supported by proficient database analysts. We are
              committed to excellence, adeptly navigating technological
              advancements to deliver top-tier solutions to our clients.
            </p>
          </div>
          <div className="content mt-5 flex flex-col text-center items-center max-w-3xl bg-gray-950/5 ml-auto h-[100%] p-9 rounded-md shadow-sm dark:bg-gray-900/25 overflow-hidden">
            <p className="mt-8 about_1 opacity-0">
              We offer our clients the ability to automate and manage their
              business processes through cutting edge technological solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedContent;

"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
// import toast from "react-hot-toast";

export default function ContactForm() {
  const [data, setData] = React.useState<any>({email: "", textArea: "", fullname: "", subject: ""});

  return (
    <section
      id="contact"
      className="mb-20 sm:mb-28 glass-container p-4 px-6 w-[min(100%,38rem)] text-center"
    >
      <SectionHeading>Send Us a Message</SectionHeading>

      {/* <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:calebjimmy67@gmail.com">
          calebjimmy67@gmail.com
        </a>{" "}
        or through this form.
      </p> */}

      <form
        className="mt-10 flex flex-col gap-6 dark:text-black"
        // action={async (formData) => {
        //   const { data, error } = await sendEmail(formData);

        //   if (error) {
        //     // toast.error(error);
        //     return;
        //   }

        //   // toast.success("Email sent successfully!");
        //   setData({email: "", textArea: "", fullname: "", subject: ""});
        // }}
      >
        <input
          className="contact-input"
          name="fullname"
          type="text"
          value={data.fullname}
          onChange={(e) => setData({...data, fullname: e.target.value})}
          required
          maxLength={500}
          placeholder="Fullname"
        />
        <input
          className="contact-input"
          name="senderEmail"
          type="email"
          value={data.email}
          onChange={(e) => setData({...data, email: e.target.value})}
          required
          maxLength={500}
          placeholder="Your email"
        />
        <input
          className="contact-input"
          name="subject"
          type="text"
          value={data.subject}
          onChange={(e) => setData({...data, subject: e.target.value})}
          required
          maxLength={500}
          placeholder="Subject"
        />
        <textarea
          className="h-52 my-3 placeholder:font-medium placeholder:text-gray-950 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          value={data.textArea}
          onChange={(e) => setData({...data, textArea: e.target.value})}
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </section>
  );
}

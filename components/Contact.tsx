"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
// import toast from "react-hot-toast";

export default function ContactForm() {
  const { ref } = useSectionInView("Contact");
  const [data, setData] = React.useState<any>({input: "", textArea: ""});

  return (
    <section
      id="contact"
      ref={ref}
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
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            // toast.error(error);
            return;
          }

          // toast.success("Email sent successfully!");
          setData({input: "", textArea: ""});
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="fullname"
          type="text"
          value={data.input}
          onChange={(e) => setData({...data, input: e.target.value})}
          required
          maxLength={500}
          placeholder="Fullname"
        />
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          value={data.input}
          onChange={(e) => setData({...data, input: e.target.value})}
          required
          maxLength={500}
          placeholder="Your email"
        />
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="subject"
          type="text"
          value={data.input}
          onChange={(e) => setData({...data, input: e.target.value})}
          required
          maxLength={500}
          placeholder="Subject"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
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

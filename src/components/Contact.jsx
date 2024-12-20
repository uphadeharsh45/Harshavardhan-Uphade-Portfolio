import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const template_id = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
  const service_id = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
  const public_key = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        service_id,
        template_id,
        {
          from_name: form.name,
          to_name: "Harshavardhan Uphade",
          from_email: form.email,
          to_email: "uphadeharsh10@gmail.com",
          message: form.message,
        },
        public_key
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className={`xl:mt-8 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`} id="contact">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='w-full md:w-3/4 lg:w-1/2 bg-black-100 p-6 md:p-6 rounded-2xl mx-auto'
      >
        {/* <p className={styles.sectionSubText}>Get in touch</p> */}
        <h3 className={styles.sectionHeadText}>Get in touch</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-8 md:mt-6 flex flex-col gap-6 md:gap-6'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2 md:mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-2 px-4 md:py-2 md:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-sm md:text-base'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2 md:mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-2 px-4 md:py-2 md:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-sm md:text-base'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2 md:mb-4'>Your Message</span>
            <textarea
              rows={5}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-2 px-4 md:py-2 md:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-sm md:text-base'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-2 px-6 md:py-3 md:px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[400px] h-[250px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "");

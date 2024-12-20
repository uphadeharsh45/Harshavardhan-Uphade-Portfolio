import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import myPic from "../assets/myPic1.jpg";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} id="about">
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <div className="mt-8 flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Text Section */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary text-[17px] max-w-3xl md:w-2/3"
        >
          I am a pre-final year student at{" "}
          <a
            href="https://www.iiitdmj.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#915eff] underline hover:text-white"
          >
            Indian Institute of Information Technology, Design and Manufacturing
            (IIITDM) Jabalpur
          </a>
          . I love to learn new technologies and use that knowledge to build
          real-world applications and systems, be it for fun or actual
          solutions.
          <div className="mt-4"/>
            I have experience of building web apps as well as Android apps and have worked with technologies like React, React Native and Flutter.
            When I am not working with code, I like to watch football and
            listen to music to relax myself. Let's work together to bring your
            ideas to life!
          
        </motion.p>

        {/* Circular Image Section */}
        <motion.div
          variants={fadeIn("up", "spring", 0.3, 1)}
          whileHover={{
            scale: 1.1,
            rotate: 5,
            boxShadow: "0px 10px 30px rgba(145, 94, 255, 0.5)",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
          }}
          className="rounded-full overflow-hidden w-72 h-72 sm:w-80 sm:h-80 shadow-lg border-4 border-[#915eff] cursor-pointer"
        >
          <img
            src={myPic}
            alt="Harshavardhan"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "");

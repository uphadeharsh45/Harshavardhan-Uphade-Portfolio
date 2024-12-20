import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Hero = () => {
  const handleIconClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[50px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        {/* Decorative Line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Hero Text */}
        <div className="flex-1">
          <h1
            className={`${styles.heroHeadText} text-white break-words leading-tight`}
          >
            Hi, I'm <span className="text-[#915eff]">Harshavardhan</span>
          </h1>
          <p
            className={`${styles.heroSubText} text-white-100 mt-2 leading-relaxed sm:text-left text-center`}
          >
            I'm a software developer with a passion<br className="sm:block hidden" />
            for building innovative and user-friendly applications.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5 z-20 relative">
            {[
              { icon: <FaGithub />, url: "https://github.com/uphadeharsh45" },
              { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/harshavardhan-uphade-060112284/" },
              { icon: <FaInstagram />, url: "https://instagram.com/harsh.uphade04" },
            ].map((social, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.2,
                  rotate: 10,
                  color: "#915eff",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                }}
                className="text-white text-3xl cursor-pointer hover:shadow-lg"
                onClick={() => handleIconClick(social.url)}
              >
                {social.icon}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Computers Canvas */}
      <ComputersCanvas className="z-10" />

      {/* Scroll Prompt */}
      <div className="absolute xs:bottom-2 bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

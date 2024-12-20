import React, { useEffect, useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have worked with.
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          My Tech Stack.
        </h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28 flex items-center justify-center" key={technology.name}>
            {isMobile ? (
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-16 h-16 object-contain"
              />
            ) : (
              <BallCanvas icon={technology.icon} />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");

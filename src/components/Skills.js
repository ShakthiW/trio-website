import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{once: true}}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">Tech Stack</h2>

      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightlg lg:dark:bg-circularDarklg md:bg-circularLightmd md:dark:bg-circularDarkmd sm:bg-circularLightsm sm:dark:bg-circularDarksm">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill name="CSS" x="-5vw" y="-12vw" />
        <Skill name="HTML" x="-20vw" y="-10vw" />
        <Skill name="JavaScript" x="22vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="12.5vw" />
        <Skill name="NextJS" x="-11vw" y="-3vw" />
        <Skill name="TailwindCSS" x="17vw" y="-12vw" />
        <Skill name="Figma" x="30vw" y="-5vw" />
        <Skill name="Web Desiging" x="0vw" y="-20.5vw" />
        <Skill name="ThreeJS" x="-25vw" y="18vw" />
        <Skill name="Framer-motion" x="18vw" y="18vw" />
        <Skill name="React-Native" x="-23vw" y="6vw" />
      </div>
    </>
  );
};

export default Skills;

import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{once: true}}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Tech Stack</h2>

      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer"
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

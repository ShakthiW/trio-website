import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import Article1 from "../../public/images/articles/pagination component in reactjs.jpg";
import Article2 from "../../public/images/articles/create loading screen in react js.jpg";
import { motion, useMotionValue } from "framer-motion";
import Article3 from "../../public/images/articles/create modal component in react using react portals.png";
import Article4 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
import Article5 from "../../public/images/articles/smooth scrolling in reactjs.png";
import Article6 from "../../public/images/articles/todo list app built using react redux and framer motion.png";
import Article7 from "../../public/images/articles/What is higher order component in React.jpg";
import Article8 from "../../public/images/articles/What is Redux with easy explanation.png";

// has to define new component to use framer motion in a component
const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  // take the position of the cursor
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className=" capitalize text-xl font-semibold hover:underline underline-offset-2">
        {title}
      </h2>
      <FramerImage
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        style={{ x: x, y: y }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark">{date}</span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-lg inline-block"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline underline-offset-2">
          {title}
        </h2>
      </Link>

      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">{time}</span>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title> Trio | Articles page </title>
        <meta
          name="description"
          content="Trio Software is your partner in turning ideas into innovative web applications. We use our expertise in ReactJS, NextJS and web development to create solutions that are both user-friendly and effective."
        />
      </Head>

      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Words Can Change The World!" className="mb-16" />

          <ul className="grid grid-cols-2 gap-16">
            <FeaturedArticle
              img={Article1}
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              time="9 min read"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              link="/"
            />
            <FeaturedArticle
              img={Article2}
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              time="9 min read"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              link="/"
            />
          </ul>

          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="Oct 01, 2023"
              link="/"
              img={Article3}
            />

            <Article
              title="Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"
              date="Oct 01, 2023"
              link="/"
              img={Article4}
            />

            <Article
              title="Creating An Efficient Modal Component In React Using Hooks And Portals"
              date="Oct 01, 2023"
              link="/"
              img={Article5}
            />

            <Article
              title="Build A Fabulous Todo List App With React, Redux And Framer-Motion"
              date="Oct 01, 2023"
              link="/"
              img={Article6}
            />

            <Article
              title="Redux Simplified: A Beginner's Guide For Web Developers"
              date="Oct 01, 2023"
              link="/"
              img={Article7}
            />

            <Article
              title="What Is Higher Order Component (Hoc) In React?"
              date="Oct 01, 2023"
              link="/"
              img={Article8}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;

import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import ProfilePic from "../../public/images/profile/developer-pic-2.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Clients from "@/components/Clients";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title> Trio | About Us page </title>
        <meta
          name="description"
          content="Trio Software is your partner in turning ideas into innovative web applications. We use our expertise in ReactJS, NextJS and web development to create solutions that are both user-friendly and effective."
        />
      </Head>

      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose!" className="mb-16" />

          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark opacity-75">
                About Us
              </h2>

              <p className="font-medium">
                At Trio, we are a team of passionate software developers and
                designers dedicated to turning your ideas into innovative web
                applications. We believe that code and design can come together
                to create truly magical experiences, and we are committed to
                delivering the highest quality products and services to our
                clients
              </p>

              <p className="font-medium my-4">
                We're a small team, but we're mighty. We're agile, adaptable,
                and we're always willing to go the extra mile for our clients.
                We're also passionate about collaborating with our clients to
                create solutions that are tailored to their specific needs and
                budget.
              </p>

              <p className="font-medium my-4">
                If you're looking for a software development partner that is
                passionate about creating beautiful, functional, and
                user-centered digital experiences, then TRIO is the right choice
                for you.
              </p>

              <p className="font-medium">
                Contact us today to discuss your project and learn more about
                how we can help you achieve your goals
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={ProfilePic}
                alt="Trio-Logo-Symbol"
                className="w-full h-auto rounded-2xl"
              ></Image>
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Satisfied Clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={40} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Projects Completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Years Com. Experience
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Clients />
        </Layout>
      </main>
    </>
  );
};

export default about;

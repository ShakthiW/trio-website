import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";

const projects = () => {
  return (
    <>
      <Head>
        <title> Trio | Projects page </title>
        <meta
          name="description"
          content="At Trio Software, we specialize in developing innovative web applications for a variety of industries, including healthcare, education, finance, and retail. We have a proven track record of success in delivering high-quality, user-friendly solutions that meet the specific needs of our clients."
        />
      </Head>

      <main className="w-full">
        <Layout className="pt-16">
            <AnimatedText text="Imagination Trumps Knowledge!" />
        </Layout>
      </main>
    </>
  );
};

export default projects;

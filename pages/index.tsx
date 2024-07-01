import { PictureList } from "../components/PictureList";
import { Sidebar } from "../components/Sidebar";
import { Footer } from "../components/Footer";
import { Layout } from "../components/Layout";
import { Picture } from "../types/picture";
import { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Script from "next/script";

const Home: NextPage = () => {
  const [picture, setPicture] = useState<Picture>();
  const [opened, setOpened] = useState(false);

  const selected = (picture: Picture) => {
    setPicture(picture);
    setOpened(true);
  };

  const close = () => {
    setOpened(false);
  };

  if (typeof window === "object") {
    // https://dev.to/typicoul/fixing-next-js-referenceerror-document-is-not-defined-2jgi
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" || e.code === "Escape") {
        close();
      }
    });
  }

  const title = "Pics • Nicholas Njoki";
  const description = "A collection of pictures I've taken.";

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#f54bff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:creator" content="@heynickn" />
        <meta property="twitter:site" content="@nick" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="https://pics.notnick.io/" />
        <meta property="og:type" content="website" />
        <meta property="twitter:image" content="/cover.png" />
        <meta property="og:image" content="/cover.png" />
        <meta property="og:description" content={description} />
      </Head>
      <Script async defer src="https://buttons.github.io/buttons.js" />
      <Sidebar picture={picture} opened={opened} close={close} />
      <h1 className="font-bold text-5xl tracking-tight">Pics</h1>
      <p className="mt-2 text-gray-500">{description}</p>
      <PictureList selected={selected} />

      <div
        className={`fixed inset-0 ${
          opened ? "flex" : "hidden"
        } transition-opacity w-full h-full bg-black opacity-20 z-10`}
        onClick={() => setOpened(false)}
      ></div>
      <Footer />
    </Layout>
  );
};

export default Home;

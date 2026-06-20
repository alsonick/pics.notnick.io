import { PictureList } from "../components/PictureList";
import { ThemeToggle } from "../components/ThemeToggle";
import { Sidebar } from "../components/Sidebar";
import { Footer } from "../components/Footer";
import { Layout } from "../components/Layout";
import { Picture } from "../types/picture";
import { PICTURES } from "../lib/pictures";
import { FiArrowUp } from "react-icons/fi";
import Script from "next/script";
import { useState } from "react";

// Next.js
import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  const [picture, setPicture] = useState<Picture>();
  const [opened, setOpened] = useState(false);

  const selected = (picture: Picture) => {
    setPicture(picture);
    setOpened(true);
  };

  const close = () => {
    setOpened((prev) => !prev);
  };

  if (typeof window === "object") {
    // https://dev.to/typicoul/fixing-next-js-referenceerror-document-is-not-defined-2jgi
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" || e.code === "Escape") {
        close();
      }
    });
  }

  const description = "A collection of pictures I've taken.";
  const title = "Pics • Nicholas Njoki";

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} key="desc" />
        <meta name="theme-color" content="#30D158" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@heynickn" />
        <meta name="twitter:site" content="@nick" />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content="pics.notnick.io" />
        <meta property="og:url" content="https://pics.notnick.io/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:image" content="https://pics.notnick.io/og.png" />
        <meta property="og:image" content="https://pics.notnick.io/og.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />
        <meta property="og:description" content={description} />
      </Head>
      <Script async defer src="https://buttons.github.io/buttons.js" />
      <Sidebar picture={picture} opened={opened} close={close} />
      <div className="absolute right-5 top-6 sm:right-8">
        <ThemeToggle />
      </div>
      <header className="mt-20 sm:mt-28">
        <div
          className="inline-flex items-center gap-2 rounded-full border border-zinc-200
          bg-white/70 px-3 py-1 text-sm text-zinc-600 shadow-sm backdrop-blur
          dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          {PICTURES.length} photos
        </div>
        <h1
          className="mt-6 bg-gradient-to-br from-zinc-900 to-zinc-500 bg-clip-text
          text-5xl font-bold tracking-tighter text-transparent
          dark:from-white dark:to-zinc-500 sm:text-7xl"
        >
          Pics
        </h1>
        <p className="mt-4 max-w-md text-lg text-zinc-500 dark:text-zinc-400">
          {description}
        </p>
      </header>
      <PictureList selected={selected} close={close} />
      <button
        className="mb-8 inline-flex items-center gap-1.5 self-start text-sm
        font-medium text-zinc-500 underline-offset-4 transition duration-300
        hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-100"
        onClick={() =>
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        }
        title="Back to top"
      >
        <FiArrowUp className="text-base" />
        Back to top
      </button>
      <Footer />
    </Layout>
  );
};

export default Home;

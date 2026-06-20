import { Picture as P } from "../types/picture";
import Slide from "@mui/material/Slide";
import { stats } from "../lib/stats";
import { FiX, FiDownload } from "react-icons/fi";
import { saveAs } from "file-saver";
import { Picture } from "./Picture";
import { Button } from "./Button";
import { useEffect } from "react";

interface Props {
  picture?: P | undefined;
  close: () => void;
  opened: boolean;
}

export const Sidebar = ({ picture, close, opened }: Props) => {
  useEffect(() => {
    if (opened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [opened]);

  return (
    <>
      <div
        className={`fixed inset-0 z-10 bg-zinc-900/40 backdrop-blur-sm transition-opacity duration-300 ${
          opened
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => close()}
      />
      <Slide direction="left" in={opened} mountOnEnter unmountOnExit>
        <div
          className="fixed right-0 top-0 z-20 flex h-full w-full flex-col
          overflow-y-auto border-l border-zinc-200 bg-white p-6 shadow-2xl
          dark:border-zinc-800 dark:bg-zinc-950 sm:w-[480px] sm:p-8"
        >
          {picture ? (
            <div className="flex flex-col">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                  Details
                </h2>
                <button
                  className="flex h-9 w-9 items-center justify-center rounded-full
                  text-zinc-400 transition duration-300 hover:bg-zinc-100
                  hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                  onClick={() => close()}
                  title="Close"
                >
                  <FiX className="text-xl" />
                </button>
              </div>

              <div className="overflow-hidden bg-zinc-100 ring-1 ring-zinc-200/70 dark:bg-zinc-900 dark:ring-zinc-800">
                <Picture
                  description={picture.description}
                  path={picture.path}
                  title={picture.title}
                />
              </div>

              <p className="mt-5 text-base text-zinc-700 dark:text-zinc-300">
                {picture.description ? picture.description : "No description."}
              </p>

              <dl className="mt-5 divide-y divide-zinc-200 overflow-hidden rounded-xl border border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
                {stats(picture).map((stat) => (
                  <div
                    className="flex items-center justify-between px-4 py-3 text-sm"
                    key={stat.id}
                  >
                    <dt className="text-zinc-400 dark:text-zinc-500">
                      {stat.key}
                    </dt>
                    <dd className="max-w-[60%] truncate font-medium text-zinc-800 dark:text-zinc-200">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <Button
                className="mt-6 w-full"
                onClick={() => {
                  const url = picture.path;
                  saveAs(url, url.slice(6));
                }}
              >
                <FiDownload className="text-base" />
                Download
              </Button>
            </div>
          ) : null}
        </div>
      </Slide>
    </>
  );
};

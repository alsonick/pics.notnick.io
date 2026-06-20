import { FiDownload, FiMaximize2 } from "react-icons/fi";
import { Picture as P } from "../types/picture";
import { Picture } from "./Picture";
import { saveAs } from "file-saver";

interface Props {
  selected: (picture: P) => void;
  close: () => void;
  picture: P;
}

export const Card = ({ selected, picture }: Props) => {
  const download = () => {
    const url = picture.path;
    saveAs(url, url.slice(6));
  };

  // The detail sidebar is disabled on mobile (below the `sm` breakpoint).
  const open = () => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 639px)").matches
    ) {
      return;
    }
    selected(picture);
  };

  return (
    <div className="group flex flex-col">
      <div
        className="relative aspect-[4/5] w-full cursor-default overflow-hidden
        bg-zinc-100 ring-1 ring-zinc-200/70 transition duration-300 sm:cursor-pointer
        hover:ring-zinc-300 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:ring-zinc-700"
        onClick={open}
      >
        <Picture
          description={picture.description}
          path={picture.path}
          title={picture.title}
          fill
          className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-105"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t
          from-black/50 via-black/0 to-black/0 opacity-0 transition-opacity
          duration-300 group-hover:opacity-100"
        />
        <div
          className="absolute bottom-3 right-3 flex translate-y-2 items-center gap-1.5
          opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full
            bg-white/90 text-zinc-700 shadow-md backdrop-blur transition
            hover:bg-white hover:text-black"
            title="Download"
            onClick={(e) => {
              e.stopPropagation();
              download();
            }}
          >
            <FiDownload className="text-base" />
          </button>
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full
            bg-white/90 text-zinc-700 shadow-md backdrop-blur transition
            hover:bg-white hover:text-black"
            title="View details"
            onClick={(e) => {
              e.stopPropagation();
              open();
            }}
          >
            <FiMaximize2 className="text-base" />
          </button>
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-zinc-800 dark:text-zinc-100">
            {picture.description ? picture.description : "Untitled"}
          </p>
          <p className="mt-0.5 text-xs text-zinc-400 dark:text-zinc-500">
            {picture.camera} · {picture.size}
          </p>
        </div>
      </div>
    </div>
  );
};

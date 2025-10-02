import { Picture as P } from "../types/picture";
import Slide from "@mui/material/Slide";
import { stats } from "../lib/stats";
import { FiX } from "react-icons/fi";
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
      {opened && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300"
          onClick={() => close()}
        />
      )}
      <Slide direction="left" in={opened} mountOnEnter unmountOnExit>
        <div className="flex flex-col md:w-1/2 w-[95%] z-20 top-0 p-10 justify-center fixed h-full bg-white border-l shadow right-0">
          {picture ? (
            <div className="flex flex-col">
              <div className="flex justify-between w-full">
                <div className="w-[60%]">
                  <Picture
                    description={picture.description}
                    path={picture.path}
                  />
                </div>
                <FiX
                  className="text-2xl text-gray-500 duration-300 hover:text-black cursor-pointer"
                  onClick={() => close()}
                  title="Close"
                />
              </div>
              <p className="text-gray-500 my-3 max-w-lg">
                {picture.description ? picture.description : "No description."}
              </p>
              <div className="flex flex-col border-t pt-3 mb-3">
                {stats(picture).map((stat) => (
                  <div
                    className="flex text-gray-500 items-center"
                    key={stat.id}
                  >
                    <p>
                      {stat.key}: {stat.value}
                    </p>
                  </div>
                ))}
              </div>
              <div>
                <Button
                  onClick={() => {
                    let url = picture.path;
                    saveAs(url, url.slice(6));
                  }}
                >
                  Download
                </Button>
              </div>
            </div>
          ) : null}
        </div>
      </Slide>
    </>
  );
};

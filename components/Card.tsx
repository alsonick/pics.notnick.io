import FormControlLabel from "@mui/material/FormControlLabel";
import { FiMoreHorizontal } from "react-icons/fi";
import { Picture as P } from "../types/picture";
import { Picture } from "./Picture";
import { saveAs } from "file-saver";
import { Button } from "./Button";

interface Props {
  selected: (picture: P) => void;
  close: () => void;
  picture: P;
}

export const Card = ({ selected, picture, close }: Props) => {
  return (
    <div>
      <Picture description={picture.description} path={picture.path} />
      <p className="text-gray-500 my-3">
        {picture.description ? picture.description : "No description."}
      </p>
      <div className="flex items-center border-t pt-3 justify-between">
        <Button
          onClick={() => {
            let url = picture.path;
            saveAs(url, url.slice(6));
          }}
        >
          Download
        </Button>
        <FormControlLabel
          checked={false}
          label=""
          control={
            <FiMoreHorizontal
              className="text-lg text-gray-500 duration-300 hover:text-black cursor-pointer"
              title="Open sidebar"
              onChange={close}
              onClick={() => {
                selected(picture);
              }}
            />
          }
        />
      </div>
    </div>
  );
};

import { PICTURES } from "../lib/pictures";
import { Picture } from "../types/picture";
import { Card } from "./Card";

interface Props {
  selected: (picture: Picture) => void;
  close: () => void;
}

export const PictureList = ({ selected, close }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8 my-10">
      {PICTURES.map((picture) => (
        <Card
          key={picture.id}
          selected={selected}
          picture={picture}
          close={close}
        />
      ))}
    </div>
  );
};

import { PICTURES } from "../lib/pictures";
import { Picture } from "../types/picture";
import { Card } from "./Card";

interface Props {
  selected: (picture: Picture) => void;
  close: () => void;
}

export const PictureList = ({ selected, close }: Props) => {
  return (
    <div className="my-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
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

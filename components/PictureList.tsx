import { PICTURES } from "../lib/pictures";
import { Picture } from "../types/picture";
import { Card } from "./Card";

interface Props {
  selected: (picture: Picture) => void;
}

export const PictureList = ({ selected }: Props) => {
  return (
    <div className="grid grid-flow-row-col md:grid-cols-3 grid-cols-1 grid-rows-3 gap-8 my-10">
      {PICTURES.map((picture) => (
        <Card key={picture.id} selected={selected} picture={picture} />
      ))}
    </div>
  );
};

import { PICTURES } from "../lib/pictures";
import { Picture } from "../types/picture";
import { Card } from "./Card";

// The first grid row (up to 3 columns at `lg`) is above the fold, so those
// images load eagerly to avoid lazy-loading the Largest Contentful Paint.
const EAGER_COUNT = 3;

interface Props {
  selected: (picture: Picture) => void;
  close: () => void;
}

export const PictureList = ({ selected, close }: Props) => {
  return (
    <div className="my-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {PICTURES.map((picture, index) => (
        <Card
          key={picture.id}
          selected={selected}
          picture={picture}
          close={close}
          eager={index < EAGER_COUNT}
        />
      ))}
    </div>
  );
};

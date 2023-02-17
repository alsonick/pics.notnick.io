import Image from "next/image";

interface Props {
  description: string;
  path: string;
}

export const Picture = ({ description, path }: Props) => {
  return (
    <picture>
      <Image
        loading="lazy"
        className="rounded-3xl"
        height={900}
        src={path}
        priority={true}
        alt={description}
      />
    </picture>
  );
};

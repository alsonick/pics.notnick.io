import Image from "next/image";

interface Props {
  description: string;
  path: string;
}

export const Picture = ({ description, path }: Props) => {
  return (
    <Image
      className="rounded-3xl"
      height={1000}
      width={450}
      src={path}
      priority={true}
      alt={description}
    />
  );
};

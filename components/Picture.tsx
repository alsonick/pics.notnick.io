import Image from "next/image";

interface Props {
  description: string;
  path: string;
  title?: string;
  className?: string;
  fill?: boolean;
}

export const Picture = ({ description, path, title, className, fill }: Props) => {
  const alt = description || "Photo by Nicholas Njoki";
  const imageTitle =
    title ?? `${(description || "Photo").replace(".", "")} Picture`;

  if (fill) {
    return (
      <Image
        title={imageTitle}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className={className}
        src={path}
      />
    );
  }

  return (
    <Image
      title={imageTitle}
      className={`h-auto w-full ${className ?? ""}`}
      alt={alt}
      priority={true}
      height={1000}
      width={450}
      src={path}
    />
  );
};

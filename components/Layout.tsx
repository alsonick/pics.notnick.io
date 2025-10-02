interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div className="flex px-4 flex-col mx-auto mt-20 max-w-6xl">{children}</div>
  );
};

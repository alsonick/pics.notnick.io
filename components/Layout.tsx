interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return <div className="mx-auto my-20 max-w-7xl p-12">{children}</div>;
};

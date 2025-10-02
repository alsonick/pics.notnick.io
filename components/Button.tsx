interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children: React.ReactNode;
}

export const Button = ({ onClick, children }: Props) => {
  return (
    <button
      className="flex items-center justify-center border h-10 px-4
      shadow rounded duration-300 hover:shadow-lg outline-none"
      onClick={onClick}
      title="Download"
    >
      {children}
    </button>
  );
};

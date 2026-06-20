interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const Button = ({ onClick, children, className, title }: Props) => {
  return (
    <button
      className={`inline-flex h-11 items-center justify-center gap-2 rounded-full
      bg-zinc-900 px-5 text-sm font-medium text-white shadow-sm outline-none
      transition duration-300 hover:bg-zinc-700 active:scale-[0.98]
      focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2
      focus-visible:ring-offset-white dark:bg-white dark:text-zinc-900
      dark:hover:bg-zinc-200 dark:focus-visible:ring-offset-zinc-950 ${className ?? ""}`}
      onClick={onClick}
      title={title ?? "Download"}
    >
      {children}
    </button>
  );
};

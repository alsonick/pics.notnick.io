interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <div
        className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[420px]
        bg-gradient-to-b from-emerald-50 via-emerald-50/30 to-transparent
        dark:from-emerald-950/30 dark:via-emerald-950/10"
      />
      <div className="relative mx-auto flex max-w-6xl flex-col px-5 sm:px-8">
        {children}
      </div>
    </>
  );
};

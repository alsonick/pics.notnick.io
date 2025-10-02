import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="text-gray-500 flex w-full text-xs justify-between">
      <div>
        <p>&copy; {new Date().getFullYear()} | All rights reserved.</p>
        <p>
          Made with{" "}
          <Link
            className="font-bold hover:underline"
            href="https://nextjs.org"
            title="Next.js"
          >
            Next.js
          </Link>
          ,{" "}
          <Link
            className="font-bold hover:underline"
            href="https://tailwindcss.com"
            title="Tailwind"
          >
            Tailwind
          </Link>{" "}
          &{" "}
          <Link
            className="font-bold hover:underline"
            href="https://vercel.com/home"
            title="Vercel"
          >
            Vercel
          </Link>
          .
        </p>
        <p className="mb-2">
          Built with ❤️ by&nbsp;
          <Link
            className="font-bold hover:underline"
            href="https://github.com/alsonick"
            title="Nicholas Njoki"
            target="_blank"
          >
            Nicholas Njoki
          </Link>
          .
        </p>
      </div>
      <a
        aria-label="Follow @alsonick on GitHub"
        href="https://github.com/alsonick"
        className="github-button"
        title="Follow @alsonick"
        data-size="large"
        rel="noreferrer"
        target="_blank"
      >
        Follow @alsonick
      </a>
    </footer>
  );
};

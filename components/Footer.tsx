import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="mt-40 text-gray-500 flex flex-col items-center justify-center">
      <p>&copy; {new Date().getFullYear()} | All rights reserved</p>
      <p className="mb-2">
        Built with ❤️ by&nbsp;
        <Link
          className="font-bold hover:underline"
          href="https://github.com/alsonick"
          target="_blank"
        >
          Nicholas
        </Link>
      </p>
      <a
        className="github-button"
        href="https://github.com/alsonick"
        target="_blank"
        data-size="large"
        rel="noreferrer"
        aria-label="Follow @alsonick on GitHub"
      >
        Follow @alsonick
      </a>
    </footer>
  );
};

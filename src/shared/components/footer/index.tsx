const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/30 bg-dark text-gray-400 py-4">
      <div className="container mx-auto px-5">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-0 text-center sm:text-left">
          <p className="text-sm">
            &copy; {currentYear}{' '}
            <a
              href="https://innowise.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold hover:underline"
            >
              Innowise
            </a>
            . All rights reserved.
          </p>

          <a
            href="https://github.com/aQafresca"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:underline mt-2 sm:mt-0"
          >
            Siarhei Buiko
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

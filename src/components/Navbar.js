import { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleToggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        scrolled ? "bg-gray-900 transition duration-500" : "bg-transparent"
      } border-gray-200 text-white fixed top-0 w-full z-50`}
    >
      <div className="flex flex-wrap items-center justify-between py-4 px-6">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Bali's Portfolio
        </span>
        <button
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-expanded={showLinks}
          onClick={handleToggleLinks}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`${showLinks ? "" : "hidden "}w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="text-center font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <Link
                to="banner"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="hover:cursor-pointer hover:text-gray-500 transition ease-in-out duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                className="hover:cursor-pointer hover:text-gray-500 transition ease-in-out duration-300"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="hover:cursor-pointer hover:text-gray-500 transition ease-in-out duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="hover:cursor-pointer hover:text-gray-500 transition ease-in-out duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

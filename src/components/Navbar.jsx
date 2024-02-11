import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <header className="sticky z-50 top-0 w-full flex justify-between items-center px-12 py-5 bg-black text-amber-400">
      <div className=" text-3xl flex gap-2 text-black-400">
        <FontAwesomeIcon
          icon={faUserSecret}
          className="hover:border-b-4 border-red-600 rounded-md"
        />
        <span className="font-bold font-dancingScript">{"<Waqar/>"} </span>
      </div>
      <nav className="hidden sm:block w-auto">
        <ul className="flex gap-6 text-lg font-semibold cursor-pointer [&>li]:rounded-md">
          <li className="border-b-4 border-b-transparent hover:border-red-600 hover:border-b-4">
            <a href="#about" rel="noopener noreferrer">
              About
            </a>
          </li>
          <li className="border-b-4 border-b-transparent hover:border-red-600 hover:border-b-4">
            <a href="#skills" rel="noopener noreferrer">
              Skills
            </a>
          </li>
          <li className="border-b-4 border-b-transparent hover:border-red-600 hover:border-b-4">
            <a href="#projects" rel="noopener noreferrer">
              Projects
            </a>
          </li>
          <li className="border-b-4 border-b-transparent hover:border-red-600 hover:border-b-4">
            <a href="#contact" rel="noopener noreferrer">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

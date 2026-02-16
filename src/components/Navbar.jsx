import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 flex justify-between items-center px-10 py-6 bg-gradient-to-b from-cream to-transparent">
      <div className="font-playfair text-2xl font-black text-navy tracking-tight">
        Portfolio.
      </div>
      <ul className="flex gap-12 text-navy font-medium text-sm">
        <li>
          <a className="relative hover:text-teal" href="#home">
            Home
            <span className="absolute bottom-[-5px] left-0 w-0 h-[2px] bg-teal transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li>
          <a className="hover:text-teal" href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className="hover:text-teal" href="#skills">
            Skills
          </a>
        </li>
        <li>
          <a className="hover:text-teal" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
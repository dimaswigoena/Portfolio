import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className="container p-5 mx-auto border-b md:mt-0">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="px-2">
          <a href="/">
            <h1 className="font-bold text-2xl">My Portfolio</h1>
          </a>
        </div>
        {/* end logo */}

        {/* Desktop Menu */}
        <nav className="hidden md:flex text-lg font-medium space-x-6 px-4 ">
          <a href="/" className="hover:text-red-500">
            Home
          </a>
          <a href="#about" className="hover:text-red-500">
            About
          </a>
          <a href="#project" className="hover:text-red-500">
            Project
          </a>
          <a href="#contact" className="hover:text-red-500">
            Contact
          </a>
        </nav>
        {/* end desktop menu */}

        {/* Mobile Menu */}
        <div
          className="flex items-center px-3 md:hidden cursor-pointer"
          onClick={toggleMenu}
        >
          {isMobileMenuOpen ? (
            <MdClose size={25} />
          ) : (
            <RxHamburgerMenu size={25} />
          )}
        </div>
      </div>

      {isMobileMenuOpen ? (
        <div className="md:hidden flex-col mt-4 px-2">
          <a
            href="/"
            className="block px-2 py-3 rounded-lg text-lg font-medium hover:bg-gray-50 hover:text-gray-900"
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-2 py-3 rounded-lg text-lg font-medium hover:bg-gray-50 hover:text-gray-900"
          >
            About
          </a>
          <a
            href="#project"
            className="block px-2 py-3 rounded-lg text-lg font-medium hover:bg-gray-50 hover:text-gray-900"
          >
            Project
          </a>
          <a
            href="#contact"
            className="block px-2 py-3 rounded-lg text-lg font-medium hover:bg-gray-50 hover:text-gray-900"
          >
            Contact
          </a>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;

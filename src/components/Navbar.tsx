'use client';

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-darkPrimary text-white fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Skillwave
        </Link>

        {/* Hamburger Menu for mobile */}
        <div className="md:hidden">
          <button
            className="focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Menu Links */}
        <ul
          className={`md:flex space-x-8 hidden md:block text-lg font-medium ${
            isOpen ? "block" : "hidden"
          } md:space-x-8 md:items-center`}
        >
          <li>
            <Link
              href="/"
              className={`${
                pathname === "/" ? "text-green-400" : "hover:text-green-400"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`${
                pathname === "/about"
                  ? "text-green-400"
                  : "hover:text-green-400"
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/courses"
              className={`${
                pathname === "/courses"
                  ? "text-green-400"
                  : "hover:text-green-400"
              }`}
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`${
                pathname === "/contact"
                  ? "text-green-400"
                  : "hover:text-green-400"
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-darkPrimary text-white py-4 px-4">
          <ul className="space-y-4 text-lg font-medium">
            <li>
              <Link
                href="/"
                className={`block ${
                  pathname === "/" ? "text-green-400" : "hover:text-green-400"
                }`}
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`block ${
                  pathname === "/about"
                    ? "text-green-400"
                    : "hover:text-green-400"
                }`}
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/courses"
                className={`block ${
                  pathname === "/courses"
                    ? "text-green-400"
                    : "hover:text-green-400"
                }`}
                onClick={toggleMenu}
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`block ${
                  pathname === "/contact"
                    ? "text-green-400"
                    : "hover:text-green-400"
                }`}
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

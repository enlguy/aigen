import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroHeight = heroSection.clientHeight;
        setIsScrolled(window.scrollY > heroHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-white shadow-md text-gray-800"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1
          className="${
              isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-200'
            }`} text-xl font-bold z-20"
        >
          Your SaaS
        </h1>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <Link
                href="/"
                className="${
              isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-200'
            }`} hover:text-gray-200"
              >
                Home
              </Link>
            </li>

            <li>
              <ScrollLink
                to="features"
                smooth={true}
                className="cursor-pointer ${
              isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-200'
            }`}"
              >
                Features
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="case-study"
                smooth={true}
                className="cursor-pointer ${
              isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-200'
            }`}"
              >
                Case Study
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="pricing"
                smooth={true}
                className="cursor-pointer ${
              isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-200'
            }`}"
              >
                Pricing
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="about"
                smooth={true}
                className="cursor-pointer ${
              isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-200'
            }`}"
              >
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                className="cursor-pointer ${
              isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-200'
            }`}"
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

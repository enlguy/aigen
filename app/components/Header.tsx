import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full p-4 text-white z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold z-20">Your SaaS</h1>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <Link href="/" className="text-white hover:text-gray-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="text-white hover:text-gray-200">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white hover:text-gray-200">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

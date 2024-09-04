import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 flex items-center justify-between fixed top-0 left-0 w-full bg-transparent z-50">
      {/* Logo */}
      <div className="text-white text-3xl font-bold font-kameron">
        <a href="/home" className="text-white">
          Floribière
        </a>
      </div>

      {/* Bouton Burger */}
      <div className="sm:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="space-y-2">
            <span className="block w-8 h-0.5 bg-white"></span>
            <span className="block w-8 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
      </div>

      {/* Menu Desktop */}
      <div className="hidden sm:flex space-x-4 font-kameron">
        <a href="/shop" className="text-white">
          Shop
        </a>
        <a href="/blog" className="text-white">
          Blog
        </a>
        <a href="/contact" className="text-white">
          Contact
        </a>
        <a href="/_test" className="text-white">
          Test
        </a>
        <a href="/poteBeer" className="text-white">
          La bière des potes
        </a>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="sm:hidden font-kameron bg-black bg-opacity-75 absolute top-full left-0 w-full p-4 space-y-2 z-50">
          <a
            href="/shop"
            className="block text-white border-b-2 border-b-gray-500"
          >
            Shop
          </a>
          <a
            href="/blog"
            className="block text-white border-b-2 border-b-gray-500"
          >
            Blog
          </a>
          <a
            href="/contact"
            className="block text-white border-b-2 border-b-gray-500"
          >
            Contact
          </a>
          <a
            href="/_test"
            className="block text-white border-b-2 border-b-gray-500"
          >
            Test
          </a>
          <a
            href="/poteBeer"
            className="block text-white border-b-2 border-b-gray-500"
          >
            La bière des potes
          </a>
        </div>
      )}
    </nav>
  );
}

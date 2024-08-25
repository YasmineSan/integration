import { useState } from "react";
import React from "react";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-[#BF0303] p-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-3xl font-bold font-kameron">
          Floribière
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
        <div className="hidden sm:flex space-x-4">
          <a href="/home" className="text-white">
            Home
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
        </div>
      </nav>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="sm:hidden bg-[#BF0303] p-4 space-y-2">
          <a href="/home" className="block text-white">
            Home
          </a>
          <a href="/blog" className="block text-white">
            Blog
          </a>
          <a href="/contact" className="block text-white">
            Contact
          </a>
          <a href="/_test" className="block text-white">
            Test
          </a>
        </div>
      )}

      <div className="bg-blue-500 text-white p-6">
        <h1 className="text-4xl font-bold">Welcome to My Static Homepage</h1>
        <p className="mt-4">This content is not editable through the CMS.</p>
      </div>
    </div>
  );
}

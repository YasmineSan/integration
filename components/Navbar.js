import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#BF0303] p-4 flex flex-col relative">
      {/* Logo and Burger Button */}
      <div className="flex items-center justify-between">
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
      </div>

      {/* Menu Desktop */}
      <div className="hidden sm:flex space-x-4 mt-4">
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
        <a href="/pote_beer" className="block text-white">
          La bière des potes
        </a>
      </div>

           {/* Menu Mobile */}
           {isOpen && (
        <div className="sm:hidden flex flex-col mt-4 space-y-2 transition-all duration-300 ease-in-out">
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
          <a href="/pote_beer" className="block text-white">
            La bière des potes
          </a>
        </div>
      )}
    </nav>
  );
}

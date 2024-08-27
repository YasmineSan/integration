import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 flex items-center justify-between relative">
      {/* Logo */}
      <div className="text-black text-3xl font-bold font-kameron">
      <a href="/home" className="text-black">
          Floribière
        </a>
      </div>

      {/* Bouton Burger */}
      <div className="sm:hidden">
        <button
          onClick={toggleMenu}
          className="text-black focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="space-y-2">
            <span className="block w-8 h-0.5 bg-black"></span>
            <span className="block w-8 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </div>
        </button>
      </div>

      {/* Menu Desktop */}
      <div className="hidden sm:flex space-x-4 font-kameron">
        <a href="/shop" className="text-black">
          Shop
        </a>
        <a href="/blog" className="text-black">
          Blog
        </a>
        <a href="/contact" className="text-black">
          Contact
        </a>
        <a href="/_test" className="text-black">
          Test
        </a>
        <a href="/pote_beer" className="text-black">
          La bière des potes
        </a>
      </div>

      {/* Menu Mobile */}
{isOpen && (
  <div className="sm:hidden font-kameron bg-white bg-opacity-75 absolute top-full left-0 w-full p-4 space-y-2 z-50 ">
    <a href="/shop" className="block text-black border-b-2 border-b-gray-500">
      Shop
    </a>
    <a href="/blog" className="block text-black border-b-2 border-b-gray-500">
      Blog
    </a>
    <a href="/contact" className="block text-black border-b-2 border-b-gray-500">
      Contact
    </a>
    <a href="/_test" className="block text-black border-b-2 border-b-gray-500">
      Test
    </a>
    <a href="/pote_beer" className="block text-black border-b-2 border-b-gray-500">
      La bière des potes
    </a>
  </div>
)}

    </nav>
  );
}

import { useState } from "react";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar />
      <div className="bg-blue-500 text-white p-6">
        <h1 className="text-4xl font-bold">Welcome to My Static Homepage</h1>
        <p className="mt-4">This content is not editable through the CMS.</p>
      </div>
      <Footer />
    </div>
  );
}

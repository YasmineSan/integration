import { useState } from "react";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BeerHighlight from "../components/BeerHighlight";
import BeerCard from "../components/BeerCard";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar />
      <div className="relative">
        <img
          src="\img\Idée 1biere.png"
          alt="Laissons fleurir nos bières"
          className="w-full h-screen"
        />
      </div>
      <div className=" inset-0 flex items-center justify-center">
        <h2 className="font-dancing italic text-center text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl">
          Laissons fleurir nos rêves.
        </h2>
      </div>
      <div className="p-4">
        <BeerHighlight
          beerName="Floribière -  Souvenir"
          imageUrl="\img\453505478_122186157674024765_6170764990246105489_n.jpg"
          gradientColors={["#FB0303", "#950202"]}
        />
      </div>

      <div className="bg-blue-500 text-white p-6">
        <h1 className="text-4xl font-bold">Welcome to My Static Homepage</h1>
        <p className="mt-4">This content is not editable through the CMS.</p>
      </div>
      <Footer />
    </div>
  );
}

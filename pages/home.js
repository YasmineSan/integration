import { useState } from "react";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BeerHighlight from "../components/BeerHighlight";
import Hero from "../components/Hero";
import BeerCarousel from "../components/BeerCarousel";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar />
      <div className="relative">
        <section className="relative h-screen">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            src="\img\vecteezy_beer-is-pouring-into-glass-with-foam-sliding-down-side-of_1620413.mp4"
            autoPlay
            loop
            muted
          />
        </section>
      </div>
      <div className=" inset-0 flex items-center justify-center">
        <h2 className="font-dancing italic text-center text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl">
          Laissons fleurir nos rêves.
        </h2>
      </div>
      <Hero />
      {/* <div className="p-4">
        <BeerHighlight
          beerName="Floribière -  Souvenir"
          imageUrl="\img\453505478_122186157674024765_6170764990246105489_n.jpg"
          gradientColors={["#FB0303", "#950202"]}
        />
      </div> */}
    <BeerCarousel />
      {/* <div className="bg-blue-500 text-white p-6">
        <h1 className="text-4xl font-bold">Welcome to My Static Homepage</h1>
        <p className="mt-4">This content is not editable through the CMS.</p>
      </div> */}
      <Footer />
    </div>
  );
}

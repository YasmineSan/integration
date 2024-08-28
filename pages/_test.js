import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";

export default function ParallaxFooter() {
  const [scrollY, setScrollY] = useState(0);
  const footerRef = useRef(null);

  const handleScroll = () => {
    const offsetY = window.scrollY;
    setScrollY(offsetY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <section className="relative h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="\img\vecteezy_beer-beer-foam-beer-bubbles-light-beer_39404101.mp4"
          autoPlay
          loop
          muted
        />
        <div className="relative z-10 bg-red-500 bg-opacity-50 text-white p-6 flex justify-center items-center h-full">
          <p className="text-3xl font-bold">
            Chez Floribière, nous étions loin d'imaginer l'aventure que pouvait
            représenter la création d'une bière au coquelicot. C'est au prix
            d'une remise en question permanente que nous progressons.
          </p>
        </div>
      </section>
      <section className="bg-blue-500 text-white p-6">
        <p>Quelque chose</p>
      </section>
      <Footer />
    </>
  );
}

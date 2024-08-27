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
    src="https://scontent.fbru2-1.fna.fbcdn.net/v/t39.30808-6/438906167_122169957182024765_3362404178392777280_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=nMebbGTWM7cQ7kNvgHjd6Zt&_nc_ht=scontent.fbru2-1.fna&oh=00_AYAsOOSEpl3RZrW8Ng8C3dzKAVlRZ0y4wWjhPXET8_b27g&oe=66D2B948"
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
        gradientColors={['#FB0303', '#950202']}
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

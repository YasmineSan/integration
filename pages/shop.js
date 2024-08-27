import React from 'react';
import Navbar from '../components/Navbar';
import BeerCard from '../components/BeerCard';

export default function Shop() {
  return (
    <div className="py-4">
      <Navbar />
      <img src="/img/top-view-beer-frame-with-copy-space.jpg" alt="Shop background" />
      <h1 className="font-kameron text-4xl sm:text-xs text-center my-8">Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <BeerCard
          beerName="Souvenir"
          breweryName="Floribière"
          imageUrl="/img/453505478_122186157674024765_6170764990246105489_n.jpg"
          gradientColors={['#FB0303', '#950202']}
          imageHeight="h-64"
          WidthCard="w-full"
        />
        <BeerCard
          beerName="L'autre"
          breweryName="Floribière"
          imageUrl="/img/top-view-beer-frame-with-copy-space.jpg"
          gradientColors={['#ffffff', '#000000']}
          imageHeight="h-64"
          WidthCard="w-full"
        />
        <BeerCard
          beerName="L'alternative"
          breweryName="Floribière"
          imageUrl="/img/Idée 1biere.png"
          gradientColors={['#3D7C0C', '#BBBF03']}
          imageHeight="h-64"
          WidthCard="w-full"
        />
      </div>
    </div>
  );
}

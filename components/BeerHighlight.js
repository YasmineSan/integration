import React from 'react';

const BeerHighlight = ({ beerName, imageUrl, gradientColors }) => {
  return (
    <div className="bg-gradient-to-r from-flori-red to-flori-dark-red rounded-lg max-w-md mx-auto">
      <div className="flex flex-col items-center shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded">
        <img src={imageUrl} alt={beerName} className="w-full h-auto rounded-t-lg" />
        <h2 className="text-white text-3xl font-dancing font-bold my-4">{beerName}</h2>
        <button className="bg-[#FB0303] text-white font-bold p-2 mb-4 rounded-full hover:bg-white hover:text-[#FB0303] transition">
          <a href='/shop'>Go to Shop</a>
        </button>
      </div>
    </div>
  );
};

export default BeerHighlight;

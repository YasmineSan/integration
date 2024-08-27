import React from 'react';
import classNames from 'classnames';

const BeerHighlight = ({ beerName, imageUrl, gradientColors }) => {
  const gradientClass = classNames(
    'bg-gradient-to-r relative overflow-hidden', // Ajout de `relative` et `overflow-hidden` pour le positionnement des bulles
    {
      'from-white to-black': gradientColors[0] === '#ffffff' && gradientColors[1] === '#000000',
      'from-flori-red to-flori-dark-red': gradientColors[0] === '#FB0303' && gradientColors[1] === '#950202',
      'from-flori-green to-flori-dark-green': gradientColors[0] === '#3D7C0C' && gradientColors[1] === '#BBBF03',
    }
  );

  return (
    <div className={`${gradientClass} rounded-lg max-w-md mx-auto`}>
      <div className="bubble-container absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="bubble"></div>
        ))}
      </div>
      <div className="flex flex-col items-center shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded relative z-10">
        <img src={imageUrl} alt={beerName} className="w-full h-64 object-cover rounded-t-lg" />
        <h2 className="text-white text-3xl font-dancing font-bold my-4">{beerName}</h2>
        <button className="bg-[#FB0303] text-white font-bold p-2 my-4 rounded-full hover:bg-white hover:text-[#FB0303] transition">
          <a href='/shop'>Go to Shop</a>
        </button>
      </div>
    </div>
  );
};

export default BeerHighlight;

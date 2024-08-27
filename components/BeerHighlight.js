import React from 'react';
import classNames from 'classnames';

const BeerHighlight = ({ beerName, imageUrl, gradientColors }) => {
  const gradientClass = classNames(
    'bg-gradient-to-r',
    {
      'from-white to-black': gradientColors[0] === '#ffffff' && gradientColors[1] === '#000000',
      'from-flori-red to-flori-dark-red': gradientColors[0] === '#FB0303' && gradientColors[1] === '#950202',
      // Ajoutez d'autres combinaisons de classes ici si nécessaire
    }
  );

  return (
    <div className={`${gradientClass} rounded-lg max-w-md mx-auto`}>
      <div className="flex flex-col items-center shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded">
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

import React from 'react';
import classNames from 'classnames';

const BeerCard = ({ beerName, breweryName, imageUrl, gradientColors, imageHeight, WidthCard }) => {
  const gradientClass = classNames(
    'bg-gradient-to-b', // Gradient de haut en bas
    {
      'from-white to-black': gradientColors[0] === '#ffffff' && gradientColors[1] === '#000000',
      'from-flori-red to-flori-dark-red': gradientColors[0] === '#FB0303' && gradientColors[1] === '#950202',
      'from-flori-green to-flori-dark-green': gradientColors[0] === '#3D7C0C' && gradientColors[1] === '#BBBF03',
    }
  );

  return (
    <div className={`${WidthCard} h-96 mx-auto overflow-hidden rounded-lg shadow-lg ${gradientClass}`}>
      <img src={imageUrl} alt={beerName} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-white text-2xl font-bold">{beerName}</h2>
        {breweryName && <p className="text-white text-sm">{breweryName}</p>}
        <button className="mt-4 bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-red-600 transition">
          Go to Shop
        </button>
      </div>
    </div>
  );
};

export default BeerCard;

import React from "react";
import classNames from "classnames";

const BeerCard = ({
  beerName,
  breweryName,
  imageUrl,
  gradientColors,
  imageHeight,
  WidthCard,
}) => {
  const gradientClass = classNames(
    "bg-gradient-to-b", // Gradient de haut en bas
    {
      "from-white to-black":
        gradientColors[0] === "#ffffff" && gradientColors[1] === "#000000",
      "from-flori-red to-flori-dark-red":
        gradientColors[0] === "#FB0303" && gradientColors[1] === "#950202",
      "from-flori-green to-flori-dark-green":
        gradientColors[0] === "#3D7C0C" && gradientColors[1] === "#BBBF03",
      "from-coral to-darkorange":
        gradientColors[0] === "#FF7F50" && gradientColors[1] === "#FF4500",
      "from-skyblue to-steelblue":
        gradientColors[0] === "#87CEEB" && gradientColors[1] === "#4682B4",
      "from-blueviolet to-indigo":
        gradientColors[0] === "#8A2BE2" && gradientColors[1] === "#4B0082",
    }
  );

  return (
    <div
      className={`${WidthCard} h-96 mx-auto overflow-hidden rounded-lg shadow-lg ${gradientClass}`}
    >
      <img
        src={imageUrl}
        alt={beerName}
        className={`w-full ${imageHeight} object-cover`}
      />
      <div className="p-4">
        <h2 className="text-white text-2xl font-bold">{beerName}</h2>
        {breweryName && <p className="text-white text-sm">{breweryName}</p>}
        <button className="mt-4 bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-red-600 transition">
          <a href="/shop">Go to Shop</a>
        </button>
      </div>
    </div>
  );
};

export default BeerCard;

import React from "react";

export default function Hero2() {
  return (
    <section className="relative w-full h-screen bg-black">
      {/* Contenu du Hero */}
      <div className="absolute top-1/4 left-10">
        {/* <h3 className="text-gray-200 text-sm">
          Neque porro quisquam est qui dolorem ipsum quia
        </h3> */}
        <h1 className="font-kameron text-6xl text-gray-100 mt-4">
          LOREM IPSUM NEQUE
          <br />
          PORRO QUI DOLOREM
        </h1>
        <p className="text-gray-200 text-lg mt-4 max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
        <button className="mt-6 bg-white text-gray-800 font-semibold py-3 px-6 rounded shadow-lg hover:bg-gray-200">
          Add to cart
        </button>
      </div>

      {/* Zone grise à droite */}
      <div className="absolute right-0 bottom-20 h-2/3 w-1/2  bg-gray-300 rounded-l-3xl"></div>
    </section>
  );
}

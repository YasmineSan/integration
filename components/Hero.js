import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Texte descriptif */}
        <div className="text-left md:w-1/2">
          <h1 className="text-4xl font-bold text-black">
            Savourez l'instant avec{" "}
            <span className="text-[#950202]">Souvenir</span>
          </h1>
          <p className="mt-4 text-lg text-gray-800">
            La bière artisanale infusée aux pétales de coquelicot.
          </p>
          <p className="mt-4 text-gray-700">
            Découvrez une expérience florale unique, où chaque gorgée vous
            ramène à l'essence de la nature.
          </p>
          <a
            href="#"
            className="mt-6 inline-block bg-[#950202] text-white py-3 px-6 rounded-lg shadow-lg hover:bg-[#e6554d] transition duration-300"
          >
            Commander maintenant
          </a>
        </div>

        {/* Image de la bière */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src="\img\441178066_122172568814024765_1572630194947601835_n.jpg" // Remplace par le chemin de ton image
            alt="Bière Souvenir"
            className="w-3/4 md:w-full object-contain"
          />
        </div>
      </div>

      {/* Pétales de coquelicot en décoration */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="\img\396956853_122133843398024765_796370273480758153_n.jpg" // Remplace par l'image des coquelicots
          alt="Coquelicots"
          className="absolute w-full h-full object-cover opacity-10"
        />
      </div>
    </section>
  );
};

export default Hero;

import { useRouter } from "next/router";
import React from "react";
import products from "../../lib/products";
import Navbar from "../../components/Navbar"; 

const BeerDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p>Produit non trouvé</p>;
  }

  return (
    <div className="bg-gray-800 min-h-screen">
      {/* Navbar */}
      <div className="relative z-10">
        <Navbar />
      </div>
      
      {/* Conteneur principal avec un padding supérieur ajusté pour éviter le chevauchement */}
      <div className="container mx-auto pt-24 p-8"> {/* Utilisation de 'pt-24' pour l'espacement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Colonne de gauche pour le texte */}
          <div className="text-white">
            <h1 className="text-4xl font-bold font-kameron mb-4">{product.name}</h1>
            <p className="mb-6">{product.description}</p>
            <p className="text-2xl font-bold mb-6">{product.price}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Ajouter au panier
            </button>
          </div>

          {/* Colonne de droite pour l'image */}
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeerDetails;

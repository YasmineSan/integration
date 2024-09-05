import Link from "next/link";
import React from "react";
import { products } from "../lib/products"; // Import des produits centralisés

const Shopping = () => {
  return (
    <section className="p-8">
      <h1 className="text-center text-3xl font-bold mb-4">SHOP</h1>
      <p className="text-center mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
  
      {/* Grid pour les produits */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow-md text-center"
          >
            {/* Image de chaque bière */}
            <img
              src={product.image}
              alt={product.name}
              className="h-48 w-full object-cover mb-4"
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-500">{product.price}</p>
            <Link href={`/beer/${product.id}`}>
              <button className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
                Voir les détails
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shopping;

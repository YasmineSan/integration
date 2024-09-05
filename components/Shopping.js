import React from "react";

const ShoppingSection = () => {
  const products = [
    { id: 1, name: "Souvenir", price: "$7.00/day" },
    { id: 2, name: "La petite Soeur", price: "$2.00/day" },
    { id: 3, name: "L'alternative", price: "$22.00/day" },
    { id: 4, name: "Fonds de boc", price: "$75.00/day" },
    { id: 5, name: "Pisse au Lit", price: "$72.00/day" },
    { id: 6, name: "L'épautrée", price: "$72.00/day" },
    { id: 7, name: "La viollette", price: "$72.00/day" },
    { id: 8, name: "La geranium comestible", price: "$72.00/day" },
  ];

  return (
    <section className="p-8">
      <h1 className="text-center text-3xl font-bold mb-4">SHOP</h1>
      <p className="text-center mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      {/* Grid for products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow-md text-center"
          >
            <div className="h-48 bg-gray-200 mb-4"></div>{" "}
            {/* Image Placeholder */}
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-500">{product.price}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Dans le panier !
            </button>
          </div>
        ))}
      </div>

      {/* Button to show more */}
      <div className="mt-8 flex justify-center">
        <button className="bg-gray-300 text-gray-700 px-6 py-2 rounded">
          Show More
        </button>
      </div>
    </section>
  );
};

export default ShoppingSection;

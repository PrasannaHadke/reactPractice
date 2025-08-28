import React from 'react';

function Property({ product }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {product.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg overflow-hidden p-4 hover:shadow-lg transition-shadow duration-300"
        >
          <h1 className="text-lg font-bold mb-2 text-gray-800">{item.title}</h1>
          <img
            src={item.images[0]}
            alt={item.title}
            className="w-full h-48 object-cover rounded"
          />
          <p className="text-gray-600 mt-2">{item.description}</p>
          <p className="text-blue-600 font-semibold mt-2">Price: ${item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Property;

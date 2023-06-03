/* eslint-disable react/prop-types */

const ProductCard = ({ title, image, price, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        className="h-52 w-full object-cover object-center"
        src={image}
        alt={title}
      />
      <div className="p-6">
        <h2 className="text-gray-900 font-bold text-2xl mb-2">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-gray-900 font-bold text-xl">${price}</span>
          <button className="ml-4 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

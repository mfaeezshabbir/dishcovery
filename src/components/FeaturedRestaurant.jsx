// components/FeaturedRestaurants.js
import { featuredRestaurants } from '../data/restaurantsData';

const FeaturedRestaurants = () => {
  return (
    <div className="py-8">
      <h2 className="p-3 mb-8 text-4xl font-bold text-center text-white bg-blue-600">Featured Restaurants</h2>
      <div className="grid grid-cols-2 gap-8 p-8">
        {featuredRestaurants.map((restaurant) => (
          <div key={restaurant.id} className="relative overflow-hidden rounded-lg shadow-lg">
            <img src={restaurant.image} alt={restaurant.name} className="object-cover w-full h-64 transition-transform duration-300 ease-in-out transform hover:-rotate-3" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
              <h3 className="mb-2 text-2xl font-bold text-white">{restaurant.name}</h3>
              <div className="flex items-center mb-2 text-yellow-400">
                <span className="mr-1">&#9733;</span>
                <span>{restaurant.rating}</span>
              </div>
              <p className="text-gray-200">{restaurant.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedRestaurants;

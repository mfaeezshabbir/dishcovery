import { useState, useEffect } from 'react';
import axios from 'axios';
import Search from '../components/search';
import Results from '../components/results';

const Discover = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const response = await axios.get('/api/restaurants');
      setRestaurants(response.data);
      setLoading(false);
    };
    fetchRestaurants();
  }, []);

  return (
    <div className="bg-gray-100">
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Discover Nearby Restaurants
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Find the best places to eat near you
            </p>
            <Search />
            <Results restaurants={restaurants} loading={loading} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Discover;

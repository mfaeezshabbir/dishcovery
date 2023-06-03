// components/TrendingCategories.js
import { trendingCategories } from '../data/restaurantsData';

const TrendingCategories = () => {
    return (
        <div className="">
            <h2 className="p-3 mb-8 text-4xl font-bold text-center text-white bg-blue-600">Trending Categories</h2>
            <div className="flex flex-wrap justify-center p-8">
                {trendingCategories.map((category) => (
                    <div
                        key={category}
                        className="px-4 py-2 mb-4 mr-4 font-bold text-white transition-all duration-300 transform bg-pink-500 rounded-full hover:rotate-6 hover:scale-110"
                    >
                        {category}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrendingCategories;

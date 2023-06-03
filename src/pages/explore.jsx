import FeaturedRestaurant from "../components/FeaturedRestaurant.jsx";
import TrendingCategory from "../components/TrendingCategory.jsx";
import EditorialPick from "../components/EditorialPick.jsx";

const ExplorePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <TrendingCategory />
      <FeaturedRestaurant />
      <EditorialPick />
    </div>
  );
};

export default ExplorePage;

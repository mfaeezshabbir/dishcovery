import axios from "axios";

export const fetchNearestRestaurants = async (latitude, longitude) => {
  try {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`;
    const response = await axios.get(url);
    const { address } = response.data;
    const city = address.city || address.town || address.village;

    // Fetch restaurant details using a free restaurant data API (e.g., Zomato, Yelp, etc.)
    const restaurantUrl = `https://api.example.com/restaurants?city=${city}&limit=10`;
    const restaurantResponse = await axios.get(restaurantUrl);
    return restaurantResponse.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

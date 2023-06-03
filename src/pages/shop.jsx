import { productsData } from "../Data/data";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  return (
    <section className="shop py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Shop</h2>
        <h2 className="text-4xl font-bold mb-6">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsData.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;

import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext.jsx";
import Product from "../components/Product.jsx";
import Hero from "../components/Hero.jsx";

const Home = () => {
  // Get products from product context
  const { products } = useContext(ProductContext);

  // Filter only men's & women's clothing
  const filteredProducts = products.filter(
    (item) =>
      item.category === "men's clothing" || item.category === "women's clothing"
  );

  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredProducts.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext.jsx";
import Product from "../components/Product.jsx";
import Hero from "../components/Hero.jsx";
import { motion } from "framer-motion";

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

      <motion.section
        className="py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          {/* Title for the products section */}
          <motion.h2
            className="text-4xl font-semibold text-center mb-8 font-serif"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Our Products
          </motion.h2>

          {/* Product Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {filteredProducts.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;

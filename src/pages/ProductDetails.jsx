import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import { CartContext } from "../contexts/CartContext";
import { motion } from "framer-motion";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        <p className="text-xl font-serif">Loading...</p>
      </section>
    );
  }

  const { title, image, price, description } = product;

  return (
    <section className="pt-32 pb-20 min-h-screen bg-white px-4">
      <motion.h2
        className="text-5xl font-serif font-bold text-center mb-16 text-gray-800"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Product Details
      </motion.h2>

      <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Product Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={image}
            alt={title}
            className="rounded-xl max-w-sm shadow-lg border border-gray-200 hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Product Info */}
        <motion.div
          className="space-y-6 text-gray-700"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-serif font-semibold text-gray-900">
            {title}
          </h1>
          <div className="text-2xl font-bold text-red-600">${price}</div>
          <p className="text-base leading-relaxed text-gray-700 first-letter:uppercase first-line:tracking-wide">
            {description}
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => addToCart(product, product.id)}
            className="bg-black text-white px-10 py-3 rounded-full font-medium tracking-wide hover:bg-gray-800 transition"
          >
            Add to Cart
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductDetails;

import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import { CartContext } from "../contexts/CartContext";

const ProductDetails = () => {
  // get the product id from the url
  const { id } = useParams();

  // access context data
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  // find the product by id
  const product = products.find((item) => item.id === parseInt(id));

  // show loading or not found message
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        <p className="text-xl">Loading...</p>
      </section>
    );
  }

  // destructure product data
  const { title, image, price, description } = product;

  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        {/* image & text wrapper */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* product image */}
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img
              className="max-w-[200px] lg:max-w-sm"
              src={image}
              alt={title}
            />
          </div>
          {/* product text */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {title}
            </h1>
            <div className="text-xl text-red-500 font-medium mb-6">
              ${price}
            </div>
            <p className="mb-8">{description}</p>
            <button
              onClick={() => addToCart(product, product.id)}
              className="bg-black py-4 px-8 text-white hover:bg-gray-800 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

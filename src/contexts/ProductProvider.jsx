import React, { useEffect, useState } from "react";
import { ProductContext } from "./ProductContext";

const ProductProvider = ({ children }) => {
    //products state
    const [products, setProducts] = useState([]);
    //fetch products
    useEffect(() => {
      const fetchProducts = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      };
      fetchProducts();
    }, []);
    return (
      <ProductContext.Provider value={{ products }}>
        {children}
      </ProductContext.Provider>
    );
  };

export default ProductProvider;
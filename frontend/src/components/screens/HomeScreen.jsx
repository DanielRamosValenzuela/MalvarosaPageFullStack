import React, { useState, useEffect } from "react";
import { Products } from "../Product/Products";
import { productsData } from "../../data";

export const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!!productsData) setProducts(productsData);
  }, [setProducts]);

  return (
    <section>
      <Products products={products} />
    </section>
  );
};

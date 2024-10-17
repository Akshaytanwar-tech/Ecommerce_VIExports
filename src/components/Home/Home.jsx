import React from "react";
import "../../App.css";
import products from "../../constant/products.json";
import ProductCard from "../ProductCard/ProductCard";

const Home = () => {
  return (
    <>
      <div class="product-grid">
        {products.map((e) => {
          return (
            <ProductCard
              product_name={e.product_name}
              product_price={e.product_price}
              product_image={e.image_link}
              product_id={e.id}
              key={e.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;

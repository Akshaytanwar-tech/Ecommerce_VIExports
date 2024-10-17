import React from "react";
import { useNavigate } from "react-router-dom";
const ProductCard = ({
  product_name,
  product_price,
  product_image,
  product_id,
}) => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(`/productDetails/${product_id}`);
  };
  return (
    <>
      <div class="product-card" onClick={handleOnClick}>
        <div class="product-image">
          <img src={product_image} alt="Product Image" />
        </div>
        <div class="product-info">
          <h3 class="product-name">{product_name}</h3>
          <p class="product-price">₹{product_price}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

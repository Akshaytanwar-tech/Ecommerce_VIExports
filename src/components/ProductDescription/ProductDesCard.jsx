import React, { useEffect, useState } from "react";
import "./Productdes.css";
import { useNavigate, useParams } from "react-router-dom";
import products from "../../constant/products.json";
import { additem } from "../../Apis/cart";
const ProductDesCard = () => {
  const navigate = useNavigate();
  const [product, setproduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const data = products.filter((e) => {
      return id == e.id;
    });
    setproduct(data);
  }, []);

  const handleCart = (item_name, item_price) => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      additem(item_name, item_price).then((res) => {
        navigate("/cart");
      });
    }
  };
  const HandleCheckout = (id) => {
    console.log(!localStorage.getItem("token"));
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      navigate(`/checkout/${id}`);
    }
  };

  return (
    <div className="body">
      {product.map((e) => {
        return (
          <div class="container">
            <div class="product-image">
              <img src={e.image_link} alt="Product Image" />
            </div>

            <div class="product-details">
              <h2 class="product-name">{e.product_name}</h2>
              <p class="product-description">{e.product_description}</p>

              <div class="product-price">₹{e.product_price}</div>

              <div class="product-rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <span>({e.product_rating}/5)</span>
              </div>

              <div class="size-options">
                <label for="size">Size:</label>
                <select id="size" name="size">
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>

              <div class="button-group">
                <button
                  class="add-to-cart"
                  onClick={() => {
                    handleCart(e.product_name, e.product_price);
                  }}
                >
                  Add to Cart
                </button>
                <button class="buy-now" onClick={() => HandleCheckout(e.id)}>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductDesCard;

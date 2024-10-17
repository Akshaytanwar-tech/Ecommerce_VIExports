import React, { useEffect, useState } from "react";
import "./checkout.css";
import { createOrder, bulkOrder } from "../../../Apis/order";
import { fetchitem } from "../../../Apis/cart";
import products from "../../../constant/products.json";
import { useNavigate, useParams } from "react-router-dom";
const Checkout = () => {
  const navigate = useNavigate();
  const [product, setproduct] = useState({});
  const [bulkproduct, setbulkproduct] = useState([]);
  const [name, setname] = useState("");
  const [address, setaddress] = useState("");
  const param = useParams("id");

  useEffect(() => {
    if (param.id != "bulk") {
      const result = products.filter((res) => {
        return res.id == param.id;
      });
      setproduct(result[0]);
    } else {
      fetchitem().then((res) => {
        setbulkproduct(res);
      });
    }
  }, []);

  const handleConfirmOrder = (e) => {
    e.preventDefault();
    if (param.id != "bulk") {
      createOrder(
        product.product_name,
        product.product_price,
        1,
        name,
        address
      ).then((res) => {
        if (res.message == "Order created successfully") {
          navigate("/myorders");
        }
      });
    } else {
      bulkOrder(bulkproduct, name, address).then((res) => {
        navigate("/myorders");
      });
    }
    setname("");
    setaddress("");
  };
  return (
    <>
      <div class="checkout-container">
        <h2 class="checkout-title">Checkout</h2>

        <form class="checkout-form">
          <div class="form-group">
            <label for="name" class="form-label">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="Enter your full name"
              onChange={(e) => {
                setname(e.target.value);
              }}
              required
            />
          </div>

          <div class="form-group">
            <label for="address" class="form-label">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              value={address}
              placeholder="Enter your address"
              onChange={(e) => {
                setaddress(e.target.value);
              }}
              required
            ></textarea>
          </div>

          <div class="payment-option">
            <div class="payment-option-title">Payment Method</div>
            <div class="payment-method">
              Cash on Delivery (Only option available)
            </div>
          </div>

          <button
            type="submit"
            class="checkout-btn"
            onClick={handleConfirmOrder}
          >
            Confirm Order
          </button>
        </form>
      </div>
    </>
  );
};

export default Checkout;

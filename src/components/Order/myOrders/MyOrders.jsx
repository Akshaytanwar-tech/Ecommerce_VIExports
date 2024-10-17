import React, { useEffect, useState } from "react";
import "./myorder.css";
import { fetchOrder } from "../../../Apis/order";

const MyOrders = () => {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    fetchOrder().then((res) => {
      setproducts(res);
    });
  }, []);
  return (
    <div>
      <div class="orders-container">
        <h2 class="orders-title">My Orders</h2>
        <div class="order-items">
          {products.map((e, i) => {
            return (
              <div class="order-item" key={i}>
                <div class="order-item-details">
                  <div class="order-item-image">
                    <img
                      src={`https://dummyimage.com/100x100/000/fff&text=Order+${
                        i + 1
                      }`}
                      alt="Order 1"
                    />
                  </div>
                  <div class="order-item-info">
                    <span class="order-item-name">{e.item_name}</span>
                    <span class="order-item-date">{e.order_date}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;

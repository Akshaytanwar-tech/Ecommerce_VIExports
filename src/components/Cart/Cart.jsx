import React, { useEffect, useState } from "react";
import "./cart.css";
import { fetchitem, removeitem, updatequantity } from "../../Apis/cart";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate();
  const [cart, setcart] = useState([]);
  let total_price = 0;
  useEffect(() => {
    fetchitem().then((res) => {
      setcart(res);
    });
  }, []);

  const handleRemoveCart = (id) => {
    removeitem(id);
    const remaining_items = cart.filter((e) => {
      return e.id != id;
    });
    setcart(remaining_items);
  };

  const handleTotalprice = (price, quantity) => {
    total_price = total_price + price * quantity;
  };

  const handleQuantity = (value, quantity, id) => {
    let temp_value = parseInt(value) + quantity;

    if (temp_value >= 1) {
      updatequantity(temp_value, id).then((res) => {
        console.log(res);
      });
      window.location.reload();
    }
  };

  const handlebulkorder = () => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
    navigate("/checkout/bulk");
  };
  return (
    <>
      <div class="cart-container">
        <h2 class="cart-title">Shopping Cart</h2>
        {cart.map((e, i) => {
          handleTotalprice(e.item_price, e.quantity);
          return (
            <div class="cart-items">
              <div class="cart-item">
                <div class="cart-item-details">
                  <div class="cart-item-image">
                    <img
                      src={`https://dummyimage.com/100x100/000/fff&text=Product+${
                        i + 1
                      }`}
                      alt="Product 1"
                    />
                  </div>
                  <div class="cart-item-info">
                    <span class="cart-item-name">{e.item_name}</span>
                    <button
                      onClick={() => {
                        handleRemoveCart(e.id);
                      }}
                      style={{
                        backgroundColor: "red",
                        color: "white",
                        border: "none",
                        padding: "10px 20px",
                        cursor: "pointer",
                        borderRadius: "5px",
                      }}
                    >
                      Remove from Cart
                    </button>
                  </div>
                </div>
                <div class="cart-item-quantity">
                  <span>Quantity:</span>
                  <span>
                    {" "}
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <button
                        onClick={(event) =>
                          handleQuantity(event.target.value, e.quantity, e.id)
                        }
                        style={{
                          backgroundColor: "#f44336",
                          color: "white",
                          border: "none",
                          padding: "5px 10px",
                          cursor: "pointer",
                          borderRadius: "5px",
                        }}
                        value={-1}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={e.quantity}
                        min="1"
                        style={{
                          width: "50px",
                          textAlign: "center",
                          margin: "0 10px",
                          border: "1px solid #ccc",
                          borderRadius: "5px",
                        }}
                        readOnly // Making input read-only to prevent manual changes
                      />
                      <button
                        onClick={(event) =>
                          handleQuantity(event.target.value, e.quantity, e.id)
                        }
                        value={1}
                        style={{
                          backgroundColor: "#4CAF50",
                          color: "white",
                          border: "none",
                          padding: "5px 10px",
                          cursor: "pointer",
                          borderRadius: "5px",
                        }}
                      >
                        +
                      </button>
                    </div>
                  </span>
                </div>
                <div class="cart-item-total">₹{e.item_price}</div>
              </div>
            </div>
          );
        })}

        <div class="cart-checkout-section">
          <div class="cart-total-price">Total: ₹{total_price}</div>
          <button class="cart-checkout-btn" onClick={handlebulkorder}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;

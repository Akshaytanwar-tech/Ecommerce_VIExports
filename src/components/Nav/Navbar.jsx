import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { fetchitem } from "../../Apis/cart";
const Navbar = () => {
  const navigate = useNavigate();
  const [cartitems, setcartitems] = useState(0);

  useEffect(() => {
    fetchitem().then((res) => {
      setcartitems(res.length);
    });
  }, []);
  const handlelogin = () => {
    navigate("/login");
  };
  const handlelogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <>
      <nav class="navbar">
        <div class="navbar-container">
          <ul class="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>

          <h1 class="site-name">Ecommerce Store</h1>

          <ul class="nav-links profile-section">
            <li class="cart">
              <Link to="/cart">
                <i class="fas fa-shopping-cart"></i>
                <span class="cart-count">{cartitems}</span>
              </Link>
            </li>
            {!localStorage.getItem("token") ? (
              ""
            ) : (
              <li>
                <Link to="/myorders">My Orders</Link>
              </li>
            )}
            {!localStorage.getItem("token") ? (
              <li class="profile">
                <button
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    border: "none",
                    borderRadius: "50%",
                    padding: "10px 20px",
                    fontSize: "14px",
                    cursor: "pointer",
                  }}
                  onClick={handlelogin}
                >
                  Login
                </button>
              </li>
            ) : (
              <li class="profile">
                <button
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    borderRadius: "50%",
                    padding: "10px 20px",
                    fontSize: "14px",
                    cursor: "pointer",
                  }}
                  onClick={handlelogout}
                >
                  Log Out
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

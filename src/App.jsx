import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import ProductDesCard from "./components/ProductDescription/ProductDesCard";
import Cart from "./components/Cart/Cart";
import MyOrders from "./components/Order/myOrders/MyOrders";
import Checkout from "./components/Order/Checkout/Checkout";
import ConfirModel from "./components/Order/Modal/confirModel";
import Login from "./components/Auth/Login/Login";
import Signup from "./components/Auth/SIgnup/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productDetails/:id" element={<ProductDesCard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/checkout/:id" element={<Checkout />} />
          <Route path="/modal" element={<ConfirModel />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

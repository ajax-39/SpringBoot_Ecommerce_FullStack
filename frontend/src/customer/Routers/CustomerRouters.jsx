import React from "react";
import Product from "../components/Product/Product";
import Navigation from "../components/navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import HomePage from "../pages/HomePage/HomePage";
import Cart from "../components/Cart/Cart";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Checkout from "../components/Checkout/Checkout";
import Order from "../components/Order/Order";
import OrderDetails from "../components/Order/OrderDetails";

const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account/order" element={<Order />} />
        <Route path="/account/order/:orderId" element={<OrderDetails />} />
      </Routes>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRouters;

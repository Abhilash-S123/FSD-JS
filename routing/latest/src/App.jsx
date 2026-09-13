import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Products from "./routing-component/Products";
import Navbars from "./routing-component/Navbar";
import Home from "./routing-component/Home";
import ProductDetails from "./routing-component/ProductDetails";
import NotFound from "./routing-component/NotFound";

function App() {
  return (
    <>
      <Navbars />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </>
  );
}

export default App;

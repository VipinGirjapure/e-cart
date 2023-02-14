import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "../../pages/cart/Cart";
import LogIn from "../../pages/log_in/LogIn";
import Products from "../../pages/products/Products";
import ProductDetails from "../../pages/product_details/ProductDetails";
import Header from "../header/Header";

const RoutesComp = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details/:id" element={<ProductDetails />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutesComp;

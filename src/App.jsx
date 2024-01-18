import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Men from "./Components/Shop/Men";
import ProductPage from "./Components/Shop/ProductPage/ProductPage";
import Cart from "./Components/Cart/Cart";
import { CartProvider } from "react-use-cart";
import Display from "./Components/Display";
import Address from "./Components/Checkout/Address";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/men" element={<Men />} />
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/display" element={<Display />} />
          <Route path="/address" element={<Address />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/display" element={<Display />} />
        </Routes>
      </CartProvider>
      <Footer/>
    </>
  );
}

export default App;

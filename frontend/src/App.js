import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Products from "./pages/Products";
import ShopCategory from "./pages/ShopCategory";
import Cart from "./pages/Cart";
import Footer from "./components/Footer/Footer";
import men from "./components/assets/banner_mens.png";
import women from "./components/assets/banner_women.png";
import kid from "./components/assets/banner_kids.png";

function App() {
  return (
    <div>
      {" "}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/men"
            element={<ShopCategory banner={men} category="men" />}
          />
          <Route
            path="/women"
            element={<ShopCategory banner={women} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kid} category="kid" />}
          />
          <Route path="/product" element={<Products />}>
            <Route path=":productId" element={<Products />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

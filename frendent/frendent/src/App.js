import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import VideoPlayer from "./videoslider";
import Slider from "./Slider";
import Newvideo from "./Newvideo";

import Product from "./Product";
import ProductDetails from "./ProductDetails";
import CartPage from "./CartPage";

import LoginPage from "./LoginPage";
import PaymentPage from "./PaymentPage";

import CircleSteps from "./CircleSteps";
import ChooseProduct from "./ChooseProduct";



import Features from "./icon";

import HomeProducts from "./HomeProducts";
import Left from "./Left";




function App() {
  return (
    <div className="App">

      
      <Header />

      <Routes>

        
        <Route
          path="/"
          element={
            <>
              <VideoPlayer />
              <Slider />
              <Left/>
              <Newvideo />
              <CircleSteps />
              <Product />
           <HomeProducts/>
            
              <Features />
              <Footer />
            </>
          }
        />

        {/* PRODUCT DETAILS */}
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* CART */}
        <Route path="/cart" element={<CartPage />} />

        {/* LOGIN */}
        <Route path="/login" element={<LoginPage />} />

    
        <Route path="/payment" element={<PaymentPage />} />

        {/* CATEGORY */}
        <Route path="/men" element={<Product />} />
        <Route path="/women" element={<Product />} />
        <Route path="/kids" element={<Product />} />

        <Route path="/products/:category" element={<Product />} />

        {/* OTHER PAGES */}
        <Route path="/choose" element={<ChooseProduct />} />
     
     
          <Route path="/products/men" element={<Product category="men" />} />
  <Route path="/products/women" element={<Product category="women" />} />
  <Route path="/products/kids" element={<Product category="kids" />} />

      </Routes>

    </div>
  );
}

export default App;
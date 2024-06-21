import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./Components/Login/Login.jsx";
import Wishlist from "./Components/Wishlist/Wishlist.jsx";
import { Navbar } from "./Components/Header/Navbar.jsx";
import CrueltyFree from "./Components/Home/CrueltyFree.jsx";
import Home from "./Components/Home/Home.jsx";
import { Card } from "./Components/ProductCard/Card.jsx";
import MostLoved from "./Components/Home/MostLoved.jsx";
import Featured from "./Components/Home/Featured.jsx";
import Gift from "./Components/Home/Gift.jsx";
import Button from "./Components/Button.jsx";
import ProductDetails from "./Components/ProductDetails/ProductDetails.jsx";
import HeroSection from "./Components/Header/HeroSection.jsx";
import Reviews from "./Components/Reviews/Reviews.jsx";
import ShopAll from "./Components/ShopALL/ShopAll.jsx";
import ReviewForm from "./Components/Reviews/ReviewForm.jsx";
import WishlistCard from "./Components/Wishlist/WishlistCard.jsx";
import Cart from "./Components/Cart/Cart.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Wishlist" element={<Wishlist />} />
      <Route path="/Navbar" element={<Navbar />} />
      <Route path="/CrueltyFree" element={<CrueltyFree />} />
      <Route path="/MostLoved" element={<MostLoved />} />
      <Route path="/Card" element={<Card />} />
      <Route path="/Featured" element={<Featured />} />
      <Route path="/Gift" element={<Gift />} />
      <Route path="/Button" element={<Button />} />
      <Route path="/ProductDetails" element={<ProductDetails />} />
      <Route path="/HeroSection" element={<HeroSection />} />
      <Route path="/Reviews" element={<Reviews />} />
      <Route path="/ShopAll" element={<ShopAll />} />
      <Route path="/ReviewForm" element={<ReviewForm />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/WishlistCard" element={<WishlistCard />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
  // </React.StrictMode>
);

import { useState } from "react";
import { Routes, Route, useRoutes } from "react-router-dom";
import Home from "./pages/home/Home";

import Navbar from "./components/navbar/Navbar";
import Shop from "./pages/shop/ShopPage";
import Footer from "./components/footer/Footer";
import Services from "./pages/services/Services";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Checkout from "./pages/checkout/Checkout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems] = useState([]);

  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/shop", element: <Shop /> },
    { path: "/services", element: <Services /> },
    { path: "/om", element: <About /> },
    { path: "/kontakt", element: <Contact /> },
    { path: "/checkout", element: <Checkout /> },
  ]);

  return (
    <>
      <div className="app">
        <ScrollToTop />
        <Navbar
          cartCount={cartItems.length}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <div className="content">{routes} </div>
        <Footer />
        <ToastContainer position="bottom-right" autoClose={2000} />
      </div>
    </>
  );
}

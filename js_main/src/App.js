import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// All pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import DemoProduct from "./pages/DemoProduct";

import { useDocTitle } from "./components/CustomHook";
import ScrollToTop from "./components/ScrollToTop";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer";
import Slacesite from "./pages/Slacesite";
import Details from "./pages/Details";

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: "ease-out-cubic",
      });
    };

    window.addEventListener("load", () => {
      aos_init();
    });
  }, []);

  useDocTitle("MLD | Molad e Konsult - Bespoke Web and Mobile Applications");

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-demo" element={<DemoProduct />} />
            <Route
              path="/site"
              element={
                <>
                  <NavBar />
                  <Slacesite />
                  <Footer />
                </>
              }
            />
            <Route
              path="/slacesite"
              element={
                <>
                  <NavBar />
                  <Details />
                  <Footer />
                </>
              }
            />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;

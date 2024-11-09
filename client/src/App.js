import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Products from "./Products";
import Contact from "./Contact";
import Cart from "./Cart";
import SingleProduct from "./SingleProduct";
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";

const theme = {
  colors: {
    heading: "#FFFFFF",         // Pure white for headings
    text: "#D3D3D3",            // Light gray for body text to ensure readability
    white: "#FFFFFF",           // Pure white for elements like buttons, borders
    pink: "#D9366A",           // Light Pink for backgrounds or text contrast
    helper: "#E0E0E0",          // Very light gray for hover states or helper elements
    bg: "#D9366A",              // Light Pink for background
    footer_bg: "#1C1C1C",       // Dark gray/black for footer background
    btn: "#FFFFFF",             // White buttons for contrast
    border: "rgba(255, 255, 255, 0.2)", // Light transparent white for borders
    hr: "#333333",              // Dark gray for horizontal rules
    gradient: "linear-gradient(0deg, #000000 0%, #4D4D4D 100%)", // Black to dark gray gradient
    shadow: "rgba(255, 255, 255, 0.1) 0px 1px 3px 0px", // Subtle white shadow
    shadowSupport: "rgba(255, 255, 255, 0.1) 0px 1px 4px", // Support shadow in white
  },
  media: {
    mobile: "768px",
    tab: "998px",
  },
};




const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;

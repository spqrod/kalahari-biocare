import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "./styles/global.css";
import "./styles/variables.css";

import Home from "./pages/Home.js";
import ProductCategoriesPage from "./pages/ProductCategoriesPage";
import ConsumerProducts from "./pages/ConsumerProducts.js";
import MongongoOil50Ml from "./pages/MongongoOil50Ml.js";

function App() {
  return (
    <div>
      <Router>
      <ScrollToTop />
      <Header />
        <Routes>
          <Route path = "/" element = { <Home /> } />
          <Route path = "/products" element = { <ProductCategoriesPage /> } />
          <Route path = "/products/consumer-products" element = { <ConsumerProducts /> } />
          <Route path = "/products/consumer-products/mongongo-oil-50ml" element = { <MongongoOil50Ml /> } />
          <Route path = "/contact" element = { <Home /> } />
          <Route path = "/about" element = { <Home /> } />
          <Route path = "/privacy" element = { <Home /> } />
          <Route path = "/terms" element = { <Home /> } />
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;

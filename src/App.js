import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "./styles/global.css";
import "./styles/variables.css";

import Home from "./pages/Home.js";
import Products from "./pages/Products";

function App() {
  return (
    <div>
      <Router>
      <ScrollToTop />
      <Header />
        <Routes>
          <Route path = "/" element = { <Home /> } />
          <Route path = "/products" element = { <Products /> } />
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

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "./styles/global.css";
import "./styles/variables.css";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Privacy from "./pages/Privacy.js";
import Terms from "./pages/Terms.js";
import ProductCategoriesPage from "./pages/ProductCategoriesPage";
import ConsumerProducts from "./pages/ConsumerProducts.js";
import CosmeticIngredients from "./pages/CosmeticIngredients.js";
import MongongoOil50Ml from "./pages/MongongoOil50Ml.js";

function App() {

  function LocationProvider({ children }) {
    return (<AnimatePresence>{ children }</AnimatePresence>)
  };

  function RoutesWithAnimation( ) {
    const location = useLocation();
    return (
      <Routes location={location} key={location.key}>
        <Route path = "/" element = { <Home /> } />
        <Route path = "/products" element = { <ProductCategoriesPage /> } />
        <Route path = "/products/consumer-products" element = { <ConsumerProducts /> } />
        <Route path = "/products/cosmetic-ingredients" element = { <CosmeticIngredients /> } />
        <Route path = "/products/consumer-products/mongongo-oil-50ml" element = { <MongongoOil50Ml /> } />
        <Route path = "/contact" element = { <Contact /> } />
        <Route path = "/about" element = { <About /> } />
        <Route path = "/privacy" element = { <Privacy /> } />
        <Route path = "/terms" element = { <Terms /> } />
      </Routes>
    );
  };

  return (
    <div>
      <Router>
        <ScrollToTop />
        <Header />
        <LocationProvider>
          <RoutesWithAnimation />
        </LocationProvider>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

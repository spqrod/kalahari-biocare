import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.js";

function App() {
  return (
    <div>
      <h1>Header</h1>
      <Router>
        <Routes>
          <Route path = "/" element = { <Home /> } />
          <Route path = "/products" element = { <Home /> } />
          <Route path = "/contact" element = { <Home /> } />
          <Route path = "/about" element = { <Home /> } />
          <Route path = "/privacy" element = { <Home /> } />
          <Route path = "/terms" element = { <Home /> } />
        </Routes>
      </Router>
      <h1>Footer</h1>
    </div>
  );
}

export default App;

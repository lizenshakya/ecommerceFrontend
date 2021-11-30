import React from 'react'
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/checkout" element={<Checkout/>}>
            </Route>
            <Route path="/" element={<Home/>}>
            </Route>
          </Routes>
        </div>
    </Router>
  );
}

export default App;

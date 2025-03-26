import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./Search";
import Navbar from "./NavBar";
import SetQuantity from "./popups/SetQuantity";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/setQuantity" element={<SetQuantity />} />
      </Routes>
    </Router>
  );
}

export default App;
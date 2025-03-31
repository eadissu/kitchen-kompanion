import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages

import ShoppingList from './pages/ShoppingList';
import Search from "./pages/Search";
import Navbar from "./components/NavBar";
import Kitchen from "./pages/Kitchen";
import Recipes from './pages/Recipes';
import Profile from './pages/Profile';
import Ingredient from './components/Ingredient';
import SetQuantity from "./popups/SetQuantity";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/setQuantity" element={<SetQuantity />} />
        <Route path="/Ingredient" element={<Ingredient />} />
        <Route path="/Kitchen" element={<Kitchen />} />
        <Route path="/shoppinglist" element={<ShoppingList />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
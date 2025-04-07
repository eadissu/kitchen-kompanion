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
import PopUps from './popups/PopUp';
import Components from './pages/Components';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/PopUps" element={<PopUps />} />
        <Route path="/Ingredient" element={<Ingredient />} />
        <Route path="/Kitchen" element={<Kitchen />} />
        <Route path="/shoppinglist" element={<ShoppingList />} />
        <Route path="/components" element={<Components/>} />
      </Routes>
    </Router>
  );
}

export default App;
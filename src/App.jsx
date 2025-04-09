import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/NavBar";
import Header from './components/Header';

import ShoppingList from './pages/ShoppingList';
import Kitchen from "./pages/Kitchen";
import Recipes from './pages/Recipes';
import Profile from './pages/Profile';

import "./App.css"
import "./index.css"

function App() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="app-container">
      <div className="app-frame">
        <Header pageName={currentPath} />
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Navigate to="/Kitchen" />} />
            <Route path="/Kitchen" element={<Kitchen />} />
            <Route path="/ShoppingList" element={<ShoppingList />} />
            <Route path="/Recipes" element={<Recipes />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </div>
        <Navbar />
      </div>
    </div>
  );
}

export default App;

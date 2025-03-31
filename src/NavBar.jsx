import { Link, useLocation } from "react-router-dom";
import './Navbar.css';

import shoppingIcon from './assets/icons/shoppinglist.svg';
import kitchenIcon from './assets/icons/kitchen.svg';
import recipesIcon from './assets/icons/recipes.svg';
import profileIcon from './assets/icons/profile.svg';

function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div>
      <div className="navbar-header">🍳 Kitchen Kompanion</div>

      <nav className="navbar">
        <ul className="navbar-links">
          <li>
            <Link to="/shoppinglist">
              <img
                src={shoppingIcon}
                alt="Shopping List"
                className={`nav-icon ${currentPath === '/shoppinglist' ? 'active' : ''}`}
              />
            </Link>
          </li>
          <li>
            <Link to="/kitchen">
              <img
                src={kitchenIcon}
                alt="Kitchen"
                className={`nav-icon ${currentPath === '/kitchen' ? 'active' : ''}`}
              />
            </Link>
          </li>
          <li>
            <Link to="/recipes">
              <img
                src={recipesIcon}
                alt="Recipes"
                className={`nav-icon ${currentPath === '/recipes' ? 'active' : ''}`}
              />
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <img
                src={profileIcon}
                alt="Profile"
                className={`nav-icon ${currentPath === '/profile' ? 'active' : ''}`}
              />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

import { Link, useLocation } from "react-router-dom";
import '../styling/NavBar.css';

import NavbarTab from "./NavbarTab";

/* Icons */
import PantryIcon from "../icons/PantryIcon";
import ShoppingListIcon from "../icons/ShoppingListIcon";
import RecipesIcon from "../icons/RecipesIcon";
import ProfileIcon from "../icons/ProfileIcon";

function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  console.log(currentPath);

  return (
    <div className="navbar">
      <nav className="navbar-inner">
        <Link to="/kitchen">
          <NavbarTab 
            icon={<PantryIcon />} 
            classname={currentPath === "/kitchen" ? "active" : ""}
          />
        </Link>
        <Link to="/shoppinglist">
          <NavbarTab 
            icon={<ShoppingListIcon />} 
            classname={currentPath === "/shoppinglist" ? "active" : ""}
          />
        </Link>
        <Link to="/recipes">
          <NavbarTab 
            icon={<RecipesIcon />}
            classname={currentPath === "/recipes" ? "active" : ""} 
          />
        </Link>
        <Link to="/profile">
          <NavbarTab 
            icon={<ProfileIcon />} 
            classname={currentPath === "/profile" ? "active" : ""}
          />
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;

/*
        <ul className="navbar-links">
          <li>
            <Link to="/shoppinglist">
              <img
                src={shoppingIcon}
                alt="Shopping List"
                className={`nav-icon ${currentPath === '/shoppinglist' ? 'active' : ''}`}
              />
            </Link>

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
          <li><Link to="/setQuantity">Popup</Link></li>
      </ul>
      </nav>
    </div>
  );
}

*/

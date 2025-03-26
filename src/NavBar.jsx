import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/setQuantity">Popup</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
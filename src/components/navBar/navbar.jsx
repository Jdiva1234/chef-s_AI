import { Link } from "react-router-dom";
import "./navbar.css";
function NavBar() {
  return (
    <nav className="nav">
      <div className="logo ">
        <h1>Chefs AI</h1>
      </div>
      <div className="links">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/surprise">
          Surprise Me
        </Link>
        <Link className="nav-link" to="/explore">
          Explore
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;

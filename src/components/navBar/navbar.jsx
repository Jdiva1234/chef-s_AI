import { Link } from "react-router-dom";
import "./navbar.css";
function NavBar() {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/surprise">Surprise Me</Link>
      <Link to="/explore">Explore</Link>
    </nav>
  );
}

export default NavBar;

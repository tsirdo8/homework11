import { Link } from "react-router-dom";
import "./Header.css"; // Create this CSS file for styling

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/projects" className="nav-link">
          Projects
        </Link>
        <Link to="/hobbies" className="nav-link">
          Hobbies
        </Link>
      </nav>
    </header>
  );
}

export default Header;

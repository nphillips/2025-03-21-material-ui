import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const NavComponent = ({ toggleNav }) => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="nav-wrapper">
      <IconButton
        onClick={toggleNav}
        color="inherit"
        className="hamburger"
        style={{ position: "absolute", left: "1rem", top: "1rem" }}
      >
        <MenuIcon />
      </IconButton>
      <div className="nav-content">
        <h2>
          <Link to="/">
            <span className="nav-crown">
              <span className="material-symbols-outlined">crown</span>
            </span>{" "}
            <span>The King’s Dashboard</span>
          </Link>
        </h2>

        <div className="nav-item">
          <Link
            to="/"
            className={
              pathname === "/" || pathname === "/dashboard" ? "active" : ""
            }
          >
            Dashboard
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/faq" className={pathname === "/faq" ? "active" : ""}>
            FAQ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavComponent;

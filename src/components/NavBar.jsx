import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-bar">
      <Link to="/">
        <div className="logo">
          <img src="/logo01.png" alt="TAISHOW Logo" />
        </div>
      </Link>
      <ul className="nav-options">
        <li>
          <Link className="nav-link" to="/Overview">
            電影資訊
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/Reviews">
            電影評論
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/Cinemas">
            影城資訊
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/Member">
            會員中心
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;

import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div className="logo">
          <Link to="/">
            <h1>CineMille</h1>
          </Link>
        </div>

        <ul>
          <Link to="/">
            <li>Abbonamenti</li>
          </Link>
          <Link to="/">
            <li>Sale</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
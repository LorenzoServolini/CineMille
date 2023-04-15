import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="bar">
        <div className="bar-container">
          <p>Via Roma - Firenze (FI)</p>
          <div className="bar-nav">
            <Link to="/">
              <p>Servizi</p>
            </Link>
            <Link to="/">
              <p>Contatti</p>
            </Link>
            <Link to="/">
              <p>Prezzi</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

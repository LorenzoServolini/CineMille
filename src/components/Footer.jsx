import React from "react";
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
import twitter from "../images/twitter.png"
import youtube from "../images/youtube.png"
import "../styles/footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="social">
          <img src={facebook} alt="Logo Facebook" />
          <img src={instagram} alt="Logo Instagram" />
          <img src={twitter} alt="Logo Twitter" />
          <img src={youtube} alt="Logo YouTube" />
        </div>
        <p>©CineMille 2023</p>
      </footer>
    );
  }
}

export default Footer;

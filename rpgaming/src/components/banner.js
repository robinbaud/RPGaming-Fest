import "./banner.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Typography } from "@mui/material";
import logo from "../assets/LOGO_ROUGE_BLC_RP_GAMING_FEST.png";
import fairyun from "../assets/Aurmidh.png";
import fairydeux from "../assets/Simlar`rahd.png";
import fairytrois from "../assets/Gaerlind.png";
function Banner() {
  return (
    <div className="bannerBackground">
      <div className="banner">
        <div>
          <img src={logo} style={{ width: "50px", height: "auto" }} />
          <Typography
            className="title"
            variant="h2"
            style={{ fontFamily: "Enchanted-Land" }}
          >
            RPGaming Fest
          </Typography>
          <Typography
            className="title"
            variant="h5"
            style={{ fontFamily: "Poppins-Regular" }}
          >
            Parc des Expositions à Rouen
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Banner;

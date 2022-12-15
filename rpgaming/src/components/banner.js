import "./banner.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Typography } from "@mui/material";
import logo from "../assets/LOGO_COULEUR_RP_GAMING_FEST2.png";
import fairyun from "../assets/Aurmidh.png";
import fairydeux from "../assets/Simlar`rahd.png";
import fairytrois from "../assets/Gaerlind.png";
function Banner() {
  return (
    <div className="bannerBackground">
      <div className="banner">
        <img
          src={fairyun}
          style={{
            position: "absolute",
            top: "53%",
            left: "15%",
            width: "70px",
          }}
        />
        <img
          src={fairydeux}
          style={{
            position: "absolute",
            top: "53%",
            left: "43%",
            width: "70px",
          }}
        />
        <img
          src={fairytrois}
          style={{
            position: "absolute",
            top: "53%",
            left: "71%",
            width: "70px",
          }}
        />
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
            style={{ fontFamily: "Poppins", fontSize: "bold" }}
          >
            Parc des Expositions à Rouen
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Banner;

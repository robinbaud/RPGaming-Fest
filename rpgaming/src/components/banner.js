import "./banner.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Typography } from "@mui/material";
import logo from "../assets/LOGO_COULEUR_RP_GAMING_FEST2.png";
function Banner() {
  return (
    <div>
      <div className="banner">
        <img src={logo} style={{ width: "50px", height: "auto" }} />
        <Typography
          className="title"
          variant="h2"
          style={{ fontFamily: "Enchanted-Land" }}
        >
          RPGaming Fest
        </Typography>
        <div style={{ width: "100%", height: "100%" }}></div>
      </div>
    </div>
  );
}

export default Banner;

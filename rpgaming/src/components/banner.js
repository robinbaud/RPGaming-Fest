import "./banner.css";

import { Typography } from "@mui/material";
import logo from "../assets/LOGO_ROUGE_BLC_RP_GAMING_FEST.png";

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

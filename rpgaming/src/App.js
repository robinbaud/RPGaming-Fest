import "./App.css";

import { Button, TableCell, TableRow, Typography } from "@mui/material";
import EventScrollbar from "./components/EventScollbar";
import StandScrollbar from "./components/StandScollbar";
import Banner from "./components/banner";
import Plan from "./assets/plan_rpgaming.png";
import Instagram from "./assets/Instagram_icon.jpg";
import Tiktok from "./assets/logo-icone-tiktok-simbolo.png";
import Twitch from "./assets/twitch-6860918_960_720.jpg";
import Facebook from "./assets/Facebook_logo_(square).png.jpg";
function App() {
  return (
    <div className="App">
      <Banner />
      <Typography
        align="center"
        variant="h5"
        style={{
          fontFamily: "Poppins-Bold",

          color: "red",
          marginBottom: "10px",
          marginTop: "20px",
        }}
      >
        Les dragons vous attendent
      </Typography>
      <Typography
        align="left"
        variant="body1"
        style={{
          fontFamily: "Poppins-Regular",

          color: "red",
          marginBottom: "30px",
          marginTop: "30px",
          marginLeft: "15px",
          marginRight: "15px",
        }}
      >
        Le RPGaming Fest ouvre ses portes ! <br /> Immergez-vous durant ces deux
        jours dans l'univers de Donjon & Dragon. Tous ses décors et ses
        protagonistes animés par de purs passionnés. Stands à l'effigie de
        l'univers, jeux de plateau et conférences. <br />{" "}
        <span style={{ fontFamily: "Poppins-Bold" }}>
          Les 21 et 22 Janvier.
        </span>
      </Typography>

      <Typography
        align="left"
        variant="h5"
        style={{
          fontFamily: "Poppins-Bold",
          color: "red",
          marginBottom: "20px",
          marginTop: "20px",
          marginLeft: "20px",
        }}
      >
        Stands à découvrir
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100vw",
          height: "75vh",
          overflowY: "scroll",
        }}
      >
        <StandScrollbar />
      </div>

      <Typography
        align="left"
        variant="body1"
        style={{
          fontFamily: "Poppins-Regular",

          color: "red",
          marginBottom: "30px",
          marginTop: "30px",
          marginLeft: "15px",
          marginRight: "15px",
        }}
      >
        De nombreux jeux vous attendent dans notre ludothèque!
      </Typography>
      <Typography
        align="left"
        variant="h5"
        style={{
          fontFamily: "Poppins-Bold",
          color: "red",
          marginBottom: "20px",
          marginTop: "20px",
          marginLeft: "20px",
        }}
      >
        Jeux à découvrir
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "column",

          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <EventScrollbar />
      </div>
      <Typography
        align="center"
        variant="body1"
        style={{
          fontFamily: "Poppins-Regular",

          color: "red",
          marginBottom: "30px",
          marginTop: "0px",
        }}
      >
        Et bien d'autres encore !
      </Typography>
      <div>
        <img src={Plan} style={{ width: "99vw" }} />
      </div>
      <div className="footer">
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <div>
            <img src={Instagram} style={{ width: "10vw" }} />
          </div>
          <div>
            <img src={Tiktok} style={{ width: "10vw" }} />
          </div>
          <div>
            <img src={Twitch} style={{ width: "10vw" }} />
          </div>
          <div>
            <img src={Facebook} style={{ width: "10vw" }} />
          </div>
        </div>
        <Typography
          align="center"
          variant="body1"
          style={{
            fontFamily: "Poppins-Regular",

            color: "white",
            marginBottom: "30px",
            marginTop: "20px",
          }}
        >
          15€ l'entrée. <br /> Gratuit pour les moins de 12 ans
        </Typography>
        <Button
          variant="outlined"
          color="error"
          href="https://www.eventbrite.fr/"
          target="_blank"
        >
          Réservez vos billets
        </Button>
      </div>
    </div>
  );
}

export default App;

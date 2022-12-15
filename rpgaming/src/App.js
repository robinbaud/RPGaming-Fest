import "./App.css";

import { Button, Typography } from "@mui/material";
import EventScrollbar from "./components/EventScollbar";
import StandScrollbar from "./components/StandScollbar";
import Banner from "./components/banner";

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
        Le RPGaming Fest ouvre ses portes! <br /> Immergez-vous durant ces deux
        jours dans l'univers de Donjon & Dragon. Tous ses décors et ses
        protagonistes animés par de purs passionnés. Stands à l'effigie de
        l'univers, jeux de plateau et conférences. Les 21 et 22 Janvier
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
      <div className="footer">
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

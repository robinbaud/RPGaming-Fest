import "./App.css";

import { Button, Typography } from "@mui/material";
import EventScrollbar from "./components/EventScollbar";
import StandScrollbar from "./components/StandScollbar";
import Banner from "./components/banner";

function App() {
  return (
    <div className="App">
      <div className="Menu"></div>
      <Banner />
      <Typography
        align="left"
        variant="h5"
        style={{ fontFamily: "Poppins", fontWeight: "bold", color: "red" }}
      >
        Jeux à découvrir
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
        <EventScrollbar />
      </div>
      <Typography
        align="left"
        variant="h5"
        style={{ fontFamily: "Poppins", fontWeight: "bold", color: "red" }}
      >
        stands à découvrir
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

      <Button
        variant="outlined"
        color="error"
        href="https://www.eventbrite.fr/"
        target="_blank"
      >
        Réserver vos billet
      </Button>
    </div>
  );
}

export default App;

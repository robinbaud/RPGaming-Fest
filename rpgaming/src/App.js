import "./App.css";

import { Button, Typography } from "@mui/material";
import EventScrollbar from "./components/EventScollbar";
import StandScrollbar from "./components/StandScollbar";

function App() {
  return (
    <div className="App">
      <div className="Menu"></div>
      <Typography>RPGaming Fest!</Typography>
      <div style={{ display: "flex", flexDirection: "row", width: "50vw" }}>
        <EventScrollbar />
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

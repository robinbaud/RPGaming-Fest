import "./App.css";

import { Button, TableCell, TableRow, Typography } from "@mui/material";
import EventScrollbar from "./components/EventScollbar";
import StandScrollbar from "./components/StandScollbar";
import Banner from "./components/banner";
import Plan from "./assets/plan_RPGaming.svg";
import Instagram from "./assets/logo_insta.svg";
import Tiktok from "./assets/Logo_tik_tok.svg";
import Twitch from "./assets/logo_twitch.svg";
import Twitter from "./assets/Logo_twitter.svg";
import Facebook from "./assets/logo_fb.svg";
function App() {
  const windowWidth = window.innerWidth;

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
        jours dans l'univers de Donjons & Dragons, ses décors et ses
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
        style={
          windowWidth && windowWidth > 700
            ? {
                display: "flex",
                flexDirection: "column",
                width: "100vw",

                overflowY: "scroll",
              }
            : {
                display: "flex",
                flexDirection: "column",
                width: "100vw",
                height: "75vh",
                overflowY: "scroll",
              }
        }
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
        De nombreux jeux vous attendent dans notre ludothèque !
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
      {windowWidth && windowWidth > 700 && (
        <Typography
          align="left"
          variant="body1"
          style={{
            fontFamily: "Poppins-Regular",

            color: "red",
            marginBottom: "30px",
            marginTop: "0px",
            marginLeft: "20px",
          }}
        >
          Et bien d'autres encore !
        </Typography>
      )}
      {windowWidth && windowWidth <= 700 && (
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
      )}

      <div>
        <img src={Plan} />
      </div>

      <div className="footer">
        {windowWidth && windowWidth > 760 && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                width: "33%",
              }}
            >
              <div style={{ width: "20vw" }}>
                <div>
                  <img
                    src={Instagram}
                    style={{ width: "5vw", height: "50px" }}
                  />
                </div>
                <div>
                  <img src={Tiktok} style={{ width: "5vw", height: "50px" }} />
                </div>
              </div>
              <div>
                <img src={Twitter} style={{ width: "5vw", height: "50px" }} />
              </div>
              <div style={{ width: "20vw" }}>
                <div>
                  <img src={Twitch} style={{ width: "5vw", height: "50px" }} />
                </div>
                <div>
                  <img
                    src={Facebook}
                    style={{ width: "5vw", height: "50px" }}
                  />
                </div>
              </div>
            </div>
            <Typography
              align="center"
              variant="body1"
              style={{
                fontFamily: "Poppins-Regular",
                width: "33%",
                color: "white",
                marginBottom: "30px",
                marginTop: "20px",
              }}
            >
              15€ l'entrée <br /> Gratuit pour les moins <br />
              de 12 ans
            </Typography>
            <div
              style={{
                width: "30%",
              }}
            >
              <Button
                variant="contained"
                color="error"
                target="_blank"
                style={{ marginLeft: "3%" }}
              >
                Réserver mes billets
              </Button>
            </div>
          </div>
        )}
        {windowWidth && windowWidth <= 760 && (
          <>
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
              15€ l'entrée <br /> Gratuit pour les moins de 12 ans
            </Typography>
            <Button
              variant="contained"
              color="error"
              style={{ width: "250px", height: "50%" }}
              target="_blank"
            >
              Réserver mes billets
            </Button>
            <div
              style={{
                display: "flex",
                marginTop: "20px",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <div>
                <img src={Instagram} style={{ width: "5vw", height: "50px" }} />
              </div>
              <div>
                <img src={Tiktok} style={{ width: "5vw", height: "50px" }} />
              </div>
              <div>
                <img src={Twitch} style={{ width: "5vw", height: "50px" }} />
              </div>
              <div>
                <img src={Facebook} style={{ width: "5vw", height: "30px" }} />
              </div>
              <div>
                <img src={Twitter} style={{ width: "6vw", height: "60px" }} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;

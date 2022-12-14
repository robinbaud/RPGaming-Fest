import logo from "./logo.svg";
import "./App.css";
import { Banner, StaticBanner } from "material-ui-banner";
import { slide as Menu } from "react-burger-menu";
import TableCell from "@mui/material/TableCell";
import { Typography } from "@mui/material";
function App() {
  return (
    <div className="App">
      <div className="Menu"></div>
      <div className="Banner">
        <Typography>RPGaming Fest!</Typography>
        <Typography
          align="left"
          variant="h2"
          style={{ fontFamily: "Enchanted-Land" }}
        >
          Stands à découvrir
        </Typography>
        <div className="standScrollable">
          <TableCell className="stand img1" style={{ padding: 0 }}>
            <div className="standInfo">
              <Typography variant="body1">Titre</Typography>
            </div>
          </TableCell>
          <TableCell className="stand img2" style={{ padding: 0 }}>
            <div className="standInfo"></div>
          </TableCell>
          <TableCell className="stand img3" style={{ padding: 0 }}>
            <div className="standInfo"></div>
          </TableCell>
          <TableCell className="stand img4" style={{ padding: 0 }}>
            <div className="standInfo"></div>
          </TableCell>
        </div>
        <scrollbars sc>
          <div>
            <img src="" alt="" />
          </div>
        </scrollbars>
      </div>
    </div>
  );
}

export default App;

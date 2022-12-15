import "../App.css";
import TableCell from "@mui/material/TableCell";
import { Typography } from "@mui/material";
function EventScrollbar() {
  return (
    <div className="container">
      <div className="standScrollable" style={{ overflowY: "scroll" }}>
        <TableCell className="stand img1" style={{ padding: 0 }}>
          <div className="standInfo">
            <Typography variant="h3" style={{ fontFamily: "Poppins" }}>
              Titre
            </Typography>
            <Typography variant="body1" style={{ fontFamily: "Poppins" }}>
              9h - 11h
            </Typography>
            <Typography variant="body1" style={{ fontFamily: "Poppins" }}>
              stand 55
            </Typography>
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
        <TableCell className="stand img4" style={{ padding: 0 }}>
          <div className="standInfo"></div>
        </TableCell>
        <TableCell className="stand img4" style={{ padding: 0 }}>
          <div className="standInfo"></div>
        </TableCell>
        <TableCell className="stand img4" style={{ padding: 0 }}>
          <div className="standInfo"></div>
        </TableCell>
        <TableCell className="stand img4" style={{ padding: 0 }}>
          <div className="standInfo"></div>
        </TableCell>
        <TableCell className="stand img4" style={{ padding: 0 }}>
          <div className="standInfo"></div>
        </TableCell>
      </div>
    </div>
  );
}

export default EventScrollbar;

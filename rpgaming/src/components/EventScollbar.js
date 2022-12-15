import "../App.css";
import TableCell from "@mui/material/TableCell";
import { Typography } from "@mui/material";
function EventScrollbar() {
  return (
    <div>
      <div className="standScrollable" style={{ overflowY: "scroll" }}>
        <TableCell
          className="stand jeuimg2"
          style={{ padding: 0, borderRadius: 0 }}
        >
          <Typography variant="h6">
            <span
              style={{
                fontFamily: "Poppins",
                backgroundColor: "black",
                color: "white",
                lineHeight: 1,
              }}
            >
              Donjon & Dragon
            </span>
          </Typography>
        </TableCell>
        <TableCell
          className="stand jeuimg3"
          style={{ padding: 0, borderRadius: 0 }}
        >
          <Typography variant="h6">
            <span
              style={{
                fontFamily: "Poppins",
                backgroundColor: "black",
                color: "white",
                lineHeight: 1,
              }}
            >
              Zombicide
            </span>
          </Typography>
        </TableCell>
        <TableCell
          className="stand jeuimg1"
          style={{ padding: 0, borderRadius: 0 }}
        >
          <Typography variant="h6">
            <span
              style={{
                fontFamily: "Poppins",
                backgroundColor: "black",
                color: "white",
                lineHeight: 1,
              }}
            >
              Saboteur
            </span>
          </Typography>
        </TableCell>
      </div>
    </div>
  );
}

export default EventScrollbar;

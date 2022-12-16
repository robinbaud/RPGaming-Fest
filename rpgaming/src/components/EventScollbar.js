import "../App.css";
import TableCell from "@mui/material/TableCell";
import { Typography } from "@mui/material";
function EventScrollbar() {
  const windowWidth = window.innerWidth;
  return (
    <div>
      {windowWidth && windowWidth > 700 && (
        <div
          className="standScrollable"
          style={{ flexDirection: "row", justifyContent: "space-evenly" }}
        >
          <TableCell className="stand jeuimg2" style={{ padding: 0 }}>
            <Typography variant="h6">
              <span
                style={{
                  fontFamily: "Poppins",
                  backgroundColor: "black",
                  color: "white",
                  borderBottomRightRadius: "10px",
                  borderTopLeftRadius: "10px",
                  lineHeight: 1,
                }}
              >
                Donjons & Dragons
              </span>
            </Typography>
          </TableCell>
          <TableCell className="stand jeuimg3" style={{ padding: 0 }}>
            <Typography variant="h6">
              <span
                style={{
                  fontFamily: "Poppins",
                  backgroundColor: "black",
                  color: "white",
                  borderBottomRightRadius: "10px",
                  borderTopLeftRadius: "10px",
                  lineHeight: 1,
                }}
              >
                Zombicide
              </span>
            </Typography>
          </TableCell>
          <TableCell className="stand jeuimg1" style={{ padding: 0 }}>
            <Typography variant="h6">
              <span
                style={{
                  fontFamily: "Poppins",
                  backgroundColor: "black",
                  color: "white",
                  borderBottomRightRadius: "10px",
                  borderTopLeftRadius: "10px",
                  lineHeight: 1,
                }}
              >
                Saboteur
              </span>
            </Typography>
          </TableCell>
        </div>
      )}
      {windowWidth && windowWidth <= 700 && (
        <div className="standScrollable">
          <TableCell className="stand jeuimg2" style={{ padding: 0 }}>
            <Typography variant="h6">
              <span
                style={{
                  fontFamily: "Poppins",
                  backgroundColor: "black",
                  color: "white",
                  borderBottomRightRadius: "10px",
                  borderTopLeftRadius: "10px",
                  lineHeight: 1,
                }}
              >
                Donjons & Dragons
              </span>
            </Typography>
          </TableCell>
          <TableCell className="stand jeuimg3" style={{ padding: 0 }}>
            <Typography variant="h6">
              <span
                style={{
                  fontFamily: "Poppins",
                  backgroundColor: "black",
                  color: "white",
                  borderBottomRightRadius: "10px",
                  borderTopLeftRadius: "10px",
                  lineHeight: 1,
                }}
              >
                Zombicide
              </span>
            </Typography>
          </TableCell>
          <TableCell className="stand jeuimg1" style={{ padding: 0 }}>
            <Typography variant="h6">
              <span
                style={{
                  fontFamily: "Poppins",
                  backgroundColor: "black",
                  color: "white",
                  borderBottomRightRadius: "10px",
                  borderTopLeftRadius: "10px",
                  lineHeight: 1,
                }}
              >
                Saboteur
              </span>
            </Typography>
          </TableCell>
        </div>
      )}
    </div>
  );
}

export default EventScrollbar;

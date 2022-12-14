import "../App.css";
import TableCell from "@mui/material/TableCell";
import { Typography } from "@mui/material";
function StandScrollbar() {
  const windowWidth = window.innerWidth;
  return (
    <div
      className="container"
      style={
        windowWidth && windowWidth > 768
          ? { boxShadow: "none", overflowY: "none", overflowX: "hidden" }
          : { overflowY: "none", overflowX: "hidden" }
      }
    >
      {windowWidth && windowWidth > 768 && (
        <div
          className="standScrollable"
          style={{ flexDirection: "column", overflowY: "none" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <TableCell
              className="stand standimg1"
              style={{ padding: 0, marginLeft: "5px", marginRight: "5px" }}
            >
              <Typography variant="h6">
                <span
                  style={{
                    fontFamily: "Poppins-Regular",
                    backgroundColor: "black",
                    color: "white",
                    borderBottomRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                    lineHeight: 1,
                  }}
                >
                  Forêt magique
                </span>
              </Typography>
            </TableCell>
            <TableCell
              className="stand standimg2"
              style={{ padding: 0, marginLeft: "5px", marginRight: "5px" }}
            >
              <Typography variant="h6">
                <span
                  style={{
                    fontFamily: "Poppins-Regular",
                    backgroundColor: "black",
                    color: "white",
                    borderBottomRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                    lineHeight: 1,
                  }}
                >
                  Donjon
                </span>
              </Typography>
            </TableCell>
            <TableCell
              className="stand standimg3"
              style={{ padding: 0, marginLeft: "5px", marginRight: "5px" }}
            >
              <Typography variant="h6">
                <span
                  style={{
                    fontFamily: "Poppins-Regular",
                    backgroundColor: "black",
                    color: "white",
                    borderBottomRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                    lineHeight: 1,
                  }}
                >
                  Nécromancien
                </span>
              </Typography>
            </TableCell>
            <TableCell
              className="stand standimg4"
              style={{ padding: 0, marginLeft: "5px", marginRight: "5px" }}
            >
              <Typography variant="h6">
                <span
                  style={{
                    fontFamily: "Poppins-Regular",
                    backgroundColor: "black",
                    color: "white",
                    borderBottomRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                    lineHeight: 1,
                  }}
                >
                  Cimetière
                </span>
              </Typography>
            </TableCell>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <TableCell
              className="stand standimg5"
              style={{ padding: 0, marginLeft: "5px", marginRight: "5px" }}
            >
              <Typography variant="h6">
                <span
                  style={{
                    fontFamily: "Poppins-Regular",
                    backgroundColor: "black",
                    color: "white",
                    borderBottomRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                    lineHeight: 1,
                  }}
                >
                  Sirène
                </span>
              </Typography>
            </TableCell>
            <TableCell
              className="stand standimg6"
              style={{ padding: 0, marginLeft: "5px", marginRight: "5px" }}
            >
              <Typography variant="h6">
                <span
                  style={{
                    fontFamily: "Poppins-Regular",
                    backgroundColor: "black",
                    color: "white",
                    borderBottomRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                    lineHeight: 1,
                  }}
                >
                  Bataille
                </span>
              </Typography>
            </TableCell>
            <TableCell
              className="stand standimg7"
              style={{ padding: 0, marginLeft: "5px", marginRight: "5px" }}
            >
              <Typography variant="h6">
                <span
                  style={{
                    fontFamily: "Poppins-Regular",
                    backgroundColor: "black",
                    color: "white",
                    borderBottomRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                    lineHeight: 1,
                  }}
                >
                  Montagne
                </span>
              </Typography>
            </TableCell>
            <div
              style={{ width: "270px", marginLeft: "5px", marginRight: "5px" }}
            />
          </div>
        </div>
      )}
      {windowWidth && windowWidth >= 580 && windowWidth <= 768 && (
        <div className="standScrollable" style={{ overflowY: "scroll" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <TableCell
              className="stand standimg1"
              style={{ padding: 0, marginLeft: "5px", marginRight: "5px" }}
            >
              <Typography variant="h6">
                <span
                  style={{
                    fontFamily: "Poppins-Regular",
                    backgroundColor: "black",
                    color: "white",
                    borderBottomRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                    lineHeight: 1,
                  }}
                >
                  Forêt magique
                </span>
              </Typography>
            </TableCell>
            <TableCell
              className="stand standimg2"
              style={{ padding: 0, marginLeft: "5px", marginRight: "5px" }}
            >
              <Typography variant="h6">
                <span
                  style={{
                    fontFamily: "Poppins-Regular",
                    backgroundColor: "black",
                    color: "white",
                    borderBottomRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                    lineHeight: 1,
                  }}
                >
                  Donjon
                </span>
              </Typography>
            </TableCell>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <TableCell
              className="stand standimg3"
              style={{ padding: 0, marginLeft: "5px", marginRight: "5px" }}
            >
              <Typography variant="h6">
                <span
                  style={{
                    fontFamily: "Poppins-Regular",
                    backgroundColor: "black",
                    color: "white",
                    borderBottomRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                    lineHeight: 1,
                  }}
                >
                  Nécromancien
                </span>
              </Typography>
            </TableCell>
            <TableCell
              className="stand standimg4"
              style={{ padding: 0, marginLeft: "5px", marginRight: "5px" }}
            >
              <Typography variant="h6">
                <span
                  style={{
                    fontFamily: "Poppins-Regular",
                    backgroundColor: "black",
                    color: "white",
                    borderBottomRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                    lineHeight: 1,
                  }}
                >
                  Cimetière
                </span>
              </Typography>
            </TableCell>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <TableCell
              className="stand standimg5"
              style={{ padding: 0, marginLeft: "5px", marginRight: "5px" }}
            >
              <Typography variant="h6">
                <span
                  style={{
                    fontFamily: "Poppins-Regular",
                    backgroundColor: "black",
                    color: "white",
                    borderBottomRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                    lineHeight: 1,
                  }}
                >
                  Sirène
                </span>
              </Typography>
            </TableCell>
            <TableCell
              className="stand standimg6"
              style={{ padding: 0, marginLeft: "5px", marginRight: "5px" }}
            >
              <Typography variant="h6">
                <span
                  style={{
                    fontFamily: "Poppins-Regular",
                    backgroundColor: "black",
                    color: "white",
                    borderBottomRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                    lineHeight: 1,
                  }}
                >
                  Bataille
                </span>
              </Typography>
            </TableCell>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <TableCell
              className="stand standimg7"
              style={{ padding: 0, marginLeft: "5px", marginRight: "5px" }}
            >
              <Typography variant="h6">
                <span
                  style={{
                    fontFamily: "Poppins-Regular",
                    backgroundColor: "black",
                    color: "white",
                    borderBottomRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                    lineHeight: 1,
                  }}
                >
                  Montagne
                </span>
              </Typography>
            </TableCell>
            <div
              style={{ width: "270px", marginLeft: "5px", marginRight: "5px" }}
            />
          </div>
        </div>
      )}
      {windowWidth && windowWidth <= 580 && (
        <div className="standScrollable" style={{ overflowY: "scroll" }}>
          <TableCell className="stand standimg1" style={{ padding: 0 }}>
            <Typography variant="h6">
              <span
                style={{
                  fontFamily: "Poppins-Regular",
                  backgroundColor: "black",
                  color: "white",
                  borderBottomRightRadius: "10px",
                  borderTopLeftRadius: "10px",
                  lineHeight: 1,
                }}
              >
                Forêt magique
              </span>
            </Typography>
          </TableCell>
          <TableCell className="stand standimg2" style={{ padding: 0 }}>
            <Typography variant="h6">
              <span
                style={{
                  fontFamily: "Poppins-Regular",
                  backgroundColor: "black",
                  color: "white",
                  borderBottomRightRadius: "10px",
                  borderTopLeftRadius: "10px",
                  lineHeight: 1,
                }}
              >
                Donjon
              </span>
            </Typography>
          </TableCell>
          <TableCell className="stand standimg3" style={{ padding: 0 }}>
            <Typography variant="h6">
              <span
                style={{
                  fontFamily: "Poppins-Regular",
                  backgroundColor: "black",
                  color: "white",
                  borderBottomRightRadius: "10px",
                  borderTopLeftRadius: "10px",
                  lineHeight: 1,
                }}
              >
                Nécromancien
              </span>
            </Typography>
          </TableCell>
          <TableCell className="stand standimg4" style={{ padding: 0 }}>
            <Typography variant="h6">
              <span
                style={{
                  fontFamily: "Poppins-Regular",
                  backgroundColor: "black",
                  color: "white",
                  borderBottomRightRadius: "10px",
                  borderTopLeftRadius: "10px",
                  lineHeight: 1,
                }}
              >
                Cimetière
              </span>
            </Typography>
          </TableCell>
          <TableCell className="stand standimg5" style={{ padding: 0 }}>
            <Typography variant="h6">
              <span
                style={{
                  fontFamily: "Poppins-Regular",
                  backgroundColor: "black",
                  color: "white",
                  borderBottomRightRadius: "10px",
                  borderTopLeftRadius: "10px",
                  lineHeight: 1,
                }}
              >
                Sirène
              </span>
            </Typography>
          </TableCell>
          <TableCell className="stand standimg6" style={{ padding: 0 }}>
            <Typography variant="h6">
              <span
                style={{
                  fontFamily: "Poppins-Regular",
                  backgroundColor: "black",
                  color: "white",
                  borderBottomRightRadius: "10px",
                  borderTopLeftRadius: "10px",
                  lineHeight: 1,
                }}
              >
                Bataille
              </span>
            </Typography>
          </TableCell>
          <TableCell className="stand standimg7" style={{ padding: 0 }}>
            <Typography variant="h6">
              <span
                style={{
                  fontFamily: "Poppins-Regular",
                  backgroundColor: "black",
                  color: "white",
                  borderBottomRightRadius: "10px",
                  borderTopLeftRadius: "10px",
                  lineHeight: 1,
                }}
              >
                Montagne
              </span>
            </Typography>
          </TableCell>
        </div>
      )}
    </div>
  );
}

export default StandScrollbar;

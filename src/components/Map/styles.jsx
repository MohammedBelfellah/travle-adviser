import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  paper: {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100px",
    zIndex:"999",
    cursor: "pointer"
  },
  me: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "18px",
    height: "18px",
    backgroundColor: "#000",
    border: " 2px solid #fff",
    borderRadius: "100%",
    userSelect: "none",
    transform: "translate(-50%, -50%)",
    zIndex:"999999",
  },
  mapContainer: {
    height: "85vh",
    width: "100%",
  },
  markerContainer: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    "&:hover": { zIndex: 2 },
  },
  pointer: {
    cursor: "pointer",
  },
}));

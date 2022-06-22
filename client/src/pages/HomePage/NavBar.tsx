import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Login from "../../components/GoogleLogin";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary" sx={{ top: 0 }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              "&:hover": {
                backgroundColor: "skyblue",
                color: "#FFF !important",
              },
              cursor: "pointer"
            }}
            onClick={() => navigate("/start")}
          >
            SHOPPING YOUR WAY
          </Typography>
          <Button color="inherit">
            <Login />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

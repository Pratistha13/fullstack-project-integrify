import { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import InputBase from "@material-ui/core/InputBase";
import {
  createStyles,
  alpha,
  makeStyles,
  Theme,
} from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { Badge, Button, Drawer, Grid } from "@material-ui/core";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useSelector } from "react-redux";
import { AppState } from "../../types";
import Cart from "../Cart";
import LoginIcon from "@mui/icons-material/Login";
import AdminMenu from "../Admin/AdminMenu";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },

    title: {
      flexGrow: 1,
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.black, 0.25),
      },
      marginRight: theme.spacing(50),
      marginLeft: theme.spacing(10),
      paddingTop: 25,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(2),
        width: "auto",
      },
    },
    searchIcon: {
      paddingLeft: theme.spacing(20),
      height: "50%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
      height: "100%",
    },
    login: {
      paddingTop: 40,
      paddingLeft: 350,
     
    },
    admin: {
      paddingRight: 20,
      paddingTop: 30,
      paddingBottom: 20
    },
  })
);

const Appbar = ({ search, onChange }:any) => {
  const classes = useStyles();
  const [cart, setCart] = useState(false);
  const itemState = useSelector((state: AppState) => state.cart.cart);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Grid container direction="row">
            <Grid>
              <div className={classes.admin}>
              <AdminMenu />
              </div>     
           
            </Grid>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Goto..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
                value={search}
                onChange={onChange}
              />
            </div>
            <Drawer anchor="right" open={cart} onClose={() => setCart(!cart)}>
              <Cart />
            </Drawer>
            <div className={classes.login}>
              <Link to="/login">
                <div>
                  <LoginIcon />
                </div>
              </Link>
            </div>

            <Button onClick={() => setCart(!cart)}>
              <Badge badgeContent={itemState.length}>
                <ShoppingCartIcon />
              </Badge>
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Appbar;

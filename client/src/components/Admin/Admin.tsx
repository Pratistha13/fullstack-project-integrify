import { Typography, Button } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";
import NavBar from "../../pages/HomePage/NavBar";

const useStyles = makeStyles(() =>
  createStyles({
    homeBtn: {
      border: "3px solid turquoise",
      width: 200,
      fontWeight: 500,
    },
    homeWrapper: {
      marginRight: 250,
    },
    homeRightbtn: {
      marginLeft: 900,
    },
    homeLeftbtn: {
      marginLeft: 200,
    },
    homecomponent: {
      marginLeft: 650,
    },
  })
);

const Admin = () => {
  const classes = useStyles();
  return (
    <>
      <NavBar />
      <img
        src={`https://images.unsplash.com/photo-1555480320-b9fa01a86dd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`}
        alt="Shopping made fun"
        loading="lazy"
      />
      <div className={classes.homecomponent}>
        <Typography variant="subtitle2">
          <h2>Welcome admin!!!</h2>
        </Typography>
        <br />
      </div>
      <div className={classes.homeWrapper}>
        <Link to="/products">
          <div className={classes.homeLeftbtn}>
            <Typography variant="h5">MANAGE PRODUCTS </Typography>
            <ArrowBackIosIcon className="arrow-svg" />
          </div>
        </Link>
        <Link to="/users">
          <div className={classes.homeRightbtn}>
            <ArrowForwardIosIcon className="arrow-svg" />
            <Typography variant="h5">MANAGE USERS</Typography>
          </div>
        </Link>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Admin;

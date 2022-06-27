import {
  Button,
  Container,
  Table,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../pages/HomePage/Footer";
import NavBar from "../../pages/HomePage/NavBar";
import {
  banUser,
  deleteUser,
  fetchAllUser,
  unBanUser,
} from "../../redux/actions";
import { AppState } from "../../types";

const Users = (user: any) => {
  const dispatch = useDispatch<any>();
  const fetchedUsers = useSelector((state: AppState) => state.user.users);

  const { token } = useSelector((state: AppState) => state.login);

  const navigate = useNavigate();

  console.log("user", fetchedUsers[0]);

  useEffect(() => {
    dispatch(fetchAllUser());
  }, []);

  return (
    <>
      <NavBar />
      <Button
      style={{ backgroundColor: "turquoise", color: "#fff" }}
      onClick={() => navigate("/userForm")}
    >
      Create User
    </Button>
    <br/>
 
      <Button
        style={{ backgroundColor: "turquoise", color: "#fff" }}
        onClick={() => navigate(`/admin`)}
      >
        Back
      </Button>
      <Container>
        <TableHead>
          <TableRow hover>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>User </TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <Table>
          {fetchedUsers.map((item) => (
            <TableRow hover key={item.email}>
              <TableCell>
                <Link
                  to={`/${item.firstName}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {item.firstName}
                </Link>
              </TableCell>
              <TableCell>{item.lastName}</TableCell>
              <TableCell>{item.userName}</TableCell>
              <TableCell>{item.role}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.isBanned}</TableCell>

              <TableCell style={{ display: "flex", gap: "2px" }}>
                <Button
                  style={
                    item.isBanned === false
                      ? {
                          backgroundColor: "#ba68c8",
                          color: "#000000",
                        }
                      : { backgroundColor: "#ba68c8", color: "#fff" }
                  }
                  disabled={item.isBanned === true ? true : false}
                  onClick={() => dispatch(banUser(token, String(item._id)))}
                >
                  Ban
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  style={
                    item.isBanned === true
                      ? {
                          backgroundColor: "#ef5350",
                          color: "#000000",
                        }
                      : { backgroundColor: "#ef5350", color: "#fff" }
                  }
                  disabled={item.isBanned === false ? true : false}
                  onClick={() => dispatch(unBanUser(token, String(item._id)))}
                >
                  UnBan
                </Button>
              
              </TableCell>

              <TableCell style={{ display: "flex", gap: "2px" }}>
                <Button
                  style={{ backgroundColor: "#1565c0", color: "#fff" }}
                  onClick={() => navigate(`/userEdit/${item._id}`)}
                >
                  Modify User
                </Button>

                <Button
                  style={{ backgroundColor: "#c62828", color: "#fff" }}
                  onClick={() => dispatch(deleteUser(item._id))}
                >
                  Delete User
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      </Container>
      <Footer />
    </>
  );
};

export default Users;

import {
  Button,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Menu,
  Typography,
  Box,
} from "@mui/material";
import React, { useContext } from "react";
import { AccountCircleOutlined, Logout } from "@mui/icons-material";
import { useToggle } from "../../hooks/useToggle";
import { useEffect } from "react";
// import { colors } from "../theme";
import userContext from "../../contexts/userContext/userContext";
import { toast, ToastContainer } from "react-toastify";

export const UserProfile = () => {
  const { el, open, onClick, onClose } = useToggle();
  const { setUser } = useContext(userContext);
  const getUser = async () => {
    const res = await fetch("http://localhost:5000/api/auth/fetchuser", {
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await res.json();
    setUser(json.user);
    localStorage.setItem("userName", json.user.name);
  };
  useEffect(() => {
    getUser();
    // eslint-disable-next-line
  }, []);

  const logOut = () => {
    localStorage.removeItem("token");
    toast.success("logged Out Successfully");
    setTimeout(() => {
      window.location.reload();
    }, 3500);
  };

  return (
    <Box sx={{ px: 1, mt: 1 }}>
      <Button id="basic-button" onClick={onClick}>
        <AccountCircleOutlined
          sx={{ color: "neutral.light", fontSize: "30px" }}
        />
        <Typography
          ml={1}
          fontWeight={600}
          sx={{ color: "white" }}
          variant="h5"
        >
          {localStorage.getItem("userName")}
        </Typography>
      </Button>
      <Menu
        anchorEl={el}
        id="basic-menu"
        open={open}
        onClose={onClose}
        MenuListProps={{ "aria-labelledby": "basic-button" }}
      >
        <ListItem onClick={logOut} sx={{ pt: 1, pb: 1 }} alignItems="center">
          <ListItemAvatar>
            <Logout sx={{ color: "gray", fontSize: "30px" }} />
          </ListItemAvatar>
          <ListItemText primary="Log Out" />
        </ListItem>
      </Menu>
      <ToastContainer autoClose={3000} pauseOnHover={false} theme="colored" />
    </Box>
  );
};

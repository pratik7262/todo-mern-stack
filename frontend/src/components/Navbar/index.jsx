import {
  AppBar,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { UserProfile } from "../UserProfile";
// import React, { useEffect, useState } from "react";
// require("dotenv").config();

const Navbar = () => {
  const pages = [
    { title: "Home", path: "/" },
    { title: "Tasks", path: "/tasks" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];
  return (
    <>
      <AppBar color="primary" position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Link
                  key={page.title}
                  style={{ textDecoration: "none" }}
                  to={page.path}
                >
                  <Button sx={{ my: 2, color: "white", display: "block" }}>
                    {page.title}
                  </Button>
                </Link>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              {/* <IconButton sx={{ p: 0 }}>
                <Avatar alt="Elon Musk" src={img} />
              </IconButton> */}
              {localStorage.getItem("token") ? (
                <Box>
                  <UserProfile />
                </Box>
              ) : (
                <Box
                  display="flex"
                  width="180px"
                  justifyContent="space-between"
                >
                  <Link style={{ textDecoration: "none" }} to="/login">
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: "white", color: "black" }}
                      // color="warning"
                    >
                      Login
                    </Button>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/signup">
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: "white", color: "black" }}
                      // color="warning"
                    >
                      Sign Up
                    </Button>
                  </Link>
                </Box>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;

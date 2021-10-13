import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { Avatar } from "@mui/material";
import logo from "../../Images/logo.PNG";

const nesTyle = {
  color: "white",
  textDecoration: "none",
  margin: "5px 10px",
  fontWeight: "600",
};
const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <Avatar alt="Remy Sharp" sx={{ bgcolor: "white", color: "black", marginX: "5px", width: 56, height: 56 }}>
                Niz
              </Avatar>
              <h2>Academy</h2>
            </Typography>
          </Typography>
          <Typography>
            <NavLink style={nesTyle} to={"/home"}>
              Home
            </NavLink>
            <NavLink style={nesTyle} to={"/services"}>
              Services
            </NavLink>
            <NavLink style={nesTyle} to={"/instructor"}>
              Our Instructor
            </NavLink>
            <NavLink style={nesTyle} to={"/about"}>
              About Us
            </NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;

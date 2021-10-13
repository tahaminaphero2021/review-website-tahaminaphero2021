import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Images/logo.PNG";
const nesTyle = {
  color: "white",
  textDecoration: "none",
  margin: "5px 10px",
  fontWeight: "600",
  fontSize: "25px",
};

const Footer = () => {
  return (
    <Box style={{ marginTop: "30px", backgroundColor: "#2c234d" }}>
      <h1 style={{ textAlign: "center", paddingTop: "20px" }}>
        <span style={{ color: "#FC6884" }}>Niz</span>
        <span style={{ color: "white" }}> Academy</span>
      </h1>
      <h3 style={{ color: "#ffffff", textAlign: "center", marginTop: "20px" }}>
        Online Courses From <br />
        The World’s Top Publishers{" "}
      </h3>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ marginX: "50px", padding: "50px 50px" }}>
          <img width="200px" src={logo} alt="" />
        </Box>
        <Box sx={{ marginX: "50px" }}>
          <Typography>
            <h3 style={{ color: "black", fontWeight: "900" }}>Category</h3>
            <NavLink style={nesTyle} to={"/home"}>
              Home
            </NavLink>
            <br />
            <NavLink style={nesTyle} to={"/services"}>
              Services
            </NavLink>
            <br />
            <NavLink style={nesTyle} to={"/instructor"}>
              Our Instructor
            </NavLink>
            <br />
            <NavLink style={nesTyle} to={"/about"}>
              About Us
            </NavLink>
            <br />
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

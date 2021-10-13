import { Box } from "@mui/system";
import React from "react";
import logo from "../../Images/bar.PNG";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";
const AboutUs = () => {
  const history = useHistory();
  return (
    <Box
      sx={{
        color: "white",
        backgroundColor: "#2c234d",
      }}
    >
      <Box sx={{ margin: "0 50px" }}>
        <h1 style={{ paddingTop: "20px" }}>About us</h1>
        <h3 style={{ marginTop: "50px" }}>Our Global Community</h3>
        <p style={{ marginTop: "20px" }}>Join thousand of instructors and Learn hassle free!</p>
        <img src={logo} alt="" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingBottom: "50px",
          width: "50%",
          margin: "50px auto",
          justifyContent: "center",
        }}
      >
        <h3>Online Course</h3>
        <h1>From 160 Top Institutions.</h1>
        <p>
          So I said codswallop car boot cheers mufty I don't want no agro are you taking the piss cheeky my lady gutted
          mate excuse my french.
        </p>
        <Button onClick={() => history.push("/services")} color="success" variant="contained">
          Start Course
        </Button>
      </Box>
    </Box>
  );
};

export default AboutUs;

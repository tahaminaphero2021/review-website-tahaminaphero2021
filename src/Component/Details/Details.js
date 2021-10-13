import { Avatar, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import HomeIcon from "@mui/icons-material/Home";
import NotesIcon from "@mui/icons-material/Notes";
import TimerIcon from "@mui/icons-material/Timer";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import LanguageIcon from "@mui/icons-material/Language";
import Button from "@mui/material/Button";
const Details = () => {
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const url = "./education.JSON";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  const singleItem = details.find((item) => item.id == id);
  console.log(singleItem);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sx: "column", md: "row", lg: "row" },
        margin: "3vw",
      }}
      // style={{ pointerEvents: "none" }}
    >
      {/* first half */}
      <Box
        sx={{
          width: "68vw",
          bgcolor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        {/* title ,category and Prce in flex */}
        <Box
          sx={{ fontWeight: "600", fontSize: "36px", my: "20px" }}
          gutterBottom
          color="#2c234d"
          variant="h2"
          component="div"
        >
          {singleItem?.title}
        </Box>
        {/* teacher ,category and price section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sx: "column", md: "row", lg: "row" },
            justifyContent: "space-between",
            marginX: "30px",
          }}
        >
          {/* teacher  */}
          <Box>
            <Box
              sx={{ fontSize: "15px", fontWeight: "600", color: "#2C234F" }}
              gutterBottom
              variant="h6"
              component="div"
              display="flex"
              alignItems="center"
              marginBottom="30px"
            >
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ mx: "10px", width: 50, height: 50 }} />{" "}
              <Typography>
                <Typography style={{ color: "gray" }}>Teacher</Typography>
                {singleItem?.author}
              </Typography>
            </Box>
          </Box>
          {/* category  */}
          <Box>
            <Box
              sx={{ fontSize: "15px", fontWeight: "600", color: "#2C234F" }}
              gutterBottom
              variant="h6"
              component="div"
              display="flex"
              alignItems="center"
              marginBottom="30px"
            >
              <Typography>
                <Typography style={{ color: "gray" }}>Category</Typography>
                {"Computer Sceience"}
              </Typography>
            </Box>
          </Box>
          {/* price */}
          <Box
            style={{
              backgroundColor: "#EFFAED",
              padding: "10px 25px",
            }}
          >
            <Typography component="div">
              <h4
                style={{
                  textDecoration: "line-through",
                  fontSize: "24px",
                  fontWeight: "700",
                  color: "gray",
                }}
              >
                ${singleItem?.price}
              </h4>
              <h4 style={{ fontSize: "24px", fontWeight: "700", color: "#5838fc", textDecoration: "none" }}> Free</h4>
            </Typography>
          </Box>
        </Box>
        {/* course image is here */}
        <Box>
          <CardMedia
            style={{ margin: "30px 20px" }}
            component="img"
            height="450"
            image="https://i.ibb.co/grC6NsD/1-1.jpg"
            alt="green iguana"
          />
        </Box>
        {/* course Details  */}
        <Box>
          <Typography variant="h3">Description</Typography>
          <Typography
            sx={{
              textAlign: "justify",
            }}
          >
            {singleItem?.description}
          </Typography>
        </Box>
      </Box>

      {/* second half */}
      <Box
        sx={{
          marginX: "40px",
          paddingX: "20px",
          paddingY: "20px",
          width: "28vw",
          height: "500px",
          marginTop: "35px",
          borderRadius: "10px",
          bgcolor: "primary.dark",
        }}
        style={{ boxShadow: "10px 10px 25px gray" }}
      >
        <Typography
          sx={{ borderBottom: "1px solid #eceef3", display: "flex", padding: "20px", justifyItems: "center" }}
        >
          <HomeIcon sx={{ marginX: "20px" }} color="primary" />
          Instructor: <span style={{ color: "gray", margin: "0 5px" }}>{singleItem?.author}</span>
        </Typography>

        <Typography
          sx={{ borderBottom: "1px solid #eceef3", display: "flex", padding: "20px", justifyItems: "center" }}
        >
          <NotesIcon sx={{ marginX: "20px" }} color="primary" />
          Lectures: <span style={{ color: "gray", margin: "0 5px" }}>{singleItem?.lectures} </span>
        </Typography>

        <Typography
          sx={{ borderBottom: "1px solid #eceef3", display: "flex", padding: "20px", justifyItems: "center" }}
        >
          <TimerIcon sx={{ marginX: "20px" }} color="primary" />
          Duration: <span style={{ color: "gray", margin: "0 5px" }}>{singleItem?.duration} Weeks</span>
        </Typography>

        <Typography
          sx={{ borderBottom: "1px solid #eceef3", display: "flex", padding: "20px", justifyItems: "center" }}
        >
          <SupervisorAccountIcon sx={{ marginX: "20px" }} color="primary" />
          Enrolled: <span style={{ color: "gray", margin: "0 5px" }}>{singleItem?.enrolled} Students</span>
        </Typography>

        <Typography sx={{ display: "flex", padding: "20px", justifyItems: "center" }}>
          <LanguageIcon sx={{ marginX: "20px" }} color="primary" />
          Language: <span style={{ color: "gray", margin: "0 5px" }}>{singleItem?.language}</span>
        </Typography>

        <Typography sx={{ justifyContent: "center", display: "flex", padding: "20px", justifyItems: "center" }}>
          <Button variant="contained">Enrolled</Button>
        </Typography>
      </Box>
    </Box>
  );
};

export default Details;

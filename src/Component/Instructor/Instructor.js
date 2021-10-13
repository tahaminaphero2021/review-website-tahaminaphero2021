import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import useCourse from "../../Hooks/useCourse";
import { Box } from "@mui/system";

const Instructor = () => {
  const [courses] = useCourse();
  const { author, country, short } = courses;
  console.log("lo", courses);
  return (
    <Box>
      <h1 style={{ fontWeight: "700", fontSize: "46px", color: "#2c234d", textAlign: "center", margin: "20px 5px" }}>
        Our Top Instructor
      </h1>
      <Box
        sx={{
          margin: "20px auto",
          justifyContent: "center",
          marginLeft: "30px",
          gap: 4,
          display: "grid",
          gridTemplateColumns: { sx: "repeat(1,1fr)", sx: "repeat(1,1fr)", md: "repeat(2,1fr)", lg: "repeat(3,1fr)" },
        }}
      >
        {courses &&
          courses.map((item) => (
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={<Avatar sx={{ bgcolor: red[500] }}>{item?.author.slice(0, 1)}</Avatar>}
                title={item?.author}
                subheader={item?.country}
              />
              <CardMedia component="img" height="194" image={item.authorProfile} alt="Paella dish" />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {item?.short}
                </Typography>
              </CardContent>
            </Card>
          ))}
      </Box>
    </Box>
  );
};

export default Instructor;

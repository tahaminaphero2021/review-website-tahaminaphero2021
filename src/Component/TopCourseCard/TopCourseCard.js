import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, CardActionArea } from "@mui/material";
import { useHistory } from "react-router";
const TopCourseCard = (props) => {
  const history = useHistory();
  const { pic, authorProfile, id, title, author, short, price } = props.item;
  return (
    <Card onClick={() => history.push(`/details/${id}`)} sx={{ maxWidth: 545 }}>
      <CardActionArea>
        <CardMedia component="img" height="240" image={pic} alt="green iguana" />
        <CardContent>
          <Typography
            sx={{ fontWeight: "600", fontSize: "26px", my: "20px" }}
            gutterBottom
            color="#2c234d"
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <Typography
            sx={{ fontSize: "16px", fontWeight: "400", color: "#5d5a67", marginBottom: "33px" }}
            variant="body2"
            color="text.secondary"
          >
            {short.slice(0, 150)}
          </Typography>
          <Typography
            sx={{ fontSize: "15px", fontWeight: "600", color: "#2C234F" }}
            gutterBottom
            variant="h6"
            component="div"
            display="flex"
            alignItems="center"
            marginBottom="30px"
          >
            <Avatar alt="Remy Sharp" src={authorProfile} sx={{ mx: "10px", width: 50, height: 50 }} /> {author}
          </Typography>
          <Typography
            style={{
              paddingTop: "20px",
              display: "flex",
              borderTop: "1px dashed #c3c2c8",
              justifyContent: "space-between",
            }}
            component="div"
          >
            <h4
              style={{
                textDecoration: "line-through",
                fontSize: "24px",
                fontWeight: "700",
                color: "gray",
              }}
            >
              ${price}
            </h4>
            <h4 style={{ fontSize: "24px", fontWeight: "700", color: "#3fb65f", textDecoration: "none" }}> Free</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TopCourseCard;

import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { Row } from "react-bootstrap";
import { flexbox } from "@mui/system";
import { useHistory } from "react-router";
const CoursesCard = (props) => {
  const history = useHistory();
  const { pic, authorProfile, id, title, author, short } = props.item;
  return (
    <div>
      <Card sx={{ alignItems: "center", display: "flex", flexDirection: { xs: "column", sm: "column", md: "row" } }}>
        <CardMedia
          component="img"
          sx={{
            p: 1,
            alignItems: "center",
            justifyContent: { xs: "center", sm: "center", md: "center", lg: "flex-start" },
            margin: { xs: "0 auto", sm: "0 auto", md: "0 auto", lg: "0 auto" },
            width: { xs: "100vw", sm: "100vw", md: "50%", lg: "50%" },
            height: 220,
          }}
          image={pic}
          alt="Live from space album cover"
        />
        <Box
          sx={{
            margin: { xs: "0 auto", sm: "0 auto", md: "0 auto", lg: "0 auto" },
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="small">
              {short.slice(0, 100)}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              by <span style={{ color: "#2c234d" }}>{author}</span>
            </Typography>
          </CardContent>
          <Button onClick={() => history.push(`/details/${id}`)} style={{ margin: "10px 20px" }} variant="contained">
            Details
          </Button>
        </Box>
      </Card>
    </div>
  );
};

export default CoursesCard;

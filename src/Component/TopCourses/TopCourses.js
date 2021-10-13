import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import TopCourseCard from "../TopCourseCard/TopCourseCard";

const TopCourses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const url = "./education.JSON";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  const course4 = courses.slice(0, 4);
  return (
    <div style={{ marginTop: "30px", display: "flex", justifyContent: "center", alignItems: "center" }}>
      

      <Box
        sx={{
          justifyContent: "center",
          display: "grid",
          gap: 5,
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(2, 1fr)",
          },
        }}
      >
        {course4 && course4.map((item) => <TopCourseCard item={item}></TopCourseCard>)}
      </Box>
    </div>
  );
};

export default TopCourses;

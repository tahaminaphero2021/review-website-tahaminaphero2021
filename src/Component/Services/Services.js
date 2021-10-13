import { Box } from "@mui/system";
import React from "react";
import useCourse from "../../Hooks/useCourse";
import CoursesCard from "../CoursesCard/CoursesCard";
import TopCourseCard from "../TopCourseCard/TopCourseCard";
import TopCourses from "../TopCourses/TopCourses";

const Services = () => {
  const [courses] = useCourse();
  return (
    <div style={{ margin: "20px" }}>
      <h1 style={{ fontWeight: "700", fontSize: "46px", color: "#2c234d", textAlign: "center", margin: "20px 5px" }}>
        Our Services
      </h1>
      <Box sx={{ display: "grid", gap: 3, gridTemplateColumns: "repeat(2,1fr)" }}>
        {courses && courses.map((item) => <CoursesCard item={item}></CoursesCard>)}
      </Box>
    </div>
  );
};

export default Services;

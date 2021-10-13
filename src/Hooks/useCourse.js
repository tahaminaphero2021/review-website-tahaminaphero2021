import { useEffect, useState } from "react";
const useCourse = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const url = "/education.JSON"
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return [courses];
};

export default useCourse;

"use client";

import { getAllPublishedCourse } from "@/app/__actions__/course";
import CourseCard from "@/components/Home/Trending_Courses/CourseCard";
import useCourseStore from "@/store/course/course-store";
import React, { useEffect, useState } from "react";

const CourseList = () => {
  const [courses, setCourses] = useState<Course[] | null | undefined>(null);
  const search_term = useCourseStore((state) => state.search_term);

  async function getPublicCourses() {
    const courses: Course[] | null = await getAllPublishedCourse();
    setCourses(courses);
  }

  useEffect(() => {
    getPublicCourses();
  }, []);

  useEffect(() => {
    if (search_term) {
      const filteredCourses = courses?.filter((course) => {
        return course.skill_name
          .toLowerCase()
          .includes(search_term.toLowerCase());
      });
      setCourses(filteredCourses);
    } else {
      getPublicCourses();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search_term]);

  return (
    <div className="w-full mx-auto md:mx-0 place-items-center md:max-w-[75rem] gap-6 px-10 grid grid-cols-1 md:grid-cols-4">
      {!courses || courses.length === 0 ? (
        <p>No courses in hub</p>
      ) : (
        courses.map((course) => {
          return <CourseCard key={course.id} course={course} />;
        })
      )}
    </div>
  );
};

export default CourseList;

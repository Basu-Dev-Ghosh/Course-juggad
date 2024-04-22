"use client";
import React from "react";
import Slider from "react-slick";
import CourseCard from "./CourseCard";
const Courses = ({ courses }: { courses: Course[] | null }) => {
  const settings = {
    className: "center",
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container mt-10 md:mt-5">
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      {!courses ||
        (courses.length === 0 && (
          <p className="text-xl text-center my-10">
            No courses is published till now
          </p>
        ))}
      {courses && courses.length > 0 && (
        <Slider {...settings}>
          {courses.map((course) => {
            return <CourseCard key={course.id} course={course} />;
          })}
        </Slider>
      )}
    </div>
  );
};

export default Courses;

import React from "react";
import TestimonialHeading from "./TestimonialHeading";
import TestimonialCard from "./TestimonialCard";

const testimonials: Testimonial[] = [
  {
    userName: "Alex parker",
    userImage: "/owner.png",
    content:
      "I've always struggled to find engaging and relevant online courses until I discovered this platform. The variety of topics and the quality of instruction exceeded my expectations. I've learned so much and continue to be impressed with the depth of knowledge available. Highly recommended!",
  },
  {
    userName: "Leland Kiehn",
    userImage: "/owner.png",
    content:
      "As a busy professional, I needed a platform that could accommodate my schedule and provide valuable learning opportunities. This platform delivered on both fronts and more. The flexibility to customize my learning experience, coupled with the support from the community, has been invaluable. I've gained new skills and confidence in my abilities. Thank you!",
  },
  {
    userName: "Peter Renolds",
    userImage: "/owner.png",
    content:
      "I've been searching for an affordable and effective way to expand my knowledge and expertise, and I'm thrilled to say I've found it here. The courses are comprehensive, the instructors are knowledgeable, and the platform is user-friendly. I appreciate the dedication to quality and the commitment to lifelong learning. I'm proud to be a part of this community!",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full h-auto  rounded-xl">
      <div className="md:mx-auto md:max-w-7xl px-1 md:px-6 lg:px-8">
        <TestimonialHeading />
        <ul className="md:mx-auto mt-16 grid w-full md:max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => {
            return <TestimonialCard key={index} testimonial={testimonial} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;

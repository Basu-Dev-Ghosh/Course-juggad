import React from "react";
import InViewAnimation from "../../Animations/InViewAnimation";
import Image from "next/image";

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <InViewAnimation initial={{ scale: 0 }} whileInView={{ scale: 1 }}>
      <li>
        <figure className="h-[350px] relative rounded-2xl mx-6 md:mx-0 bg-[#f6f6f6] p-6 shadow-md shadow-slate-600/10">
          <blockquote className="relative">
            <p className="text-sm tracking-tight text-slate-900">
              {testimonial.content}
            </p>
          </blockquote>
          <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
            <div>
              <div className="font-display text-base text-slate-900">
                {testimonial.userName}
              </div>
            </div>
            <div className="overflow-hidden rounded-full bg-slate-50">
              <Image
                width={40}
                height={40}
                alt="test"
                className="h-14 w-14 object-cover"
                style={{ color: "transparent" }}
                src={testimonial.userImage}
              />
            </div>
          </figcaption>
        </figure>
      </li>
    </InViewAnimation>
  );
};

export default TestimonialCard;

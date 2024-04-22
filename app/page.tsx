import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import CreateCourse from "@/components/Home/CreateCourse/CreateCourse";
import Features from "@/components/Home/Features/Features";
import Hero from "@/components/Home/Hero/Hero";

import Pricing from "@/components/Home/Pricing/Pricing";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import TrendingCourses from "@/components/Home/Trending_Courses";
import { logger } from "@/logger";
export default function Home() {
  logger.info("Root Page called ");
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-between overflow-x-hidden">
        <Hero />
        <TrendingCourses />
        <Features />
        <CreateCourse />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

"use client";
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MapPinIcon,
  CurrencyIcon,
  BriefcaseIcon,
  ExternalLinkIcon,
} from "lucide-react";
import useCourseStore from "@/store/course/course-store";

const JobSearchResults: React.FC = () => {
  const jobs = useCourseStore((state) => state.searchedJobs);

  return (
    <div className="container max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Job Search Results
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs &&
          jobs.map((job, index) => (
            <Card
              key={index}
              className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-purple-50"
            >
              <CardContent className="flex-grow p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={
                      job.image !== "No image available"
                        ? job.image
                        : "/company.png"
                    }
                    alt={job.company}
                    className="w-16 h-16 object-contain mr-4 rounded bg-white p-1"
                  />
                  <div>
                    <h2 className="text-xl font-semibold line-clamp-2 text-purple-800">
                      {job.title}
                    </h2>
                    <p className="text-sm text-purple-600">{job.company}</p>
                  </div>
                </div>
                <p className="text-sm text-purple-900 mb-4 line-clamp-3">
                  {job.snippet}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-purple-700">
                    <MapPinIcon className="w-4 h-4 mr-2" />
                    <span>{job.location}</span>
                  </div>
                  {/* <div className="flex items-center text-purple-700">
                    <CurrencyIcon className="w-4 h-4 mr-2" />
                    <span className="text-xs"> {job.salary}</span>
                  </div> */}
                  <div className="flex items-center text-purple-700">
                    <BriefcaseIcon className="w-4 h-4 mr-2" />
                    <span>{job.jobType}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-purple-100 p-4">
                <Button
                  className="w-full flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white"
                  onClick={() => window.open(job.link, "_blank")}
                >
                  Apply Now
                  <ExternalLinkIcon className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default JobSearchResults;

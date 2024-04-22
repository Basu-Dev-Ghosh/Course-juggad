"use client";
import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CreatedCourses from "./CreatedCourses";
import SavedCourses from "./SavedCourses";

const Courses = () => {
  return (
    <Tabs defaultValue="created-course" className="md:w-[50%] w-[96%]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="created-course">Created</TabsTrigger>
        <TabsTrigger value="saved-course">Saved</TabsTrigger>
      </TabsList>
      <TabsContent value="created-course">
        <CreatedCourses />
      </TabsContent>
      <TabsContent value="saved-course">
        <SavedCourses />
      </TabsContent>
    </Tabs>
  );
};

export default Courses;

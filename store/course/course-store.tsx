import { create } from "zustand";

type CourseStore = {
  id: string | null;
  skill_name: string | null;
  data: CourseData | null;
  progress: number;
  setCourseData: (
    courseData: CourseData | null,
    skillName: string | null
  ) => void;
  active_link: string | null;
  active_subtopic: string | null | undefined;
  total_videos: number;
  set_active_link: (link: string | null) => void;
  search_term: string | null;
  set_search_term: (term: string | null) => void;
  set_active_subtopic: (term: string | null) => void;
  searchedJobs: Job[] | null;
  setSearchedJobs: (jobs: Job[] | null) => void;
};

const useCourseStore = create<CourseStore>()((set) => ({
  id: null,
  skill_name: null,
  data: null,
  progress: 0,
  total_videos: 0,
  setCourseData: (
    courseData: CourseData | null,
    skillName: string | null,
    progress?: number,
    total_videos?: number
  ) =>
    set((state) => ({
      data: courseData,
      skill_name: skillName,
      progress,
      total_videos,
    })),

  active_link: null,
  search_term: null,
  active_subtopic: undefined,
  searchedJobs: null,
  setSearchedJobs: (jobs: Job[] | null) =>
    set((state) => ({ searchedJobs: jobs })),
  set_search_term: (term: string | null) =>
    set((state) => ({ search_term: term })),
  set_active_link: (link: string | null) =>
    set((state) => ({ active_link: link })),
  set_active_subtopic: (subtopic: string | undefined | null) =>
    set((state) => ({ active_subtopic: subtopic })),
}));

export default useCourseStore;

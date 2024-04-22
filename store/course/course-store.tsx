import { create } from "zustand";

type CourseStore = {
  skill_name: string | null;
  data: CourseData | null;
  setCourseData: (
    courseData: CourseData | null,
    skillName: string | null
  ) => void;
  active_link: string | null;
  set_active_link: (link: string | null) => void;
  search_term: string | null;
  set_search_term: (term: string | null) => void;
};

const useCourseStore = create<CourseStore>()((set) => ({
  skill_name: null,
  data: null,
  setCourseData: (courseData: CourseData | null, skillName: string | null) =>
    set((state) => ({ data: courseData, skill_name: skillName })),

  active_link: null,
  search_term: null,
  set_search_term: (term: string | null) =>
    set((state) => ({ search_term: term })),
  set_active_link: (link: string | null) =>
    set((state) => ({ active_link: link })),
}));

export default useCourseStore;

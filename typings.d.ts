type Pricing = {
  title: string;
  price: string;
  description: string;
  features: string[];
};
type Testimonial = {
  userName: string;
  userImage: string;
  content: string;
};

type Route = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  onClick?: () => void;
  isActive?: boolean;
  disabled?: boolean;
};

type SubTopic = {
  subtopic_name: string;
  youtube_links: string[];
};

type Topic = {
  topic_name: string;
  subtopics: SubTopic[];
};

type CourseData = Topic[] | null;

type Course = {
  id: string;
  skill_name: string;
  course_data: string;
  created_at: string;
  user_id: string;
  course_cover: string;
  is_published?: boolean;
  is_duplicate?: number;
  progress?: number;
};


type Job = {
  title: string;
  link: string;
  snippet: string;
  company: string;
  location: string;
  datePosted: string;
  image: string;
  salary: string;
  jobType: string;
  applicationDeadline: string;
};
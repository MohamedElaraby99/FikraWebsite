export type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
};

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
};

export type Service = {
  id: number;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  icon: string;
};

export type Achievement = {
  id: number;
  title: string;
  value: string;
  icon: string;
  description: string;
};

export type SocialLink = {
  id: number;
  platform: string;
  url: string;
  icon: string;
};
import {
  Service,
  Project,
  Testimonial,
  Achievement,
} from "../types";

export const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    titleAr: "تطوير المواقع",
    description: "Custom web solutions built with modern technologies",
    descriptionAr: "حلول ويب مخصصة مبنية بأحدث التقنيات",
    icon: "Code2",
  },
  {
    id: 2,
    title: "Educational Platforms",
    titleAr: "المنصات التعليمية",
    description: "Interactive learning management systems",
    descriptionAr: "أنظمة إدارة التعلم التفاعلية",
    icon: "BookOpen",
  },
  {
    id: 3,
    title: "Software Solutions",
    titleAr: "حلول البرمجيات",
    description: "Enterprise-grade software development",
    descriptionAr: "تطوير برمجيات على مستوى المؤسسات",
    icon: "Laptop",
  },
];

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "مشاريع منجزة",
    value: "١٥٠+",
    icon: "Target",
    description: "مشروع تم إنجازه بنجاح",
  },
  {
    id: 2,
    title: "عملاء سعداء",
    value: "٢٠٠+",
    icon: "Users",
    description: "عميل راضٍ عن خدماتنا",
  },
  {
    id: 3,
    title: "جوائز التميز",
    value: "٢٥+",
    icon: "Award",
    description: "جائزة في مجال التقنية",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "منصة التعليم الإلكتروني",
    description: "نظام إدارة تعليمي متكامل للمؤسسات التعليمية",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "بوابة المؤسسات",
    description: "حل متكامل لإدارة المؤسسات والشركات",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["TypeScript", "React", "AWS"],
  },
  {
    id: 3,
    title: "نظام إدارة المبيعات",
    description: "منصة متكاملة لإدارة المبيعات والمخزون",
    image:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Firebase", "Analytics"],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "أحمد حسن",
    role: "المدير التقني",
    company: "شركة التقنية",
    content: "قدمت منصتي نتائج استثنائية لمشروع التحول الرقمي الخاص بنا",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    id: 2,
    name: "سارة محمد",
    role: "مديرة",
    company: "التعليم التقني",
    content: "ساهمت حلولهم في تحويل تجربة التعلم عن بعد لدينا بشكل كامل",
    image: "https://cdn-icons-png.flaticon.com/512/6997/6997662.png",
  },
];

export const socialLinks = [
  { id: 1, icon: "Twitter", url: "https://twitter.com" },
  { id: 2, icon: "Linkedin", url: "https://linkedin.com" },
  { id: 3, icon: "Instagram", url: "https://instagram.com" },
  { id: 4, icon: "Facebook", url: "https://facebook.com" }, // Added Facebook
];

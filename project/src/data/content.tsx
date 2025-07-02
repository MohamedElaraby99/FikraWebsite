import {
  Code2,
  BookOpen,
  Laptop,
  ShoppingCart,
  Palette,
  Search,
  Megaphone,
  Target,
  Users,
  Award,
  Facebook,
  Mail,
  Phone,
  Linkedin,
  Instagram,
} from "lucide-react";

import mini from "../Images/mini.webp";
import expo from "../Images/expo.webp";
import Hostinger from "../Images/Hostinger.webp";
import we from "../Images/we.webp";
import Emaar from "../Images/Emaar.webp";
import tvs from "../Images/tvs.webp";
import delta from "../Images/delta.webp";
import pay from "../Images/pay.webp";
import voda from "../Images/voda.webp";
import pal from "../Images/pal.webp";

export const navLinks = [
  { id: "services", en: "Services", ar: "خدماتنا" },
  { id: "achievements", en: "Achievements", ar: "إنجازاتنا" },
  { id: "projects", en: "Projects", ar: "مشاريعنا" },
  { id: "about", en: "About Us", ar: "من نحن" },
  { id: "ceo", en: "CEO", ar: "المؤسس" },
  { id: "contact", en: "Contact", ar: "اتصل بنا" },
];

export const services = [
  {
    title: { en: "Web Development", ar: "تطوير المواقع" },
    description: {
      en: "Custom web solutions with modern tech.",
      ar: "حلول ويب مخصصة بأحدث التقنيات.",
    },
    icon: Code2,
  },
  {
    title: { en: "Educational Platforms", ar: "المنصات التعليمية" },
    description: {
      en: "Interactive learning management systems.",
      ar: "أنظمة إدارة تعلم تفاعلية.",
    },
    icon: BookOpen,
  },
  {
    title: { en: "Software Solutions", ar: "حلول البرمجيات" },
    description: {
      en: "Enterprise-grade software development.",
      ar: "تطوير برمجيات على مستوى المؤسسات.",
    },
    icon: Laptop,
  },
  {
    title: { en: "E-commerce Design", ar: "تصميم متاجر إلكترونية" },
    description: {
      en: "Professional e-commerce store design.",
      ar: "تصميم متاجر إلكترونية احترافية.",
    },
    icon: ShoppingCart,
  },
  {
    title: { en: "Graphic Design", ar: "تصاميم جرافيك" },
    description: {
      en: "Creative graphic design for your brand.",
      ar: "خدمات تصميم جرافيك إبداعية لعلامتك.",
    },
    icon: Palette,
  },
  {
    title: { en: "SEO Services", ar: "تحسين محركات البحث" },
    description: {
      en: "Improve visibility on search engines.",
      ar: "تحسين ظهور موقعك في محركات البحث.",
    },
    icon: Search,
  },
  {
    title: { en: "Digital Marketing", ar: "التسويق الإلكتروني" },
    description: {
      en: "Effective strategies to boost your business.",
      ar: "استراتيجيات فعالة لتعزيز أعمالك.",
    },
    icon: Megaphone,
  },
];

export const achievements = [
  {
    title: { en: "Completed Projects", ar: "مشاريع منجزة" },
    value: 150,
    suffix: "+",
    icon: Target,
  },
  {
    title: { en: "Happy Clients", ar: "عملاء سعداء" },
    value: 200,
    suffix: "+",
    icon: Users,
  },
  {
    title: { en: "Awards", ar: "جوائز تميز" },
    value: 25,
    suffix: "+",
    icon: Award,
  },
  {
    title: { en: "E-commerce Stores", ar: "متاجر إلكترونية" },
    value: 50,
    suffix: "+",
    icon: ShoppingCart,
  },
];

export const projects = [
  {
    title: { en: "E-Learning Platform", ar: "منصة التعليم الإلكتروني" },
    description: {
      en: "Integrated educational management system for institutions.",
      ar: "نظام إدارة تعليمي متكامل للمؤسسات التعليمية.",
    },
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: { en: "Corporate Portal", ar: "بوابة المؤسسات" },
    description: {
      en: "Comprehensive solution for corporate management.",
      ar: "حل متكامل لإدارة المؤسسات والشركات.",
    },
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["TypeScript", "React", "AWS"],
  },
  {
    title: { en: "Sales Management System", ar: "نظام إدارة المبيعات" },
    description: {
      en: "Integrated platform for managing sales and inventory.",
      ar: "منصة متكاملة لإدارة المبيعات والمخزون.",
    },
    image:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Firebase", "Analytics"],
  },
];

export const partners = [
  { name: "Mini", image: mini },
  { name: "Expo", image: expo },
  { name: "Hostinger", image: Hostinger },
  { name: "WE", image: we },
  { name: "Emaar", image: Emaar },
  { name: "TVS", image: tvs },
  { name: "Delta", image: delta },
  { name: "Pay", image: pay },
  { name: "Vodafone", image: voda },
  { name: "Pal", image: pal },
];

export const socialLinks = [
  { icon: Facebook, url: "https://www.facebook.com/share/1AN2gA2bMq/" },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/company/fikra-software-%D9%81%D9%83%D8%B1%D8%A9-%D9%84%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D9%8A%D8%A7%D8%AA/",
  },
  {
    icon: Instagram,
    url: "https://www.instagram.com/fikra_software/?igsh=cDZpejg5a3VuNHVn#",
  },
  { icon: Mail, url: "mailto:softwarefikra@gmail.com" },
  { icon: Phone, url: "tel:+201207039410" },
];

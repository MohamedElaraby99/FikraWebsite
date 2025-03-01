// App.js
import { useState, FormEvent, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Code2,
  BookOpen,
  Laptop,
  Users,
  Target,
  Award,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { Phone, Mail, Facebook } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import { AnimatedSection } from "./components/AnimatedSection";
import { AnimatedCard } from "./components/AnimatedCard";
import { AnimatedIcon } from "./components/AnimatedIcon";
import logo from "./Images/logo.webp";
import Hostinger from "./Images/Hostinger.webp";
import mini from "./Images/mini.webp";
import expo from "./Images/expo.webp";
import we from "./Images/we.webp";
import Emaar from "./Images/Emaar.webp";
import tvs from "./Images/tvs.webp";
import delta from "./Images/delta.webp";
import pay from "./Images/pay.webp";
import voda from "./Images/voda.webp";
import pal from "./Images/pal.webp";
import webImage from "./Images/webimage.webp";
import { ThemeToggle } from "./components/ThemeToggle";
import { ThemeProvider } from "./components/ThemeContext";
import AnimatedBackground from "./AnimatedBackground";
import features from "./Images/features.webp";
import About from "./Images/About.webp";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isArabic, setIsArabic] = useState(true);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    emailjs
      .sendForm(
        "service_l6ne5yu",
        "template_bb9xax6",
        form,
        "81d8TyXC4XBXjjcIZ"
      )
      .then(
        () => {
          toast.success(
            isArabic
              ? "تم التواصل معنا بنجاح! سنرد عليك في غضون خمس دقائق."
              : "Message sent successfully! We will respond within five minutes."
          );
        },
        (error) => {
          console.error("Error sending email:", error.text);
          toast.error(
            isArabic
              ? "حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى لاحقًا."
              : "An error occurred while sending the message. Please try again later."
          );
        }
      );

    form.reset();
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    setIsArabic(!isArabic);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      title: { en: "Web Development", ar: "تطوير المواقع" },
      description: {
        en: "Custom web solutions built with modern technologies",
        ar: "حلول ويب مخصصة مبنية بأحدث التقنيات",
      },
      icon: "Code2",
    },
    {
      title: { en: "Educational Platforms", ar: "المنصات التعليمية" },
      description: {
        en: "Interactive learning management systems",
        ar: "أنظمة إدارة التعلم التفاعلية",
      },
      icon: "BookOpen",
    },
    {
      title: { en: "Software Solutions", ar: "حلول البرمجيات" },
      description: {
        en: "Enterprise-grade software development",
        ar: "تطوير برمجيات على مستوى المؤسسات",
      },
      icon: "Laptop",
    },
  ];

  const achievements = [
    {
      title: { en: "Completed Projects", ar: "مشاريع منجزة" },
      value: "150+",
      description: {
        en: "Successfully completed project",
        ar: "مشروع تم إنجازه بنجاح",
      },
      icon: "Target",
    },
    {
      title: { en: "Happy Clients", ar: "عملاء سعداء" },
      value: "200+",
      description: {
        en: "Satisfied client with our services",
        ar: "عميل راضٍ عن خدماتنا",
      },
      icon: "Users",
    },
    {
      title: { en: "Awards of Excellence", ar: "جوائز التميز" },
      value: "25+",
      description: {
        en: "Award in the field of technology",
        ar: "جائزة في مجال التقنية",
      },
      icon: "Award",
    },
  ];

  const projects = [
    {
      title: { en: "E-Learning Platform", ar: "منصة التعليم الإلكتروني" },
      description: {
        en: "Integrated educational management system for institutions",
        ar: "نظام إدارة تعليمي متكامل للمؤسسات التعليمية",
      },
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: { en: "Corporate Portal", ar: "بوابة المؤسسات" },
      description: {
        en: "Comprehensive solution for corporate management",
        ar: "حل متكامل لإدارة المؤسسات والشركات",
      },
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["TypeScript", "React", "AWS"],
    },
    {
      title: { en: "Sales Management System", ar: "نظام إدارة المبيعات" },
      description: {
        en: "Integrated platform for managing sales and inventory",
        ar: "منصة متكاملة لإدارة المبيعات والمخزون",
      },
      image:
        "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Firebase", "Analytics"],
    },
  ];

  const socialLinks = [
    {
      id: 1,
      icon: "Facebook",
      url: "https://www.facebook.com/share/1AN2gA2bMq/",
    },
    { id: 2, icon: "Mail", url: "mailto:softwarefikra@gmail.com" },
    { id: 3, icon: "Phone", url: "tel:+201207039410" },
  ];

  const partners = [
    {
      name: "Partner 1",
      image: `${mini}`, // Assuming the image is in the public/Images directory
    },
    {
      name: "Partner 2",
      image: `${expo}`,
    },
    {
      name: "Partner 3",
      image: `${Hostinger}`,
    },
    {
      name: "Partner 4",
      image: `${we}`,
    },
    {
      name: "Partner 5",
      image: `${Emaar}`,
    },
    {
      name: "Partner 6",
      image: `${tvs}`,
    },
    {
      name: "Partner 7",
      image: `${delta}`,
    },
    {
      name: "Partner 8",
      image: `${pay}`,
    },
    {
      name: "Partner 9",
      image: `${voda}`,
    },
    {
      name: "Partner 10",
      image: `${pal}`,
    },
  ];

  const whyUs = [
    {
      reason: {
        title: { ar: "التصميم", en: "User-Centric Design" },
        content: {
          ar: "تصميم جذاب وسهل يوفر للمستخدم تجربة استخدام رائعة.",
          en: "Intuitive designs that provide an engaging user experience.",
        },
      },
    },
    {
      reason: {
        title: { ar: "حلول مخصصة", en: "Custom Solutions" },
        content: {
          ar: "تطبيقات مخصصة تناسب احتياجات عملك بدقة.",
          en: "Tailored mobile apps that perfectly fit your business needs.",
        },
      },
    },
    {
      reason: {
        title: { ar: "تسليم سريع", en: "Fast Delivery" },
        content: {
          ar: "تطوير سريع وفعال لوضع تطبيقك في السوق بسرعة.",
          en: "Quick and efficient development to bring your app to market faster.",
        },
      },
    },
    {
      reason: {
        title: { ar: "الأمن أولوية", en: "Security First" },
        content: {
          ar: "ميزات أمن عالية لحماية تطبيقك وبيانات المستخدمين.",
          en: "Top-notch security features to protect your app and user data.",
        },
      },
    },
  ];

  return (
    <ThemeProvider>
      <div
        dir={isArabic ? "rtl" : "ltr"}
        className="min-h-screen bg-white dark:bg-gray-900"
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <AnimatedBackground />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={isArabic}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Navigation */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed h-20 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200 dark:bg-gray-800/80 dark:border-gray-700"
        >
          <div className="max-w-7x1 mx-auto px-4 sm:px-6 lg:px-10">
            <div className="flex justify-between h-16 items-center">
              {/* Logo */}
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-blue-800 bg-clip-text text-transparent"
              >
                <img
                  src={logo}
                  alt="Logo"
                  style={{
                    direction: "rtl",
                    marginTop: "10px",
                    width: "100px",
                    height: "70px",
                    cursor: "pointer",
                    marginBottom: "5px",
                  }}
                />
              </motion.span>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-6 space-x-reverse">
                {[
                  { name: isArabic ? "خدماتنا" : "Services", id: "services" },
                  {
                    name: isArabic ? "إنجازاتنا" : "Achievements",
                    id: "achievements",
                  },
                  { name: isArabic ? "من نحن" : "About", id: "about" },
                  { name: isArabic ? "مشاريعنا" : "Projects", id: "projects" },
                  { name: isArabic ? "اتصل بنا" : "Contact", id: "contact" },
                ].map((item, index) => (
                  <motion.button
                    key={index}
                    onClick={() => scrollToSection(item.id)}
                    whileHover={{ scale: 1.05 }}
                    className="text-gray-700 hover:text-blue-600 transition cursor-pointer dark:text-gray-300 dark:hover:text-blue-400"
                    aria-label={`Navigate to ${item.name}`}
                  >
                    {item.name}
                  </motion.button>
                ))}
                <motion.button
                  onClick={toggleLanguage}
                  whileHover={{ scale: 1.05 }}
                  className="text-gray-700 hover:text-blue-600 transition cursor-pointer dark:text-gray-300 dark:hover:text-blue-400"
                  aria-label="Toggle Language"
                >
                  {isArabic ? "English" : "عربي"}
                </motion.button>
                <ThemeToggle />
              </div>

              {/* Mobile Menu Toggle */}
              <div className="md:hidden flex items-center">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-700 dark:text-gray-300"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </motion.button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg border-t border-gray-200 z-40 dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="px-4 pt-4 pb-6 flex flex-col space-y-4">
                  {[
                    { name: isArabic ? "خدماتنا" : "Services", id: "services" },
                    {
                      name: isArabic ? "إنجازاتنا" : "Achievements",
                      id: "achievements",
                    },
                    {
                      name: isArabic ? "مشاريعنا" : "Projects",
                      id: "projects",
                    },
                    {
                      name: isArabic ? "لماذا نحن؟" : "Why Us",
                      id: "why-us",
                    },
                    {
                      name: isArabic ? "آراء العملاء" : "Testimonials",
                      id: "testimonials",
                    },
                    { name: isArabic ? "اتصل بنا" : "Contact", id: "contact" },
                  ].map((item, index) => (
                    <motion.button
                      key={index}
                      onClick={() => scrollToSection(item.id)}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="block text-gray-700 text-lg font-medium hover:text-blue-600 transition cursor-pointer text-right dark:text-gray-300 dark:hover:text-blue-400"
                      aria-label={`Navigate to ${item.name}`}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                  <motion.button
                    onClick={toggleLanguage}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 5 * 0.1 }}
                    className="block text-gray-700 text-lg font-medium hover:text-blue-600 transition cursor-pointer text-right dark:text-gray-300 dark:hover:text-blue-400"
                    aria-label="Toggle Language"
                  >
                    {isArabic ? "English" : "عربي"}
                  </motion.button>
                  <ThemeToggle />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-7xl mx-auto">
            <AnimatedBackground />
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              {/* Text */}
              <div className="text-center md:text-right md:w-1/2">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-5xl font-bold text-gray-900 mb-6 dark:text-gray-100"
                >
                  <span className="block">
                    {isArabic
                      ? "حول رؤيتك الرقمية إلى واقع"
                      : "Turn your digital vision into reality"}
                  </span>
                  <span className="block text-blue-600 mt-2">
                    {isArabic ? "مع فكرة" : "with Fikra"}
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mt-4 text-xl text-gray-600 dark:text-gray-300"
                >
                  {isArabic
                    ? "حلول تقنية مبتكرة للمؤسسات العصرية"
                    : "Innovative tech solutions for modern institutions"}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="mt-10"
                >
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://wa.me/+201207039410"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    aria-label="Start now"
                  >
                    {isArabic ? "ابدأ الآن" : "Start Now"}
                    <ChevronUp className="mr-2 h-5 w-5" />
                  </motion.a>
                </motion.div>
              </div>

              {/* Image */}
              <motion.div
                className="md:w-1/2 flex justify-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src={webImage}
                  alt={isArabic ? "تطوير المواقع" : "Web Development"}
                  className="w-full md:w-auto max-w-lg"
                />
              </motion.div>
            </div>
          </AnimatedSection>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 dark:text-gray-100">
                {isArabic ? "إنجازاتنا" : "Our Achievements"}
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <AnimatedSection key={index} delay={index * 0.2}>
                  <AnimatedCard className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-4">
                      <AnimatedIcon
                        Icon={
                          achievement.icon === "Target"
                            ? Target
                            : achievement.icon === "Users"
                            ? Users
                            : Award
                        }
                        className="text-blue-600 dark:text-blue-400"
                      />
                    </div>
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-3xl font-bold text-blue-600 mb-2"
                    >
                      {achievement.value}
                    </motion.h3>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2 dark:text-gray-100">
                      {isArabic ? achievement.title.ar : achievement.title.en}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {isArabic
                        ? achievement.description.ar
                        : achievement.description.en}
                    </p>
                  </AnimatedCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
        >
          <div className="max-w-7xl mx-auto">
            <AnimatedBackground />
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 dark:text-gray-100">
                {isArabic ? "خدماتنا" : "Our Services"}
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <AnimatedSection key={index} delay={index * 0.2}>
                  <AnimatedCard className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-4">
                      <AnimatedIcon
                        Icon={
                          service.icon === "Code2"
                            ? Code2
                            : service.icon === "BookOpen"
                            ? BookOpen
                            : Laptop
                        }
                        className="text-blue-600 dark:text-blue-400"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 dark:text-gray-100">
                      {isArabic ? service.title.ar : service.title.en}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {isArabic
                        ? service.description.ar
                        : service.description.en}
                    </p>
                  </AnimatedCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 dark:text-gray-100">
                {isArabic ? "من نحن؟" : "About Us"}
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection>
                <img
                  src={About}
                  alt={isArabic ? "من نحن؟" : "About Us"}
                  className="w-full md:w-auto max-w-lg"
                />
              </AnimatedSection>
              <AnimatedSection>
                <div className="space-y-6">
                  <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">
                    Our Story
                  </h3>
                  <p className="text-black dark:text-white text-800 leading-relaxed">
                    {isArabic ? (
                      <p>
                        تأسست فكرة. في عام 2020 بهدف تقديم حلول رقمية مبتكرة
                        تلبي احتياجات العملاء وتتجاوز توقعاتهم. منذ بدايتنا، كنا
                        ملتزمين بالابتكار المستمر وتقديم خدمات ذات جودة عالية
                        تساعد الشركات على النمو والتطور. نحن نؤمن بأن
                        التكنولوجيا يمكن أن تكون أداة قوية لحل المشكلات وتحقيق
                        الأهداف. لذلك، نسعى دائمًا لتطوير حلول تكنولوجية تتناسب
                        مع احتياجات كل عميل على حدة، مع التركيز على الكفاءة
                        والفعالية. فريقنا مكون من متخصصين ذوي خبرة عالية في
                        مجالات متعددة، من التطوير البرمجي وتصميم الواجهات إلى
                        إدارة المشاريع وتحليل البيانات. نحن نعمل معًا بروح
                        الفريق الواحد لضمان تقديم أفضل النتائج لعملائنا. نحن
                        نفخر بأننا نقدم خدماتنا بشفافية واحترافية، ونسعى دائمًا
                        لبناء علاقات طويلة الأمد مع عملائنا. نحن نعتبر نجاح
                        عملائنا نجاحًا لنا، ولذلك نعمل بجد لتحقيق أهدافهم وتجاوز
                        توقعاتهم. في فكرة.، نحن نستثمر في التكنولوجيا الحديثة
                        ونسعى دائمًا لتحسين مهاراتنا وخدماتنا. نحن نؤمن بأن
                        التعلم المستمر والتطوير المهني هما مفتاح النجاح في عالم
                        متغير باستمرار. نحن هنا لنكون شركاء استراتيجيين
                        لعملائنا، ونساعدهم على التكيف مع التحديات الجديدة
                        والاستفادة من الفرص المتاحة. نحن نفخر بأننا نقدم حلولًا
                        لا تقتصر على مجرد تلبية الاحتياجات الحالية، بل تساعد
                        أيضًا في تحقيق النمو والتطور على المدى الطويل.
                      </p>
                    ) : (
                      <p>
                        Founded in 2020, Fikra. has been at the forefront of
                        digital innovation, committed to delivering solutions
                        that not only meet but exceed client expectations. From
                        our inception, we have been dedicated to continuous
                        innovation and providing high-quality services that help
                        businesses grow and evolve. We believe that technology
                        can be a powerful tool for solving problems and
                        achieving goals. Therefore, we strive to develop
                        technological solutions tailored to each client's unique
                        needs, focusing on efficiency and effectiveness. Our
                        team comprises highly experienced specialists across
                        various fields, from software development and UI design
                        to project management and data analysis. We work
                        together as a cohesive unit to ensure the best outcomes
                        for our clients. We pride ourselves on offering our
                        services with transparency and professionalism, always
                        aiming to build long-term relationships with our
                        clients. We consider our clients' success our own and
                        work diligently to achieve their goals and surpass their
                        expectations. At Fikra., we invest in modern technology
                        and continuously seek to improve our skills and
                        services. We believe that continuous learning and
                        professional development are key to success in an
                        ever-changing world. We are here to be strategic
                        partners for our clients, helping them adapt to new
                        challenges and capitalize on available opportunities. We
                        take pride in offering solutions that not only address
                        current needs but also facilitate long-term growth and
                        development.
                      </p>
                    )}
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section
          id="why-us"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 "
        >
          <div className="max-w-7xl mx-auto">
            <AnimatedBackground />
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-gray-900 mb-12 dark:text-gray-100 text-center ">
                {isArabic ? "لماذا نحن؟" : "Why Choose Us"}
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
              {/* الجزء الأيسر: الخصائص */}
              <div className="flex flex-col space-y-6">
                {whyUs.map((item, index) => (
                  <AnimatedSection key={index} delay={index * 0.2}>
                    <div className="flex items-center p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 hover">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 dark:text-gray-100">
                          {isArabic
                            ? item.reason.title.ar
                            : item.reason.title.en}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {isArabic
                            ? item.reason.content.ar
                            : item.reason.content.en}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              {/* الجزء الأيمن: الصورة */}
              <div className="flex justify-center items-center">
                <img
                  src={features} // استبدل بمسار الصورة الخاصة بك
                  alt={isArabic ? "صورة توضيحية" : "Illustrative Image"}
                  className=" max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <AnimatedBackground />
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 dark:text-gray-100">
                {isArabic ? "مشاريعنا" : "Our Projects"}
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <AnimatedSection key={index} delay={index * 0.2}>
                  <AnimatedCard className="bg-white rounded-lg overflow-hidden shadow-lg dark:bg-gray-800">
                    <motion.img
                      initial={{ scale: 1.2 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 1.5 }}
                      src={project.image}
                      alt={isArabic ? project.title.ar : project.title.en}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 dark:text-gray-100">
                        {isArabic ? project.title.ar : project.title.en}
                      </h3>
                      <p className="text-gray-600 mb-4 dark:text-gray-300">
                        {isArabic
                          ? project.description.ar
                          : project.description.en}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </AnimatedCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section
          id="partners"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
        >
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 dark:text-gray-100">
                {isArabic ? "شركائنا" : "Our Partners"}
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
                >
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
        >
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 dark:text-gray-100">
                {isArabic ? "اتصل بنا" : "Contact Us"}
              </h2>
              <form className="space-y-6" onSubmit={sendEmail}>
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {isArabic ? "الاسم" : "Name"}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
                    required
                  />
                </motion.div>
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {isArabic ? "البريد الإلكتروني" : "Email"}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
                    required
                  />
                </motion.div>
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {isArabic ? "الرسالة" : "Message"}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
                    required
                  ></textarea>
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    {isArabic ? "إرسال الرسالة" : "Send Message"}
                  </motion.button>
                </motion.div>
              </form>
            </AnimatedSection>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center">
                {/* Social Links */}
                <div className="flex justify-center space-x-6 mb-6">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.id}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition duration-300 dark:text-gray-300 dark:hover:text-blue-400"
                      aria-label={`Visit ${link.icon} profile`}
                    >
                      {link.icon === "Mail" && <Mail className="h-6 w-6" />}
                      {link.icon === "Facebook" && (
                        <Facebook className="h-6 w-6" />
                      )}
                      {link.icon === "Phone" && <Phone className="h-6 w-6" />}
                    </motion.a>
                  ))}
                </div>

                {/* Copyright */}
                <p className="text-gray-600 text-sm sm:text-base dark:text-gray-300">
                  {isArabic
                    ? "Fikra Software  . جميع الحقوق محفوظة. © 2025"
                    : "Fikra Software Platform. All rights reserved. © 2025"}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </footer>
        <FloatingWhatsApp
          phoneNumber="+201207039410"
          accountName="Mohamed"
          avatar="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          chatMessage="مرحبًا! كيف يمكنني مساعدتك اليوم؟"
          placeholder="اكتب رسالتك هنا..."
          statusMessage="نشط الآن"
          buttonStyle={{
            backgroundColor: "#25D366",
            color: "#FFFFFF",
            zIndex: 1000,
          }}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: "60px",
            height: "60px",
          }}
        />

        {/* Scroll to Top Button */}
        {showScrollToTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-4 left-4 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <ChevronDown className="h-6 w-6 transform rotate-180" />
          </motion.button>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;

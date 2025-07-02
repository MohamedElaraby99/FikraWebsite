import { useState, useEffect, FormEvent, FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowUp,
  BookOpen,
  Laptop,
  Target,
  Code2,
  MessageCircle,
  MapPin,
  Phone,
  Shield,
} from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "emailjs-com";
import "react-toastify/dist/ReactToastify.css";

// Custom Components
import { AnimatedSection } from "./components/AnimatedSection";
import { LazyImage } from "./components/LazyImage";
import { CountUp } from "./components/CountUp";
import { ThemeProvider, useTheme } from "./components/ThemeContext";
import { ThemeToggle } from "./components/ThemeToggle";

// App Data
import {
  navLinks,
  services,
  projects,
  achievements,
  partners,
  socialLinks,
} from "./data/content";
import heroIllustration from "./Images/ai-hero.webp";
import aboutImage from "./Images/About.webp";
import ceoImage from "./Images/ceo.png";

// Helper function for smooth scrolling
const scrollToSection = (id: string) => {
  try {
    const element = document.getElementById(id);
    if (element) {
      // Add slight delay for mobile browsers
      setTimeout(() => {
        const offsetTop = element.offsetTop - 80; // Account for fixed header
        const currentPosition = window.pageYOffset;
        const distance = Math.abs(offsetTop - currentPosition);

        // Use different scroll behavior based on distance
        if (distance < 100) {
          // Small distance, instant scroll
          element.scrollIntoView({
            behavior: "auto",
            block: "start",
            inline: "nearest",
          });
        } else {
          // Larger distance, smooth scroll
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        }
      }, 100);
    }
  } catch (error) {
    console.warn("Scroll error:", error);
    // Fallback for older browsers
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
    }
  }
};

// Header Component
interface HeaderProps {
  isArabic: boolean;
  toggleLanguage: () => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Header: FC<HeaderProps> = ({
  isArabic,
  toggleLanguage,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 modern-header ${
        isScrolled ? "scrolled" : ""
      }`}
      style={{
        paddingTop: "env(safe-area-inset-top)",
        zIndex: 9999,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-20 min-h-[80px]">
          <a
            href="https://wa.me/201207039410"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-3 py-2 group logo-container relative"
          >
            <div className="relative">
              <svg
                width="55"
                height="60"
                viewBox="0 0 226 314"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2311_2)">
                  <path
                    d="M222.67 242.4C222.12 242.34 217.25 235.37 215.69 233.82C202.05 220.28 177.14 219.92 159.86 225.41C149.37 228.74 140.73 233.2 136.92 244.19C147.26 244.32 158.57 241.07 168.89 241.88C170.36 242 176.59 243.02 176.49 244.82C176.47 245.16 172.12 245.53 169.99 246.96C160.84 253.09 160.13 266.77 156.21 276.38C147.17 298.52 136.12 302.03 113.78 302.57C111.49 302.63 96.8599 302.97 96.2899 302.3C95.4699 301.33 105.6 282.56 106.87 279.27C110.3 270.4 113.17 259.84 114.94 250.53C112.4 253.15 108.03 251.89 105.92 254.92C100.98 280.78 88.8799 319.26 55.4199 313.23C59.6299 308.26 64.4799 304.38 68.5899 299.24C73.7799 292.74 77.8799 284.83 81.2199 277.26L86.1799 261.54C83.6099 263.47 74.7199 266.14 73.2599 268.07C71.3199 270.63 70.6899 280.54 68.3299 284.18C63.4899 291.67 57.0699 289.94 49.8599 291.84C41.5899 294.01 32.5299 298.36 24.0199 299.07C18.3099 299.55 10.4399 297.61 4.65991 296.77C6.55991 295.07 8.87991 295.84 11.1599 294.52C18.3399 290.36 22.3599 275.68 24.8699 267.7C25.9099 264.39 26.1099 259.75 27.2999 256.28C36.5199 233.8 62.3199 241.46 81.3999 240.56C79.2899 249.02 75.2199 257.36 74.8199 266.12C77.7099 263.09 85.0099 261.91 87.0099 258.76C88.2399 252.27 90.6799 244.71 90.7499 238.21C90.7699 236.8 88.8999 235.79 91.1799 235.06C93.6999 234.26 103.82 234.26 107.17 234.22C108.61 234.2 112.61 232.4 111.05 235.63C108.82 240.26 108.06 247.06 107.23 252.17C109.07 250.29 114.82 250.96 116.07 249.41C116.73 248.59 116.56 246.56 117.24 245.34C121.22 238.21 125.47 233.69 132.33 229.06C125.11 228.24 117.27 230.38 109.99 231.07C87.1799 233.24 48.0499 236.21 29.2499 221.53C19.1099 213.61 13.8199 203.83 10.0299 191.77C9.60991 190.42 8.14991 187.26 9.35991 186.28C29.9799 222.47 73.5699 216.94 108.63 213.22C141.34 209.75 186.72 195.54 212.78 222.49C215.14 224.93 224.08 235.67 225.05 238.07C225.77 239.86 223.68 242.51 222.68 242.4H222.67ZM119.18 295.24C128.23 297.31 131.67 286.59 134.35 279.8C136.47 274.43 137.36 267.96 139.28 262.82C141.43 257.06 144.77 251.66 147.54 246.21C144.73 245.69 138.4 246.1 136.73 248.29C131.14 263.96 127.48 280.74 119.17 295.25L119.18 295.24ZM33.5999 291.63C36.5599 292.91 47.6599 288.15 48.8899 286.28C49.8699 281.26 61.2099 247.4 59.9399 245.71C59.1699 244.68 56.6699 246.16 55.6599 246.83C40.7299 256.79 48.3699 280.95 33.5999 291.62V291.63Z"
                    fill="#113352"
                    className="dark:fill-gray-300"
                  />
                  <path
                    d="M7.81982 252.68C13.8098 250.4 10.4198 237.81 11.9098 235.99C12.7098 235.01 25.4498 233.78 26.1498 234.3C28.1998 235.81 26.7898 247.54 24.3498 249.97C21.3798 252.93 11.8498 253.85 7.81982 252.68Z"
                    fill="#1B98C3"
                    className="dark:fill-blue-400"
                  />
                  <path
                    d="M19.3199 255.58C13.3299 257.86 16.7199 270.45 15.2299 272.27C14.4299 273.25 1.68989 274.48 0.989891 273.96C-1.06011 272.45 0.349891 260.72 2.78989 258.29C5.75989 255.33 15.2899 254.41 19.3199 255.58Z"
                    fill="#1B98C3"
                    className="dark:fill-blue-400"
                  />
                  <path
                    d="M183.28 258.91L186.13 252.14C187.14 249.94 185.52 240.72 186.74 239.78C187.34 239.32 201.32 238.25 201.77 238.85C202.12 239.31 201.84 249.22 201.41 250.49C198.56 259 189.51 256.08 183.28 258.91Z"
                    fill="#1B98C3"
                    className="dark:fill-blue-400"
                  />
                  <path
                    d="M18.0701 94.52C18.0701 42.32 60.3901 0 112.59 0C164.79 0 207.11 42.32 207.11 94.52C207.11 124.4 193.24 151.04 171.59 168.37C188.53 152.57 199.13 130.05 199.13 105.06C199.13 57.26 160.38 18.52 112.59 18.52C64.8001 18.52 26.0501 57.26 26.0501 105.06C26.0501 130.05 36.6501 152.57 53.5901 168.37C31.9401 151.05 18.0701 124.41 18.0701 94.52Z"
                    fill="#113352"
                    className="dark:fill-gray-300"
                  />
                  <path
                    d="M84.82 211.68V202.96C84.82 201.56 85.96 200.43 87.35 200.43H92.97V191.42L64.43 162.93C62.32 160.83 61.14 157.98 61.14 155V144.77L59.97 144.42C53.08 142.36 48.63 135.8 49.37 128.44C50.06 121.6 55.57 115.98 62.39 115.12C71.53 113.98 79.34 121.11 79.34 130.03C79.34 136.72 75.05 142.5 68.67 144.42L67.5 144.77V153.76C67.5 155.84 68.33 157.84 69.8 159.31L99.33 188.78V200.43H109.4V138.71C109.4 136.59 108.56 134.57 107.06 133.07L92.29 118.32V60.96L91.12 60.61C84.23 58.55 79.78 51.98 80.52 44.62C81.21 37.78 86.73 32.16 93.55 31.31C102.69 30.18 110.49 37.3 110.49 46.22C110.49 52.91 106.2 58.69 99.82 60.61L98.65 60.96V115.68L113.32 130.32C114.89 131.88 115.77 134 115.77 136.22V167.74L126.51 157.02V102.3L125.34 101.95C118.45 99.88 114.01 93.32 114.75 85.96C115.44 79.12 120.96 73.5 127.78 72.66C136.91 71.53 144.72 78.65 144.72 87.57C144.72 94.27 140.43 100.05 134.05 101.96L132.88 102.31V159.67L115.77 176.75V200.45H125.84V188.8L157.67 157.03V144.79L156.5 144.44C149.61 142.38 145.17 135.81 145.91 128.45C146.6 121.61 152.12 115.99 158.94 115.14C168.08 114 175.88 121.13 175.88 130.05C175.88 136.74 171.59 142.53 165.2 144.44L164.03 144.79V159.67L132.2 191.44V200.45H137.14C138.91 200.45 140.35 201.89 140.35 203.66V206.71C121.42 209.21 102.32 211.17 84.8 211.7L84.82 211.68ZM67.02 120.46C59.48 118.46 52.75 125.18 54.76 132.72C55.64 136.03 58.32 138.71 61.63 139.59C69.17 141.59 75.89 134.87 73.89 127.33C73.01 124.02 70.33 121.34 67.02 120.46ZM132.42 77.99C124.87 75.98 118.14 82.71 120.15 90.26C121.03 93.57 123.71 96.25 127.02 97.12C134.56 99.12 141.28 92.4 139.28 84.86C138.4 81.55 135.73 78.87 132.42 77.99Z"
                    fill="#1B98C3"
                    className="dark:fill-blue-400"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2311_2">
                    <rect width="225.18" height="313.86" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold modern-logo tracking-tight">
                Fikra Software
              </span>
              <span className="logo-subtitle arabic">حلول برمجية ذكية</span>
            </div>
            <div className="logo-whatsapp-tooltip arabic">
              تواصل معنا عبر واتساب
            </div>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  scrollToSection(link.id);
                }}
                className={`modern-nav-link py-2 px-3 rounded-lg touch-manipulation ${
                  isArabic ? "arabic" : ""
                }`}
                style={{
                  touchAction: "manipulation",
                  cursor: "pointer",
                }}
              >
                {isArabic ? link.ar : link.en}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="secondary-button !px-4 !py-2 text-sm font-semibold min-w-[50px] relative overflow-hidden group"
            >
              <span className="relative z-10 transition-all duration-300">
                {isArabic ? "EN" : "ع"}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </button>
            <ThemeToggle />
          </div>

          <div className="md:hidden">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
              className="modern-menu-button p-2 touch-manipulation rounded-lg"
              style={{
                touchAction: "manipulation",
                minHeight: "44px",
                minWidth: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden modern-mobile-menu"
            style={{ zIndex: 9999 }}
          >
            <nav className="flex flex-col items-center space-y-4 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    scrollToSection(link.id);
                    setIsMenuOpen(false);
                  }}
                  className={`modern-nav-link text-lg font-medium block w-full text-center py-3 px-4 rounded-lg touch-manipulation transition-all duration-300 hover:bg-primary/5 ${
                    isArabic ? "arabic" : ""
                  }`}
                >
                  {isArabic ? link.ar : link.en}
                </a>
              ))}
              <div className="flex items-center space-x-4 pt-4">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleLanguage();
                  }}
                  className="secondary-button !px-4 !py-2 touch-manipulation"
                  style={{
                    touchAction: "manipulation",
                    minHeight: "44px",
                  }}
                >
                  {isArabic ? "EN" : "ع"}
                </button>
                <ThemeToggle />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const App: FC = () => {
  const [isArabic, setIsArabic] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();

  const toggleLanguage = () => setIsArabic(!isArabic);

  // Close menu when clicking outside on mobile
  useEffect(() => {
    const handleOutsideClick = (event: Event) => {
      const target = event.target as Element;
      if (isMenuOpen && !target.closest("header")) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleOutsideClick);
      document.addEventListener("touchstart", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [isMenuOpen]);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    toast.promise(
      emailjs.sendForm(
        "service_l6ne5yu",
        "template_bb9xax6",
        form,
        "81d8TyXC4XBXjjcIZ"
      ),
      {
        pending: isArabic ? "جاري إرسال الرسالة..." : "Sending message...",
        success: isArabic
          ? "تم التواصل بنجاح! سنرد عليك قريباً."
          : "Message sent! We will reply soon.",
        error: isArabic
          ? "فشل إرسال الرسالة. حاول مرة أخرى."
          : "Failed to send. Please try again.",
      }
    );
    form.reset();
  };

  return (
    <div
      className={`${isArabic ? "arabic" : ""} bg-background text-foreground`}
    >
      <Header
        isArabic={isArabic}
        toggleLanguage={toggleLanguage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main>
        <section
          id="hero"
          className="section-padding pt-32 sm:pt-28 md:pt-24 min-h-screen flex items-center bg-secondary/30"
          style={{ paddingTop: "calc(env(safe-area-inset-top) + 8rem)" }}
        >
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animationType="fadeInLeft">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                {isArabic ? "حلول برمجية ذكية" : "Smart Software Solutions"}
                <span className="block gradient-text mt-2">
                  {isArabic
                    ? "مدعومة بأحدث التقنيات"
                    : "Powered by Latest Technologies"}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 my-8">
                {isArabic
                  ? "في فكرة، نستخدم الذكاء الاصطناعي والتقنيات المتطورة لتطوير حلول برمجية مبتكرة تحول أفكارك إلى واقع رقمي متميز يخدم أهدافك المستقبلية."
                  : "At Fikra, we use artificial intelligence and advanced technologies to develop innovative software solutions that transform your ideas into outstanding digital reality serving your future goals."}
              </p>
              <div className="flex gap-4">
                <a
                  href="https://wa.me/201207039410"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-button"
                >
                  {isArabic ? "تواصل معنا" : "Contact Us"}
                </a>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("services");
                  }}
                  className="secondary-button"
                >
                  {isArabic ? "اكتشف خدماتنا" : "Explore Services"}
                </a>
              </div>
            </AnimatedSection>
            <AnimatedSection
              animationType="fadeInRight"
              className="flex justify-center"
            >
              <LazyImage
                src={heroIllustration}
                alt="AI Technology Illustration"
                className="w-full max-w-lg"
              />
            </AnimatedSection>
          </div>
        </section>

        <section id="services" className="section-padding">
          <div className="max-w-7xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                {isArabic ? "خدماتنا الاحترافية" : "Our Professional Services"}
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto mb-12">
                {isArabic
                  ? "نقدم مجموعة متكاملة من الخدمات لتلبية احتياجات أعمالك الرقمية."
                  : "We offer an integrated set of services to meet your digital business needs."}
              </p>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <AnimatedSection
                  key={index}
                  delay={index * 0.1}
                  animationType="scale"
                >
                  <div className="p-8 bg-card rounded-xl border border-border h-full text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      {isArabic ? service.title.ar : service.title.en}
                    </h3>
                    <p className="text-foreground/70">
                      {isArabic
                        ? service.description.ar
                        : service.description.en}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="section-padding bg-gradient-to-b from-background to-secondary/10"
        >
          <div className="max-w-7xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 gradient-text">
                {isArabic ? "مشاريعنا المميزة" : "Our Featured Projects"}
              </h2>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-16">
                {isArabic
                  ? "نفخر بما حققناه من نجاحات مع عملائنا في مختلف المجالات التقنية والحلول المبتكرة التي قدمناها."
                  : "We take pride in our achievements with clients across various technical fields and the innovative solutions we have delivered."}
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => {
                // تحديد الأيقونة المناسبة لكل مشروع
                const getProjectIcon = (projectTitle: string) => {
                  if (
                    projectTitle.includes("Learning") ||
                    projectTitle.includes("التعليم")
                  ) {
                    return BookOpen;
                  } else if (
                    projectTitle.includes("Corporate") ||
                    projectTitle.includes("المؤسسات")
                  ) {
                    return Laptop;
                  } else if (
                    projectTitle.includes("Sales") ||
                    projectTitle.includes("المبيعات")
                  ) {
                    return Target;
                  }
                  return Code2;
                };

                const ProjectIcon = getProjectIcon(project.title.en);

                return (
                  <AnimatedSection
                    key={index}
                    delay={index * 0.15}
                    animationType="fadeInUp"
                  >
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl border border-border/50 p-8 h-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group-hover:border-primary/30">
                        {/* أيقونة المشروع */}
                        <div className="relative mb-6">
                          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                              <ProjectIcon className="w-8 h-8 text-white" />
                            </div>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                        </div>

                        {/* محتوى المشروع */}
                        <div className="space-y-4">
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                            {isArabic ? project.title.ar : project.title.en}
                          </h3>

                          <p className="text-foreground/70 text-sm leading-relaxed min-h-[3rem]">
                            {isArabic
                              ? project.description.ar
                              : project.description.en}
                          </p>

                          {/* شريط فاصل أنيق */}
                          <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto opacity-50 group-hover:opacity-100 group-hover:w-16 transition-all duration-300"></div>

                          {/* تاغز التقنيات */}
                          <div className="flex flex-wrap justify-center gap-2 pt-2">
                            {project.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-3 py-1.5 bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-xs rounded-full font-medium border border-primary/20 hover:border-primary/40 transition-colors duration-300"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* زخرفة الزاوية */}
                        <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-primary/20 group-hover:border-primary/60 transition-colors duration-300"></div>
                        <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-accent/20 group-hover:border-accent/60 transition-colors duration-300"></div>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        <section id="achievements" className="section-padding bg-secondary/30">
          <div className="max-w-7xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-12">
                {isArabic
                  ? "بالأرقام.. قصة نجاحنا"
                  : "By The Numbers.. Our Success Story"}
              </h2>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((item, index) => (
                <AnimatedSection
                  key={index}
                  delay={index * 0.1}
                  animationType="fadeInUp"
                >
                  <div className="p-8 bg-card rounded-xl border border-border">
                    <item.icon className="w-10 h-10 text-accent mx-auto mb-4" />
                    <h3 className="text-4xl font-extrabold gradient-text">
                      <CountUp end={item.value} suffix={item.suffix} />
                    </h3>
                    <p className="text-lg font-medium text-foreground/80 mt-2">
                      {isArabic ? item.title.ar : item.title.en}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-padding">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection
              animationType="fadeInLeft"
              className="flex justify-center"
            >
              <LazyImage
                src={aboutImage}
                alt="About Fikra"
                className="w-full max-w-lg rounded-xl shadow-lg"
              />
            </AnimatedSection>
            <AnimatedSection animationType="fadeInRight">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                {isArabic ? "عن فكرة للبرمجيات" : "About Fikra Software"}
              </h2>
              <p className="text-lg text-foreground/80 mb-6">
                {isArabic
                  ? "نحن فريق من المطورين والمصممين الشغوفين بالتقنية، نهدف إلى تقديم حلول برمجية مبتكرة تساهم في نجاح شركائنا. نؤمن بقوة الأفكار ونسعى لتحويلها إلى منتجات رقمية استثنائية."
                  : "We are a team of developers and designers passionate about technology, aiming to provide innovative software solutions that contribute to the success of our partners. We believe in the power of ideas and strive to turn them into exceptional digital products."}
              </p>
              <a
                href="https://wa.me/201207039410"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button"
              >
                {isArabic ? "تواصل معنا" : "Contact Us"}
              </a>
            </AnimatedSection>
          </div>
        </section>

        {/* CEO Section */}
        <section
          id="ceo"
          className="section-padding bg-gradient-to-br from-primary/5 to-secondary/10"
        >
          <div className="max-w-7xl mx-auto">
            <AnimatedSection
              animationType="fadeInUp"
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 gradient-text">
                {isArabic ? "المؤسس والرئيس التنفيذي" : "Founder & CEO"}
              </h2>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                {isArabic
                  ? "تعرف على الشخص الذي يقود رؤية فكرة للبرمجيات نحو التميز والإبداع"
                  : "Meet the person who leads Fikra Software's vision towards excellence and innovation"}
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection
                animationType="fadeInLeft"
                className="flex justify-center"
              >
                <div className="relative">
                  <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                    <LazyImage
                      src={ceoImage}
                      alt={
                        isArabic ? "المؤسس والرئيس التنفيذي" : "Founder & CEO"
                      }
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-accent/20 rounded-full blur-lg"></div>
                </div>
              </AnimatedSection>

              <AnimatedSection animationType="fadeInRight">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                      {isArabic ? "محمد العربي" : "Mohamed Arabi"}
                    </h3>
                    <p className="text-primary font-semibold text-lg">
                      {isArabic ? "المؤسس والرئيس التنفيذي" : "Founder & CEO"}
                    </p>
                  </div>

                  <div className="space-y-4 text-foreground/80">
                    <p className="text-lg leading-relaxed">
                      {isArabic
                        ? "مطور ورائد أعمال شغوف بالتكنولوجيا والابتكار. أسست فكرة للبرمجيات برؤية واضحة لتقديم حلول تقنية مبتكرة تساهم في نمو وتطوير الأعمال."
                        : "A passionate developer and entrepreneur driven by technology and innovation. I founded Fikra Software with a clear vision to provide innovative technical solutions that contribute to business growth and development."}
                    </p>
                    <p className="text-lg leading-relaxed">
                      {isArabic
                        ? "مع سنوات من الخبرة في مجال تطوير البرمجيات وإدارة المشاريع التقنية، أقود فريقاً من أفضل المطورين والمصممين لتحقيق رؤيتنا في تقديم أفضل الخدمات التقنية."
                        : "With years of experience in software development and technical project management, I lead a team of the best developers and designers to achieve our vision of providing the finest technical services."}
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 pt-4">
                    <div className="p-4 bg-card/50 rounded-lg border border-border/50">
                      <h4 className="font-semibold text-primary mb-2">
                        {isArabic ? "التخصص" : "Specialization"}
                      </h4>
                      <p className="text-sm text-foreground/70">
                        {isArabic
                          ? "تطوير البرمجيات وإدارة المشاريع"
                          : "Software Development & Project Management"}
                      </p>
                    </div>
                    <div className="p-4 bg-card/50 rounded-lg border border-border/50">
                      <h4 className="font-semibold text-primary mb-2">
                        {isArabic ? "سنوات الخبرة" : "Years of Experience"}
                      </h4>
                      <p className="text-sm text-foreground/70">
                        {isArabic ? "+4 سنوات" : "4+ Years"}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a
                      href="https://wa.me/201002493560"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="primary-button"
                    >
                      {isArabic ? "تواصل معي" : "Contact Me"}
                    </a>
                    <a
                      href="https://www.linkedin.com/in/mohamed-el-araby-b489b4326"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="secondary-button"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section id="partners" className="py-12 bg-secondary/30">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-8 text-foreground/80">
              {isArabic ? "شركاؤنا في النجاح" : "Our Partners in Success"}
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
              {partners.map((partner, index) => (
                <AnimatedSection
                  key={index}
                  delay={index * 0.05}
                  animationType="scale"
                >
                  <LazyImage
                    src={partner.image}
                    alt={partner.name}
                    className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="section-padding bg-gradient-to-br from-secondary/20 to-primary/5"
        >
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 gradient-text">
                {isArabic ? "هل لديك فكرة مشروع؟" : "Have a Project Idea?"}
              </h2>
              <p className="text-lg text-foreground/80 mb-8">
                {isArabic
                  ? "تواصل معنا الآن لنبدأ في تحويلها إلى واقع."
                  : "Contact us now to start turning it into reality."}
              </p>
            </AnimatedSection>
            <AnimatedSection animationType="fadeInUp">
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-xl">
                <form onSubmit={sendEmail} className="space-y-6 text-left">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="user_name"
                      placeholder={isArabic ? "الاسم الكامل" : "Full Name"}
                      required
                      className="w-full p-4 rounded-lg bg-white dark:bg-gray-800 border border-border 
                               text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400
                               focus:ring-2 focus:ring-primary focus:border-primary
                               transition-all duration-300 ease-in-out
                               hover:border-primary/50"
                    />
                    <input
                      type="email"
                      name="user_email"
                      placeholder={
                        isArabic ? "البريد الإلكتروني" : "Email Address"
                      }
                      required
                      className="w-full p-4 rounded-lg bg-white dark:bg-gray-800 border border-border 
                               text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400
                               focus:ring-2 focus:ring-primary focus:border-primary
                               transition-all duration-300 ease-in-out
                               hover:border-primary/50"
                    />
                  </div>
                  <input
                    type="text"
                    name="subject"
                    placeholder={isArabic ? "الموضوع" : "Subject"}
                    required
                    className="w-full p-4 rounded-lg bg-white dark:bg-gray-800 border border-border 
                             text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400
                             focus:ring-2 focus:ring-primary focus:border-primary
                             transition-all duration-300 ease-in-out
                             hover:border-primary/50"
                  />
                  <textarea
                    name="message"
                    placeholder={isArabic ? "رسالتك" : "Your Message"}
                    rows={5}
                    required
                    className="w-full p-4 rounded-lg bg-white dark:bg-gray-800 border border-border 
                             text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400
                             focus:ring-2 focus:ring-primary focus:border-primary
                             transition-all duration-300 ease-in-out
                             hover:border-primary/50 resize-none"
                  ></textarea>
                  <div className="text-center pt-4">
                    <button
                      type="submit"
                      className="primary-button text-lg px-8 py-4"
                    >
                      {isArabic ? "إرسال الرسالة" : "Send Message"}
                    </button>
                  </div>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-secondary/30 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Company Info Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Company License */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <Shield className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">
                  {isArabic ? "الترخيص" : "License"}
                </h3>
              </div>
              <p className="text-foreground/70 text-sm">
                {isArabic
                  ? "شركة مرخصة ومسجلة رسمياً"
                  : "Licensed and officially registered company"}
              </p>
            </div>

            {/* Company Address */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <MapPin className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">
                  {isArabic ? "العنوان" : "Address"}
                </h3>
              </div>
              <p className="text-foreground/70 text-sm arabic">
                {isArabic
                  ? "المنصورة - شارع توريل 18"
                  : "Mansoura - Tawreel Street 18"}
              </p>
            </div>

            {/* WhatsApp Contact */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <Phone className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">
                  {isArabic ? "التواصل" : "Contact"}
                </h3>
              </div>
              <a
                href="https://wa.me/201207039410"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors text-sm inline-flex items-center gap-1"
              >
                <MessageCircle className="w-4 h-4" />
                +201207039410
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-6">
            {socialLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary hover:scale-110 transition-all duration-300"
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center pt-6 border-t border-border/50">
            {/* Logo في الفوتر */}
            <div className="flex justify-center mb-4">
              <svg
                className="mx-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                width="55"
                height="60"
                viewBox="0 0 226 314"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2311_2)">
                  <path
                    d="M222.67 242.4C222.12 242.34 217.25 235.37 215.69 233.82C202.05 220.28 177.14 219.92 159.86 225.41C149.37 228.74 140.73 233.2 136.92 244.19C147.26 244.32 158.57 241.07 168.89 241.88C170.36 242 176.59 243.02 176.49 244.82C176.47 245.16 172.12 245.53 169.99 246.96C160.84 253.09 160.13 266.77 156.21 276.38C147.17 298.52 136.12 302.03 113.78 302.57C111.49 302.63 96.8599 302.97 96.2899 302.3C95.4699 301.33 105.6 282.56 106.87 279.27C110.3 270.4 113.17 259.84 114.94 250.53C112.4 253.15 108.03 251.89 105.92 254.92C100.98 280.78 88.8799 319.26 55.4199 313.23C59.6299 308.26 64.4799 304.38 68.5899 299.24C73.7799 292.74 77.8799 284.83 81.2199 277.26L86.1799 261.54C83.6099 263.47 74.7199 266.14 73.2599 268.07C71.3199 270.63 70.6899 280.54 68.3299 284.18C63.4899 291.67 57.0699 289.94 49.8599 291.84C41.5899 294.01 32.5299 298.36 24.0199 299.07C18.3099 299.55 10.4399 297.61 4.65991 296.77C6.55991 295.07 8.87991 295.84 11.1599 294.52C18.3399 290.36 22.3599 275.68 24.8699 267.7C25.9099 264.39 26.1099 259.75 27.2999 256.28C36.5199 233.8 62.3199 241.46 81.3999 240.56C79.2899 249.02 75.2199 257.36 74.8199 266.12C77.7099 263.09 85.0099 261.91 87.0099 258.76C88.2399 252.27 90.6799 244.71 90.7499 238.21C90.7699 236.8 88.8999 235.79 91.1799 235.06C93.6999 234.26 103.82 234.26 107.17 234.22C108.61 234.2 112.61 232.4 111.05 235.63C108.82 240.26 108.06 247.06 107.23 252.17C109.07 250.29 114.82 250.96 116.07 249.41C116.73 248.59 116.56 246.56 117.24 245.34C121.22 238.21 125.47 233.69 132.33 229.06C125.11 228.24 117.27 230.38 109.99 231.07C87.1799 233.24 48.0499 236.21 29.2499 221.53C19.1099 213.61 13.8199 203.83 10.0299 191.77C9.60991 190.42 8.14991 187.26 9.35991 186.28C29.9799 222.47 73.5699 216.94 108.63 213.22C141.34 209.75 186.72 195.54 212.78 222.49C215.14 224.93 224.08 235.67 225.05 238.07C225.77 239.86 223.68 242.51 222.68 242.4H222.67ZM119.18 295.24C128.23 297.31 131.67 286.59 134.35 279.8C136.47 274.43 137.36 267.96 139.28 262.82C141.43 257.06 144.77 251.66 147.54 246.21C144.73 245.69 138.4 246.1 136.73 248.29C131.14 263.96 127.48 280.74 119.17 295.25L119.18 295.24ZM33.5999 291.63C36.5599 292.91 47.6599 288.15 48.8899 286.28C49.8699 281.26 61.2099 247.4 59.9399 245.71C59.1699 244.68 56.6699 246.16 55.6599 246.83C40.7299 256.79 48.3699 280.95 33.5999 291.62V291.63Z"
                    fill="#113352"
                    className="dark:fill-gray-300"
                  />
                  <path
                    d="M7.81982 252.68C13.8098 250.4 10.4198 237.81 11.9098 235.99C12.7098 235.01 25.4498 233.78 26.1498 234.3C28.1998 235.81 26.7898 247.54 24.3498 249.97C21.3798 252.93 11.8498 253.85 7.81982 252.68Z"
                    fill="#1B98C3"
                    className="dark:fill-blue-400"
                  />
                  <path
                    d="M19.3199 255.58C13.3299 257.86 16.7199 270.45 15.2299 272.27C14.4299 273.25 1.68989 274.48 0.989891 273.96C-1.06011 272.45 0.349891 260.72 2.78989 258.29C5.75989 255.33 15.2899 254.41 19.3199 255.58Z"
                    fill="#1B98C3"
                    className="dark:fill-blue-400"
                  />
                  <path
                    d="M183.28 258.91L186.13 252.14C187.14 249.94 185.52 240.72 186.74 239.78C187.34 239.32 201.32 238.25 201.77 238.85C202.12 239.31 201.84 249.22 201.41 250.49C198.56 259 189.51 256.08 183.28 258.91Z"
                    fill="#1B98C3"
                    className="dark:fill-blue-400"
                  />
                  <path
                    d="M18.0701 94.52C18.0701 42.32 60.3901 0 112.59 0C164.79 0 207.11 42.32 207.11 94.52C207.11 124.4 193.24 151.04 171.59 168.37C188.53 152.57 199.13 130.05 199.13 105.06C199.13 57.26 160.38 18.52 112.59 18.52C64.8001 18.52 26.0501 57.26 26.0501 105.06C26.0501 130.05 36.6501 152.57 53.5901 168.37C31.9401 151.05 18.0701 124.41 18.0701 94.52Z"
                    fill="#113352"
                    className="dark:fill-gray-300"
                  />
                  <path
                    d="M84.82 211.68V202.96C84.82 201.56 85.96 200.43 87.35 200.43H92.97V191.42L64.43 162.93C62.32 160.83 61.14 157.98 61.14 155V144.77L59.97 144.42C53.08 142.36 48.63 135.8 49.37 128.44C50.06 121.6 55.57 115.98 62.39 115.12C71.53 113.98 79.34 121.11 79.34 130.03C79.34 136.72 75.05 142.5 68.67 144.42L67.5 144.77V153.76C67.5 155.84 68.33 157.84 69.8 159.31L99.33 188.78V200.43H109.4V138.71C109.4 136.59 108.56 134.57 107.06 133.07L92.29 118.32V60.96L91.12 60.61C84.23 58.55 79.78 51.98 80.52 44.62C81.21 37.78 86.73 32.16 93.55 31.31C102.69 30.18 110.49 37.3 110.49 46.22C110.49 52.91 106.2 58.69 99.82 60.61L98.65 60.96V115.68L113.32 130.32C114.89 131.88 115.77 134 115.77 136.22V167.74L126.51 157.02V102.3L125.34 101.95C118.45 99.88 114.01 93.32 114.75 85.96C115.44 79.12 120.96 73.5 127.78 72.66C136.91 71.53 144.72 78.65 144.72 87.57C144.72 94.27 140.43 100.05 134.05 101.96L132.88 102.31V159.67L115.77 176.75V200.45H125.84V188.8L157.67 157.03V144.79L156.5 144.44C149.61 142.38 145.17 135.81 145.91 128.45C146.6 121.61 152.12 115.99 158.94 115.14C168.08 114 175.88 121.13 175.88 130.05C175.88 136.74 171.59 142.53 165.2 144.44L164.03 144.79V159.67L132.2 191.44V200.45H137.14C138.91 200.45 140.35 201.89 140.35 203.66V206.71C121.42 209.21 102.32 211.17 84.8 211.7L84.82 211.68ZM67.02 120.46C59.48 118.46 52.75 125.18 54.76 132.72C55.64 136.03 58.32 138.71 61.63 139.59C69.17 141.59 75.89 134.87 73.89 127.33C73.01 124.02 70.33 121.34 67.02 120.46ZM132.42 77.99C124.87 75.98 118.14 82.71 120.15 90.26C121.03 93.57 123.71 96.25 127.02 97.12C134.56 99.12 141.28 92.4 139.28 84.86C138.4 81.55 135.73 78.87 132.42 77.99Z"
                    fill="#1B98C3"
                    className="dark:fill-blue-400"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2311_2">
                    <rect width="225.18" height="313.86" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            {/* معلومات حقوق الطبع */}
            <p className="text-foreground/60 text-sm">
              &copy; {new Date().getFullYear()}{" "}
              {isArabic
                ? "شركة فكرة للبرمجيات. جميع الحقوق محفوظة."
                : "Fikra Software Co. All Rights Reserved."}
            </p>
          </div>
        </div>
      </footer>

      <ScrollToTopButton />
      <WhatsAppButton />

      <ToastContainer
        theme={theme}
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
      />
    </div>
  );
};

const ScrollToTopButton: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.pageYOffset > 300);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 primary-button !p-3 z-50"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// WhatsApp Floating Button Component
const WhatsAppButton: FC = () => {
  const whatsappNumber = "+201207039410";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, "")}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 z-50 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative">
        {/* Animated ring */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></div>

        {/* Main button */}
        <div className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 group-hover:shadow-green-500/25">
          <MessageCircle size={28} className="drop-shadow-sm" />
        </div>

        {/* Tooltip */}
        <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <span className="arabic">تواصل معنا عبر واتساب</span>
          <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-900"></div>
        </div>
      </div>
    </motion.a>
  );
};

const AppWrapper: FC = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default AppWrapper;

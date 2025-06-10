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
  LogIn,
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

// Assets
import logo from "./Images/logo.webp";
import heroIllustration from "./Images/ai-hero.webp";
import aboutImage from "./Images/About.webp";

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
              <img
                className="h-11 sm:h-12 w-auto transition-transform duration-300 group-hover:scale-110"
                src={logo}
                alt="Fikra Software Logo"
              />
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

          {/* Login Button */}
          <div className="flex justify-center mb-6">
            <a
              href="https://fikrasoftware.pythonanywhere.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="login-button"
            >
              <LogIn size={16} />
              <span>{isArabic ? "تسجيل الدخول" : "Login"}</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center pt-6 border-t border-border/50">
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

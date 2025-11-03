'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Script from 'next/script';
import { motion } from 'framer-motion';
import { motion as MotionImage } from "framer-motion";
import * as echarts from 'echarts';
import { useInView } from 'react-intersection-observer';
import { useTheme } from 'next-themes';
import { ThemeToggle } from '@/components/theme-toggle';
import { Instagram, Github, Building, Code2, Mail, Briefcase, GraduationCap, Sparkles, ArrowDown, Zap } from 'lucide-react';

// ====================================================================
// NEW COMPONENT: ExperienceChart
// Extracted and completed to be a functional component
// ====================================================================
const ExperienceChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme(); // ✅ react to theme changes
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 }); // ✅ start animation on scroll

  useEffect(() => {
    if (!inView || !chartRef.current) return;

    const isDark = theme === "dark";
    const chart = echarts.init(chartRef.current, isDark ? "dark" : "light");

    const option = {
      title: {
        text: "My Technical Skills",
        left: "center",
        textStyle: {
          color: isDark ? "#60a5fa" : "#1d4ed8",
          fontSize: 22,
          fontWeight: "bold",
          textShadowColor: isDark ? "rgba(37, 99, 235, 0.5)" : "rgba(59, 130, 246, 0.3)",
          textShadowBlur: 8,
        },
      },
      tooltip: {
        trigger: "axis",
        backgroundColor: isDark ? "rgba(17,24,39,0.95)" : "rgba(255,255,255,0.95)",
        borderColor: isDark ? "#3b82f6" : "#2563eb",
        borderWidth: 1,
        textStyle: { color: isDark ? "#f3f4f6" : "#1e293b" },
      },
      grid: {
        top: 80,
        left: "5%",
        right: "5%",
        bottom: "10%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: [
          "HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind",
          "Node.js", "Express", "MongoDB", "Git", "C++", "TypeScript",
        ],
        axisLabel: {
          color: isDark ? "#d1d5db" : "#475569",
          rotate: 30,
          fontSize: 12,
        },
        axisLine: {
          lineStyle: { color: isDark ? "#374151" : "#94a3b8" },
        },
      },
      yAxis: {
        type: "value",
        axisLabel: { color: isDark ? "#9ca3af" : "#475569" },
        splitLine: {
          lineStyle: { color: isDark ? "rgba(75,85,99,0.2)" : "rgba(203,213,225,0.4)" },
        },
      },
      series: [
        {
          name: "Proficiency (%)",
          data: [90, 85, 80, 75, 90, 85, 87, 80, 70, 85, 60, 70],
          type: "bar",
          barWidth: "60%",
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: isDark ? "#3b82f6" : "#60a5fa" },
              { offset: 0.5, color: isDark ? "#06b6d4" : "#38bdf8" },
              { offset: 1, color: isDark ? "#0ea5e9" : "#0284c7" },
            ]),
            borderRadius: [8, 8, 0, 0],
            shadowColor: isDark ? "rgba(6,182,212,0.5)" : "rgba(14,165,233,0.3)",
            shadowBlur: 15,
            shadowOffsetY: 6,
          },
          label: {
            show: true,
            position: "top",
            color: isDark ? "#e5e7eb" : "#1e293b",
            fontSize: 12,
          },
          animationDuration: 2200,
          animationEasing: "elasticOut",
          animationDelay: (idx: number) => idx * 120,
        },
      ],
      backgroundColor: isDark
        ? new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "rgba(17,24,39,1)" },
            { offset: 1, color: "rgba(30,41,59,1)" },
          ])
        : new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "rgba(255,255,255,1)" },
            { offset: 1, color: "rgba(241,245,249,1)" },
          ]),
    };

    chart.setOption(option);

    const handleResize = () => chart.resize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.dispose();
    };
  }, [inView, theme]); // ✅ re-run when theme changes

  return (
    <div ref={ref} className="w-full h-96">
      <div ref={chartRef} className="w-full h-full" />
    </div>
  );
};

export default function Home() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const skills = [
        'React', 'Next.js', 'TypeScript', 'Tailwind CSS',
        'Node.js', 'JavaScript', 'HTML', 'CSS',
        'Git', 'Responsive Design', 'UI/UX', 'Web Development', 'Mongodb', 'docker'
    ];

    // --- UPDATED PROJECTS ARRAY WITH DIGITAL CLOCK AND LINKS ---
    const projects = [
        {
            title: 'Digital Clock',
            description: 'A simple, minimalist digital clock web application, providing accurate time in a clean interface. Made with Next.js and Tailwind CSS.',
            tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
            link: 'https://digital-clock-87a.vercel.app/',
            image: '/project1.jpg' // put your image here (or a full URL)
        },
        {
            title: 'Cinema Booking System',
            description: 'A web application for booking movie tickets, featuring a user-friendly interface and real-time seat selection. Built with Next.js and Tailwind CSS.',
            tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
            link: 'https://siddiqui-cineplex-cinema.vercel.app/',
            image: '/project2.jpg' // put your image here (or a full URL)
        },
        {
            title: 'Student Entry Management System',
            description: 'A web application for managing student entries, featuring a user-friendly interface and real-time data processing with database. Built with Next.js and Tailwind CSS.',
            tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
            link: 'https://student-entry-front.vercel.app/',
            image: '/project3.jpg' // put your image here (or a full URL)
        },
    ];

    const experience = [
        {
            title: "Web Developer (Internship)",
            company: "White’s Technologies",
            description: "Created responsive websites and handled full-stack tasks.",
            icon: Briefcase,
            color: "cyan",
            year: "2024",
        },
        {
            title: "Freelance Web Developer",
            company: "Independent",
            description: "Designed and built creative websites for clients worldwide.",
            icon: Briefcase,
            color: "blue",
            year: "2023 - Present",
        },
        {
            title: "Bachelor of Science in Computer Science",
            company: "The University of Faisalabad",
            description: "Focused on software development, UI design, and data systems.",
            icon: GraduationCap,
            color: "teal",
            year: "2024 – Present",
        },
    ];
    
interface SocialIcon {
  src: string;
  title: string;
  href: string;
  shadow: string;
}
const icons: SocialIcon[] = [
    {
      src: "/github.jpg",
      href: "https://github.com/abdullah-siddiqii",
      shadow: "hover:shadow-gray-300/50",
      title: "GitHub",
    },
    {
      src: "/instagaram.jpg",
      href: "https://www.instagram.com/abdullah.siddiqii/",
      shadow: "hover:shadow-purple-400/50",
      title: "Instagram",
    },
    {
      src: "/snapchat.jpg",
      href: "https://www.snapchat.com/add/abdullahsidiqii",
      shadow: "hover:shadow-yellow-300/50",
      title: "Snapchat",
    },
    {
      src: "/whatsapp.jpg",
      href: "https://wa.me/923146463269",
      shadow: "hover:shadow-green-400/50",
      title: "WhatsApp",
    },
  ];


    // Create a motion-enabled Next.js Image component
    // This resolves the Framer Motion / Next.js Image conflict in the social link map
    const MotionImage = motion(Image);


    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
            {/* --- NAVIGATION BAR --- */}
            <motion.nav
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    scrolled
                        ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-lg"
                        : "bg-transparent"
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Logo Section */}
                    <motion.div
                        className="flex items-center gap-2"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        <motion.span
                            className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            MAS
                        </motion.span>
                    </motion.div>

                    {/* Nav Links */}
                    <motion.div
                        className="flex items-center gap-6"
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        {[
                            { name: "About", href: "#about" },
                            { name: "Experience", href: "#experience" },
                            { name: "Projects", href: "#projects" },
                            { name: "Contact", href: "#contact" },
                        ].map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.href}
                                className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors hidden sm:block"
                                whileHover={{ y: -2, scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                {link.name}
                            </motion.a>
                        ))}

                        {/* Theme Toggle Button */}
                        <motion.div
                            whileHover={{ rotate: 15, scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            <ThemeToggle />
                        </motion.div>
                    </motion.div>
                </div>
            </motion.nav>
            {/* The Echarts container that was here has been moved to the About section */}

            {/* --- HERO SECTION --- */}
           <section className="relative min-h-screen flex items-center justify-center px-6 pt-20  overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border-blue-200 dark:border-blue-800">
              Web Developer
            </Badge>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, type: "spring" }}
          >
            Hi{" "}
            <motion.span
              className="inline-block origin-[70%_70%]"
              animate={{ rotate: [0, 15, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              👋🏻
            </motion.span>{" "}
            I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
              Muhammad Abdullah Siddiqui
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            BSCS Student at The University of Faisalabad, passionate about
            crafting beautiful and functional web experiences.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transition-all"
              >
                <a href="#projects">View My Work</a>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 hover:border-blue-600 hover:text-blue-600 transition-all"
              >
                <a href="#contact">Get In Touch</a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT IMAGE SIDE ================= */}
        <motion.div
          className="relative w-full flex justify-center"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring", delay: 0.5 }}
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Glowing Gradient Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-20"
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Profile Image */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl ring-4 ring-blue-100 dark:ring-blue-950">
              <Image
                src="/Untitled design (1).png"
                alt="Muhammad Abdullah Siddiqui"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
       
        <ArrowDown className="w-6 h-6 text-slate-400" />
      </motion.div>
    </section>

            {/* ---------------------------------------------------- */}

            {/* --- ABOUT & SKILLS SECTION --- */}
            <section id="about" className="py-24 px-6 bg-white dark:bg-slate-900/50">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <Badge className="mb-4 bg-cyan-100 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800">
                            About Me
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Turning Ideas Into{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                Reality
                            </span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Crafting digital experiences that blend creativity with functionality
                        </p>
                    </motion.div>

                    {/* Experience & Education Cards */}
                    <motion.div
                        className="grid md:grid-cols-2 gap-8 mb-16"
                        initial="hidden"
                        whileInView="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.2 },
                            },
                        }}
                        viewport={{ once: true }}
                    >
                        {/* Experience 1 */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.6 }}
                        >
                            <Card className="p-8 border-2 hover:border-blue-300 dark:hover:border-blue-700 transition-all hover:shadow-xl hover:scale-[1.02] duration-300">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-100 dark:bg-blue-950 rounded-lg">
                                        <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Experience</h3>
                                        <p className="text-slate-600 dark:text-slate-400 font-medium">
                                            Web Developer (Freelance)
                                        </p>
                                        <p className="text-slate-500 dark:text-slate-500">
                                            Creating Beautiful & Functional Websites
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>

                        {/* Experience 2 */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.6 }}
                        >
                            <Card className="p-8 border-2 hover:border-cyan-300 dark:hover:border-cyan-700 transition-all hover:shadow-xl hover:scale-[1.02] duration-300">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-cyan-100 dark:bg-cyan-950 rounded-lg">
                                        <Briefcase className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Web Developer (Internship)</h3>
                                        <p className="text-slate-600 dark:text-slate-400 font-medium">
                                            Full Stack Developer
                                        </p>
                                        <p className="text-slate-500 dark:text-slate-500">
                                            Creating Beautiful & Functional Websites at White's Technologies
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>

                        {/* Education */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.6 }}
                        >
                            <Card className="p-8 border-2 hover:border-cyan-300 dark:hover:border-cyan-700 transition-all hover:shadow-xl hover:scale-[1.02] duration-300">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-cyan-100 dark:bg-cyan-950 rounded-lg">
                                        <Briefcase className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Education</h3>
                                        <p className="text-slate-600 dark:text-slate-400 font-medium">
                                            Bachelor of Science in Computer Science
                                        </p>
                                        <p className="text-slate-500 dark:text-slate-500">
                                            The University of Faisalabad
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    </motion.div>
                    
                    {/* Skills Chart */}
                    <div className="mb-16">
                        <ExperienceChart />
                    </div>

                    {/* Technical Skills */}
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-bold mb-10 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                            Technical Skills
                        </h3>

                        {/* Skills Animation Container */}
                        <motion.div
                            className="flex flex-wrap justify-center gap-4"
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: { staggerChildren: 0.1 },
                                },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, scale: 0.5, y: 30 },
                                        visible: { opacity: 1, scale: 1, y: 0 },
                                    }}
                                    transition={{ duration: 0.4 }}
                                    whileHover={{
                                        scale: 1.2,
                                        boxShadow: "0 0 20px rgba(56,189,248,0.6)",
                                        transition: { type: "spring", stiffness: 200 },
                                    }}
                                    animate={{
                                        y: [0, -5, 0],
                                        transition: {
                                            duration: 3,
                                            repeat: Infinity,
                                            repeatType: "mirror",
                                            delay: index * 0.1,
                                            type: "tween",
                                        },
                                    }}
                                >
                                    <Badge
                                        variant="secondary"
                                        className="px-5 py-2 text-base font-semibold cursor-default select-none bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 border border-blue-200 dark:border-blue-800 shadow-md hover:shadow-lg"
                                    >
                                        {skill}
                                    </Badge>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ---------------------------------------------------- */}

            {/* --- EXPERIENCE / TIMELINE SECTION --- */}
            <section id="experience" className="py-24 px-6">
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    {/* Header */}
                    <div className="text-center mb-16">
                        <Badge className="mb-4 bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border-blue-200 dark:border-blue-800">
                            Work & Education
                        </Badge>

                        <motion.h2
                            className="text-4xl md:text-5xl font-bold mb-4"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            My{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                Journey
                            </span>
                        </motion.h2>

                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            A brief overview of my professional and educational background.
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Animated vertical line */}
                        <motion.div
                            className="absolute left-3 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 hidden sm:block"
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            style={{ originY: 0 }}
                        ></motion.div>

                        {/* Experience items */}
                        <div className="space-y-10">
                            {experience.map((item, index) => {
                                const IconComponent = item.icon;
                                const colorClass =
                                    item.color === "blue"
                                        ? "text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-950 border-blue-400"
                                        : item.color === "cyan"
                                            ? "text-cyan-600 bg-cyan-100 dark:text-cyan-400 dark:bg-cyan-950 border-cyan-400"
                                            : "text-teal-600 bg-teal-100 dark:text-teal-400 dark:bg-teal-950 border-teal-400";

                                return (
                                    <motion.div
                                        key={index}
                                        className="relative flex gap-6 sm:gap-8 sm:pl-12"
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{
                                            delay: index * 0.2,
                                            duration: 0.8,
                                            type: "spring",
                                        }}
                                        viewport={{ once: true }}
                                    >
                                        {/* Dot Icon */}
                                        <motion.div
                                            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center shadow-md ${colorClass}`}
                                            whileHover={{ scale: 1.2, rotate: 10 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        > {/* <--- THIS CLOSING TAG WAS MISSING/INCOMPLETE */}
                                            <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                                            {/* Line marker for small screens */}
                                            <div className="absolute top-0 left-[-22px] w-0.5 h-full bg-slate-200 dark:bg-slate-800 sm:hidden"></div>
                                        </motion.div>

                                        {/* Content Card */}
                                        <Card className="p-5 flex-1 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                            <div className="flex justify-between items-start">
                                                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                                                    {item.title}
                                                </h3>
                                                <span className="text-sm font-medium text-blue-600 dark:text-blue-400 whitespace-nowrap">
                                                    {item.year}
                                                </span>
                                            </div>
                                            <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                                                {item.company}
                                            </p>
                                            <p className="text-slate-500 dark:text-slate-500">
                                                {item.description}
                                            </p>
                                        </Card>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* ---------------------------------------------------- */}

            {/* --- PROJECTS SECTION --- */}
            <section id="projects" className="py-24 px-6 bg-white dark:bg-slate-900/50">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <Badge className="mb-4 bg-cyan-100 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800">
                            Portfolio
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Recent{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                Projects
                            </span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Showcasing my best work in web development.
                        </p>
                    </motion.div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-3 gap-10">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block"
                                    >
                                        <div className="relative h-48 w-full overflow-hidden">
                                            <Image
                                                src={project.image || "/placeholder.jpg"}
                                                alt={project.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <Button className="flex gap-2" variant="secondary">
                                                    <Zap className="w-4 h-4" /> View Live
                                                </Button>
                                            </div>
                                        </div>
                                    </a>

                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech, i) => (
                                                <Badge
                                                    key={i}
                                                    variant="outline"
                                                    className="text-xs bg-slate-50 dark:bg-slate-800"
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------------------------------------------- */}

            {/* --- CONTACT SECTION --- */}
        <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border-blue-200 dark:border-blue-800">
            Contact
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let’s{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>

          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12">
            I’m currently open to new opportunities. Whether you have a project
            in mind or just want to chat, feel free to reach out!
          </p>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          className="flex justify-center flex-wrap gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Email */}
          <motion.a
            href="mailto:siddiqiimabdullah@outlook.com"
            className="flex items-center gap-3 p-5 border rounded-2xl shadow-sm hover:border-blue-500 hover:shadow-xl transition-all bg-white/50 dark:bg-slate-900/40 backdrop-blur"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <div className="text-left">
              <p className="font-semibold">Email Me</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                siddiqiimabdullah@outlook.com
              </p>
            </div>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="www.linkedin.com/in/muhammad-abdullah-siddiqui-719392397"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-5 border rounded-2xl shadow-sm hover:border-cyan-500 hover:shadow-xl transition-all bg-white/50 dark:bg-slate-900/40 backdrop-blur"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Briefcase className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
            <div className="text-left">
              <p className="font-semibold">LinkedIn</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Let’s connect professionally
              </p>
            </div>
          </motion.a>
        </motion.div>

        {/* Social Icons */}
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-16">
          Contact on social media
        </p>

       <motion.div
  className="flex gap-10 pt-6 justify-center mt-10"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  viewport={{ once: true }}
>
  {icons.map((icon: SocialIcon, idx: number) => (
    <motion.a
      key={idx}
      href={icon.href}
      target="_blank"
      rel="noopener noreferrer"
      // 🎵 Floating idle animation
      animate={{
        y: [0, -4, 0],
        rotate: [0, 1, -1, 0],
      }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
        delay: idx * 0.2,
      }}
      whileHover={{
        scale: 1.2,
        rotate: 0,
        y: -6,
      }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        className={`relative rounded-full border-2 shadow-lg p-1.5 bg-white/70 dark:bg-slate-800/60 backdrop-blur-md transition-all ${icon.shadow}`}
        whileHover={{
          boxShadow:
            "0 0 20px rgba(59,130,246,0.5), 0 0 40px rgba(6,182,212,0.3)",
        }}
      >
        <Image
          src={icon.src}
          alt={`${icon.title} icon`}
          width={60}
          height={60}
          className="rounded-full transition-transform duration-500"
        />

        {/* 🌟 Light Glow Animation */}
        <motion.div
          className="absolute inset-0 rounded-full bg-blue-400/30 blur-xl"
          animate={{ opacity: [0.1, 0.4, 0.1] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: idx * 0.3,
          }}
        />
      </motion.div>
    </motion.a>
  ))}
</motion.div>

      </div>
    </section>

            {/* --- FOOTER --- */}
            <footer className="py-8 border-t border-slate-200 dark:border-slate-800/50 text-center text-slate-500 dark:text-slate-500 text-sm">
                <div className="max-w-7xl mx-auto px-6">
                    <p>
                        © {new Date().getFullYear()} Muhammad Abdullah Siddiqui. All rights reserved.
                    </p>
                
                </div>
            </footer>
            <Script
  id="tawk-to"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
      (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/68fb8cfdcfefaf195179e461/1j8b9tg4g';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
      })();
    `,
  }}
/>
        </main>
    );
} 
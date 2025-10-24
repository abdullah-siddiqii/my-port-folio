'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Script from 'next/script';

import { ThemeToggle } from '@/components/theme-toggle';
import { Instagram, Github,Building, Code2, Mail, Briefcase, GraduationCap, Sparkles, ArrowDown, Zap } from 'lucide-react';


export default function Home() {
  // <!--Start of Tawk.to Script-->
// <!--End of Tawk.to Script-->
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
    'Git', 'Responsive Design', 'UI/UX', 'Web Development','Mongodb','docker'
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
     tech: ['Next.js', 'TypeScript', 'Tailwind CSS','Node.js', 'Express', 'MongoDB'],
     link: 'https://siddiqui-cineplex-cinema.vercel.app/',
     image: '/project2.jpg' // put your image here (or a full URL)
    },
    {
      title: 'Student Entry Management System',
      description: 'A web application for managing student entries, featuring a user-friendly interface and real-time data processing with database. Built with Next.js and Tailwind CSS.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS','Node.js', 'Express', 'MongoDB'],
      link: 'https://student-entry-front.vercel.app/',
      image: '/project3.jpg' // put your image here (or a full URL)
    },
    
    
  ];

  const experience = [
    {
      title: 'Freelance Web Developer',
      company: 'Self-Employed',
      duration: '2023 - Present',
      description: 'Developing and deploying custom websites and web applications for small businesses and individuals, focusing on modern stacks like Next.js and Tailwind CSS.',
      icon: Briefcase,
      color: 'blue'
    },
    {
      title: 'BSCS Student',
      company: 'The University of Faisalabad',
      duration: '2024 - Present',
      description: 'Currently pursuing a Bachelor of Science in Computer Science, mastering core concepts in algorithms, data structures, and software engineering principles.',
      icon: GraduationCap,
      color: 'cyan'
    },
    {
      title: 'Frontend Developer Intern',
      company: 'White\'s Technologies',
      duration: '2024 - Present',
      description: 'Actively contributing to various open-source projects, gaining experience in collaborative development, code review, and maintenance.',
      icon: Building,
      color: 'teal'
    }
  ];
  // ----------------------------------------
  
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              MAS
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#about" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors hidden sm:block">About</a>
            <a href="#experience" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors hidden sm:block">Experience</a>
            <a href="#projects" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors hidden sm:block">Projects</a>
            <a href="#contact" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors hidden sm:block">Contact</a>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
            <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border-blue-200 dark:border-blue-800">
              Web Developer
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi👋🏻 I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                Muhammad Abdullah Siddiqui
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
              BSCS Student at The University of Faisalabad, passionate about crafting beautiful and functional web experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transition-all">
                <a href="#projects">View My Work</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 hover:border-blue-600 hover:text-blue-600 transition-all">
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
            <div className="flex gap-6 pt-4">
             
                          <a 
href="https://github.com/abdullah-siddiqii"
  target="_blank" 
  rel="noopener noreferrer"
>
  <img 
    src="/github.jpg" 
    alt="github" 
    width={40} 
    title='GitHub'
    height={40} 
        className="rounded-full border-2 border-gray-200 shadow-md hover:scale-110 transition-transform duration-300"
  />
</a>
                 <a 
 href="https://www.instagram.com/abdullah.siddiqii/"
  target="_blank" 
  rel="noopener noreferrer"
>
  <img 
    src="/instagaram.jpg" 
    alt="instagaram" 
    title='Instagram'
    width={40} 
    height={40} 
        className="rounded-full border-2 border-purple-500 shadow-md hover:scale-110 transition-transform duration-300"
  />
</a>

     <a 
  href="https://www.snapchat.com/add/abdullahsidiqii" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <img 
    src="/snapchat.jpg" 
    alt="Snapchat" 
    width={40} 
    title='SnapChat'
    height={40}
        className="rounded-full border-2 border-gray-200 shadow-md hover:scale-110 transition-transform duration-300" 
  />
</a>
<a 
  href="https://wa.me/923146463369" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <img 
    src="/whatsapp.jpg" 
    title='WhatsApp'
    alt="WhatsApp" 
    width={40} 
    height={40} 
    className="rounded-full border-2 border-green-500 shadow-md hover:scale-110 transition-transform duration-300"
  />
</a>


         

            </div>
          </div>
          <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-200">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
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
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-slate-400" />
        </div>
      </section>

      {/* ---------------------------------------------------- */}

      {/* --- ABOUT & SKILLS SECTION --- */}
      <section id="about" className="py-24 px-6 bg-white dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-cyan-100 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800">
              About Me
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Turning Ideas Into{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Reality
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Crafting digital experiences that blend creativity with functionality
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 border-2 hover:border-blue-300 dark:hover:border-blue-700 transition-all hover:shadow-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-950 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Education</h3>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">Bachelor of Science in Computer Science</p>
                  <p className="text-slate-500 dark:text-slate-500">The University of Faisalabad</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2 hover:border-cyan-300 dark:hover:border-cyan-700 transition-all hover:shadow-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-100 dark:bg-cyan-950 rounded-lg">
                  <Briefcase className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Experience</h3>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">Web Developer (Freelance)</p>
                  <p className="text-slate-500 dark:text-slate-500">Creating Beautiful & Functional Websites</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 border-2 hover:border-cyan-300 dark:hover:border-cyan-700 transition-all hover:shadow-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-100 dark:bg-cyan-950 rounded-lg">
                  <Briefcase className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Web Developer (Internship)</h3>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">Full Stack Developer </p>
                  <p className="text-slate-500 dark:text-slate-500">Creating Beautiful & Functional Websites.At White's Technologies</p>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Technical Skills</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium hover:scale-110 transition-transform cursor-default bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 border border-blue-200 dark:border-blue-800"
                  >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* ---------------------------------------------------- */}

      {/* --- EXPERIENCE TIMELINE SECTION --- */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border-blue-200 dark:border-blue-800">
              Work & Education
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A brief overview of my professional and educational background.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Vertical Line */}
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 hidden sm:block"></div>

            {experience.map((item, index) => {
              const IconComponent = item.icon;
              const colorClass = item.color === 'blue' ? 'text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-950 border-blue-400' :
              item.color === 'cyan' ? 'text-cyan-600 bg-cyan-100 dark:text-cyan-400 dark:bg-cyan-950 border-cyan-400' :
              'text-teal-600 bg-teal-100 dark:text-teal-400 dark:bg-teal-950 border-teal-400';
              
              return (
                <div key={index} className="mb-10 flex items-start group relative">
                  {/* Circle Icon */}
                  <div className="flex-shrink-0 relative z-10 sm:mr-6 mr-3">
                    <div className={`w-6 h-6 rounded-full border-2   ${colorClass} flex items-center justify-center transition-all group-hover:scale-125`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>
                  
                  {/* Content Card */}
                  <Card className="p-6 flex-1 border-2 group-hover:border-blue-300 dark:group-hover:border-blue-700 transition-all group-hover:shadow-xl">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{item.title}</h3>
                      <span className="text-sm font-medium text-slate-500 dark:text-slate-400 whitespace-nowrap">{item.duration}</span>
                    </div>
                    <p className="font-medium text-slate-600 dark:text-slate-300 mb-2">{item.company}</p>
                    <p className="text-slate-700 dark:text-slate-400">{item.description}</p>
                  </Card>
                </div>
              );
            })}
            
            {/* Final Icon (Optional: for a sense of completion) */}
            <div className="flex-shrink-0 relative z-10 left-3 mt-1 sm:left-3 sm:mt-0">
                <div className={`w-6 h-6 rounded-full border-2 text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-950 border-yellow-400 flex items-center justify-center`}>
                    <Zap className="w-4 h-4" />
                </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* ---------------------------------------------------- */}

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-24 px-6 bg-white dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-teal-100 text-teal-700 dark:bg-teal-950 dark:text-teal-300 border-teal-200 dark:border-teal-800">
              Portfolio
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A showcase of my work in web development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              // --- UPDATED: WRAP CARD IN ANCHOR TAG FOR CLICKABLE LINK ---
              <a 
              key={index}
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
              >
  <Card
    className="group p-6 border-2 hover:border-blue-300 dark:hover:border-blue-700 transition-all hover:shadow-2xl hover:-translate-y-2 cursor-pointer h-full"
  >
    {/* Project Image */}
    <div className="h-48 rounded-lg mb-6 overflow-hidden">
      <img
        src={project.image}
        alt={`${project.title} preview`}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
    </div>

    {/* Title */}
    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
      {project.title}
    </h3>

    {/* Description */}
    <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
      {project.description}
    </p>

    {/* Tech Stack */}
    <div className="flex flex-wrap gap-2">
      {project.tech.map((tech, i) => (
        <Badge key={i} variant="outline" className="text-xs">
          {tech}
        </Badge>
      ))}
    </div>
  </Card>
</a>

              // -------------------------------------------------------------
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border-blue-200 dark:border-blue-800">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Work{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
            Have a project in mind? I'm always open to discussing new opportunities and creative ideas.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transition-all">
              <a href="mailto:siddiqiimabdullah@outlook.com" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Send Email
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 hover:border-blue-600 hover:text-blue-600 transition-all">
              <a href="https://github.com/abdullah-siddiqii" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github className="w-5 h-5" />
                View GitHub
              </a>
            </Button>
          </div>

          <div className="flex gap-6 justify-center">
          
                          <a 
href="https://github.com/abdullah-siddiqii"
  target="_blank" 
  rel="noopener noreferrer"
>
  <img 
    src="/github.jpg" 
    alt="github" 
    width={40} 
    height={40} 
        className="rounded-full border-2 border-gray-200 shadow-md hover:scale-110 transition-transform duration-300"
        title='GitHUb'
  />
</a>
                 <a 
 href="https://www.instagram.com/abdullah.siddiqii/"
  target="_blank" 
  rel="noopener noreferrer"
>
  <img 
    src="/instagaram.jpg" 
    alt="instagaram" 
    width={40} 
    title='Instagaram'
    height={40} 
        className="rounded-full border-2 border-purple-500 shadow-md hover:scale-110 transition-transform duration-300"
  />
</a>

     <a 
  href="https://www.snapchat.com/add/abdullahsidiqii" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <img 
    src="/snapchat.jpg" 
    alt="Snapchat" 
    width={40} 
    height={40}
    title='SnapChat'
        className="rounded-full border-2 border-yellow-500 shadow-md hover:scale-110 transition-transform duration-300" 
  />
</a>
<a 
  href="https://wa.me/923146463369" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <img 
    src="/whatsapp.jpg" 
    alt="WhatsApp" 
    width={40} 
    title='WhatsApp'
    height={40} 
    className="rounded-full border-2 border-green-500 shadow-md hover:scale-110 transition-transform duration-300"
  />
</a>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-8 px-6 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto text-center text-slate-600 dark:text-slate-400">
          <p className="mb-2">© 2025 Muhammad Abdullah Siddiqui. All rights reserved.</p>
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
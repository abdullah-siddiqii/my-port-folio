'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ThemeToggle } from '@/components/theme-toggle';
import { Instagram, Github, Code2, Mail, Briefcase, GraduationCap, Sparkles, ArrowDown } from 'lucide-react';

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
    'Node.js', 'JavaScript', 'HTML5', 'CSS3',
    'Git', 'Responsive Design', 'UI/UX', 'Web Development'
  ];

  const projects = [
    {
      title: 'Modern E-Commerce Platform',
      description: 'A full-featured online shopping platform with cart functionality, payment integration, and admin dashboard.',
      tech: ['Next.js', 'React', 'Tailwind CSS']
    },
    {
      title: 'Portfolio Management System',
      description: 'Dynamic portfolio builder with CMS capabilities allowing users to create and customize their portfolios.',
      tech: ['React', 'TypeScript', 'Node.js']
    },
    {
      title: 'Real-time Chat Application',
      description: 'Modern chat app with real-time messaging, file sharing, and group chat functionality.',
      tech: ['Next.js', 'WebSockets', 'Supabase']
    }
  ];

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
            <a href="#projects" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors hidden sm:block">Projects</a>
            <a href="#contact" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors hidden sm:block">Contact</a>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
            <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border-blue-200 dark:border-blue-800">
              Web Developer
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm{' '}
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
              <a href="https://github.com/abdullah-siddiqii" target="_blank" rel="noopener noreferrer" className="p-5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-950 hover:scale-110 transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/abdullah.siddiqii/" target="_blank" rel="noopener noreferrer" className="p-5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-pink-100 dark:hover:bg-pink-950 hover:scale-110 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
           <a
  href="https://wa.me/923146463369" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="p-4 rounded-full bg-white dark:bg-slate-800 hover:bg-green-100 dark:hover:bg-green-950 hover:scale-110 transition-all shadow-lg"
>
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.004 2.002c-5.52 0-10 4.478-10 10 0 1.768.465 3.49 1.352 5.012L2 22l5.107-1.333A9.937 9.937 0 0 0 12.004 22c5.522 0 10-4.478 10-10s-4.478-9.998-10-9.998zm0 18.285a8.266 8.266 0 0 1-4.209-1.157l-.301-.179-3.033.791.808-2.96-.196-.304A8.274 8.274 0 0 1 3.718 12c0-4.565 3.72-8.285 8.286-8.285S20.29 7.435 20.29 12c0 4.566-3.72 8.287-8.286 8.287zm4.768-6.225c-.262-.131-1.553-.767-1.794-.853-.24-.088-.415-.131-.591.13-.174.26-.678.853-.831 1.026-.154.174-.308.196-.57.065-.262-.13-1.106-.407-2.106-1.297-.778-.692-1.303-1.547-1.456-1.809-.153-.261-.017-.403.115-.533.118-.117.262-.308.393-.462.13-.153.174-.262.262-.437.087-.174.043-.327-.022-.458-.065-.13-.591-1.427-.81-1.954-.213-.51-.43-.44-.591-.448h-.505c-.174 0-.458.065-.698.327-.24.26-.915.893-.915 2.176 0 1.283.936 2.521 1.067 2.697.13.174 1.843 2.812 4.47 3.938.625.27 1.111.431 1.49.552.625.199 1.194.17 1.644.103.5-.074 1.553-.635 1.774-1.25.218-.61.218-1.131.153-1.25-.064-.119-.24-.186-.502-.317z"/>
  </svg>
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
                  <p className="text-slate-600 dark:text-slate-400 font-medium">Web Developer</p>
                  <p className="text-slate-500 dark:text-slate-500">Creating Beautiful & Functional Websites</p>
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

      <section id="projects" className="py-24 px-6">
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
              <Card
                key={index}
                className="group p-6 border-2 hover:border-blue-300 dark:hover:border-blue-700 transition-all hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 rounded-lg mb-6 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Code2 className="w-16 h-16 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
            <a href="https://github.com/abdullah-siddiqii" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-950 hover:scale-110 transition-all shadow-lg">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/abdullah.siddiqii/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white dark:bg-slate-800 hover:bg-pink-100 dark:hover:bg-pink-950 hover:scale-110 transition-all shadow-lg">
              <Instagram className="w-6 h-6" />
            </a>
           <a
  href="https://wa.me/923146463269" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="p-4 rounded-full bg-white dark:bg-slate-800 hover:bg-green-100 dark:hover:bg-green-950 hover:scale-110 transition-all shadow-lg"
>
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.004 2.002c-5.52 0-10 4.478-10 10 0 1.768.465 3.49 1.352 5.012L2 22l5.107-1.333A9.937 9.937 0 0 0 12.004 22c5.522 0 10-4.478 10-10s-4.478-9.998-10-9.998zm0 18.285a8.266 8.266 0 0 1-4.209-1.157l-.301-.179-3.033.791.808-2.96-.196-.304A8.274 8.274 0 0 1 3.718 12c0-4.565 3.72-8.285 8.286-8.285S20.29 7.435 20.29 12c0 4.566-3.72 8.287-8.286 8.287zm4.768-6.225c-.262-.131-1.553-.767-1.794-.853-.24-.088-.415-.131-.591.13-.174.26-.678.853-.831 1.026-.154.174-.308.196-.57.065-.262-.13-1.106-.407-2.106-1.297-.778-.692-1.303-1.547-1.456-1.809-.153-.261-.017-.403.115-.533.118-.117.262-.308.393-.462.13-.153.174-.262.262-.437.087-.174.043-.327-.022-.458-.065-.13-.591-1.427-.81-1.954-.213-.51-.43-.44-.591-.448h-.505c-.174 0-.458.065-.698.327-.24.26-.915.893-.915 2.176 0 1.283.936 2.521 1.067 2.697.13.174 1.843 2.812 4.47 3.938.625.27 1.111.431 1.49.552.625.199 1.194.17 1.644.103.5-.074 1.553-.635 1.774-1.25.218-.61.218-1.131.153-1.25-.064-.119-.24-.186-.502-.317z"/>
  </svg>
</a>

          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto text-center text-slate-600 dark:text-slate-400">
          <p className="mb-2">© 2025 Muhammad Abdullah Siddiqui. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

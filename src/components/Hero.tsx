import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-indigo-600 mb-4 text-5xl font-bold">
              Hello, I'm Simran Malhotra
            </h1>
            <h2 className="mb-6 text-gray-700">
              Software Developer
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg">
              Passionate about building scalable data pipelines and AI-driven solutions. 
              Experienced in cloud technologies, data engineering, and machine learning applications.
            </p>
            <div className="flex gap-4 mb-8">
              <Button onClick={() => scrollToSection('projects')}>
                View My Work
              </Button>
              <Button variant="outline" onClick={() => scrollToSection('contact')}>
                Contact Me
              </Button>
            </div>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/simalhotra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:malhotrasimran2000@gmail.com"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src={'/assets/28c9fa12e203abe5dd3133da9555276a1f3c168e.png'}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
          onClick={() => scrollToSection('about')}
        >
        </div>
      </div>
    </section>
  );
}

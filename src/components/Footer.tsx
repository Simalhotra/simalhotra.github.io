import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/simalhotra', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:malhotrasimran2000@gmail.com', label: 'Email' },
  ];


  return (
    <footer className="bg-background text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">
            © {currentYear} Simran Malhotra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

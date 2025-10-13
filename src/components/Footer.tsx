import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/simalhotra', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:malhotrasimran2000@gmail.com', label: 'Email' },
  ];

  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '#' },
        { label: 'Resume', href: '#' },
        { label: 'Case Studies', href: '#' },
        { label: 'Testimonials', href: '#' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { label: 'Email Me', href: 'mailto:malhotrasimran2000@gmail.com' },
        { label: 'Schedule Call', href: '#' },
        { label: 'LinkedIn', href: 'https://linkedin.com/in/simalhotra' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="mb-4">Simran Malhotra</h3>
            <p className="text-gray-400 mb-4">
              Data Engineer & AI Technical Consultant building scalable data solutions and AI-driven applications.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-indigo-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">
            © {currentYear} Simran Malhotra. All rights reserved.
          </p>
          <p className="text-gray-400 flex items-center gap-2">
            Made with <Heart size={16} className="text-red-500 fill-current" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}

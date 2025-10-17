import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Leadership', id: 'leadership' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div
              className="cursor-pointer text-primary font-bold text-xl"
              onClick={() => scrollToSection('home')}
            >
              Simran Malhotra
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-foreground hover:text-primary transition-colors p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card border-t border-border absolute top-full left-0 right-0 z-50 shadow-2xl">
            <nav className="flex flex-col py-2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-foreground hover:text-primary hover:bg-accent transition-all text-left px-6 py-4 text-lg font-medium ${
                    index !== navItems.length - 1 ? 'border-b border-border/50' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
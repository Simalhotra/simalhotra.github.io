import { Users, Award, BookOpen, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function Leadership() {
  const experiences = [
    {
      icon: Award,
      title: 'Career Navigator',
      organization: 'The Career Center, UIUC',
      period: 'January 2025 – May 2025',
      description: 'Led and mentored a cohort of 8 international students in the CC-I (Career Certificate – International Students) program. Facilitated training and development modules that provided one-on-one and group coaching, resources on job searches, resume reviews, and mock interviews to prepare students for successful careers.',
      images: [
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBjb3Vuc2VsaW5nJTIwY2VudGVyfGVufDF8fHx8MTc2MDIyMzg3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1690192435015-319c1d5065b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBtZW50b3JpbmclMjBzdHVkZW50c3xlbnwxfHx8fDE3NjAyNDAxNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1690264421892-46e3af5c3455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjAxODg1MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: BookOpen,
      title: 'Course Assistant, CS 222: Software Design Lab',
      organization: 'Siebel School of Computing and Data Science, UIUC',
      period: 'Sept 2024 – May 2025',
      description: 'Mentored 8 undergraduate students throughout their semester-long software project, providing technical guidance, project management support, and conducting weekly code reviews. Assisted in developing assignments on quizzes and projects while grading student submissions.',
      images: [
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjBsYWIlMjBzdHVkZW50c3xlbnwxfHx8fDE3NjAyMTQ4MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1543269664-76bc3997d9ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjBjbGFzc3Jvb218ZW58MXx8fHwxNzYwMjQwMTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kaW5nfGVufDF8fHx8MTc2MDE2NTM1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Heart,
      title: 'Events Lead & Outreach Pillar Member',
      organization: 'Women ERG, Microsoft India',
      period: 'July 2023 – July 2024',
      description: 'Organized company-wide fairs, talks, and workshops to benefit over 1,000 employees. Led the WASH (Water, Sanitation, and Hygiene) program in 10+ rural and government schools, benefiting ~2,000 students. Orchestrated mentorship program with Katalyst Foundation, linking 50+ students to industry veteran coaches. Facilitated the distribution of 500+ sustainable menstrual kits to girls in government schools and orphanages.',
      images: [
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGxlYWRlcnNoaXAlMjB0ZWNofGVufDF8fHx8MTc2MDIxMzE3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1650784853637-685e590ecb73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGxlYWRlcnNoaXAlMjB0ZWNofGVufDF8fHx8MTc2MDI0MDE2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1659993295503-3079b2567044?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtd29yayUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYwMjA4ODAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      ],
      color: 'from-red-500 to-orange-500',
    },
  ];

  return (
    <section id="leadership" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-gray-900 text-[36px] font-bold">Beyond the Code</h2>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => {
            const [currentIndex, setCurrentIndex] = useState(0);
            
            const nextImage = () => {
              setCurrentIndex((prev) => (prev + 1) % experience.images.length);
            };
            
            const prevImage = () => {
              setCurrentIndex((prev) => (prev - 1 + experience.images.length) % experience.images.length);
            };
            
            return (
            <div
              key={experience.title}
              className={`grid md:grid-cols-2 gap-6 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="relative overflow-hidden rounded-lg shadow-xl group">
                  <div className="relative h-64">
                    <img
                      src={experience.images[currentIndex]}
                      alt={`${experience.title} ${currentIndex + 1}`}
                      className="w-full h-full object-cover transition-opacity duration-300"
                    />
                  </div>
                  
                  {experience.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={18} className="text-gray-800" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label="Next image"
                      >
                        <ChevronRight size={18} className="text-gray-800" />
                      </button>
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                        {experience.images.map((_, imgIndex) => (
                          <button
                            key={imgIndex}
                            onClick={() => setCurrentIndex(imgIndex)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              imgIndex === currentIndex ? 'bg-white w-6' : 'bg-white/50'
                            }`}
                            aria-label={`Go to image ${imgIndex + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${experience.color} flex items-center justify-center mb-3`}>
                  <experience.icon className="text-white" size={24} />
                </div>
                <h3 className="mb-2 text-gray-900 text-lg">{experience.title}</h3>
                <div className="text-indigo-600 mb-1 text-sm">
                  {experience.organization}
                </div>
                <div className="text-gray-500 mb-3 text-sm">{experience.period}</div>
                <p className="text-gray-600 text-sm">{experience.description}</p>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

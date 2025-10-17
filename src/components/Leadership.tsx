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
      achievements: [
        'Served as a peer mentor and cohort leader for 6–9 international students in the Career Certificate – International Students (CC-I) program',
        'Facilitated a 9-week career development program, leading weekly modules and activities to strengthen participants\' professional skills',
        'Conducted one-on-one guidance sessions with participants, providing personalized career advice and support',
        'Tracked and evaluated participants\' progress through weekly check-ins and a comprehensive 30-minute meeting between weeks 3–6',
        'Coordinated and helped plan campus-wide career development events, expanding networking opportunities for international students',
      ],
      images: [
        '/assets/IMG_0683.jpg',
      ],
    },
    {
      icon: BookOpen,
      title: 'Course Assistant, CS 222: Software Design Lab',
      organization: 'Siebel School of Computing and Data Science, UIUC',
      period: 'Sept 2024 – May 2025',
      achievements: [
        'Mentored two teams of four undergraduate students through semester-long software projects, providing technical guidance, project management support, and weekly code reviews',
        'Designed and graded quizzes and project assignments, offering detailed feedback to strengthen students’ technical and collaborative skills',
        'Fostered a supportive, growth-oriented learning environment that encouraged teamwork, innovation, and best engineering practices',
      ],
      images: [
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjBsYWIlMjBzdHVkZW50c3xlbnwxfHx8fDE3NjAyMTQ4MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    
      ],
    },
    {
      icon: Heart,
      title: 'Events Lead & Outreach Pillar Member',
      organization: 'Women ERG, Microsoft India',
      period: 'July 2023 – July 2024',
      achievements:[
        'Organized company-wide fairs, talks, and workshops serving 1,000+ employees, overseeing end-to-end planning, logistics, and stakeholder coordination',
        'Worked with Microsoft Philanthropies and NGOs nationwide to launch and scale the WASH program in 10+ rural/government schools, benefiting ~2,000 students',
        'Orchestrated a mentorship initiative with Katalyst Foundation, matching 50+ students with experienced industry coaches',
        'Partnered with Collective Consciousness to facilitate the distribution of 500+ sustainable menstrual kits to girls in government schools and orphanages',
        'Helped cultivate a supportive, collaborative culture across teams; recognized by leadership as a valuable, high-impact contributor'
      ],
      images: [
        '/assets/IMG_6167.jpg',
      ],
    },
  ];

  const [currentIndexes, setCurrentIndexes] = useState(
    experiences.map(() => 0)
  );

  const nextImage = (expIndex: number, imagesLength: number) => {
    setCurrentIndexes((prev) => {
      const newIndexes = [...prev];
      newIndexes[expIndex] = (newIndexes[expIndex] + 1) % imagesLength;
      return newIndexes;
    });
  };

  const prevImage = (expIndex: number, imagesLength: number) => {
    setCurrentIndexes((prev) => {
      const newIndexes = [...prev];
      newIndexes[expIndex] = (newIndexes[expIndex] - 1 + imagesLength) % imagesLength;
      return newIndexes;
    });
  };

  const setImageIndex = (expIndex: number, imageIndex: number) => {
    setCurrentIndexes((prev) => {
      const newIndexes = [...prev];
      newIndexes[expIndex] = imageIndex;
      return newIndexes;
    });
  };

  return (
    <section id="leadership" className="py-20 bg-background text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-indigo-600 text-[36px] font-bold">Beyond the Code</h2>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, expIndex) => {
            const currentIndex = currentIndexes[expIndex];
            
            return (
              <div
                key={experience.title}
                className="bg-gradient-to-r from-indigo-50 via-white to-purple-50 rounded-lg shadow-xl overflow-hidden"
              >
                <div className={`grid md:grid-cols-3 gap-0 ${
                  expIndex % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}>
                  <div className={`relative h-64 md:h-auto overflow-hidden group bg-gray-100 ${expIndex % 2 === 1 ? 'md:order-2' : ''}`}>
                    <img
                      src={experience.images[currentIndex]}
                      alt={`${experience.title} ${currentIndex + 1}`}
                      className="w-full h-full object-cover transition-opacity duration-300"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${experience.color} opacity-20`} />
                    
                    {experience.images.length > 1 && (
                      <>
                        <button
                          onClick={() => prevImage(expIndex, experience.images.length)}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity z-10"
                          aria-label="Previous image"
                        >
                          <ChevronLeft size={18} className="text-gray-800" />
                        </button>
                        <button
                          onClick={() => nextImage(expIndex, experience.images.length)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity z-10"
                          aria-label="Next image"
                        >
                          <ChevronRight size={18} className="text-gray-800" />
                        </button>
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                          {experience.images.map((_, imgIndex) => (
                            <button
                              key={imgIndex}
                              onClick={() => setImageIndex(expIndex, imgIndex)}
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

                  <div className={`md:col-span-2 p-6 ${expIndex % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${experience.color} flex items-center justify-center mb-3`}>
                      <experience.icon className="text-white" size={24} />
                    </div>
                    <h3 className="mb-2 text-gray-900 text-lg font-semibold">{experience.title}</h3>
                    <div className="text-indigo-600 mb-1 text-sm font-medium">
                      {experience.organization}
                    </div>
                    <div className="text-gray-500 mb-3 text-sm">{experience.period}</div>
                    
                    {experience.achievements ? (
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-gray-600 text-sm"
                          >
                            <span className="text-indigo-600 mt-0.5 flex-shrink-0">▹</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-600 text-sm leading-relaxed">{experience.description}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
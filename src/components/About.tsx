import { GraduationCap } from 'lucide-react';
import { Card } from './ui/card';

export function About() {

  const logos = [
    {
      name: 'AWS',
      imagePath: '/src/assets/logos/AWS.png',
      alt: 'AWS',
      size: 'normal'
    },
    {
      name: 'Microsoft',
      imagePath: '/src/assets/logos/Microsoft.jpg',
      alt: 'Microsoft',
      size: 'normal'
    },
    {
      name: 'UBS',
      imagePath: '/src/assets/logos/UBS.png',
      alt: 'UBS',
      size: 'normal'
    },
    {
      name: 'University of Illinois',
      imagePath: '/src/assets/logos/UIUC.jpeg',
      alt: 'UIUC',
      size: 'large'
    },
    {
      name: 'Manipal Institute of Technology',
      imagePath: '/src/assets/logos/MIT.jpg',
      alt: 'MIT Manipal',
      size: 'large'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-gray-900 text-[36px] font-bold">About Me</h2>
        </div>
        
        <Card className="mb-16 p-8 shadow-xl bg-gradient-to-r from-indigo-50 via-white to-purple-50">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
                <GraduationCap className="text-white" size={48} />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="mb-4 text-gray-900">My Journey</h3>
              <p className="text-gray-600 mb-4">
                I'm currently pursuing my Master of Computer Science at the University of Illinois
                Urbana-Champaign with a perfect 4.0 GPA, specializing in Data Mining, Cloud Computing,
                and LLM-Assisted Software Engineering.
              </p>
              <p className="text-gray-600 mb-4">
                I hold a Bachelor of Technology in Computer Science from Manipal Institute of Technology
                with a minor in Big Data and Analytics (CGPA: 9.34/10). My experience spans data engineering
                at AWS Fintech, technical consulting at Microsoft, and automation engineering at UBS.
              </p>
              <p className="text-gray-600">
                I specialize in building scalable data pipelines, cloud solutions, and AI-driven applications.
                When I'm not coding, I'm mentoring students, leading community initiatives, and contributing
                to innovative projects in veterinary medicine and data science.
              </p>
            </div>
          </div>
        </Card>

        {/* Replaced stats grid with logo strip */}
        <div className="p-12">
          <div className="flex items-center justify-center gap-12 flex-wrap">
            {logos.map((logo, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center transition-all duration-300 px-10"
                style={{ opacity: 0.85 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0.85';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <img 
                  src={logo.imagePath} 
                  alt={logo.alt}
                  loading="lazy"
                  className="w-auto object-contain"
                  style={{ height: logo.size === 'large' ? '130px' : '100px' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
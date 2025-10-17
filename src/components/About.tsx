import { Card } from '@/components/ui/card';

export function About() {
  const logos = [
    {
      name: 'AWS',
      imagePath: '/assets/logos/AWS.png',
      alt: 'AWS'
    },
    {
      name: 'Microsoft',
      imagePath: '/assets/logos/Microsoft.png',
      alt: 'Microsoft'
    },
    {
      name: 'UBS',
      imagePath: '/assets/logos/UBS.png',
      alt: 'UBS'
    },
    {
      name: 'University of Illinois',
      imagePath: '/assets/logos/UIUC.png',
      alt: 'UIUC'
    },
    {
      name: 'Manipal Institute of Technology',
      imagePath: '/assets/logos/MIT.png',
      alt: 'MIT Manipal'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background text-gray-500 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-indigo-600 text-[36px] font-bold">About Me</h2>
        </div>

        <Card className="mb-16 p-8 shadow-xl bg-gradient-to-r from-indigo-50 via-white to-purple-50 overflow-hidden">          
          <p className="text-gray-500 mb-4 leading-relaxed">
            I'm currently pursuing a master's in Computer Science at the University of Illinois
            Urbana-Champaign (4.0 GPA), specializing in Database Systems, Cloud Computing, Large Language Models
            and LLM-Assisted Software Engineering.
          </p>
          
          <p className="text-gray-500 mb-4 leading-relaxed">
            I hold a Bachelor of Technology in Computer Science from Manipal Institute of Technology
            with a minor in Big Data and Analytics (GPA: 3.94). My experience spans data engineering
            at AWS, technical consulting at Microsoft, and automation engineering at UBS, complemented by recent hands-on work designing and deploying AI agents.
          </p>
          
          <p className="text-gray-500 mb-6 leading-relaxed">
            I specialize in building scalable data pipelines, cloud solutions, and AI-driven applications.
            When I'm not coding, I'm mentoring students, leading community initiatives, and helping build inclusive tech communities. Beyond work, I love traveling, cooking, meeting new people, and I’m a certified open-water scuba diver always chasing the next adventure.
          </p>

          {/* Logos - vertical on mobile, horizontal on desktop */}
          <div className="mt-8 w-full">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14 lg:gap-18 xl:gap-20 px-0 md:px-8 lg:px-12">
              {logos.map((logo, index) => {
                // Adjust size based on logo for better uniformity
                let containerWidth = '140px';
                let containerHeight = '90px';
                
                if (logo.name === 'AWS') {
                  containerWidth = '110px';
                  containerHeight = '80px';
                } else if (logo.name === 'Microsoft') {
                  containerWidth = '180px';
                } else if (logo.name === 'UBS') {
                  containerWidth = '150px';
                } else if (logo.name === 'University of Illinois') {
                  containerWidth = '155px';
                } else if (logo.name === 'Manipal Institute of Technology') {
                  containerWidth = '165px';
                }
                
                return (
                  <div
                    key={index}
                    className="flex items-center justify-center transition-all duration-300 hover:scale-105"
                    style={{ 
                      opacity: 0.85,
                      width: containerWidth,
                      height: containerHeight
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = '1';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '0.85';
                    }}
                  >
                    <img
                      src={logo.imagePath}
                      alt={logo.alt}
                      loading="lazy"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
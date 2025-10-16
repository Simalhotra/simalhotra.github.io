import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      name: 'Mridula Polina',
      role: 'Data Engineering Manager',
      company: 'Amazon Web Services',
      quote: 'Her curiosity and quick learning allowed her to ramp up on unfamiliar systems with ease, and she raised the bar by suggesting process and tooling improvements that benefitted the whole team.She brings energy, ownership, and professionalism to everything she does.',
    },
    {
      name: 'Dhruv Saxena',
      role: 'Data Engineer II',
      company: 'Amazon Web Services',
      quote: 'Simran performed exceptionally well during her time as a Data Engineer intern @ AWS. As her mentor, I saw her take full ownership of her project, deliver not just the core features, but also additional requirements.',
    },
    {
      name: 'Rahul Tiwary',
      role: 'Senior Consultant',
      company: 'Microsoft',
      quote: 'I had the privilege of working with Simran on a project where her expertise in writing complex queries in Python and SQL within Databricks Notebooks was invaluable. She consistently demonstrated her ability to handle intricate data tasks with precision and efficiency. ',
    },
    {
      name: 'Dhruti Doshi',
      role: 'App Consultant',
      company: 'Microsoft',
      quote: 'Simran truly stands out for her willingness to embrace challenges and go the extra mile to successfully complete all tasks. She consistently delivered multiple complex applications on time.She also played a crucial role in providing technical support to her team and willingly took on extra responsibilities as needed.',
    },
    {
      name: 'Krishna Mohan Botcha',
      role: 'Technical Delivery Manager',
      company: 'Microsoft',
      quote: 'She has a natural curiosity, a passion for learning, and an eagerness to tackle challenges head-on. Throughout her work on various projects for our global clients, Simran has consistently delivered high-quality results while demonstrating a deep understanding of customer needs. Her effective communication skills and ability to build positive client relationships have been instrumental in the success of our projects.',
    },
    {
      name: 'Ishani Shah',
      role: 'Solutions Architect',
      company: 'TechIsh Consulting',
      quote: 'Simran\'s ability to comprehend complex data requirements and implement data-driven solutions has been instrumental to our project\'s success. I have no doubt that she will bring the same level of expertise, dedication, and innovation to any organization she joins.',
    },
    {
      name: 'Monika Dubey',
      role: 'Data and AI Consultant',
      company: 'Microsoft',
      quote: 'Simran is an incredibly hardworking and dedicated professional who approaches every task with remarkable enthusiasm and commitment. Her proactive attitude and eagerness to dive deep into all aspects of the project were truly impressive.',
    },
    {
      name: 'Leena Isaac',
      role: 'Principal PM Manager | Co-Chair Women ERG Microsoft India',
      company: 'Microsoft',
      quote: 'She is extremely passionate and hardworking. She is a superstar in the team, and my heartful thanks to her for being a supporting force behind the Women ERG\'s initiatives to promote diversity and inclusion.',
    },
    {
      name: 'Hima Bindu',
      role: '',
      company: 'Microsoft',
      quote: 'Your leadership and dedication as a core team member of the Women ERG have been instrumental in the succesful execution of our events. Your role as Events lead has brought a level of clarity and detail that is truly commendable.',
    },
    {
      name: 'Kalpana Kumari',
      role: 'Consultant',
      company: 'Microsoft',
      quote: 'Simran has been a great team player,always ready to help. Apart from working on her deliverables, she also helps fellow teammates wherever possible. Keep up the good work!',
    },
    {
      name: 'Vanshika Mediratta',
      role: 'Consultant',
      company: 'Microsoft',
      quote: 'You are always helpful and take out time to help others. You also motivate me to do my best which I really appreciate',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-indigo-600 text-[36px] font-bold">Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Testimonials from colleagues, mentors, and collaborators I've had the privilege to work with
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative group">
            <div className="bg-gradient-to-r from-indigo-50 via-white to-purple-50 p-8 rounded-xl shadow-lg">
              <div className="mb-6">
                <Quote className="text-indigo-200 mb-4" size={40} />
              </div>

              <p className="text-gray-600 italic leading-relaxed text-lg mb-6">
                "{currentTestimonial.quote}"
              </p>

              <div className="text-center">
                <h4 className="text-gray-900">{currentTestimonial.name}</h4>
                <p className="text-gray-600 text-sm">{currentTestimonial.role}</p>
                <p className="text-indigo-600 text-sm">{currentTestimonial.company}</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="text-gray-800" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="text-gray-800" />
            </button>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-indigo-600 w-8' : 'bg-gray-300 w-2'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

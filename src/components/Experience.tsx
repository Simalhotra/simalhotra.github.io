import { Briefcase, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { Badge } from './ui/badge';
import { useState } from 'react';

export function Experience() {
  const experiences: Array<{
    company: string;
    location: string;
    position: string;
    period: string;
    images: string[];
    achievements?: string[];
    projects?: Array<{
      title: string;
      points: string[];
    }>;
    positions?: Array<{
      title: string;
      period: string;
      achievements: string[];
    }>;
    color: string;
  }> = [
    {
      company: 'Veterinary Innovation Hub, University of Illinois College of Veterinary Medicine',
      location: 'Urbana-Champaign, Illinois',
      position: 'Data & AI Engineer',
      period: 'August 2025 – Present',
      images: [
        '/src/assets/vethub/logo.png',
      ],
      achievements: [
        'Designed and prototyped NL2SQL agent to translate natural language questions into SQL queries for agtech enterprise software',
        'Mapped relevant production health datasets by exploring table structures, column definitions, relationships, and data types via DBQuery',
        'Provided insights for readiness reports on AI-driven query generation',
      ],
      color: '',
    },
    {
      company: 'Amazon Web Services (AWS)',
      location: 'Seattle, Washington',
      position: 'Data Engineer Intern (AWS Fintech)',
      period: 'May 2025 – Aug 2025',
      images: [
        '/src/assets/aws/Amazon Intern Welcome.jpg',
        '/src/assets/aws/IMG_0063.PNG',
        '/src/assets/aws/Hackathon 25 Certificate - Simran Malhotra.png',
      ],
      achievements: [
        'Designed and developed a real-time data pipeline using AWS Flink to support headcount management and planning',
        'Implemented a streaming architecture to ingest data from DynamoDB into Apache Iceberg using a catch-based AWS Glue solution, with real-time metrics displayed via QuickSight dashboards',
        'Reduced operational overhead and significantly accelerated delivery of actionable insights to customers by reducing data latency from 3 hours to about 30 seconds',
        'Secured first place in AWS Fintech hackathon by building a multi-agent prototype using LangGraph for root-cause analysis',
      ],
      color: '',
    },
    {
      company: 'Microsoft',
      location: 'Hyderabad, India',
      position: 'Data & AI Technical Consultant',
      period: 'Aug 2022 – July 2024',
      images: [
        '/src/assets/microsoft/IMG_1738.jpg',
        '/src/assets/microsoft/IMG_1744.jpg',
        '/src/assets/microsoft/1721466151541.jpeg',
        '/src/assets/microsoft/IMG_1804.JPG',
        '/src/assets/microsoft/1679060563443.jpg',
        '/src/assets/microsoft/1721469586898.jpeg',
      ],
      projects: [
        {
          title: 'Data & Reporting Project',
          points: [
            'Engineered Azure Databricks solutions to process transactional data from Dynamics 365 and Solutran, for a U.S. government nutrition program, enhancing food vendor operations',
            'Developed Azure Data Factory pipelines and Power BI reports, enabling data-driven decision-making and streamlined workflows',
          ]
        },
        {
          title: 'Data Migration Project',
          points: [
            'Implemented migration of 4 petabytes of critical banking data from Netezza to Azure Delta Lake, utilizing ETL jobs on Azure Databricks',
            'Established robust Azure Data Factory pipelines for data transfer and implemented rigorous validation checks to ensure data integrity',
          ]
        },
        {
          title: 'App Migration Project',
          points: [
            'Executed successful migration of 15 complex .NET banking applications from on-prem servers to Azure web apps, ensuring on-time delivery and enhanced security',
            'Conducted peer reviews, steered customer discussions, and developed an IP for database connectivity testing across multiple platforms',
          ]
        },
        {
          title: 'Data Engineering Project',
          points: [
            'Engineered ETL pipelines processing 2.5 TB of real-time shipment data, optimizing data quality for improved tracking and support services',
            'Designed Power BI dashboard to analyze data flow latency, enhancing overall system performance and user experience',
          ]
        },
      ],
      color: '',
    },
    {
      company: 'UBS Business Solutions',
      location: 'Pune, India',
      position: 'Software Engineer Intern & Technology Intern',
      period: 'June 2021 – June 2022',
      images: [
        '/src/assets/logos/ubs-logo.png',
        '/src/assets/ubs/Certificate of Appreciation.png',
      ],
      positions: [
        {
          title: 'Software Engineer Intern',
          period: 'Jan 2022 – June 2022',
          achievements: [
            'Developed a Python-based automation pipeline using Tanium API for quick and easy client onboarding to Loom,an AIOps log analytics tool.',
            'Reduced human effort by 90% and increased client onboarding rate',
            'Spearheaded global product adoption, leveraging AIOps for proactive anomaly detection and faster IT incident resolution.'
          ]
        },
        {
          title: 'Technology Intern',
          period: 'June 2021 – Aug 2021',
          achievements: [
            'Trained the AI engine of Loom, an AIOps-powered log analytics tool, to analyze log patterns and perform correlation analysis, enhancing predictive insights and root cause identification for IT incidents.',
            'Engineered and deployed cloud infrastructure using Terraform and Azure DevOps to streamline deployment processes and improve scalability.',
          ]
        },
      ],
      color: '',
    },
  ];

  // Move state outside of map - one state array for all carousels
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
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-gray-900 text-[36px] font-bold">Work Experience</h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, expIndex) => {
            const currentIndex = currentIndexes[expIndex];
            
            return (
              <div
                key={exp.company}
                className="bg-white rounded-lg shadow-xl overflow-hidden"
              >
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Image container adapts to text content height */}
                  <div className="relative h-64 md:h-auto overflow-hidden group bg-gray-100">
                    <img
                      src={exp.images[currentIndex]}
                      alt={`${exp.company} ${currentIndex + 1}`}
                      className="w-full h-full object-cover transition-opacity duration-300"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-20`} />
                    
                    {exp.images.length > 1 && (
                      <>
                        <button
                          onClick={() => prevImage(expIndex, exp.images.length)}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity z-10"
                          aria-label="Previous image"
                        >
                          <ChevronLeft size={18} className="text-gray-800" />
                        </button>
                        <button
                          onClick={() => nextImage(expIndex, exp.images.length)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity z-10"
                          aria-label="Next image"
                        >
                          <ChevronRight size={18} className="text-gray-800" />
                        </button>
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                          {exp.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setImageIndex(expIndex, index)}
                              className={`w-2 h-2 rounded-full transition-all ${
                                index === currentIndex ? 'bg-white w-6' : 'bg-white/50'
                              }`}
                              aria-label={`Go to image ${index + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  <div className="md:col-span-2 p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-gray-900 mb-2 text-lg">{exp.position}</h3>
                        <div className="flex items-center gap-2 text-indigo-600 mb-1 text-sm">
                          <Briefcase size={16} />
                          <span>{exp.company}</span>
                        </div>
                        {!exp.positions && (
                          <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <Calendar size={16} />
                            <span>{exp.period}</span>
                          </div>
                        )}
                      </div>
                      <Badge variant="secondary" className="text-xs">{exp.location}</Badge>
                    </div>

                    {/* Check if experience has projects, positions, or achievements */}
                    {exp.projects ? (
                      <div>
                        {exp.projects.map((project, projectIdx) => (
                          <div key={projectIdx} className="mb-6">
                            <h4 className="text-gray-900 font-semibold text-sm mb-2">{project.title}</h4>
                            <ul className="space-y-1.5 ml-4">
                              {project.points.map((point, pointIdx) => (
                                <li
                                  key={pointIdx}
                                  className="flex items-start gap-2 text-gray-600 text-sm"
                                >
                                  <span className="text-indigo-600 mt-0.5 flex-shrink-0">•</span>
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : exp.positions ? (
                      <div>
                        {exp.positions.map((position, posIdx) => (
                          <div key={posIdx} className="mb-6">
                            <div className="flex items-center gap-3 mb-2">
                              <h4 className="text-gray-900 font-semibold text-sm">{position.title}</h4>
                              <span className="text-gray-500 text-xs">• {position.period}</span>
                            </div>
                            <ul className="space-y-1.5 ml-4">
                              {position.achievements.map((achievement, achIdx) => (
                                <li
                                  key={achIdx}
                                  className="flex items-start gap-2 text-gray-600 text-sm"
                                >
                                  <span className="text-indigo-600 mt-0.5 flex-shrink-0">▹</span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <ul className="space-y-2">
                        {exp.achievements?.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-gray-600 text-sm"
                          >
                            <span className="text-indigo-600 mt-0.5 flex-shrink-0">▹</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
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
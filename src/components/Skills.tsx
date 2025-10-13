import { Code2, Database, Zap, Globe, Users, Cog } from 'lucide-react';

export function Skills() {
  const skills = [
    {
      icon: Code2,
      title: 'Programming Languages',
      description: 'C, C++, Java, Python, SQL',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'ETL, Data Pipelines, Data Warehousing, Azure Data Factory, Azure Databricks, Spark, Apache Flink, AWS Glue, AWS Kinesis',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Zap,
      title: 'Cloud Platform & Services',
      description: 'AWS (DynamoDB, Lambda, Glue, S3), Azure (Databricks, Data Factory), Google Cloud (BigQuery)',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Globe,
      title: 'Analytics & AI',
      description: 'LangGraph, LangChain, Agentic AI, LLM-Assisted Software Engineering, Microsoft Power BI, Amazon Quicksight',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Cog,
      title: 'Software Engineering & Tools',
      description: 'Git, Agile Methodologies, Object-Oriented Programming, Data Structures, Databases',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Users,
      title: 'Professional & Interpersonal Skills',
      description: 'Technology Consulting,Leadership, Teamwork, Effective Communication, Problem-Solving, Cross-Functional Collaboration',
      color: 'from-indigo-500 to-blue-500',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-gray-900 text-[36px] font-bold">Skills</h2>
        </div>
        
        {/* First Row: 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {skills.slice(0, 3).map((skill) => (
            <div
              key={skill.title}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
            >
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <skill.icon className="text-white" size={32} />
              </div>
              <h3 className="mb-3 text-gray-900 font-semibold text-lg">{skill.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>

        {/* Second Row: 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.slice(3, 6).map((skill) => (
            <div
              key={skill.title}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
            >
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <skill.icon className="text-white" size={32} />
              </div>
              <h3 className="mb-3 text-gray-900 font-semibold text-lg">{skill.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
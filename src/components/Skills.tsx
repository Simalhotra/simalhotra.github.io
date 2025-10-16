import { Code2, Database, Zap, Globe, Users, Cog } from 'lucide-react';

export function Skills() {
  const skills = [
    {
      icon: Code2,
      title: 'Programming Languages',
      description: 'C, C++, Java, Python, SQL',
      gradient: 'bg-gradient-to-r from-indigo-50 via-white to-purple-50',
      iconColor: 'text-indigo-600',
      borderColor: 'border-indigo-200',
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'ETL, Data Pipelines, Data Warehousing, Azure Data Factory, Azure Databricks, Spark, Apache Flink, AWS Glue, AWS Kinesis',
      gradient: 'bg-gradient-to-r from-indigo-50 via-white to-purple-50',
      iconColor: 'text-indigo-600',
      borderColor: 'border-emerald-200',
    },
    {
      icon: Zap,
      title: 'Cloud Platform & Services',
      description: 'AWS (DynamoDB, Lambda, Glue, S3), Azure (Databricks, Data Factory), Google Cloud (BigQuery)',
      gradient: 'bg-gradient-to-r from-indigo-50 via-white to-purple-50',
      iconColor: 'text-indigo-600',
      borderColor: 'border-purple-200',
    },
    {
      icon: Globe,
      title: 'Analytics & AI',
      description: 'LangGraph, LangChain, Agentic AI, LLM-Assisted Software Engineering, Microsoft Power BI, Amazon Quicksight',
      gradient: 'bg-gradient-to-r from-indigo-50 via-white to-purple-50',
      iconColor: 'text-indigo-600',
      borderColor: 'border-orange-200',
    },
    {
      icon: Cog,
      title: 'Software Engineering & Tools',
      description: 'Git, Agile Methodologies, Object-Oriented Programming, Data Structures, Databases',
      gradient: 'bg-gradient-to-r from-indigo-50 via-white to-purple-50',
      iconColor: 'text-indigo-600',
      borderColor: 'border-rose-200',
    },
    {
      icon: Users,
      title: 'Professional & Interpersonal Skills',
      description: 'Technology Consulting,Leadership, Teamwork, Effective Communication, Problem-Solving, Cross-Functional Collaboration',
      gradient: 'bg-gradient-to-r from-indigo-50 via-white to-purple-50',
      iconColor: 'text-indigo-600',
      borderColor: 'border-blue-200',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-indigo-600 text-[36px] font-bold">Skills</h2>
        </div>

        {/* First Row: 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {skills.slice(0, 3).map((skill) => (
            <div
              key={skill.title}
              className={`bg-gradient-to-br ${skill.gradient} p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border-2 ${skill.borderColor} group cursor-pointer`}
            >
              <div className="flex items-center justify-center mb-4">
                <skill.icon className={`${skill.iconColor} group-hover:scale-110 transition-transform`} size={36} />
              </div>
              <h3 className="mb-3 text-gray-900 font-semibold text-lg text-center">{skill.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed text-center">{skill.description}</p>
            </div>
          ))}
        </div>

        {/* Second Row: 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.slice(3, 6).map((skill) => (
            <div
              key={skill.title}
              className={`bg-gradient-to-br ${skill.gradient} p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border-2 ${skill.borderColor} group cursor-pointer`}
            >
              <div className="flex items-center justify-center mb-4">
                <skill.icon className={`${skill.iconColor} group-hover:scale-110 transition-transform`} size={36} />
              </div>
              <h3 className="mb-3 text-gray-900 font-semibold text-lg text-center">{skill.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed text-center">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
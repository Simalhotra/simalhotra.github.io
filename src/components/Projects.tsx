import { ExternalLink, Github } from 'lucide-react';
import { Badge } from './ui/badge';

export function Projects() {
  const projects = [
    {
      id: 1,
      title: 'AI Career Companion',
      description: 'An interactive system for resume review, interview preparation, skill gap analysis, and cover letter generation based on a user\’s resume and job description.',
      image: '/assets/projects/aicareercompanion.png',
      tags: ['Human-centered AI', 'Gemini', 'Python', 'Streamlit','Prompt Engineering','User Interaction','AI for Professional Development'],
      liveUrl: 'https://ai-career-companion.streamlit.app',
      githubUrl: 'https://github.com/Simalhotra/ai-career-companion/tree/develop',
    },
    {
      id: 2,
      title: 'LLM-Powered Knowledge Graph For Research Discovery',
      description: 'An LLM-powered research discovery system that integrates Knowledge Graphs (Neo4j) with LLM agents to improve literature reviews.Enabled features like dataset recommendations, collaborator suggestions, citation reasoning, and context-aware summarization, producing more accurate and explainable insights than LLMs alone.',
      image: '/assets/projects/kgrag.png',
      tags: ['Large Language Model', 'Knowledge Graphs', 'Neo4j', 'Semantic Search','Graph-RAG','Research Discovery','Information retrieval'],
      liveUrl: 'https://drive.google.com/file/d/12B8uKSVEPvfZQrZrD1jwqZRyNBBt9GZd/view?usp=sharing',
      githubUrl: 'https://github.com/Simalhotra/Academic-Knowledge-Graph',
    },
    {
      id: 3,
      title: 'NFL Player Career Stats Explorer',
      description: 'A web app that lets fans, analysts, and fantasy players explore, compare, and analyze NFL careers using historical statistics from 1980–2024. By aggregating advanced metrics from multiple datasets, it helps users assess performance over time, spot trends, and make data-driven comparisons.The tool focuses on interactive analytics and dynamic visualizations, allowing users to explore trend graphs, apply flexible filters, and seamlessly search for any player, compare two side by side, or analyze team-level insights.',
      image: '/assets/projects/nfl.png',
      tags: ['MySQL', 'React', 'Google Cloud Platform','Database Design','ER Diagram'],
      liveUrl: 'https://drive.google.com/file/d/1JUBJhDO5Z-BYYV8eYqJUjlBQquSLJ_y2/view?usp=sharing',
      githubUrl: 'https://github.com/Simalhotra/sp25-cs411-team051-Alpha',
    },
    {
      id: 4,
      title: '5 Wise Analysis Agent',
      description: 'A multi-agent system built with LangGraph inspired by the 5 Whys methodology to automate root-cause analysis for AWS deal performance. The Supervisor Agent iteratively asks “why” to decompose complex questions into targeted sub-questions, while Analyst Agents retrieve and refine evidence from relevant datasets. This enables end-to-end analysis from a single natural-language prompt, reducing manual effort and accelerating decision-making.',
      image: 'https://images.unsplash.com/photo-1711599813951-89297e6201a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYwMTg1NDIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Python', 'AI Agents', 'LangGraph','Multi-Agent Systems','Root Cause Analysis','AWS'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-indigo-600 text-[36px] font-bold">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-gradient-to-r from-indigo-50 via-white to-purple-50 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="flex gap-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.liveUrl}
                      className="text-white hover:text-indigo-300 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-indigo-300 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-3 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
      liveUrl: '#',
      githubUrl: 'https://github.com/Simalhotra/Academic-Knowledge-Graph',
    },
    {
      id: 3,
      title: 'NFL Player Career Stats Explorer',
      description: 'Drag-and-drop portfolio builder with customizable templates and one-click deployment.',
      image: '/assets/projects/nfl.png',
      tags: ['MySQL', 'React', 'Google Cloud Platform'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Simalhotra/sp25-cs411-team051-Alpha',
    },
    {
      id: 4,
      title: '5 Wise Analysis Agent',
      description: 'AI-powered content creation tool for social media posts, blog articles, and marketing copy.',
      image: 'https://images.unsplash.com/photo-1711599813951-89297e6201a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYwMTg1NDIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Python', 'OpenAI', 'React'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-gray-900 text-[36px] font-bold">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
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
                      href={project.liveUrl}
                      className="text-white hover:text-indigo-300 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
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

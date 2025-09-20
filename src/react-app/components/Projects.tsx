import { ExternalLink, Github, TestTube, BarChart3, Code, Smartphone } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Testes Automatizados com Cypress',
      description: 'Suite completa de testes automatizados para aplicações web, incluindo testes de funcionalidade, responsividade e performance.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop&crop=center',
      tags: ['Cypress', 'JavaScript', 'QA', 'Automação'],
      icon: <TestTube className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Análise de Dados em RH com Power BI',
      description: 'Dashboard interativo para análise de métricas de RH, incluindo turnover, performance e satisfação dos funcionários.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center',
      tags: ['Power BI', 'DAX', 'Analytics', 'HR'],
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Sites para Academia, Barbearia e Restaurante',
      description: 'Desenvolvimento de sites responsivos e modernos para diferentes segmentos, com foco em conversão e experiência do usuário.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center',
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
      icon: <Code className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Dashboard Analytics com React e D3.js',
      description: 'Painel de analytics em tempo real com visualizações interativas e customizáveis para análise de dados complexos.',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop&crop=center',
      tags: ['React', 'D3.js', 'TypeScript', 'Charts'],
      icon: <Smartphone className="w-6 h-6" />,
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meus <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projetos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Confira alguns dos projetos que desenvolvi, demonstrando minha experiência em diferentes tecnologias e domínios
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute top-4 left-4 p-3 bg-gradient-to-r ${project.color} text-white rounded-lg`}>
                  {project.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    Ver Projeto
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                    <Github className="w-4 h-4" />
                    Código
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Interessado em ver mais trabalhos?</p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
            Ver Todos os Projetos no GitHub
          </button>
        </div>
      </div>
    </section>
  );
}

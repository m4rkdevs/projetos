import { Code, Users, TestTube, BarChart3, GraduationCap, Briefcase } from 'lucide-react';

export default function About() {
  const areas = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Desenvolvimento',
      description: 'HTML, CSS, JavaScript, React',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Suporte Técnico',
      description: 'Níveis N1/N2, atendimento, troubleshooting',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <TestTube className="w-8 h-8" />,
      title: 'QA / Testes',
      description: 'QA manual, automação com Cypress, testes de funcionalidades',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Analista de Dados',
      description: 'Power BI, dashboards, visualização, relatórios',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sobre <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mim</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça minha trajetória e as áreas onde atuo com paixão e dedicação
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Formação Acadêmica</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Formado em <strong>Análise e Desenvolvimento de Sistemas</strong> em 2025, 
                com foco em desenvolvimento de software, metodologias ágeis e garantia de qualidade. 
                Durante a graduação, desenvolvi projetos práticos que consolidaram minha base técnica 
                e despertaram minha paixão por tecnologia.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Briefcase className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Experiência Profissional</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Com experiência sólida em <strong>suporte técnico</strong> (níveis N1 e N2), 
                desenvolvi habilidades de resolução de problemas e atendimento ao cliente. 
                Como <strong>desenvolvedor freelancer</strong>, criei soluções web personalizadas, 
                enquanto minha atuação como <strong>analista de dados</strong> me permitiu 
                dominar ferramentas como Power BI para criação de dashboards e relatórios.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Minhas Áreas de Atuação</h3>
            
            {areas.map((area, index) => (
              <div key={index} className="group bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className={`p-3 bg-gradient-to-r ${area.color} text-white rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                    {area.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{area.title}</h4>
                    <p className="text-gray-600">{area.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">Minha Missão</h3>
          <p className="text-lg max-w-3xl mx-auto">
            Combinar desenvolvimento técnico de qualidade com testes rigorosos e análise de dados 
            estratégica para entregar soluções que realmente fazem a diferença na vida das pessoas 
            e no sucesso dos negócios.
          </p>
        </div>
      </div>
    </section>
  );
}

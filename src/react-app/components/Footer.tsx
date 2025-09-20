import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              DevMarco
            </div>
            <p className="text-gray-400 mb-4">
              Desenvolvedor FullStack & QA Specialist, criando soluções digitais de qualidade 
              com foco em testes e análise de dados.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-400 hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre" className="text-gray-400 hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#projetos" className="text-gray-400 hover:text-white transition-colors">Projetos</a></li>
              <li><a href="#contato" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Desenvolvimento Web</span></li>
              <li><span className="text-gray-400">Automação de Testes</span></li>
              <li><span className="text-gray-400">Análise de Dados</span></li>
              <li><span className="text-gray-400">Suporte Técnico</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 DevMarco. Todos os direitos reservados.
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              Desenvolvido com 
              <Heart className="w-4 h-4 text-red-500 fill-current" /> 
              por Marco Rodrigues
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

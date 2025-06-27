import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Hammer } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-wood-800 text-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-wood-600 rounded-lg">
                <Hammer className="h-6 w-6" />
              </div>
              <span className="font-display text-xl font-bold">
                Marcenaria Artesanal
              </span>
            </div>
            <p className="text-cream-200 text-sm leading-relaxed mb-4">
              Criando peças atemporais com paixão, precisão e respeito pela beleza natural da madeira. 
              Cada criação conta uma história única.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {[
                { name: 'Portfólio', path: '/portfolio' },
                { name: 'Sobre Nós', path: '/about' },
                { name: 'Serviços', path: '/services' },
                { name: 'Processo', path: '/blog' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-cream-200 hover:text-cream-50 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-cream-200 text-sm">
              <li>Móveis Personalizados</li>
              <li>Armários de Cozinha</li>
              <li>Restauração</li>
              <li>Móveis Planejados</li>
              <li>Oficinas</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-cream-300" />
                <span className="text-cream-200 text-sm">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-cream-300" />
                <span className="text-cream-200 text-sm">contato@marcenaria-artesanal.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-cream-300 mt-0.5" />
                <span className="text-cream-200 text-sm">
                  Rua dos Artesãos, 123<br />
                  São Paulo, SP 01234-567
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-wood-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-cream-300 text-sm">
            © {currentYear} Marcenaria Artesanal. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-cream-300 hover:text-cream-50 text-sm transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-cream-300 hover:text-cream-50 text-sm transition-colors">
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
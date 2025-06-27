import React, { useState } from 'react';
import { Gallery } from '../components/Gallery';

export const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = ['Todos', 'Móveis', 'Cozinha', 'Planejados', 'Restauração', 'Decoração'];

  const portfolioItems = [
    {
      id: 1,
      title: 'Mesa de Jantar Entalhada à Mão',
      category: 'Móveis',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Mesa de jantar em carvalho maciço com detalhes entalhados à mão e técnicas tradicionais de marcenaria. Acomoda 8 pessoas confortavelmente.'
    },
    {
      id: 2,
      title: 'Armários de Cozinha Personalizados',
      category: 'Cozinha',
      image: 'https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Cozinha moderna com armários personalizados em nogueira, dobradiças com fechamento suave e ferragens em latão.'
    },
    {
      id: 3,
      title: 'Restauração de Baú Vintage',
      category: 'Restauração',
      image: 'https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Baú antigo de cedro dos anos 1940, completamente restaurado com ferragens originais e novo acabamento.'
    },
    {
      id: 4,
      title: 'Mesa de Centro com Borda Viva',
      category: 'Móveis',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Prancha de nogueira com borda natural e pés de aço hairpin, destacando a beleza natural da madeira.'
    },
    {
      id: 5,
      title: 'Estante Planejada',
      category: 'Planejados',
      image: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Estante de biblioteca personalizada em cerejeira rica com prateleiras ajustáveis e iluminação oculta.'
    },
    {
      id: 6,
      title: 'Porta-Joias Artesanal',
      category: 'Decoração',
      image: 'https://images.pexels.com/photos/5876691/pexels-photo-5876691.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Porta-joias intrincado com múltiplos compartimentos, forro em veludo e juntas em cauda de andorinha.'
    },
    {
      id: 7,
      title: 'Ilha de Cozinha Rústica',
      category: 'Cozinha',
      image: 'https://images.pexels.com/photos/2343465/pexels-photo-2343465.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Ilha de cozinha rústica com tampo de açougueiro, armazenamento embutido e suportes estilo vintage.'
    },
    {
      id: 8,
      title: 'Cadeira Mid-Century Moderna',
      category: 'Móveis',
      image: 'https://images.pexels.com/photos/6782344/pexels-photo-6782344.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Cadeira de jantar em nogueira inspirada no design mid-century, com encosto curvado e assento estofado.'
    },
    {
      id: 9,
      title: 'Centro de Entretenimento Personalizado',
      category: 'Planejados',
      image: 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Centro de entretenimento embutido com gerenciamento de cabos, prateleiras ajustáveis e armazenamento oculto.'
    },
    {
      id: 10,
      title: 'Reparo de Cadeira de Balanço Antiga',
      category: 'Restauração',
      image: 'https://images.pexels.com/photos/5824897/pexels-photo-5824897.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Restauração de cadeira de balanço da era vitoriana com novo assento de palhinha e madeira original refinida.'
    },
    {
      id: 11,
      title: 'Arte de Parede em Madeira',
      category: 'Decoração',
      image: 'https://images.pexels.com/photos/6045182/pexels-photo-6045182.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Peça de arte de parede geométrica criada com várias espécies de madeira, destacando padrões naturais de veios.'
    },
    {
      id: 12,
      title: 'Porta-Temperos de Cozinha',
      category: 'Cozinha',
      image: 'https://images.pexels.com/photos/4113069/pexels-photo-4113069.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Porta-temperos de parede com compartimentos individuais para fácil organização e acesso.'
    }
  ];

  const filteredItems = selectedCategory === 'Todos' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header */}
      <section className="py-16 bg-wood-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-wood-800 mb-6">
            Nosso Portfólio
          </h1>
          <p className="text-lg text-wood-600 max-w-3xl mx-auto">
            Cada peça em nosso portfólio representa horas de trabalho artesanal cuidadoso, atenção aos detalhes 
            e um profundo respeito pela beleza natural da madeira. Navegue por nossa coleção para ver a variedade 
            de trabalhos personalizados que criamos.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-cream-50 border-b border-wood-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 font-medium ${
                  selectedCategory === category
                    ? 'bg-wood-600 text-cream-50 shadow-lg'
                    : 'bg-white text-wood-600 hover:bg-wood-100 border border-wood-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-wood-600">
              Mostrando {filteredItems.length} {filteredItems.length === 1 ? 'peça' : 'peças'}
              {selectedCategory !== 'Todos' && (
                <span> em <strong>{selectedCategory}</strong></span>
              )}
            </p>
          </div>
          <Gallery items={filteredItems} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-wood-800 text-cream-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Pronto para Encomendar Sua Própria Peça?
          </h2>
          <p className="text-lg mb-8 text-cream-200">
            Vamos discutir sua visão e criar algo único para seu espaço.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-cream-50 text-wood-800 rounded-lg hover:bg-cream-100 transition-all duration-300 font-semibold"
            >
              Iniciar Seu Projeto
            </a>
            <a
              href="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-cream-50 text-cream-50 rounded-lg hover:bg-cream-50 hover:text-wood-800 transition-all duration-300 font-semibold"
            >
              Conheça Nossos Serviços
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
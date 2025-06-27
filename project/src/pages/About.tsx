import React from 'react';
import { Award, Heart, Users, Leaf } from 'lucide-react';

export const About: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Paixão pelo Ofício',
      description: 'Cada peça é criada com genuíno amor pela marcenaria e respeito pelas técnicas tradicionais.'
    },
    {
      icon: Award,
      title: 'Excelência em Qualidade',
      description: 'Nunca comprometemos a qualidade, usando apenas os melhores materiais e métodos de construção testados pelo tempo.'
    },
    {
      icon: Users,
      title: 'Colaboração com Clientes',
      description: 'Sua visão guia nosso processo. Trabalhamos de perto com cada cliente para superar expectativas.'
    },
    {
      icon: Leaf,
      title: 'Sustentabilidade',
      description: 'Obtemos nossa madeira de forma responsável e praticamos marcenaria sustentável para as futuras gerações.'
    }
  ];

  const milestones = [
    { year: '2008', event: 'Fundação da Marcenaria Artesanal com paixão pelo artesanato tradicional' },
    { year: '2012', event: 'Expansão para incluir marcenaria personalizada de cozinha e móveis planejados' },
    { year: '2015', event: 'Abertura de oficina dedicada à restauração de peças antigas e relíquias de família' },
    { year: '2018', event: 'Lançamento de oficinas de marcenaria para compartilhar habilidades com a comunidade' },
    { year: '2020', event: 'Alcançamos operações neutras em carbono através de práticas sustentáveis' },
    { year: '2023', event: 'Celebramos 15 anos e mais de 1000 peças personalizadas criadas' }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-wood-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-wood-800 mb-6">
                Nossa História
              </h1>
              <p className="text-lg text-wood-600 mb-6 leading-relaxed">
                A Marcenaria Artesanal nasceu de uma crença simples: que móveis feitos à mão devem contar uma história, 
                durar gerações e celebrar a beleza natural da madeira. O que começou como uma oficina de uma pessoa 
                cresceu para se tornar um nome confiável em marcenaria personalizada.
              </p>
              <p className="text-lg text-wood-600 leading-relaxed">
                Fundada pelo mestre artesão Carlos Silva em 2008, nossa oficina combina técnicas tradicionais de marcenaria 
                com sensibilidades de design moderno. Cada peça que criamos é um testemunho da arte atemporal da marcenaria 
                e nosso compromisso com a excelência.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5711043/pexels-photo-5711043.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Mestre artesão trabalhando"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wood-900/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-wood-800 mb-6">
              Nossos Valores
            </h2>
            <p className="text-lg text-wood-600 max-w-2xl mx-auto">
              Estes princípios fundamentais guiam cada decisão que tomamos e cada peça que criamos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-wood-600 text-cream-50 rounded-full mb-6">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="font-display text-xl font-semibold text-wood-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-wood-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsman Profile */}
      <section className="py-20 bg-wood-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-wood-800 mb-6">
                Conheça o Artesão
              </h2>
              <div className="space-y-4 text-wood-600 leading-relaxed">
                <p>
                  <strong className="text-wood-800">Carlos Silva</strong> traz mais de 20 anos de experiência em marcenaria 
                  para cada projeto. Sua jornada começou como aprendiz em uma oficina tradicional de marcenaria japonesa, 
                  onde aprendeu a arte antiga de criar móveis sem pregos ou parafusos.
                </p>
                <p>
                  Após dominar as técnicas tradicionais, Carlos estudou design moderno de móveis e práticas sustentáveis 
                  de marcenaria. Esta combinação única de artesanato do velho mundo e inovação contemporânea 
                  define a abordagem da Marcenaria Artesanal.
                </p>
                <p>
                  Quando não está na oficina, Carlos ensina aulas de marcenaria e defende práticas sustentáveis 
                  de silvicultura. Ele acredita que trabalhar com madeira não é apenas uma profissão, mas uma 
                  responsabilidade de honrar as árvores que fornecem este material incrível.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-8">
                <div>
                  <div className="font-display text-2xl font-bold text-wood-800">20+</div>
                  <div className="text-wood-600">Anos de Experiência</div>
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-wood-800">1000+</div>
                  <div className="text-wood-600">Peças Criadas</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://images.pexels.com/photos/5711003/pexels-photo-5711003.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Carlos Silva trabalhando em sua oficina"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-wood-800 mb-6">
              Nossa Jornada
            </h2>
            <p className="text-lg text-wood-600">
              Marcos importantes no crescimento da Marcenaria Artesanal.
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-wood-600 text-cream-50 rounded-full flex items-center justify-center font-display font-bold">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <p className="text-wood-700 leading-relaxed text-lg">
                    {milestone.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Tour CTA */}
      <section className="py-20 bg-wood-800 text-cream-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Visite Nossa Oficina
          </h2>
          <p className="text-lg mb-8 text-cream-200">
            Experimente a arte da marcenaria em primeira mão. Agende uma visita à oficina para ver nosso processo 
            e discutir suas ideias de projetos personalizados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-cream-50 text-wood-800 rounded-lg hover:bg-cream-100 transition-all duration-300 font-semibold"
            >
              Agendar uma Visita
            </a>
            <a
              href="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-cream-50 text-cream-50 rounded-lg hover:bg-cream-50 hover:text-wood-800 transition-all duration-300 font-semibold"
            >
              Ver Nossos Serviços
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
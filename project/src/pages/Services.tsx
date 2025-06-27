import React from 'react';
import { Hammer, Home, RotateCcw, Wrench, GraduationCap, Ruler } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: Hammer,
      title: 'Móveis Personalizados',
      description: 'Mesas, cadeiras, camas e soluções de armazenamento feitas à mão, projetadas especificamente para seu espaço e estilo.',
      features: ['Mesas e cadeiras de jantar', 'Móveis de quarto', 'Peças para sala de estar', 'Soluções de armazenamento'],
      startingPrice: 'A partir de R$ 800'
    },
    {
      icon: Home,
      title: 'Armários de Cozinha',
      description: 'Transforme sua cozinha com marcenaria personalizada que combina beleza, funcionalidade e qualidade duradoura.',
      features: ['Design personalizado de armários', 'Ferragens com fechamento suave', 'Molduras e acabamentos', 'Gavetas deslizantes'],
      startingPrice: 'A partir de R$ 15.000'
    },
    {
      icon: Ruler,
      title: 'Móveis Planejados',
      description: 'Maximize seu espaço com móveis planejados que se integram perfeitamente à arquitetura da sua casa.',
      features: ['Estantes e prateleiras', 'Centros de entretenimento', 'Bancos de janela', 'Móveis de escritório'],
      startingPrice: 'A partir de R$ 2.500'
    },
    {
      icon: RotateCcw,
      title: 'Serviços de Restauração',
      description: 'Dê nova vida a antiguidades queridas e relíquias de família com técnicas especializadas de restauração.',
      features: ['Reparo de móveis antigos', 'Serviços de refinamento', 'Restauração de ferragens', 'Reparos estruturais'],
      startingPrice: 'A partir de R$ 300'
    },
    {
      icon: Wrench,
      title: 'Reparo e Manutenção',
      description: 'Mantenha seus móveis de madeira com a melhor aparência e funcionamento com serviços profissionais de reparo.',
      features: ['Reparo de juntas', 'Refinamento de superfícies', 'Substituição de ferragens', 'Manutenção preventiva'],
      startingPrice: 'A partir de R$ 150'
    },
    {
      icon: GraduationCap,
      title: 'Oficinas de Marcenaria',
      description: 'Aprenda técnicas tradicionais de marcenaria em aulas práticas adequadas para todos os níveis de habilidade.',
      features: ['Aulas para iniciantes', 'Técnicas avançadas', 'Treinamento de uso de ferramentas', 'Instrução de segurança'],
      startingPrice: 'A partir de R$ 120'
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Consulta Inicial',
      description: 'Discutimos sua visão, requisitos e orçamento para entender os objetivos do seu projeto.',
      duration: '1-2 horas'
    },
    {
      step: 2,
      title: 'Design e Planejamento',
      description: 'Desenhos detalhados e seleção de materiais garantem que sua peça atenda às suas especificações exatas.',
      duration: '1-2 semanas'
    },
    {
      step: 3,
      title: 'Obtenção de Materiais',
      description: 'Selecionamos cuidadosamente madeira premium e ferragens que atendam aos requisitos do seu projeto.',
      duration: '1-3 semanas'
    },
    {
      step: 4,
      title: 'Processo de Criação',
      description: 'Sua peça é trabalhada à mão usando técnicas tradicionais e ferramentas de precisão modernas.',
      duration: '2-12 semanas'
    },
    {
      step: 5,
      title: 'Toques Finais',
      description: 'Múltiplas camadas de acabamento são aplicadas e polidas à mão para alcançar a aparência perfeita.',
      duration: '1-2 semanas'
    },
    {
      step: 6,
      title: 'Entrega e Instalação',
      description: 'Entregamos e instalamos cuidadosamente sua peça finalizada, garantindo o posicionamento perfeito.',
      duration: '1 dia'
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header */}
      <section className="py-16 bg-wood-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-wood-800 mb-6">
            Nossos Serviços
          </h1>
          <p className="text-lg text-wood-600 max-w-3xl mx-auto">
            De móveis personalizados a serviços de restauração, oferecemos soluções abrangentes de marcenaria 
            adaptadas às suas necessidades. Cada projeto recebe a mesma atenção aos detalhes e compromisso com a excelência.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-wood-600 text-cream-50 rounded-lg mr-4">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-wood-800">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-wood-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-wood-600">
                      <div className="w-2 h-2 bg-wood-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="border-t border-wood-200 pt-4">
                  <p className="font-semibold text-wood-800">{service.startingPrice}</p>
                  <p className="text-sm text-wood-500">Preço final depende das especificações</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-wood-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-wood-800 mb-6">
              Nosso Processo
            </h2>
            <p className="text-lg text-wood-600 max-w-2xl mx-auto">
              Cada projeto segue nosso processo comprovado para garantir resultados excepcionais e satisfação do cliente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-wood-600 text-cream-50 rounded-full flex items-center justify-center font-bold mr-4">
                      {step.step}
                    </div>
                    <h3 className="font-display text-lg font-semibold text-wood-800">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-wood-600 mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="text-sm text-wood-500 font-medium">
                    Duração: {step.duration}
                  </div>
                </div>
                
                {/* Connection line for larger screens */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-wood-300 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wood Species Section */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-wood-800 mb-6">
              Espécies de Madeira Premium
            </h2>
            <p className="text-lg text-wood-600 max-w-2xl mx-auto">
              Trabalhamos com uma gama cuidadosamente selecionada de madeiras nacionais e exóticas, 
              cada uma escolhida por seu caráter único e durabilidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Nogueira', characteristics: 'Tons ricos de chocolate, excelente trabalhabilidade' },
              { name: 'Carvalho', characteristics: 'Padrão de veios forte, favorito tradicional' },
              { name: 'Cerejeira', characteristics: 'Tons avermelhados quentes, envelhece lindamente' },
              { name: 'Bordo', characteristics: 'Cor clara, veios apertados, muito durável' },
              { name: 'Mogno', characteristics: 'Marrom-avermelhado profundo, aparência luxuosa' },
              { name: 'Cedro', characteristics: 'Resistência natural a pragas, aromático' },
              { name: 'Pinho', characteristics: 'Madeira clara, opção econômica' },
              { name: 'Espécies Exóticas', characteristics: 'Veios e cores únicos disponíveis' }
            ].map((wood, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="font-display text-lg font-semibold text-wood-800 mb-3">
                  {wood.name}
                </h3>
                <p className="text-wood-600 text-sm leading-relaxed">
                  {wood.characteristics}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-wood-800 text-cream-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Pronto para Iniciar Seu Projeto?
          </h2>
          <p className="text-lg mb-8 text-cream-200">
            Vamos discutir sua visão e criar um orçamento personalizado para seu projeto de marcenaria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-cream-50 text-wood-800 rounded-lg hover:bg-cream-100 transition-all duration-300 font-semibold"
            >
              Consulta Gratuita
            </a>
            <a
              href="/portfolio"
              className="inline-flex items-center px-8 py-4 border-2 border-cream-50 text-cream-50 rounded-lg hover:bg-cream-50 hover:text-wood-800 transition-all duration-300 font-semibold"
            >
              Ver Nossos Trabalhos
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
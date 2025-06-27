import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Award, Users, Clock } from 'lucide-react';
import { Gallery } from '../components/Gallery';
import { TestimonialCard } from '../components/TestimonialCard';

export const Home: React.FC = () => {
  const featuredWorks = [
    {
      id: 1,
      title: 'Mesa de Jantar Entalhada à Mão',
      category: 'Móveis',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Mesa de jantar em carvalho maciço com detalhes entalhados à mão'
    },
    {
      id: 2,
      title: 'Armários de Cozinha Personalizados',
      category: 'Cozinha',
      image: 'https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Cozinha moderna com armários personalizados em nogueira e ferragens em latão'
    },
    {
      id: 3,
      title: 'Restauração de Baú Vintage',
      category: 'Restauração',
      image: 'https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Baú antigo de cedro restaurado e devolvido à vida'
    },
    {
      id: 4,
      title: 'Mesa de Centro com Borda Viva',
      category: 'Móveis',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Prancha de nogueira com borda natural e pés de aço hairpin'
    },
    {
      id: 5,
      title: 'Estante Planejada',
      category: 'Planejados',
      image: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Estante de biblioteca personalizada em cerejeira rica'
    },
    {
      id: 6,
      title: 'Porta-Joias Artesanal',
      category: 'Decoração',
      image: 'https://images.pexels.com/photos/5876691/pexels-photo-5876691.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Porta-joias intrincado com compartimentos forrados em veludo'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Maria Silva',
      role: 'Proprietária',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'A mesa de jantar personalizada superou nossas expectativas. O trabalho artesanal é incrível e se tornou a peça central da nossa casa.',
      rating: 5
    },
    {
      id: 2,
      name: 'João Santos',
      role: 'Dono de Restaurante',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'Trabalhar com a Marcenaria Artesanal transformou nosso restaurante. Os móveis personalizados combinam perfeitamente com nossa visão e marca.',
      rating: 5
    },
    {
      id: 3,
      name: 'Ana Rodriguez',
      role: 'Designer de Interiores',
      image: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'Já colaborei com muitos artesãos, mas a atenção aos detalhes e visão artística aqui é verdadeiramente excepcional.',
      rating: 5
    }
  ];

  const stats = [
    { icon: Award, label: 'Anos de Experiência', value: '15+' },
    { icon: Users, label: 'Clientes Satisfeitos', value: '500+' },
    { icon: Star, label: 'Peças Personalizadas', value: '1000+' },
    { icon: Clock, label: 'Horas de Trabalho', value: '10.000+' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/5711043/pexels-photo-5711043.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-wood-900/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-cream-50 max-w-4xl mx-auto px-4">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            Artesanato com
            <span className="block text-cream-200">Paixão & Precisão</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Cada peça conta uma história. De móveis personalizados a projetos de restauração, 
            criamos obras atemporais que celebram a beleza natural da madeira.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Link
              to="/portfolio"
              className="inline-flex items-center px-8 py-4 bg-wood-600 text-cream-50 rounded-lg hover:bg-wood-500 transition-all duration-300 font-semibold group"
            >
              Ver Nossos Trabalhos
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-cream-50 text-cream-50 rounded-lg hover:bg-cream-50 hover:text-wood-900 transition-all duration-300 font-semibold"
            >
              Iniciar Seu Projeto
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-wood-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-wood-600 text-cream-50 rounded-full mb-4">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="font-display text-3xl font-bold text-wood-800 mb-2">
                  {stat.value}
                </div>
                <div className="text-wood-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Gallery */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-wood-800 mb-4">
              Criações em Destaque
            </h2>
            <p className="text-lg text-wood-600 max-w-2xl mx-auto">
              Cada peça é cuidadosamente trabalhada com atenção aos detalhes e respeito pelo caráter natural da madeira.
            </p>
          </div>
          <Gallery items={featuredWorks} />
          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center px-8 py-4 bg-wood-600 text-cream-50 rounded-lg hover:bg-wood-500 transition-all duration-300 font-semibold group"
            >
              Ver Portfólio Completo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="py-20 bg-wood-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-wood-800 mb-6">
                Do Conceito à Criação
              </h2>
              <p className="text-lg text-wood-600 mb-8 leading-relaxed">
                Nosso processo começa entendendo sua visão e termina com uma peça que supera suas expectativas. 
                Cada etapa é guiada pelo artesanato, criatividade e colaboração.
              </p>
              <div className="space-y-4">
                {[
                  'Consulta inicial e design',
                  'Seleção e preparação da madeira',
                  'Construção artesanal',
                  'Acabamento e inspeção de qualidade'
                ].map((step, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-wood-600 text-cream-50 rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <span className="text-wood-700">{step}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/blog"
                className="inline-flex items-center mt-8 text-wood-600 hover:text-wood-800 font-semibold group"
              >
                Ver Nosso Processo
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5711003/pexels-photo-5711003.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Artesão trabalhando na madeira"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wood-900/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-wood-800 mb-4">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-lg text-wood-600 max-w-2xl mx-auto">
              Os relacionamentos que construímos são tão importantes quanto as peças que criamos.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-wood-800 text-cream-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Pronto para Iniciar Seu Projeto Personalizado?
          </h2>
          <p className="text-lg mb-8 text-cream-200">
            Vamos dar vida à sua visão com qualidade artesanal que dura gerações.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-cream-50 text-wood-800 rounded-lg hover:bg-cream-100 transition-all duration-300 font-semibold group"
          >
            Comece Hoje
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};
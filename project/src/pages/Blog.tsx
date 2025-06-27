import React from 'react';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

export const Blog: React.FC = () => {
  const featuredPost = {
    id: 1,
    title: 'A Arte das Juntas de Cauda de Andorinha Feitas à Mão',
    excerpt: 'Descubra a técnica tradicional que tem sido a marca registrada de móveis finos por séculos...',
    content: 'As juntas de cauda de andorinha feitas à mão representam o ápice do artesanato em marcenaria. Esta técnica consagrada pelo tempo requer paciência, precisão e anos de prática para dominar.',
    image: 'https://images.pexels.com/photos/5711043/pexels-photo-5711043.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Carlos Silva',
    date: '2024-01-15',
    readTime: '8 min de leitura',
    category: 'Técnicas'
  };

  const blogPosts = [
    {
      id: 2,
      title: 'Escolhendo a Madeira Certa para Seu Projeto',
      excerpt: 'Entender as espécies de madeira e suas características é crucial para qualquer projeto de marcenaria bem-sucedido.',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Carlos Silva',
      date: '2024-01-10',
      readTime: '6 min de leitura',
      category: 'Materiais'
    },
    {
      id: 3,
      title: 'Restaurando um Baú de Carvalho de 100 Anos',
      excerpt: 'Acompanhe nosso processo passo a passo de dar nova vida a uma relíquia de família.',
      image: 'https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Carlos Silva',
      date: '2024-01-05',
      readTime: '12 min de leitura',
      category: 'Restauração'
    },
    {
      id: 4,
      title: 'Ferramentas Manuais Essenciais para Iniciantes',
      excerpt: 'Montando seu primeiro kit de ferramentas? Aqui estão as ferramentas indispensáveis para começar sua jornada na marcenaria.',
      image: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Carlos Silva',
      date: '2023-12-28',
      readTime: '10 min de leitura',
      category: 'Ferramentas'
    },
    {
      id: 5,
      title: 'Práticas Sustentáveis de Marcenaria',
      excerpt: 'Como obtemos nossos materiais de forma responsável e minimizamos o desperdício em nossa oficina.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Carlos Silva',
      date: '2023-12-20',
      readTime: '7 min de leitura',
      category: 'Sustentabilidade'
    },
    {
      id: 6,
      title: 'Do Esboço à Peça Finalizada: Processo de Design',
      excerpt: 'Dê uma olhada nos bastidores de como transformamos ideias em móveis belos e funcionais.',
      image: 'https://images.pexels.com/photos/5711003/pexels-photo-5711003.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Carlos Silva',
      date: '2023-12-15',
      readTime: '9 min de leitura',
      category: 'Processo'
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Consulta e Design',
      description: 'Começamos entendendo sua visão, medindo o espaço e criando esboços detalhados.',
      image: 'https://images.pexels.com/photos/7218556/pexels-photo-7218556.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      step: 2,
      title: 'Seleção da Madeira',
      description: 'Escolhemos cuidadosamente a espécie perfeita baseada nos veios, cor e requisitos de durabilidade.',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      step: 3,
      title: 'Corte de Precisão',
      description: 'Usando tanto ferramentas manuais tradicionais quanto maquinário moderno para cortes precisos e limpos.',
      image: 'https://images.pexels.com/photos/5711012/pexels-photo-5711012.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      step: 4,
      title: 'Marcenaria e Montagem',
      description: 'Criando juntas fortes e belas que durarão por gerações.',
      image: 'https://images.pexels.com/photos/5711043/pexels-photo-5711043.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      step: 5,
      title: 'Lixamento e Preparação',
      description: 'Múltiplas etapas de lixamento para alcançar uma superfície perfeitamente lisa.',
      image: 'https://images.pexels.com/photos/5876691/pexels-photo-5876691.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      step: 6,
      title: 'Toques Finais',
      description: 'Aplicando o acabamento perfeito para proteger e realçar a beleza natural da madeira.',
      image: 'https://images.pexels.com/photos/5711003/pexels-photo-5711003.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const categories = ['Todos', 'Técnicas', 'Materiais', 'Ferramentas', 'Processo', 'Restauração', 'Sustentabilidade'];

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header */}
      <section className="py-16 bg-wood-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-wood-800 mb-6">
            Processo e Insights
          </h1>
          <p className="text-lg text-wood-600 max-w-3xl mx-auto">
            Vá por trás das cenas de nossa oficina e aprenda sobre técnicas tradicionais de marcenaria, 
            nosso processo criativo e as histórias por trás de cada peça que criamos.
          </p>
        </div>
      </section>

      {/* Our Process Timeline */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-wood-800 mb-6">
              Nosso Processo Artesanal
            </h2>
            <p className="text-lg text-wood-600 max-w-2xl mx-auto">
              Cada peça segue nosso processo testado pelo tempo, combinando artesanato tradicional com precisão moderna.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 w-8 h-8 bg-wood-600 text-cream-50 rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold text-wood-800 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-wood-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog Post */}
      <section className="py-20 bg-wood-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-wood-600 text-cream-50 px-3 py-1 rounded-full text-sm font-medium">
                  Em Destaque
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 text-sm text-wood-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(featuredPost.date).toLocaleDateString('pt-BR')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-wood-800 mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-wood-600 mb-6 leading-relaxed">
                  {featuredPost.content}
                </p>
                <button className="inline-flex items-center text-wood-600 hover:text-wood-800 font-semibold group">
                  Ler Artigo Completo
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-wood-800 mb-6">
              Artigos Recentes
            </h2>
            <p className="text-lg text-wood-600 max-w-2xl mx-auto">
              Explore nossa coleção de artigos cobrindo técnicas, dicas e histórias da oficina.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border border-wood-300 text-wood-600 hover:bg-wood-600 hover:text-cream-50 transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-wood-600 text-cream-50 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-wood-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-wood-800 mb-3 hover:text-wood-600 transition-colors">
                    <a href="#" className="block">
                      {post.title}
                    </a>
                  </h3>
                  <p className="text-wood-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <button className="inline-flex items-center text-wood-600 hover:text-wood-800 font-medium group">
                    Ler Mais
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-wood-800 text-cream-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Mantenha-se Atualizado com Nossos Últimos Trabalhos
          </h2>
          <p className="text-cream-200 mb-8">
            Inscreva-se em nossa newsletter para dicas de marcenaria, conteúdo dos bastidores e atualizações sobre novas peças.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Digite seu email"
              className="flex-1 px-4 py-3 rounded-lg text-wood-800 focus:ring-2 focus:ring-cream-300 focus:outline-none"
            />
            <button className="px-6 py-3 bg-cream-50 text-wood-800 rounded-lg hover:bg-cream-100 transition-colors font-semibold whitespace-nowrap">
              Inscrever-se
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
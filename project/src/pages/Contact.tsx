import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    timeline: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after successful submission
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        timeline: '',
        budget: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      detail: '(11) 99999-9999',
      description: 'Ligue durante o horário comercial'
    },
    {
      icon: Mail,
      title: 'Email',
      detail: 'contato@marcenaria-artesanal.com',
      description: 'Respondemos em até 24 horas'
    },
    {
      icon: MapPin,
      title: 'Oficina',
      detail: 'Rua dos Artesãos, 123, São Paulo, SP 01234-567',
      description: 'Visitas apenas com agendamento'
    },
    {
      icon: Clock,
      title: 'Horário',
      detail: 'Seg-Sex: 8h-18h, Sáb: 9h-16h',
      description: 'Fechado aos domingos'
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-20 pb-16 flex items-center justify-center bg-cream-50">
        <div className="max-w-md mx-auto text-center px-4">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <CheckCircle className="h-16 w-16 text-forest-600 mx-auto mb-6" />
            <h2 className="font-display text-2xl font-bold text-wood-800 mb-4">
              Obrigado!
            </h2>
            <p className="text-wood-600 mb-6">
              Sua mensagem foi recebida. Entraremos em contato em até 24 horas para discutir seu projeto.
            </p>
            <div className="animate-pulse">
              <div className="h-2 bg-forest-200 rounded-full">
                <div className="h-2 bg-forest-600 rounded-full w-full transition-all duration-3000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header */}
      <section className="py-16 bg-wood-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-wood-800 mb-6">
            Vamos Criar Juntos
          </h1>
          <p className="text-lg text-wood-600 max-w-3xl mx-auto">
            Pronto para dar vida à sua visão? Entre em contato conosco para discutir seu projeto de marcenaria personalizada. 
            Estamos aqui para responder suas perguntas e fornecer orientação especializada em cada etapa do caminho.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="font-display text-2xl font-bold text-wood-800 mb-8">
              Entre em Contato
            </h2>
            
            <div className="space-y-8 mb-12">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-wood-600 text-cream-50 rounded-lg flex items-center justify-center">
                    <info.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-wood-800 mb-1">{info.title}</h3>
                    <p className="text-wood-700 font-medium mb-1">{info.detail}</p>
                    <p className="text-wood-600 text-sm">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Workshop Image */}
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/5711003/pexels-photo-5711003.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Nossa oficina"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wood-900/60 to-transparent">
                <div className="absolute bottom-4 left-4 text-cream-50">
                  <h3 className="font-display text-xl font-semibold mb-2">Visite Nossa Oficina</h3>
                  <p className="text-cream-200">Agende uma visita para ver nosso processo de perto</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="font-display text-2xl font-bold text-wood-800 mb-6">
                Inicie Seu Projeto
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-wood-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-wood-300 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent transition-colors"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-wood-700 mb-2">
                      Endereço de Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-wood-300 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-wood-700 mb-2">
                    Número de Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-wood-300 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent transition-colors"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-wood-700 mb-2">
                      Tipo de Projeto *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-wood-300 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Selecione o tipo de projeto</option>
                      <option value="moveis-personalizados">Móveis Personalizados</option>
                      <option value="armarios-cozinha">Armários de Cozinha</option>
                      <option value="moveis-planejados">Móveis Planejados</option>
                      <option value="restauracao">Restauração</option>
                      <option value="reparo">Reparo e Manutenção</option>
                      <option value="oficina">Aulas de Oficina</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-wood-700 mb-2">
                      Prazo Desejado
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-wood-300 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Selecione o prazo</option>
                      <option value="urgente">O mais rápido possível (Urgente)</option>
                      <option value="1-mes">Dentro de 1 mês</option>
                      <option value="2-3-meses">2-3 meses</option>
                      <option value="3-6-meses">3-6 meses</option>
                      <option value="flexivel">Flexível</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-wood-700 mb-2">
                    Faixa de Orçamento
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-wood-300 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Selecione a faixa de orçamento</option>
                    <option value="ate-1000">Até R$ 1.000</option>
                    <option value="1000-5000">R$ 1.000 - R$ 5.000</option>
                    <option value="5000-15000">R$ 5.000 - R$ 15.000</option>
                    <option value="15000-mais">R$ 15.000+</option>
                    <option value="discutir">Prefiro discutir</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-wood-700 mb-2">
                    Detalhes do Projeto *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-wood-300 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent transition-colors"
                    placeholder="Por favor, descreva seu projeto, incluindo dimensões, preferências de estilo e quaisquer requisitos específicos..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-wood-600 text-cream-50 py-4 px-6 rounded-lg font-semibold hover:bg-wood-500 focus:ring-2 focus:ring-wood-500 focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-cream-50"></div>
                      <span>Enviando Mensagem...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Enviar Mensagem</span>
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-wood-600">
                  * Campos obrigatórios. Responderemos em até 24 horas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
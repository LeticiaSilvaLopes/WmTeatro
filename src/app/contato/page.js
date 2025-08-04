"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    escola: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada! Entraremos em contato em breve.');
    console.log('Dados do formulário:', formData);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <motion.section 
        className="bg-black py-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent leading-relaxed"
            style={{
              backgroundImage: 'linear-gradient(45deg, #667eea, #764ba2, #f093fb)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ENTRE EM CONTATO
          </motion.h1>
          <motion.p 
            className="text-xl md:text-3xl mb-8 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Agende uma Apresentação para sua Escola
          </motion.p>
          <motion.p 
            className="text-lg max-w-4xl mx-auto text-purple-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Transforme o aprendizado dos seus alunos com nossos espetáculos educativos. 
            Preencha o formulário abaixo e nossa equipe entrará em contato.
          </motion.p>
        </div>
      </motion.section>

      {/* Formulário e Informações Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            
            {/* Bloco do Formulário */}
            <motion.div 
              className="flex"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative group w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-black rounded-lg border border-purple-800 h-full flex flex-col p-8">
                  
                  <h2 className="text-3xl font-bold text-white mb-8 text-center">
                    Solicite um Orçamento
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6 flex-1">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black border border-purple-400 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black border border-purple-400 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black border border-purple-400 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Nome da Escola
                      </label>
                      <input
                        type="text"
                        name="escola"
                        value={formData.escola}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black border border-purple-400 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Mensagem
                      </label>
                      <textarea
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-black border border-purple-400 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all resize-none"
                        placeholder="Conte-nos sobre sua escola e qual espetáculo tem interesse..."
                      ></textarea>
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Enviar Mensagem
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Bloco das Informações */}
            <motion.div 
              className="flex"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative group w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-black rounded-lg border border-purple-800 h-full flex flex-col p-8">
                  
                  {/* Informações de Contato */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">
                      Informações de Contato
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-center">
                        <span className="text-purple-400 mr-3 text-xl">📧</span>
                        <span className="text-white">wmteatro@gmail.com</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <span className="text-purple-400 mr-3 text-xl">📱</span>
                        <span className="text-white">(13) 99642-1728</span>
                      </div>
                    </div>
                  </div>

                  {/* Redes Sociais */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-white mb-6 text-center">
                      Siga-nos nas Redes Sociais
                    </h3>
                    <div className="flex justify-center space-x-6">
                      {/* Facebook */}
                      <a 
                        href="https://www.facebook.com/share/19TvE5DcQw/" 
                         
                        rel="noopener noreferrer"
                        className="group"
                      >
                        <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors group-hover:scale-110 transform duration-200">
                          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                        </div>
                      </a>

                      {/* Instagram */}
                      <a 
                        href="https://www.instagram.com/wmteatro?igsh=aWFzdWxnbDJtbjQ1" 
                         
                        rel="noopener noreferrer"
                        className="group"
                      >
                        <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all group-hover:scale-110 transform duration-200">
                        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </div>
                      </a>

                      {/* WhatsApp */}
                      <a 
                        href="https://wa.me/message/AT54WFKGOHOSO1" 
                         
                        rel="noopener noreferrer"
                        className="group"
                      >
                        <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors group-hover:scale-110 transform duration-200">
                          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Por que escolher */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-4 text-center">
                      Por que escolher nossos espetáculos?
                    </h3>
                    <ul className="space-y-3 text-white">
                      <li className="flex items-center">
                        <span className="text-purple-400 mr-3">✓</span>
                        Conteúdo educativo de qualidade
                      </li>
                      <li className="flex items-center">
                        <span className="text-purple-400 mr-3">✓</span>
                        Adequado para diferentes faixas etárias
                      </li>
                      <li className="flex items-center">
                        <span className="text-purple-400 mr-3">✓</span>
                        Profissionais experientes
                      </li>
                      <li className="flex items-center">
                        <span className="text-purple-400 mr-3">✓</span>
                        Material de apoio pedagógico
                      </li>
                      <li className="flex items-center">
                        <span className="text-purple-400 mr-3">✓</span>
                        Preços acessíveis
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
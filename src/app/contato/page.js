"use client";

import { useState } from 'react';

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
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h1>
          <p className="text-lg text-gray-600">
            Agende uma apresentação para sua escola
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Solicite um Orçamento
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome da Escola
                </label>
                <input
                  type="text"
                  name="escola"
                  value={formData.escola}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Conte-nos sobre sua escola e qual espetáculo tem interesse..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-purple-600 mr-3">📧</span>
                  <span>contato@wmteatro.com.br</span>
                </div>
                <div className="flex items-center">
                  <span className="text-purple-600 mr-3">📱</span>
                  <span>(11) 99999-9999</span>
                </div>
                <div className="flex items-center">
                  <span className="text-purple-600 mr-3">📍</span>
                  <span>São Paulo, SP</span>
                </div>
              </div>
            </div>

            <div className="bg-purple-100 rounded-lg p-8">
              <h3 className="text-xl font-bold text-purple-800 mb-4">
                Por que escolher nossos espetáculos?
              </h3>
              <ul className="space-y-2 text-purple-700">
                <li>✓ Conteúdo educativo de qualidade</li>
                <li>✓ Adequado para diferentes faixas etárias</li>
                <li>✓ Profissionais experientes</li>
                <li>✓ Material de apoio pedagógico</li>
                <li>✓ Preços acessíveis</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
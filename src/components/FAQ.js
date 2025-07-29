"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function FAQ({ bgColor = "bg-black" }) {
  const [openFaq, setOpenFaq] = useState(null);

  // FAQ geral fixo para todas as páginas
  const faqItems = [
    {
      question: "Como posso contratar um espetáculo?",
      answer: "Entre em contato conosco através do formulário ou pelos nossos canais de comunicação. Faremos um orçamento personalizado para seu evento."
    },
    {
      question: "Qual o espaço necessário para as apresentações?",
      answer: "Geralmente precisamos de um espaço mínimo de 4x4 metros, com acesso à energia elétrica. Alguns espetáculos podem ter necessidades específicas."
    },
    {
      question: "As apresentações são adequadas para que idades?",
      answer: "Nossos espetáculos são classificados por faixa etária. A maioria é adequada para crianças a partir de 4 anos, mas temos opções para todas as idades."
    },
    {
      question: "Quanto tempo duram os espetáculos?",
      answer: "A duração varia entre 30 a 50 minutos, dependendo do espetáculo escolhido e da interação com o público."
    },
    {
      question: "Vocês se apresentam em qualquer lugar?",
      answer: "Sim! Levamos nossos espetáculos para escolas, teatros, eventos corporativos, festas e qualquer local adequado para a apresentação."
    },
    {
      question: "Os espetáculos têm mensagem educativa?",
      answer: "Sim! Todos nossos espetáculos abordam temas importantes como meio ambiente, valores sociais, cultura e educação de forma lúdica e divertida."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className={`py-20 ${bgColor}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-white">PERGUNTAS FREQUENTES</h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-black rounded-lg border border-gray-700">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-800 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-white font-medium">{item.question}</span>
                  <svg 
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
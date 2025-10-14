"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function FAQ({ bgColor = "bg-black" }) {
  const [openFaq, setOpenFaq] = useState(null);

  // FAQ geral fixo para todas as páginas
  const faqItems = [
    {
      question: "Em qual local apresentamos?",
      answer: "Dentro da escola, em locais cobertos, com tomadas, por exemplo, salas de aula, quadras, auditórios, anfiteatros entre outros."
    },
    {
      question: "O espetáculo é remunerado?",
      answer: "Sim, podendo ser cobrado por pessoa ou com pacote fechado, porém não é cobrado nenhum tipo de sinal antecipado."
    },
    {
      question: "Qual a duração de cada espetáculo?",
      answer: "Em média duração é de 45 minutos podendo variar de acordo com a interação do público."
    },
    {
      question: "O espetáculo é adaptável para cada idade?",
      answer: "Sim, para os espetáculos infantis recomenda-se as cidades entre dois e 14 anos. As turmas podem ser divididas de acordo com cada idade e o texto será adaptado para cada turma."
    },
    {
      question: "Os professores pagam?",
      answer: "Dentro da escola os professores são cortesia."
    },
    {
      question: "É oferecido algum tipo de cortesia?",
      answer: "Os filhos dos professores são convidados e possuem direito a cortesia sendo necessária apenas que a escola comunica a quantidade antecipadamente."
    },
    {
      question: "Vocês têm equipamento próprio?",
      answer: "Sim a companhia conta com o equipamento profissional desde caixas de som microfone esse efeito de luz e fumaça unindo a tecnologia de hologramas ao teatro tradicional com cenário expansível."
    },
    {
      question: "Quando deve ser feito o pagamento?",
      answer: "Após a última sessão administradora do grupo fará o acerto junto ao responsável financeiro contratante."
    },
    {
      question: "Quanto tempo leva para fazer a montagem do cenário?",
      answer: "A equipe leva por volta de 2 horas para realizar a montagem técnica. E o mesmo tempo para desmontagem."
    },
    {
      question: "A companhia emite nota fiscal?",
      answer: "Sim podemos fazer a nota fiscal quando solicitado pelo cliente."
    },
    {
      question: "Em quais escolas vocês atendem?",
      answer: "Escolas com ensino infantil e fundamental 1 podendo ser particular instituições ou teatro. O processo de setor público educacional envolve maior burocracia sendo necessária a contratação via prefeitura ou autorização da secretaria de educação."
    },
    {
      question: "Quais os assuntos são abordados nos espetáculos?",
      answer: "Todos os espetáculos da wm buscam abordar temas pedagógicos e de interesse escolar como preservação do meio ambiente, ecologia incentivo à leitura cultura tradicional brasileira e temas sociais como bullying, empatia e a popularização do teatro."
    },
    {
      question: "Qual a classificação dos espetáculos?",
      answer: "Classificação livre."
    },
    {
      question: "Qual o gênero dos espetáculos?",
      answer: "Teatro infantil / educacional."
    },
    {
      question: "Quais os atrativos para crianças menores?",
      answer: "Cenário colorido, elementos em neon, figurinos chamativos, fantoches, bonecos, trilha sonora envolvente, interação com o público."
    },
    {
      question: "É necessário disponibilizar algum tipo de camarim ou vestuário?",
      answer: "Não, a companhia integra junto ao cenário o camarim."
    },
    {
      question: "Existe algum tipo de contrato?",
      answer: "Sim, é feito um contrato para reservar a data e firmar as condições de ambas as partes como horários, valores e afins."
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
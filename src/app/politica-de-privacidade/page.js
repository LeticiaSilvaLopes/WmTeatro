"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

export default function PoliticaDePrivacidade() {
  const [selectedMedia, setSelectedMedia] = useState(null);

  // Array de mídia específico desta página

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <motion.section 
        className="bg-black py-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl font-bold mb-12 text-center text-white"
          >
            Política de Privacidade
          </motion.h1>
        </div>
      </motion.section>

      {/* Sinopse Section */}
      <section className="py-4 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
                A sua privacidade é importante para nós.
                Esta Política de Privacidade explica como coletamos, usamos e protegemos as informações fornecidas pelos visitantes do nosso site.
            </p>
            <p className="text-white font-semibold">
                Coleta de informações
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
                Coletamos apenas os dados pessoais enviados voluntariamente através do formulário de contato:
                nome, e-mail, telefone, nome da escola e mensagem.
                Essas informações são utilizadas exclusivamente para responder às solicitações de orçamento ou dúvidas sobre nossos espetáculos.
            </p>
            <p className="text-white font-semibold">
                Uso das informações
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
                Os dados coletados são usados apenas para fins de comunicação direta entre o WM Teatro e o interessado.
                Não compartilhamos, vendemos ou divulgamos suas informações pessoais a terceiros.
            </p>
            <p className="text-white font-semibold">
                Cookies e ferramentas de análise
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
                Podemos utilizar cookies e ferramentas como o Google Analytics ou Google Ads para entender o uso do site e melhorar nossos serviços.
                Esses dados são coletados de forma anônima.
            </p>  
            <p className="text-white font-semibold">
                Segurança
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
                Adotamos medidas de segurança para proteger suas informações contra acessos não autorizados.
            </p>
            <p className="text-white font-semibold">
                Contato
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
                Se desejar excluir ou alterar seus dados, entre em contato pelo e-mail:
                📧 wmteatro@gmail.com
            </p>
            <p className="text-white font-semibold">
                Atualizações desta política
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
                Podemos atualizar esta Política de Privacidade periodicamente.
                Recomendamos que você a consulte regularmente para se manter informado.
            </p>
           
          </motion.div>

        </div>
      </section>
    </div>
  );
}
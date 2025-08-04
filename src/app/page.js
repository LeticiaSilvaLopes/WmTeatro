"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import FAQ from '../components/FAQ';

export default function Home() {
  const espetaculos = [
    {
      id: 1,
      titulo: "Alice no País das Maravilhas",
      imagem: "/images/Alice1.jpg",
      video: "/videos/Alice.mp4",
      href: "/emocoes/alice-no-pais-das-maravilhas"
    },
    {
      id: 2,
      titulo: "Floresta Viva",
      imagem: "/images/FlorestaViva1.jpg",
      video: "/videos/FlorestaViva.mp4",
      href: "/ecologia/floresta-viva"
    },
    {
      id: 3,
      titulo: "Coação de Tinta",
      imagem: "/images/CoracaoDeTinta1.jpg",
      video: "/videos/CoracaoDeTinta.mp4",
      href: "/incentivo-leitura/coracao-de-tinta"
    }
  ];

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
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="/images/logo.png" 
              alt="WM Teatro" 
              className="h-32 md:h-48 w-auto"
            />
          </motion.div>
          <motion.p 
            className="text-xl md:text-3xl mb-8 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Espetáculos Educativos que Transformam
          </motion.p>
          <motion.p 
            className="text-lg max-w-4xl mx-auto text-purple-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Levamos arte e educação para escolas através de apresentações teatrais 
            que abordam temas importantes como saúde, meio ambiente e cultura brasileira.
          </motion.p>
        </div>
      </motion.section>

      {/* Espetáculos Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-4xl font-bold text-center text-white mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Espetáculos em Destaque
          </motion.h2>
          
          <div className="space-y-32">
            {espetaculos.map((espetaculo, index) => (
              <motion.div 
                key={espetaculo.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                exit={{ opacity: 0, y: -100 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Bloco da Imagem + Título + Botão */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'} flex`}>
                  <div className="relative group w-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative bg-gradient-to-br from-black via-purple-950 to-black rounded-lg overflow-hidden border border-purple-800 h-full flex flex-col">
                      
                      {/* Título */}
                      <div className="p-6 pb-4">
                        <h3 className="text-2xl font-bold text-white text-center">
                          {espetaculo.titulo}
                        </h3>
                      </div>

                      {/* Imagem na parte superior */}
                      <div className="flex-1">
                        <img 
                          src={espetaculo.imagem} 
                          alt={espetaculo.titulo}
                          className="w-full h-full object-cover"
                          style={{ minHeight: '280px' }}
                        />
                      </div>

                      {/* Botão na parte inferior */}
                      <div className="px-6 pb-6">
                        <br></br>
                        <Link href={espetaculo.href}>
                          <motion.button 
                            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Saiba Mais
                          </motion.button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bloco do Vídeo */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'} flex`}>
                  <div className="relative group w-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative bg-gradient-to-br from-black via-purple-950 to-black rounded-lg overflow-hidden border border-purple-800 h-full">
                      <video
                        className="w-full h-full object-contain bg-black"
                        controls
                        preload="metadata"
                        poster={espetaculo.imagem}
                        style={{ minHeight: '400px' }}
                      >
                        <source src={espetaculo.video} type="video/mp4" />
                        <source src={espetaculo.video.replace('.mp4', '.webm')} type="video/webm" />
                        Seu navegador não suporta vídeos HTML5.
                      </video>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Component - Mesmo FAQ em todas as páginas */}
      <FAQ />

      {/* CTA Section */}
      <motion.section 
        className="bg-black py-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-4xl font-bold mb-8 text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Leve Arte e Educação para sua Escola
          </motion.h2>
          <motion.p 
            className="text-xl mb-10 text-purple-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Entre em contato conosco e agende uma apresentação
          </motion.p>
          <Link href="/contato">
            <motion.button 
              className="bg-purple-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Falar Conosco
            </motion.button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
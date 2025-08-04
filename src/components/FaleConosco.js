"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function FaleConosco() {
  return (
    <motion.div>
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
    </motion.div>
  );
}
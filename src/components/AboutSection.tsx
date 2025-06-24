import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="bg-white text-[#184A5A] py-16 px-4 flex flex-col items-center relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7 }}
        className="text-2xl md:text-4xl font-bold mb-4"
      >
        Sua Identidade Visual
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="max-w-2xl text-lg md:text-xl text-center mb-8"
      >
        Neste espaço, você verá opções de cores, fontes, logos e aplicações, para
        escolher aquela que melhor transmite confiança e cuidado aos seus
        pacientes, principalmente os pequenos.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="w-12 h-1 rounded-full bg-[#F2B5A6] mb-2"
      />
    </motion.section>
  );
}

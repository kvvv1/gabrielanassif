import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const logoMockups = [
  [
    { src: "/CANECA MOCKUP.png", alt: "Caneca com Logo 1" },
    { src: "/MOCKUP CARTÃO.png", alt: "Cartão com Logo 1" },
    { src: "/MOUSEPAD MOCKUP.png", alt: "Mousepad com Logo 1" },
    { src: "/MOCKUP PASTA.png", alt: "Pasta com Logo 1" },
  ],
  [
    { src: "/MOCKUP CANECA 2.png", alt: "Caneca com Logo 2" },
    { src: "/MOCKUP CARTÃO 2.png", alt: "Cartão com Logo 2" },
    { src: "/MOCKUP MOUSEPAD 2.png", alt: "Mousepad com Logo 2" },
    { src: "/MOCKUP PASTA 2.png", alt: "Pasta com Logo 2" },
  ],
  [
    { src: "/MOCKUP CANECA 3.png", alt: "Caneca com Logo 3" },
    { src: "/MOCKUP CARTÃO 3.png", alt: "Cartão com Logo 3" },
    { src: "/MOCKUP MOUSEPAD 3.png", alt: "Mousepad com Logo 3" },
    { src: "/MOCKUP PASTA 3.png", alt: "Pasta com Logo 3" },
  ],
  [
    { src: "/MOCKUP CANECA 4.png", alt: "Caneca com Logo 4" },
    { src: "/MOCKUP CARTAO 4.png", alt: "Cartão com Logo 4" },
    { src: "/MOCKUP MOUSEPAD 4.png", alt: "Mousepad com Logo 4" },
    { src: "/MOCKUP PASTA 4.png", alt: "Pasta com Logo 4" },
  ],
];

export default function MockupsSection({
  selectedLogo,
}: {
  selectedLogo: number | null;
}) {
  const mockups =
    selectedLogo !== null ? logoMockups[selectedLogo] : [];
  const [openImgIdx, setOpenImgIdx] = useState<number | null>(null);

  useEffect(() => {
    if (openImgIdx === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenImgIdx(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [openImgIdx]);

  return (
    <motion.section
      id="mockups"
      className="bg-white py-10 px-2 sm:py-14 sm:px-4 md:py-16 md:px-4"
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
        className="text-xl xs:text-2xl md:text-4xl font-bold text-[#184A5A] text-center mb-3 md:mb-4"
      >
        Veja como fica na prática
      </motion.h2>
      <p className="text-center text-gray-600 mb-6 md:mb-10 max-w-2xl mx-auto text-sm xs:text-base">
        Os mockups abaixo mostram como a logo escolhida será aplicada em
        diferentes materiais da clínica. Selecione uma logo para visualizar!
      </p>
      {mockups.length === 0 ? (
        <div className="text-center text-gray-400 py-8 md:py-12 text-sm xs:text-base">
          Selecione uma logo para visualizar os mockups.
        </div>
      ) : (
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {mockups.map((m, i) => (
            <motion.div
              key={m.src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="overflow-hidden rounded-xl shadow-lg bg-gray-50 group flex flex-col"
            >
              <div className="flex-1 flex items-center justify-center p-3 sm:p-4 md:p-5 relative">
                <img
                  src={m.src}
                  alt={m.alt}
                  className="w-full h-36 xs:h-40 sm:h-44 md:h-48 object-contain transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                  loading="lazy"
                  onClick={() => setOpenImgIdx(i)}
                  tabIndex={0}
                  aria-label={`Ampliar ${m.alt}`}
                />
                <button
                  onClick={() => setOpenImgIdx(i)}
                  className="absolute bottom-2 right-2 bg-white/80 hover:bg-white text-[#184A5A] p-2 rounded-full shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#184A5A] transition"
                  aria-label={`Ver ${m.alt} ampliada`}
                  tabIndex={0}
                  type="button"
                >
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="11" cy="11" r="7" stroke="#184A5A" strokeWidth="2" />
                    <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="#184A5A" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
              <div className="p-2 text-center text-xs xs:text-sm text-gray-600 bg-white">
                {m.alt}
              </div>
            </motion.div>
          ))}
        </div>
      )}
      {openImgIdx !== null && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fadeIn"
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          onClick={() => setOpenImgIdx(null)}
        >
          <div
            className="relative max-w-full max-h-full p-2"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={mockups[openImgIdx].src}
              alt={mockups[openImgIdx].alt + ' ampliada'}
              className="w-auto h-[80vh] max-w-[90vw] rounded-2xl shadow-2xl border-4 border-white/90 bg-white/60"
            />
            <button
              onClick={() => setOpenImgIdx(null)}
              className="absolute top-2 right-2 bg-white/90 hover:bg-white text-[#184A5A] p-2 rounded-full shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-[#184A5A]"
              aria-label="Fechar imagem ampliada"
              type="button"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <line x1="5" y1="5" x2="15" y2="15" stroke="#184A5A" strokeWidth="2" strokeLinecap="round" />
                <line x1="15" y1="5" x2="5" y2="15" stroke="#184A5A" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </motion.section>
  );
}

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function HeroSection({ onCTAClick }: { onCTAClick: () => void }) {
  // Loader animado
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Toast de feedback
  const [toast, setToast] = useState("");
  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2000);
  };

  // Parallax background
  const bgRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const y = window.scrollY;
        bgRef.current.style.backgroundPosition = `50% ${30 + y * 0.05}%`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ripple effect no botão
  const btnRef = useRef<HTMLButtonElement>(null);
  const handleBtnClick = (e: React.MouseEvent) => {
    const btn = btnRef.current;
    if (!btn) return;
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    const rect = btn.getBoundingClientRect();
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
    onCTAClick();
    showToast("Rolando para opções!");
  };

  // Loader animado
  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#184A5A] z-[9999]" role="status" aria-label="Carregando">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
          className="w-16 h-16 rounded-full border-4 border-[#F2B5A6] border-t-transparent animate-spin"
        />
        <span className="sr-only">Carregando...</span>
      </div>
    );
  }

  return (
    <motion.section
      id="hero"
      className="relative min-h-[80vh] flex flex-col items-center justify-center bg-[#184A5A] text-white text-center px-4 py-16 overflow-hidden focus:outline-none"
      tabIndex={-1}
      aria-label="Seção principal: Dra. Gabriela Nassif"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      role="region"
    >
      {/* Vídeo de fundo em looping e embaçado */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-70 blur-[6px]"
        style={{ pointerEvents: "none" }}
        src="/video.mp4"
      />
      {/* Gradiente animado de fundo com parallax */}
      <motion.div
        ref={bgRef}
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0 pointer-events-none transition-all duration-700"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 30%, #F2B5A6 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, #A7C4BC 0%, transparent 80%)",
          backgroundPosition: "50% 30%"
        }}
      />
      {/* Foto da doutora sobreposta */}
      <div className="relative z-10 flex flex-col items-center max-w-2xl w-full">
        <img
          src="/dra.png"
          alt="Dra. Gabriela Nassif"
          className="w-48 h-72 object-cover rounded-2xl shadow-2xl mx-auto mb-6 border-4 border-white/80 bg-white/40 backdrop-blur-md"
          style={{ marginTop: '-2rem' }}
        />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg focus-visible:ring-4 focus-visible:ring-[#F2B5A6] outline-none"
          tabIndex={0}
        >
          Dra. Gabriela Nassif
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-2xl mb-8 font-light outline-none focus-visible:ring-2 focus-visible:ring-[#F2B5A6]"
          tabIndex={0}
        >
          Excelência em otorrinolaringologia para toda a família.
        </motion.p>
        <motion.button
          ref={btnRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 1, delay: 0.4 }}
          onClick={handleBtnClick}
          className="relative overflow-hidden bg-[#F2B5A6] text-[#184A5A] px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-110 hover:bg-[#e89b8a] hover:shadow-[0_0_24px_4px_#F2B5A6] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#F2B5A6] transition-all duration-300 group border-2 border-[#184A5A]/10"
          tabIndex={0}
          aria-label="Ver opções"
          role="button"
        >
          <span className="group-hover:animate-pulse">Ver Opções</span>
        </motion.button>
        {/* Instrução de navegação acessível */}
        <span className="sr-only">Use Tab para navegar pelas seções</span>
        {/* Ripple CSS */}
        <style>{`.ripple {
          position: absolute;
          border-radius: 50%;
          transform: scale(0);
          animation: ripple 0.6s linear;
          background: rgba(24,74,90,0.3);
          pointer-events: none;
          width: 120px; height: 120px;
          left: 50%; top: 50%;
          margin-left: -60px; margin-top: -60px;
        }
        @keyframes ripple {
          to { transform: scale(2.5); opacity: 0; }
        }`}</style>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-12 flex justify-center"
        >
          {/* Ícone/ilustração delicada com efeito flutuante e tilt */}
          <motion.svg
            width="80"
            height="80"
            fill="none"
            viewBox="0 0 80 80"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="drop-shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#F2B5A6] outline-none"
            whileHover={{ scale: 1.15, rotate: 2 }}
            tabIndex={0}
            aria-label="Ilustração de ouvido"
            role="img"
          >
            <ellipse cx="40" cy="40" rx="36" ry="36" fill="#F2B5A6" fillOpacity="0.15" />
            <path d="M40 60c8-8 12-16 12-24s-4-12-12-12-12 4-12 12 4 16 12 24z" stroke="#F2B5A6" strokeWidth="3" fill="none" />
            <circle cx="40" cy="36" r="4" fill="#F2B5A6" />
          </motion.svg>
        </motion.div>
      </div>
      {/* Divider animado para próxima seção */}
      <motion.div
        aria-hidden
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.8, type: "spring" }}
        className="absolute bottom-0 left-0 w-full h-16 z-20"
        style={{
          background:
            "linear-gradient(180deg, rgba(242,181,166,0.2) 0%, rgba(255,255,255,0.8) 100%)",
          borderBottomLeftRadius: "100% 40%",
          borderBottomRightRadius: "100% 40%"
        }}
      />
      {/* Toast animado */}
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-[#184A5A] text-white px-6 py-3 rounded-full shadow-lg z-[9999]"
          role="status"
          aria-live="polite"
        >
          {toast}
        </motion.div>
      )}
    </motion.section>
  );
}

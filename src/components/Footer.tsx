export default function Footer() {
  return (
    <footer className="bg-[#14313D] text-gray-100 py-6 px-4 text-center flex flex-col items-center gap-2">
      <div className="text-sm">Desenvolvido por Kaike Vittor para Dra. Gabriela Nassif</div>
      <div className="flex gap-4 justify-center">
        <a href="https://wa.me/5531995531183" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-[#F2B5A6] transition-colors">WhatsApp</a>
        <a href="https://instagram.com/kaikevns" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-[#F2B5A6] transition-colors">Instagram</a>
      </div>
      <div className="text-xs text-gray-400">© {new Date().getFullYear()} Dra. Gabriela Nassif. Todos os direitos reservados.</div>
    </footer>
  );
}

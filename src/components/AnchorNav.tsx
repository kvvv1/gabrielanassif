import { useState } from "react";

const sections = [
  { id: "hero", label: "Início" },
  { id: "about", label: "Sobre" },
  { id: "palettes", label: "Paletas" },
  { id: "typography", label: "Tipografia" },
  { id: "logos", label: "Logos" },
  { id: "mockups", label: "Mockups" },
  { id: "approval", label: "Aprovação" },
];

export default function AnchorNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#184A5A]/90 backdrop-blur shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2">
        <span className="font-bold text-white text-lg">Dra. Gabriela Nassif</span>
        <button className="md:hidden text-white" onClick={() => setOpen((o) => !o)}>
          <span className="material-icons">menu</span>
        </button>
        <ul className={`md:flex gap-6 text-white font-medium transition-all duration-300 ${open ? 'block' : 'hidden'} md:block`}> 
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="hover:text-[#F2B5A6] transition-colors px-2 py-1"
                onClick={() => setOpen(false)}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

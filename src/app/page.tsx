'use client';

import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ColorPaletteSection from "../components/ColorPaletteSection";
import TypographySection from "../components/TypographySection";
import LogoOptionsSection from "../components/LogoOptionsSection";
import MockupsSection from "../components/MockupsSection";
import ApprovalFormSection from "../components/ApprovalFormSection";
import Footer from "../components/Footer";
import { useRef, useState } from "react";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null!);
  const palettesRef = useRef<HTMLDivElement>(null!);
  const typographyRef = useRef<HTMLDivElement>(null!);
  const logosRef = useRef<HTMLDivElement>(null!);
  const mockupsRef = useRef<HTMLDivElement>(null!);
  const approvalRef = useRef<HTMLDivElement>(null!);
  const [selectedLogo, setSelectedLogo] = useState<number | null>(null);

  // Funções para scroll suave
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* <AnchorNav /> */}
      {/* <div className="pt-16" /> */}
      <HeroSection onCTAClick={() => scrollToSection(aboutRef)} />
      <div ref={aboutRef}>
        <AboutSection />
      </div>
      <div ref={palettesRef}>
        <ColorPaletteSection onChoose={() => scrollToSection(typographyRef)} />
      </div>
      <div ref={typographyRef}>
        <TypographySection onChoose={() => scrollToSection(logosRef)} />
      </div>
      <div ref={logosRef}>
        <LogoOptionsSection
          onChoose={(idx) => {
            setSelectedLogo(idx);
            scrollToSection(mockupsRef);
          }}
          selectedLogo={selectedLogo}
        />
      </div>
      <div ref={mockupsRef}>
        <MockupsSection selectedLogo={selectedLogo} />
      </div>
      <div ref={approvalRef}>
        <ApprovalFormSection />
      </div>
      <Footer />
    </div>
  );
}

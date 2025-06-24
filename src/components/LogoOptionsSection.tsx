import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const logos = [
	{
		name: "Logo 1",
		main: "/LOGO 1.png",
	},
	{
		name: "Logo 2",
		main: "/LOGO 2.png",
	},
	{
		name: "Logo 3",
		main: "/LOGO 3.png",
	},
	{
		name: "Logo 4",
		main: "/LOGO 4.png",
	},
];

export default function LogoOptionsSection({
	onChoose,
	selectedLogo,
}: {
	onChoose: (idx: number) => void;
	selectedLogo: number | null;
}) {
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
			id="logos"
			className="bg-gray-50 py-16 px-4"
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
				className="text-2xl md:text-4xl font-bold text-[#184A5A] text-center mb-4"
			>
				Escolha sua Logo
			</motion.h2>
			<p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
				Clique em uma das opções de logo abaixo para visualizar como ela ficará
				aplicada nos materiais da Dra. Gabriela Massif. Os mockups serão
				atualizados automaticamente conforme sua escolha.
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
				{logos.map((l, i) => (
					<motion.div
						key={l.name}
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.7 }}
						transition={{ duration: 0.7, delay: i * 0.2 }}
						className={`bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center relative group border-2 transition-all duration-300 ${
							selectedLogo === i
								? "border-[#184A5A] scale-105"
								: "border-transparent"
						}`}
					>
						<div className="relative mb-4 w-40 h-40 flex items-center justify-center">
							<img
								src={l.main}
								alt={l.name}
								className="w-40 h-40 object-contain drop-shadow-xl transition-transform duration-300 group-hover:scale-105 cursor-pointer"
								onClick={() => setOpenImgIdx(i)}
								tabIndex={0}
								aria-label={`Ampliar ${l.name}`}
							/>
							<button
								onClick={() => setOpenImgIdx(i)}
								className="absolute bottom-2 right-2 bg-white/80 hover:bg-white text-[#184A5A] p-2 rounded-full shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#184A5A] transition"
								aria-label={`Ver ${l.name} ampliada`}
								tabIndex={0}
								type="button"
							>
								<svg width="22" height="22" fill="none" viewBox="0 0 24 24" aria-hidden="true">
									<circle cx="11" cy="11" r="7" stroke="#184A5A" strokeWidth="2" />
									<line x1="16.5" y1="16.5" x2="21" y2="21" stroke="#184A5A" strokeWidth="2" strokeLinecap="round" />
								</svg>
							</button>
						</div>
						<div className="mb-2 text-[#184A5A] font-semibold text-lg">Logo {i + 1}</div>
						<button
							onClick={() => onChoose(i)}
							className={`px-6 py-2 rounded-full font-semibold text-white bg-[#184A5A] shadow-md transition-transform duration-200 hover:scale-105 ${
								selectedLogo === i ? "ring-2 ring-[#184A5A]" : ""
							}`}
						>
							{selectedLogo === i
								? "Logo selecionada"
								: "Escolher esta logo"}
						</button>
					</motion.div>
				))}
			</div>
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
							src={logos[openImgIdx].main}
							alt={logos[openImgIdx].name + ' ampliada'}
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

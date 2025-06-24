import { motion } from "framer-motion";

const palettes = [
	{
		name: "Clean Família",
		colors: ["#184A5A", "#F2B5A6", "#F2E9E4", "#A7C4BC"],
		desc: "Paleta suave, acolhedora e familiar, transmite confiança e proximidade.",
		btn: "#184A5A",
	},
	{
		name: "Saúde & Acolhimento",
		colors: ["#2E8BC0", "#B1D4E0", "#F2B5A6", "#F2E9E4"],
		desc: "Tons que remetem à saúde, cuidado e leveza, ideais para público infantil.",
		btn: "#2E8BC0",
	},
	{
		name: "Leveza & Delicadeza",
		colors: ["#F2E9E4", "#F2B5A6", "#A7C4BC", "#184A5A"],
		desc: "Cores claras e delicadas, para uma identidade visual leve e moderna.",
		btn: "#F2B5A6",
	},
];

export default function ColorPaletteSection({
	onChoose,
}: {
	onChoose: (idx: number) => void;
}) {
	return (
		<motion.section
			id="palettes"
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
				className="text-2xl md:text-4xl font-bold text-[#184A5A] text-center mb-10"
			>
				Escolha sua paleta de cores
			</motion.h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
				{palettes.map((p, i) => (
					<motion.div
						key={p.name}
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.7 }}
						transition={{ duration: 0.7, delay: i * 0.2 }}
						className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center"
					>
						<h3 className="font-bold text-lg mb-2 text-[#184A5A]">
							{p.name}
						</h3>
						<div className="flex gap-2 mb-4">
							{p.colors.map((c) => (
								<span
									key={c}
									className="w-8 h-8 rounded-full border-2 border-white shadow"
									style={{ background: c }}
									title={c}
								></span>
							))}
						</div>
						<p className="text-sm text-gray-600 mb-6 text-center">
							{p.desc}
						</p>
						<button
							onClick={() => onChoose(i)}
							className="px-6 py-2 rounded-full font-semibold text-white shadow-md transition-transform duration-200 hover:scale-105"
							style={{ background: p.btn }}
						>
							Escolher esta paleta
						</button>
					</motion.div>
				))}
			</div>
		</motion.section>
	);
}

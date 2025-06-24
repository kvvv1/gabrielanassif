import { motion } from "framer-motion";

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
						<img
							src={l.main}
							alt={l.name}
							className="w-40 h-40 object-contain mb-4 drop-shadow-xl transition-transform duration-300 group-hover:scale-105"
						/>
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
		</motion.section>
	);
}

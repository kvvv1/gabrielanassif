import { motion } from "framer-motion";

const fonts = [
	{
		title: "Montserrat & Lato",
		titleStyle: "font-montserrat text-2xl md:text-3xl font-bold",
		subtitleStyle: "font-lato text-lg md:text-xl font-semibold",
		bodyStyle: "font-lato text-base md:text-lg",
		desc: "Moderna, legível e amigável para todas as idades.",
	},
	{
		title: "Poppins & Open Sans",
		titleStyle: "font-poppins text-2xl md:text-3xl font-bold",
		subtitleStyle: "font-open-sans text-lg md:text-xl font-semibold",
		bodyStyle: "font-open-sans text-base md:text-lg",
		desc: "Clássica, elegante e com ótima leitura digital.",
	},
	{
		title: "Quicksand & Nunito",
		titleStyle: "font-quicksand text-2xl md:text-3xl font-bold",
		subtitleStyle: "font-nunito text-lg md:text-xl font-semibold",
		bodyStyle: "font-nunito text-base md:text-lg",
		desc: "Leve, descontraída e acolhedora para o público infantil.",
	},
];

export default function TypographySection({
	onChoose,
}: {
	onChoose: (idx: number) => void;
}) {
	return (
		<motion.section
			id="typography"
			className="bg-white py-16 px-4"
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
				Escolha a Tipografia
			</motion.h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
				{fonts.map((f, i) => (
					<motion.div
						key={f.title}
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.7 }}
						transition={{ duration: 0.7, delay: i * 0.2 }}
						className="bg-gray-50 rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform duration-200"
					>
						<h3 className={f.titleStyle + " mb-2 text-[#184A5A]"}>
							{f.title}
						</h3>
						<h4 className={f.subtitleStyle + " mb-1 text-[#184A5A]"}>
							Subtítulo exemplo
						</h4>
						<p
							className={
								f.bodyStyle +
								" text-gray-700 mb-4 text-center"
							}
						>
							Exemplo de parágrafo com a fonte do corpo de texto.
						</p>
						<p className="text-sm text-gray-600 mb-6 text-center">
							{f.desc}
						</p>
						<button
							onClick={() => onChoose(i)}
							className="px-6 py-2 rounded-full font-semibold text-white bg-[#184A5A] shadow-md transition-transform duration-200 hover:scale-105"
						>
							Escolher esta tipografia
						</button>
					</motion.div>
				))}
			</div>
		</motion.section>
	);
}

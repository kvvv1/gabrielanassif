import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "../lib/supabaseClient";

const palettes = ["Clean Família", "Saúde & Acolhimento", "Leveza & Delicadeza"];
const fonts = ["Montserrat & Lato", "Poppins & Open Sans", "Quicksand & Nunito"];
const logos = ["Logo 1", "Logo 2", "Logo 3"];

export default function ApprovalFormSection() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    const form = e.currentTarget;
    const data = {
      paleta: form.paleta.value,
      tipografia: form.tipografia.value,
      logo: form.logo.value,
      comentarios: form.comentarios.value,
    };
    const { error } = await supabase.from('escolhas').insert([data]);
    if (error) {
      setError('Erro ao enviar. Tente novamente.');
    } else {
      setSuccess(true);
      form.reset();
    }
    setLoading(false);
  }

  return (
    <motion.section
      id="approval"
      className="bg-gray-50 py-16 px-4 flex flex-col items-center"
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
        className="text-2xl md:text-4xl font-bold text-[#184A5A] text-center mb-8"
      >
        Pronto para Escolher?
      </motion.h2>
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg flex flex-col gap-4"
      >
        <select required name="paleta" className="rounded-lg border border-gray-300 px-4 py-2 text-black">
          <option value="">Paleta escolhida</option>
          {palettes.map((p) => <option key={p}>{p}</option>)}
        </select>
        <select required name="tipografia" className="rounded-lg border border-gray-300 px-4 py-2 text-black">
          <option value="">Tipografia escolhida</option>
          {fonts.map((f) => <option key={f}>{f}</option>)}
        </select>
        <select required name="logo" className="rounded-lg border border-gray-300 px-4 py-2 text-black">
          <option value="">Logo escolhida</option>
          {logos.map((l) => <option key={l}>{l}</option>)}
        </select>
        <textarea name="comentarios" placeholder="Comentários adicionais" className="rounded-lg border border-gray-300 px-4 py-2 min-h-[80px] resize-y text-black placeholder:text-black/60" />
        <button type="submit" disabled={loading} className="bg-[#184A5A] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 hover:bg-[#F2B5A6] hover:text-[#184A5A] transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-[#F2B5A6]">
          {loading ? "Enviando..." : "Enviar Escolha"}
        </button>
        {success && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-green-600 text-center font-semibold mt-2"
          >
            Escolha enviada com sucesso! Obrigado :)
          </motion.div>
        )}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-600 text-center font-semibold mt-2"
          >
            {error}
          </motion.div>
        )}
      </motion.form>
    </motion.section>
  );
}

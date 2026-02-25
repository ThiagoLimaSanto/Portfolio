import { useState } from "react";
import { TextForm } from "../TextForm";

export function Form() {
  const [msg, setMsg] = useState("");
  const [nome, setNome] = useState("");
  const texto = `Olá! Me chamo ${nome}, ${msg}`;
  const telefone = "5564992956793";

  const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    window.open(url, "_blank");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="min-w-150 mx-auto bg-[rgba(255,255,255,0.05)] backdrop-blur-sm p-8 border-2 border-(--vidro) rounded-2xl"
    >
      <TextForm
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        Tag="input"
        placeholder="Digite o seu nome..."
      />
      <TextForm
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        Tag="textarea"
        placeholder="Digite a sua mensagem..."
      />
      <button
        type="submit"
        className="text-(--claro) bg-[linear-gradient(45deg,var(--primary),var(--secundary))] py-4 px-8 border-none rounded-2xl font-bold w-full transition-all duration-300 ease-in-out hover:shadow-[0_5_15px_rgba(79,70,229,0.4)] hover:-translate-y-1 cursor-pointer"
      >
        Enviar Mensagem
      </button>
    </form>
  );
}

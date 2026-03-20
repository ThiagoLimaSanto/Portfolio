import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Heading } from "../Heading";
import { Particles } from "../Particles";

export function Main() {
  return (
    <>
      <Particles />
      <main
        id="inicio"
        className="min-h-screen flex flex-col justify-center items-center"
      >
        <img
          className="w-80 h-80 shadow-[0_0_20px_rgba(79,70,229,0.3)] rounded-full border-4 border-(--vidro) object-cover animate-flutuar"
          src="/images/Eu.jpeg"
          alt="Minha foto"
        />
        <Heading Tag="h1">Thiago Lima</Heading>
        <p className="text-[20px] text-(--claro)">Desenvolvedor FullStack</p>
        <div className="flex gap-4">
          <a href="">
            <FaWhatsapp />
          </a>
          <a href="">
            <FaInstagram />
          </a>
          <a href="">
            <FaLinkedin />
          </a>
          <a href="">
            <FaGithub />
          </a>
        </div>
      </main>
    </>
  );
}

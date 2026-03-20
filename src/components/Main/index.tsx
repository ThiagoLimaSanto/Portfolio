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
        <div className="flex gap-4 mt-2">
          <a href="">
            <FaWhatsapp color="green" size={25} />
          </a>
          <a href="">
            <FaInstagram
              size={25}
              className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 via-pink-500 to-purple-600"
            />
          </a>
          <a href="">
            <FaLinkedin size={25} className="text-[#0A66C2]" />
          </a>
          <a href="">
            <FaGithub size={25} />
          </a>
        </div>
      </main>
    </>
  );
}

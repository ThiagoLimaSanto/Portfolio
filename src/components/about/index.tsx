import { Heading } from "../Heading";

export function About() {
  return (
    <section id="sobre" className="py-24 px-8">
      <Heading Tag="h2">Sobre Mim</Heading>
      <div className="p-8 max-w-200 mx-auto rounded-2xl border-2 border-(--vidro) backdrop-blur-sm bg-[rgba(255,255,255,0.05)]">
        <p className="text-[1.2rem] indent-8">
          Sou Thiago, tenho 21 anos e sou Desenvolvedor de Software em desenvolvimento web full-stack. Atualmente curso o 7º
          semestre de Ciência da Computação e desenvolvo projetos utilizando
          React, Node.js e bancos de dados SQL e NoSQL.
        </p>
        <p className="text-[1.2rem] indent-8">
          Tenho experiência na criação de APIs REST e aplicações web,
          trabalhando com tecnologias como JavaScript, TypeScript, React,
          Tailwind CSS, Node.js, MySQL, PostgreSQL e MongoDB. Também utilizo
          Docker para containerização das aplicações e Git para controle de
          versão.
        </p>
        <p className="text-[1.2rem] indent-8">
          Além disso, possuo conhecimentos em Java (Programação Orientada a
          Objetos) e Python.
        </p>
        <p className="text-[1.2rem] indent-8">
          Busco minha primeira oportunidade como desenvolvedor, onde possa
          contribuir com projetos reais, aprender com profissionais experientes
          e evoluir tecnicamente no desenvolvimento de software.
        </p>
      </div>
    </section>
  );
}

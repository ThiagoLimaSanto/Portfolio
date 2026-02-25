import { Cards } from "../Cards";
import { Heading } from "../Heading";
import { Particles } from "../Particles";

export function Projects() {
  return (
    <>
      <Particles />
      <section id="projetos" className="py-24 px-8 h-screen">
        <Heading Tag="h2">Meus Projetos</Heading>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-8 max-w-300 mx-auto">
          <Cards
            title="Loja de Carros"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
            imgUrl="/images/projeto1.png"
          />
          <Cards
            title="Página de Viagens"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
            imgUrl="/images/projeto2.png"
          />
          <Cards
            title="Microsoft"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
            imgUrl="/images/projeto3.webp"
          />
        </div>
      </section>
    </>
  );
}

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
            title="Sistema de Food Delivery"
            description="Projeto fullstack feita a fim de praticar conceitos de React, Tailwind CSS, Node.js e TypeScript."
            imgUrl="/images/foodCommerce.webp"
          />
          <Cards
            title="Sistema de adoção de Pet"
            description="Sistema feito para aprender a integrar o react com o node.js."
            imgUrl="/images/getaPet.png"
          />
          <Cards
            title="Delivery"
            description="Projeto frontend feita para aprender conceitos de React e Tailwind CSS, e uso de mensagens pelo whatsapp."
            imgUrl="/images/delivery.webp"
          />
        </div>
      </section>
    </>
  );
}

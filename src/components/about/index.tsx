import { Heading } from "../Heading";

export function About() {
  return (
    <section id="sobre" className="py-24 px-8">
      <Heading Tag="h2">Sobre Mim</Heading>
      <div className="p-8 max-w-200 mx-auto rounded-2xl border-2 border-(--vidro) backdrop-blur-sm bg-[rgba(255,255,255,0.05)]">
        <p className="text-center text-[1.2rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          repudiandae dolores possimus eaque? Dolorum et totam tenetur sed
          obcaecati beatae facere earum dolor iusto? Dolorum, commodi illum?
          Culpa, omnis earum.
        </p>
      </div>
    </section>
  );
}

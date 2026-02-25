import { Form } from "../Form";
import { Heading } from "../Heading";
import { Particles } from "../Particles";

export function Contact() {
  return (
    <>
    <Particles/>
      <section id="contato" className="py-24 px-8 h-screen flex flex-col justify-center items-center">
        <Heading Tag="h2">Entre em Contato</Heading>
        <Form />
      </section>
    </>
  );
}

import { About } from "../../components/about";
import { Contact } from "../../components/Contact";
import { Main } from "../../components/Main";
import { Navbar } from "../../components/Navbar";
import { Projects } from "../../components/Projects";

export function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

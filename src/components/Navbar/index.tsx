import { LinkNav } from "../LinkNav";

export function Navbar() {
  return (
    <nav className="fixed bg-slate-900/80 w-full z-100 top-0 p-6">
      <ul className="flex gap-12 justify-center">
        <li>
          <LinkNav href="#inicio">Iníco</LinkNav>
        </li>
        <li>
          <LinkNav href="#sobre">Sobre</LinkNav>
        </li>
        <li>
          <LinkNav href="#projetos">Projetos</LinkNav>
        </li>
        <li>
          <LinkNav href="#contato">Contato</LinkNav>
        </li>
      </ul>
    </nav>
  );
}

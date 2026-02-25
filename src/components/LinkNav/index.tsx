type LinkNavProps = {
  children: React.ReactNode;
  href: string;
};

export function LinkNav({ children, href }: LinkNavProps) {
  return (
    <>
      <a
        href={href}
        className="relative py-2 before:content-[''] text-(--claro) font-medium before:h-[2px] before:w-0 before:absolute before:bottom-0 before:left-0 before:bg-[linear-gradient(90deg,var(--primary),var(--secundary))] hover:before:w-full before:transition-[width] before:duration-400 before:ease-in-out"
      >
        {children}
      </a>
    </>
  );
}

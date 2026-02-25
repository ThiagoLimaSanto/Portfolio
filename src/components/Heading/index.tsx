type HeadingProps = {
  Tag: "h1" | "h2" | "h3";
  children: React.ReactNode;
};

export function Heading({ Tag, children }: HeadingProps) {
  const styles = {
    h1: "text-6xl text-(--primary) font-bold my-[20px]",
    h2: "text-4xl text-(--claro) font-bold my-[40px] text-center",
    h3: "text-2xl font-bold mb-[15px]",
  };
  return <Tag className={styles[Tag]}>{children}</Tag>;
}

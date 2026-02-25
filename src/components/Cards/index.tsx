import { Heading } from "../Heading";

type CardProps = {
  title: string;
  description: React.ReactNode;
  imgUrl: string;
};

export function Cards({ title, description, imgUrl }: CardProps) {
  return (
    <div className="group bg-[rgba(255,255,255,0.05)] rounded-2xl backdrop-blur-sm border-2 border-(--vidro) overflow-hidden hover:shadow-[0_0_20px_rgba(79,70,229,0.2)] hover:-translate-y-2.5 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
      <div className="overflow-hidden">
        <img
          className="h-50 w-full object-cover transition-transform duration-500 group-hover:scale-110"
          src={imgUrl}
          alt={title}
        />
      </div>

      <div className="p-6">
        <Heading Tag="h3">{title}</Heading>
        <p className="text-[rgba(226,232,240, 0.8)] leading-tight">
          {description}
        </p>
      </div>
    </div>
  );
}

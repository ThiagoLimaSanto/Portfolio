type TextFormProps = {
  Tag: "input" | "textarea";
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export function TextForm({ Tag, placeholder, value, onChange }: TextFormProps) {
  return (
    <div className="mb-6">
      <Tag
        value={value}
        onChange={onChange}
        className="w-full p-4 bg-[rgba(255,255,255,0.05)] rounded-lg text-(--claro) border-2 border-(--vidro) outline-none focus:border-(--secundary) focus:shadow-[0_0_10px_rgba(79,70,229,0.3)]"
        type="text"
        placeholder={placeholder}
      ></Tag>
    </div>
  );
}

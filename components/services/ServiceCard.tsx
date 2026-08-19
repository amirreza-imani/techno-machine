interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
}

export default function ServiceCard({
  number,
  title,
  description,
}: ServiceCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold hover:shadow-xl">
      <div className="mb-8 flex items-center justify-between">
        <span className="text-4xl font-black text-brand-gold/20 transition-colors duration-300 group-hover:text-brand-gold/40">
          {number}
        </span>

        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-black text-sm font-bold text-brand-gold transition-transform duration-300 group-hover:rotate-45">
          ↗
        </span>
      </div>

      <h3 className="mb-4 text-xl font-black text-brand-black">{title}</h3>

      <p className="leading-8 text-gray-600">{description}</p>

      <div className="mt-7 h-1 w-10 bg-brand-gold transition-all duration-300 group-hover:w-20" />
    </article>
  );
}

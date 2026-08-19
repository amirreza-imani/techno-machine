interface PartCardProps {
  title: string;
  category: string;
  description: string;
}

export default function PartCard({
  title,
  category,
  description,
}: PartCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-xl">
      <div className="flex aspect-[4/3] items-center justify-center bg-brand-charcoal">
        <span className="text-5xl font-black text-brand-gold/20">TM</span>
      </div>

      <div className="p-6">
        <span className="text-xs font-bold text-brand-gold">{category}</span>

        <h2 className="mt-2 text-xl font-black text-brand-black">{title}</h2>

        <p className="mt-3 text-sm leading-7 text-gray-600">{description}</p>

        <button
          type="button"
          className="mt-5 text-sm font-bold text-brand-black transition-colors hover:text-brand-gold"
        >
          مشاهده جزئیات ←
        </button>
      </div>
    </article>
  );
}

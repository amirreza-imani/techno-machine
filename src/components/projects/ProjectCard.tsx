interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
}

export default function ProjectCard({
  title,
  category,
  description,
}: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-xl">
      <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-brand-charcoal">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgba(212,160,23,0.08)_100%)]"
        />

        <span className="relative text-5xl font-black text-brand-gold/20 transition-transform duration-500 group-hover:scale-110">
          TM
        </span>
      </div>

      <div className="p-6">
        <span className="text-xs font-bold text-brand-gold">{category}</span>

        <h2 className="mt-3 text-xl font-black text-brand-black">{title}</h2>

        <p className="mt-3 text-sm leading-7 text-gray-600">{description}</p>

        <button
          type="button"
          className="mt-5 text-sm font-bold text-brand-gold transition-colors hover:text-brand-gold-dark"
        >
          مشاهده پروژه
          <span className="mr-2">←</span>
        </button>
      </div>
    </article>
  );
}

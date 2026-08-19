import ProjectCard from "@/components/projects/ProjectCard";

const projects = [
  {
    title: "پروژه خط خردایش",
    category: "صنایع معدنی",
    description:
      "طراحی و تأمین تجهیزات مورد نیاز خط خردایش و فرآوری مواد معدنی.",
  },
  {
    title: "پروژه تجهیزات سنگ‌شکن",
    category: "ماشین‌آلات",
    description: "تأمین و اجرای تجهیزات سنگ‌شکن برای مجموعه‌های صنعتی و معدنی.",
  },
  {
    title: "پروژه دانه‌بندی مواد معدنی",
    category: "فرآوری مواد معدنی",
    description:
      "راهکارهای تخصصی برای جدایش، دانه‌بندی و آماده‌سازی مواد معدنی.",
  },
];

export default function ProjectsGrid() {
  return (
    <section id="projects" className="bg-[#f7f7f5] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <span className="mb-3 block text-sm font-bold text-brand-gold">
            نمونه پروژه‌ها
          </span>

          <h2 className="text-3xl font-black text-brand-black md:text-4xl">
            پروژه‌های اجراشده
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            نگاهی به بخشی از فعالیت‌ها و پروژه‌های تکنو ماشین صنعت.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

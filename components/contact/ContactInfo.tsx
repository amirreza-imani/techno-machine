const contactItems = [
  {
    title: "تلفن تماس",
    value: "021-00000000",
    href: "tel:02100000000",
  },
  {
    title: "ایمیل",
    value: "info@example.com",
    href: "mailto:info@example.com",
  },
  {
    title: "آدرس",
    value: "تهران، ایران",
    href: null,
  },
];

export default function ContactInfo() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <span className="mb-3 block text-sm font-bold text-brand-gold">
            اطلاعات تماس
          </span>

          <h2 className="text-3xl font-black text-brand-black md:text-4xl">
            راه‌های ارتباط با ما
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            از طریق اطلاعات زیر می‌توانید با مجموعه تکنو ماشین صنعت در ارتباط
            باشید.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {contactItems.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-gray-200 bg-[#f7f7f5] p-7"
            >
              <h3 className="text-sm font-bold text-brand-gold">
                {item.title}
              </h3>

              {item.href ? (
                <a
                  href={item.href}
                  className="mt-4 block text-lg font-black text-brand-black transition-colors hover:text-brand-gold"
                >
                  {item.value}
                </a>
              ) : (
                <p className="mt-4 text-lg font-black text-brand-black">
                  {item.value}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

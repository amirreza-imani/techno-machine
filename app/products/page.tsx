import Link from "next/link";
import { getProducts } from "@/lib/strapi";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main dir="rtl" className="bg-[#f7f7f5] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <span className="mb-3 block text-sm font-bold text-brand-gold">
            محصولات تکنو ماشین صنعت
          </span>

          <h1 className="text-4xl font-black text-brand-black md:text-5xl">
            محصولات و تجهیزات
          </h1>

          <p className="mt-5 leading-8 text-gray-600">
            مجموعه‌ای از ماشین‌آلات و تجهیزات مورد استفاده در صنایع معدنی و
            صنعتی.
          </p>
        </div>

        {products.length === 0 ? (
          <div className="rounded-2xl border border-gray-200 bg-white p-10 text-center">
            <p className="text-gray-600">
              در حال حاضر محصولی برای نمایش وجود ندارد.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.documentId}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-xl"
              >
                <div className="flex aspect-[4/3] items-center justify-center bg-brand-charcoal">
                  <span className="text-5xl font-black text-brand-gold/20 transition-transform duration-500 group-hover:scale-110">
                    TM
                  </span>
                </div>

                <div className="p-6">
                  {product.featured && (
                    <span className="mb-3 inline-block text-xs font-bold text-brand-gold">
                      محصول ویژه
                    </span>
                  )}

                  <h2 className="text-xl font-black text-brand-black">
                    {product.title}
                  </h2>

                  <p className="mt-3 leading-7 text-gray-600">
                    {product.shortDescription}
                  </p>

                  <Link
                    href={`/products/${product.slug}`}
                    className="mt-5 inline-flex text-sm font-bold text-brand-black transition-colors hover:text-brand-gold"
                  >
                    مشاهده محصول
                    <span className="mr-2">←</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

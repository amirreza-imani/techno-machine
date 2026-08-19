import { getProducts } from "@/lib/strapi";

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-[#f7f7f5] p-10" dir="rtl">
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-sm font-bold text-[#c9a227]">تکنو ماشین صنعت</p>

        <h1 className="mb-8 text-4xl font-black text-[#1a1a1a]">محصولات ما</h1>

        {products.length === 0 ? (
          <p className="text-gray-600">هیچ محصولی پیدا نشد.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.documentId}
                className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
              >
                <span className="mb-4 inline-block rounded-full bg-[#c9a227]/15 px-3 py-1 text-xs font-bold text-[#8a6d00]">
                  {product.featured ? "محصول ویژه" : "محصول صنعتی"}
                </span>

                <h2 className="mb-3 text-2xl font-black text-[#1a1a1a]">
                  {product.title}
                </h2>

                <p className="mb-5 leading-8 text-gray-600">
                  {product.shortDescription}
                </p>

                <p className="text-sm text-[#c9a227]">
                  /products/{product.slug}
                </p>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

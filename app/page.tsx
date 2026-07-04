import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  return (
    <main className="flex-1">
      <section className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 py-32 text-center sm:py-40">
        <span className="text-xs uppercase tracking-[0.3em] text-accent">
          Latte &amp; Co.
        </span>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-6xl">
          Conscious Play, Everyday Luxury
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-foreground/70">
          Thoughtfully crafted toys for the modern companion — made from
          natural materials, designed to last, and gentle on the planet.
        </p>
        <a
          href="#shop"
          className="mt-4 rounded-full bg-accent px-8 py-3 text-sm font-medium tracking-wide text-background transition-colors hover:bg-accent-hover"
        >
          Shop the Collection
        </a>
      </section>

      <section id="shop" className="mx-auto max-w-6xl px-6 pb-32 sm:px-10">
        <div className="mb-16 flex flex-col items-center gap-3 text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            The Collection
          </h2>
          <p className="max-w-md text-sm text-foreground/60">
            Five essentials, each made with natural, eco-conscious materials.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}

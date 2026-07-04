"use client";

import Link from "next/link";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductImage from "@/components/ProductImage";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <article className="group flex flex-col">
      <Link href={`/products/${product.id}`} className="mb-5 block">
        <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-accent/10 to-foreground/5 transition-transform duration-300 group-hover:scale-[1.02]">
          <span className="text-xs uppercase tracking-[0.2em] text-foreground/30">
            {product.title}
          </span>
          <ProductImage src={product.images[0]} alt={product.title} />
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-start justify-between gap-4">
          <Link
            href={`/products/${product.id}`}
            className="text-lg font-medium tracking-tight text-foreground transition-colors hover:text-accent"
          >
            {product.title}
          </Link>
          <span className="whitespace-nowrap text-lg font-medium text-accent">
            ${product.price}
          </span>
        </div>

        <p className="text-sm leading-relaxed text-foreground/60">
          {product.description}
        </p>

        <ul className="mt-3 flex flex-wrap gap-2">
          {product.features.map((feature) => (
            <li
              key={feature}
              className="rounded-full border border-foreground/10 px-3 py-1 text-xs text-foreground/50"
            >
              {feature}
            </li>
          ))}
        </ul>

        <button
          onClick={() => addToCart(product)}
          className="mt-4 w-full rounded-full border border-accent px-6 py-2.5 text-sm font-medium tracking-wide text-accent transition-colors hover:bg-accent hover:text-background"
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
}

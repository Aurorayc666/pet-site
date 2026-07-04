"use client";

import { useState } from "react";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductImage from "@/components/ProductImage";

export default function ProductDetail({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-24">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col gap-4">
          <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-accent/10 to-foreground/5">
            <span className="text-sm uppercase tracking-[0.3em] text-foreground/30">
              {product.title}
            </span>
            <ProductImage src={product.images[activeImage]} alt={product.title} />
          </div>

          {product.images.length > 1 && (
            <div className="flex gap-3">
              {product.images.map((src, index) => (
                <button
                  key={src}
                  onClick={() => setActiveImage(index)}
                  aria-label={`View photo ${index + 1}`}
                  className={`relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-accent/10 to-foreground/5 ring-2 transition-colors ${
                    activeImage === index ? "ring-accent" : "ring-transparent"
                  }`}
                >
                  <ProductImage
                    src={src}
                    alt={`${product.title} photo ${index + 1}`}
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col justify-center gap-6">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {product.title}
            </h1>
            <p className="mt-2 text-2xl font-medium text-accent">
              ${product.price}
            </p>
          </div>

          <p className="text-base leading-relaxed text-foreground/70">
            {product.description}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="w-full rounded-full bg-accent px-8 py-3.5 text-sm font-medium tracking-wide text-background transition-colors hover:bg-accent-hover sm:w-auto sm:px-12"
          >
            Add to Cart
          </button>

          <div className="mt-6 border-t border-foreground/10 pt-6">
            <button
              onClick={() => setAccordionOpen((prev) => !prev)}
              aria-expanded={accordionOpen}
              className="flex w-full items-center justify-between text-left text-sm font-medium tracking-wide text-foreground"
            >
              Materials &amp; Sustainability
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`h-4 w-4 shrink-0 text-foreground/50 transition-transform duration-300 ${
                  accordionOpen ? "rotate-180" : ""
                }`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <div
              className={`grid overflow-hidden transition-all duration-300 ease-out ${
                accordionOpen
                  ? "mt-4 grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <ul className="flex flex-col gap-2 overflow-hidden text-sm text-foreground/60">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

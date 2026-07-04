"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import ProductImage from "@/components/ProductImage";

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeFromCart, subtotal } =
    useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  async function handleCheckout() {
    setIsCheckingOut(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });

      const data = await response.json();

      if (!response.ok || !data.url) {
        throw new Error(data.error ?? "Checkout failed. Please try again.");
      }

      window.location.href = data.url;
    } catch (error) {
      console.error(error);
      setIsCheckingOut(false);
    }
  }

  return (
    <>
      <div
        onClick={closeCart}
        aria-hidden="true"
        className={`fixed inset-0 z-50 bg-foreground/30 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        aria-hidden={!isOpen}
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-background shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-foreground/10 px-6 py-6">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            Your Cart
          </h2>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="text-foreground/60 transition-colors hover:text-accent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M18 6 6 18" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <p className="text-sm text-foreground/50">
              Your cart is empty.
            </p>
          ) : (
            <ul className="flex flex-col gap-6">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4">
                  <div className="relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-accent/10 to-foreground/5 text-center text-[9px] uppercase leading-tight tracking-widest text-foreground/30">
                    {item.title}
                    <ProductImage src={item.image} alt={item.title} />
                  </div>

                  <div className="flex flex-1 flex-col gap-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm font-medium text-foreground">
                        {item.title}
                      </h3>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs text-foreground/40 transition-colors hover:text-accent"
                      >
                        Remove
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 rounded-full border border-foreground/10 px-3 py-1">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          aria-label="Decrease quantity"
                          className="text-foreground/60 transition-colors hover:text-accent"
                        >
                          −
                        </button>
                        <span className="w-4 text-center text-sm text-foreground">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          aria-label="Increase quantity"
                          className="text-foreground/60 transition-colors hover:text-accent"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-sm font-medium text-accent">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-foreground/10 px-6 py-6">
          <div className="mb-4 flex items-center justify-between text-sm">
            <span className="text-foreground/60">Subtotal</span>
            <span className="text-base font-semibold text-foreground">
              ${subtotal.toFixed(2)}
            </span>
          </div>
          <button
            onClick={handleCheckout}
            disabled={items.length === 0 || isCheckingOut}
            className="w-full rounded-full bg-accent px-6 py-3 text-sm font-medium tracking-wide text-background transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-40"
          >
            {isCheckingOut ? "Redirecting…" : "Proceed to Checkout"}
          </button>
        </div>
      </aside>
    </>
  );
}

"use client";

import { useState } from 'react';
import { X } from 'lucide-react';

export function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="relative bg-primary text-primary-foreground">
      <div className="container mx-auto flex items-center justify-center px-4 py-2 text-center text-sm font-medium">
        <p className="pr-6 sm:pr-0">
          Só no mês de novembro: Finalize sua compra com o cupom
          <span className="mx-1 inline-block rounded-md bg-white px-2 py-0.5 font-bold text-primary shadow">
            blackfriday
          </span>
          e ganhe R$50 de desconto.
        </p>
        <button
          onClick={() => setIsVisible(false)}
          aria-label="Dispensar"
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 transition-colors hover:bg-white/20"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

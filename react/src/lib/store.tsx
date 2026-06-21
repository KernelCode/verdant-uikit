import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { PRODUCTS, type Product } from "../data/products";

export interface CartLine {
  product: Product;
  qty: number;
  color: number;
}

interface StoreValue {
  lines: CartLine[];
  favorites: Set<string>;
  add: (product: Product, qty?: number, color?: number) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  toggleFavorite: (id: string) => void;
  count: number;
  subtotal: number;
}

const StoreContext = createContext<StoreValue | null>(null);

/** Tiny in-memory store for cart + favorites (demo data, no backend). */
export function StoreProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>(() => [
    { product: PRODUCTS[0]!, qty: 1, color: 0 },
    { product: PRODUCTS[3]!, qty: 2, color: 0 },
  ]);
  const [favorites, setFavorites] = useState<Set<string>>(() => new Set(["orris", "sienna"]));

  const value = useMemo<StoreValue>(() => {
    const add: StoreValue["add"] = (product, qty = 1, color = 0) =>
      setLines((cur) => {
        const i = cur.findIndex((l) => l.product.id === product.id && l.color === color);
        if (i === -1) return [...cur, { product, qty, color }];
        const next = [...cur];
        next[i] = { ...next[i]!, qty: next[i]!.qty + qty };
        return next;
      });
    const setQty: StoreValue["setQty"] = (id, qty) =>
      setLines((cur) => cur.map((l) => (l.product.id === id ? { ...l, qty } : l)));
    const remove: StoreValue["remove"] = (id) => setLines((cur) => cur.filter((l) => l.product.id !== id));
    const toggleFavorite: StoreValue["toggleFavorite"] = (id) =>
      setFavorites((cur) => {
        const next = new Set(cur);
        next.has(id) ? next.delete(id) : next.add(id);
        return next;
      });
    const count = lines.reduce((n, l) => n + l.qty, 0);
    const subtotal = lines.reduce((n, l) => n + l.product.price * l.qty, 0);
    return { lines, favorites, add, setQty, remove, toggleFavorite, count, subtotal };
  }, [lines, favorites]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore(): StoreValue {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within <StoreProvider>");
  return ctx;
}

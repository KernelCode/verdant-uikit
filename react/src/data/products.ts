import elvo from "../assets/products/elvo.png";
import kivi from "../assets/products/kivi.png";
import mollis from "../assets/products/mollis.png";
import orrisCat from "../assets/products/orris-cat.png";
import orris from "../assets/products/orris.png";
import sienna from "../assets/products/sienna.png";

export type CategoryId = "lounge" | "office" | "dining" | "rocking";
export type Tone = "green" | "orange";

export interface Product {
  id: string;
  name: string;
  /** Price in the store's base currency unit (symbol comes from i18n). */
  price: number;
  oldPrice?: number;
  /** Discount percent, e.g. 5 → "-5%". */
  discount?: number;
  category: CategoryId;
  tone: Tone;
  /** Swatch hexes the buyer can pick from on the product page. */
  swatches: string[];
  rating: number;
  reviews: number;
  /** Catalog/grid image. */
  image: string;
  /** Larger hero image for the product page (falls back to image). */
  hero?: string;
  /** Optional ribbon. */
  flag?: "new" | "bestseller";
}

/** The four catalog filters shown as pills (labels are localized in i18n). */
export const CATEGORIES: CategoryId[] = ["lounge", "office", "dining", "rocking"];

const GREEN = ["#1f5c32", "#cf6a1a", "#3f5432"];
const ORANGE = ["#cf6a1a", "#1f5c32", "#2b2b2b"];

export const PRODUCTS: Product[] = [
  // Lounge
  { id: "orris", name: "Orris", price: 320, oldPrice: 340, discount: 5, category: "lounge", tone: "green", swatches: GREEN, rating: 4.8, reviews: 96, image: orrisCat, hero: orris, flag: "bestseller" },
  { id: "sienna", name: "Sienna Lounge Chair", price: 550, oldPrice: 580, discount: 5, category: "lounge", tone: "green", swatches: GREEN, rating: 5.0, reviews: 120, image: sienna, hero: sienna, flag: "new" },
  { id: "elvo", name: "Elvo", price: 500, oldPrice: 560, discount: 10, category: "lounge", tone: "orange", swatches: ORANGE, rating: 4.9, reviews: 74, image: elvo, hero: elvo },
  { id: "olea", name: "Olea", price: 460, oldPrice: 490, discount: 6, category: "lounge", tone: "green", swatches: GREEN, rating: 4.8, reviews: 58, image: sienna, hero: sienna },
  { id: "cedar", name: "Cedar", price: 340, category: "lounge", tone: "orange", swatches: ORANGE, rating: 4.6, reviews: 41, image: mollis, hero: mollis },
  { id: "clementine", name: "Clementine", price: 290, oldPrice: 320, discount: 9, category: "lounge", tone: "orange", swatches: ORANGE, rating: 4.5, reviews: 27, image: elvo, hero: elvo },

  // Office
  { id: "kivi", name: "Kivi", price: 245, oldPrice: 260, discount: 5, category: "office", tone: "green", swatches: GREEN, rating: 4.6, reviews: 38, image: kivi, hero: kivi },
  { id: "amber", name: "Amber Nook", price: 380, oldPrice: 420, discount: 10, category: "office", tone: "orange", swatches: ORANGE, rating: 4.5, reviews: 29, image: elvo, hero: elvo },
  { id: "hazel", name: "Hazel", price: 275, category: "office", tone: "green", swatches: GREEN, rating: 4.4, reviews: 22, image: kivi, hero: kivi },
  { id: "moss", name: "Moss", price: 360, category: "office", tone: "green", swatches: GREEN, rating: 4.7, reviews: 31, image: orrisCat, hero: orris, flag: "new" },

  // Dining
  { id: "verda", name: "Verda Tub", price: 410, category: "dining", tone: "green", swatches: GREEN, rating: 4.8, reviews: 44, image: orrisCat, hero: orris },
  { id: "pistac", name: "Pistac Seat", price: 290, category: "dining", tone: "green", swatches: GREEN, rating: 4.7, reviews: 33, image: kivi, hero: kivi },
  { id: "fern", name: "Fern", price: 320, oldPrice: 350, discount: 8, category: "dining", tone: "green", swatches: GREEN, rating: 4.6, reviews: 36, image: sienna, hero: sienna },
  { id: "juniper", name: "Juniper", price: 520, oldPrice: 560, discount: 7, category: "dining", tone: "green", swatches: GREEN, rating: 4.9, reviews: 63, image: sienna, hero: sienna },

  // Rocking
  { id: "mollis", name: "Mollis", price: 320, oldPrice: 360, discount: 10, category: "rocking", tone: "orange", swatches: ORANGE, rating: 4.7, reviews: 51, image: mollis, hero: mollis },
  { id: "saffron", name: "Saffron", price: 430, oldPrice: 480, discount: 10, category: "rocking", tone: "orange", swatches: ORANGE, rating: 4.6, reviews: 39, image: elvo, hero: elvo },
  { id: "laurel", name: "Laurel", price: 300, oldPrice: 330, discount: 9, category: "rocking", tone: "green", swatches: GREEN, rating: 4.5, reviews: 24, image: kivi, hero: kivi },
  { id: "sage", name: "Sage", price: 255, category: "rocking", tone: "green", swatches: GREEN, rating: 4.4, reviews: 19, image: orrisCat, hero: orris },
];

export const FEATURED = PRODUCTS.find((p) => p.id === "orris")!;
export const SPOTLIGHT = PRODUCTS.find((p) => p.id === "sienna")!;

export function productById(id: string | undefined): Product {
  return PRODUCTS.find((p) => p.id === id) ?? FEATURED;
}

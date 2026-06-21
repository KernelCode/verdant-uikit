export const en = {
  brand: "Verdant",
  tagline: "Furniture, refined.",
  nav: { landing: "Home", pricing: "Pricing", dashboard: "Dashboard", components: "Components", cta: "Shop now" },
  commerceNav: { storefront: "Home", products: "Catalog", product: "Product", cart: "Cart" },

  commerce: {
    currency: "$",
    locale: "en-US",
    searchPlaceholder: "Search chairs, sofas…",
    filters: "Filters",
    favorite: "Save",
    categories: { lounge: "Lounge", office: "Office", dining: "Dining", rocking: "Rocking" },
    tabs: { home: "Home", saved: "Saved", shop: "Shop", more: "More" },
    payments: ["mada", "Apple Pay", "Tabby", "Tamara", "STC Pay", "COD"],

    hero: {
      eyebrow: "Exclusive",
      title: ["Make Space For", "Something", "Better"],
      body: "A curated collection of sculptural seating, made for calm modern rooms.",
      cta: "Shop More",
      featured: "Sienna Lounge Chair",
    },

    storefront: {
      collectionsTitle: "Shop by room",
      featuredTitle: "Bestsellers",
      featuredBody: "The pieces our buyers reach for first.",
      spotlightTitle: "In the spotlight",
      newArrivals: "New arrivals",
      viewAll: "View all",
      freeShipping: "Free delivery across the Gulf on orders over $300",
      perks: [
        { title: "Free returns", body: "30 days, no questions" },
        { title: "2-year warranty", body: "On every frame" },
        { title: "White-glove delivery", body: "Assembled in your room" },
      ],
    },

    catalog: {
      title: "Catalog",
      results: "items",
      sort: "Sort",
      sortOptions: { featured: "Featured", priceLow: "Price: low to high", priceHigh: "Price: high to low", rating: "Top rated" },
      empty: "No pieces match these filters.",
      filterTitle: "Refine",
      priceRange: "Price range",
      apply: "Show results",
      clear: "Clear",
    },

    product: {
      back: "Back",
      color: "Color",
      quantity: "Quantity",
      buy: "Buy for",
      addToCart: "Add to cart",
      description: "A sculptural, ergonomic lounge chair designed for modern relaxation spaces.",
      details: "Details",
      shipping: "Shipping & returns",
      shippingBody: "Free white-glove delivery across the Gulf in 3–5 days. Cash on delivery available.",
      delivery: "Delivered in 3–5 days",
      related: "You may also like",
      specs: [
        { k: "Frame", v: "Solid oak" },
        { k: "Upholstery", v: "Velvet" },
        { k: "Dimensions", v: "78 × 80 × 74 cm" },
        { k: "Weight", v: "14 kg" },
      ],
    },

    cart: {
      title: "Your cart",
      empty: "Your cart is empty.",
      startShopping: "Start shopping",
      coupon: "Coupon code",
      apply: "Apply",
      subtotal: "Subtotal",
      shipping: "Shipping",
      free: "Free",
      vat: "VAT (15%)",
      total: "Total",
      checkout: "Checkout",
      remove: "Remove",
      payWith: "Pay with",
      freeShipBar: "away from free shipping",
      freeShipDone: "You’ve unlocked free shipping!",
    },

    showcase: {
      title: "Verdant design system",
      subtitle: "Every token, screen, and component in one place.",
      screens: "The screens",
      screensBody: "Storefront, catalog, and product — mobile-first, responsive to desktop.",
      colors: "Color",
      typography: "Typography",
      radius: "Radius",
      components: "Components",
    },
  },
};

export type Dict = typeof en;

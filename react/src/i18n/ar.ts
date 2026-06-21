import type { Dict } from "./en";

export const ar: Dict = {
  brand: "فيردانت",
  tagline: "أثاث بلمسة راقية.",
  nav: { landing: "الرئيسية", pricing: "الأسعار", dashboard: "لوحة التحكم", components: "المكوّنات", cta: "تسوّق الآن" },
  commerceNav: { storefront: "الرئيسية", products: "المتجر", product: "المنتج", cart: "السلة" },

  commerce: {
    currency: "﷼ ",
    locale: "ar-SA",
    searchPlaceholder: "ابحث عن كراسي، أرائك…",
    filters: "تصفية",
    favorite: "حفظ",
    categories: { lounge: "استرخاء", office: "مكتب", dining: "طعام", rocking: "هزّاز" },
    tabs: { home: "الرئيسية", saved: "المحفوظات", shop: "المتجر", more: "المزيد" },
    payments: ["مدى", "Apple Pay", "تابي", "تمارا", "STC Pay", "الدفع عند الاستلام"],

    hero: {
      eyebrow: "حصري",
      title: ["اصنع مساحةً", "لشيءٍ", "أجمل"],
      body: "تشكيلة منتقاة من المقاعد النحتية، صُممت للغرف العصرية الهادئة.",
      cta: "تسوّق المزيد",
      featured: "كرسي سيينا",
    },

    storefront: {
      collectionsTitle: "تسوّق حسب الغرفة",
      featuredTitle: "الأكثر مبيعًا",
      featuredBody: "القطع التي يبدأ بها عملاؤنا دائمًا.",
      spotlightTitle: "تحت الأضواء",
      newArrivals: "وصل حديثًا",
      viewAll: "عرض الكل",
      freeShipping: "توصيل مجاني لكل دول الخليج للطلبات فوق ٣٠٠ ﷼",
      perks: [
        { title: "إرجاع مجاني", body: "خلال ٣٠ يومًا دون أسئلة" },
        { title: "ضمان سنتين", body: "على كل هيكل" },
        { title: "توصيل وتركيب", body: "نركّبه في غرفتك" },
      ],
    },

    catalog: {
      title: "المتجر",
      results: "منتج",
      sort: "ترتيب",
      sortOptions: { featured: "المميّزة", priceLow: "السعر: من الأقل", priceHigh: "السعر: من الأعلى", rating: "الأعلى تقييمًا" },
      empty: "لا توجد قطع تطابق هذه التصفية.",
      filterTitle: "تنقية",
      priceRange: "نطاق السعر",
      apply: "عرض النتائج",
      clear: "مسح",
    },

    product: {
      back: "رجوع",
      color: "اللون",
      quantity: "الكمية",
      buy: "اشترِ بـ",
      addToCart: "أضف إلى السلة",
      description: "كرسي استرخاء نحتي ومريح، صُمم لمساحات الاسترخاء العصرية.",
      details: "التفاصيل",
      shipping: "الشحن والإرجاع",
      shippingBody: "توصيل وتركيب مجاني لكل دول الخليج خلال ٣–٥ أيام. الدفع عند الاستلام متاح.",
      delivery: "يُسلَّم خلال ٣–٥ أيام",
      related: "قد يعجبك أيضًا",
      specs: [
        { k: "الهيكل", v: "خشب بلوط صلب" },
        { k: "التنجيد", v: "مخمل" },
        { k: "الأبعاد", v: "٧٨ × ٨٠ × ٧٤ سم" },
        { k: "الوزن", v: "١٤ كجم" },
      ],
    },

    cart: {
      title: "سلتك",
      empty: "سلتك فارغة.",
      startShopping: "ابدأ التسوّق",
      coupon: "رمز الخصم",
      apply: "تطبيق",
      subtotal: "المجموع الفرعي",
      shipping: "الشحن",
      free: "مجاني",
      vat: "ضريبة القيمة المضافة (١٥٪)",
      total: "الإجمالي",
      checkout: "إتمام الشراء",
      remove: "إزالة",
      payWith: "ادفع عبر",
      freeShipBar: "تفصلك عن الشحن المجاني",
      freeShipDone: "حصلت على الشحن المجاني!",
    },

    showcase: {
      title: "نظام تصميم فيردانت",
      subtitle: "كل الرموز والشاشات والمكوّنات في مكان واحد.",
      screens: "الشاشات",
      screensBody: "الواجهة والمتجر والمنتج — تصميم للجوال أولًا، ومتجاوب حتى سطح المكتب.",
      colors: "الألوان",
      typography: "الخطوط",
      radius: "الانحناءات",
      components: "المكوّنات",
    },
  },
};

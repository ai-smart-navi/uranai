import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Check,
  CreditCard,
  Gem,
  Heart,
  Moon,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { products, type Product } from "../data/products";

const iconMap: Record<Product["icon"], LucideIcon> = {
  heart: Heart,
  moon: Moon,
  crystal: Gem,
};

const toneStyles: Record<Product["tone"], string> = {
  pink: "border-blush-200 bg-gradient-to-br from-white to-blush-50",
  lavender: "border-lavender-200 bg-gradient-to-br from-white to-lavender-50",
  beige: "border-[#f1dfbd] bg-gradient-to-br from-white to-cream",
};

const assuranceItems = [
  {
    text: "決済は外部決済サービスKOMOJUで行われます。カード情報は当サイトでは保存されません。",
    icon: CreditCard,
  },
  {
    text: "購入前確認ページで商品内容・返金条件・同意事項を確認できます。",
    icon: ShieldCheck,
  },
  {
    text: "鑑定結果はエンタメ・自己理解・行動のヒントを目的とした参考情報です。",
    icon: Heart,
  },
];

export default function MenuSection() {
  return (
    <section id="menu" className="section-shell scroll-mt-24 bg-[#fff9fb]">
      <SectionHeading
        label="paid menu"
        title="有料鑑定メニュー"
        description="無料占いで気持ちを整理したあと、もう少し詳しく状況整理をしたい方に向けた恋愛鑑定メニューです。今後の選択や行動のヒントとして、無理なくご検討ください。"
      />

      <div className="mb-6 rounded-[1.5rem] border border-blush-100 bg-white/85 p-4 shadow-card sm:p-5">
        <ul className="grid gap-3 sm:grid-cols-2">
          {assuranceItems.map(({ text, icon: Icon }) => (
            <li
              key={text}
              className="flex items-start gap-3 text-sm font-medium leading-7 text-cocoa/85"
            >
              <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blush-50 text-gold">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              {text}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  const Icon = iconMap[product.icon];
  const isExternalLink = product.ctaHref.startsWith("http");

  return (
    <article
      className={`relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border p-5 shadow-card ${toneStyles[product.tone]}`}
    >
      <Sparkles
        className="absolute right-5 top-5 h-5 w-5 text-gold/70"
        aria-hidden="true"
      />
      {product.badge ? (
        <span className="mb-4 w-fit rounded-full bg-cocoa px-3 py-1 text-xs font-bold text-white shadow-card">
          {product.badge}
        </span>
      ) : (
        <span className="mb-4 h-6" aria-hidden="true" />
      )}

      <div className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-white text-rosewood shadow-card">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-bold leading-relaxed text-cocoa">
        {product.title}
      </h3>
      <p className="mt-2 text-sm leading-7 text-rosewood/75">
        {product.description}
      </p>
      <p className="mt-5 flex items-end gap-1 text-3xl font-bold text-cocoa">
        {product.price}
        {product.priceNote ? (
          <span className="pb-1 text-sm font-medium text-rosewood/60">
            {product.priceNote}
          </span>
        ) : null}
      </p>

      <ul className="mt-5 space-y-3">
        {product.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-sm font-medium leading-6 text-cocoa/90"
          >
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white text-gold shadow-sm">
              <Check className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <a
        href={product.ctaHref}
        target={isExternalLink ? "_blank" : undefined}
        rel={isExternalLink ? "noopener noreferrer" : undefined}
        className="mt-auto inline-flex min-h-12 w-full max-w-full items-center justify-center gap-2 rounded-full bg-rosewood px-5 py-3 text-center text-sm font-bold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-cocoa focus:outline-none focus:ring-4 focus:ring-blush-200"
      >
        {product.ctaLabel}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </article>
  );
}

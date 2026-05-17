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
    text: "お支払いはStripeの決済ページで行われます。当サイトではカード情報を直接保存しません。",
    icon: CreditCard,
  },
  {
    text: "購入前確認ページで相談内容・返金条件・同意事項を確認できます。",
    icon: ShieldCheck,
  },
  {
    text: "相手の反応や状況をもとに、次にできる行動を一緒に整理します。",
    icon: Heart,
  },
];

export default function MenuSection() {
  const mainProduct = products.find((product) => product.featured);
  const singleProducts = products.filter((product) => !product.featured);

  return (
    <section id="menu" className="section-shell scroll-mt-24 bg-[#fff9fb]">
      <SectionHeading
        label="romance support"
        title="恋愛改善メニュー"
        description="無料相談で気持ちを整理したあと、LINE/DM添削や相手の反応整理、行動プラン作成まで必要な深さで選べます。"
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

      {mainProduct ? (
        <div className="mb-7">
          <ProductCard product={mainProduct} featured />
        </div>
      ) : null}

      <div>
        <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow mb-3 w-fit">single consultation</p>
            <h3 className="text-2xl font-bold leading-relaxed text-cocoa">
              単発相談
            </h3>
          </div>
          <p className="text-sm font-medium leading-7 text-rosewood/70">
            まず一度だけ整理したい方はこちらから選べます。
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {singleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  featured = false,
}: {
  product: Product;
  featured?: boolean;
}) {
  const Icon = iconMap[product.icon];
  const isExternalLink = product.ctaHref.startsWith("http");
  const cardClass = featured
    ? "border-2 border-gold/70 bg-gradient-to-br from-white via-blush-50 to-lavender-50 p-5 shadow-soft sm:p-7 lg:grid lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-8"
    : `border p-5 shadow-card ${toneStyles[product.tone]}`;
  const ctaClass = featured
    ? "mt-6 inline-flex min-h-12 w-full max-w-full items-center justify-center gap-2 rounded-full bg-cocoa px-5 py-3 text-center text-sm font-bold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-rosewood focus:outline-none focus:ring-4 focus:ring-gold/30 sm:w-auto"
    : "mt-5 inline-flex min-h-12 w-full max-w-full items-center justify-center gap-2 rounded-full bg-rosewood px-5 py-3 text-center text-sm font-bold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-cocoa focus:outline-none focus:ring-4 focus:ring-blush-200";

  return (
    <article
      className={`relative flex h-full flex-col overflow-hidden rounded-[1.75rem] ${cardClass}`}
    >
      <Sparkles
        className={`absolute right-5 top-5 text-gold/70 ${
          featured ? "h-7 w-7 animate-shimmer" : "h-5 w-5"
        }`}
        aria-hidden="true"
      />
      <div>
        {product.badge ? (
          <span
            className={`mb-4 inline-flex w-fit rounded-full px-3 py-1 text-xs font-bold shadow-card ${
              featured ? "bg-gold text-white" : "bg-cocoa text-white"
            }`}
          >
            {product.badge}
          </span>
        ) : (
          <span className="mb-4 block h-6" aria-hidden="true" />
        )}

        <div
          className={`mb-4 grid place-items-center rounded-2xl bg-white text-rosewood shadow-card ${
            featured ? "h-16 w-16" : "h-14 w-14"
          }`}
        >
          <Icon className={featured ? "h-7 w-7" : "h-6 w-6"} aria-hidden="true" />
        </div>
        <p
          className={`mb-2 text-sm font-bold text-gold ${
            featured ? "block" : "hidden"
          }`}
        >
          メイン商品
        </p>
        <h3
          className={`font-bold leading-relaxed text-cocoa ${
            featured ? "text-2xl sm:text-3xl" : "text-xl"
          }`}
        >
          {product.title}
        </h3>
        <p className="mt-2 text-sm leading-7 text-rosewood/75">
          {product.description}
        </p>
        <p
          className={`mt-5 flex items-end gap-1 font-bold text-cocoa ${
            featured ? "text-4xl" : "text-3xl"
          }`}
        >
          {product.price}
          {product.priceNote ? (
            <span className="pb-1 text-sm font-medium text-rosewood/60">
              {product.priceNote}
            </span>
          ) : null}
        </p>
      </div>

      <div className={featured ? "mt-6 lg:mt-0" : "mt-auto"}>
        <ul
          className={`grid gap-3 ${
            featured ? "sm:grid-cols-2" : "mt-5"
          }`}
        >
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

        <p className="mt-5 text-xs font-medium leading-6 text-rosewood/60">
          お申し込み前に、サービス内容・料金・返信ポリシー・返金・キャンセルポリシーをご確認ください。本サービスは恋愛相談サポートであり、特定の結果をお約束するものではありません。
        </p>
        <a
          href={product.ctaHref}
          target={isExternalLink ? "_blank" : undefined}
          rel={isExternalLink ? "noopener noreferrer" : undefined}
          className={ctaClass}
          aria-label={product.ctaLabel}
        >
          {product.ctaLabel}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
        {featured ? (
          <p className="mt-3 text-xs font-medium leading-6 text-rosewood/60">
            月額プランは継続的な相談・添削・行動整理をしたい方向けです。
          </p>
        ) : null}
      </div>
    </article>
  );
}

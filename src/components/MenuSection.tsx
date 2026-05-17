import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Check,
  X,
  CreditCard,
  Gem,
  Heart,
  Moon,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { products, type Product } from "../data/products";
import { siteLinks } from "../data/site";

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
    text: "申込内容確認画面で相談内容・返金条件・同意事項を確認できます。",
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
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (!selectedProduct) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProduct(null);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProduct]);

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
          <ProductCard
            product={mainProduct}
            featured
            onSelect={setSelectedProduct}
          />
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
            <ProductCard
              key={product.id}
              product={product}
              onSelect={setSelectedProduct}
            />
          ))}
        </div>
      </div>

      {selectedProduct ? (
        <PreCheckoutModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      ) : null}
    </section>
  );
}

function ProductCard({
  product,
  onSelect,
  featured = false,
}: {
  product: Product;
  onSelect: (product: Product) => void;
  featured?: boolean;
}) {
  const Icon = iconMap[product.icon];
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
          お申し込み前に、サービス内容・料金・返信ポリシー・返金ポリシーをご確認ください。本サービスは恋愛相談サポートであり、特定の結果を保証するものではありません。
        </p>
        <button
          type="button"
          className={ctaClass}
          aria-label={product.ctaLabel}
          onClick={() => onSelect(product)}
        >
          {product.ctaLabel}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
        {featured ? (
          <p className="mt-3 text-xs font-medium leading-6 text-rosewood/60">
            月額プランは継続的な相談・添削・行動整理をしたい方向けです。
          </p>
        ) : null}
      </div>
    </article>
  );
}

function PreCheckoutModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const [agreed, setAgreed] = useState(false);

  const isMonthly = product.planType === "月額プラン・定期課金";

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-cocoa/45 px-3 py-4 backdrop-blur-sm sm:items-center sm:px-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pre-checkout-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-[1.6rem] border border-blush-100 bg-white p-4 shadow-soft sm:p-6">
        <button
          type="button"
          className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-blush-100 bg-white text-rosewood shadow-card transition hover:bg-blush-50 focus:outline-none focus:ring-4 focus:ring-blush-100"
          onClick={onClose}
          aria-label="申込内容確認を閉じる"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <p className="eyebrow mb-4 w-fit">pre-checkout</p>
        <h3
          id="pre-checkout-title"
          className="pr-12 text-2xl font-bold leading-relaxed text-cocoa sm:text-3xl"
        >
          申込内容のご確認
        </h3>
        <p className="mt-2 text-sm leading-7 text-rosewood/75">
          内容をご確認のうえ、各ポリシーと注意事項に同意してからStripe決済ページへお進みください。
        </p>

        <div className="mt-5 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[1.25rem] border border-blush-100 bg-blush-50/45 p-4">
            <dl className="grid gap-3 text-sm leading-7">
              <div>
                <dt className="font-bold text-cocoa">サービス名</dt>
                <dd className="text-rosewood/75">{product.title}</dd>
              </div>
              <div>
                <dt className="font-bold text-cocoa">料金</dt>
                <dd className="text-rosewood/75">
                  {isMonthly ? `月額${product.price}` : product.price}
                </dd>
              </div>
              <div>
                <dt className="font-bold text-cocoa">種別</dt>
                <dd className="text-rosewood/75">{product.planType}</dd>
              </div>
              <div>
                <dt className="font-bold text-cocoa">支払い方法</dt>
                <dd className="text-rosewood/75">Stripe決済</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-[1.25rem] border border-lavender-100 bg-lavender-50/55 p-4">
            <h4 className="font-bold leading-7 text-cocoa">サービス内容</h4>
            <ul className="mt-3 grid gap-2 text-sm font-medium leading-6 text-cocoa/90 sm:grid-cols-2">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-4 grid gap-4">
          <ModalInfoBlock
            title="サービス提供時期"
            items={product.serviceTiming}
          />
          <ModalInfoBlock title="返信ポリシー" items={product.replyPolicy} />
          {product.recurringNotes ? (
            <ModalInfoBlock
              title="定期課金について"
              items={product.recurringNotes}
            />
          ) : null}
          {product.cancellationNotes ? (
            <ModalInfoBlock
              title="解約について"
              items={product.cancellationNotes}
            />
          ) : null}
          <ModalInfoBlock
            title="キャンセル・返金について"
            items={product.cancellationPolicy}
          />
          <ModalInfoBlock
            title="注意事項"
            items={[
              "本サービスは恋愛相談・状況整理・文章添削・行動提案を目的とするオンライン相談サービスです。",
              "特定の成果や相手の反応を保証するものではありません。",
              "医療行為、心理療法、法律相談、その他専門資格を要する助言を提供するものではありません。",
            ]}
          />
        </div>

        <label className="mt-5 flex items-start gap-3 rounded-[1.25rem] border border-blush-100 bg-white p-4 text-sm font-medium leading-7 text-cocoa shadow-sm">
          <input
            type="checkbox"
            className="mt-1 h-5 w-5 shrink-0 accent-rosewood"
            checked={agreed}
            onChange={(event) => setAgreed(event.target.checked)}
          />
          <span>
            <a className="font-bold text-rosewood underline" href={siteLinks.terms} target="_blank" rel="noopener noreferrer">
              利用規約
            </a>
            、
            <a className="font-bold text-rosewood underline" href={siteLinks.privacy} target="_blank" rel="noopener noreferrer">
              プライバシーポリシー
            </a>
            、
            <a className="font-bold text-rosewood underline" href={siteLinks.commercialTransaction} target="_blank" rel="noopener noreferrer">
              特定商取引法に基づく表記
            </a>
            、
            <a className="font-bold text-rosewood underline" href={siteLinks.refund} target="_blank" rel="noopener noreferrer">
              返金・キャンセルポリシー
            </a>
            、
            <a className="font-bold text-rosewood underline" href={siteLinks.replyPolicy} target="_blank" rel="noopener noreferrer">
              返信ポリシー
            </a>
            を確認し、サービス内容・料金・注意事項に同意します。
          </span>
        </label>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-medium leading-6 text-rosewood/60">
            決済情報はStripeの決済システム上で処理され、当サイトではカード情報を直接保存しません。
          </p>
          <button
            type="button"
            className={`inline-flex min-h-12 w-full max-w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-center text-sm font-bold shadow-card transition focus:outline-none focus:ring-4 disabled:cursor-not-allowed sm:w-auto ${
              agreed
                ? "bg-cocoa text-white hover:-translate-y-0.5 hover:bg-rosewood focus:ring-gold/30"
                : "bg-rosewood/30 text-white/80 focus:ring-blush-100"
            }`}
            disabled={!agreed}
            onClick={() => {
              if (agreed) {
                window.location.href = product.ctaHref;
              }
            }}
          >
            {product.paymentLabel}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}

function ModalInfoBlock({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <section className="rounded-[1.25rem] border border-blush-100 bg-white p-4 shadow-sm">
      <h4 className="font-bold leading-7 text-cocoa">{title}</h4>
      <ul className="mt-2 space-y-2 text-sm font-medium leading-7 text-rosewood/75">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

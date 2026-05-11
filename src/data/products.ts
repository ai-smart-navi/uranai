import { siteLinks } from "./site";

export type Product = {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  priceNote?: string;
  badge?: string;
  icon: "heart" | "moon" | "crystal";
  tone: "pink" | "lavender" | "beige";
};

export const products: Product[] = [
  {
    id: "free-love-fortune",
    title: "今週の恋愛運ミニ診断",
    price: "0円",
    description:
      "まずは気軽に、今週の恋愛運と恋の流れをチェックできます。",
    features: [
      "今週の恋愛運",
      "今週の恋の流れ",
      "あなたの魅力",
      "今週のアドバイス",
    ],
    ctaLabel: "無料で診断する",
    ctaHref: siteLinks.freeToolSection,
    badge: "人気No.1",
    icon: "heart",
    tone: "pink",
  },
  {
    id: "relationship-compatibility",
    title: "二人の相性・関係性診断",
    price: "980円",
    priceNote: "税込",
    description:
      "あなたと気になる相手の関係性、距離感、相性を詳しく整理したい方向けです。",
    features: [
      "二人の基本相性",
      "今の距離感",
      "すれ違いやすいポイント",
      "関係を進めるアドバイス",
    ],
    ctaLabel: "LINEで詳しく相談する",
    ctaHref: siteLinks.order,
    icon: "moon",
    tone: "lavender",
  },
  {
    id: "deep-reading",
    title: "彼の本音・復縁深掘り鑑定",
    price: "1,980円",
    priceNote: "税込",
    description:
      "相手の気持ちや復縁の可能性、今後の動き方まで深く知りたい方向けです。",
    features: [
      "相手の本音",
      "復縁・進展の可能性",
      "連絡のタイミング",
      "避けた方がいい行動",
    ],
    ctaLabel: "LINEで詳しく相談する",
    ctaHref: siteLinks.order,
    icon: "crystal",
    tone: "beige",
  },
];

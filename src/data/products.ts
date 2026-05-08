import { siteLinks } from "./site";

export type Product = {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  badge?: string;
  icon: "heart" | "moon" | "crystal";
  tone: "pink" | "lavender" | "beige";
};

export const products: Product[] = [
  {
    id: "birthday-compatibility",
    title: "誕生日でわかる恋愛相性診断",
    price: "980円",
    description:
      "無料占いのあと、相性をもっと詳しく知りたい方向けの追加鑑定です。",
    features: [
      "基本相性",
      "惹かれ合うポイント",
      "すれ違いやすいポイント",
      "距離を縮めるアドバイス",
    ],
    ctaLabel: "LINEで無料占いから始める",
    ctaHref: siteLinks.order,
    badge: "人気No.1",
    icon: "heart",
    tone: "pink",
  },
  {
    id: "true-feelings",
    title: "彼の本音リーディング",
    price: "1,480円",
    description:
      "無料占いのあと、彼の気持ちや連絡の流れを深く整理したい方向けです。",
    features: [
      "今の距離感",
      "彼の心理傾向",
      "連絡のタイミング",
      "会話のアドバイス",
    ],
    ctaLabel: "LINEで無料占いから始める",
    ctaHref: siteLinks.order,
    icon: "moon",
    tone: "lavender",
  },
  {
    id: "reunion-possibility",
    title: "復縁可能性診断",
    price: "1,980円",
    description:
      "無料占いのあと、復縁に向けた動き方を詳しく知りたい方向けです。",
    features: [
      "復縁の可能性",
      "相手の心理傾向",
      "今やるべきこと",
      "避けた方がいい行動",
    ],
    ctaLabel: "LINEで無料占いから始める",
    ctaHref: siteLinks.order,
    icon: "crystal",
    tone: "beige",
  },
];

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
  featured?: boolean;
  icon: "heart" | "moon" | "crystal";
  tone: "pink" | "lavender" | "beige";
};

const checkoutUrl = (plan: "light" | "premium") =>
  `${import.meta.env.BASE_URL}checkout.html?plan=${plan}`;

export const products: Product[] = [
  {
    id: "romance-support-member",
    title: "恋愛伴走メンバー",
    price: "7,980円",
    priceNote: "/ 月額",
    description:
      "迷ったらまず選びたい、恋愛改善のメインプランです。日々の不安やLINEの文面を一人で抱え込まず、行動まで一緒に整えていきます。",
    features: [
      "月1回恋愛タイプ分析",
      "週3回恋愛心理・恋愛ノウハウ配信（月12本程度）",
      "チャット相談し放題",
      "LINE/DM添削",
      "優先返信",
      "行動プラン作成",
      "コミュニティメンバーに参加可能",
    ],
    ctaLabel: "恋愛伴走メンバーに参加する",
    // TODO: 月額プラン決済リンクを設定
    ctaHref: "#",
    badge: "迷ったらこれ",
    featured: true,
    icon: "crystal",
    tone: "beige",
  },
  {
    id: "light-consultation",
    title: "ライト相談",
    price: "2,900円",
    description:
      "いまの状況を短時間で整理し、次に取りやすい行動をやさしくまとめる単発相談です。",
    features: [
      "状況整理",
      "価値観分析",
      "メッセージ添削",
      "行動アドバイス",
    ],
    ctaLabel: "ライト相談を申し込む",
    ctaHref: checkoutUrl("light"),
    icon: "heart",
    tone: "pink",
  },
  {
    id: "deep-consultation",
    title: "深掘り相談",
    price: "5,900円",
    description:
      "相手心理や今後の動き方まで整理し、LINE・DMの具体的な文面と行動プランまで一緒に作る単発相談です。",
    features: [
      "状況整理",
      "価値観分析",
      "メッセージ添削",
      "行動アドバイス",
      "相手心理整理",
      "行動プラン作成",
      "LINE・DM添削",
    ],
    ctaLabel: "深掘り相談を申し込む",
    ctaHref: checkoutUrl("premium"),
    badge: "しっかり整理",
    icon: "moon",
    tone: "lavender",
  },
];

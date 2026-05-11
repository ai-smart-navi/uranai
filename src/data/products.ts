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
    id: "love-light-reading",
    title: "恋愛ライト鑑定",
    price: "2,900円",
    description:
      "今の恋愛状況を整理し、これからの動き方や注意点を簡潔にお届けするお試し鑑定です。",
    features: [
      "今の気持ちを整理する",
      "恋愛状況の簡単な見立て",
      "行動のヒント",
      "注意したいポイント",
    ],
    ctaLabel: "ライト鑑定を受ける",
    ctaHref: "https://buy.stripe.com/test_cNi3cvcGj2KiaOp5Yr6oo00",
    icon: "heart",
    tone: "pink",
  },
  {
    id: "love-premium-reading",
    title: "恋愛プレミアム鑑定",
    price: "5,900円",
    description:
      "お相手との関係性・今後の流れ・距離の縮め方をより詳しく見ていく人気の鑑定プランです。",
    features: [
      "お相手との関係性の整理",
      "今後の流れの参考情報",
      "距離の縮め方",
      "迷いやすい場面の行動のヒント",
    ],
    ctaLabel: "プレミアム鑑定を受ける",
    ctaHref: "https://buy.stripe.com/test_4gM7sL0XB4Sq5u572v6oo01",
    badge: "人気No.1",
    icon: "moon",
    tone: "lavender",
  },
  {
    id: "love-deep-reading",
    title: "恋愛個別深掘り鑑定",
    price: "11,900円",
    description:
      "現在の状況をもとに、恋愛の悩みや今後の選択を丁寧に整理する個別向けの鑑定です。",
    features: [
      "個別のお悩みの状況整理",
      "今後の選択肢の整理",
      "気持ちを整える視点",
      "行動前に見直したいポイント",
    ],
    ctaLabel: "個別深掘り鑑定を申し込む",
    ctaHref: "https://buy.stripe.com/test_7sYfZh6hV70yg8Jfz16oo02",
    icon: "crystal",
    tone: "beige",
  },
];

export type Product = {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  paymentLabel: string;
  planType: "単発相談" | "月額プラン・定期課金";
  serviceTiming: string[];
  replyPolicy: string[];
  cancellationPolicy: string[];
  recurringNotes?: string[];
  cancellationNotes?: string[];
  priceNote?: string;
  badge?: string;
  featured?: boolean;
  icon: "heart" | "moon" | "crystal";
  tone: "pink" | "lavender" | "beige";
};

const stripeCheckoutUrls = {
  member: "https://buy.stripe.com/7sYbJ1fO2dXL1omalogYU00",
  light: "https://buy.stripe.com/7sYaEX59odXL5EC8dggYU01",
  deep: "https://buy.stripe.com/6oU4gz8lA7znaYWgJMgYU02",
} as const;

const singleConsultationTiming = [
  "決済確認後、相談内容の確認後に順次対応します。",
  "相談件数や内容により、返信までの時間が前後する場合があります。",
];

const singleReplyPolicy = [
  "即時返信、緊急対応、24時間以内の返信を保証するものではありません。",
];

const singleCancellationPolicy = [
  "オンライン相談サービスの性質上、決済完了後のキャンセル・返金は原則としてお受けしておりません。",
  "ただし、重複決済や当方都合によりサービス提供ができない場合は個別に対応します。",
];

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
    ctaHref: stripeCheckoutUrls.member,
    paymentLabel: "内容に同意して月額プランに申し込む",
    planType: "月額プラン・定期課金",
    recurringNotes: [
      "このプランは月額7,980円の定期課金サービスです。",
      "お申し込み後、解約手続きが完了するまで毎月自動で決済されます。",
      "次回決済日はStripe決済ページまたは決済後の案内をご確認ください。",
    ],
    cancellationNotes: [
      "解約を希望される場合は、次回更新日前までに指定の方法でご連絡ください。",
      "解約後も、すでに決済済みの期間についての日割り返金は原則として行っておりません。",
    ],
    serviceTiming: [
      "決済確認後、案内に従ってサービス提供を開始します。",
      "配信内容や相談対応は、運営状況により提供タイミングが前後する場合があります。",
    ],
    replyPolicy: [
      "恋愛伴走メンバーの方は単発相談より優先的に返信します。",
      "ただし、即時返信、緊急対応、24時間以内の返信を保証するものではありません。",
    ],
    cancellationPolicy: [
      "月額プランの性質上、決済完了後のキャンセル・返金は原則としてお受けしておりません。",
      "ただし、重複決済や当方都合によりサービス提供ができない場合は個別に対応します。",
    ],
    badge: "おすすめ・メインプラン",
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
    ctaHref: stripeCheckoutUrls.light,
    paymentLabel: "内容に同意してStripeで支払う",
    planType: "単発相談",
    serviceTiming: singleConsultationTiming,
    replyPolicy: singleReplyPolicy,
    cancellationPolicy: singleCancellationPolicy,
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
    ctaHref: stripeCheckoutUrls.deep,
    paymentLabel: "内容に同意してStripeで支払う",
    planType: "単発相談",
    serviceTiming: singleConsultationTiming,
    replyPolicy: singleReplyPolicy,
    cancellationPolicy: singleCancellationPolicy,
    badge: "しっかり整理",
    icon: "moon",
    tone: "lavender",
  },
];

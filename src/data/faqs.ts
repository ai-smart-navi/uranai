export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "どれくらいで届きますか？",
    answer: "通常24〜72時間以内にお届けします。",
  },
  {
    question: "どんな情報が必要ですか？",
    answer:
      "あなたとお相手の誕生日、現在の関係性、相談内容をお送りください。",
  },
  {
    question: "匿名でも申し込めますか？",
    answer: "はい、ニックネームでご相談いただけます。",
  },
  {
    question: "占い結果は必ず当たりますか？",
    answer:
      "未来を断定するものではなく、恋愛を整理するためのヒントとしてお届けします。",
  },
  {
    question: "支払い方法は何がありますか？",
    answer: "初期実装では外部決済リンクを想定してください。",
  },
];

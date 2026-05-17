export const genderOptions = [
  "女性",
  "男性",
  "その他",
  "回答しない",
] as const;

export const loveStatusOptions = [
  "片思い中",
  "恋人がいる",
  "復縁したい",
  "出会いがほしい",
  "複雑な関係",
  "まだわからない",
] as const;

export const partnerStatusOptions = [
  "いる",
  "いない",
  "元恋人が気になる",
  "秘密にしたい",
] as const;

export type Gender = (typeof genderOptions)[number];
export type LoveStatus = (typeof loveStatusOptions)[number];
export type PartnerStatus = (typeof partnerStatusOptions)[number];

export type FreeLoveFortuneInput = {
  nickname: string;
  gender: Gender;
  birthday: string;
  loveStatus: LoveStatus;
  partnerStatus: PartnerStatus;
  weekKey: string;
};

export type FreeLoveFortuneResult = {
  score: number;
  flow: string;
  charm: string;
  caution: string;
  advice: string;
  luckyColor: {
    name: string;
    hex: string;
  };
  luckyAction: string;
};

const statusScore: Record<LoveStatus, number> = {
  片思い中: 9,
  恋人がいる: 12,
  復縁したい: 7,
  出会いがほしい: 10,
  複雑な関係: 6,
  まだわからない: 8,
};

const partnerScore: Record<PartnerStatus, number> = {
  いる: 11,
  いない: 5,
  元恋人が気になる: 8,
  秘密にしたい: 4,
};

const flowMessages: Record<LoveStatus, string[]> = {
  片思い中: [
    "小さな接点が恋の芽を育てる流れです。急に距離を詰めるより、自然な会話を重ねるほど相手の中に安心感が残ります。",
    "気持ちを見せすぎない柔らかなアプローチが合う時期です。相手の反応を見ながら、一歩ずつ距離を整えていきましょう。",
  ],
  恋人がいる: [
    "二人の空気を整え直す流れです。いつものやりとりに感謝やねぎらいを少し足すと、安心感が戻りやすくなります。",
    "関係を深めるための確認期間です。言わなくても伝わるはずと思わず、短い言葉で気持ちを共有すると良い日です。",
  ],
  復縁したい: [
    "過去を急いで取り戻すより、今のあなたの変化を整える流れです。焦らず、相手に届く言葉を選ぶことが鍵になります。",
    "もう一度向き合うための土台を作る時期です。連絡より先に、自分の気持ちと望む関係を整理すると進みやすくなります。",
  ],
  出会いがほしい: [
    "新しい縁に気づきやすい流れです。いつもより少しだけ行動範囲を広げると、会話のきっかけが生まれやすくなります。",
    "恋の入口がゆっくり開く日です。完璧な出会いを探すより、心地よく話せる相手を大切にすると行動しやすくなります。",
  ],
  複雑な関係: [
    "気持ちと現実のバランスを見直す流れです。相手に合わせすぎず、自分が安心できる距離を選ぶことが大切です。",
    "曖昧さの中に答えを探すより、今できる小さな選択を整える時期です。無理に白黒つけず、心の疲れを軽くしましょう。",
  ],
  まだわからない: [
    "恋の方向性をゆっくり見つける流れです。すぐに答えを決めるより、心が軽くなる相手や時間を観察してみましょう。",
    "気持ちの輪郭が少しずつ見えてくる日です。好きかどうかより、一緒にいる自分が自然でいられるかを見てください。",
  ],
};

const charms = [
  "相手の小さな変化に気づけるやさしさ",
  "場の空気をふんわり和ませる親しみやすさ",
  "好きな人を大切に思える一途さ",
  "言葉にしすぎなくても伝わる落ち着いた雰囲気",
  "相手を急かさず待てる包容力",
  "自分らしいペースを持っているところ",
];

const cautions = [
  "相手の反応を深読みしすぎると、せっかくの魅力が隠れやすくなります。",
  "返事の速さだけで気持ちを判断しないようにしましょう。",
  "不安なときほど、言葉を強くしすぎないことが大切です。",
  "相手に合わせすぎるより、自分の心地よさも同じくらい大切にしてください。",
  "今週中に答えを出そうとせず、少し余白を残すと流れが整います。",
];

const adviceMessages: Record<LoveStatus, string[]> = {
  片思い中: [
    "相手が返しやすい短いメッセージを送ってみましょう。",
    "共通の話題をひとつ見つけて、軽く声をかけるのがおすすめです。",
  ],
  恋人がいる: [
    "ありがとうを一言添えるだけで、二人の空気がやわらぎます。",
    "次に一緒にしたいことを小さく提案してみましょう。",
  ],
  復縁したい: [
    "連絡する前に、伝えたいことを短くメモして気持ちを整えましょう。",
    "相手を責めない言葉で、今の自分の変化を整理してみてください。",
  ],
  出会いがほしい: [
    "プロフィールや服装に、今の気分が伝わる小さな明るさを足しましょう。",
    "気になる場所へ少しだけ足を運ぶと、恋の流れが動きやすくなります。",
  ],
  複雑な関係: [
    "今週は無理に追いかけず、自分が安心できる予定をひとつ入れましょう。",
    "相手に聞く前に、自分がどう扱われたいかを言葉にしてみてください。",
  ],
  まだわからない: [
    "心が軽くなる人・重くなる人を、そっと比べてみましょう。",
    "恋愛以外の楽しみを少し足すと、気持ちの答えが見えやすくなります。",
  ],
};

const luckyColors = [
  { name: "ローズピンク", hex: "#f8b6c6" },
  { name: "ラベンダー", hex: "#cbb3f5" },
  { name: "シャンパンゴールド", hex: "#c9a65a" },
  { name: "ミルキーホワイト", hex: "#fff7f9" },
  { name: "ココアブラウン", hex: "#7d4d5d" },
  { name: "クリームベージュ", hex: "#fffaf2" },
];

const luckyActions = [
  "お気に入りの香りをつける",
  "短いメッセージを丁寧に送る",
  "スマホの待受を明るい画像に変える",
  "白湯や温かい飲み物で心を落ち着ける",
  "鏡の前で笑顔をひとつ作る",
  "気になる相手との会話をメモに整理する",
];

export function generateFreeLoveFortune(
  input: FreeLoveFortuneInput,
): FreeLoveFortuneResult {
  const normalizedInput = [
    input.nickname.trim(),
    input.gender,
    input.birthday,
    input.loveStatus,
    input.partnerStatus,
    input.weekKey,
  ].join("|");
  const seed = hashString(normalizedInput);
  const birthdayPower = input.birthday
    .replace(/\D/g, "")
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0);
  const score =
    55 +
    ((seed +
      birthdayPower * 7 +
      statusScore[input.loveStatus] +
      partnerScore[input.partnerStatus]) %
      46);

  return {
    score,
    flow: pick(seed, flowMessages[input.loveStatus], 3),
    charm: pick(seed, charms, 11),
    caution: pick(seed, cautions, 17),
    advice: pick(seed, adviceMessages[input.loveStatus], 23),
    luckyColor: pick(seed, luckyColors, 31),
    luckyAction: pick(seed, luckyActions, 41),
  };
}

function hashString(value: string) {
  let hash = 2166136261;

  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
}

function pick<T>(seed: number, values: readonly T[], salt: number) {
  return values[(seed + salt) % values.length];
}

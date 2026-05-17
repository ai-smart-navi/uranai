import { getCurrentDateKey } from "./dateUtils";

export const zodiacOptions = [
  "おひつじ座",
  "おうし座",
  "ふたご座",
  "かに座",
  "しし座",
  "おとめ座",
  "てんびん座",
  "さそり座",
  "いて座",
  "やぎ座",
  "みずがめ座",
  "うお座",
] as const;

export type Zodiac = (typeof zodiacOptions)[number];

export type DailyFortuneInput = {
  nickname: string;
  zodiac: Zodiac;
  birthday: string;
  dateKey: string;
};

export type DailyFortuneResult = {
  score: number;
  rank: number;
  ranking: Zodiac[];
  general: string;
  love: string;
  work: string;
  money: string;
  luckyColor: {
    name: string;
    hex: string;
  };
  luckyItem: string;
  advice: string;
};

const generalMessages = [
  "新しいことに目を向けるほど、気分の流れが明るくなります。小さな予定変更も前向きに受け取ると良い日です。",
  "落ち着いて整える力が高まっています。急がず、身の回りの小さな片づけから気分を整えていきましょう。",
  "人との会話からヒントが入りやすい日です。気になった言葉はメモしておくと、あとで役に立ちます。",
  "無理に頑張りすぎず、休む時間を先に確保すると一日が安定します。",
  "直感が冴えやすい日です。迷ったときは、気持ちが軽くなる選択を大切にしてください。",
];

const loveMessages = [
  "やさしい言葉が恋の空気を整えます。短いメッセージでも、あなたらしい温度を添えてみましょう。",
  "相手の反応を急がず待つことで、自然な距離感を作れます。",
  "好きな人や大切な人に、感謝を一言伝えると心が近づきやすい日です。",
  "自分の魅力を低く見積もらないことが、恋愛を前向きに進める鍵です。",
  "恋の答えを急ぐより、心地よい会話を増やすことを意識してみてください。",
];

const workMessages = [
  "優先順位を3つに絞ると、仕事や勉強が進みやすくなります。",
  "丁寧な確認が評価につながる日です。送信前の見直しを大切にしてください。",
  "苦手な作業ほど、短い時間で区切ると集中力が続きます。",
  "周りに相談すると、思ったより早く道筋が見えてきます。",
  "新しい情報をひとつ取り入れると、次の行動が軽くなります。",
];

const moneyMessages = [
  "小さな出費を見直すと、安心感が戻ります。買う前に一呼吸おくのがおすすめです。",
  "必要なものと欲しいものを分けると、お金まわりの判断が整います。",
  "人へのちょっとした贈り物や気配りが、良い関係づくりにつながります。",
  "貯めるよりも整える意識が合う日です。財布やアプリの整理をしてみましょう。",
  "お得情報に飛びつくより、本当に使うかどうかを基準に選ぶと安心です。",
];

const luckyColors = [
  { name: "サンライトゴールド", hex: "#c9a65a" },
  { name: "ローズピンク", hex: "#f8b6c6" },
  { name: "ラベンダー", hex: "#cbb3f5" },
  { name: "ミルキーホワイト", hex: "#fff7f9" },
  { name: "ミントグリーン", hex: "#bfe8d4" },
  { name: "スカイブルー", hex: "#b8d9ff" },
];

const luckyItems = [
  "ハンドクリーム",
  "小さなノート",
  "白いマグカップ",
  "星モチーフの小物",
  "お気に入りのペン",
  "淡い色のアクセサリー",
  "きれいに整えたスマホ画面",
];

const adviceMessages = [
  "迷ったら、気持ちが少し明るくなる方を選んでみてください。",
  "深呼吸をしてから動くと、今日の流れを味方にできます。",
  "予定を詰めすぎず、余白をひとつ残すと気持ちが安定します。",
  "丁寧な一言が、思った以上に良い流れを連れてきます。",
  "完璧を目指すより、まず一歩進めることを大切にしましょう。",
];

export function generateDailyFortune(
  input: DailyFortuneInput,
): DailyFortuneResult {
  const seed = hashString(
    [
      input.nickname.trim(),
      input.zodiac,
      input.birthday,
      input.dateKey,
    ].join("|"),
  );
  const ranking = getZodiacRanking(input.dateKey);
  const rank = ranking.indexOf(input.zodiac) + 1;
  const birthdayPower = input.birthday
    .replace(/\D/g, "")
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0);
  const rankBonus = Math.max(0, 13 - rank);
  const score = Math.min(100, 52 + ((seed + birthdayPower) % 37) + rankBonus);

  return {
    score,
    rank,
    ranking,
    general: pick(seed, generalMessages, 3),
    love: pick(seed, loveMessages, 7),
    work: pick(seed, workMessages, 11),
    money: pick(seed, moneyMessages, 17),
    luckyColor: pick(seed, luckyColors, 23),
    luckyItem: pick(seed, luckyItems, 29),
    advice: pick(seed, adviceMessages, 31),
  };
}

export function getZodiacRanking(dateKey = getCurrentDateKey()) {
  return [...zodiacOptions].sort((a, b) => {
    const salt = `${dateKey}-daily-zodiac-ranking`;
    return hashString(`${salt}-${a}`) - hashString(`${salt}-${b}`);
  });
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

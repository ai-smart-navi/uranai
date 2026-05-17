import { type FormEvent, useState } from "react";
import {
  ArrowRight,
  Briefcase,
  Coins,
  Heart,
  Palette,
  Sparkles,
  Star,
  Sun,
} from "lucide-react";
import BirthdayFields from "./BirthdayFields";
import {
  generateDailyFortune,
  getZodiacRanking,
  zodiacOptions,
  type DailyFortuneInput,
  type DailyFortuneResult,
  type Zodiac,
} from "../lib/dailyFortune";
import {
  emptyBirthdayParts,
  formatBirthdayParts,
  getCurrentDateKey,
  type BirthdayParts,
} from "../lib/dateUtils";

type FormState = {
  nickname: string;
  zodiac: Zodiac | "";
  birthday: BirthdayParts;
};

const initialForm: FormState = {
  nickname: "",
  zodiac: "",
  birthday: emptyBirthdayParts,
};

type DailyFortuneToolProps = {
  compact?: boolean;
};

export default function DailyFortuneTool({
  compact = false,
}: DailyFortuneToolProps) {
  const dateKey = getCurrentDateKey();
  const [form, setForm] = useState<FormState>(initialForm);
  const [result, setResult] = useState<DailyFortuneResult | null>(null);
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const birthday = formatBirthdayParts(form.birthday);
    if (!birthday) {
      setError("正しい生年月日を入力してください。");
      setResult(null);
      return;
    }

    if (!form.nickname.trim() || !form.zodiac) {
      setError("ニックネーム・タイプ・生年月日を入力してください。");
      setResult(null);
      return;
    }

    const input: DailyFortuneInput = {
      nickname: form.nickname.trim(),
      zodiac: form.zodiac,
      birthday,
      dateKey,
    };

    setResult(generateDailyFortune(input));
    setError("");
  };

  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border border-lavender-100 bg-white shadow-soft ${
        compact ? "p-4 sm:p-6" : "p-4 sm:p-6 lg:p-8"
      }`}
    >
      <Star
        className="absolute right-5 top-5 h-6 w-6 text-gold/60"
        aria-hidden="true"
      />
      <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <form
          className="rounded-[1.5rem] border border-lavender-100 bg-lavender-50/55 p-4 sm:p-5"
          onSubmit={handleSubmit}
        >
          <div className="mb-5 flex items-start gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-gold shadow-card">
              <Sun className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-lg font-bold leading-7 text-cocoa">
                今日の行動ヒントチェック
              </h3>
              <p className="mt-1 text-sm leading-7 text-rosewood/75">
                ニックネーム・生年月日・選択項目を入れるだけで、今日の状態と行動のヒントをかんたんに確認できます。
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            <label className="grid gap-2 text-sm font-bold text-cocoa">
              ニックネーム
              <input
                className="min-h-12 rounded-2xl border border-lavender-100 bg-white px-4 text-base font-medium text-cocoa outline-none transition placeholder:text-rosewood/35 focus:border-lavender-200 focus:ring-4 focus:ring-lavender-100"
                value={form.nickname}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    nickname: event.target.value,
                  }))
                }
                placeholder="例：さくら"
              />
            </label>

            <label className="grid gap-2 text-sm font-bold text-cocoa">
              タイプ
              <select
                className="min-h-12 rounded-2xl border border-lavender-100 bg-white px-4 text-base font-medium text-cocoa outline-none transition focus:border-lavender-200 focus:ring-4 focus:ring-lavender-100"
                value={form.zodiac}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    zodiac: event.target.value as Zodiac | "",
                  }))
                }
              >
                <option value="">選択してください</option>
                {zodiacOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <BirthdayFields
              value={form.birthday}
              onChange={(birthday) =>
                setForm((current) => ({ ...current, birthday }))
              }
            />
          </div>

          {error ? (
            <p className="mt-4 rounded-2xl bg-white px-4 py-3 text-sm font-bold leading-6 text-rosewood">
              {error}
            </p>
          ) : null}

          <button className="btn-primary mt-5 w-full" type="submit">
            今日の行動ヒントを見る
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
          <p className="mt-3 rounded-2xl bg-white/80 px-4 py-3 text-xs leading-6 text-rosewood/60">
            入力内容は外部へ送信されず、この画面内のセルフチェックにのみ利用されます。氏名・住所・電話番号・LINE IDなどの個人情報は入力しないでください。
          </p>
        </form>

        <div className="rounded-[1.5rem] border border-blush-100 bg-gradient-to-br from-white to-cream p-4 sm:p-5">
          {result ? (
            <DailyFortuneResultView result={result} />
          ) : (
            <EmptyDailyResult compact={compact} dateKey={dateKey} />
          )}
        </div>
      </div>
    </div>
  );
}

function EmptyDailyResult({
  compact,
  dateKey,
}: {
  compact: boolean;
  dateKey: string;
}) {
  return (
    <div className="grid gap-5">
      <div className="grid min-h-[280px] place-items-center text-center">
        <div>
          <span className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-[1.35rem] bg-white text-gold shadow-card">
            <Sparkles className="h-8 w-8" aria-hidden="true" />
          </span>
          <h3 className="text-xl font-bold leading-8 text-cocoa">
            今日の整理結果がここに表示されます
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-rosewood/75">
            {compact
              ? "今日のコンディションと、行動を見直すヒントを確認できます。"
              : "今日の状態と行動のヒントを、やさしい言葉でお届けします。"}
          </p>
        </div>
      </div>
      <RankingList ranking={getZodiacRanking(dateKey)} />
    </div>
  );
}

function DailyFortuneResultView({
  result,
}: {
  result: DailyFortuneResult;
}) {
  const resultItems = [
    { label: "今日の全体傾向", value: result.general, icon: Sparkles },
    { label: "今日の恋愛傾向", value: result.love, icon: Heart },
    { label: "仕事・勉強の見直し", value: result.work, icon: Briefcase },
    { label: "お金まわりの見直し", value: result.money, icon: Coins },
  ];

  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-[1.35rem] border border-white bg-white/90 p-5 text-center shadow-card">
          <p className="eyebrow mx-auto mb-4 w-fit">today</p>
          <p className="text-sm font-bold text-rosewood/70">
            今日のコンディションスコア
          </p>
          <p className="mt-2 text-6xl font-bold leading-none text-cocoa">
            {result.score}
            <span className="ml-1 text-2xl text-rosewood/60">点</span>
          </p>
          <div className="mt-5 h-3 overflow-hidden rounded-full bg-blush-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-gold via-blush-300 to-lavender-300"
              style={{ width: `${result.score}%` }}
            />
          </div>
        </div>
        <div className="rounded-[1.35rem] border border-white bg-white/90 p-5 text-center shadow-card">
          <p className="eyebrow mx-auto mb-4 w-fit">ranking</p>
          <p className="text-sm font-bold text-rosewood/70">
            今日の傾向ランキング
          </p>
          <p className="mt-3 text-5xl font-bold leading-none text-cocoa">
            {result.rank}
            <span className="ml-1 text-xl text-rosewood/60">位</span>
          </p>
          <p className="mt-3 text-sm font-bold text-rosewood/70">
            12タイプ中
          </p>
        </div>
      </div>

      <div className="mt-4 grid gap-3">
        {resultItems.map(({ label, value, icon: Icon }) => (
          <div
            key={label}
            className="rounded-[1.1rem] border border-white bg-white/85 p-4 shadow-sm"
          >
            <p className="flex items-center gap-2 text-xs font-bold uppercase text-gold">
              <Icon className="h-4 w-4" aria-hidden="true" />
              {label}
            </p>
            <p className="mt-2 text-sm font-medium leading-7 text-cocoa">
              {value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-[1.1rem] border border-white bg-white/85 p-4 shadow-sm">
          <p className="flex items-center gap-2 text-xs font-bold uppercase text-gold">
            <Palette className="h-4 w-4" aria-hidden="true" />
            気分を整える色
          </p>
          <p className="mt-3 flex items-center gap-3 text-sm font-bold text-cocoa">
            <span
              className="h-6 w-6 rounded-full border border-blush-100 shadow-sm"
              style={{ backgroundColor: result.luckyColor.hex }}
              aria-hidden="true"
            />
            {result.luckyColor.name}
          </p>
        </div>
        <div className="rounded-[1.1rem] border border-white bg-white/85 p-4 shadow-sm">
          <p className="text-xs font-bold uppercase text-gold">
            気分を整えるアイテム
          </p>
          <p className="mt-3 text-sm font-bold leading-7 text-cocoa">
            {result.luckyItem}
          </p>
        </div>
      </div>

      <div className="mt-4 rounded-[1.1rem] border border-white bg-white/85 p-4 text-center shadow-sm">
        <p className="text-xs font-bold uppercase text-gold">
          今日のひとことアドバイス
        </p>
        <p className="mt-3 text-sm font-bold leading-7 text-cocoa">
          {result.advice}
        </p>
      </div>

      <RankingList ranking={result.ranking} highlightRank={result.rank} />
    </div>
  );
}

function RankingList({
  ranking,
  highlightRank,
}: {
  ranking: readonly Zodiac[];
  highlightRank?: number;
}) {
  return (
    <div className="mt-4 rounded-[1.35rem] border border-white bg-white/80 p-4 shadow-sm">
      <h3 className="text-base font-bold leading-7 text-cocoa">
          今日の12タイプ傾向
      </h3>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {ranking.map((zodiac, index) => {
          const rank = index + 1;
          const isHighlighted = highlightRank === rank;

          return (
            <div
              key={zodiac}
              className={`flex items-center justify-between rounded-2xl px-3 py-2 text-sm font-bold ${
                isHighlighted
                  ? "bg-rosewood text-white shadow-card"
                  : "bg-lavender-50 text-cocoa"
              }`}
            >
              <span>{rank}位</span>
              <span>{zodiac}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

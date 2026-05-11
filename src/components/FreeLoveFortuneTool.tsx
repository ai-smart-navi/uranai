import { type FormEvent, useEffect, useState } from "react";
import {
  ArrowRight,
  CalendarClock,
  Heart,
  Palette,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import { siteLinks } from "../data/site";
import BirthdayFields from "./BirthdayFields";
import {
  generateFreeLoveFortune,
  genderOptions,
  loveStatusOptions,
  partnerStatusOptions,
  type FreeLoveFortuneInput,
  type FreeLoveFortuneResult,
  type Gender,
  type LoveStatus,
  type PartnerStatus,
} from "../lib/freeLoveFortune";
import {
  emptyBirthdayParts,
  formatBirthdayParts,
  getCurrentWeekKey,
  parseBirthday,
  type BirthdayParts,
} from "../lib/dateUtils";

const STORAGE_KEY = "loveTips.weeklyLoveFortune";
const WEEKLY_DONE_MESSAGE =
  "今週の恋愛運はすでに診断済みです。来週になると、新しい恋愛運を診断できます。";

type FormState = {
  nickname: string;
  gender: Gender | "";
  birthday: BirthdayParts;
  loveStatus: LoveStatus | "";
  partnerStatus: PartnerStatus | "";
};

type StoredWeeklyLoveFortune = {
  weekKey: string;
  input: FreeLoveFortuneInput;
  result: FreeLoveFortuneResult;
  diagnosedAt: string;
};

const initialForm: FormState = {
  nickname: "",
  gender: "",
  birthday: emptyBirthdayParts,
  loveStatus: "",
  partnerStatus: "",
};

type FreeLoveFortuneToolProps = {
  compact?: boolean;
};

export default function FreeLoveFortuneTool({
  compact = false,
}: FreeLoveFortuneToolProps) {
  const weekKey = getCurrentWeekKey();
  const [form, setForm] = useState<FormState>(initialForm);
  const [result, setResult] = useState<FreeLoveFortuneResult | null>(null);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  useEffect(() => {
    const stored = readStoredWeeklyFortune(weekKey);

    if (!stored) {
      return;
    }

    setForm({
      nickname: stored.input.nickname,
      gender: stored.input.gender,
      birthday: parseBirthday(stored.input.birthday),
      loveStatus: stored.input.loveStatus,
      partnerStatus: stored.input.partnerStatus,
    });
    setResult(stored.result);
    setNotice(WEEKLY_DONE_MESSAGE);
  }, [weekKey]);

  const setField = (field: keyof Omit<FormState, "birthday">, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const stored = readStoredWeeklyFortune(weekKey);
    if (stored) {
      setForm({
        nickname: stored.input.nickname,
        gender: stored.input.gender,
        birthday: parseBirthday(stored.input.birthday),
        loveStatus: stored.input.loveStatus,
        partnerStatus: stored.input.partnerStatus,
      });
      setResult(stored.result);
      setNotice(WEEKLY_DONE_MESSAGE);
      setError("");
      return;
    }

    const birthday = formatBirthdayParts(form.birthday);
    if (!birthday) {
      setError("正しい生年月日を入力してください。");
      setNotice("");
      setResult(null);
      return;
    }

    if (
      !form.nickname.trim() ||
      !form.gender ||
      !form.loveStatus ||
      !form.partnerStatus
    ) {
      setError("すべての項目を入力すると、恋愛運を診断できます。");
      setNotice("");
      setResult(null);
      return;
    }

    const input: FreeLoveFortuneInput = {
      nickname: form.nickname.trim(),
      gender: form.gender,
      birthday,
      loveStatus: form.loveStatus,
      partnerStatus: form.partnerStatus,
      weekKey,
    };
    const nextResult = generateFreeLoveFortune(input);

    writeStoredWeeklyFortune({
      weekKey,
      input,
      result: nextResult,
      diagnosedAt: new Date().toISOString(),
    });
    setResult(nextResult);
    setError("");
    setNotice("");
  };

  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border border-blush-100 bg-white shadow-soft ${
        compact ? "p-4 sm:p-6" : "p-4 sm:p-6 lg:p-8"
      }`}
    >
      <Sparkles
        className="absolute right-5 top-5 h-6 w-6 text-gold/60"
        aria-hidden="true"
      />
      <div className="grid gap-5 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
        <form
          className="rounded-[1.5rem] border border-blush-100 bg-blush-50/45 p-4 sm:p-5"
          onSubmit={handleSubmit}
        >
          <div className="mb-5 flex items-start gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-rosewood shadow-card">
              <WandSparkles className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-lg font-bold leading-7 text-cocoa">
                今週の恋愛運ミニ診断
              </h3>
              <p className="mt-1 text-sm leading-7 text-rosewood/75">
                恋愛運は毎日大きく変わるものではないため、love
                tipsでは1週間に1回、今週の恋の流れを診断できます。
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            <label className="grid gap-2 text-sm font-bold text-cocoa">
              ニックネーム
              <input
                className="min-h-12 rounded-2xl border border-blush-100 bg-white px-4 text-base font-medium text-cocoa outline-none transition placeholder:text-rosewood/35 focus:border-blush-300 focus:ring-4 focus:ring-blush-100"
                value={form.nickname}
                onChange={(event) => setField("nickname", event.target.value)}
                placeholder="例：さくら"
              />
            </label>

            <label className="grid gap-2 text-sm font-bold text-cocoa">
              性別
              <select
                className="min-h-12 rounded-2xl border border-blush-100 bg-white px-4 text-base font-medium text-cocoa outline-none transition focus:border-blush-300 focus:ring-4 focus:ring-blush-100"
                value={form.gender}
                onChange={(event) => setField("gender", event.target.value)}
              >
                <option value="">選択してください</option>
                {genderOptions.map((option) => (
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

            <label className="grid gap-2 text-sm font-bold text-cocoa">
              今の恋愛状況
              <select
                className="min-h-12 rounded-2xl border border-blush-100 bg-white px-4 text-base font-medium text-cocoa outline-none transition focus:border-blush-300 focus:ring-4 focus:ring-blush-100"
                value={form.loveStatus}
                onChange={(event) => setField("loveStatus", event.target.value)}
              >
                <option value="">選択してください</option>
                {loveStatusOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2 text-sm font-bold text-cocoa">
              気になる相手の有無
              <select
                className="min-h-12 rounded-2xl border border-blush-100 bg-white px-4 text-base font-medium text-cocoa outline-none transition focus:border-blush-300 focus:ring-4 focus:ring-blush-100"
                value={form.partnerStatus}
                onChange={(event) =>
                  setField("partnerStatus", event.target.value)
                }
              >
                <option value="">選択してください</option>
                {partnerStatusOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {error ? (
            <p className="mt-4 rounded-2xl bg-white px-4 py-3 text-sm font-bold leading-6 text-rosewood">
              {error}
            </p>
          ) : null}
          {notice ? (
            <p className="mt-4 rounded-2xl bg-lavender-50 px-4 py-3 text-sm font-bold leading-6 text-lavender-500">
              {notice}
            </p>
          ) : null}

          <button className="btn-primary mt-5 w-full" type="submit">
            今週の恋愛運を診断する
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
          <p className="mt-3 text-center text-xs leading-6 text-rosewood/55">
            この診断はエンタメとしてお楽しみください
          </p>
        </form>

        <div className="rounded-[1.5rem] border border-lavender-100 bg-gradient-to-br from-white to-lavender-50/80 p-4 sm:p-5">
          {result ? (
            <FortuneResult result={result} notice={notice} />
          ) : (
            <EmptyResult compact={compact} />
          )}
        </div>
      </div>
    </div>
  );
}

function EmptyResult({ compact }: { compact: boolean }) {
  return (
    <div className="grid min-h-[360px] place-items-center text-center">
      <div>
        <span className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-[1.35rem] bg-white text-gold shadow-card">
          <Heart className="h-8 w-8" aria-hidden="true" />
        </span>
        <h3 className="text-xl font-bold leading-8 text-cocoa">
          今週の診断結果がここに表示されます
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-rosewood/75">
          {compact
            ? "フォームを入力すると、今週の恋愛運スコアと意識したいアドバイスを確認できます。"
            : "ニックネーム・生年月日・今の恋愛状況を入れるだけで、今週の恋の流れをやさしく診断します。"}
        </p>
      </div>
    </div>
  );
}

function FortuneResult({
  result,
  notice,
}: {
  result: FreeLoveFortuneResult;
  notice: string;
}) {
  const resultItems = [
    { label: "今週の恋の流れ", value: result.flow },
    { label: "あなたの魅力", value: result.charm },
    { label: "恋愛で気をつけること", value: result.caution },
    { label: "今週意識したいアドバイス", value: result.advice },
  ];

  return (
    <div>
      {notice ? (
        <p className="mb-4 rounded-2xl bg-white px-4 py-3 text-sm font-bold leading-6 text-lavender-500 shadow-sm">
          {notice}
        </p>
      ) : null}
      <div className="rounded-[1.35rem] border border-white bg-white/90 p-5 text-center shadow-card">
        <p className="eyebrow mx-auto mb-4 w-fit">this week</p>
        <p className="text-sm font-bold text-rosewood/70">
          今週の恋愛運スコア
        </p>
        <p className="mt-2 text-6xl font-bold leading-none text-cocoa">
          {result.score}
          <span className="ml-1 text-2xl text-rosewood/60">点</span>
        </p>
        <div className="mt-5 h-3 overflow-hidden rounded-full bg-blush-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blush-300 via-lavender-300 to-gold"
            style={{ width: `${result.score}%` }}
          />
        </div>
      </div>

      <div className="mt-4 grid gap-3">
        {resultItems.map((item) => (
          <div
            key={item.label}
            className="rounded-[1.1rem] border border-white bg-white/85 p-4 shadow-sm"
          >
            <p className="text-xs font-bold uppercase text-gold">
              {item.label}
            </p>
            <p className="mt-2 text-sm font-medium leading-7 text-cocoa">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-[1.1rem] border border-white bg-white/85 p-4 shadow-sm">
          <p className="flex items-center gap-2 text-xs font-bold uppercase text-gold">
            <Palette className="h-4 w-4" aria-hidden="true" />
            ラッキーカラー
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
          <p className="flex items-center gap-2 text-xs font-bold uppercase text-gold">
            <CalendarClock className="h-4 w-4" aria-hidden="true" />
            今週のラッキーアクション
          </p>
          <p className="mt-3 text-sm font-bold leading-7 text-cocoa">
            {result.luckyAction}
          </p>
        </div>
      </div>

      <div className="mt-5 rounded-[1.35rem] border border-blush-100 bg-hero-glow p-5 text-center shadow-card">
        <h3 className="text-lg font-bold leading-7 text-cocoa">
          二人の関係をもっと詳しく知りたい方へ
        </h3>
        <p className="mt-3 text-sm leading-7 text-rosewood/75">
          無料診断では“あなた一人の恋愛運”を見ています。相手の気持ち・相性・今後の流れまで知りたい場合は、追加鑑定で詳しく整理できます。
        </p>
        <a
          className="btn-primary mt-5 w-full sm:w-auto"
          href={siteLinks.line}
          target="_blank"
          rel="noopener noreferrer"
        >
          LINEで詳しく相談する
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
        <p className="mt-3 text-xs leading-6 text-rosewood/55">
          この診断はエンタメとしてお楽しみください
        </p>
      </div>
    </div>
  );
}

function readStoredWeeklyFortune(weekKey: string) {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return null;
    }

    const stored = JSON.parse(raw) as StoredWeeklyLoveFortune;
    return stored.weekKey === weekKey ? stored : null;
  } catch {
    return null;
  }
}

function writeStoredWeeklyFortune(value: StoredWeeklyLoveFortune) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch {
    // localStorage may be unavailable in private browsing; diagnosis still works.
  }
}

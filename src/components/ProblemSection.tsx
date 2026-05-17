import {
  Heart,
  HelpCircle,
  MessageCircleOff,
  RefreshCcw,
  Route,
  UsersRound,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const problems = [
  {
    text: "彼の気持ちが分からない",
    icon: HelpCircle,
  },
  {
    text: "連絡が来なくて不安になる",
    icon: MessageCircleOff,
  },
  {
    text: "好きなのに距離が縮まらない",
    icon: Heart,
  },
  {
    text: "復縁に向けた動き方を整理したい",
    icon: RefreshCcw,
  },
  {
    text: "自分から動くべきか迷っている",
    icon: Route,
  },
  {
    text: "LINE・DMの文面に迷っている",
    icon: UsersRound,
  },
];

export default function ProblemSection() {
  return (
    <section className="section-shell">
      <SectionHeading
        label="feelings"
        title="こんな恋の悩みはありませんか？"
        description="言葉にしづらい不安も、心理整理と次の行動に分けてやさしく整えていきます。"
      />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {problems.map(({ text, icon: Icon }) => (
          <div
            key={text}
            className="group flex items-center gap-4 rounded-3xl border border-blush-100 bg-white px-4 py-4 shadow-card transition hover:-translate-y-1 hover:border-blush-200"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blush-50 text-rosewood transition group-hover:bg-blush-100">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="text-sm font-bold leading-6 text-cocoa sm:text-base">
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

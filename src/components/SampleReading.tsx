import { Moon, Quote, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function SampleReading() {
  return (
    <section className="section-shell bg-[#fffaf5]">
      <SectionHeading label="sample" title="サンプル鑑定" />

      <div className="mx-auto max-w-3xl">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-[#f1dfbd] bg-white px-6 py-8 shadow-soft sm:px-10">
          <img
            src="/images/decorations.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 w-56 opacity-20"
          />
          <Moon
            className="absolute left-6 top-6 h-5 w-5 text-gold/70"
            aria-hidden="true"
          />
          <Quote
            className="mx-auto mb-5 h-9 w-9 text-blush-300"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-2xl space-y-4 text-center text-base font-medium leading-8 text-cocoa sm:text-lg">
            <p>あなたは相手に安心感を与えるタイプです。</p>
            <p>ただ、自分の気持ちを我慢しすぎる傾向があります。</p>
            <p>
              今は一気に距離を縮めるより、軽い会話を増やす時期です。
            </p>
          </div>
          <div className="mt-7 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blush-50 px-4 py-2 text-xs font-bold text-rosewood">
              <Sparkles className="h-4 w-4 text-gold" aria-hidden="true" />
              行動のヒントとしてお届けします
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

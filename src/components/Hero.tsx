import { ArrowRight, Heart, MessageCircle, Moon, Sparkles } from "lucide-react";
import { siteLinks } from "../data/site";
import { assetPath } from "../lib/assets";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-hero-glow pb-16 pt-8 sm:pb-20 sm:pt-12"
    >
      <img
        src={assetPath("/images/hero-bg.png")}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
        aria-hidden="true"
      />
      <div className="absolute left-4 top-28 -z-10 h-24 w-24 rounded-full bg-blush-200/60 blur-3xl" />
      <div className="absolute bottom-20 right-0 -z-10 h-40 w-40 rounded-full bg-lavender-200/70 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="animate-fade-up text-center lg:text-left">
          <p className="eyebrow mx-auto mb-5 w-fit lg:mx-0">
            恋愛相談・恋愛改善サポート
          </p>
          <h1 className="mx-auto max-w-3xl text-[1.82rem] font-bold leading-[1.45] text-cocoa min-[420px]:text-[2.05rem] sm:text-5xl lg:mx-0">
            <span className="block">好きな人と上手くいくために、</span>
            <span className="block sm:inline">今の状況と次の行動を</span>
            <span className="block sm:inline">一緒に整理する恋愛相談サービス</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-rosewood/80 sm:text-lg lg:mx-0">
            恋愛は、タイミングと行動で変わります。一人で悩み続ける時間を減らし、「次に何をすればいいか」を一緒に整理します。
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              className="btn-primary"
              href={siteLinks.line}
              target="_blank"
              rel="noopener noreferrer"
            >
              LINEで無料相談を試す
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a className="btn-secondary" href="#menu">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              恋愛改善メニューを見る
            </a>
            <a className="btn-secondary" href="#menu">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              恋愛伴走メンバーを見る
            </a>
          </div>

          <div className="mx-auto mt-8 grid w-full max-w-md grid-cols-3 gap-2 text-left min-[420px]:gap-3 lg:mx-0">
            {[
              ["相談", "気持ちを整理"],
              ["LINE/DM", "文面を添削"],
              ["行動", "次の一手を作成"],
            ].map(([title, text]) => (
              <div
                key={title}
                className="min-w-0 rounded-2xl border border-white/80 bg-white/75 px-3 py-3 shadow-card backdrop-blur"
              >
                <p className="text-sm font-bold text-cocoa">{title}</p>
                <p className="mt-1 text-[0.72rem] leading-5 text-rosewood/70">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px] animate-fade-up [animation-delay:120ms]">
          <div className="absolute left-4 top-8 z-10 rounded-full bg-white/90 p-3 text-gold shadow-card backdrop-blur">
            <Moon className="h-6 w-6" aria-hidden="true" />
          </div>
          <div className="absolute right-5 top-12 z-10 rounded-full bg-blush-100/90 p-3 text-rosewood shadow-card backdrop-blur">
            <Heart className="h-6 w-6" aria-hidden="true" />
          </div>
          <div className="absolute bottom-10 left-2 z-10 rounded-full bg-lavender-100/90 p-3 text-lavender-500 shadow-card backdrop-blur">
            <Sparkles className="h-6 w-6" aria-hidden="true" />
          </div>

          <div className="relative rounded-[2.25rem] border border-white/90 bg-white/70 p-3 shadow-soft backdrop-blur">
            <img
              src={assetPath("/images/hero-visual.png")}
              alt="恋愛相談のやさしい雰囲気を表す女性イラスト"
              className="aspect-[4/5] w-full rounded-[1.75rem] object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

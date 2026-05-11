import { useEffect, useState } from "react";
import { ArrowRight, Gift, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import DailyFortuneTool from "./components/DailyFortuneTool";
import FreeLoveFortuneTool from "./components/FreeLoveFortuneTool";
import ProblemSection from "./components/ProblemSection";
import MenuSection from "./components/MenuSection";
import FlowSection from "./components/FlowSection";
import SampleReading from "./components/SampleReading";
import TrustSection from "./components/TrustSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import SectionHeading from "./components/SectionHeading";
import { siteLinks } from "./data/site";

function App() {
  const [route, setRoute] = useState(() => getCurrentRoute());

  useEffect(() => {
    const handleRouteChange = () => setRoute(getCurrentRoute());

    window.addEventListener("hashchange", handleRouteChange);
    window.addEventListener("popstate", handleRouteChange);
    return () => {
      window.removeEventListener("hashchange", handleRouteChange);
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  if (isDailyFortuneRoute(route)) {
    return <DailyFortunePage />;
  }

  if (isFreeToolRoute(route)) {
    return <FreeToolPage />;
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#fffdfb] pb-24 text-cocoa sm:pb-0">
      <Header />
      <main>
        <Hero />
        <section
          id="daily-fortune-section"
          className="section-shell scroll-mt-24 pt-8 sm:pt-10"
        >
          <SectionHeading
            label="daily fortune"
            title="今日の運勢ミニ診断"
            description="ニックネーム・星座・生年月日を入れるだけで、今日の総合運と12星座ランキングをかんたんにチェックできます。"
          />
          <DailyFortuneTool />
          <div className="mt-5 text-center">
            <a
              className="inline-flex text-sm font-bold text-rosewood underline-offset-4 hover:underline"
              href={siteLinks.dailyFortune}
            >
              今日の運勢だけを開く
            </a>
          </div>
        </section>
        <section
          id="free-tool-section"
          className="section-shell scroll-mt-24 pt-8 sm:pt-10"
        >
          <SectionHeading
            label="weekly love"
            title="今週の恋愛運ミニ診断"
            description="恋愛運は毎日大きく変わるものではないため、love tipsでは1週間に1回、今週の恋の流れを診断できます。"
          />
          <FreeLoveFortuneTool />
          <div className="mt-5 text-center">
            <a
              className="inline-flex text-sm font-bold text-rosewood underline-offset-4 hover:underline"
              href={siteLinks.freeTool}
            >
              無料診断だけを開く
            </a>
          </div>
        </section>
        <section className="section-shell pt-8 sm:pt-10">
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              {
                title: "無料で相談スタート",
                text: "LINE追加後、まずは1つの恋の悩みを無料で相談できます。",
                icon: Gift,
              },
              {
                title: "匿名・ニックネームOK",
                text: "話せる範囲からで大丈夫。スマホからそのまま送れます。",
                icon: MessageCircle,
              },
              {
                title: "無理な案内はしません",
                text: "有料鑑定は希望する方だけ、Stripeのテスト決済リンクから確認できます。",
                icon: ShieldCheck,
              },
            ].map(({ title, text, icon: Icon }) => (
              <div
                key={title}
                className="rounded-[1.35rem] border border-blush-100 bg-white px-4 py-5 shadow-card"
              >
                <div className="mb-3 grid h-10 w-10 place-items-center rounded-2xl bg-blush-50 text-rosewood">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h2 className="text-base font-bold leading-7 text-cocoa">
                  {title}
                </h2>
                <p className="mt-1 text-sm leading-7 text-rosewood/75">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>
        <ProblemSection />
        <MenuSection />
        <FlowSection />
        <SampleReading />
        <TrustSection />
        <FaqSection />
        <section className="section-shell pb-20 pt-4">
          <div className="relative overflow-hidden rounded-[2rem] border border-blush-100 bg-hero-glow px-6 py-10 text-center shadow-soft sm:px-10">
            <Sparkles
              className="absolute right-6 top-6 h-7 w-7 animate-shimmer text-gold"
              aria-hidden="true"
            />
            <p className="eyebrow mx-auto mb-4 w-fit">love tips</p>
            <h2 className="mx-auto max-w-2xl text-2xl font-bold leading-relaxed text-cocoa sm:text-3xl">
              ひとりで悩み続ける前に、恋の流れを少しだけ整理してみませんか？
            </h2>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                className="btn-primary"
                href={siteLinks.line}
                target="_blank"
                rel="noopener noreferrer"
              >
                LINEで無料占いを申し込む
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a className="btn-secondary" href="#faq">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                申し込み前の不安を見る
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-blush-100 bg-white/95 px-4 py-3 shadow-[0_-12px_32px_rgba(125,77,93,0.12)] backdrop-blur sm:hidden">
        <a
          className="btn-primary w-full"
          href={siteLinks.line}
          target="_blank"
          rel="noopener noreferrer"
        >
          LINEで無料占いを申し込む
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

function getCurrentRoute() {
  return `${window.location.pathname}${window.location.hash}`;
}

function isFreeToolRoute(route: string) {
  const [pathname, hash = ""] = route.split("#");
  const normalizedPath = pathname.replace(/\/+$/, "");

  return hash === "free-tool" || normalizedPath.endsWith("/free-tool");
}

function isDailyFortuneRoute(route: string) {
  const [pathname, hash = ""] = route.split("#");
  const normalizedPath = pathname.replace(/\/+$/, "");

  return hash === "daily-fortune" || normalizedPath.endsWith("/daily-fortune");
}

function DailyFortunePage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#fffdfb] text-cocoa">
      <header className="border-b border-blush-100/70 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a
            href={import.meta.env.BASE_URL}
            className="flex min-w-0 items-center gap-3"
            aria-label="love tips トップページ"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-blush-200 to-lavender-200 text-gold shadow-card">
              <Sparkles className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-lg font-bold leading-none text-cocoa">
                love tips
              </span>
              <span className="mt-1 block text-[0.72rem] font-medium text-rosewood/70">
                今日の運勢
              </span>
            </span>
          </a>
          <a
            className="inline-flex min-h-10 shrink-0 items-center rounded-full border border-blush-200 bg-white px-4 py-2 text-sm font-bold text-rosewood shadow-card transition hover:bg-blush-50"
            href={import.meta.env.BASE_URL}
          >
            トップへ戻る
          </a>
        </div>
      </header>
      <main>
        <section className="section-shell py-10 sm:py-14">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <p className="eyebrow mx-auto mb-4 w-fit">daily fortune</p>
            <h1 className="text-[1.85rem] font-bold leading-relaxed text-cocoa sm:text-4xl">
              今日の運勢ミニ診断
            </h1>
            <p className="mt-4 text-base leading-8 text-rosewood/80">
              ニックネーム・星座・生年月日を入れるだけで、今日の総合運と12星座ランキングをかんたんにチェックできます。
            </p>
          </div>
          <DailyFortuneTool compact />
          <div className="mt-6 text-center">
            <a className="btn-secondary" href={import.meta.env.BASE_URL}>
              トップページに戻る
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

function FreeToolPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#fffdfb] text-cocoa">
      <header className="border-b border-blush-100/70 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a
            href={import.meta.env.BASE_URL}
            className="flex min-w-0 items-center gap-3"
            aria-label="love tips トップページ"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-blush-200 to-lavender-200 text-gold shadow-card">
              <Sparkles className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-lg font-bold leading-none text-cocoa">
                love tips
              </span>
              <span className="mt-1 block text-[0.72rem] font-medium text-rosewood/70">
                今週の恋愛占い
              </span>
            </span>
          </a>
          <a
            className="inline-flex min-h-10 shrink-0 items-center rounded-full border border-blush-200 bg-white px-4 py-2 text-sm font-bold text-rosewood shadow-card transition hover:bg-blush-50"
            href={import.meta.env.BASE_URL}
          >
            トップへ戻る
          </a>
        </div>
      </header>
      <main>
        <section className="section-shell py-10 sm:py-14">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <p className="eyebrow mx-auto mb-4 w-fit">weekly love</p>
            <h1 className="text-[1.85rem] font-bold leading-relaxed text-cocoa sm:text-4xl">
              今週の恋愛運ミニ診断
            </h1>
            <p className="mt-4 text-base leading-8 text-rosewood/80">
              ニックネーム・生年月日・今の恋愛状況を入れるだけで、今週の恋の流れをかんたんに診断できます。恋愛運の診断は1週間に1回だけ行えます。
            </p>
          </div>
          <FreeLoveFortuneTool compact />
          <div className="mt-6 text-center">
            <a className="btn-secondary" href={import.meta.env.BASE_URL}>
              トップページに戻る
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

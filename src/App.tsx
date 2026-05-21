import { ArrowRight, Gift, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import MenuSection from "./components/MenuSection";
import CommunitySection from "./components/CommunitySection";
import FlowSection from "./components/FlowSection";
import SampleReading from "./components/SampleReading";
import TrustSection from "./components/TrustSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import { siteLinks } from "./data/site";

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#fffdfb] pb-24 text-cocoa sm:pb-0">
      <Header />
      <main>
        <Hero />
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
                text: "有料相談は申込内容確認画面で内容と同意事項を確認できます。",
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
        <CommunitySection />
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
              一人で抱え込むのは、今日で終わりにしませんか？
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-7 text-rosewood/75 sm:text-base sm:leading-8">
              恋愛は、タイミングと行動で変わります。悩む時間を減らして、何をすればいいかを一緒に整理しましょう。
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                className="btn-primary"
                href={siteLinks.line}
                target="_blank"
                rel="noopener noreferrer"
              >
                LINEで無料相談を申し込む
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
          LINEで無料相談を申し込む
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

export default App;

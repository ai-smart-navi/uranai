import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import MenuSection from "./components/MenuSection";
import FlowSection from "./components/FlowSection";
import SampleReading from "./components/SampleReading";
import TrustSection from "./components/TrustSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import { siteLinks } from "./data/site";

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#fffdfb] text-cocoa">
      <Header />
      <main>
        <Hero />
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
              <a className="btn-primary" href="#menu">
                今すぐ鑑定する
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                className="btn-secondary"
                href={siteLinks.line}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                LINEで相談する
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;

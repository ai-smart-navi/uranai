import { MessageCircle, Sparkles } from "lucide-react";
import { siteLinks } from "../data/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-blush-100/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="flex min-w-0 items-center gap-3"
          aria-label="love tips"
        >
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-blush-200 to-lavender-200 text-gold shadow-card">
            <Sparkles className="h-5 w-5" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-lg font-bold leading-none text-cocoa">
              love tips
            </span>
            <span className="mt-1 block text-[0.72rem] font-medium text-rosewood/70">
              恋愛改善サポート
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-5 text-sm font-medium text-rosewood/75 md:flex">
          <a className="hover:text-rosewood" href={siteLinks.dailyFortuneSection}>
            今日の運勢
          </a>
          <a className="hover:text-rosewood" href={siteLinks.freeToolSection}>
            今週の恋愛運
          </a>
          <a className="hover:text-rosewood" href="#menu">
            恋愛改善メニュー
          </a>
          <a className="hover:text-rosewood" href="#community">
            コミュニティ
          </a>
          <a className="hover:text-rosewood" href="#faq">
            FAQ
          </a>
        </nav>

        <a
          href={siteLinks.line}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-10 shrink-0 items-center gap-2 rounded-full bg-cocoa px-3 py-2 text-sm font-bold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-rosewood sm:px-4"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          <span className="hidden min-[360px]:inline">無料相談</span>
          <span className="min-[360px]:hidden">無料</span>
        </a>
      </div>
    </header>
  );
}

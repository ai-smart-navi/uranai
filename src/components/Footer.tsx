import { Instagram, Sparkles } from "lucide-react";
import { siteLinks } from "../data/site";

const footerLinks = [
  { label: "利用規約", href: siteLinks.terms },
  { label: "プライバシーポリシー", href: siteLinks.privacy },
  {
    label: "特定商取引法に基づく表記",
    href: siteLinks.commercialTransaction,
  },
  { label: "返金ポリシー", href: siteLinks.refund },
  { label: "免責事項", href: siteLinks.disclaimer },
  { label: "お問い合わせ", href: siteLinks.contact },
];

export default function Footer() {
  return (
    <footer className="border-t border-blush-100 bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-blush-200 to-lavender-200 text-gold">
              <Sparkles className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-lg font-bold leading-none text-cocoa">
                love tips
              </p>
              <p className="mt-1 text-xs font-medium text-rosewood/70">
                恋愛相談・LINE/DM添削・行動プラン作成の伴走サポート
              </p>
            </div>
          </div>
          <a
            href={siteLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-blush-50 px-4 py-2 text-sm font-bold text-rosewood transition hover:bg-blush-100"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
            Instagram：@love_tips000
          </a>
        </div>

        <nav className="grid gap-3 text-sm font-medium text-rosewood/70 sm:grid-cols-2 md:text-right">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              className="hover:text-rosewood"
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <p className="mx-auto mt-8 max-w-6xl text-xs text-rosewood/50">
        © love tips. Love support is offered as gentle hints for organizing your
        feelings and next actions.
      </p>
    </footer>
  );
}

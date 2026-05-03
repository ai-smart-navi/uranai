import { ChevronDown } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { faqs } from "../data/faqs";

export default function FaqSection() {
  return (
    <section id="faq" className="section-shell scroll-mt-24 bg-lavender-50/70">
      <SectionHeading
        label="faq"
        title="よくある質問"
        description="申し込み前に気になりやすいことをまとめました。"
      />

      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map((faq, index) => (
          <details
            key={faq.question}
            className="group rounded-[1.35rem] border border-white bg-white/90 px-5 py-4 shadow-card open:border-lavender-200"
            open={index === 0}
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-bold leading-7 text-cocoa">
              <span>Q. {faq.question}</span>
              <ChevronDown
                className="h-5 w-5 shrink-0 text-rosewood/50 transition group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <p className="mt-3 border-t border-blush-100 pt-3 text-sm leading-7 text-rosewood/75">
              A. {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

import { FileText, Gift, MessageCircle, WandSparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    title: "LINEで友だち追加",
    description: "無料相談のボタンから、LINE公式アカウントを追加します。",
    icon: WandSparkles,
  },
  {
    title: "無料相談希望と送る",
    description: "トーク画面で「無料相談希望」と送ると、案内が届きます。",
    icon: MessageCircle,
  },
  {
    title: "相談内容を送る",
    description: "片思い・復縁・連絡の不安など、今の悩みを1つ選んで送ります。",
    icon: FileText,
  },
  {
    title: "LINEで整理内容を受け取る",
    description: "恋の状況と次に試したい行動ヒントを、LINEでお届けします。",
    icon: Gift,
  },
];

export default function FlowSection() {
  return (
    <section id="flow" className="section-shell scroll-mt-24">
      <SectionHeading
        label="flow"
        title="無料相談の流れ"
        description="Instagramから来た方も、スマホだけでかんたんに申し込めます。"
      />

      <div className="grid gap-4 md:grid-cols-4">
        {steps.map(({ title, description, icon: Icon }, index) => (
          <div
            key={title}
            className="relative rounded-[1.5rem] border border-lavender-100 bg-white p-5 shadow-card"
          >
            <span className="mb-5 inline-flex rounded-full bg-lavender-50 px-3 py-1 text-xs font-bold text-lavender-500">
              Step {index + 1}
            </span>
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-blush-50 text-rosewood">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="font-bold leading-7 text-cocoa">{title}</h3>
            <p className="mt-2 text-sm leading-7 text-rosewood/70">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

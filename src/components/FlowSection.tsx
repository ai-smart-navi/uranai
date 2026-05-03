import { FileText, Gift, MessageCircle, WandSparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    title: "メニューを選ぶ",
    description: "気になる鑑定を選んで、申し込みリンクへ進みます。",
    icon: WandSparkles,
  },
  {
    title: "相談内容を送る",
    description: "フォームまたはLINEで、誕生日や今の状況を送ってください。",
    icon: MessageCircle,
  },
  {
    title: "鑑定結果を作成",
    description: "いただいた内容をもとに、恋の流れを丁寧に読み解きます。",
    icon: FileText,
  },
  {
    title: "LINEまたはPDFでお届け",
    description: "読み返しやすい形で、やさしい言葉にしてお届けします。",
    icon: Gift,
  },
];

export default function FlowSection() {
  return (
    <section id="flow" className="section-shell scroll-mt-24">
      <SectionHeading
        label="flow"
        title="鑑定の流れ"
        description="スマホからそのまま相談できる、シンプルな流れです。"
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

import { HeartHandshake, LockKeyhole, ShieldCheck, UserRoundCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";

const trustItems = [
  {
    title: "匿名で相談OK",
    description: "ニックネームで、話せる範囲からご相談いただけます。",
    icon: UserRoundCheck,
  },
  {
    title: "やさしい言葉でサポート",
    description: "不安を強める言い切りではなく、気持ちを整える表現を大切にします。",
    icon: HeartHandshake,
  },
  {
    title: "断定しすぎないアドバイス",
    description: "未来を決めつけず、行動のヒントとしてお届けします。",
    icon: ShieldCheck,
  },
  {
    title: "内容は外部に公開しません",
    description: "相談内容はサポート目的の範囲でのみ扱います。",
    icon: LockKeyhole,
  },
];

export default function TrustSection() {
  return (
    <section className="section-shell">
      <SectionHeading label="promise" title="安心してご相談いただくために" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {trustItems.map(({ title, description, icon: Icon }) => (
          <div
            key={title}
            className="rounded-[1.5rem] border border-blush-100 bg-white p-5 shadow-card"
          >
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-lavender-50 text-lavender-500">
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

import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Brain,
  HeartHandshake,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

type CommunityFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const communityFeatures: CommunityFeature[] = [
  {
    title: "友達には言いづらい悩みを共有できる",
    description:
      "「重いかな？」「こんなことで悩むの変かな？」と抱え込まず、今の気持ちをそのまま整理できる場所です。",
    icon: MessageCircle,
  },
  {
    title: "うまくいったLINE・DMの実例が見れる",
    description:
      "一般論ではなく、返信が来た一言や関係が進んだ距離感など、リアルな成功パターンを学べます。",
    icon: BookOpen,
  },
  {
    title: "恋愛心理と行動ノウハウを限定配信",
    description:
      "脈ありサイン、距離の詰め方、返信の考え方など、相手に振り回されにくくなるヒントを届けます。",
    icon: Brain,
  },
  {
    title: "一人では気づけない恋愛のクセが見つかる",
    description:
      "追いすぎる、我慢しすぎる、不安で試してしまう。うまくいきにくい原因を客観的に整理できます。",
    icon: HeartHandshake,
  },
  {
    title: "メンバー限定企画で恋愛力を上げる",
    description:
      "恋愛タイプ診断、LINE添削企画、脈ありチェック、恋愛心理ワークなど、参加型コンテンツを用意します。",
    icon: Sparkles,
  },
  {
    title: "悩んだ瞬間に戻ってこられる",
    description:
      "返信が遅い夜も、会えなくて不安な日も、感情的に動く前に相談できる心の避難場所になります。",
    icon: ShieldCheck,
  },
];

export default function CommunitySection() {
  return (
    <section
      id="community"
      className="section-shell scroll-mt-24 bg-lavender-50/60"
    >
      <SectionHeading
        label="members community"
        title="限定コミュニティ参加特典"
        description="恋愛伴走メンバーだけが参加できる、同じように恋愛を頑張る人たちと一緒に前へ進むための場所です。"
      />

      <div className="mx-auto max-w-5xl">
        <div className="rounded-[2rem] border border-white bg-white/90 p-5 shadow-soft sm:p-7">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="eyebrow mb-4 w-fit">member only</p>
              <h3 className="text-2xl font-bold leading-relaxed text-cocoa sm:text-3xl">
                恋愛伴走メンバー限定コミュニティ
              </h3>
              <div className="mt-4 space-y-3 text-sm font-medium leading-7 text-rosewood/75 sm:text-base sm:leading-8">
                <p>
                  恋愛で苦しい時は、答えがないこと以上に、一人で考え続けることがしんどくなるものです。
                </p>
                <p>
                  返信が来ない、脈ありか分からない、送ろうとして何回も文章を消す。そんな時に戻ってこられる場所を用意しました。
                </p>
                <p>
                  ここは、ただの相談場所ではありません。同じように恋愛を頑張っている人たちと繋がりながら、落ち着いて次の行動を選ぶための場所です。
                </p>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-blush-100 bg-gradient-to-br from-blush-50 to-white p-5">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-gold shadow-card">
                  <UsersRound className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h4 className="font-bold leading-7 text-cocoa">
                    一人で抱え込まない恋愛改善の場
                  </h4>
                  <p className="mt-2 text-sm leading-7 text-rosewood/75">
                    友達には言いづらい本音も、気にしすぎで終わらせず、心理整理と行動プランにつなげます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {communityFeatures.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-[1.5rem] border border-white bg-white p-5 shadow-card"
            >
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-blush-50 text-rosewood">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="font-bold leading-7 text-cocoa">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-rosewood/70">
                {description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-[1.75rem] border border-[#f1dfbd] bg-hero-glow px-5 py-7 text-center shadow-card sm:px-8">
          <p className="text-lg font-bold leading-8 text-cocoa">
            恋愛は、タイミングと行動で変わります。
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-medium leading-7 text-rosewood/75 sm:text-base sm:leading-8">
            悩む時間を減らして、「何をすればいいか」が分かる環境を作りました。
            一人で抱え込むのは、今日で終わりにしませんか？
          </p>
        </div>
      </div>
    </section>
  );
}

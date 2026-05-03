type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto mb-8 max-w-2xl text-center"
          : "mb-8 max-w-2xl text-left"
      }
    >
      {label ? <p className="eyebrow mb-3 inline-flex">{label}</p> : null}
      <h2 className="break-all text-[1.55rem] font-bold leading-relaxed text-cocoa sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-sm leading-7 text-rosewood/80 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

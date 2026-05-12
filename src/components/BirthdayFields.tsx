import type { BirthdayParts } from "../lib/dateUtils";

type BirthdayFieldsProps = {
  value: BirthdayParts;
  onChange: (value: BirthdayParts) => void;
};

const months = Array.from({ length: 12 }, (_, index) => String(index + 1));
const days = Array.from({ length: 31 }, (_, index) => String(index + 1));

export default function BirthdayFields({ value, onChange }: BirthdayFieldsProps) {
  const setPart = (part: keyof BirthdayParts, partValue: string) => {
    onChange({ ...value, [part]: partValue });
  };

  return (
    <fieldset className="grid gap-2">
      <legend className="text-sm font-bold text-cocoa">生年月日</legend>
      <div className="grid grid-cols-1 gap-2 min-[380px]:grid-cols-[1.2fr_0.9fr_0.9fr] min-[420px]:gap-3">
        <label className="grid min-w-0 gap-1 text-xs font-bold text-rosewood/70">
          年
          <input
            className="min-h-12 w-full min-w-0 rounded-2xl border border-blush-100 bg-white px-3 text-base font-medium text-cocoa outline-none transition placeholder:text-rosewood/35 focus:border-blush-300 focus:ring-4 focus:ring-blush-100"
            inputMode="numeric"
            maxLength={4}
            value={value.year}
            onChange={(event) =>
              setPart("year", event.target.value.replace(/\D/g, ""))
            }
            placeholder="例：1998"
          />
        </label>

        <label className="grid min-w-0 gap-1 text-xs font-bold text-rosewood/70">
          月
          <select
            className="min-h-12 w-full min-w-0 rounded-2xl border border-blush-100 bg-white px-3 text-base font-medium text-cocoa outline-none transition focus:border-blush-300 focus:ring-4 focus:ring-blush-100"
            value={value.month}
            onChange={(event) => setPart("month", event.target.value)}
          >
            <option value="">月</option>
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </label>

        <label className="grid min-w-0 gap-1 text-xs font-bold text-rosewood/70">
          日
          <select
            className="min-h-12 w-full min-w-0 rounded-2xl border border-blush-100 bg-white px-3 text-base font-medium text-cocoa outline-none transition focus:border-blush-300 focus:ring-4 focus:ring-blush-100"
            value={value.day}
            onChange={(event) => setPart("day", event.target.value)}
          >
            <option value="">日</option>
            {days.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </label>
      </div>
    </fieldset>
  );
}

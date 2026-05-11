export type BirthdayParts = {
  year: string;
  month: string;
  day: string;
};

export const emptyBirthdayParts: BirthdayParts = {
  year: "",
  month: "",
  day: "",
};

export function formatBirthdayParts(parts: BirthdayParts) {
  const year = Number(parts.year);
  const month = Number(parts.month);
  const day = Number(parts.day);

  if (
    !Number.isInteger(year) ||
    !Number.isInteger(month) ||
    !Number.isInteger(day) ||
    parts.year.trim().length !== 4
  ) {
    return null;
  }

  const date = new Date(year, month - 1, day);
  const isValid =
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day;

  if (!isValid) {
    return null;
  }

  return `${year}-${pad2(month)}-${pad2(day)}`;
}

export function parseBirthday(value: string): BirthdayParts {
  const [year = "", month = "", day = ""] = value.split("-");

  return {
    year,
    month: month.replace(/^0/, ""),
    day: day.replace(/^0/, ""),
  };
}

export function getCurrentDateKey(date = new Date()) {
  return `${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(
    date.getDate(),
  )}`;
}

export function getCurrentWeekKey(date = new Date()) {
  const target = new Date(date);
  target.setHours(0, 0, 0, 0);
  target.setDate(target.getDate() + 3 - ((target.getDay() + 6) % 7));

  const firstThursday = new Date(target.getFullYear(), 0, 4);
  const week =
    1 +
    Math.round(
      ((target.getTime() - firstThursday.getTime()) / 86400000 -
        3 +
        ((firstThursday.getDay() + 6) % 7)) /
        7,
    );

  return `${target.getFullYear()}-W${pad2(week)}`;
}

function pad2(value: number) {
  return String(value).padStart(2, "0");
}

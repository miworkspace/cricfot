const BANGLA_DIGITS = {
  "0": "\u09E6",
  "1": "\u09E7",
  "2": "\u09E8",
  "3": "\u09E9",
  "4": "\u09EA",
  "5": "\u09EB",
  "6": "\u09EC",
  "7": "\u09ED",
  "8": "\u09EE",
  "9": "\u09EF"
};
export function toBanglaNumber(input) {
  return String(input).split("").map((char) => BANGLA_DIGITS[char] || char).join("");
}
const BANGLA_DAYS = [
  "\u09B0\u09AC\u09BF\u09AC\u09BE\u09B0",
  "\u09B8\u09CB\u09AE\u09AC\u09BE\u09B0",
  "\u09AE\u0999\u09CD\u0997\u09B2\u09AC\u09BE\u09B0",
  "\u09AC\u09C1\u09A7\u09AC\u09BE\u09B0",
  "\u09AC\u09C3\u09B9\u09B8\u09CD\u09AA\u09A4\u09BF\u09AC\u09BE\u09B0",
  "\u09B6\u09C1\u0995\u09CD\u09B0\u09AC\u09BE\u09B0",
  "\u09B6\u09A8\u09BF\u09AC\u09BE\u09B0"
];
const BANGLA_MONTHS = [
  "\u099C\u09BE\u09A8\u09C1\u09AF\u09BC\u09BE\u09B0\u09BF",
  "\u09AB\u09C7\u09AC\u09CD\u09B0\u09C1\u09AF\u09BC\u09BE\u09B0\u09BF",
  "\u09AE\u09BE\u09B0\u09CD\u099A",
  "\u098F\u09AA\u09CD\u09B0\u09BF\u09B2",
  "\u09AE\u09C7",
  "\u099C\u09C1\u09A8",
  "\u099C\u09C1\u09B2\u09BE\u0987",
  "\u0986\u0997\u09B8\u09CD\u099F",
  "\u09B8\u09C7\u09AA\u09CD\u099F\u09C7\u09AE\u09CD\u09AC\u09B0",
  "\u0985\u0995\u09CD\u099F\u09CB\u09AC\u09B0",
  "\u09A8\u09AD\u09C7\u09AE\u09CD\u09AC\u09B0",
  "\u09A1\u09BF\u09B8\u09C7\u09AE\u09CD\u09AC\u09B0"
];
export function getBanglaFormattedDate(date = /* @__PURE__ */ new Date()) {
  const dayName = BANGLA_DAYS[date.getDay()];
  const day = toBanglaNumber(date.getDate());
  const monthName = BANGLA_MONTHS[date.getMonth()];
  const year = toBanglaNumber(date.getFullYear());
  return `${dayName}, ${day} ${monthName} ${year}`;
}

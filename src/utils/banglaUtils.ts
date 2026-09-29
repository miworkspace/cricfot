/**
 * Bangla text and numeral formatting utilities for CricFot
 */

const BANGLA_DIGITS: Record<string, string> = {
  '0': '০',
  '1': '১',
  '2': '২',
  '3': '৩',
  '4': '৪',
  '5': '৫',
  '6': '৬',
  '7': '৭',
  '8': '৮',
  '9': '৯',
};

export function toBanglaNumber(input: number | string): string {
  return String(input)
    .split('')
    .map((char) => BANGLA_DIGITS[char] || char)
    .join('');
}

const BANGLA_DAYS = [
  'রবিবার',
  'সোমবার',
  'মঙ্গলবার',
  'বুধবার',
  'বৃহস্পতিবার',
  'শুক্রবার',
  'শনিবার',
];

const BANGLA_MONTHS = [
  'জানুয়ারি',
  'ফেব্রুয়ারি',
  'মার্চ',
  'এপ্রিল',
  'মে',
  'জুন',
  'জুলাই',
  'আগস্ট',
  'সেপ্টেম্বর',
  'অক্টোবর',
  'নভেম্বর',
  'ডিসেম্বর',
];

export function getBanglaFormattedDate(date: Date = new Date()): string {
  const dayName = BANGLA_DAYS[date.getDay()];
  const day = toBanglaNumber(date.getDate());
  const monthName = BANGLA_MONTHS[date.getMonth()];
  const year = toBanglaNumber(date.getFullYear());

  return `${dayName}, ${day} ${monthName} ${year}`;
}

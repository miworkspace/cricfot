import { Sport } from '../types';

export interface NavItemConfig {
  label: string;
  banglaLabel: string;
  href: string;
  badge?: string;
  sport?: Sport;
  icon?: string;
}

export interface BottomNavItemConfig {
  label: string;
  banglaLabel: string;
  href: string;
  icon: 'home' | 'live' | 'cricket' | 'football' | 'news';
}

export interface BreakingNewsItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  publishedAt: string;
}

/**
 * Reusable Main Navigation Items
 * Hierarchy strictly follows CricFot editorial priorities:
 * 1. News/Blog (Home)
 * 2. Cricket
 * 3. Football
 * 4. Live Score
 * 5. Matches, Results, Analysis, Videos
 */
export const MAIN_NAVIGATION_ITEMS: NavItemConfig[] = [
  {
    label: 'Home',
    banglaLabel: 'প্রচ্ছদ',
    href: '/',
  },
  {
    label: 'Cricket',
    banglaLabel: 'ক্রিকেট',
    href: '/cricket',
    sport: 'cricket',
  },
  {
    label: 'Football',
    banglaLabel: 'ফুটবল',
    href: '/football',
    sport: 'football',
  },
  {
    label: 'Live',
    banglaLabel: 'লাইভ',
    href: '/live',
    badge: 'লাইভ',
  },
  {
    label: 'Matches',
    banglaLabel: 'ম্যাচ সূচি',
    href: '/matches',
  },
  {
    label: 'Results',
    banglaLabel: 'ফলাফল',
    href: '/results',
  },
  {
    label: 'Analysis',
    banglaLabel: 'বিশ্লেষণ',
    href: '/analysis',
  },
  {
    label: 'Videos',
    banglaLabel: 'ভিডিও',
    href: '/videos',
  },
];

/**
 * Mobile Bottom Navigation Items
 * Fixed on mobile screens (<= 768px)
 */
export const MOBILE_BOTTOM_NAV_ITEMS: BottomNavItemConfig[] = [
  {
    label: 'Home',
    banglaLabel: 'প্রচ্ছদ',
    href: '/',
    icon: 'home',
  },
  {
    label: 'Live',
    banglaLabel: 'লাইভ',
    href: '/live',
    icon: 'live',
  },
  {
    label: 'Cricket',
    banglaLabel: 'ক্রিকেট',
    href: '/cricket',
    icon: 'cricket',
  },
  {
    label: 'Football',
    banglaLabel: 'ফুটবল',
    href: '/football',
    icon: 'football',
  },
  {
    label: 'News',
    banglaLabel: 'সংবাদ',
    href: '/',
    icon: 'news',
  },
];

/**
 * Reusable Mock Breaking News for Ticker
 * Real-world sports journalistic headlines in Bangla
 */
export const MOCK_BREAKING_HEADLINES: BreakingNewsItem[] = [
  {
    id: 'brk-1',
    title: 'বিশ্বকাপ বাছাইপর্ব: অস্ট্রেলিয়ার বিপক্ষে টেস্টে শান্তর নেতৃত্বে ঘোষিত ১৬ সদস্যের বাংলাদেশ স্কোয়াড',
    slug: 'shanto-praises-pacers-tigers-test-campaign',
    category: 'বাংলাদেশ ক্রিকেট',
    publishedAt: '১০ মিনিট আগে',
  },
  {
    id: 'brk-2',
    title: 'উয়েফা চ্যাম্পিয়ন্স লিগ: শেষ ষোলোর রুদ্ধশ্বাস প্রথম লেগে বায়ার্ন মিউনিখ বনাম রিয়াল মাদ্রিদ ড্র',
    slug: 'champions-league-bayern-real-madrid-draw',
    category: 'আন্তর্জাতিক ফুটবল',
    publishedAt: '২৫ মিনিট আগে',
  },
  {
    id: 'brk-3',
    title: 'বিপিএল ২০২৬ ড্রাফট: দেশীয় পেসার ও ফিনিশারদের ওপর সর্বোচ্চ বাজি দলগুলোর',
    slug: 'bpl-2026-season-draft-franchise-strategies-local-pacers',
    category: 'বিপিএল',
    publishedAt: '৪০ মিনিট আগে',
  },
  {
    id: 'brk-4',
    title: 'ফিফা ফ্রেন্ডলি: ঘরের মাঠে মালদ্বীপকে ৩-১ গোলে উড়িয়ে দিল বাংলাদেশ জাতীয় ফুটবল দল',
    slug: 'fifa-friendly-bangladesh-defeats-maldives',
    category: 'বাংলাদেশ ফুটবল',
    publishedAt: '১ ঘণ্টা আগে',
  },
  {
    id: 'brk-5',
    title: 'আইসিসি টেস্ট অলরাউন্ডার র্যাঙ্কিংয়ে শীর্ষ পাঁচে অবস্থান ধরে রাখলেন মেহেদী হাসান মিরাজ',
    slug: 'icc-rankings-mehedi-hasan-miraz-top-five',
    category: 'আইসিসি',
    publishedAt: '২ ঘণ্টা আগে',
  },
];

/**
 * Trending topics for desktop quick navigation
 */
export const TRENDING_TOPICS = [
  { label: '#বিপিএল২০২৬', href: '/search?q=BPL' },
  { label: '#টাইগার্স', href: '/cricket' },
  { label: '#চ্যাম্পিয়ন্সলিগ', href: '/football' },
  { label: '#বাংলাদেশফুটবল', href: '/football' },
];

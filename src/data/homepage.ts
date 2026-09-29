import { Article, Match, VideoItem } from '../types';

/**
 * CricFot - Centralized Homepage Mock Data
 *
 * Designed to power the homepage sections with high editorial fidelity:
 * - featuredArticles (1 Hero + 3 Secondary)
 * - latestArticles (Fresh stream across Cricket & Football)
 * - liveMatches (Clearly labeled Sample Data / নমুনা তথ্য)
 * - cricketArticles (Dedicated Cricket package)
 * - footballArticles (Dedicated Football package)
 * - trendingArticles (Top 5 ranked stories)
 * - analysisArticles (In-depth tactical and editorial columns)
 * - videos (Video highlights and interviews)
 */

export const HOMEPAGE_FEATURED_MAIN: Article = {
  id: 'feat-main-1',
  title: 'মিরপুর টেস্টে শ্রীলঙ্কার বিপক্ষে লিটন ও শান্তর দারুণ জুটি, চালকের আসনে বাংলাদেশ',
  banglaTitle: 'মিরপুর টেস্টে শ্রীলঙ্কার বিপক্ষে লিটন ও শান্তর দারুণ জুটি, চালকের আসনে বাংলাদেশ',
  slug: 'mirpur-test-liton-shanto-partnership-bangladesh-leads',
  excerpt:
    'চতুর্থ ইনিংসে দৃঢ়চেতা ব্যাটিংয়ে লিটন দাসের ঝকঝকে সেঞ্চুরি এবং অধিনায়ক শান্তর নিয়ন্ত্রিত ইনিংসে শের-ই-বাংলা স্টেডিয়ামে প্রথম টেস্টে জয়ের সুবাস পাচ্ছে বাংলাদেশ ক্রিকেট দল।',
  content: `মিরপুর শের-ই-বাংলা জাতীয় ক্রিকেট স্টেডিয়ামে শ্রীলঙ্কার বিপক্ষে সিরিজের প্রথম টেস্টের চতুর্থ দিনে দুর্দান্ত ব্যাটিং প্রদর্শন করেছে বাংলাদেশ।
লিটন দাস ও নাজমুল হোসেন শান্তর রেকর্ড গড়া ১৮২ রানের জুটিতে ভর করে জয়ের দ্বারপ্রান্তে পৌঁছে গেছে টাইগাররা। উইকেটে অসমান বাউন্স ও স্পিন সহায়ক কন্ডিশনেও চরম ধৈর্য এবং নিখুঁত শট নির্বাচনে শ্রীলঙ্কান স্পিনারদের একের পর এক বাউন্ডারিতে সাজা দেন লিটন।`,
  image: {
    url: '/src/assets/images/hero_cricket_action_1790500396251.jpg',
    caption: 'মিরপুরে চতুর্থ দিনে ব্যাট হাতে সেঞ্চুরি উদযাপনে লিটন দাস।',
    alt: 'বাংলাদেশ দলের টেস্ট ম্যাচ উদযাপন',
  },
  category: 'Bangladesh Cricket',
  sport: 'cricket',
  author: {
    id: 'auth-1',
    name: 'রাশেদুল ইসলাম',
    banglaName: 'রাশেদুল ইসলাম',
    role: 'চিফ স্পোর্টস করেসপন্ডেন্ট',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
  },
  publishedAt: '2026-09-22T07:45:00Z',
  updatedAt: '2026-09-22T08:10:00Z',
  featured: true,
  breaking: true,
  trending: true,
  tags: ['বাংলাদেশ ক্রিকেট', 'মিরপুর টেস্ট', 'লিটন দাস', 'নাজমুল শান্ত', 'শ্রীলঙ্কা সিরিজ'],
  readTimeMinutes: 5,
};

export const HOMEPAGE_FEATURED_SECONDARY: Article[] = [
  {
    id: 'feat-sec-1',
    title: 'চ্যাম্পিয়ন্স লিগ রোমাঞ্চ: ইতিহাদে শেষ মুহূর্তের গোলে আর্সেনালকে রুখে দিল রিয়াল মাদ্রিদ',
    banglaTitle: 'চ্যাম্পিয়ন্স লিগ রোমাঞ্চ: ইতিহাদে শেষ মুহূর্তের গোলে আর্সেনালকে রুখে দিল রিয়াল মাদ্রিদ',
    slug: 'champions-league-real-madrid-arsenal-thriller-draw',
    excerpt:
      'যোগ করা সময়ের দ্বিতীয় মিনিটে ভিনিসিয়ুসের দূরপাল্লার শটে নাটকীয় ড্র নিয়ে মাঠ ছাড়ল কার্লো আনচেলত্তির শিষ্যরা।',
    image: {
      url: '/src/assets/images/hero_football_action_1790500409286.jpg',
      caption: 'উত্তেজনাকর মুহূর্তে রিয়ালের সমতাসূচক গোলের উল্লাস।',
      alt: 'ফুটবল ম্যাচের আক্রমণাত্মক মুহূর্ত',
    },
    category: 'Champions League',
    sport: 'football',
    author: {
      id: 'auth-2',
      name: 'তানভীর আহমেদ',
      banglaName: 'তানভীর আহমেদ',
      role: 'আন্তর্জাতিক ফুটবল বিশ্লেষক',
    },
    publishedAt: '2026-09-22T07:15:00Z',
    featured: true,
    tags: ['উয়েফা চ্যাম্পিয়ন্স লিগ', 'রিয়াল মাদ্রিদ', 'আর্সেনাল', 'ইউরোপিয়ান ফুটবল'],
    readTimeMinutes: 3,
  },
  {
    id: 'feat-sec-2',
    title: 'বিপিএল ২০২৬ ড্রাফট: দেশীয় পেসার ও ফিনিশারদের দিকেই সবচেয়ে বেশি ঝুঁকল ফ্র্যাঞ্চাইজিগুলো',
    banglaTitle: 'বিপিএল ২০২৬ ড্রাফট: দেশীয় পেসার ও ফিনিশারদের দিকেই সবচেয়ে বেশি ঝুঁকল ফ্র্যাঞ্চাইজিগুলো',
    slug: 'bpl-2026-draft-franchises-prioritize-local-fast-bowlers',
    excerpt:
      'ড্রাফটের প্রথম দুই রাউন্ডেই দল পেয়েছেন তরুণ পেসাররা; অভিজ্ঞদের চেয়ে টি-টোয়েন্টি স্পেশালিস্টদের দর বেশি।',
    image: {
      url: 'https://images.unsplash.com/photo-1531415074868-036b1c57e3b0?auto=format&fit=crop&w=800&q=80',
      caption: 'বিপিএলের আলো ঝলমলে মাঠ ও ফ্লাডলাইট দৃশ্য।',
      alt: 'ক্রিকেট স্টেডিয়াম ফ্লাডলাইট',
    },
    category: 'BPL',
    sport: 'cricket',
    author: {
      id: 'auth-3',
      name: 'মাহমুদুল হাসান',
      banglaName: 'মাহমুদুল হাসান',
      role: 'ঘরোয়া ক্রিকেট রিপোর্টার',
    },
    publishedAt: '2026-09-22T06:50:00Z',
    featured: true,
    tags: ['বিপিএল ২০২৬', 'বিসিবি', 'ড্রাফট', 'টি-টোয়েন্টি'],
    readTimeMinutes: 4,
  },
  {
    id: 'feat-sec-3',
    title: 'বাফুফে এশিয়ান কাপ বাছাই: হামজা চৌধুরীকে ঘিরে লাল-সবুজের আক্রমণভাগে নতুন আশার সঞ্চার',
    banglaTitle: 'বাফুফে এশিয়ান কাপ বাছাই: হামজা চৌধুরীকে ঘিরে লাল-সবুজের আক্রমণভাগে নতুন আশার সঞ্চার',
    slug: 'baff-asian-cup-qualifiers-hamza-choudhury-hopes',
    excerpt:
      'জাতীয় দলের অনুশীলনে পুরোদমে যোগ দিয়েছেন তারকা মিডফিল্ডার; কোচ কাবরেরা সাজাচ্ছেন সমন্বিত ৪-৩-৩ ফর্মেশন।',
    image: {
      url: '/src/assets/images/tigers_celebration_1790500424061.jpg',
      caption: 'জাতীয় দলের অনুশীলনে লাল-সবুজ জার্সিধারীদের উজ্জীবিত মুহূর্ত।',
      alt: 'ফুটবল মাঠ ও ট্রেনিং সেশন',
    },
    category: 'Bangladesh Football',
    sport: 'football',
    author: {
      id: 'auth-4',
      name: 'সৌরভ দত্ত',
      banglaName: 'সৌরভ দত্ত',
      role: 'বাংলাদেশ ফুটবল বিশেষজ্ঞ',
    },
    publishedAt: '2026-09-22T05:30:00Z',
    featured: true,
    tags: ['বাংলাদেশ ফুটবল', 'বাফুফে', 'হামজা চৌধুরী', 'এশিয়ান কাপ'],
    readTimeMinutes: 4,
  },
];

export const HOMEPAGE_LATEST_ARTICLES: Article[] = [
  {
    id: 'latest-1',
    title: 'মুস্তাফিজের বৈচিত্র্যময় কাটার আইপিএল নিলামে ফের আলোচনার কেন্দ্রবিন্দুতে',
    slug: 'mustafizur-cutters-ipl-auction-talking-point',
    excerpt: 'ডেথ ওভারে নিয়ন্ত্রিত ইকোনমি ও স্লোয়ার বাউন্সারের কার্যকারিতা ফ্র্যাঞ্চাইজিগুলোর বিশ্লেষণে শীর্ষ স্থানে।',
    image: {
      url: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=600&q=80',
      alt: 'মুস্তাফিজুর রহমান বোলিং অ্যাকশন',
    },
    category: 'IPL',
    sport: 'cricket',
    author: { id: 'auth-1', name: 'রাশেদুল ইসলাম', banglaName: 'রাশেদুল ইসলাম' },
    publishedAt: '2026-09-22T08:15:00Z',
    tags: ['আইপিএল', 'মুস্তাফিজুর রহমান', 'টি-টোয়েন্টি'],
    readTimeMinutes: 3,
  },
  {
    id: 'latest-2',
    title: 'প্রিমিয়ার লিগে অ্যানফিল্ডে আর্নে স্লটের লিভারপুলের টানা ষষ্ঠ জয়',
    slug: 'premier-league-liverpool-arne-slot-sixth-straight-win',
    excerpt: 'মোহাম্মদ সালাহ ও নুনেজের যুগলবন্দীতে ফুলহ্যামকে ৩-১ গোলে উড়িয়ে দিল অলরেডরা।',
    image: {
      url: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?auto=format&fit=crop&w=600&q=80',
      alt: 'অ্যানফিল্ডে ফুটবল ম্যাচ উদযাপন',
    },
    category: 'Premier League',
    sport: 'football',
    author: { id: 'auth-2', name: 'তানভীর আহমেদ', banglaName: 'তানভীর আহমেদ' },
    publishedAt: '2026-09-22T07:55:00Z',
    tags: ['প্রিমিয়ার লিগ', 'লিভারপুল', 'ইংলিশ ফুটবল'],
    readTimeMinutes: 4,
  },
  {
    id: 'latest-3',
    title: 'অনূর্ধ্ব-১৯ এশিয়া কাপ ক্রিকেটের দল ঘোষণা, নেতৃত্বে মারুফ মৃধা',
    slug: 'u19-asia-cup-bangladesh-squad-maruf-mridha-captain',
    excerpt: 'শারজাহতে অনুষ্ঠিতব্য টুর্নামেন্টের জন্য ১৫ সদস্যের শক্তিশালী স্কোয়াড চূড়ান্ত করেছে বিসিবি নির্বাচক প্যানেল।',
    image: {
      url: 'https://images.unsplash.com/photo-1531415074868-036b1c57e3b0?auto=format&fit=crop&w=600&q=80',
      alt: 'যুব ক্রিকেট দলের প্রস্তুতি',
    },
    category: 'Bangladesh Cricket',
    sport: 'cricket',
    author: { id: 'auth-3', name: 'মাহমুদুল হাসান', banglaName: 'মাহমুদুল হাসান' },
    publishedAt: '2026-09-22T07:20:00Z',
    tags: ['অনূর্ধ্ব-১৯', 'বিসিবি', 'এশিয়া কাপ'],
    readTimeMinutes: 3,
  },
  {
    id: 'latest-4',
    title: 'লা লিগায় লামিন ইয়ামালের জাদুকরী ড্রিবলিংয়ে জিরোনাকে হারাল বার্সেলোনা',
    slug: 'la-liga-barcelona-lamine-yamal-masterclass-girona',
    excerpt: 'এক গোল ও দুই অ্যাসিস্টে পুরো ম্যাচের আলো কেড়ে নিলেন স্প্যানিশ বিস্ময় বালক ইয়ামাল।',
    image: {
      url: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80',
      alt: 'বার্সেলোনার আক্রমণাত্মক আক্রমণ',
    },
    category: 'International Football',
    sport: 'football',
    author: { id: 'auth-2', name: 'তানভীর আহমেদ', banglaName: 'তানভীর আহমেদ' },
    publishedAt: '2026-09-22T06:40:00Z',
    tags: ['লা লিগা', 'বার্সেলোনা', 'লামিন ইয়ামাল'],
    readTimeMinutes: 3,
  },
  {
    id: 'latest-5',
    title: 'আন্তর্জাতিক ক্রিকেটে ফিল্ডিং স্ট্যান্ডার্ডে বিপ্লব আনতে কঠোর বিসিবি',
    slug: 'bcb-strict-measures-fielding-standards-revolution',
    excerpt: 'টাইগার ড্রেসিংরুমে ইয়ো-ইয়ো টেস্টে ন্যূনতম স্কোর ১৭.৪ বাধ্যতামূলক করার সিদ্ধান্ত কার্যকর হচ্ছে।',
    image: {
      url: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=600&q=80',
      alt: 'ক্রিকেটারদের ফিল্ডিং ড্রিল ও ফিটনেস সেশন',
    },
    category: 'Bangladesh Cricket',
    sport: 'cricket',
    author: { id: 'auth-1', name: 'রাশেদুল ইসলাম', banglaName: 'রাশেদুল ইসলাম' },
    publishedAt: '2026-09-22T05:50:00Z',
    tags: ['বিসিবি', 'ফিটনেস', 'বাংলাদেশ ক্রিকেট'],
    readTimeMinutes: 4,
  },
  {
    id: 'latest-6',
    title: 'ম্যানচেস্টার ডার্বির আগে হালান্ডের ইনজুরি শঙ্কা কাটিয়ে স্কোয়াডে ফেরার আভাস',
    slug: 'manchester-derby-erling-haaland-injury-update',
    excerpt: 'সিটি গ্রাউন্ডে মূল দলের সাথে অনুশীলন করেছেন নরওয়েজিয়ান স্ট্রাইকার, নিশ্চিত করলেন পেপ গার্দিওলা।',
    image: {
      url: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=600&q=80',
      alt: 'ম্যানচেস্টার ডার্বির প্রস্তুতি ম্যাচ',
    },
    category: 'Premier League',
    sport: 'football',
    author: { id: 'auth-4', name: 'সৌরভ দত্ত', banglaName: 'সৌরভ দত্ত' },
    publishedAt: '2026-09-22T04:30:00Z',
    tags: ['ম্যানচেস্টার সিটি', 'প্রিমিয়ার লিগ', 'হালান্ড'],
    readTimeMinutes: 3,
  },
];

/**
 * SAMPLE / DEMO MATCH DATA
 * Strictly labeled with isDemo: true and visible badges to satisfy zero-fabrication criteria
 */
export const HOMEPAGE_LIVE_MATCHES: Match[] = [
  {
    id: 'match-1',
    sport: 'cricket',
    competition: 'ICC World Test Championship',
    competitionBangla: 'আইসিসি বিশ্ব টেস্ট চ্যাম্পিয়নশিপ',
    status: 'live',
    statusText: 'সরাসরি • ৪র্থ দিন',
    venue: 'শের-ই-বাংলা স্টেডিয়াম, মিরপুর',
    team1: {
      name: 'Bangladesh',
      banglaName: 'বাংলাদেশ',
      shortName: 'BAN',
      score: '৩২৪ & ১৮৫/৩',
      overs: '৫৬.৪ ওভার',
      color: 'bg-emerald-700',
    },
    team2: {
      name: 'Sri Lanka',
      banglaName: 'শ্রীলঙ্কা',
      shortName: 'SL',
      score: '২৮০ & ২২৫',
      overs: '৭৮.২ ওভার',
      color: 'bg-blue-800',
    },
    result: 'জয়ের জন্য বাংলাদেশের প্রয়োজন আরও ৯৭ রান',
    isDemo: true,
  },
  {
    id: 'match-2',
    sport: 'football',
    competition: 'UEFA Champions League',
    competitionBangla: 'উয়েফা চ্যাম্পিয়ন্স লিগ',
    status: 'live',
    statusText: 'সরাসরি • ৭৫ মিনিট',
    venue: 'অ্যানফিল্ড, লিভারপুল',
    team1: {
      name: 'Liverpool',
      banglaName: 'লিভারপুল',
      shortName: 'LIV',
      score: '২',
      color: 'bg-red-700',
    },
    team2: {
      name: 'Bayern Munich',
      banglaName: 'বায়ার্ন মিউনিখ',
      shortName: 'BAY',
      score: '১',
      color: 'bg-red-900',
    },
    result: 'দ্বিতীয়ার্ধের আক্রমণ তীব্রতর হচ্ছে',
    isDemo: true,
  },
  {
    id: 'match-3',
    sport: 'cricket',
    competition: 'BPL T20 2026',
    competitionBangla: 'বিপিএল টি-টোয়েন্টি ২০২৬',
    status: 'upcoming',
    statusText: 'আজ সন্ধ্যা ৭:০০',
    venue: 'জহুর আহমেদ চৌধুরী স্টেডিয়াম, চট্টগ্রাম',
    team1: {
      name: 'Comilla Victorians',
      banglaName: 'কুমিল্লা ভিক্টোরিয়ান্স',
      shortName: 'CV',
      score: '-',
      color: 'bg-red-800',
    },
    team2: {
      name: 'Fortune Barishal',
      banglaName: 'ফরচুন বরিশাল',
      shortName: 'FB',
      score: '-',
      color: 'bg-amber-600',
    },
    result: 'ম্যাচ শুরু হতে বাকি ১ ঘণ্টা ২০ মিনিট',
    isDemo: true,
  },
  {
    id: 'match-4',
    sport: 'football',
    competition: 'AFC Asian Cup Qualifier',
    competitionBangla: 'এশিয়ান কাপ বাছাইপর্ব',
    status: 'completed',
    statusText: 'পূর্ণ সময়',
    venue: 'বঙ্গবন্ধু জাতীয় স্টেডিয়াম, ঢাকা',
    team1: {
      name: 'Bangladesh',
      banglaName: 'বাংলাদেশ',
      shortName: 'BAN',
      score: '২',
      color: 'bg-emerald-700',
    },
    team2: {
      name: 'Nepal',
      banglaName: 'নেপাল',
      shortName: 'NEP',
      score: '০',
      color: 'bg-blue-700',
    },
    result: 'বাংলাদেশ ২-০ গোলে জয়ী',
    isDemo: true,
  },
];

export const HOMEPAGE_CRICKET_ARTICLES: {
  featured: Article;
  articles: Article[];
  headlines: string[];
} = {
  featured: {
    id: 'cricket-feat',
    title: 'তাসকিন ও হাসান মাহমুদের আগুনে বোলিংয়ে মিরপুরে প্রথম সেশনেই শ্রীলঙ্কার বিপর্যয়',
    slug: 'taskin-hasan-mahmud-fierce-spells-sri-lanka-collapse',
    excerpt:
      'নতুন বল হাতে সুইং আর সিমের অনন্য প্রদর্শনী দেখালেন দুই টাইগার স্পিডস্টার; মধ্যাহ্ন বিরতির আগেই সাজঘরে লঙ্কান চার ব্যাটার।',
    image: {
      url: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1000&q=80',
      caption: 'উইকেট শিকারের পর তাসকিন ও সতীর্থদের বাঁধভাঙা উল্লাস।',
      alt: 'ক্রিকেট উইকেটের উদযাপন',
    },
    category: 'Bangladesh Cricket',
    sport: 'cricket',
    author: { id: 'auth-1', name: 'রাশেদুল ইসলাম', banglaName: 'রাশেদুল ইসলাম' },
    publishedAt: '2026-09-22T08:20:00Z',
    tags: ['তাসকিন আহমেদ', 'হাসান মাহমুদ', 'মিরপুর টেস্ট', 'বাংলাদেশ ক্রিকেট'],
    readTimeMinutes: 4,
  },
  articles: [
    {
      id: 'cricket-sub-1',
      title: 'জাতীয় দলের স্পিন পরামর্শক হিসেবে সাবেক অজি তারকার সাথে বিসিবির আলোচনা চূড়ান্ত',
      slug: 'spin-consultant-australian-veteran-bcb-talks',
      excerpt: 'উপমহাদেশের বাইরের টেস্ট সিরিজে রিস্ট স্পিনারদের কার্যকারিতা বাড়াতে এই উদ্যোগ।',
      image: {
        url: 'https://images.unsplash.com/photo-1531415074868-036b1c57e3b0?auto=format&fit=crop&w=600&q=80',
        alt: 'ক্রিকেট কোচিং সেশন',
      },
      category: 'ICC',
      sport: 'cricket',
      author: { id: 'auth-3', name: 'মাহমুদুল হাসান', banglaName: 'মাহমুদুল হাসান' },
      publishedAt: '2026-09-22T06:10:00Z',
      tags: ['বিসিবি', 'স্পিন কোচ', 'টেস্ট ক্রিকেট'],
      readTimeMinutes: 3,
    },
    {
      id: 'cricket-sub-2',
      title: 'আইপিএলে চেন্নাই সুপার কিংসের স্পিন বিভাগের রণকৌশল ও হোম কন্ডিশনের প্রভাব',
      slug: 'csk-spin-strategy-chepauk-conditions',
      excerpt: 'চেপকের স্লো পিচে পাওয়ারপ্লেতে স্পিন ব্যবহারের ধারা অব্যাহত রাখার পরিকল্পনা রুতুরাজের।',
      image: {
        url: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=600&q=80',
        alt: 'আইপিএল ম্যাচ প্রস্তুতি',
      },
      category: 'IPL',
      sport: 'cricket',
      author: { id: 'auth-1', name: 'রাশেদুল ইসলাম', banglaName: 'রাশেদুল ইসলাম' },
      publishedAt: '2026-09-22T05:05:00Z',
      tags: ['আইপিএল', 'সিএসকে', 'টি-টোয়েন্টি'],
      readTimeMinutes: 4,
    },
    {
      id: 'cricket-sub-3',
      title: 'নারী টি-টোয়েন্টি বিশ্বকাপের সেমিফাইনালে শ্বাসরুদ্ধকর ম্যাচে অস্ট্রেলিয়ার জয়',
      slug: 'womens-t20-world-cup-australia-semifinal-victory',
      excerpt: 'শেষ ওভারে দরকার ছিল ১০ রান, অসাধারণ বোলিংয়ে দলকে ফাইনালে তুললেন গার্ডনার।',
      image: {
        url: 'https://images.unsplash.com/photo-1531415074868-036b1c57e3b0?auto=format&fit=crop&w=600&q=80',
        alt: 'নারী ক্রিকেট বিশ্বকাপ ম্যাচ',
      },
      category: 'International Cricket',
      sport: 'cricket',
      author: { id: 'auth-3', name: 'মাহমুদুল হাসান', banglaName: 'মাহমুদুল হাসান' },
      publishedAt: '2026-09-22T03:40:00Z',
      tags: ['নারী বিশ্বকাপ', 'অস্ট্রেলিয়া', 'আইসিসি'],
      readTimeMinutes: 3,
    },
  ],
  headlines: [
    'সিলেটে শুরু হচ্ছে জাতীয় ক্রিকেট লিগের পঞ্চম রাউন্ড',
    'বিশ্ব টেস্ট চ্যাম্পিয়নশিপের পয়েন্ট টেবিলে পাঁচ নম্বরে উঠে আসার সুযোগ টাইগারদের',
    'টি-টোয়েন্টি র্যাঙ্কিংয়ে অলরাউন্ডারদের তালিকায় শীর্ষে নিজের জায়গা ধরে রেখেছেন সাকিব',
    'ঘরোয়া প্রথম শ্রেণির ক্রিকেটে দ্রুততম ডাবল সেঞ্চুরির রেকর্ড গড়লেন তরুণ শাহাদাত',
  ],
};

export const HOMEPAGE_FOOTBALL_ARTICLES: {
  featured: Article;
  articles: Article[];
  headlines: string[];
} = {
  featured: {
    id: 'football-feat',
    title: 'এমবাপ্পের জোড়া গোলে লা লিগার জমজমাট শীর্ষে রিয়াল মাদ্রিদ, বার্সার ওপর তীব্র চাপ',
    slug: 'mbappe-brace-real-madrid-la-liga-top-pressure-barca',
    excerpt:
      'সান্তিয়াগো বার্নাব্যুতে অ্যাথলেটিক বিলবাওয়ের দুর্ভেদ্য রক্ষণ ভেদ করে মূল্যবান তিন পয়েন্ট এনে দিলেন ফরাসি সেনসেশন কিলিয়ান এমবাপ্পে।',
    image: {
      url: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1000&q=80',
      caption: 'বার্নাব্যুতে সমর্থকদের অভিবাদনের জবাব দিচ্ছেন এমবাপ্পে।',
      alt: 'ফুটবলারের গোল উদযাপন',
    },
    category: 'International Football',
    sport: 'football',
    author: { id: 'auth-2', name: 'তানভীর আহমেদ', banglaName: 'তানভীর আহমেদ' },
    publishedAt: '2026-09-22T08:00:00Z',
    tags: ['রিয়াল মাদ্রিদ', 'কিলিয়ান এমবাপ্পে', 'লা লিগা', 'ইউরোপিয়ান ফুটবল'],
    readTimeMinutes: 4,
  },
  articles: [
    {
      id: 'football-sub-1',
      title: 'প্রিমিয়ার লিগ ট্রান্সফার উইন্ডো: বায়ার্ন থেকে আর্সেনালে যোগ দিচ্ছেন জার্মান মিডফিল্ডার',
      slug: 'premier-league-transfer-arsenal-bayern-midfielder-deal',
      excerpt: '৬৫ মিলিয়ন ইউরোর চুক্তিতে মৌখিক সম্মতি, মেডিকেল সম্পন্ন হবে চলতি সপ্তাহের বৃহস্পতিবার।',
      image: {
        url: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=600&q=80',
        alt: 'ফুটবল খেলোয়াড় সাইনিং ও চুক্তি',
      },
      category: 'Transfer News',
      sport: 'football',
      author: { id: 'auth-4', name: 'সৌরভ দত্ত', banglaName: 'সৌরভ দত্ত' },
      publishedAt: '2026-09-22T06:30:00Z',
      tags: ['ট্রান্সফার নিউজ', 'আর্সেনাল', 'প্রিমিয়ার লিগ'],
      readTimeMinutes: 3,
    },
    {
      id: 'football-sub-2',
      title: 'বসুন্ধরা কিংসের টানা পঞ্চম শিরোপা জয়ে নায়ক রবিনহো ও বিশ্বনাথ ঘোষ',
      slug: 'bashundhara-kings-fifth-consecutive-title-robinho',
      excerpt: 'বাংলাদেশ প্রিমিয়ার লিগের শেষ রাউন্ডে আবাহনীকে ১-০ গোলে হারিয়ে রেকর্ড গড়ল কিংস।',
      image: {
        url: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?auto=format&fit=crop&w=600&q=80',
        alt: 'বাংলাদেশ প্রিমিয়ার লিগ ফুটবল শিরোপা',
      },
      category: 'Bangladesh Football',
      sport: 'football',
      author: { id: 'auth-4', name: 'সৌরভ দত্ত', banglaName: 'সৌরভ দত্ত' },
      publishedAt: '2026-09-22T05:15:00Z',
      tags: ['বসুন্ধরা কিংস', 'বিপিএল ফুটবল', 'বাংলাদেশ ফুটবল'],
      readTimeMinutes: 4,
    },
    {
      id: 'football-sub-3',
      title: 'সিরি আ-তে ইন্টার মিলানের আক্রমণভাগে লাউতারো মার্টিনেজের অপ্রতিরোধ্য ফর্ম',
      slug: 'serie-a-inter-milan-lautaro-martinez-unbeatable-form',
      excerpt: 'সান সিরোতে টানা পাঁচ ম্যাচে গোল করে জুভেন্টাসকে টপকে শীর্ষে ইন্টার।',
      image: {
        url: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80',
        alt: 'ইন্টার মিলানের সান সিরো ম্যাচ',
      },
      category: 'International Football',
      sport: 'football',
      author: { id: 'auth-2', name: 'তানভীর আহমেদ', banglaName: 'তানভীর আহমেদ' },
      publishedAt: '2026-09-22T04:00:00Z',
      tags: ['সিরি আ', 'ইন্টার মিলান', 'ইতালিয়ান ফুটবল'],
      readTimeMinutes: 3,
    },
  ],
  headlines: [
    'চ্যাম্পিয়ন্স লিগে ম্যান সিটির সাথে কঠিন কোয়ার্টার ফাইনালে মুখোমুখি হবে পিএসজি',
    'জাতীয় নারী ফুটবল দলের ক্যাম্প শুরু হচ্ছে অক্টোবরের দ্বিতীয় সপ্তাহে',
    'এভারটনকে ৪-০ গোলে হারিয়ে টেবিলের তিনে উঠে এল উনাই এমেরির অ্যাস্টন ভিলা',
    'রদ্রিগোর চোট কতটা গুরুতর? ক্লাসিকোর আগে মেডিকেল রিপোর্টের অপেক্ষায় রিয়াল মাদ্রিদ',
  ],
};

export const HOMEPAGE_TRENDING_ARTICLES: {
  rank: string;
  id: string;
  title: string;
  slug: string;
  category: string;
  publishedTime: string;
  sport: 'cricket' | 'football';
}[] = [
  {
    rank: '০১',
    id: 'tr-1',
    title: 'মিরপুর টেস্টে লিটনের মাস্টারক্লাস: চতুর্থ ইনিংসে সেঞ্চুরি কেন এত স্পেশাল?',
    slug: 'mirpur-test-liton-shanto-partnership-bangladesh-leads',
    category: 'Bangladesh Cricket',
    publishedTime: '২৫ মিনিট আগে',
    sport: 'cricket',
  },
  {
    rank: '০২',
    id: 'tr-2',
    title: 'চ্যাম্পিয়ন্স লিগে ইতিহাদে আর্সেনালের হৃদয়ে রিয়ালের শেষ সেকেন্ডের আঘাত',
    slug: 'champions-league-real-madrid-arsenal-thriller-draw',
    category: 'Champions League',
    publishedTime: '৪৫ মিনিট আগে',
    sport: 'football',
  },
  {
    rank: '০৩',
    id: 'tr-3',
    title: 'বিপিএল ২০২৬ নিলাম: কোন দলে কে গেলেন? ফ্র্যাঞ্চাইজিগুলোর পূর্ণাঙ্গ স্কোয়াড বিশ্লেষণ',
    slug: 'bpl-2026-draft-franchises-prioritize-local-fast-bowlers',
    category: 'BPL',
    publishedTime: '১ ঘণ্টা আগে',
    sport: 'cricket',
  },
  {
    rank: '০৪',
    id: 'tr-4',
    title: 'হামজা চৌধুরীকে নিয়ে হাভিয়ের কাবরেরার ৪-৩-৩ ফর্মেশনের ট্যাকটিক্যাল পরিকল্পনা',
    slug: 'baff-asian-cup-qualifiers-hamza-choudhury-hopes',
    category: 'Bangladesh Football',
    publishedTime: '২ ঘণ্টা আগে',
    sport: 'football',
  },
  {
    rank: '০৫',
    id: 'tr-5',
    title: 'মুস্তাফিজের কাটারের সামনে কেন পরাস্ত বিশ্বসেরা ব্যাটাররা? ডেটা অ্যানালিসিস',
    slug: 'mustafizur-cutters-ipl-auction-talking-point',
    category: 'IPL',
    publishedTime: '৩ ঘণ্টা আগে',
    sport: 'cricket',
  },
  {
    rank: '০৬',
    id: 'tr-6',
    title: 'লা লিগায় লামিন ইয়ামাল ও এমবাপ্পের গোল্ডেন বুট জয়ের তীব্র দ্বৈরথ',
    slug: 'mbappe-brace-real-madrid-la-liga-top-pressure-barca',
    category: 'International Football',
    publishedTime: '৪ ঘণ্টা আগে',
    sport: 'football',
  },
];

export const HOMEPAGE_ANALYSIS_ARTICLES: Article[] = [
  {
    id: 'an-1',
    title: 'ট্যাকটিক্যাল ব্রেকডাউন: কাবরেরার বাংলাদেশ কি প্রেসিং ফুটবলের জন্য প্রস্তুত?',
    slug: 'tactical-breakdown-cabrerra-bangladesh-pressing-football',
    excerpt:
      'হামজা চৌধুরীর অন্তর্ভুক্তি ট্রানজিশন ফেজে বাংলাদেশ দলের গতি বাড়াবে বহুগুণ। তবে ডিফেন্সিভ থার্ডে লাইন হাই রাখার ঝুঁকি কতটুকু? বিশ্লেষণ করেছেন আমাদের ট্যাকটিক্যাল বিশ্লেষক।',
    image: {
      url: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80',
      caption: 'ম্যাচ ট্যাকটিক্স ও ফরমেশন বিশ্লেষণ।',
      alt: 'ফুটবল স্ট্র্যাটেজি ও ট্যাকটিক্স বোর্ড',
    },
    category: 'Analysis',
    sport: 'football',
    author: {
      id: 'auth-2',
      name: 'তানভীর আহমেদ',
      banglaName: 'তানভীর আহমেদ',
      role: 'সিনিয়র ফুটবল কলামিস্ট',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    },
    publishedAt: '2026-09-22T06:00:00Z',
    tags: ['ট্যাকটিক্স', 'বাংলাদেশ ফুটবল', 'বিশ্লেষণ', 'বাফুফে'],
    readTimeMinutes: 6,
  },
  {
    id: 'an-2',
    title: 'লাল বলের ক্রিকেটে টাইগার পেস ব্যাটারির রূপান্তর: একটি সফল রূপকথার ইতিবৃত্ত',
    slug: 'red-ball-cricket-tigers-pace-battery-transformation',
    excerpt:
      'একসময়ের স্পিন-নির্ভর বাংলাদেশ কীভাবে তাসকিন-হাসান-শরিফুলদের হাত ধরে সব কন্ডিশনে ২০ উইকেট শিকারের আত্মবিশ্বাস খুঁজে পেল? ভেতরের গল্প ও পরিসংখ্যানের বিশদ বিশ্লেষণ।',
    image: {
      url: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80',
      caption: 'মিরপুরের পেস বোলারদের রিভার্স সুইং সেশন।',
      alt: 'ক্রিকেট পেস বোলিং বিশ্লেষণ',
    },
    category: 'Analysis',
    sport: 'cricket',
    author: {
      id: 'auth-1',
      name: 'রাশেদুল ইসলাম',
      banglaName: 'রাশেদুল ইসলাম',
      role: 'ক্রিকেট সম্পাদক',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    },
    publishedAt: '2026-09-22T05:20:00Z',
    tags: ['পেস বোলিং', 'টেস্ট ক্রিকেট', 'বিশ্লেষণ', 'বাংলাদেশ ক্রিকেট'],
    readTimeMinutes: 7,
  },
  {
    id: 'an-3',
    title: 'ইউরোপিয়ান ফুটবলের আর্থিক স্থায়িত্ব: পিএসআর নিয়মে প্রিমিয়ার লিগের দলগুলোর টিকে থাকার লড়াই',
    slug: 'european-football-financial-fairplay-psr-rules-analysis',
    excerpt:
      'উয়েফার এফএফপি এবং প্রিমিয়ার লিগের প্রফিট অ্যান্ড সাসটেইনেবিলিটি রুলসের কঠোর প্রয়োগের কারণে ট্রান্সফার মার্কেটে বদলে গেছে ক্লাবগুলোর কেনাবেচার চিরাচরিত ধরণ।',
    image: {
      url: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80',
      caption: 'প্রিমিয়ার লিগের করপোরেট ও ক্লাব প্রশাসন।',
      alt: 'প্রিমিয়ার লিগ ক্লাব স্টেডিয়াম',
    },
    category: 'Analysis',
    sport: 'football',
    author: {
      id: 'auth-4',
      name: 'সৌরভ দত্ত',
      banglaName: 'সৌরভ দত্ত',
      role: 'অর্থনীতি ও ক্রীড়া কলামিস্ট',
      avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80',
    },
    publishedAt: '2026-09-22T04:10:00Z',
    tags: ['এফএফপি', 'প্রিমিয়ার লিগ', 'স্পোর্টস বিজনেস', 'বিশ্লেষণ'],
    readTimeMinutes: 5,
  },
];

export const HOMEPAGE_VIDEOS: VideoItem[] = [
  {
    id: 'vid-1',
    title: 'হাইলাইটস: মিরপুর টেস্টে লিটন দাসের অনবদ্য সেঞ্চুরি ইনিংস ও শট নির্বাচন',
    banglaTitle: 'হাইলাইটস: মিরপুর টেস্টে লিটন দাসের অনবদ্য সেঞ্চুরি ইনিংস ও শট নির্বাচন',
    slug: 'highlights-liton-das-century-mirpur-test',
    thumbnail: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=600&q=80',
    duration: '৮:৪৫',
    category: 'Bangladesh Cricket',
    sport: 'cricket',
    publishedAt: '2026-09-22T08:00:00Z',
    views: '৪৫ হাজার ভিউ',
  },
  {
    id: 'vid-2',
    title: 'ম্যাচ রিঅ্যাকশন: কার্লো আনচেলত্তির সংবাদ সম্মেলন ও চ্যাম্পিয়ন্স লিগ ড্রয়ের মূল্যায়ন',
    banglaTitle: 'ম্যাচ রিঅ্যাকশন: কার্লো আনচেলত্তির সংবাদ সম্মেলন ও চ্যাম্পিয়ন্স লিগ ড্রয়ের মূল্যায়ন',
    slug: 'match-reaction-carlo-ancelotti-champions-league-draw',
    thumbnail: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80',
    duration: '৫:২০',
    category: 'Champions League',
    sport: 'football',
    publishedAt: '2026-09-22T07:15:00Z',
    views: '৩২ হাজার ভিউ',
  },
  {
    id: 'vid-3',
    title: 'এক্সক্লুসিভ সাক্ষাৎকার: জাতীয় দলের অনুশীলনে প্রথম দিন কেমন কাটল হামজা চৌধুরীর?',
    banglaTitle: 'এক্সক্লুসিভ সাক্ষাৎকার: জাতীয় দলের অনুশীলনে প্রথম দিন কেমন কাটল হামজা চৌধুরীর?',
    slug: 'exclusive-interview-hamza-choudhury-bangladesh-training',
    thumbnail: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=600&q=80',
    duration: '১১:১০',
    category: 'Bangladesh Football',
    sport: 'football',
    publishedAt: '2026-09-22T06:30:00Z',
    views: '৭৮ হাজার ভিউ',
  },
  {
    id: 'vid-4',
    title: 'পেস বোলিং মাস্টারক্লাস: রিভার্স সুইং ও গতি বজায় রাখার কৌশল শেখাচ্ছেন তাসকিন',
    banglaTitle: 'পেস বোলিং মাস্টারক্লাস: রিভার্স সুইং ও গতি বজায় রাখার কৌশল শেখাচ্ছেন তাসকিন',
    slug: 'pace-bowling-masterclass-taskin-ahmed-reverse-swing',
    thumbnail: 'https://images.unsplash.com/photo-1531415074868-036b1c57e3b0?auto=format&fit=crop&w=600&q=80',
    duration: '৭:৩০',
    category: 'Cricket',
    sport: 'cricket',
    publishedAt: '2026-09-22T05:00:00Z',
    views: '২৯ হাজার ভিউ',
  },
];

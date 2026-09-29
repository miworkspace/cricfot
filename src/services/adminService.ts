import {
  AdminArticle,
  AdminCategory,
  AdminTag,
  AdminAuthor,
  AdminMediaItem,
  AdminVideo,
  AdminBreakingItem,
  AdminMatch,
  AdminTeam,
  AdminPlayer,
  AdminCompetition,
  AdminAd,
  AdminHomepageSectionConfig,
  AdminNavigationItem,
  AdminSeoConfig,
  AdminStaticPage,
  AdminNotification,
  AdminUser,
  AdminRole,
  AdminActivityLog,
  AdminDashboardStats,
} from '../types/admin';
import { HOMEPAGE_FEATURED_MAIN, HOMEPAGE_FEATURED_SECONDARY, HOMEPAGE_LATEST_ARTICLES } from '../data/homepage';

// Initial In-Memory State for Admin Mock Data (Ready to plug into REST / GraphQL / Prisma Backend)

let mockArticles: AdminArticle[] = [
  {
    id: 'art-1',
    title: 'মিরপুর টেস্টে শ্রীলঙ্কার বিপক্ষে লিটন ও শান্তর দারুণ জুটি, চালকের আসনে বাংলাদেশ',
    banglaTitle: 'মিরপুর টেস্টে শ্রীলঙ্কার বিপক্ষে লিটন ও শান্তর দারুণ জুটি, চালকের আসনে বাংলাদেশ',
    slug: 'mirpur-test-liton-shanto-partnership-bangladesh-leads',
    subtitle: 'চতুর্থ ইনিংসে ১৮২ রানের জুটিতে জয়ের দ্বারপ্রান্তে টাইগাররা',
    excerpt: 'চতুর্থ ইনিংসে দৃঢ়চেতা ব্যাটিংয়ে লিটন দাসের ঝকঝকে সেঞ্চুরি এবং অধিনায়ক শান্তর নিয়ন্ত্রিত ইনিংসে শের-ই-বাংলা স্টেডিয়ামে প্রথম টেস্টে জয়ের সুবাস পাচ্ছে বাংলাদেশ ক্রিকেট দল।',
    content: `মিরপুর শের-ই-বাংলা জাতীয় ক্রিকেট স্টেডিয়ামে শ্রীলঙ্কার বিপক্ষে সিরিজের প্রথম টেস্টের চতুর্থ দিনে দুর্দান্ত ব্যাটিং প্রদর্শন করেছে বাংলাদেশ।

লিটন দাস ও নাজমুল হোসেন শান্তর রেকর্ড গড়া ১৮২ রানের জুটিতে ভর করে জয়ের দ্বারপ্রান্তে পৌঁছে গেছে টাইগাররা। উইকেটে অসমান বাউন্স ও স্পিন সহায়ক কন্ডিশনেও চরম ধৈর্য এবং নিখুঁত শট নির্বাচনে শ্রীলঙ্কান স্পিনারদের একের পর এক বাউন্ডারিতে সাজা দেন লিটন।

ম্যাচ শেষে সংবাদ সম্মেলনে দলের স্পিন কোচ বলেন, "আমাদের ব্যাটাররা কন্ডিশন অনুযায়ী নিজেদের টেকনিক চমৎকারভাবে প্রয়োগ করেছেন।"`,
    sport: 'cricket',
    category: 'Bangladesh Cricket',
    tags: ['বাংলাদেশ ক্রিকেট', 'মিরপুর টেস্ট', 'লিটন দাস', 'নাজমুল শান্ত'],
    authorId: 'auth-1',
    authorName: 'Rashedul Islam',
    authorBanglaName: 'রাশেদুল ইসলাম',
    image: {
      url: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1200&q=80',
      caption: 'মিরপুরে চতুর্থ দিনে ব্যাট হাতে সেঞ্চুরি উদযাপনে লিটন দাস।',
      alt: 'বাংলাদেশ দলের টেস্ট ম্যাচ উদযাপন',
      source: 'CricFot Media / AFP',
    },
    status: 'published',
    publishedAt: '2026-09-22T07:45:00Z',
    updatedAt: '2026-09-22T08:10:00Z',
    featured: true,
    breaking: true,
    trending: true,
    editorsPick: true,
    views: 18450,
    readTimeMinutes: 5,
    seo: {
      title: 'মিরপুর টেস্টে বাংলাদেশ চালকের আসনে | CricFot',
      description: 'লিটন দাস ও শান্তর রেকর্ড জুটিতে টেস্টে জয়ের সুবাস টাইগারদের। বিস্তারিত প্রতিবেদন CricFot-এ।',
    },
  },
  {
    id: 'art-2',
    title: 'চ্যাম্পিয়ন্স লিগ রোমাঞ্চ: ইতিহাদে শেষ মুহূর্তের গোলে আর্সেনালকে রুখে দিল রিয়াল মাদ্রিদ',
    banglaTitle: 'চ্যাম্পিয়ন্স লিগ রোমাঞ্চ: ইতিহাদে শেষ মুহূর্তের গোলে আর্সেনালকে রুখে দিল রিয়াল মাদ্রিদ',
    slug: 'champions-league-real-madrid-arsenal-thriller-draw',
    subtitle: 'যোগ করা সময়ের ৯২ মিনিটে ভিনিসিয়ুসের নাটকীয় গোল',
    excerpt: 'যোগ করা সময়ের দ্বিতীয় মিনিটে ভিনিসিয়ুসের দূরপাল্লার শটে নাটকীয় ড্র নিয়ে মাঠ ছাড়ল কার্লো আনচেলত্তির শিষ্যরা।',
    content: `উয়েফা চ্যাম্পিয়ন্স লিগের রোমাঞ্চকর ম্যাচে আর্সেনালের ঘরের মাঠে ২-২ গোলে ড্র করেছে রিয়াল মাদ্রিদ।

প্রথমার্ধে সাকার গোলে আর্সেনাল এগিয়ে থাকলেও দ্বিতীয়ার্ধে জুড বেলিংহামের গোলে সমতায় ফেরে মাদ্রিদ। শেষ বাঁশি বাজার ঠিক আগ মুহূর্তে ভিনিসিয়ুস জুনিয়রের দুর্দান্ত শটে পয়েন্ট ভাগাভাগি হয়।`,
    sport: 'football',
    category: 'Champions League',
    tags: ['উয়েফা চ্যাম্পিয়ন্স লিগ', 'রিয়াল মাদ্রিদ', 'আর্সেনাল'],
    authorId: 'auth-2',
    authorName: 'Tanvir Ahmed',
    authorBanglaName: 'তানভীর আহমেদ',
    image: {
      url: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80',
      caption: 'উত্তেজনাকর মুহূর্তে রিয়ালের সমতাসূচক গোলের উল্লাস।',
      alt: 'ফুটবল ম্যাচের আক্রমণাত্মক মুহূর্ত',
      source: 'Reuters / CricFot',
    },
    status: 'published',
    publishedAt: '2026-09-22T07:15:00Z',
    featured: true,
    trending: true,
    views: 14200,
    readTimeMinutes: 3,
  },
  {
    id: 'art-3',
    title: 'বিপিএল ২০২৬ ড্রাফট: দেশীয় পেসার ও ফিনিশারদের দিকেই সবচেয়ে বেশি ঝুঁকল ফ্র্যাঞ্চাইজিগুলো',
    banglaTitle: 'বিপিএল ২০২৬ ড্রাফট: দেশীয় পেসার ও ফিনিশারদের দিকেই সবচেয়ে বেশি ঝুঁকল ফ্র্যাঞ্চাইজিগুলো',
    slug: 'bpl-2026-draft-franchises-prioritize-local-fast-bowlers',
    excerpt: 'ড্রাফটের প্রথম দুই রাউন্ডেই দল পেয়েছেন তরুণ পেসাররা; অভিজ্ঞদের চেয়ে টি-টোয়েন্টি স্পেশালিস্টদের দর বেশি।',
    content: 'বিপিএল ২০২৬-এর খেলোয়াড় নিলামে দলগুলোর কৌশলগত পরিবর্তন চোখে পড়ার মতো।',
    sport: 'cricket',
    category: 'BPL',
    tags: ['বিপিএল ২০২৬', 'বিসিবি', 'ড্রাফট'],
    authorId: 'auth-3',
    authorName: 'Mahmudul Hasan',
    authorBanglaName: 'মাহমুদুল হাসান',
    image: {
      url: 'https://images.unsplash.com/photo-1531415074868-036b1c57e3b0?auto=format&fit=crop&w=800&q=80',
      alt: 'বিপিএল ফ্লাডলাইট',
    },
    status: 'published',
    publishedAt: '2026-09-22T06:50:00Z',
    featured: true,
    views: 9800,
    readTimeMinutes: 4,
  },
  {
    id: 'art-4',
    title: 'বাফুফে এশিয়ান কাপ বাছাই: হামজা চৌধুরীকে ঘিরে লাল-সবুজের আক্রমণভাগে নতুন আশার সঞ্চার',
    banglaTitle: 'বাফুফে এশিয়ান কাপ বাছাই: হামজা চৌধুরীকে ঘিরে লাল-সবুজের আক্রমণভাগে নতুন আশার সঞ্চার',
    slug: 'baff-asian-cup-qualifiers-hamza-choudhury-hopes',
    excerpt: 'জাতীয় দলের অনুশীলনে পুরোদমে যোগ দিয়েছেন তারকা মিডফিল্ডার; কোচ কাবরেরা সাজাচ্ছেন সমন্বিত ৪-৩-৩ ফর্মেশন।',
    content: 'হামজা চৌধুরীর অন্তর্ভুক্তি বাংলাদেশের মাঝমাঠ ও আক্রমণভাগের গতি বৃদ্ধি করেছে বহুগুণ।',
    sport: 'football',
    category: 'Bangladesh Football',
    tags: ['বাংলাদেশ ফুটবল', 'বাফুফে', 'হামজা চৌধুরী'],
    authorId: 'auth-4',
    authorName: 'Sourav Datta',
    authorBanglaName: 'সৌরভ দত্ত',
    image: {
      url: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80',
      alt: 'ফুটবল ট্রেনিং সেশন',
    },
    status: 'published',
    publishedAt: '2026-09-22T05:30:00Z',
    featured: true,
    views: 11300,
    readTimeMinutes: 4,
  },
  {
    id: 'art-5',
    title: 'মুস্তাফিজের কাটারের সামনে কেন পরাস্ত বিশ্বসেরা ব্যাটাররা? স্পোর্টস ডেটা অ্যানালিসিস',
    banglaTitle: 'মুস্তাফিজের কাটারের সামনে কেন পরাস্ত বিশ্বসেরা ব্যাটাররা? স্পোর্টস ডেটা অ্যানালিসিস',
    slug: 'mustafizur-cutters-data-analytics-bowling-mastery',
    excerpt: 'ডেথ ওভারে নিয়ন্ত্রিত ইকোনমি ও স্লোয়ার বাউন্সারের সুইং কোণ নিয়ে আধুনিক ক্রিকেট প্রযুক্তির বিশ্লেষণ।',
    content: 'মুস্তাফিজুর রহমানের স্লোয়ার কাটারের রিলিজ পয়েন্ট ও গ্রিপের ওপর বিস্তারিত বৈজ্ঞানিক প্রতিবেদন।',
    sport: 'cricket',
    category: 'Analysis',
    tags: ['মুস্তাফিজুর রহমান', 'আইপিএল', 'অ্যানালিসিস'],
    authorId: 'auth-1',
    authorName: 'Rashedul Islam',
    authorBanglaName: 'রাশেদুল ইসলাম',
    image: {
      url: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=600&q=80',
      alt: 'মুস্তাফিজ বোলিং বিশ্লেষণ',
    },
    status: 'draft',
    publishedAt: '2026-09-22T08:15:00Z',
    views: 450,
    readTimeMinutes: 6,
  },
  {
    id: 'art-6',
    title: 'প্রিমিয়ার লিগে অ্যানফিল্ডে আর্নে স্লটের লিভারপুলের টানা ষষ্ঠ জয়ের রণকৌশল',
    banglaTitle: 'প্রিমিয়ার লিগে অ্যানফিল্ডে আর্নে স্লটের লিভারপুলের টানা ষষ্ঠ জয়ের রণকৌশল',
    slug: 'premier-league-liverpool-arne-slot-sixth-straight-win',
    excerpt: 'মোহাম্মদ সালাহ ও নুনেজের যুগলবন্দীতে ফুলহ্যামকে ৩-১ গোলে উড়িয়ে দিল অলরেডরা।',
    content: 'লিভারপুলের নতুন কৌশলে ফুলহ্যাম ম্যাচ নিয়ন্ত্রণ নিয়েছে পুরোপুরি।',
    sport: 'football',
    category: 'Premier League',
    tags: ['প্রিমিয়ার লিগ', 'লিভারপুল'],
    authorId: 'auth-2',
    authorName: 'Tanvir Ahmed',
    authorBanglaName: 'তানভীর আহমেদ',
    image: {
      url: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?auto=format&fit=crop&w=600&q=80',
      alt: 'অ্যানফিল্ড ফুটবল ম্যাচ',
    },
    status: 'scheduled',
    scheduledAt: '2026-09-23T10:00:00Z',
    publishedAt: '2026-09-22T07:55:00Z',
    views: 0,
    readTimeMinutes: 4,
  },
];

let mockCategories: AdminCategory[] = [
  // Cricket
  { id: 'cat-1', name: 'Bangladesh Cricket', banglaName: 'বাংলাদেশ ক্রিকেট', slug: 'bangladesh-cricket', sport: 'cricket', description: 'টাইগারদের টেস্ট, ওয়ানডে ও টি-টোয়েন্টি খবরাখবর', articleCount: 42, enabled: true },
  { id: 'cat-2', name: 'International Cricket', banglaName: 'আন্তর্জাতিক ক্রিকেট', slug: 'international-cricket', sport: 'cricket', description: 'বিশ্ব ক্রিকেটের শীর্ষ দল ও দ্বিপাক্ষিক সিরিজ', articleCount: 38, enabled: true },
  { id: 'cat-3', name: 'BPL', banglaName: 'বিপিএল', slug: 'bpl', sport: 'cricket', description: 'বাংলাদেশ প্রিমিয়ার লিগের সকল আপডেট', articleCount: 29, enabled: true },
  { id: 'cat-4', name: 'IPL', banglaName: 'আইপিএল', slug: 'ipl', sport: 'cricket', description: 'ইন্ডিয়ান প্রিমিয়ার লিগের ম্যাচ ও নিলাম', articleCount: 31, enabled: true },
  { id: 'cat-5', name: 'ICC', banglaName: 'আইসিসি', slug: 'icc', sport: 'cricket', description: 'আইসিসি টুর্নামেন্ট, র্যাঙ্কিং ও নিয়মাবলী', articleCount: 19, enabled: true },
  { id: 'cat-6', name: 'Test Cricket', banglaName: 'টেস্ট ক্রিকেট', slug: 'test-cricket', sport: 'cricket', description: 'বিশ্ব টেস্ট চ্যাম্পিয়নশিপ ও লাল বলের খেলা', articleCount: 24, enabled: true },
  { id: 'cat-7', name: 'ODI', banglaName: 'ওয়ানডে', slug: 'odi', sport: 'cricket', description: '৫০ ওভারের আন্তর্জাতিক ক্রিকেট প্রতিযোগিতা', articleCount: 22, enabled: true },
  { id: 'cat-8', name: 'T20', banglaName: 'টি-টোয়েন্টি', slug: 't20', sport: 'cricket', description: 'টি-টোয়েন্টি ক্রিকেট ও ফ্র্যাঞ্চাইজি লিগ', articleCount: 35, enabled: true },
  { id: 'cat-9', name: "Women's Cricket", banglaName: 'নারী ক্রিকেট', slug: 'womens-cricket', sport: 'cricket', description: 'বাংলাদেশ নারী ক্রিকেট দল ও বৈশ্বিক টুর্নামেন্ট', articleCount: 14, enabled: true },
  // Football
  { id: 'cat-10', name: 'Bangladesh Football', banglaName: 'বাংলাদেশ ফুটবল', slug: 'bangladesh-football', sport: 'football', description: 'বাফুফে, জাতীয় দল ও বাংলাদেশ প্রিমিয়ার লিগ', articleCount: 34, enabled: true },
  { id: 'cat-11', name: 'International Football', banglaName: 'আন্তর্জাতিক ফুটবল', slug: 'international-football', sport: 'football', description: 'বিশ্বকাপ, কোপা আমেরিকা ও ইউরো চ্যাম্পিয়নশিপ', articleCount: 46, enabled: true },
  { id: 'cat-12', name: 'Premier League', banglaName: 'ইংলিশ প্রিমিয়ার লিগ', slug: 'premier-league', sport: 'football', description: 'ইংল্যান্ডের শীর্ষ লিগ ফুটবল', articleCount: 52, enabled: true },
  { id: 'cat-13', name: 'Champions League', banglaName: 'চ্যাম্পিয়ন্স লিগ', slug: 'champions-league', sport: 'football', description: 'উয়েফা চ্যাম্পিয়ন্স লিগের ম্যাচ ও বিশ্লেষণ', articleCount: 40, enabled: true },
  { id: 'cat-14', name: 'La Liga', banglaName: 'লা লিগা', slug: 'la-liga', sport: 'football', description: 'স্প্যানিশ ফুটবল লিগ ও এল ক্লাসিকো', articleCount: 28, enabled: true },
  { id: 'cat-15', name: 'Serie A', banglaName: 'সিরি আ', slug: 'serie-a', sport: 'football', description: 'ইতালিয়ান ফুটবল লিগ', articleCount: 16, enabled: true },
  { id: 'cat-16', name: 'Bundesliga', banglaName: 'বুন্দেসলিগা', slug: 'bundesliga', sport: 'football', description: 'জার্মান ফুটবল লিগের ম্যাচ সংবাদ', articleCount: 15, enabled: true },
  { id: 'cat-17', name: 'Transfer News', banglaName: 'দলবদল ও ট্রান্সফার', slug: 'transfer-news', sport: 'football', description: 'ইউরোপিয়ান ফুটবলের খেলোয়াড় ট্রান্সফার আপডেট', articleCount: 39, enabled: true },
  // General
  { id: 'cat-18', name: 'Analysis', banglaName: 'বিশ্লেষণ', slug: 'analysis', sport: 'general', description: 'গভীর কৌশলগত ও ট্যাকটিক্যাল বিশ্লেষণ', articleCount: 27, enabled: true },
  { id: 'cat-19', name: 'Opinion', banglaName: 'মতামত', slug: 'opinion', sport: 'general', description: 'বিশেষজ্ঞ কলাম ও অভিমত', articleCount: 18, enabled: true },
  { id: 'cat-20', name: 'Features', banglaName: 'ফিচার', slug: 'features', sport: 'general', description: 'খেলোয়াড়দের জীবন ও বিশেষ গল্প', articleCount: 21, enabled: true },
  { id: 'cat-21', name: 'Videos', banglaName: 'ভিডিও', slug: 'videos', sport: 'general', description: 'ম্যাচ হাইলাইটস ও সাক্ষাৎকার ভিডিও', articleCount: 30, enabled: true },
];

let mockTags: AdminTag[] = [
  { id: 'tag-1', name: 'বাংলাদেশ ক্রিকেট', slug: 'bangladesh-cricket', articleCount: 48 },
  { id: 'tag-2', name: 'নাজমুল হোসেন শান্ত', slug: 'najmul-shanto', articleCount: 18 },
  { id: 'tag-3', name: 'লিটন দাস', slug: 'liton-das', articleCount: 22 },
  { id: 'tag-4', name: 'তাসকিন আহমেদ', slug: 'taskin-ahmed', articleCount: 15 },
  { id: 'tag-5', name: 'বিসিবি', slug: 'bcb', articleCount: 34 },
  { id: 'tag-6', name: 'হামজা চৌধুরী', slug: 'hamza-choudhury', articleCount: 12 },
  { id: 'tag-7', name: 'রিয়াল মাদ্রিদ', slug: 'real-madrid', articleCount: 26 },
  { id: 'tag-8', name: 'আর্সেনাল', slug: 'arsenal', articleCount: 20 },
  { id: 'tag-9', name: 'লিভারপুল', slug: 'liverpool', articleCount: 19 },
  { id: 'tag-10', name: 'বিপিএল ২০২৬', slug: 'bpl-2026', articleCount: 29 },
  { id: 'tag-11', name: 'আইপিএল ২০২৬', slug: 'ipl-2026', articleCount: 31 },
  { id: 'tag-12', name: 'মুস্তাফিজুর রহমান', slug: 'mustafizur-rahman', articleCount: 16 },
];

let mockAuthors: AdminAuthor[] = [
  {
    id: 'auth-1',
    name: 'Rashedul Islam',
    banglaName: 'রাশেদুল ইসলাম',
    slug: 'rashedul-islam',
    email: 'rashedul@cricfot.com',
    role: 'Chief Cricket Correspondent',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    bio: '১৫ বছর ধরে আন্তর্জাতিক ক্রিকেট ও বিসিবি কাভার করা সিনিয়র ক্রীড়া সাংবাদিক।',
    articlesCount: 64,
    status: 'active',
  },
  {
    id: 'auth-2',
    name: 'Tanvir Ahmed',
    banglaName: 'তানভীর আহমেদ',
    slug: 'tanvir-ahmed',
    email: 'tanvir@cricfot.com',
    role: 'International Football Analyst',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    bio: 'ইউরোপিয়ান ফুটবল ও ট্যাকটিক্যাল বিশ্লেষণের বিশেষজ্ঞ কলামিস্ট।',
    articlesCount: 51,
    status: 'active',
  },
  {
    id: 'auth-3',
    name: 'Mahmudul Hasan',
    banglaName: 'মাহমুদুল হাসান',
    slug: 'mahmudul-hasan',
    email: 'mahmudul@cricfot.com',
    role: 'Domestic Sports & BPL Reporter',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    bio: 'ঘরোয়া প্রথম শ্রেণি, ঢাকা প্রিমিয়ার লিগ ও বিপিএল কাভারেজে অভিজ্ঞ।',
    articlesCount: 39,
    status: 'active',
  },
  {
    id: 'auth-4',
    name: 'Sourav Datta',
    banglaName: 'সৌরভ দত্ত',
    slug: 'sourav-datta',
    email: 'sourav@cricfot.com',
    role: 'Bangladesh Football & Transfer Specialist',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80',
    bio: 'বাফুফে, জাতীয় ফুটবল দল ও ট্রান্সফার মার্কেটের নির্ভরযোগ্য রিপোর্টার।',
    articlesCount: 45,
    status: 'active',
  },
];

let mockMedia: AdminMediaItem[] = [
  {
    id: 'med-1',
    filename: 'shanto-mirpur-nets.jpg',
    url: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1200&q=80',
    type: 'image',
    size: '1.4 MB',
    dimensions: '1920x1080',
    alt: 'বাংলাদেশ জাতীয় দলের মিরপুর অনুশীলন',
    caption: 'মিরপুর টেস্টের আগের দিন নেটে ব্যাটারদের প্রস্তুতি।',
    source: 'CricFot Staff',
    uploadedAt: '2026-09-22T06:00:00Z',
    usedInCount: 4,
  },
  {
    id: 'med-2',
    filename: 'champions-league-etihad.jpg',
    url: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80',
    type: 'image',
    size: '2.1 MB',
    dimensions: '2400x1600',
    alt: 'চ্যাম্পিয়ন্স লিগ রোমাঞ্চকর ম্যাচ',
    caption: 'আর্সেনাল বনাম রিয়াল মাদ্রিদ হাই-ভোল্টেজ ম্যাচ।',
    source: 'Reuters / CricFot',
    uploadedAt: '2026-09-21T22:30:00Z',
    usedInCount: 3,
  },
  {
    id: 'med-3',
    filename: 'bpl-stadium-lights.jpg',
    url: 'https://images.unsplash.com/photo-1531415074868-036b1c57e3b0?auto=format&fit=crop&w=1200&q=80',
    type: 'image',
    size: '1.8 MB',
    dimensions: '2000x1333',
    alt: 'বিপিএল ক্রিকেট ফ্লাডলাইট',
    caption: 'চট্টগ্রাম জহুর আহমেদ স্টেডিয়ামের সান্ধ্য প্রস্তুতি।',
    source: 'BCB Official',
    uploadedAt: '2026-09-21T18:00:00Z',
    usedInCount: 2,
  },
  {
    id: 'med-4',
    filename: 'football-training-grass.jpg',
    url: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=80',
    type: 'image',
    size: '1.2 MB',
    dimensions: '1920x1280',
    alt: 'ফুটবল ট্রেনিং গ্রাউন্ড ও বল',
    caption: 'এশিয়ান কাপ বাছাইয়ের আগে জাতীয় ফুটবল দলের বুট ক্যাম্প।',
    source: 'BFF Media',
    uploadedAt: '2026-09-20T14:15:00Z',
    usedInCount: 5,
  },
];

let mockVideos: AdminVideo[] = [
  {
    id: 'vid-1',
    title: 'Highlights: Liton Das 100 vs SL at Mirpur',
    banglaTitle: 'হাইলাইটস: মিরপুর টেস্টে লিটন দাসের অনবদ্য সেঞ্চুরি ইনিংস',
    slug: 'highlights-liton-das-century-mirpur-test',
    thumbnail: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=600&q=80',
    duration: '৮:৪৫',
    sport: 'cricket',
    category: 'Bangladesh Cricket',
    views: '৪৫,২০০',
    status: 'published',
    publishedAt: '2026-09-22T08:00:00Z',
  },
  {
    id: 'vid-2',
    title: 'Post Match Presser: Carlo Ancelotti on Arsenal draw',
    banglaTitle: 'সংবাদ সম্মেলন: আর্সেনাল ম্যাচ শেষে আনচেলত্তির প্রতিক্রিয়া',
    slug: 'post-match-carlo-ancelotti-arsenal-reaction',
    thumbnail: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80',
    duration: '৫:২০',
    sport: 'football',
    category: 'Champions League',
    views: '৩২,১০০',
    status: 'published',
    publishedAt: '2026-09-22T07:15:00Z',
  },
  {
    id: 'vid-3',
    title: 'Exclusive: Hamza Choudhury first day with Bangladesh Squad',
    banglaTitle: 'এক্সক্লুসিভ সাক্ষাৎকার: জাতীয় দলের অনুশীলনে প্রথম দিন কেমন কাটল হামজার?',
    slug: 'exclusive-hamza-choudhury-first-day-bangladesh',
    thumbnail: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=600&q=80',
    duration: '১১:১০',
    sport: 'football',
    category: 'Bangladesh Football',
    views: '৭৮,৬০০',
    status: 'published',
    publishedAt: '2026-09-22T06:30:00Z',
  },
];

let mockBreakingItems: AdminBreakingItem[] = [
  {
    id: 'brk-1',
    headline: 'মিরপুর টেস্ট: লিটন দাসের সেঞ্চুরি, শ্রীলঙ্কার বিপক্ষে শক্ত অবস্থানে বাংলাদেশ',
    link: '/news/mirpur-test-liton-shanto-partnership-bangladesh-leads',
    active: true,
    priority: 'urgent',
    startTime: '2026-09-22T07:00:00Z',
    sport: 'cricket',
  },
  {
    id: 'brk-2',
    headline: 'চ্যাম্পিয়ন্স লিগে নাটকীয় ড্র: শেষ মুহূর্তে ভিনিসিয়ুসের গোলে আর্সেনালকে রুখে দিল রিয়াল মাদ্রিদ',
    link: '/news/champions-league-real-madrid-arsenal-thriller-draw',
    active: true,
    priority: 'high',
    startTime: '2026-09-22T06:30:00Z',
    sport: 'football',
  },
  {
    id: 'brk-3',
    headline: 'বিপিএল ২০২৬ ড্রাফট সম্পন্ন: দেশীয় পেসার ও পাওয়ার হিটারদের বেশি গুরুত্ব দিল দলগুলো',
    link: '/news/bpl-2026-draft-franchises-prioritize-local-fast-bowlers',
    active: true,
    priority: 'normal',
    startTime: '2026-09-22T05:00:00Z',
    sport: 'cricket',
  },
];

let mockMatches: AdminMatch[] = [
  {
    id: 'm-1',
    sport: 'cricket',
    competition: 'ICC World Test Championship',
    competitionBangla: 'আইসিসি বিশ্ব টেস্ট চ্যাম্পিয়নশিপ',
    season: '2025-2027',
    homeTeam: { id: 't-ban', name: 'Bangladesh', banglaName: 'বাংলাদেশ', score: '৩২৪ & ১৮৫/৩', overs: '৫৬.৪ ওভার' },
    awayTeam: { id: 't-sl', name: 'Sri Lanka', banglaName: 'শ্রীলঙ্কা', score: '২৮০ & ২২৫', overs: '৭৮.২ ওভার' },
    venue: 'Sher-e-Bangla National Cricket Stadium, Mirpur',
    date: '2026-09-22',
    time: '09:30',
    status: 'live',
    statusText: 'সরাসরি • ৪র্থ দিন',
    result: 'জয়ের জন্য বাংলাদেশের প্রয়োজন আরও ৯৭ রান',
    externalApiId: 'cricket_live_98124',
    isDemo: true,
  },
  {
    id: 'm-2',
    sport: 'football',
    competition: 'UEFA Champions League',
    competitionBangla: 'উয়েফা চ্যাম্পিয়ন্স লিগ',
    season: '2025-2026',
    homeTeam: { id: 't-liv', name: 'Liverpool', banglaName: 'লিভারপুল', score: '২' },
    awayTeam: { id: 't-bay', name: 'Bayern Munich', banglaName: 'বায়ার্ন মিউনিখ', score: '১' },
    venue: 'Anfield, Liverpool',
    date: '2026-09-22',
    time: '20:00',
    status: 'live',
    statusText: 'সরাসরি • ৭৫ মিনিট',
    result: 'দ্বিতীয়ার্ধে লিভারপুলের প্রাধান্য',
    externalApiId: 'football_live_38219',
    isDemo: true,
  },
  {
    id: 'm-3',
    sport: 'cricket',
    competition: 'BPL T20 2026',
    competitionBangla: 'বিপিএল টি-টোয়েন্টি ২০২৬',
    season: '2026',
    homeTeam: { id: 't-cv', name: 'Comilla Victorians', banglaName: 'কুমিল্লা ভিক্টোরিয়ান্স' },
    awayTeam: { id: 't-fb', name: 'Fortune Barishal', banglaName: 'ফরচুন বরিশাল' },
    venue: 'Zahur Ahmed Chowdhury Stadium, Chattogram',
    date: '2026-09-22',
    time: '19:00',
    status: 'upcoming',
    statusText: 'আজ সন্ধ্যা ৭:০০',
    externalApiId: 'bpl_up_5511',
    isDemo: true,
  },
  {
    id: 'm-4',
    sport: 'football',
    competition: 'AFC Asian Cup Qualifier',
    competitionBangla: 'এশিয়ান কাপ বাছাইপর্ব',
    season: '2026',
    homeTeam: { id: 't-ban-fb', name: 'Bangladesh', banglaName: 'বাংলাদেশ', score: '২' },
    awayTeam: { id: 't-nep', name: 'Nepal', banglaName: 'নেপাল', score: '০' },
    venue: 'Bangabandhu National Stadium, Dhaka',
    date: '2026-09-21',
    time: '18:00',
    status: 'finished',
    statusText: 'পূর্ণ সময়',
    result: 'বাংলাদেশ ২-০ গোলে জয়ী',
    externalApiId: 'afc_fin_2299',
    isDemo: true,
  },
];

let mockTeams: AdminTeam[] = [
  { id: 't-1', name: 'Bangladesh National Cricket Team', banglaName: 'বাংলাদেশ জাতীয় ক্রিকেট দল', shortName: 'BAN', slug: 'bangladesh-cricket-team', sport: 'cricket', country: 'Bangladesh', logo: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=100&q=80', status: 'active' },
  { id: 't-2', name: 'Sri Lanka National Cricket Team', banglaName: 'শ্রীলঙ্কা জাতীয় ক্রিকেট দল', shortName: 'SL', slug: 'sri-lanka-cricket-team', sport: 'cricket', country: 'Sri Lanka', logo: 'https://images.unsplash.com/photo-1531415074868-036b1c57e3b0?auto=format&fit=crop&w=100&q=80', status: 'active' },
  { id: 't-3', name: 'Comilla Victorians', banglaName: 'কুমিল্লা ভিক্টোরিয়ান্স', shortName: 'CV', slug: 'comilla-victorians', sport: 'cricket', country: 'Bangladesh', logo: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=100&q=80', status: 'active' },
  { id: 't-4', name: 'Fortune Barishal', banglaName: 'ফরচুন বরিশাল', shortName: 'FB', slug: 'fortune-barishal', sport: 'cricket', country: 'Bangladesh', logo: 'https://images.unsplash.com/photo-1531415074868-036b1c57e3b0?auto=format&fit=crop&w=100&q=80', status: 'active' },
  { id: 't-5', name: 'Bangladesh Football Team', banglaName: 'বাংলাদেশ জাতীয় ফুটবল দল', shortName: 'BAN', slug: 'bangladesh-football-team', sport: 'football', country: 'Bangladesh', logo: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=100&q=80', status: 'active' },
  { id: 't-6', name: 'Real Madrid CF', banglaName: 'রিয়াল মাদ্রিদ', shortName: 'RMA', slug: 'real-madrid', sport: 'football', country: 'Spain', logo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=100&q=80', status: 'active' },
  { id: 't-7', name: 'Arsenal FC', banglaName: 'আর্সেনাল', shortName: 'ARS', slug: 'arsenal', sport: 'football', country: 'England', logo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=100&q=80', status: 'active' },
  { id: 't-8', name: 'Liverpool FC', banglaName: 'লিভারপুল', shortName: 'LIV', slug: 'liverpool', sport: 'football', country: 'England', logo: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?auto=format&fit=crop&w=100&q=80', status: 'active' },
];

let mockPlayers: AdminPlayer[] = [
  { id: 'p-1', name: 'Najmul Hossain Shanto', banglaName: 'নাজমুল হোসেন শান্ত', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80', country: 'Bangladesh', sport: 'cricket', team: 'Bangladesh National Cricket Team', role: 'Captain / Top-order Batter', status: 'active' },
  { id: 'p-2', name: 'Liton Kumar Das', banglaName: 'লিটন কুমার দাস', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80', country: 'Bangladesh', sport: 'cricket', team: 'Bangladesh National Cricket Team', role: 'Wicketkeeper Batter', status: 'active' },
  { id: 'p-3', name: 'Taskin Ahmed', banglaName: 'তাসকিন আহমেদ', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80', country: 'Bangladesh', sport: 'cricket', team: 'Bangladesh National Cricket Team', role: 'Fast Bowler', status: 'active' },
  { id: 'p-4', name: 'Hamza Choudhury', banglaName: 'হামজা চৌধুরী', photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80', country: 'Bangladesh', sport: 'football', team: 'Bangladesh National Football Team', role: 'Midfielder', status: 'active' },
  { id: 'p-5', name: 'Kylian Mbappe', banglaName: 'কিলিয়ান এমবাপ্পে', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80', country: 'France', sport: 'football', team: 'Real Madrid CF', role: 'Forward', status: 'active' },
  { id: 'p-6', name: 'Erling Haaland', banglaName: 'আর্লিং হালান্ড', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80', country: 'Norway', sport: 'football', team: 'Manchester City', role: 'Striker', status: 'active' },
];

let mockCompetitions: AdminCompetition[] = [
  { id: 'comp-1', name: 'ICC World Test Championship', banglaName: 'আইসিসি বিশ্ব টেস্ট চ্যাম্পিয়নশিপ', sport: 'cricket', season: '2025-2027', status: 'active' },
  { id: 'comp-2', name: 'Bangladesh Premier League', banglaName: 'বাংলাদেশ প্রিমিয়ার লিগ (বিপিএল)', sport: 'cricket', season: '2026', country: 'Bangladesh', status: 'active' },
  { id: 'comp-3', name: 'Indian Premier League', banglaName: 'ইন্ডিয়ান প্রিমিয়ার লিগ (আইপিএল)', sport: 'cricket', season: '2026', country: 'India', status: 'active' },
  { id: 'comp-4', name: 'Premier League', banglaName: 'ইংলিশ প্রিমিয়ার লিগ', sport: 'football', season: '2025-2026', country: 'England', status: 'active' },
  { id: 'comp-5', name: 'UEFA Champions League', banglaName: 'উয়েফা চ্যাম্পিয়ন্স লিগ', sport: 'football', season: '2025-2026', status: 'active' },
  { id: 'comp-6', name: 'AFC Asian Cup Qualifiers', banglaName: 'এএফসি এশিয়ান কাপ বাছাইপর্ব', sport: 'football', season: '2026', status: 'active' },
];

let mockHomepageSections: AdminHomepageSectionConfig[] = [
  { id: 'sec-1', key: 'breaking_news', name: 'Breaking News Ticker', banglaName: 'ব্রেকিং নিউজ বার', enabled: true, order: 1 },
  { id: 'sec-2', key: 'hero_featured', name: 'Hero / Featured News', banglaName: 'হিরো ও ফিচার্ড নিউজ', enabled: true, order: 2, customArticleIds: ['art-1', 'art-2', 'art-3', 'art-4'] },
  { id: 'sec-3', key: 'latest_news', name: 'Latest News Stream', banglaName: 'সর্বশেষ সংবাদ', enabled: true, order: 3, articleCount: 8 },
  { id: 'sec-4', key: 'live_scores', name: 'Live Scores Centre', banglaName: 'লাইভ স্কোর হাব', enabled: true, order: 4 },
  { id: 'sec-5', key: 'cricket_section', name: 'Cricket News Hub', banglaName: 'ক্রিকেট সংবাদ বিভাগ', enabled: true, order: 5, articleCount: 4 },
  { id: 'sec-6', key: 'football_section', name: 'Football News Hub', banglaName: 'ফুটবল সংবাদ বিভাগ', enabled: true, order: 6, articleCount: 4 },
  { id: 'sec-7', key: 'trending_news', name: 'Trending News (Ranked)', banglaName: 'ট্রেন্ডিং সংবাদ (শীর্ষ ৫)', enabled: true, order: 7 },
  { id: 'sec-8', key: 'analysis_section', name: 'Tactical Analysis & Columns', banglaName: 'বিশ্লেষণ ও কলাম', enabled: true, order: 8, articleCount: 3 },
  { id: 'sec-9', key: 'videos_section', name: 'Video Highlights', banglaName: 'ভিডিও হাইলাইটস', enabled: true, order: 9, articleCount: 4 },
  { id: 'sec-10', key: 'newsletter_follow', name: 'Audience & Newsletter', banglaName: 'নিউজলেটার ও ফলো', enabled: true, order: 10 },
];

let mockNavigationItems: AdminNavigationItem[] = [
  { id: 'nav-1', label: 'Home', banglaLabel: 'প্রচ্ছদ', url: '/', order: 1, active: true },
  { id: 'nav-2', label: 'Cricket', banglaLabel: 'ক্রিকেট', url: '/cricket', order: 2, active: true },
  { id: 'nav-3', label: 'Football', banglaLabel: 'ফুটবল', url: '/football', order: 3, active: true },
  { id: 'nav-4', label: 'Live Score', banglaLabel: 'লাইভ স্কোর', url: '/live', order: 4, active: true },
  { id: 'nav-5', label: 'Matches', banglaLabel: 'ম্যাচ সূচি', url: '/matches', order: 5, active: true },
  { id: 'nav-6', label: 'Results', banglaLabel: 'ফলাফল', url: '/results', order: 6, active: true },
  { id: 'nav-7', label: 'Analysis', banglaLabel: 'বিশ্লেষণ', url: '/analysis', order: 7, active: true },
  { id: 'nav-8', label: 'Videos', banglaLabel: 'ভিডিও', url: '/videos', order: 8, active: true },
];

let mockAds: AdminAd[] = [
  { id: 'ad-1', name: 'Header Leaderboard Banner', slot: 'header', type: 'banner', active: true, image: 'https://images.unsplash.com/photo-1531415074868-036b1c57e3b0?auto=format&fit=crop&w=728&q=80', link: 'https://cricfot.com', startDate: '2026-09-01', impressions: 45200, clicks: 1240 },
  { id: 'ad-2', name: 'Homepage Mid-section Ad', slot: 'homepage', type: 'code', active: true, htmlCode: '<!-- CricFot Responsive Ad Unit -->', startDate: '2026-09-10', impressions: 28900, clicks: 810 },
  { id: 'ad-3', name: 'Article Right Rail Sidebar', slot: 'sidebar', type: 'banner', active: true, image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=300&q=80', link: 'https://cricfot.com', startDate: '2026-09-15', impressions: 18400, clicks: 490 },
];

let mockSeoConfig: AdminSeoConfig = {
  siteTitle: 'CricFot | Cricket & Football News, Live Scores & Analysis',
  metaDescription: 'বাংলাদেশের ক্রিকেট ও ফুটবলের সর্বশেষ খবর, ব্রেকিং নিউজ, ম্যাচ সূচি, ট্যাকটিক্যাল বিশ্লেষণ ও লাইভ স্কোর দেখুন CricFot-এ।',
  defaultOgImage: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1200&q=80',
  twitterCard: 'summary_large_image',
  canonicalBaseUrl: 'https://cricfot.com',
  robotsTxt: 'User-agent: *\nAllow: /\nDisallow: /admin/\nSitemap: https://cricfot.com/sitemap.xml',
  sitemapEnabled: true,
  noIndexSite: false,
  redirects: [
    { id: 'red-1', from: '/bpl-news', to: '/cricket?category=BPL', type: '301', active: true },
    { id: 'red-2', from: '/epl-today', to: '/football?category=Premier+League', type: '301', active: true },
  ],
};

let mockStaticPages: AdminStaticPage[] = [
  { id: 'p-about', title: 'About Us', banglaTitle: 'আমাদের সম্পর্কে', slug: 'about', content: 'ক্রিকফুট বাংলাদেশ ও বৈশ্বিক ক্রীড়াঙ্গনের নির্ভরযোগ্য ও তথ্যবহুল ডিজিটাল স্পোর্টস সংবাদ প্ল্যাটফর্ম।', status: 'published', updatedAt: '2026-09-22T05:00:00Z' },
  { id: 'p-contact', title: 'Contact Us', banglaTitle: 'যোগাযোগ', slug: 'contact', content: 'আমাদের নিউজরুম ও বিজ্ঞাপনের সাথে যোগাযোগ করতে ইমেইল করুন: desk@cricfot.com', status: 'published', updatedAt: '2026-09-22T05:00:00Z' },
  { id: 'p-editorial', title: 'Editorial Policy', banglaTitle: 'সম্পাদকীয় নীতিমালা', slug: 'editorial-policy', content: 'বস্তুনিষ্ঠতা, নির্ভুলতা ও যাচাইকৃত তথ্যের ভিত্তিতে সংবাদ প্রকাশে ক্রিকফুট অঙ্গীকারবদ্ধ।', status: 'published', updatedAt: '2026-09-22T05:00:00Z' },
  { id: 'p-correction', title: 'Correction Policy', banglaTitle: 'সংশোধনী নীতিমালা', slug: 'correction-policy', content: 'সংবাদে যেকোনো অনিচ্ছাকৃত ভুলত্রুটি দ্রুত ও স্বচ্ছতার সাথে সংশোধন করা হয়।', status: 'published', updatedAt: '2026-09-22T05:00:00Z' },
  { id: 'p-privacy', title: 'Privacy Policy', banglaTitle: 'গোপনীয়তা নীতি', slug: 'privacy-policy', content: 'পাঠক ও ব্যবহারকারীদের ব্যক্তিগত তথ্যের সুরক্ষায় আমরা সর্বোচ্চ নিরাপত্তা মেনে চলি।', status: 'published', updatedAt: '2026-09-22T05:00:00Z' },
  { id: 'p-terms', title: 'Terms of Use', banglaTitle: 'ব্যবহারের শর্তাবলী', slug: 'terms-of-use', content: 'ক্রিকফুট ওয়েবসাইট ব্যবহারের নিয়ম ও আইনি নির্দেশনাসমূহ।', status: 'published', updatedAt: '2026-09-22T05:00:00Z' },
];

let mockNotifications: AdminNotification[] = [
  { id: 'notif-1', title: 'মিরপুর টেস্টে সেঞ্চুরি', message: 'শ্রীলঙ্কার বিপক্ষে চতুর্থ ইনিংসে লিটন দাসের অনবদ্য সেঞ্চুরি!', type: 'breaking', sport: 'cricket', status: 'sent', sentAt: '2026-09-22T07:45:00Z' },
  { id: 'notif-2', title: 'চ্যাম্পিয়ন্স লিগ ড্র', message: 'ইতিহাদে শেষ মুহূর্তের গোলে আর্সেনালকে রুখে দিল রিয়াল মাদ্রিদ।', type: 'match_result', sport: 'football', status: 'sent', sentAt: '2026-09-22T07:20:00Z' },
  { id: 'notif-3', title: 'বিপিএল টি-টোয়েন্টি ম্যাচ শুরু', message: 'কুমিল্লা ভিক্টোরিয়ান্স বনাম ফরচুন বরিশাল ম্যাচ শুরু আজ সন্ধ্যা ৭:০০টায়।', type: 'match_start', sport: 'cricket', status: 'scheduled', scheduledAt: '2026-09-22T18:45:00Z' },
];

let mockUsers: AdminUser[] = [
  { id: 'usr-1', name: 'Super Admin', email: 'admin@cricfot.com', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80', role: 'super_admin', status: 'active', createdAt: '2026-01-15', lastLogin: '2026-09-22T08:15:00Z' },
  { id: 'usr-2', name: 'Chief Editor', email: 'editor@cricfot.com', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80', role: 'editor', status: 'active', createdAt: '2026-02-01', lastLogin: '2026-09-22T07:50:00Z' },
  { id: 'usr-3', name: 'Rashedul Islam', email: 'rashedul@cricfot.com', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80', role: 'author', status: 'active', createdAt: '2026-03-10', lastLogin: '2026-09-22T06:30:00Z' },
  { id: 'usr-4', name: 'Tanvir Ahmed', email: 'tanvir@cricfot.com', avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80', role: 'author', status: 'active', createdAt: '2026-03-12', lastLogin: '2026-09-22T05:40:00Z' },
  { id: 'usr-5', name: 'Data Analyst', email: 'analytics@cricfot.com', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80', role: 'analyst', status: 'active', createdAt: '2026-04-01', lastLogin: '2026-09-21T16:00:00Z' },
];

let mockRoles: AdminRole[] = [
  { id: 'role-1', name: 'Super Admin', description: 'Full unlimited access across all modules and system configurations.', permissions: ['*'], userCount: 1 },
  { id: 'role-2', name: 'Admin', description: 'Manage content, sports entities, site layout, ads and users.', permissions: ['articles.*', 'categories.*', 'sports.*', 'media.*', 'homepage.*', 'navigation.*', 'ads.*', 'users.read', 'analytics.read'], userCount: 2 },
  { id: 'role-3', name: 'Editor', description: 'Publish, unpublish, review and curate all editorial articles and breaking tickers.', permissions: ['articles.*', 'categories.*', 'tags.*', 'media.*', 'featured.*', 'breaking.*', 'trending.*'], userCount: 3 },
  { id: 'role-4', name: 'Author', description: 'Create and draft news and feature articles for editorial review.', permissions: ['articles.create', 'articles.edit_own', 'media.upload'], userCount: 8 },
  { id: 'role-5', name: 'Social Manager', description: 'Manage social channels, alerts, breaking notifications and social cards.', permissions: ['social.*', 'notifications.*', 'articles.read'], userCount: 2 },
  { id: 'role-6', name: 'Analyst', description: 'Read-only access to reader analytics, traffic metrics and user engagement.', permissions: ['analytics.read', 'articles.read'], userCount: 2 },
  { id: 'role-7', name: 'Moderator', description: 'Moderate comments and visitor feedback.', permissions: ['comments.moderate'], userCount: 1 },
];

let mockActivityLogs: AdminActivityLog[] = [
  { id: 'log-1', user: { id: 'usr-1', name: 'Super Admin', email: 'admin@cricfot.com' }, action: 'Article Published', module: 'Articles', details: 'Published "মিরপুর টেস্টে শ্রীলঙ্কার বিপক্ষে লিটন ও শান্তর দারুণ জুটি"', timestamp: '2026-09-22T07:45:12Z', ipPlaceholder: '103.114.98.24', status: 'success' },
  { id: 'log-2', user: { id: 'usr-2', name: 'Chief Editor', email: 'editor@cricfot.com' }, action: 'Breaking News Ticker Updated', module: 'Breaking News', details: 'Activated priority ticker for Mirpur Test', timestamp: '2026-09-22T07:15:30Z', ipPlaceholder: '103.114.98.55', status: 'success' },
  { id: 'log-3', user: { id: 'usr-1', name: 'Super Admin', email: 'admin@cricfot.com' }, action: 'Homepage Section Reordered', module: 'Homepage', details: 'Moved Live Scores section below Latest News', timestamp: '2026-09-22T06:40:10Z', ipPlaceholder: '103.114.98.24', status: 'success' },
  { id: 'log-4', user: { id: 'usr-3', name: 'Rashedul Islam', email: 'rashedul@cricfot.com' }, action: 'New Draft Created', module: 'Articles', details: 'Created draft "মুস্তাফিজের কাটারের সামনে কেন পরাস্ত বিশ্বসেরা ব্যাটাররা?"', timestamp: '2026-09-22T05:55:00Z', ipPlaceholder: '202.134.12.8', status: 'success' },
  { id: 'log-5', user: { id: 'usr-1', name: 'Super Admin', email: 'admin@cricfot.com' }, action: 'Sports API Sync', module: 'Live Scores', details: 'Simulated synchronisation with mock provider', timestamp: '2026-09-22T05:00:00Z', ipPlaceholder: '127.0.0.1', status: 'success' },
];

export const AdminService = {
  // --- DASHBOARD OVERVIEW ---
  async getDashboardStats(): Promise<AdminDashboardStats> {
    const published = mockArticles.filter((a) => a.status === 'published').length;
    const draft = mockArticles.filter((a) => a.status === 'draft').length;
    const scheduled = mockArticles.filter((a) => a.status === 'scheduled').length;
    const pendingReview = mockArticles.filter((a) => a.status === 'pending').length;
    const liveMatches = mockMatches.filter((m) => m.status === 'live').length;
    const totalViews = mockArticles.reduce((sum, a) => sum + (a.views || 0), 0);

    return {
      totalArticles: mockArticles.length,
      publishedArticles: published,
      draftArticles: draft,
      todayViews: totalViews + 14250,
      totalUsers: mockUsers.length,
      liveMatchesCount: liveMatches,
      statusCounts: {
        published,
        draft,
        scheduled,
        pendingReview,
      },
    };
  },

  // --- ARTICLES ---
  async getArticles(params?: {
    search?: string;
    sport?: string;
    category?: string;
    status?: string;
    page?: number;
    limit?: number;
  }): Promise<{ items: AdminArticle[]; total: number; page: number; totalPages: number }> {
    let result = [...mockArticles];

    if (params?.search) {
      const q = params.search.toLowerCase();
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          (a.banglaTitle && a.banglaTitle.toLowerCase().includes(q)) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (params?.sport && params.sport !== 'all') {
      result = result.filter((a) => a.sport === params.sport);
    }

    if (params?.category && params.category !== 'all') {
      result = result.filter((a) => a.category === params.category);
    }

    if (params?.status && params.status !== 'all') {
      result = result.filter((a) => a.status === params.status);
    }

    const total = result.length;
    const page = params?.page || 1;
    const limit = params?.limit || 10;
    const offset = (page - 1) * limit;
    const paginatedItems = result.slice(offset, offset + limit);

    return {
      items: paginatedItems,
      total,
      page,
      totalPages: Math.ceil(total / limit) || 1,
    };
  },

  async getArticleById(id: string): Promise<AdminArticle | null> {
    const found = mockArticles.find((a) => a.id === id);
    return found ? { ...found } : null;
  },

  async createArticle(data: Omit<AdminArticle, 'id' | 'views'>): Promise<AdminArticle> {
    const newArticle: AdminArticle = {
      ...data,
      id: `art-${Date.now()}`,
      views: 0,
      publishedAt: data.publishedAt || new Date().toISOString(),
    };
    mockArticles.unshift(newArticle);
    this.logActivity('Article Created', 'Articles', `Created article "${newArticle.title}"`);
    return newArticle;
  },

  async updateArticle(id: string, data: Partial<AdminArticle>): Promise<AdminArticle> {
    const idx = mockArticles.findIndex((a) => a.id === id);
    if (idx === -1) throw new Error('Article not found');
    mockArticles[idx] = {
      ...mockArticles[idx],
      ...data,
      updatedAt: new Date().toISOString(),
    };
    this.logActivity('Article Updated', 'Articles', `Updated article "${mockArticles[idx].title}"`);
    return { ...mockArticles[idx] };
  },

  async deleteArticle(id: string): Promise<boolean> {
    const article = mockArticles.find((a) => a.id === id);
    mockArticles = mockArticles.filter((a) => a.id !== id);
    if (article) {
      this.logActivity('Article Deleted', 'Articles', `Deleted article "${article.title}"`);
    }
    return true;
  },

  async duplicateArticle(id: string): Promise<AdminArticle> {
    const original = mockArticles.find((a) => a.id === id);
    if (!original) throw new Error('Article not found');
    const copy: AdminArticle = {
      ...original,
      id: `art-${Date.now()}`,
      title: `${original.title} (Copy)`,
      slug: `${original.slug}-copy`,
      status: 'draft',
      views: 0,
      publishedAt: new Date().toISOString(),
    };
    mockArticles.unshift(copy);
    this.logActivity('Article Duplicated', 'Articles', `Duplicated article "${original.title}"`);
    return copy;
  },

  // --- CATEGORIES ---
  async getCategories(): Promise<AdminCategory[]> {
    return [...mockCategories];
  },

  async saveCategory(cat: Partial<AdminCategory>): Promise<AdminCategory> {
    if (cat.id) {
      const idx = mockCategories.findIndex((c) => c.id === cat.id);
      if (idx !== -1) {
        mockCategories[idx] = { ...mockCategories[idx], ...cat };
        return mockCategories[idx];
      }
    }
    const newCat: AdminCategory = {
      id: `cat-${Date.now()}`,
      name: cat.name || 'New Category',
      banglaName: cat.banglaName || 'নতুন ক্যাটাগরি',
      slug: cat.slug || `category-${Date.now()}`,
      sport: cat.sport || 'general',
      description: cat.description || '',
      articleCount: 0,
      enabled: cat.enabled !== undefined ? cat.enabled : true,
    };
    mockCategories.push(newCat);
    this.logActivity('Category Created', 'Categories', `Created category "${newCat.name}"`);
    return newCat;
  },

  async createCategory(cat: Partial<AdminCategory>): Promise<AdminCategory> {
    return this.saveCategory(cat);
  },

  async updateCategory(id: string, cat: Partial<AdminCategory>): Promise<AdminCategory> {
    return this.saveCategory({ ...cat, id });
  },

  async deleteCategory(id: string): Promise<boolean> {
    mockCategories = mockCategories.filter((c) => c.id !== id);
    this.logActivity('Category Deleted', 'Categories', `Deleted category ID: ${id}`);
    return true;
  },

  // --- TAGS ---
  async getTags(): Promise<AdminTag[]> {
    return [...mockTags];
  },

  async saveTag(tag: Partial<AdminTag>): Promise<AdminTag> {
    if (tag.id) {
      const idx = mockTags.findIndex((t) => t.id === tag.id);
      if (idx !== -1) {
        mockTags[idx] = { ...mockTags[idx], ...tag };
        return mockTags[idx];
      }
    }
    const newTag: AdminTag = {
      id: `tag-${Date.now()}`,
      name: tag.name || 'New Tag',
      slug: tag.slug || `tag-${Date.now()}`,
      articleCount: 0,
    };
    mockTags.push(newTag);
    return newTag;
  },

  async createTag(tag: Partial<AdminTag>): Promise<AdminTag> {
    return this.saveTag(tag);
  },

  async updateTag(id: string, tag: Partial<AdminTag>): Promise<AdminTag> {
    return this.saveTag({ ...tag, id });
  },

  async deleteTag(id: string): Promise<boolean> {
    mockTags = mockTags.filter((t) => t.id !== id);
    return true;
  },

  // --- AUTHORS ---
  async getAuthors(): Promise<AdminAuthor[]> {
    return [...mockAuthors];
  },

  async saveAuthor(author: Partial<AdminAuthor>): Promise<AdminAuthor> {
    if (author.id) {
      const idx = mockAuthors.findIndex((a) => a.id === author.id);
      if (idx !== -1) {
        mockAuthors[idx] = { ...mockAuthors[idx], ...author };
        return mockAuthors[idx];
      }
    }
    const newAuthor: AdminAuthor = {
      id: `auth-${Date.now()}`,
      name: author.name || 'New Author',
      banglaName: author.banglaName || 'নতুন প্রতিবেদক',
      slug: author.slug || `author-${Date.now()}`,
      email: author.email || 'author@cricfot.com',
      role: author.role || 'Sports Reporter',
      avatar: author.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      articlesCount: 0,
      status: 'active',
    };
    mockAuthors.push(newAuthor);
    return newAuthor;
  },

  async createAuthor(author: Partial<AdminAuthor>): Promise<AdminAuthor> {
    return this.saveAuthor(author);
  },

  async updateAuthor(id: string, author: Partial<AdminAuthor>): Promise<AdminAuthor> {
    return this.saveAuthor({ ...author, id });
  },

  async deleteAuthor(id: string): Promise<boolean> {
    mockAuthors = mockAuthors.filter((a) => a.id !== id);
    return true;
  },

  // --- MEDIA ---
  async getMedia(): Promise<AdminMediaItem[]> {
    return [...mockMedia];
  },

  async uploadMedia(item: Partial<AdminMediaItem>): Promise<AdminMediaItem> {
    const newItem: AdminMediaItem = {
      id: `med-${Date.now()}`,
      filename: item.filename || 'uploaded-asset.jpg',
      url: item.url || 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1200&q=80',
      type: item.type || 'image',
      size: item.size || '1.5 MB',
      dimensions: item.dimensions || '1920x1080',
      alt: item.alt || 'Sports Media Asset',
      caption: item.caption || '',
      copyright: item.copyright || 'CricFot Media',
      source: item.source || 'CricFot Staff',
      uploadedAt: new Date().toISOString(),
      usedInCount: 0,
      ...item,
    };
    mockMedia.unshift(newItem);
    this.logActivity('Media Uploaded', 'Media Library', `Uploaded "${newItem.filename}"`);
    return newItem;
  },

  async createMediaItem(item: Partial<AdminMediaItem>): Promise<AdminMediaItem> {
    return this.uploadMedia(item);
  },

  async deleteMedia(id: string): Promise<boolean> {
    mockMedia = mockMedia.filter((m) => m.id !== id);
    this.logActivity('Media Deleted', 'Media Library', `Deleted media ID ${id}`);
    return true;
  },

  async deleteMediaItem(id: string): Promise<boolean> {
    return this.deleteMedia(id);
  },

  // --- VIDEOS ---
  async getVideos(): Promise<AdminVideo[]> {
    return [...mockVideos];
  },

  async saveVideo(video: Partial<AdminVideo>): Promise<AdminVideo> {
    if (video.id) {
      const idx = mockVideos.findIndex((v) => v.id === video.id);
      if (idx !== -1) {
        mockVideos[idx] = { ...mockVideos[idx], ...video };
        return mockVideos[idx];
      }
    }
    const newVideo: AdminVideo = {
      id: `vid-${Date.now()}`,
      title: video.title || 'New Video Highlight',
      banglaTitle: video.banglaTitle || 'নতুন ভিডিও হাইলাইটস',
      slug: video.slug || `video-${Date.now()}`,
      thumbnail: video.thumbnail || 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=600&q=80',
      duration: video.duration || '০৫:০০',
      sport: video.sport || 'cricket',
      category: video.category || 'Cricket',
      views: '০ ভিউ',
      status: 'published',
      publishedAt: new Date().toISOString(),
      ...video,
    };
    mockVideos.unshift(newVideo);
    return newVideo;
  },

  async createVideo(video: Partial<AdminVideo>): Promise<AdminVideo> {
    return this.saveVideo(video);
  },

  async updateVideo(id: string, video: Partial<AdminVideo>): Promise<AdminVideo> {
    return this.saveVideo({ ...video, id });
  },

  async deleteVideo(id: string): Promise<boolean> {
    mockVideos = mockVideos.filter((v) => v.id !== id);
    return true;
  },

  // --- BREAKING NEWS ---
  async getBreakingNews(): Promise<AdminBreakingItem[]> {
    return [...mockBreakingItems];
  },

  async saveBreakingNews(item: Partial<AdminBreakingItem>): Promise<AdminBreakingItem> {
    if (item.id) {
      const idx = mockBreakingItems.findIndex((b) => b.id === item.id);
      if (idx !== -1) {
        mockBreakingItems[idx] = { ...mockBreakingItems[idx], ...item };
        return mockBreakingItems[idx];
      }
    }
    const newItem: AdminBreakingItem = {
      id: `brk-${Date.now()}`,
      headline: item.headline || 'ব্রেকিং নিউজ শিরোনাম...',
      link: item.link || '/',
      active: item.active !== undefined ? item.active : true,
      priority: item.priority || 'high',
      startTime: new Date().toISOString(),
      sport: item.sport || 'cricket',
    };
    mockBreakingItems.unshift(newItem);
    this.logActivity('Breaking News Added', 'Breaking News', `Added ticker: "${newItem.headline}"`);
    return newItem;
  },

  async addBreakingNews(item: Partial<AdminBreakingItem>): Promise<AdminBreakingItem> {
    return this.saveBreakingNews(item);
  },

  async toggleBreakingNews(id: string, active?: boolean): Promise<AdminBreakingItem | null> {
    const item = mockBreakingItems.find((b) => b.id === id);
    if (!item) return null;
    item.active = active !== undefined ? active : !item.active;
    return item;
  },

  async deleteBreakingNews(id: string): Promise<boolean> {
    mockBreakingItems = mockBreakingItems.filter((b) => b.id !== id);
    return true;
  },

  // --- MATCHES & LIVE SCORES ---
  async getMatches(filters?: { sport?: string; status?: string }): Promise<AdminMatch[]> {
    let result = [...mockMatches];
    if (filters?.sport && filters.sport !== 'all') {
      result = result.filter((m) => m.sport === filters.sport);
    }
    if (filters?.status && filters.status !== 'all') {
      result = result.filter((m) => m.status === filters.status);
    }
    return result;
  },

  async saveMatch(match: Partial<AdminMatch>): Promise<AdminMatch> {
    if (match.id) {
      const idx = mockMatches.findIndex((m) => m.id === match.id);
      if (idx !== -1) {
        mockMatches[idx] = { ...mockMatches[idx], ...match };
        return mockMatches[idx];
      }
    }
    const newMatch: AdminMatch = {
      id: `m-${Date.now()}`,
      sport: match.sport || 'cricket',
      competition: match.competition || 'International Fixture',
      competitionBangla: match.competitionBangla || 'আন্তর্জাতিক প্রতিযোগিতা',
      season: match.season || '2026',
      homeTeam: match.homeTeam || { id: 't-1', name: 'Team A', banglaName: 'দল ১' },
      awayTeam: match.awayTeam || { id: 't-2', name: 'Team B', banglaName: 'দল ২' },
      venue: match.venue || 'Stadium Venue',
      date: match.date || '2026-09-22',
      time: match.time || '18:00',
      status: match.status || 'upcoming',
      statusText: match.statusText || 'আসন্ন',
      isDemo: true,
    };
    mockMatches.push(newMatch);
    this.logActivity('Match Saved', 'Matches', `Saved match ${newMatch.competition}`);
    return newMatch;
  },

  async createMatch(match: Partial<AdminMatch>): Promise<AdminMatch> {
    return this.saveMatch(match);
  },

  async updateMatch(id: string, match: Partial<AdminMatch>): Promise<AdminMatch> {
    return this.saveMatch({ ...match, id });
  },

  async deleteMatch(id: string): Promise<boolean> {
    mockMatches = mockMatches.filter((m) => m.id !== id);
    return true;
  },

  async getLiveProviderStatus(): Promise<{
    providerStatus: 'connected' | 'idle' | 'error';
    providerName: string;
    lastSync: string;
    nextSync: string;
    activeLiveMatches: number;
    lastError: string | null;
  }> {
    return {
      providerStatus: 'idle',
      providerName: 'CricFot Mock Sports Feeder (Demo Mode)',
      lastSync: new Date(Date.now() - 5 * 60 * 1000).toLocaleTimeString('bn-BD'),
      nextSync: 'স্বয়ংক্রিয় পুলিং সক্রিয় (প্রতি ৩ মিনিট)',
      activeLiveMatches: mockMatches.filter((m) => m.status === 'live').length,
      lastError: null,
    };
  },

  // --- TEAMS, PLAYERS, COMPETITIONS ---
  async getTeams(sport?: string): Promise<AdminTeam[]> {
    if (sport && sport !== 'all') {
      return mockTeams.filter((t) => t.sport === sport);
    }
    return [...mockTeams];
  },

  async saveTeam(team: Partial<AdminTeam>): Promise<AdminTeam> {
    if (team.id) {
      const idx = mockTeams.findIndex((t) => t.id === team.id);
      if (idx !== -1) {
        mockTeams[idx] = { ...mockTeams[idx], ...team };
        return mockTeams[idx];
      }
    }
    const newTeam: AdminTeam = {
      id: `team-${Date.now()}`,
      name: team.name || 'New Team',
      banglaName: team.banglaName || 'নতুন দল',
      shortName: team.shortName || 'NT',
      slug: team.slug || `team-${Date.now()}`,
      sport: team.sport || 'cricket',
      country: team.country || 'Bangladesh',
      logo: team.logo || 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=200&q=80',
      status: 'active',
      ...team,
    };
    mockTeams.push(newTeam);
    return newTeam;
  },

  async createTeam(team: Partial<AdminTeam>): Promise<AdminTeam> {
    return this.saveTeam(team);
  },

  async updateTeam(id: string, team: Partial<AdminTeam>): Promise<AdminTeam> {
    return this.saveTeam({ ...team, id });
  },

  async deleteTeam(id: string): Promise<boolean> {
    mockTeams = mockTeams.filter((t) => t.id !== id);
    return true;
  },

  async getPlayers(sport?: string): Promise<AdminPlayer[]> {
    if (sport && sport !== 'all') {
      return mockPlayers.filter((p) => p.sport === sport);
    }
    return [...mockPlayers];
  },

  async savePlayer(player: Partial<AdminPlayer>): Promise<AdminPlayer> {
    if (player.id) {
      const idx = mockPlayers.findIndex((p) => p.id === player.id);
      if (idx !== -1) {
        mockPlayers[idx] = { ...mockPlayers[idx], ...player };
        return mockPlayers[idx];
      }
    }
    const newPlayer: AdminPlayer = {
      id: `ply-${Date.now()}`,
      name: player.name || 'New Player',
      banglaName: player.banglaName || 'নতুন খেলোয়াড়',
      photo: player.photo || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      country: player.country || 'Bangladesh',
      sport: player.sport || 'cricket',
      team: player.team || 'National Team',
      role: player.role || 'All-rounder',
      status: 'active',
      ...player,
    };
    mockPlayers.push(newPlayer);
    return newPlayer;
  },

  async createPlayer(player: Partial<AdminPlayer>): Promise<AdminPlayer> {
    return this.savePlayer(player);
  },

  async updatePlayer(id: string, player: Partial<AdminPlayer>): Promise<AdminPlayer> {
    return this.savePlayer({ ...player, id });
  },

  async deletePlayer(id: string): Promise<boolean> {
    mockPlayers = mockPlayers.filter((p) => p.id !== id);
    return true;
  },

  async getCompetitions(sport?: string): Promise<AdminCompetition[]> {
    if (sport && sport !== 'all') {
      return mockCompetitions.filter((c) => c.sport === sport);
    }
    return [...mockCompetitions];
  },

  async saveCompetition(comp: Partial<AdminCompetition>): Promise<AdminCompetition> {
    if (comp.id) {
      const idx = mockCompetitions.findIndex((c) => c.id === comp.id);
      if (idx !== -1) {
        mockCompetitions[idx] = { ...mockCompetitions[idx], ...comp };
        return mockCompetitions[idx];
      }
    }
    const newComp: AdminCompetition = {
      id: `comp-${Date.now()}`,
      name: comp.name || 'New Competition',
      banglaName: comp.banglaName || 'নতুন টুর্নামেন্ট',
      sport: comp.sport || 'cricket',
      season: comp.season || '2026',
      status: 'active',
      ...comp,
    };
    mockCompetitions.push(newComp);
    return newComp;
  },

  async deleteCompetition(id: string): Promise<boolean> {
    mockCompetitions = mockCompetitions.filter((c) => c.id !== id);
    return true;
  },

  // --- HOMEPAGE CONFIGURATION ---
  async getHomepageConfig(): Promise<AdminHomepageSectionConfig[]> {
    return [...mockHomepageSections].sort((a, b) => a.order - b.order);
  },

  async getHomepageSections(): Promise<AdminHomepageSectionConfig[]> {
    return this.getHomepageConfig();
  },

  async updateHomepageSections(sections: AdminHomepageSectionConfig[]): Promise<AdminHomepageSectionConfig[]> {
    mockHomepageSections = [...sections];
    this.logActivity('Homepage Config Updated', 'Homepage', 'Sections reordered or toggled');
    return [...mockHomepageSections];
  },

  async saveHomepageSections(sections: AdminHomepageSectionConfig[]): Promise<AdminHomepageSectionConfig[]> {
    return this.updateHomepageSections(sections);
  },

  // --- NAVIGATION ---
  async getNavigationItems(): Promise<AdminNavigationItem[]> {
    return [...mockNavigationItems].sort((a, b) => a.order - b.order);
  },

  async saveNavigationItem(item: Partial<AdminNavigationItem>): Promise<AdminNavigationItem> {
    if (item.id) {
      const idx = mockNavigationItems.findIndex((n) => n.id === item.id);
      if (idx !== -1) {
        mockNavigationItems[idx] = { ...mockNavigationItems[idx], ...item };
        return mockNavigationItems[idx];
      }
    }
    const newItem: AdminNavigationItem = {
      id: `nav-${Date.now()}`,
      label: item.label || 'New Item',
      banglaLabel: item.banglaLabel || 'নতুন মেনু',
      url: item.url || '/',
      order: mockNavigationItems.length + 1,
      active: true,
    };
    mockNavigationItems.push(newItem);
    return newItem;
  },

  // --- ADS ---
  async getAds(): Promise<AdminAd[]> {
    return [...mockAds];
  },

  async getAdSlots(): Promise<AdminAd[]> {
    return this.getAds();
  },

  async saveAd(ad: Partial<AdminAd>): Promise<AdminAd> {
    if (ad.id) {
      const idx = mockAds.findIndex((a) => a.id === ad.id);
      if (idx !== -1) {
        mockAds[idx] = { ...mockAds[idx], ...ad };
        return mockAds[idx];
      }
    }
    const newAd: AdminAd = {
      id: `ad-${Date.now()}`,
      name: ad.name || 'New Ad Slot',
      slot: ad.slot || 'homepage',
      type: ad.type || 'banner',
      active: ad.active !== undefined ? ad.active : true,
      startDate: new Date().toISOString().split('T')[0],
      impressions: 0,
      clicks: 0,
      ...ad,
    };
    mockAds.push(newAd);
    return newAd;
  },

  async createAdSlot(ad: Partial<AdminAd>): Promise<AdminAd> {
    return this.saveAd(ad);
  },

  async updateAdSlot(id: string, ad: Partial<AdminAd>): Promise<AdminAd> {
    return this.saveAd({ ...ad, id });
  },

  async toggleAdSlot(id: string, active?: boolean): Promise<AdminAd | null> {
    const ad = mockAds.find((a) => a.id === id);
    if (!ad) return null;
    ad.active = active !== undefined ? active : !ad.active;
    return ad;
  },

  async deleteAdSlot(id: string): Promise<boolean> {
    mockAds = mockAds.filter((a) => a.id !== id);
    return true;
  },

  // --- SEO ---
  async getSeoConfig(): Promise<AdminSeoConfig> {
    return { ...mockSeoConfig };
  },

  async saveSeoConfig(config: Partial<AdminSeoConfig>): Promise<AdminSeoConfig> {
    mockSeoConfig = { ...mockSeoConfig, ...config };
    this.logActivity('SEO Settings Updated', 'SEO', 'Updated global meta tags and robots.txt');
    return { ...mockSeoConfig };
  },

  // --- STATIC PAGES ---
  async getStaticPages(): Promise<AdminStaticPage[]> {
    return [...mockStaticPages];
  },

  async saveStaticPage(page: Partial<AdminStaticPage>): Promise<AdminStaticPage> {
    const idx = mockStaticPages.findIndex((p) => p.id === page.id);
    if (idx !== -1) {
      mockStaticPages[idx] = {
        ...mockStaticPages[idx],
        ...page,
        updatedAt: new Date().toISOString(),
      };
      return mockStaticPages[idx];
    }
    const newPage: AdminStaticPage = {
      id: `page-${Date.now()}`,
      title: page.title || 'New Page',
      banglaTitle: page.banglaTitle || 'নতুন পৃষ্ঠা',
      slug: page.slug || `page-${Date.now()}`,
      content: page.content || '',
      status: 'published',
      updatedAt: new Date().toISOString(),
    };
    mockStaticPages.push(newPage);
    return newPage;
  },

  // --- NOTIFICATIONS ---
  async getNotifications(): Promise<AdminNotification[]> {
    return [...mockNotifications];
  },

  async createNotification(notif: Partial<AdminNotification>): Promise<AdminNotification> {
    const newNotif: AdminNotification = {
      id: `notif-${Date.now()}`,
      title: notif.title || 'Alert',
      message: notif.message || '',
      type: notif.type || 'general',
      sport: notif.sport,
      status: notif.scheduledAt ? 'scheduled' : 'sent',
      sentAt: notif.scheduledAt ? undefined : new Date().toISOString(),
      scheduledAt: notif.scheduledAt,
    };
    mockNotifications.unshift(newNotif);
    this.logActivity('Notification Scheduled', 'Notifications', `Prepared notification "${newNotif.title}"`);
    return newNotif;
  },

  // --- USERS & ROLES ---
  async getUsers(): Promise<AdminUser[]> {
    return [...mockUsers];
  },

  async saveUser(user: Partial<AdminUser>): Promise<AdminUser> {
    if (user.id) {
      const idx = mockUsers.findIndex((u) => u.id === user.id);
      if (idx !== -1) {
        mockUsers[idx] = { ...mockUsers[idx], ...user };
        return mockUsers[idx];
      }
    }
    const newUser: AdminUser = {
      id: `usr-${Date.now()}`,
      name: user.name || 'Staff User',
      email: user.email || 'user@cricfot.com',
      avatar: user.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      role: user.role || 'author',
      status: 'active',
      createdAt: new Date().toISOString().split('T')[0],
      lastLogin: 'Never',
    };
    mockUsers.push(newUser);
    this.logActivity('User Created', 'Users', `Created user account for ${newUser.email}`);
    return newUser;
  },

  async deleteUser(id: string): Promise<boolean> {
    mockUsers = mockUsers.filter((u) => u.id !== id);
    this.logActivity('User Removed', 'Users', `Deleted user ID ${id}`);
    return true;
  },

  async getRoles(): Promise<AdminRole[]> {
    return [...mockRoles];
  },

  // --- ACTIVITY LOGS ---
  async getActivityLogs(): Promise<AdminActivityLog[]> {
    return [...mockActivityLogs];
  },

  logActivity(action: string, module: string, details?: string) {
    const newLog: AdminActivityLog = {
      id: `log-${Date.now()}`,
      user: {
        id: 'usr-1',
        name: 'Super Admin',
        email: 'admin@cricfot.com',
      },
      action,
      module,
      details,
      timestamp: new Date().toISOString(),
      ipPlaceholder: '103.114.98.24',
      status: 'success',
    };
    mockActivityLogs.unshift(newLog);
  },

  // --- GLOBAL ADMIN SEARCH ---
  async searchEverything(query: string): Promise<{
    articles: Array<{ id: string; title: string; slug: string; sport: string }>;
    categories: Array<{ id: string; name: string; slug: string }>;
    matches: Array<{ id: string; competition: string; teams: string }>;
    teams: Array<{ id: string; name: string; sport: string }>;
  }> {
    const q = query.toLowerCase().trim();
    if (!q) return { articles: [], categories: [], matches: [], teams: [] };

    return {
      articles: mockArticles
        .filter((a) => a.title.toLowerCase().includes(q) || a.tags.some((t) => t.toLowerCase().includes(q)))
        .slice(0, 5)
        .map((a) => ({ id: a.id, title: a.title, slug: a.slug, sport: a.sport })),
      categories: mockCategories
        .filter((c) => c.name.toLowerCase().includes(q) || c.banglaName.toLowerCase().includes(q))
        .slice(0, 4)
        .map((c) => ({ id: c.id, name: c.name, slug: c.slug })),
      matches: mockMatches
        .filter((m) => m.competition.toLowerCase().includes(q) || m.homeTeam.name.toLowerCase().includes(q) || m.awayTeam.name.toLowerCase().includes(q))
        .slice(0, 3)
        .map((m) => ({ id: m.id, competition: m.competition, teams: `${m.homeTeam.name} vs ${m.awayTeam.name}` })),
      teams: mockTeams
        .filter((t) => t.name.toLowerCase().includes(q) || t.banglaName.toLowerCase().includes(q))
        .slice(0, 4)
        .map((t) => ({ id: t.id, name: t.name, sport: t.sport })),
    };
  },
};

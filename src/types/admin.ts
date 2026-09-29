import { Sport, Category } from './index';

export type ArticleStatus = 'published' | 'draft' | 'scheduled' | 'pending';
export type MatchStatus = 'live' | 'upcoming' | 'finished';

export interface AdminArticle {
  id: string;
  title: string;
  banglaTitle?: string;
  slug: string;
  subtitle?: string;
  excerpt: string;
  content: string;
  sport: Sport;
  category: Category;
  tags: string[];
  authorId: string;
  authorName: string;
  authorBanglaName?: string;
  image: {
    url: string;
    caption?: string;
    alt: string;
    source?: string;
  };
  status: ArticleStatus;
  publishedAt: string;
  updatedAt?: string;
  scheduledAt?: string;
  featured?: boolean;
  breaking?: boolean;
  trending?: boolean;
  editorsPick?: boolean;
  views: number;
  readTimeMinutes: number;
  seo?: {
    title?: string;
    description?: string;
    canonical?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
  };
  social?: {
    facebookTitle?: string;
    xTitle?: string;
    socialImage?: string;
  };
}

export interface AdminCategory {
  id: string;
  name: string;
  banglaName: string;
  slug: string;
  sport?: Sport | 'general';
  description?: string;
  articleCount: number;
  enabled: boolean;
  order?: number;
  seoTitle?: string;
  seoDescription?: string;
}

export interface AdminTag {
  id: string;
  name: string;
  banglaName?: string;
  slug: string;
  articleCount: number;
}

export interface AdminAuthor {
  id: string;
  name: string;
  banglaName: string;
  slug: string;
  email: string;
  role: string;
  avatar: string;
  bio?: string;
  articlesCount: number;
  articleCount?: number;
  status: 'active' | 'inactive';
  social?: {
    x?: string;
    facebook?: string;
    linkedin?: string;
  };
}

export interface AdminMediaItem {
  id: string;
  filename: string;
  title?: string;
  url: string;
  type: 'image' | 'video-thumbnail' | 'document';
  size: string;
  dimensions?: string;
  alt: string;
  caption?: string;
  description?: string;
  copyright?: string;
  credit?: string;
  source?: string;
  uploadedAt: string;
  usedInCount?: number;
}

export interface AdminVideo {
  id: string;
  title: string;
  banglaTitle: string;
  slug: string;
  thumbnail: string;
  thumbnailUrl?: string;
  videoUrl?: string;
  duration: string;
  sport: Sport;
  category: string;
  views: string | number;
  status: 'published' | 'draft';
  publishedAt: string;
}

export type AdminVideoItem = AdminVideo;

export interface AdminBreakingItem {
  id: string;
  headline: string;
  title?: string;
  banglaTitle?: string;
  link: string;
  url?: string;
  active: boolean;
  priority: 'high' | 'normal' | 'urgent';
  startTime: string;
  endTime?: string;
  sport?: Sport;
  order?: number;
}

export interface AdminMatch {
  id: string;
  sport: Sport;
  competition: string;
  competitionBangla: string;
  season: string;
  homeTeam: {
    id: string;
    name: string;
    banglaName: string;
    score?: string;
    overs?: string;
    logo?: string;
  };
  awayTeam: {
    id: string;
    name: string;
    banglaName: string;
    score?: string;
    overs?: string;
    logo?: string;
  };
  venue: string;
  date: string;
  time: string;
  scheduledAt?: string;
  status: 'live' | 'upcoming' | 'finished';
  statusText: string;
  result?: string;
  externalApiId?: string;
  isDemo?: boolean;
}

export interface AdminTeam {
  id: string;
  name: string;
  banglaName: string;
  shortName: string;
  slug: string;
  sport: Sport;
  country: string;
  logo: string;
  description?: string;
  externalApiId?: string;
  status: 'active' | 'inactive';
}

export interface AdminPlayer {
  id: string;
  name: string;
  banglaName: string;
  photo: string;
  country: string;
  sport: Sport;
  team: string;
  role: string;
  jerseyNumber?: number;
  bio?: string;
  externalApiId?: string;
  status: 'active' | 'inactive';
}

export interface AdminCompetition {
  id: string;
  name: string;
  banglaName: string;
  sport: Sport;
  season: string;
  country?: string;
  logo?: string;
  description?: string;
  externalApiId?: string;
  status: 'active' | 'inactive';
}

export interface AdminAd {
  id: string;
  name: string;
  slot?:
    | 'header'
    | 'homepage'
    | 'sidebar'
    | 'in-article'
    | 'between-articles'
    | 'match-centre'
    | 'footer';
  position?: string;
  type?: 'banner' | 'code' | 'sponsored';
  image?: string;
  imageUrl?: string;
  link?: string;
  targetUrl?: string;
  htmlCode?: string;
  active: boolean;
  startDate?: string;
  endDate?: string;
  impressions: number;
  clicks: number;
}

export type AdminAdSlot = AdminAd;

export interface AdminHomepageSectionConfig {
  id: string;
  key: string;
  name: string;
  banglaName: string;
  title?: string;
  banglaTitle?: string;
  type?: string;
  enabled: boolean;
  order: number;
  articleCount?: number;
  customArticleIds?: string[];
}

export type AdminHomepageSection = AdminHomepageSectionConfig;

export interface AdminNavigationItem {
  id: string;
  label: string;
  banglaLabel: string;
  url: string;
  icon?: string;
  order: number;
  active: boolean;
  target?: '_self' | '_blank';
}

export interface AdminSeoConfig {
  siteTitle: string;
  metaDescription: string;
  defaultOgImage: string;
  twitterCard: 'summary' | 'summary_large_image';
  canonicalBaseUrl: string;
  robotsTxt: string;
  sitemapEnabled: boolean;
  noIndexSite: boolean;
  redirects: Array<{
    id: string;
    from: string;
    to: string;
    type: '301' | '302';
    active: boolean;
  }>;
}

export interface AdminStaticPage {
  id: string;
  title: string;
  banglaTitle: string;
  slug: string;
  content: string;
  seoTitle?: string;
  metaDescription?: string;
  status: 'published' | 'draft';
  updatedAt: string;
}

export interface AdminNotification {
  id: string;
  title: string;
  message: string;
  type: 'breaking' | 'match_start' | 'wicket' | 'goal' | 'match_result' | 'general';
  sport?: Sport;
  url?: string;
  matchId?: string;
  scheduledAt?: string;
  sentAt?: string;
  status: 'draft' | 'scheduled' | 'sent';
}

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'admin' | 'manager' | 'super_admin' | 'editor' | 'author' | 'social_manager' | 'analyst' | 'moderator';
  status: 'active' | 'disabled' | 'inactive';
  createdAt: string;
  lastLogin: string;
}

export interface AdminRole {
  id: string;
  name: string;
  description: string;
  permissions: string[];
  userCount: number;
}

export interface AdminActivityLog {
  id: string;
  user: {
    id: string;
    name: string;
    email: string;
    avatar?: string;
  };
  action: string;
  module: string;
  details?: string;
  timestamp: string;
  ipPlaceholder: string;
  status: 'success' | 'warning' | 'error';
}

export interface AdminDashboardStats {
  totalArticles: number;
  publishedArticles: number;
  draftArticles: number;
  todayViews: number;
  totalUsers: number;
  liveMatchesCount: number;
  statusCounts: {
    published: number;
    draft: number;
    scheduled: number;
    pendingReview: number;
  };
}

export interface AdminLoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
  twoFactorCode?: string;
}

export interface AdminAuthUser {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'admin' | 'manager' | 'super_admin' | 'editor' | 'author' | 'social_manager' | 'analyst' | 'moderator';
  roleName: string;
  permissions: string[];
}

export interface AdminAuthSession {
  token: string;
  refreshToken: string;
  expiresAt: number;
  user: AdminAuthUser;
  rememberMe: boolean;
}


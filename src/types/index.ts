/**
 * CricFot - Core TypeScript Types & Data Architecture
 * Foundation phase for production-ready digital sports newspaper
 */

export type Sport = 'cricket' | 'football';

export type Category =
  | 'Bangladesh Cricket'
  | 'International Cricket'
  | 'BPL'
  | 'IPL'
  | 'ICC'
  | 'Bangladesh Football'
  | 'International Football'
  | 'Premier League'
  | 'Champions League'
  | 'Transfer News'
  | 'Analysis';

export interface Author {
  id: string;
  name: string;
  banglaName?: string;
  role?: string;
  avatar?: string;
}

export interface Article {
  id: string;
  title: string;
  banglaTitle?: string;
  slug: string;
  excerpt: string;
  content?: string;
  image: {
    url: string;
    caption?: string;
    alt: string;
  };
  category: Category;
  sport: Sport;
  author: Author;
  publishedAt: string; // ISO 8601 string
  updatedAt?: string;
  featured?: boolean;
  breaking?: boolean;
  trending?: boolean;
  tags: string[];
  readTimeMinutes?: number;
}

export interface ArticleFilters {
  sport?: Sport;
  category?: Category | string;
  tag?: string;
  query?: string;
  featured?: boolean;
  breaking?: boolean;
  trending?: boolean;
  limit?: number;
  offset?: number;
}

export interface NavigationItem {
  label: string;
  banglaLabel?: string;
  href: string;
  badge?: string;
  sport?: Sport;
}

export type MatchStatus = 'live' | 'upcoming' | 'completed';

export interface MatchTeam {
  name: string;
  banglaName: string;
  shortName?: string;
  score?: string;
  overs?: string;
  flag?: string;
  color?: string;
}

export interface Match {
  id: string;
  sport: Sport;
  competition: string;
  competitionBangla: string;
  status: MatchStatus;
  statusText: string;
  venue?: string;
  startTime?: string;
  team1: MatchTeam;
  team2: MatchTeam;
  result?: string;
  isDemo?: boolean;
}

export interface VideoItem {
  id: string;
  title: string;
  banglaTitle?: string;
  slug: string;
  thumbnail: string;
  duration: string;
  category: Category | string;
  sport: Sport;
  publishedAt: string;
  views?: string;
}

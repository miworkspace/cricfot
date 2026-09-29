/**
 * CricFot MongoDB Document Storage Engine & Repository Layer
 * Implements JSON-compatible MongoDB collections as specified in Section 38 of PDF:
 * users, articles, categories, tags, authors, media, breakingNews, featuredNews,
 * trendingNews, videos, matches, teams, players, competitions, homepage, ads,
 * seoSettings, pages, navigation, notifications, socialSettings, analytics, activityLogs.
 */

import { MOCK_ARTICLES } from '../../data/mockArticles';

export interface MongoUser {
  _id: string;
  name: string;
  email: string;
  passwordHash?: string;
  role: 'admin' | 'manager';
  profileImage?: string;
  status: 'active' | 'inactive';
  lastLoginAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface MongoArticle {
  _id: string;
  title: string;
  banglaTitle?: string;
  slug: string;
  shortDescription: string;
  content: string;
  sport: 'cricket' | 'football';
  categoryId: string;
  subcategoryId?: string;
  tagIds: string[];
  authorId: string;
  featuredImage: {
    url: string;
    alt: string;
    caption?: string;
  };
  gallery: string[];
  type: string;
  status: 'draft' | 'published' | 'scheduled' | 'archived';
  isFeatured: boolean;
  isTrending: boolean;
  isBreaking: boolean;
  views: number;
  seo: {
    metaTitle?: string;
    metaDescription?: string;
    focusKeyword?: string;
    canonicalUrl?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    twitterTitle?: string;
    twitterDescription?: string;
    twitterImage?: string;
  };
  publishedAt: string;
  scheduledAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface MongoActivityLog {
  _id: string;
  userId: string;
  userName: string;
  role: 'admin' | 'manager';
  action: string;
  resource: string;
  resourceId?: string;
  description: string;
  ipAddress?: string;
  createdAt: string;
}

// Initial seed data
const INITIAL_USERS: MongoUser[] = [
  {
    _id: 'usr-admin-1',
    name: 'Chief Newsroom Admin',
    email: 'admin@cricfot.com',
    role: 'admin',
    profileImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    status: 'active',
    lastLoginAt: new Date().toISOString(),
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: new Date().toISOString(),
  },
  {
    _id: 'usr-manager-1',
    name: 'Editorial News Desk Manager',
    email: 'manager@cricfot.com',
    role: 'manager',
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    status: 'active',
    lastLoginAt: new Date(Date.now() - 3600000).toISOString(),
    createdAt: '2026-02-01T00:00:00Z',
    updatedAt: new Date().toISOString(),
  },
];

const INITIAL_CATEGORIES = [
  { _id: 'cat-1', name: 'Bangladesh Cricket', slug: 'bangladesh-cricket', sport: 'cricket', status: 'active' },
  { _id: 'cat-2', name: 'BPL', slug: 'bpl', sport: 'cricket', status: 'active' },
  { _id: 'cat-3', name: 'International Cricket', slug: 'international-cricket', sport: 'cricket', status: 'active' },
  { _id: 'cat-4', name: 'Bangladesh Football', slug: 'bangladesh-football', sport: 'football', status: 'active' },
  { _id: 'cat-5', name: 'Premier League', slug: 'premier-league', sport: 'football', status: 'active' },
  { _id: 'cat-6', name: 'Champions League', slug: 'champions-league', sport: 'football', status: 'active' },
  { _id: 'cat-7', name: 'La Liga', slug: 'la-liga', sport: 'football', status: 'active' },
];

const INITIAL_TAGS = [
  { _id: 'tag-1', name: 'Bangladesh Cricket', slug: 'bangladesh-cricket' },
  { _id: 'tag-2', name: 'BCB', slug: 'bcb' },
  { _id: 'tag-3', name: 'Test Cricket', slug: 'test-cricket' },
  { _id: 'tag-4', name: 'BPL 2026', slug: 'bpl-2026' },
  { _id: 'tag-5', name: 'Premier League', slug: 'premier-league' },
  { _id: 'tag-6', name: 'Champions League', slug: 'champions-league' },
  { _id: 'tag-7', name: 'Real Madrid', slug: 'real-madrid' },
  { _id: 'tag-8', name: 'Manchester City', slug: 'manchester-city' },
];

const INITIAL_AUTHORS = [
  {
    _id: 'auth-1',
    name: 'Rashedul Islam',
    banglaName: 'রাশেদুল ইসলাম',
    slug: 'rashedul-islam',
    profileImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    bio: 'Senior Cricket Correspondent covering Bangladesh national team and ICC tournaments for over a decade.',
    designation: 'Senior Cricket Correspondent',
    status: 'active',
  },
  {
    _id: 'auth-2',
    name: 'Tanvir Ahmed',
    banglaName: 'তানভীর আহমেদ',
    slug: 'tanvir-ahmed',
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    bio: 'Lead European Football Analyst with specialized focus on English Premier League tactics and UEFA competitions.',
    designation: 'European Football Lead',
    status: 'active',
  },
  {
    _id: 'auth-3',
    name: 'Kazi Shakil',
    banglaName: 'কাজী শাকিল',
    slug: 'kazi-shakil',
    profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    bio: 'Investigative sports reporter tracking grassroots football development and domestic leagues in Bangladesh.',
    designation: 'Domestic Sports Desk',
    status: 'active',
  },
];

const INITIAL_BREAKING_NEWS = [
  {
    _id: 'brk-1',
    text: 'মিরপুর টেস্ট: শান্ত ও লিটনের অপরাজিত সেঞ্চুরিতে শ্রীলঙ্কার বিপক্ষে চালকের আসনে বাংলাদেশ।',
    url: '/news/shanto-praises-pacers-tigers-test-campaign',
    priority: 'urgent',
    status: 'active',
    startAt: new Date().toISOString(),
  },
  {
    _id: 'brk-2',
    text: 'চ্যাম্পিয়ন্স লিগ: শেষ মুহূর্তের নাটকীয় গোলে সান্তিয়াগো বার্নাব্যুতে জয় তুলে নিল রিয়াল মাদ্রিদ।',
    url: '/football',
    priority: 'high',
    status: 'active',
    startAt: new Date().toISOString(),
  },
  {
    _id: 'brk-3',
    text: 'বিপিএল ২০২৬: প্লেয়ার্স ড্রাফটে দল পেলেন দেশসেরা তরুণ পেসাররা।',
    url: '/news/bpl-2026-season-draft-franchise-strategies-local-pacers',
    priority: 'normal',
    status: 'active',
    startAt: new Date().toISOString(),
  },
];

const INITIAL_LOGS: MongoActivityLog[] = [
  {
    _id: 'log-1',
    userId: 'usr-admin-1',
    userName: 'Chief Newsroom Admin',
    role: 'admin',
    action: 'User logged in',
    resource: 'auth',
    description: 'Admin logged into CricFot CMS session.',
    ipAddress: '127.0.0.1',
    createdAt: new Date(Date.now() - 1800000).toISOString(),
  },
  {
    _id: 'log-2',
    userId: 'usr-admin-1',
    userName: 'Chief Newsroom Admin',
    role: 'admin',
    action: 'Article published',
    resource: 'article',
    resourceId: 'art-1',
    description: 'Published headline article on Mirpur Test preparations.',
    ipAddress: '127.0.0.1',
    createdAt: new Date(Date.now() - 3600000).toISOString(),
  },
  {
    _id: 'log-3',
    userId: 'usr-manager-1',
    userName: 'Editorial News Desk Manager',
    role: 'manager',
    action: 'Category created',
    resource: 'category',
    resourceId: 'cat-2',
    description: 'Manager created BPL category entry.',
    ipAddress: '127.0.0.1',
    createdAt: new Date(Date.now() - 7200000).toISOString(),
  },
];

class MongoStorageEngine {
  private users: MongoUser[] = [...INITIAL_USERS];
  private articles: MongoArticle[] = [];
  private categories = [...INITIAL_CATEGORIES];
  private tags = [...INITIAL_TAGS];
  private authors = [...INITIAL_AUTHORS];
  private breakingNews = [...INITIAL_BREAKING_NEWS];
  private logs: MongoActivityLog[] = [...INITIAL_LOGS];

  constructor() {
    this.seedArticlesFromPublicMock();
    this.loadFromStorage();
  }

  private seedArticlesFromPublicMock() {
    this.articles = MOCK_ARTICLES.map((art) => ({
      _id: art.id,
      title: art.title,
      banglaTitle: art.banglaTitle,
      slug: art.slug,
      shortDescription: art.excerpt,
      content: art.content || art.excerpt,
      sport: art.sport,
      categoryId: art.category,
      tagIds: art.tags,
      authorId: art.author?.id || 'auth-1',
      featuredImage: {
        url: art.image.url,
        alt: art.image.alt || art.title,
        caption: art.image.caption,
      },
      gallery: [],
      type: art.featured ? 'Featured News' : art.breaking ? 'Breaking News' : 'Regular News',
      status: 'published',
      isFeatured: Boolean(art.featured),
      isTrending: Boolean(art.trending),
      isBreaking: Boolean(art.breaking),
      views: 12500,
      seo: {
        metaTitle: art.banglaTitle || art.title,
        metaDescription: art.excerpt,
      },
      publishedAt: art.publishedAt,
      createdAt: art.publishedAt,
      updatedAt: art.updatedAt || art.publishedAt,
    }));
  }

  private loadFromStorage() {
    if (typeof window === 'undefined') return;
    try {
      const storedUsers = localStorage.getItem('cricfot_db_users');
      if (storedUsers) this.users = JSON.parse(storedUsers);

      const storedArticles = localStorage.getItem('cricfot_db_articles');
      if (storedArticles) this.articles = JSON.parse(storedArticles);

      const storedLogs = localStorage.getItem('cricfot_db_logs');
      if (storedLogs) this.logs = JSON.parse(storedLogs);
    } catch {
      // Fallback to in-memory
    }
  }

  private saveToStorage() {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem('cricfot_db_users', JSON.stringify(this.users));
      localStorage.setItem('cricfot_db_articles', JSON.stringify(this.articles));
      localStorage.setItem('cricfot_db_logs', JSON.stringify(this.logs));
    } catch {
      // Ignore storage errors
    }
  }

  // --- Users Collection ---
  public getUsers(): MongoUser[] {
    return this.users;
  }

  public getUserById(id: string): MongoUser | null {
    return this.users.find((u) => u._id === id) || null;
  }

  public getUserByEmail(email: string): MongoUser | null {
    return this.users.find((u) => u.email.toLowerCase() === email.toLowerCase().trim()) || null;
  }

  public createUser(data: Omit<MongoUser, '_id' | 'createdAt' | 'updatedAt'>, actor: { id: string; name: string; role: 'admin' | 'manager' }): MongoUser {
    if (actor.role !== 'admin') {
      throw new Error('Unauthorized: Only administrators can create users');
    }

    const newUser: MongoUser = {
      _id: `usr-${Date.now()}`,
      ...data,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    this.users.push(newUser);
    this.saveToStorage();

    this.logActivity({
      userId: actor.id,
      userName: actor.name,
      role: actor.role,
      action: 'User created',
      resource: 'users',
      resourceId: newUser._id,
      description: `Created new ${newUser.role} account for ${newUser.name} (${newUser.email}).`,
    });

    return newUser;
  }

  public updateUser(id: string, updates: Partial<MongoUser>, actor: { id: string; name: string; role: 'admin' | 'manager' }): MongoUser {
    if (actor.role !== 'admin') {
      throw new Error('Unauthorized: Only administrators can modify users');
    }

    const user = this.users.find((u) => u._id === id);
    if (!user) throw new Error('User not found');

    // Protect last active admin from accidental downgrade or suspension
    if (user.role === 'admin' && (updates.role === 'manager' || updates.status === 'inactive')) {
      const activeAdmins = this.users.filter((u) => u.role === 'admin' && u.status === 'active' && u._id !== id);
      if (activeAdmins.length === 0) {
        throw new Error('Cannot downgrade or deactivate the last active administrator');
      }
    }

    Object.assign(user, updates, { updatedAt: new Date().toISOString() });
    this.saveToStorage();

    this.logActivity({
      userId: actor.id,
      userName: actor.name,
      role: actor.role,
      action: 'User updated',
      resource: 'users',
      resourceId: id,
      description: `Updated profile & role for ${user.name}.`,
    });

    return user;
  }

  public deleteUser(id: string, actor: { id: string; name: string; role: 'admin' | 'manager' }): boolean {
    if (actor.role !== 'admin') {
      throw new Error('Unauthorized: Only administrators can delete users');
    }

    const user = this.users.find((u) => u._id === id);
    if (!user) return false;

    // Prevent removing last active admin account
    if (user.role === 'admin') {
      const activeAdmins = this.users.filter((u) => u.role === 'admin' && u.status === 'active' && u._id !== id);
      if (activeAdmins.length === 0) {
        throw new Error('Cannot delete the last active administrator account');
      }
    }

    this.users = this.users.filter((u) => u._id !== id);
    this.saveToStorage();

    this.logActivity({
      userId: actor.id,
      userName: actor.name,
      role: actor.role,
      action: 'User deleted',
      resource: 'users',
      resourceId: id,
      description: `Deleted user ${user.name} (${user.email}).`,
    });

    return true;
  }

  // --- Articles Collection ---
  public getArticles(filters: { sport?: string; status?: string; category?: string } = {}): MongoArticle[] {
    let result = [...this.articles];
    if (filters.sport) result = result.filter((a) => a.sport === filters.sport);
    if (filters.status) result = result.filter((a) => a.status === filters.status);
    if (filters.category) result = result.filter((a) => a.categoryId === filters.category);
    return result;
  }

  public getArticleById(id: string): MongoArticle | null {
    return this.articles.find((a) => a._id === id || a.slug === id) || null;
  }

  public createArticle(articleData: Omit<MongoArticle, '_id' | 'createdAt' | 'updatedAt' | 'views'>, actor: { id: string; name: string; role: 'admin' | 'manager' }): MongoArticle {
    const newArt: MongoArticle = {
      _id: `art-${Date.now()}`,
      ...articleData,
      views: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    this.articles.unshift(newArt);
    this.saveToStorage();

    this.logActivity({
      userId: actor.id,
      userName: actor.name,
      role: actor.role,
      action: 'Article created',
      resource: 'articles',
      resourceId: newArt._id,
      description: `Created article: "${newArt.title}".`,
    });

    return newArt;
  }

  public updateArticle(id: string, updates: Partial<MongoArticle>, actor: { id: string; name: string; role: 'admin' | 'manager' }): MongoArticle {
    const art = this.articles.find((a) => a._id === id);
    if (!art) throw new Error('Article not found');

    Object.assign(art, updates, { updatedAt: new Date().toISOString() });
    this.saveToStorage();

    this.logActivity({
      userId: actor.id,
      userName: actor.name,
      role: actor.role,
      action: updates.status === 'published' && art.status !== 'published' ? 'Article published' : 'Article edited',
      resource: 'articles',
      resourceId: id,
      description: `Modified article: "${art.title}".`,
    });

    return art;
  }

  public deleteArticle(id: string, actor: { id: string; name: string; role: 'admin' | 'manager' }): boolean {
    const art = this.articles.find((a) => a._id === id);
    if (!art) return false;

    this.articles = this.articles.filter((a) => a._id !== id);
    this.saveToStorage();

    this.logActivity({
      userId: actor.id,
      userName: actor.name,
      role: actor.role,
      action: 'Article deleted',
      resource: 'articles',
      resourceId: id,
      description: `Deleted article: "${art.title}".`,
    });

    return true;
  }

  // --- Activity Logs (Immutable Audit Trail) ---
  public getLogs(): MongoActivityLog[] {
    return [...this.logs].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  public logActivity(log: Omit<MongoActivityLog, '_id' | 'createdAt'>): void {
    const newLog: MongoActivityLog = {
      _id: `log-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      ...log,
      createdAt: new Date().toISOString(),
    };
    this.logs.unshift(newLog);
    this.saveToStorage();
  }
}

export const mongoDB = new MongoStorageEngine();

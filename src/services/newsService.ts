/**
 * CricFot - News Data Service Layer
 *
 * Designed for clean substitution in later phases:
 * - Phase 1: In-memory mock data with async interfaces
 * - Phase 2+: Drop-in replacement for REST API, GraphQL, CMS, or Database
 */

import { MOCK_ARTICLES } from '../data/mockArticles';
import { Article, ArticleFilters, Category, Sport } from '../types';

export class NewsService {
  /**
   * Fetch a list of articles with flexible filtering options
   */
  public static async getArticles(filters: ArticleFilters = {}): Promise<Article[]> {
    // Simulated micro-delay for realistic async behavior (mimics network/db query)
    await new Promise((resolve) => setTimeout(resolve, 30));

    let results = [...MOCK_ARTICLES];

    if (filters.sport) {
      results = results.filter((a) => a.sport === filters.sport);
    }

    if (filters.category) {
      results = results.filter((a) => a.category.toLowerCase() === filters.category!.toLowerCase());
    }

    if (filters.tag) {
      results = results.filter((a) =>
        a.tags.some((t) => t.toLowerCase() === filters.tag!.toLowerCase())
      );
    }

    if (filters.featured !== undefined) {
      results = results.filter((a) => a.featured === filters.featured);
    }

    if (filters.breaking !== undefined) {
      results = results.filter((a) => a.breaking === filters.breaking);
    }

    if (filters.trending !== undefined) {
      results = results.filter((a) => a.trending === filters.trending);
    }

    if (filters.query) {
      const q = filters.query.toLowerCase().trim();
      results = results.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          (a.banglaTitle && a.banglaTitle.includes(q)) ||
          a.tags.some((t) => t.toLowerCase().includes(q)) ||
          a.category.toLowerCase().includes(q)
      );
    }

    // Sort by published date descending
    results.sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

    if (filters.offset) {
      results = results.slice(filters.offset);
    }

    if (filters.limit) {
      results = results.slice(0, filters.limit);
    }

    return results;
  }

  /**
   * Retrieve a single article by its URL slug
   */
  public static async getArticleBySlug(slug: string): Promise<Article | null> {
    await new Promise((resolve) => setTimeout(resolve, 20));
    const article = MOCK_ARTICLES.find((a) => a.slug === slug);
    return article || null;
  }

  /**
   * Retrieve breaking news articles for ticker or alert bar
   */
  public static async getBreakingNews(): Promise<Article[]> {
    return this.getArticles({ breaking: true, limit: 5 });
  }

  /**
   * Retrieve featured stories for hero or lead slots
   */
  public static async getFeaturedArticles(): Promise<Article[]> {
    return this.getArticles({ featured: true, limit: 3 });
  }

  /**
   * Retrieve trending articles for sidebar or popular slots
   */
  public static async getTrendingArticles(): Promise<Article[]> {
    return this.getArticles({ trending: true, limit: 5 });
  }

  /**
   * Retrieve articles strictly filtered by Sport ('cricket' | 'football')
   */
  public static async getArticlesBySport(sport: Sport, limit: number = 6): Promise<Article[]> {
    return this.getArticles({ sport, limit });
  }

  /**
   * List available categories
   */
  public static getCategories(): Category[] {
    return [
      'Bangladesh Cricket',
      'International Cricket',
      'BPL',
      'IPL',
      'ICC',
      'Bangladesh Football',
      'International Football',
      'Premier League',
      'Champions League',
      'Transfer News',
      'Analysis',
    ];
  }
}

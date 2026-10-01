import { MOCK_ARTICLES } from "../data/mockArticles";
export class NewsService {
  /**
   * Fetch a list of articles with flexible filtering options
   */
  static async getArticles(filters = {}) {
    await new Promise((resolve) => setTimeout(resolve, 30));
    let results = [...MOCK_ARTICLES];
    if (filters.sport) {
      results = results.filter((a) => a.sport === filters.sport);
    }
    if (filters.category) {
      results = results.filter((a) => a.category.toLowerCase() === filters.category.toLowerCase());
    }
    if (filters.tag) {
      results = results.filter(
        (a) => a.tags.some((t) => t.toLowerCase() === filters.tag.toLowerCase())
      );
    }
    if (filters.featured !== void 0) {
      results = results.filter((a) => a.featured === filters.featured);
    }
    if (filters.breaking !== void 0) {
      results = results.filter((a) => a.breaking === filters.breaking);
    }
    if (filters.trending !== void 0) {
      results = results.filter((a) => a.trending === filters.trending);
    }
    if (filters.query) {
      const q = filters.query.toLowerCase().trim();
      results = results.filter(
        (a) => a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q) || a.banglaTitle && a.banglaTitle.includes(q) || a.tags.some((t) => t.toLowerCase().includes(q)) || a.category.toLowerCase().includes(q)
      );
    }
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
  static async getArticleBySlug(slug) {
    await new Promise((resolve) => setTimeout(resolve, 20));
    const article = MOCK_ARTICLES.find((a) => a.slug === slug);
    return article || null;
  }
  /**
   * Retrieve breaking news articles for ticker or alert bar
   */
  static async getBreakingNews() {
    return this.getArticles({ breaking: true, limit: 5 });
  }
  /**
   * Retrieve featured stories for hero or lead slots
   */
  static async getFeaturedArticles() {
    return this.getArticles({ featured: true, limit: 3 });
  }
  /**
   * Retrieve trending articles for sidebar or popular slots
   */
  static async getTrendingArticles() {
    return this.getArticles({ trending: true, limit: 5 });
  }
  /**
   * Retrieve articles strictly filtered by Sport ('cricket' | 'football')
   */
  static async getArticlesBySport(sport, limit = 6) {
    return this.getArticles({ sport, limit });
  }
  /**
   * List available categories
   */
  static getCategories() {
    return [
      "Bangladesh Cricket",
      "International Cricket",
      "BPL",
      "IPL",
      "ICC",
      "Bangladesh Football",
      "International Football",
      "Premier League",
      "Champions League",
      "Transfer News",
      "Analysis"
    ];
  }
}

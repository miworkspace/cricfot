import { MOCK_BREAKING_HEADLINES } from "../config/navigation";
import { NewsService } from "./newsService";
const DYNAMIC_BREAKING_UPDATES = [
  {
    title: "\u099F\u09BF-\u099F\u09CB\u09AF\u09BC\u09C7\u09A8\u09CD\u099F\u09BF \u09AC\u09BF\u09B6\u09CD\u09AC\u0995\u09BE\u09AA \u09AA\u09CD\u09B0\u09B8\u09CD\u09A4\u09C1\u09A4\u09BF: \u09AE\u09BF\u09B0\u09AA\u09C1\u09B0\u09C7 \u09A4\u09BF\u09A8 \u09A6\u09BF\u09A8\u09C7\u09B0 \u09AC\u09BF\u09B6\u09C7\u09B7 \u09B8\u09CD\u09AA\u09BF\u09A8 \u0995\u09CD\u09AF\u09BE\u09AE\u09CD\u09AA\u09C7\u09B0 \u0998\u09CB\u09B7\u09A3\u09BE \u09AC\u09BF\u09B8\u09BF\u09AC\u09BF\u09B0",
    slug: "shanto-praises-pacers-tigers-test-campaign",
    category: "\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6 \u0995\u09CD\u09B0\u09BF\u0995\u09C7\u099F"
  },
  {
    title: "\u099A\u09CD\u09AF\u09BE\u09AE\u09CD\u09AA\u09BF\u09AF\u09BC\u09A8\u09CD\u09B8 \u09B2\u09BF\u0997 \u09B0\u09CB\u09AE\u09BE\u099E\u09CD\u099A: \u0995\u09CB\u09AF\u09BC\u09BE\u09B0\u09CD\u099F\u09BE\u09B0 \u09AB\u09BE\u0987\u09A8\u09BE\u09B2\u09C7\u09B0 \u09B9\u09BE\u0987-\u09AD\u09CB\u09B2\u09CD\u099F\u09C7\u099C \u09B2\u09A1\u09BC\u09BE\u0987\u09AF\u09BC\u09C7 \u09AE\u09C1\u0996\u09CB\u09AE\u09C1\u0996\u09BF \u09AC\u09BE\u09B0\u09CD\u09B8\u09C7\u09B2\u09CB\u09A8\u09BE \u0993 \u09AE\u09CD\u09AF\u09BE\u09A8 \u09B8\u09BF\u099F\u09BF",
    slug: "champions-league-showdown-quarter-final-draw",
    category: "\u0986\u09A8\u09CD\u09A4\u09B0\u09CD\u099C\u09BE\u09A4\u09BF\u0995 \u09AB\u09C1\u099F\u09AC\u09B2"
  },
  {
    title: "\u09AC\u09BF\u09AA\u09BF\u098F\u09B2 \u09E8\u09E6\u09E8\u09EC: \u09B8\u09BF\u09B2\u09C7\u099F \u09B8\u09CD\u099F\u09CD\u09B0\u09BE\u0987\u0995\u09BE\u09B0\u09CD\u09B8\u09C7 \u09A8\u09A4\u09C1\u09A8 \u09B8\u09B9\u0995\u09BE\u09B0\u09C0 \u0995\u09CB\u099A \u09B9\u09BF\u09B8\u09C7\u09AC\u09C7 \u09AF\u09CB\u0997 \u09A6\u09BF\u09B2\u09C7\u09A8 \u09AA\u09CD\u09B0\u09BE\u0995\u09CD\u09A4\u09A8 \u099C\u09BE\u09A4\u09C0\u09AF\u09BC \u09A4\u09BE\u09B0\u0995\u09BE",
    slug: "bpl-2026-season-draft-franchise-strategies-local-pacers",
    category: "\u09AC\u09BF\u09AA\u09BF\u098F\u09B2"
  },
  {
    title: "\u09AC\u09BE\u09AB\u09C1\u09AB\u09C7 \u0986\u09AA\u09A1\u09C7\u099F: \u098F\u09B6\u09BF\u09AF\u09BC\u09BE\u09A8 \u0995\u09BE\u09AA \u09AC\u09BE\u099B\u09BE\u0987 \u0995\u09CD\u09AF\u09BE\u09AE\u09CD\u09AA\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u0986\u09B0\u0993 \u09E8 \u099C\u09A8 \u09AA\u09CD\u09B0\u09AC\u09BE\u09B8\u09C0 \u09AB\u09C1\u099F\u09AC\u09B2\u09BE\u09B0\u0995\u09C7 \u0986\u09AE\u09A8\u09CD\u09A4\u09CD\u09B0\u09A3",
    slug: "bangladesh-football-team-26-man-preliminary-camp-asian-cup-qualifiers",
    category: "\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6 \u09AB\u09C1\u099F\u09AC\u09B2"
  },
  {
    title: "\u0986\u0987\u09B8\u09BF\u09B8\u09BF \u099F\u09C7\u09B8\u09CD\u099F \u09B0\u200D\u09CD\u09AF\u09BE\u0999\u09CD\u0995\u09BF\u0982: \u09AC\u09CB\u09B2\u09BF\u0982 \u09AC\u09BF\u09AD\u09BE\u0997\u09C7 \u09E9 \u09A7\u09BE\u09AA \u098F\u0997\u09BF\u09AF\u09BC\u09C7 \u0995\u09CD\u09AF\u09BE\u09B0\u09BF\u09AF\u09BC\u09BE\u09B0 \u09B8\u09C7\u09B0\u09BE \u0985\u09AC\u09B8\u09CD\u09A5\u09BE\u09A8\u09C7 \u09B9\u09BE\u09B8\u09BE\u09A8 \u09AE\u09BE\u09B9\u09AE\u09C1\u09A6",
    slug: "icc-rankings-mehedi-hasan-miraz-top-five",
    category: "\u0986\u0987\u09B8\u09BF\u09B8\u09BF"
  },
  {
    title: "\u09B2\u09BE\u0987\u09AD \u09B8\u09CD\u0995\u09CB\u09B0 \u0986\u09AA\u09A1\u09C7\u099F: \u09AE\u09BF\u09B0\u09AA\u09C1\u09B0 \u09AA\u09CD\u09B0\u09B8\u09CD\u09A4\u09C1\u09A4\u09BF \u09AE\u09CD\u09AF\u09BE\u099A\u09C7 \u09B2\u09BE\u09B2 \u09A6\u09B2 \u09E9 \u0989\u0987\u0995\u09C7\u099F\u09C7 \u09B8\u0982\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09B2 \u09E7\u09EC\u09EB \u09B0\u09BE\u09A8",
    slug: "shanto-praises-pacers-tigers-test-campaign",
    category: "\u09B2\u09BE\u0987\u09AD \u09B8\u09CD\u0995\u09CB\u09B0"
  },
  {
    title: "\u099F\u09CD\u09B0\u09BE\u09A8\u09CD\u09B8\u09AB\u09BE\u09B0 \u09B9\u09BE\u09AC: \u09B0\u09BF\u09AF\u09BC\u09BE\u09B2 \u09AE\u09BE\u09A6\u09CD\u09B0\u09BF\u09A6\u09C7 \u09E8 \u09AC\u099B\u09B0\u09C7\u09B0 \u099A\u09C1\u0995\u09CD\u09A4\u09BF \u09AC\u09C3\u09A6\u09CD\u09A7\u09BF \u0995\u09B0\u09B2\u09C7\u09A8 \u0995\u09BE\u09B0\u09CD\u09B2\u09CB \u0986\u09A8\u099A\u09C7\u09B2\u09A4\u09CD\u09A4\u09BF",
    slug: "tactical-analysis-premier-league-midfields-countering-high-press",
    category: "\u0987\u0989\u09B0\u09CB\u09AA\u09BF\u09AF\u09BC\u09BE\u09A8 \u09AB\u09C1\u099F\u09AC\u09B2"
  }
];
class BreakingNewsManager {
  headlines = [...MOCK_BREAKING_HEADLINES];
  listeners = /* @__PURE__ */ new Set();
  dynamicIndex = 0;
  timer = null;
  isAutoRealtimeEnabled = true;
  constructor() {
    this.hydrateFromService();
    this.startRealtimeSimulation();
  }
  async hydrateFromService() {
    try {
      const articles = await NewsService.getArticles({ breaking: true, limit: 6 });
      if (articles && articles.length > 0) {
        const mappedFromArticles = articles.map((art) => ({
          id: `news-${art.id}`,
          title: art.banglaTitle || art.title,
          slug: art.slug,
          category: art.category,
          publishedAt: "\u098F\u0987\u09AE\u09BE\u09A4\u09CD\u09B0"
        }));
        const existingSlugs = new Set(this.headlines.map((h) => h.slug));
        const newOnes = mappedFromArticles.filter((m) => !existingSlugs.has(m.slug));
        if (newOnes.length > 0) {
          this.headlines = [...newOnes, ...this.headlines];
          this.notify();
        }
      }
    } catch {
    }
  }
  /**
   * Start simulated real-time stream of incoming breaking news
   */
  startRealtimeSimulation() {
    if (typeof window === "undefined") return;
    this.timer = window.setInterval(() => {
      if (!this.isAutoRealtimeEnabled) return;
      this.pushRealtimeHeadline();
    }, 28e3);
  }
  /**
   * Fetch current list of headlines asynchronously
   */
  async getLatestHeadlines() {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return [...this.headlines];
  }
  /**
   * Push a fresh real-time breaking news update into the stream
   */
  pushRealtimeHeadline() {
    const template = DYNAMIC_BREAKING_UPDATES[this.dynamicIndex % DYNAMIC_BREAKING_UPDATES.length];
    this.dynamicIndex += 1;
    const newItem = {
      id: `realtime-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      title: template.title,
      slug: template.slug,
      category: template.category,
      publishedAt: "\u098F\u0987\u09AE\u09BE\u09A4\u09CD\u09B0"
    };
    this.headlines = [newItem, ...this.headlines.slice(0, 14)];
    this.notify(newItem);
    return newItem;
  }
  /**
   * Manual refresh trigger from UI
   */
  async refreshHeadlines() {
    await new Promise((resolve) => setTimeout(resolve, 400));
    const newItem = this.pushRealtimeHeadline();
    return this.headlines;
  }
  /**
   * Toggle automatic background real-time updates
   */
  setRealtimeEnabled(enabled) {
    this.isAutoRealtimeEnabled = enabled;
  }
  isRealtimeActive() {
    return this.isAutoRealtimeEnabled;
  }
  /**
   * Subscribe to real-time breaking news changes
   */
  subscribe(listener) {
    this.listeners.add(listener);
    listener([...this.headlines]);
    return () => {
      this.listeners.delete(listener);
    };
  }
  notify(newHeadline) {
    const snapshot = [...this.headlines];
    this.listeners.forEach((cb) => {
      try {
        cb(snapshot, newHeadline);
      } catch (err) {
        console.error("Error in breaking news listener:", err);
      }
    });
  }
  destroy() {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.listeners.clear();
  }
}
export const breakingNewsService = new BreakingNewsManager();

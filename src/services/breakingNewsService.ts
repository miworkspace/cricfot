import { BreakingNewsItem, MOCK_BREAKING_HEADLINES } from '../config/navigation';
import { NewsService } from './newsService';

// Real-time pool of dynamic sports alerts to cycle into the live ticker feed
const DYNAMIC_BREAKING_UPDATES: Omit<BreakingNewsItem, 'id' | 'publishedAt'>[] = [
  {
    title: 'টি-টোয়েন্টি বিশ্বকাপ প্রস্তুতি: মিরপুরে তিন দিনের বিশেষ স্পিন ক্যাম্পের ঘোষণা বিসিবির',
    slug: 'shanto-praises-pacers-tigers-test-campaign',
    category: 'বাংলাদেশ ক্রিকেট',
  },
  {
    title: 'চ্যাম্পিয়ন্স লিগ রোমাঞ্চ: কোয়ার্টার ফাইনালের হাই-ভোল্টেজ লড়াইয়ে মুখোমুখি বার্সেলোনা ও ম্যান সিটি',
    slug: 'champions-league-showdown-quarter-final-draw',
    category: 'আন্তর্জাতিক ফুটবল',
  },
  {
    title: 'বিপিএল ২০২৬: সিলেট স্ট্রাইকার্সে নতুন সহকারী কোচ হিসেবে যোগ দিলেন প্রাক্তন জাতীয় তারকা',
    slug: 'bpl-2026-season-draft-franchise-strategies-local-pacers',
    category: 'বিপিএল',
  },
  {
    title: 'বাফুফে আপডেট: এশিয়ান কাপ বাছাই ক্যাম্পের জন্য আরও ২ জন প্রবাসী ফুটবলারকে আমন্ত্রণ',
    slug: 'bangladesh-football-team-26-man-preliminary-camp-asian-cup-qualifiers',
    category: 'বাংলাদেশ ফুটবল',
  },
  {
    title: 'আইসিসি টেস্ট র‍্যাঙ্কিং: বোলিং বিভাগে ৩ ধাপ এগিয়ে ক্যারিয়ার সেরা অবস্থানে হাসান মাহমুদ',
    slug: 'icc-rankings-mehedi-hasan-miraz-top-five',
    category: 'আইসিসি',
  },
  {
    title: 'লাইভ স্কোর আপডেট: মিরপুর প্রস্তুতি ম্যাচে লাল দল ৩ উইকেটে সংগ্রহ করল ১৬৫ রান',
    slug: 'shanto-praises-pacers-tigers-test-campaign',
    category: 'লাইভ স্কোর',
  },
  {
    title: 'ট্রান্সফার হাব: রিয়াল মাদ্রিদে ২ বছরের চুক্তি বৃদ্ধি করলেন কার্লো আনচেলত্তি',
    slug: 'tactical-analysis-premier-league-midfields-countering-high-press',
    category: 'ইউরোপিয়ান ফুটবল',
  },
];

type BreakingNewsListener = (headlines: BreakingNewsItem[], newHeadline?: BreakingNewsItem) => void;

class BreakingNewsManager {
  private headlines: BreakingNewsItem[] = [...MOCK_BREAKING_HEADLINES];
  private listeners: Set<BreakingNewsListener> = new Set();
  private dynamicIndex = 0;
  private timer: number | null = null;
  private isAutoRealtimeEnabled = true;

  constructor() {
    // Initial async hydration from NewsService
    this.hydrateFromService();
    // Start automated real-time headline simulation every 25 seconds
    this.startRealtimeSimulation();
  }

  private async hydrateFromService() {
    try {
      const articles = await NewsService.getArticles({ breaking: true, limit: 6 });
      if (articles && articles.length > 0) {
        const mappedFromArticles: BreakingNewsItem[] = articles.map((art) => ({
          id: `news-${art.id}`,
          title: art.banglaTitle || art.title,
          slug: art.slug,
          category: art.category,
          publishedAt: 'এইমাত্র',
        }));

        // Merge without duplicates
        const existingSlugs = new Set(this.headlines.map((h) => h.slug));
        const newOnes = mappedFromArticles.filter((m) => !existingSlugs.has(m.slug));
        if (newOnes.length > 0) {
          this.headlines = [...newOnes, ...this.headlines];
          this.notify();
        }
      }
    } catch {
      // Fallback stays with MOCK_BREAKING_HEADLINES
    }
  }

  /**
   * Start simulated real-time stream of incoming breaking news
   */
  private startRealtimeSimulation() {
    if (typeof window === 'undefined') return;

    this.timer = window.setInterval(() => {
      if (!this.isAutoRealtimeEnabled) return;
      this.pushRealtimeHeadline();
    }, 28000); // Trigger a live headline every 28 seconds
  }

  /**
   * Fetch current list of headlines asynchronously
   */
  public async getLatestHeadlines(): Promise<BreakingNewsItem[]> {
    // Micro network latency simulation
    await new Promise((resolve) => setTimeout(resolve, 200));
    return [...this.headlines];
  }

  /**
   * Push a fresh real-time breaking news update into the stream
   */
  public pushRealtimeHeadline(): BreakingNewsItem {
    const template = DYNAMIC_BREAKING_UPDATES[this.dynamicIndex % DYNAMIC_BREAKING_UPDATES.length];
    this.dynamicIndex += 1;

    const newItem: BreakingNewsItem = {
      id: `realtime-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      title: template.title,
      slug: template.slug,
      category: template.category,
      publishedAt: 'এইমাত্র',
    };

    // Prepend to headlines
    this.headlines = [newItem, ...this.headlines.slice(0, 14)];
    this.notify(newItem);
    return newItem;
  }

  /**
   * Manual refresh trigger from UI
   */
  public async refreshHeadlines(): Promise<BreakingNewsItem[]> {
    // Simulate real-time wire check
    await new Promise((resolve) => setTimeout(resolve, 400));
    const newItem = this.pushRealtimeHeadline();
    return this.headlines;
  }

  /**
   * Toggle automatic background real-time updates
   */
  public setRealtimeEnabled(enabled: boolean) {
    this.isAutoRealtimeEnabled = enabled;
  }

  public isRealtimeActive(): boolean {
    return this.isAutoRealtimeEnabled;
  }

  /**
   * Subscribe to real-time breaking news changes
   */
  public subscribe(listener: BreakingNewsListener): () => void {
    this.listeners.add(listener);
    // Initial call
    listener([...this.headlines]);

    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify(newHeadline?: BreakingNewsItem) {
    const snapshot = [...this.headlines];
    this.listeners.forEach((cb) => {
      try {
        cb(snapshot, newHeadline);
      } catch (err) {
        console.error('Error in breaking news listener:', err);
      }
    });
  }

  public destroy() {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.listeners.clear();
  }
}

export const breakingNewsService = new BreakingNewsManager();

'use client';
import { useEffect, useState } from "react";
import { Container } from "../components/common/Container";
import { NewsCard } from "../components/news/NewsCard";
import { PlaceholderNotice } from "../components/common/PlaceholderNotice";
import { NewsService } from "../services/newsService";
import { GoogleAdSlot } from "../components/ads/GoogleAdSlot";
const FOOTBALL_CATEGORIES = [
  "All",
  "Bangladesh Football",
  "Premier League",
  "Champions League",
  "Transfer News",
  "Analysis"
];
export const FootballPage = () => {
  const [articles, setArticles] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let isMounted = true;
    async function fetchFootball() {
      setLoading(true);
      const filters = {
        sport: "football",
        category: activeCategory === "All" ? void 0 : activeCategory
      };
      const data = await NewsService.getArticles(filters);
      if (isMounted) {
        setArticles(data);
        setLoading(false);
      }
    }
    fetchFootball();
    return () => {
      isMounted = false;
    };
  }, [activeCategory]);
  return <div className="py-6">
      <Container size="wide">
        {
    /* Editorial Masthead for Football */
  }
        <div className="bg-blue-950 text-white p-6 sm:p-8 mb-6 border-b-4 border-blue-500">
          <div className="max-w-2xl">
            <span className="text-blue-300 text-xs font-bold uppercase tracking-widest">
              Sports Hub • ফুটবল
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold font-serif-headline tracking-tight mt-1 mb-2">
              Football News & Tactical Dispatch
            </h1>
            <p className="text-sm text-blue-100/90 leading-relaxed">
              Comprehensive tracking of Bangladesh national team, domestic league battles,
              Premier League tactical evolutions, and European Champions League drama.
            </p>
          </div>
        </div>

        {
    /* Category Pills Filter */
  }
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 border-b border-neutral-200 scrollbar-none">
          {FOOTBALL_CATEGORIES.map((cat) => <button
    key={cat}
    onClick={() => setActiveCategory(cat)}
    className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-xs whitespace-nowrap transition-colors ${activeCategory === cat ? "bg-blue-700 text-white shadow-xs" : "bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-300"}`}
  >
              {cat}
            </button>)}
        </div>

        {
    /* Commercial Leaderboard Ad Slot */
  }
        <GoogleAdSlot
    format="leaderboard"
    slotId="ca-pub-cricfot-football-leaderboard-403"
    className="my-5"
  />

        {
    /* News Grid */
  }
        <section aria-label="Football Articles">
          {loading ? <div className="py-12 text-center text-sm text-neutral-500">
              Loading football news...
            </div> : articles.length > 0 ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((art) => <NewsCard key={art.id} article={art} variant="standard" showSport={false} />)}
            </div> : <div className="p-8 text-center bg-white border border-neutral-200">
              <p className="text-sm text-neutral-600">
                No articles found under "{activeCategory}" at the moment.
              </p>
            </div>}
        </section>

        {
    /* Upcoming Football Features Slot */
  }
        <div className="mt-12 pt-8 border-t border-neutral-200">
          <PlaceholderNotice
    title="Live Football Match Center & Lineups"
    description="Phase 2 will integrate official football fixture feeds, live minute-by-minute updates, and verified standings."
    phaseNote="No fake match clocks in CricFot Foundation."
    badge="Football Live Match Center (Phase 2)"
  />
        </div>
      </Container>
    </div>;
};

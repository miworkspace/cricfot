import React, { useEffect, useState } from 'react';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { NewsCard } from '../components/news/NewsCard';
import { PlaceholderNotice } from '../components/common/PlaceholderNotice';
import { NewsService } from '../services/newsService';
import { Article } from '../types';
import { GoogleAdSlot } from '../components/ads/GoogleAdSlot';

const CRICKET_CATEGORIES = [
  'All',
  'Bangladesh Cricket',
  'BPL',
  'ICC',
  'IPL',
  'International Cricket',
];

export const CricketPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function fetchCricket() {
      setLoading(true);
      const filters = {
        sport: 'cricket' as const,
        category: activeCategory === 'All' ? undefined : activeCategory,
      };
      const data = await NewsService.getArticles(filters);
      if (isMounted) {
        setArticles(data);
        setLoading(false);
      }
    }

    fetchCricket();
    return () => {
      isMounted = false;
    };
  }, [activeCategory]);

  return (
    <div className="py-6">
      <Container size="wide">
        {/* Editorial Masthead for Cricket */}
        <div className="bg-emerald-900 text-white p-6 sm:p-8 mb-6 border-b-4 border-emerald-500">
          <div className="max-w-2xl">
            <span className="text-emerald-300 text-xs font-bold uppercase tracking-widest">
              Sports Hub • ক্রিকেট
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold font-serif-headline tracking-tight mt-1 mb-2">
              Cricket News & Coverage
            </h1>
            <p className="text-sm text-emerald-100/90 leading-relaxed">
              In-depth match reporting, domestic league drafts, BCB policy dispatches, and
              exclusive locker-room analysis from Mirpur to overseas tours.
            </p>
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 border-b border-neutral-200 scrollbar-none">
          {CRICKET_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-xs whitespace-nowrap transition-colors ${
                activeCategory === cat
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Commercial Leaderboard Ad Slot */}
        <GoogleAdSlot
          format="leaderboard"
          slotId="ca-pub-cricfot-cricket-leaderboard-302"
          className="my-5"
        />

        {/* News Grid */}
        <section aria-label="Cricket Articles">
          {loading ? (
            <div className="py-12 text-center text-sm text-neutral-500">
              Loading cricket dispatches...
            </div>
          ) : articles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((art) => (
                <NewsCard key={art.id} article={art} variant="standard" showSport={false} />
              ))}
            </div>
          ) : (
            <div className="p-8 text-center bg-white border border-neutral-200">
              <p className="text-sm text-neutral-600">
                No articles found under "{activeCategory}" at the moment.
              </p>
            </div>
          )}
        </section>

        {/* Upcoming Cricket Features Slot */}
        <div className="mt-12 pt-8 border-t border-neutral-200">
          <PlaceholderNotice
            title="Live Cricket Scorecard & Ball-by-Ball Commentary"
            description="Phase 2 will integrate official live score APIs with instant fall-of-wicket alerts and wagon wheels."
            phaseNote="No fake scoreboards in CricFot Foundation."
            badge="Cricket Live Engine (Phase 2)"
          />
        </div>
      </Container>
    </div>
  );
};

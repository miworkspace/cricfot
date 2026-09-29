import React from 'react';
import { Article, Sport } from '../../types';
import { SectionHeader } from '../common/SectionHeader';
import { Link } from '../../router/Link';
import { Clock, Trophy, Shield, ChevronRight } from 'lucide-react';
import { CategoryBadge } from '../sports/CategoryBadge';

interface SportNewsSectionProps {
  sport: Sport;
  title: string;
  subtitle?: string;
  viewAllHref: string;
  viewAllText: string;
  featured: Article;
  articles: Article[];
  headlines: string[];
  className?: string;
}

export const SportNewsSection: React.FC<SportNewsSectionProps> = ({
  sport,
  title,
  subtitle,
  viewAllHref,
  viewAllText,
  featured,
  articles,
  headlines,
  className = '',
}) => {
  const isCricket = sport === 'cricket';

  return (
    <section className={`py-6 sm:py-8 ${className}`}>
      <SectionHeader
        title={title}
        subtitle={subtitle}
        viewAllHref={viewAllHref}
        viewAllText={viewAllText}
        variant={isCricket ? 'cricket' : 'football'}
        icon={
          isCricket ? (
            <Trophy className="w-5 h-5 text-emerald-600" />
          ) : (
            <Shield className="w-5 h-5 text-blue-600" />
          )
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
        {/* Left Col (7/12 on Desktop): 1 Large Featured Story */}
        <div className="lg:col-span-7">
          <article className="group bg-white border border-neutral-200 rounded-xs overflow-hidden shadow-2xs hover:shadow-xs transition-all h-full flex flex-col justify-between">
            <div>
              <div className="relative aspect-16/10 w-full overflow-hidden bg-neutral-900">
                <img
                  src={featured.image.url}
                  alt={featured.image.alt || featured.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 z-10">
                  <CategoryBadge category={featured.category} />
                </div>
              </div>

              <div className="p-4 sm:p-5">
                <div className="flex items-center gap-1.5 text-xs text-neutral-500 mb-2">
                  <Clock className="w-3.5 h-3.5 text-neutral-400" />
                  <span>৩০ মিনিট আগে</span>
                  <span className="text-neutral-300">•</span>
                  <span>{featured.author.banglaName || featured.author.name}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-serif-headline text-neutral-950 leading-snug mb-2 group-hover:text-red-700 transition-colors">
                  <Link href={`/news/${featured.slug}`}>
                    {featured.banglaTitle || featured.title}
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed line-clamp-3">
                  {featured.excerpt}
                </p>
              </div>
            </div>

            <div className="px-4 sm:px-5 pb-4 pt-1 border-t border-neutral-100 flex items-center justify-between text-xs">
              <span className="text-neutral-500">পড়ার সময়: ৪ মিনিট</span>
              <Link
                href={`/news/${featured.slug}`}
                className={`font-bold inline-flex items-center gap-1 hover:underline ${
                  isCricket ? 'text-emerald-700' : 'text-blue-700'
                }`}
              >
                বিস্তারিত পড়ুন <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        </div>

        {/* Right Col (5/12 on Desktop): 3 Smaller Stories + Quick Headline Ticker */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          {/* Sub-articles grid */}
          <div className="space-y-3">
            {articles.slice(0, 3).map((article) => (
              <article
                key={article.id}
                className="group bg-white border border-neutral-200/90 rounded-xs p-3 flex gap-3 hover:shadow-2xs transition-all"
              >
                <div className="w-20 h-16 sm:w-24 sm:h-18 shrink-0 overflow-hidden rounded-xs bg-neutral-900 relative">
                  <img
                    src={article.image.url}
                    alt={article.image.alt || article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-[10px] text-neutral-500 mb-0.5">
                      <span className="font-semibold text-neutral-700">
                        {article.category}
                      </span>
                      <span>•</span>
                      <span>১ ঘণ্টা আগে</span>
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold font-serif-headline text-neutral-900 leading-snug line-clamp-2 group-hover:text-red-700 transition-colors">
                      <Link href={`/news/${article.slug}`}>
                        {article.banglaTitle || article.title}
                      </Link>
                    </h4>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Quick Headlines Ticker Box */}
          {headlines.length > 0 && (
            <div className="bg-neutral-50 border border-neutral-200 rounded-xs p-3 sm:p-3.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-800 pb-2 mb-2 border-b border-neutral-200">
                <span
                  className={`w-2 h-2 rounded-full ${
                    isCricket ? 'bg-emerald-600' : 'bg-blue-600'
                  }`}
                />
                <span>আরও গুরুত্বপূর্ণ শিরোনাম</span>
              </div>
              <ul className="space-y-2">
                {headlines.map((headline, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs font-sans">
                    <ChevronRight
                      className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                        isCricket ? 'text-emerald-600' : 'text-blue-600'
                      }`}
                    />
                    <Link
                      href={viewAllHref}
                      className="text-neutral-700 hover:text-neutral-950 hover:underline leading-relaxed line-clamp-1"
                    >
                      {headline}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

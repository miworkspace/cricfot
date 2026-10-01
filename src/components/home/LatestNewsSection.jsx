import { SectionHeader } from "../common/SectionHeader";
import { CompactNewsCard } from "../news/CompactNewsCard";
import { Link } from "../../router/Link";
import { Clock, Newspaper, ArrowRight, Flame } from "lucide-react";
import { CategoryBadge } from "../sports/CategoryBadge";
import { SportBadge } from "../sports/SportBadge";
export const LatestNewsSection = ({
  articles,
  className = ""
}) => {
  const primaryList = articles.slice(0, 4);
  const secondaryList = articles.slice(4, 8);
  return <section className={`py-6 sm:py-8 ${className}`} id="latest-news-section">
      <SectionHeader
    title="সর্বশেষ সংবাদ"
    subtitle="ক্রিকেট ও ফুটবল জগতের তাজা খবর ও মুহূর্তের আপডেট"
    viewAllHref="/search"
    viewAllText="সব সংবাদ →"
    icon={<Newspaper className="w-5 h-5 text-neutral-800" />}
    badge="তাজা আপডেট"
  />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
        {
    /* Main Feed: 2-Column Grid of Informative Cards (8 cols on desktop) */
  }
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {primaryList.map((article) => <article
    key={article.id}
    className="group bg-white border border-neutral-200 rounded-xs overflow-hidden shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between"
  >
              <div>
                <div className="relative aspect-16/10 w-full overflow-hidden bg-neutral-900">
                  <img
    src={article.image.url}
    alt={article.image.alt || article.title}
    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-400"
    loading="lazy"
  />
                  <div className="absolute top-2 left-2 flex items-center gap-1">
                    <SportBadge sport={article.sport} size="sm" showIcon={false} />
                  </div>
                </div>

                <div className="p-3.5 sm:p-4">
                  <div className="flex items-center gap-1.5 text-[11px] text-neutral-500 mb-1.5">
                    <CategoryBadge category={article.category} />
                    <span>•</span>
                    <span className="inline-flex items-center gap-0.5">
                      <Clock className="w-3 h-3 text-neutral-400" />
                      ২০ মিনিট আগে
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold font-serif-headline text-neutral-950 leading-snug mb-1.5 group-hover:text-red-700 transition-colors">
                    <Link href={`/news/${article.slug}`}>
                      {article.banglaTitle || article.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed font-sans">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-3.5 sm:px-4 pb-3 pt-1 border-t border-neutral-100 flex items-center justify-between text-[11px]">
                <span className="text-neutral-500">
                  প্রতিবেদক: {article.author.banglaName || article.author.name}
                </span>
                <span className="text-red-600 font-bold group-hover:underline">
                  পড়ুন →
                </span>
              </div>
            </article>)}
        </div>

        {
    /* Sidebar News Stream (4 cols on desktop) */
  }
        <div className="lg:col-span-4 bg-white border border-neutral-200 rounded-xs p-3 sm:p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-neutral-100">
              <div className="flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-amber-600" />
                <span className="text-xs font-bold text-neutral-900 font-sans">
                  মুহূর্তের শিরোনাম
                </span>
              </div>
              <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.2 rounded-2xs">
                লাইভ ফিড
              </span>
            </div>

            <div className="divide-y divide-neutral-100">
              {secondaryList.map((article, idx) => <CompactNewsCard
    key={article.id}
    article={article}
    timeAgo={`${(idx + 2) * 15} \u09AE\u09BF\u09A8\u09BF\u099F \u0986\u0997\u09C7`}
    showThumbnail={true}
  />)}
            </div>
          </div>

          <div className="pt-3 mt-3 border-t border-neutral-100">
            <Link
    href="/search"
    className="w-full py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-bold rounded-xs flex items-center justify-center gap-1 transition-colors"
  >
              আরও সর্বশেষ সংবাদ দেখুন <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>;
};

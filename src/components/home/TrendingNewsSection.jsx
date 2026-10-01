import { SectionHeader } from "../common/SectionHeader";
import { TrendingItem } from "../news/TrendingItem";
import { Flame } from "lucide-react";
import { HOMEPAGE_TRENDING_ARTICLES } from "../../data/homepage";
export const TrendingNewsSection = ({
  items = HOMEPAGE_TRENDING_ARTICLES,
  className = ""
}) => {
  return <section className={`py-6 sm:py-8 ${className}`} id="trending-news-section">
      <SectionHeader
    title="ট্রেন্ডিং"
    subtitle="পাঠকদের সবচেয়ে বেশি পঠিত ও আলোচিত শীর্ষ সংবাদসমূহ"
    icon={<Flame className="w-5 h-5 text-red-600" />}
    badge="শীর্ষ ৫"
  />

      <div className="bg-white border border-neutral-200 rounded-xs p-4 sm:p-5 shadow-2xs">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
          {items.map((item) => <TrendingItem
    key={item.id}
    rank={item.rank}
    id={item.id}
    title={item.title}
    slug={item.slug}
    category={item.category}
    publishedTime={item.publishedTime}
    sport={item.sport}
  />)}
        </div>
      </div>
    </section>;
};

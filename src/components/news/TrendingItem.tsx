import React from 'react';
import { Link } from '../../router/Link';
import { Clock } from 'lucide-react';

interface TrendingItemProps {
  rank: string;
  id: string;
  title: string;
  slug: string;
  category: string;
  publishedTime: string;
  sport: 'cricket' | 'football';
  className?: string;
}

export const TrendingItem: React.FC<TrendingItemProps> = ({
  rank,
  title,
  slug,
  category,
  publishedTime,
  sport,
  className = '',
}) => {
  return (
    <article
      className={`group flex items-start gap-3.5 py-3 border-b border-neutral-100 last:border-b-0 hover:bg-neutral-50/70 p-2 rounded-xs transition-colors ${className}`}
    >
      {/* Ranking number with distinct typography */}
      <span className="text-2xl sm:text-3xl font-black font-serif-headline text-neutral-300 group-hover:text-red-600 transition-colors shrink-0 w-8 text-center leading-none mt-0.5">
        {rank}
      </span>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 text-[11px] mb-1">
          <span
            className={`font-bold px-1.5 py-0.2 rounded-2xs text-[10px] ${
              sport === 'cricket'
                ? 'bg-emerald-50 text-emerald-800'
                : 'bg-blue-50 text-blue-800'
            }`}
          >
            {category}
          </span>
          <span className="text-neutral-300">•</span>
          <span className="inline-flex items-center gap-0.5 text-neutral-500">
            <Clock className="w-3 h-3 text-neutral-400" />
            {publishedTime}
          </span>
        </div>

        <h4 className="text-xs sm:text-sm font-bold font-serif-headline text-neutral-900 leading-snug line-clamp-2 group-hover:text-red-700 transition-colors">
          <Link href={`/news/${slug}`}>{title}</Link>
        </h4>
      </div>
    </article>
  );
};

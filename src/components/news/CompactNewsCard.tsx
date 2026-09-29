import React from 'react';
import { Article } from '../../types';
import { Link } from '../../router/Link';
import { Clock } from 'lucide-react';
import { SportBadge } from '../sports/SportBadge';

interface CompactNewsCardProps {
  article: Article;
  showThumbnail?: boolean;
  timeAgo?: string;
  className?: string;
}

export const CompactNewsCard: React.FC<CompactNewsCardProps> = ({
  article,
  showThumbnail = true,
  timeAgo = '৩৫ মিনিট আগে',
  className = '',
}) => {
  return (
    <article
      className={`group flex items-start gap-3 py-3 border-b border-neutral-100 last:border-b-0 hover:bg-neutral-50/60 transition-colors rounded-xs px-1.5 ${className}`}
    >
      {showThumbnail && (
        <div className="w-20 h-16 sm:w-24 sm:h-18 shrink-0 overflow-hidden rounded-xs bg-neutral-900 relative">
          <img
            src={article.image.url}
            alt={article.image.alt || article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute top-1 left-1">
            <SportBadge sport={article.sport} size="sm" showIcon={false} />
          </div>
        </div>
      )}

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 text-[11px] mb-1">
          <span className="font-semibold text-neutral-700">{article.category}</span>
          <span className="text-neutral-300">•</span>
          <span className="inline-flex items-center gap-0.5 text-neutral-500">
            <Clock className="w-3 h-3 text-neutral-400" />
            {timeAgo}
          </span>
        </div>

        <h4 className="text-xs sm:text-sm font-bold font-serif-headline text-neutral-900 leading-snug line-clamp-2 group-hover:text-red-700 transition-colors">
          <Link href={`/news/${article.slug}`}>{article.banglaTitle || article.title}</Link>
        </h4>

        {article.excerpt && (
          <p className="text-[11px] text-neutral-500 line-clamp-1 mt-1 font-sans">
            {article.excerpt}
          </p>
        )}
      </div>
    </article>
  );
};

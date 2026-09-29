import React from 'react';
import { Article } from '../../types';
import { Link } from '../../router/Link';
import { SportBadge } from '../sports/SportBadge';
import { CategoryBadge } from '../sports/CategoryBadge';
import { Clock } from 'lucide-react';

interface NewsCardProps {
  article: Article;
  variant?: 'featured' | 'standard' | 'horizontal' | 'compact';
  showSport?: boolean;
  className?: string;
}

export const NewsCard: React.FC<NewsCardProps> = ({
  article,
  variant = 'standard',
  showSport = true,
  className = '',
}) => {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  if (variant === 'featured') {
    return (
      <article
        className={`group bg-white border border-neutral-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col lg:flex-row ${className}`}
      >
        <div className="relative lg:w-3/5 overflow-hidden bg-neutral-900 aspect-16/10 lg:aspect-auto">
          <img
            src={article.image.url}
            alt={article.image.alt}
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
            loading="eager"
          />
          {article.breaking && (
            <span className="absolute top-3 left-3 bg-red-600 text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1">
              Breaking
            </span>
          )}
        </div>

        <div className="lg:w-2/5 p-5 sm:p-6 lg:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <CategoryBadge category={article.category} />
              {showSport && <SportBadge sport={article.sport} size="sm" />}
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-serif-headline text-neutral-900 leading-tight mb-3 group-hover:text-red-700 transition-colors">
              <Link href={`/news/${article.slug}`}>{article.title}</Link>
            </h3>

            {article.banglaTitle && (
              <p className="text-sm font-medium text-neutral-600 mb-3 line-clamp-1">
                {article.banglaTitle}
              </p>
            )}

            <p className="text-sm text-neutral-600 leading-relaxed line-clamp-3 mb-4">
              {article.excerpt}
            </p>
          </div>

          <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
            <span className="font-semibold text-neutral-800">{article.author.name}</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{formattedDate}</span>
              {article.readTimeMinutes && <span>• {article.readTimeMinutes} min read</span>}
            </div>
          </div>
        </div>
      </article>
    );
  }

  if (variant === 'horizontal') {
    return (
      <article
        className={`group bg-white border border-neutral-200 p-3 sm:p-4 flex gap-4 hover:border-neutral-300 transition-colors ${className}`}
      >
        <div className="relative w-28 sm:w-36 shrink-0 aspect-4/3 overflow-hidden bg-neutral-100">
          <img
            src={article.image.url}
            alt={article.image.alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col justify-between min-w-0 flex-1">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <CategoryBadge category={article.category} />
              {showSport && <SportBadge sport={article.sport} size="sm" />}
            </div>
            <h4 className="text-sm sm:text-base font-bold text-neutral-900 leading-snug line-clamp-2 group-hover:text-red-700 transition-colors">
              <Link href={`/news/${article.slug}`}>{article.title}</Link>
            </h4>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-neutral-500 mt-2">
            <span>{article.author.name}</span>
            <span>•</span>
            <span>{formattedDate}</span>
          </div>
        </div>
      </article>
    );
  }

  if (variant === 'compact') {
    return (
      <article className={`group py-2.5 border-b border-neutral-200 last:border-0 ${className}`}>
        <div className="flex items-center gap-2 mb-1">
          <CategoryBadge category={article.category} />
          {article.trending && (
            <span className="text-[10px] uppercase font-bold text-amber-600 bg-amber-50 px-1.5 py-0.2 border border-amber-200">
              Trending
            </span>
          )}
        </div>
        <h4 className="text-sm font-semibold text-neutral-900 leading-snug group-hover:text-red-700 transition-colors">
          <Link href={`/news/${article.slug}`}>{article.title}</Link>
        </h4>
        <div className="flex items-center gap-2 text-[11px] text-neutral-500 mt-1">
          <span>{formattedDate}</span>
        </div>
      </article>
    );
  }

  // Standard vertical card
  return (
    <article
      className={`group bg-white border border-neutral-200 overflow-hidden flex flex-col hover:border-neutral-400 transition-colors ${className}`}
    >
      <div className="relative aspect-16/10 overflow-hidden bg-neutral-100">
        <img
          src={article.image.url}
          alt={article.image.alt}
          className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-300"
          loading="lazy"
        />
        {article.breaking && (
          <span className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5">
            Breaking
          </span>
        )}
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <CategoryBadge category={article.category} />
            {showSport && <SportBadge sport={article.sport} size="sm" />}
          </div>

          <h3 className="text-base sm:text-lg font-bold text-neutral-900 leading-snug mb-2 group-hover:text-red-700 transition-colors line-clamp-2">
            <Link href={`/news/${article.slug}`}>{article.title}</Link>
          </h3>

          <p className="text-xs sm:text-sm text-neutral-600 line-clamp-2 mb-3">
            {article.excerpt}
          </p>
        </div>

        <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
          <span className="truncate max-w-[130px] font-medium">{article.author.name}</span>
          <span className="shrink-0">{formattedDate}</span>
        </div>
      </div>
    </article>
  );
};

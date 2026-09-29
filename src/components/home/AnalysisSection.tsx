import React from 'react';
import { Article } from '../../types';
import { SectionHeader } from '../common/SectionHeader';
import { Link } from '../../router/Link';
import { BookOpen, Clock, User, ChevronRight } from 'lucide-react';
import { toBanglaNumber } from '../../utils/banglaUtils';

interface AnalysisSectionProps {
  articles: Article[];
  className?: string;
}

export const AnalysisSection: React.FC<AnalysisSectionProps> = ({
  articles,
  className = '',
}) => {
  return (
    <section className={`py-6 sm:py-8 ${className}`} id="analysis-section">
      <SectionHeader
        title="বিশ্লেষণ"
        subtitle="খেলার কৌশল, ট্যাকটিক্যাল ব্রেকডাউন ও বিশেষজ্ঞদের কলাম"
        viewAllHref="/analysis"
        viewAllText="সব বিশ্লেষণ পড়ুন →"
        variant="editorial"
        icon={<BookOpen className="w-5 h-5 text-amber-700" />}
        badge="বিশেষ কলাম"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {articles.map((article) => (
          <article
            key={article.id}
            className="group bg-white border border-neutral-200 rounded-xs overflow-hidden shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between"
          >
            <div>
              {/* Image with subtle ratio */}
              <div className="relative aspect-16/10 w-full overflow-hidden bg-neutral-900">
                <img
                  src={article.image.url}
                  alt={article.image.alt || article.title}
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-2.5 left-2.5 bg-neutral-950/80 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-xs">
                  ট্যাকটিক্যাল কলাম
                </div>
              </div>

              {/* Text content with refined editorial feel */}
              <div className="p-4 sm:p-5">
                <div className="flex items-center gap-1.5 text-xs text-neutral-500 mb-2">
                  <span className="font-semibold text-amber-800">
                    {article.category}
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-neutral-400" />
                    পড়ার সময়: {toBanglaNumber(article.readTimeMinutes || 5)} মিনিট
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold font-serif-headline text-neutral-950 leading-snug mb-2.5 group-hover:text-amber-800 transition-colors">
                  <Link href={`/news/${article.slug}`}>
                    {article.banglaTitle || article.title}
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>
            </div>

            {/* Author Byline & Read Link */}
            <div className="px-4 sm:px-5 pb-4 pt-3 border-t border-neutral-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {article.author.avatar ? (
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="w-7 h-7 rounded-full object-cover border border-neutral-200"
                  />
                ) : (
                  <div className="w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
                <div>
                  <span className="text-xs font-bold text-neutral-800 block leading-tight">
                    {article.author.banglaName || article.author.name}
                  </span>
                  <span className="text-[10px] text-neutral-500 block">
                    {article.author.role || 'স্পোর্টস কলামিস্ট'}
                  </span>
                </div>
              </div>

              <Link
                href={`/news/${article.slug}`}
                className="text-xs font-bold text-amber-800 hover:text-amber-950 inline-flex items-center gap-0.5"
              >
                পড়ুন <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

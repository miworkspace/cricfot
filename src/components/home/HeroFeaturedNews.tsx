import React from 'react';
import { Article } from '../../types';
import { FeaturedNewsCard } from '../news/FeaturedNewsCard';

interface HeroFeaturedNewsProps {
  mainArticle: Article;
  secondaryArticles: Article[];
  className?: string;
}

export const HeroFeaturedNews: React.FC<HeroFeaturedNewsProps> = ({
  mainArticle,
  secondaryArticles,
  className = '',
}) => {
  return (
    <section className={`pt-4 sm:pt-6 pb-6 ${className}`} id="hero-featured-news">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
        {/* Main Large Featured Article (7 cols on desktop) */}
        <div className="lg:col-span-7 flex">
          <FeaturedNewsCard
            article={mainArticle}
            variant="hero"
            className="w-full"
          />
        </div>

        {/* 3 Secondary Featured Articles (5 cols on desktop) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-3 sm:gap-4">
          {secondaryArticles.slice(0, 3).map((article) => (
            <FeaturedNewsCard
              key={article.id}
              article={article}
              variant="secondary"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

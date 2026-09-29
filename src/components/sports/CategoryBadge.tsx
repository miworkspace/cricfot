import React from 'react';
import { Category } from '../../types';
import { Link } from '../../router/Link';

interface CategoryBadgeProps {
  category: Category | string;
  clickable?: boolean;
  className?: string;
}

export const CategoryBadge: React.FC<CategoryBadgeProps> = ({
  category,
  clickable = true,
  className = '',
}) => {
  const content = (
    <span
      className={`inline-block text-[11px] font-bold uppercase tracking-wider text-red-700 hover:text-red-800 transition-colors ${className}`}
    >
      {category}
    </span>
  );

  if (clickable) {
    return (
      <Link href={`/search?category=${encodeURIComponent(category)}`}>
        {content}
      </Link>
    );
  }

  return content;
};

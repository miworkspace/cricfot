import React from 'react';
import { Link } from '../../router/Link';
import { ArrowRight } from 'lucide-react';

interface SectionHeadingProps {
  title: string;
  banglaTitle?: string;
  subtitle?: string;
  viewAllHref?: string;
  viewAllText?: string;
  accentColor?: 'cricket' | 'football' | 'neutral' | 'red';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  banglaTitle,
  subtitle,
  viewAllHref,
  viewAllText = 'View All',
  accentColor = 'neutral',
  className = '',
}) => {
  const accentBarClass =
    accentColor === 'cricket'
      ? 'bg-emerald-600'
      : accentColor === 'football'
      ? 'bg-blue-600'
      : accentColor === 'red'
      ? 'bg-red-600'
      : 'bg-neutral-900';

  return (
    <div className={`border-b border-neutral-200 pb-3 mb-6 flex items-end justify-between ${className}`}>
      <div className="flex items-center gap-3">
        <div className={`w-1 h-6 sm:h-7 rounded-none ${accentBarClass}`} aria-hidden="true" />
        <div>
          <div className="flex items-baseline gap-2">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 uppercase font-sans">
              {title}
            </h2>
            {banglaTitle && (
              <span className="text-sm font-medium text-neutral-500 hidden sm:inline">
                ({banglaTitle})
              </span>
            )}
          </div>
          {subtitle && <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">{subtitle}</p>}
        </div>
      </div>

      {viewAllHref && (
        <Link
          href={viewAllHref}
          className="group inline-flex items-center text-xs sm:text-sm font-semibold text-neutral-700 hover:text-neutral-900 hover:underline transition-colors"
        >
          <span>{viewAllText}</span>
          <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5" />
        </Link>
      )}
    </div>
  );
};

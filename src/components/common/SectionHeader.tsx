import React from 'react';
import { Link } from '../../router/Link';
import { ChevronRight } from 'lucide-react';

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  viewAllHref?: string;
  viewAllText?: string;
  badge?: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'cricket' | 'football' | 'editorial';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  viewAllHref,
  viewAllText = 'সব দেখুন',
  badge,
  icon,
  variant = 'default',
  className = '',
}) => {
  // Theme indicator color based on variant
  const getAccentClass = () => {
    switch (variant) {
      case 'cricket':
        return 'bg-emerald-600';
      case 'football':
        return 'bg-blue-600';
      case 'editorial':
        return 'bg-amber-600';
      default:
        return 'bg-red-600';
    }
  };

  return (
    <div
      className={`flex flex-col sm:flex-row sm:items-end justify-between pb-2.5 mb-5 border-b-2 border-neutral-200 ${className}`}
    >
      <div className="flex items-center gap-2.5">
        <span className={`w-1.5 h-6 rounded-xs ${getAccentClass()}`} aria-hidden="true" />
        {icon && <span className="text-neutral-700">{icon}</span>}
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-bold font-serif-headline text-neutral-950 tracking-tight">
              {title}
            </h2>
            {badge && (
              <span className="text-[10px] font-bold uppercase tracking-wider bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded-xs border border-neutral-300">
                {badge}
              </span>
            )}
          </div>
          {subtitle && (
            <p className="text-xs text-neutral-500 font-sans mt-0.5">{subtitle}</p>
          )}
        </div>
      </div>

      {viewAllHref && (
        <div className="mt-2 sm:mt-0">
          <Link
            href={viewAllHref}
            className="inline-flex items-center gap-1 text-xs font-bold text-neutral-700 hover:text-red-700 transition-colors group"
          >
            <span>{viewAllText}</span>
            <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 text-neutral-500 group-hover:text-red-700" />
          </Link>
        </div>
      )}
    </div>
  );
};

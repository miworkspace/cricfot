import React from 'react';
import { Sport } from '../../types';

interface SportBadgeProps {
  sport: Sport;
  size?: 'sm' | 'md';
  showBangla?: boolean;
  showIcon?: boolean;
  className?: string;
}

export const SportBadge: React.FC<SportBadgeProps> = ({
  sport,
  size = 'sm',
  showBangla = false,
  showIcon = true,
  className = '',
}) => {
  const isCricket = sport === 'cricket';

  const baseClasses =
    isCricket
      ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
      : 'bg-blue-50 text-blue-800 border-blue-300';

  const sizeClasses =
    size === 'sm' ? 'text-[11px] px-2 py-0.5' : 'text-xs px-2.5 py-1 font-semibold';

  return (
    <span
      className={`inline-flex items-center gap-1 font-medium uppercase tracking-wider border rounded-xs ${baseClasses} ${sizeClasses} ${className}`}
    >
      {showIcon && (
        <span
          className={`w-1.5 h-1.5 rounded-full ${isCricket ? 'bg-emerald-600' : 'bg-blue-600'}`}
          aria-hidden="true"
        />
      )}
      <span>{sport}</span>
      {showBangla && (
        <span className="text-[10px] opacity-80 lowercase">
          ({isCricket ? 'ক্রিকেট' : 'ফুটবল'})
        </span>
      )}
    </span>
  );
};

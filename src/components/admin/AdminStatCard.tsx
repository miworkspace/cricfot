import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AdminStatCardProps {
  id?: string;
  title: string;
  value: string | number;
  icon: LucideIcon;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  isPositive?: boolean;
  description?: string;
  color?: 'emerald' | 'blue' | 'amber' | 'rose' | 'purple' | 'neutral';
}

export const AdminStatCard: React.FC<AdminStatCardProps> = ({
  id,
  title,
  value,
  icon: Icon,
  change,
  changeType = 'positive',
  isPositive,
  description,
  color = 'emerald',
}) => {
  const effectiveChangeType =
    isPositive !== undefined
      ? isPositive
        ? 'positive'
        : 'negative'
      : changeType;
  const colorMap = {
    emerald: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    blue: 'bg-blue-50 text-blue-700 border-blue-100',
    amber: 'bg-amber-50 text-amber-700 border-amber-100',
    rose: 'bg-rose-50 text-rose-700 border-rose-100',
    purple: 'bg-purple-50 text-purple-700 border-purple-100',
    neutral: 'bg-neutral-100 text-neutral-700 border-neutral-200',
  };

  return (
    <div
      id={id}
      className="bg-white rounded-xl border border-neutral-200/80 p-5 shadow-xs hover:border-neutral-300 transition-all"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
          {title}
        </span>
        <div className={`p-2 rounded-lg border ${colorMap[color]}`}>
          <Icon className="w-4 h-4" />
        </div>
      </div>

      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
          {value}
        </span>
        {change && (
          <span
            className={`text-xs font-semibold ${
              effectiveChangeType === 'positive'
                ? 'text-emerald-600'
                : effectiveChangeType === 'negative'
                ? 'text-rose-600'
                : 'text-neutral-500'
            }`}
          >
            {change}
          </span>
        )}
      </div>

      {description && (
        <p className="mt-1 text-xs text-neutral-500 line-clamp-1">{description}</p>
      )}
    </div>
  );
};

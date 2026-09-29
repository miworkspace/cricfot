import React from 'react';
import { useRouter } from '../../router/RouterContext';
import { Layers, Trophy, Shield, Filter, RotateCcw } from 'lucide-react';
import { toBanglaNumber } from '../../utils/banglaUtils';

export type CategoryFilterType = 'all' | 'cricket' | 'football';

interface CategoryFilterNavProps {
  activeCategory: CategoryFilterType;
  counts?: {
    all: number;
    cricket: number;
    football: number;
  };
  className?: string;
}

export const CategoryFilterNav: React.FC<CategoryFilterNavProps> = ({
  activeCategory,
  counts = { all: 48, cricket: 28, football: 20 },
  className = '',
}) => {
  const { navigate } = useRouter();

  const handleSelect = (category: CategoryFilterType) => {
    if (category === activeCategory) return;

    if (category === 'all') {
      navigate('/?category=all', { replace: false });
    } else {
      navigate(`/?category=${category}`, { replace: false });
    }
  };

  const tabs: Array<{
    id: CategoryFilterType;
    label: string;
    englishLabel: string;
    icon: React.ReactNode;
    count: number;
  }> = [
    {
      id: 'all',
      label: 'সব খবর',
      englishLabel: 'All News',
      icon: <Layers className="w-4 h-4 shrink-0" />,
      count: counts.all,
    },
    {
      id: 'cricket',
      label: 'ক্রিকেট',
      englishLabel: 'Cricket',
      icon: <Trophy className="w-4 h-4 shrink-0 text-emerald-500" />,
      count: counts.cricket,
    },
    {
      id: 'football',
      label: 'ফুটবল',
      englishLabel: 'Football',
      icon: <Shield className="w-4 h-4 shrink-0 text-blue-500" />,
      count: counts.football,
    },
  ];

  return (
    <nav
      className={`w-full bg-white border border-neutral-200/90 rounded-xs p-2 sm:p-2.5 shadow-2xs ${className}`}
      aria-label="ক্যাটাগরি ফিল্টার নেভিগেশন"
      id="homepage-category-filter-nav"
    >
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
        {/* Filter Label */}
        <div className="flex items-center gap-2 px-1">
          <div className="w-7 h-7 rounded-xs bg-neutral-100 flex items-center justify-center text-neutral-700">
            <Filter className="w-3.5 h-3.5 text-neutral-600" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block leading-tight font-sans">
              ভিউ ফিল্টার
            </span>
            <span className="text-xs font-bold text-neutral-900 font-sans">
              সংবাদের বিষয় নির্বাচন করুন:
            </span>
          </div>
        </div>

        {/* Segmented Control Buttons */}
        <div
          role="tablist"
          aria-label="খেলার ক্যাটাগরি ফিল্টার"
          className="flex items-center gap-1.5 p-1 bg-neutral-100/80 rounded-xs overflow-x-auto scrollbar-none"
        >
          {tabs.map((tab) => {
            const isActive = activeCategory === tab.id;

            return (
              <button
                key={tab.id}
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                type="button"
                onClick={() => handleSelect(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 text-xs font-sans font-bold rounded-xs transition-all whitespace-nowrap shrink-0 focus:outline-hidden focus:ring-1 focus:ring-neutral-400 ${
                  isActive
                    ? 'bg-neutral-950 text-white shadow-xs'
                    : 'text-neutral-700 hover:text-neutral-950 hover:bg-white/80'
                }`}
              >
                {tab.icon}
                <span className="tracking-tight">{tab.label}</span>
                <span
                  className={`text-[11px] font-mono px-1.5 py-0.2 rounded-2xs ${
                    isActive ? 'bg-neutral-800 text-neutral-200' : 'bg-neutral-200/70 text-neutral-600'
                  }`}
                >
                  {toBanglaNumber(tab.count)}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Filter Notice Bar (when filtering by Cricket or Football) */}
      {activeCategory !== 'all' && (
        <div className="mt-2.5 pt-2 border-t border-neutral-100 flex items-center justify-between text-xs font-sans px-1 animate-in fade-in duration-150">
          <div className="flex items-center gap-1.5 text-neutral-700">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span>
              বর্তমানে শুধুমাত্র{' '}
              <strong className="text-neutral-950 font-bold">
                {activeCategory === 'cricket' ? 'ক্রিকেট' : 'ফুটবল'}
              </strong>{' '}
              সংক্রান্ত প্রতিবেদন, লাইভ স্কোর ও বিশ্লেষণ প্রদর্শিত হচ্ছে।
            </span>
          </div>

          <button
            type="button"
            onClick={() => handleSelect('all')}
            className="text-red-700 hover:text-red-900 font-bold inline-flex items-center gap-1 underline text-[11px] shrink-0 ml-2"
          >
            <RotateCcw className="w-3 h-3" />
            <span>সব সংবাদে ফিরুন</span>
          </button>
        </div>
      )}
    </nav>
  );
};

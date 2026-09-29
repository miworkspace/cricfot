import React from 'react';
import { Link } from '../../router/Link';
import { NavItemConfig, TRENDING_TOPICS } from '../../config/navigation';
import { useRouter } from '../../router/RouterContext';
import { Flame, PlayCircle, Radio } from 'lucide-react';

interface MainNavigationProps {
  items: NavItemConfig[];
  className?: string;
}

export const MainNavigation: React.FC<MainNavigationProps> = ({ items, className = '' }) => {
  const { currentPath } = useRouter();

  return (
    <nav
      className={`border-t border-b border-neutral-200 bg-white shadow-2xs ${className}`}
      aria-label="মূল নেভিগেশন (Main Navigation)"
      id="main-navigation"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Main category links */}
          <ul className="flex items-center gap-0.5 sm:gap-1 overflow-x-auto scrollbar-none py-1 sm:py-0">
            {items.map((item) => {
              const isHome = item.href === '/';
              const isActive = isHome ? currentPath === '/' : currentPath.startsWith(item.href);
              const isLive = item.href === '/live';
              const isCricket = item.sport === 'cricket';
              const isFootball = item.sport === 'football';
              const isVideos = item.href === '/videos';

              return (
                <li key={item.href} className="shrink-0">
                  <Link
                    href={item.href}
                    exact={isHome}
                    className={`relative inline-flex items-center gap-1.5 px-3 py-2.5 text-xs sm:text-sm font-semibold transition-all select-none ${
                      isActive
                        ? 'text-neutral-950 font-bold bg-neutral-100/90 rounded-t-xs shadow-xs after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.75 after:bg-neutral-900'
                        : 'text-neutral-700 hover:text-neutral-950 hover:bg-neutral-50 rounded-xs'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {/* Visual state indicator icons */}
                    {isCricket && (
                      <span
                        className={`w-2 h-2 rounded-full inline-block transition-colors ${
                          isActive ? 'bg-emerald-600 ring-2 ring-emerald-200' : 'bg-emerald-500'
                        }`}
                        aria-hidden="true"
                      />
                    )}
                    {isFootball && (
                      <span
                        className={`w-2 h-2 rounded-full inline-block transition-colors ${
                          isActive ? 'bg-blue-600 ring-2 ring-blue-200' : 'bg-blue-500'
                        }`}
                        aria-hidden="true"
                      />
                    )}
                    {isLive && (
                      <span className="relative flex h-2 w-2 items-center justify-center">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600" />
                      </span>
                    )}
                    {isVideos && (
                      <PlayCircle
                        className={`w-3.5 h-3.5 transition-colors ${
                          isActive ? 'text-red-600' : 'text-neutral-400'
                        }`}
                        aria-hidden="true"
                      />
                    )}

                    {/* Bangla Primary Label */}
                    <span className="tracking-normal font-sans font-medium">{item.banglaLabel}</span>

                    {/* Badge if present */}
                    {item.badge && (
                      <span
                        className={`text-[10px] font-bold px-1.5 py-0.2 rounded-xs uppercase tracking-wider ${
                          isLive
                            ? 'bg-red-600 text-white animate-pulse'
                            : 'bg-neutral-100 text-neutral-600 border border-neutral-300'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Quick Trending Sub-tags on large screens */}
          <div className="hidden xl:flex items-center gap-2 text-xs py-2 pl-4 border-l border-neutral-200 text-neutral-500">
            <span className="flex items-center gap-1 font-bold text-neutral-700 text-[11px] shrink-0">
              <Flame className="w-3.5 h-3.5 text-amber-500" />
              <span>ট্রেন্ডিং:</span>
            </span>
            <div className="flex items-center gap-1.5 text-[11px]">
              {TRENDING_TOPICS.map((topic) => (
                <Link
                  key={topic.label}
                  href={topic.href}
                  className="px-2 py-0.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-xs transition-colors"
                >
                  {topic.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

import React from 'react';
import { Link } from '../../router/Link';
import { NavigationItem } from '../../types';

interface NavbarProps {
  items: NavigationItem[];
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ items, className = '' }) => {
  return (
    <nav
      className={`border-t border-b border-neutral-200 bg-white ${className}`}
      aria-label="Main Navigation"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Main category links */}
          <ul className="flex items-center gap-1 sm:gap-2 overflow-x-auto scrollbar-none py-1 sm:py-0">
            {items.map((item) => {
              const isLive = item.href === '/live';
              const isCricket = item.sport === 'cricket';
              const isFootball = item.sport === 'football';

              return (
                <li key={item.href} className="shrink-0">
                  <Link
                    href={item.href}
                    exact={item.href === '/'}
                    className="relative block px-3 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-700 hover:text-neutral-950 transition-colors"
                    activeClassName="text-neutral-950 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.75 after:bg-neutral-900"
                  >
                    <span className="flex items-center gap-1.5">
                      {isCricket && (
                        <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block" />
                      )}
                      {isFootball && (
                        <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
                      )}
                      {isLive && (
                        <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse inline-block" />
                      )}
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className="text-[10px] uppercase font-semibold px-1 py-0.2 bg-neutral-100 text-neutral-600 border border-neutral-300 rounded-xs">
                          {item.badge}
                        </span>
                      )}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Quick Sub-tag links on desktop */}
          <div className="hidden lg:flex items-center gap-3 text-xs text-neutral-500 py-2 pl-4 border-l border-neutral-200">
            <span className="font-semibold uppercase text-neutral-400 text-[10px] tracking-wider">
              Trending:
            </span>
            <Link
              href="/search?category=Bangladesh+Cricket"
              className="hover:text-red-700 hover:underline"
            >
              Bangladesh Cricket
            </Link>
            <span>•</span>
            <Link
              href="/search?category=Bangladesh+Football"
              className="hover:text-red-700 hover:underline"
            >
              Bangladesh Football
            </Link>
            <span>•</span>
            <Link href="/search?category=BPL" className="hover:text-red-700 hover:underline">
              BPL
            </Link>
            <span>•</span>
            <Link
              href="/search?category=Premier+League"
              className="hover:text-red-700 hover:underline"
            >
              EPL
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

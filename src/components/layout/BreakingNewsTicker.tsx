import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from '../../router/Link';
import {
  Zap,
  Radio,
  Pause,
  Play,
  ChevronLeft,
  ChevronRight,
  RefreshCw,
  SlidersHorizontal,
  Flame,
} from 'lucide-react';
import { BreakingNewsItem, MOCK_BREAKING_HEADLINES } from '../../config/navigation';
import { breakingNewsService } from '../../services/breakingNewsService';
import { toBanglaNumber } from '../../utils/banglaUtils';

interface BreakingNewsTickerProps {
  className?: string;
  initialHeadlines?: BreakingNewsItem[];
}

export const BreakingNewsTicker: React.FC<BreakingNewsTickerProps> = ({
  className = '',
  initialHeadlines,
}) => {
  const [headlines, setHeadlines] = useState<BreakingNewsItem[]>(
    initialHeadlines || MOCK_BREAKING_HEADLINES
  );
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tickerMode, setTickerMode] = useState<'marquee' | 'slide'>('marquee');
  const [recentAlert, setRecentAlert] = useState<string | null>(null);
  const [hasNewArrival, setHasNewArrival] = useState(false);

  const alertTimeoutRef = useRef<number | null>(null);

  // 1. Initial async fetch & real-time subscription
  useEffect(() => {
    let isMounted = true;

    // Fetch initial headlines
    breakingNewsService
      .getLatestHeadlines()
      .then((items) => {
        if (isMounted) {
          if (items && items.length > 0) {
            setHeadlines(items);
          }
          setIsLoading(false);
        }
      })
      .catch(() => {
        if (isMounted) {
          setIsLoading(false);
        }
      });

    // Real-time listener for incoming breaking updates
    const unsubscribe = breakingNewsService.subscribe((updatedItems, newHeadline) => {
      if (!isMounted) return;
      setHeadlines(updatedItems);

      if (newHeadline) {
        setHasNewArrival(true);
        setRecentAlert(newHeadline.title);

        if (alertTimeoutRef.current) {
          window.clearTimeout(alertTimeoutRef.current);
        }

        alertTimeoutRef.current = window.setTimeout(() => {
          if (isMounted) {
            setRecentAlert(null);
            setHasNewArrival(false);
          }
        }, 5000);
      }
    });

    return () => {
      isMounted = false;
      unsubscribe();
      if (alertTimeoutRef.current) {
        window.clearTimeout(alertTimeoutRef.current);
      }
    };
  }, []);

  // 2. Slide carousel rotation timer (active when tickerMode === 'slide' or for keyboard controls)
  useEffect(() => {
    if (isPaused || tickerMode !== 'slide' || headlines.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === headlines.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused, tickerMode, headlines.length]);

  const handleManualRefresh = useCallback(async () => {
    if (isRefreshing) return;
    setIsRefreshing(true);
    try {
      const refreshed = await breakingNewsService.refreshHeadlines();
      setHeadlines(refreshed);
    } catch {
      // Keep existing headlines
    } finally {
      setIsRefreshing(false);
    }
  }, [isRefreshing]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? headlines.length - 1 : prev - 1));
  }, [headlines.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === headlines.length - 1 ? 0 : prev + 1));
  }, [headlines.length]);

  const toggleTickerMode = () => {
    setTickerMode((prev) => (prev === 'marquee' ? 'slide' : 'marquee'));
  };

  const currentSlideItem = headlines[currentIndex] || headlines[0];

  return (
    <aside
      className={`relative bg-neutral-950 text-neutral-100 border-b border-neutral-800 text-xs sm:text-sm select-none z-40 transition-colors ${className}`}
      aria-label="ব্রেকিং নিউজ স্ক্রলিং টিকার"
      id="breaking-news-ticker"
    >
      <div className="w-full flex items-stretch">
        {/* Left Badge: Urgent "ব্রেকিং নিউজ" with live pulsing radar */}
        <div className="bg-red-600 hover:bg-red-700 transition-colors px-2.5 sm:px-4 py-2 flex items-center gap-1.5 font-bold tracking-wide text-xs shrink-0 z-20 shadow-md">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-90" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
          </span>
          <Zap className="w-3.5 h-3.5 fill-white text-white animate-pulse" aria-hidden="true" />
          <span className="font-sans font-black tracking-tight text-white uppercase text-[11px] sm:text-xs">
            <span className="inline sm:hidden">ব্রেকিং</span>
            <span className="hidden sm:inline">ব্রেকিং নিউজ</span>
          </span>
          <span className="hidden md:inline-flex items-center gap-1 ml-1 text-[10px] font-mono font-semibold bg-red-800 text-red-100 px-1.5 py-0.2 rounded-xs">
            <Radio className="w-2.5 h-2.5" />
            লাইভ
          </span>
        </div>

        {/* Real-time alert pill overlay when a new breaking headline flashes in */}
        {recentAlert && (
          <div className="absolute left-28 sm:left-44 top-1.5 z-30 pointer-events-none hidden lg:flex items-center gap-1.5 bg-emerald-600 text-white text-[11px] px-2 py-0.5 rounded-full font-sans font-bold shadow-lg animate-in fade-in zoom-in-95 duration-200">
            <Flame className="w-3 h-3 text-amber-300" />
            <span>তাজা সংবাদ যুক্ত হয়েছে!</span>
          </div>
        )}

        {/* Middle Content Area */}
        <div
          className="flex-1 min-w-0 relative overflow-hidden flex items-center py-1.5 px-2 sm:px-3 bg-neutral-950"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Subtle left gradient mask for smooth fade in */}
          <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-neutral-950 to-transparent pointer-events-none z-10" />

          {isLoading ? (
            /* Skeleton Loading State */
            <div className="flex items-center gap-3 w-full py-0.5 animate-pulse">
              <div className="h-3 w-16 bg-neutral-800 rounded-xs" />
              <div className="h-3 w-72 sm:w-96 bg-neutral-800 rounded-xs" />
              <span className="text-[11px] text-neutral-500 font-sans hidden sm:inline">
                তাজা খেলার খবর সংযুক্ত হচ্ছে...
              </span>
            </div>
          ) : tickerMode === 'marquee' ? (
            /* Mode 1: Continuous Smooth Scrolling Marquee */
            <div className="w-full overflow-hidden flex items-center">
              <div
                className={`animate-marquee-smooth flex items-center gap-8 ${
                  isPaused ? 'ticker-paused' : ''
                }`}
                aria-live="off"
              >
                {/* Loop 1 */}
                {headlines.map((item, idx) => (
                  <div
                    key={`${item.id}-a-${idx}`}
                    className="flex items-center gap-2.5 shrink-0"
                  >
                    {idx === 0 && hasNewArrival && (
                      <span className="bg-red-500 text-white font-bold text-[9px] px-1.5 py-0.2 rounded-xs uppercase animate-pulse">
                        নতুন
                      </span>
                    )}

                    <span className="text-[10px] font-bold bg-neutral-900 border border-neutral-800 text-emerald-400 px-1.5 py-0.5 rounded-xs font-sans">
                      {item.category}
                    </span>

                    <Link
                      href={`/news/${item.slug}`}
                      className="text-neutral-100 hover:text-red-400 font-sans text-xs sm:text-sm font-medium transition-colors hover:underline tracking-tight"
                    >
                      {item.title}
                    </Link>

                    <span className="text-neutral-500 text-[11px] font-sans">
                      {item.publishedAt}
                    </span>

                    {/* Separator icon */}
                    <span className="text-red-600/70 text-xs px-1 select-none font-black">•</span>
                  </div>
                ))}

                {/* Seamless Repeat Loop 2 (so scroll never shows empty gaps) */}
                {headlines.map((item, idx) => (
                  <div
                    key={`${item.id}-b-${idx}`}
                    className="flex items-center gap-2.5 shrink-0"
                  >
                    <span className="text-[10px] font-bold bg-neutral-900 border border-neutral-800 text-emerald-400 px-1.5 py-0.5 rounded-xs font-sans">
                      {item.category}
                    </span>

                    <Link
                      href={`/news/${item.slug}`}
                      className="text-neutral-100 hover:text-red-400 font-sans text-xs sm:text-sm font-medium transition-colors hover:underline tracking-tight"
                    >
                      {item.title}
                    </Link>

                    <span className="text-neutral-500 text-[11px] font-sans">
                      {item.publishedAt}
                    </span>

                    <span className="text-red-600/70 text-xs px-1 select-none font-black">•</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Mode 2: Step-by-step Slide Conveyor */
            <div className="flex items-center gap-2 w-full truncate py-0.5">
              <span className="text-neutral-400 text-[11px] font-mono shrink-0 hidden sm:inline">
                [{toBanglaNumber(currentIndex + 1)}/{toBanglaNumber(headlines.length)}]
              </span>

              <span className="text-[10px] font-bold bg-neutral-900 border border-neutral-800 text-emerald-400 px-1.5 py-0.5 rounded-xs shrink-0 font-sans">
                {currentSlideItem.category}
              </span>

              <Link
                href={`/news/${currentSlideItem.slug}`}
                className="truncate font-medium text-neutral-100 hover:text-red-400 transition-colors font-sans text-xs sm:text-sm"
                title={currentSlideItem.title}
              >
                {currentSlideItem.title}
              </Link>

              <span className="text-neutral-500 text-[11px] font-sans shrink-0 hidden md:inline ml-auto">
                {currentSlideItem.publishedAt}
              </span>
            </div>
          )}

          {/* Subtle right gradient mask for smooth fade out */}
          <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-neutral-950 to-transparent pointer-events-none z-10" />
        </div>

        {/* Right Controls: Refresh, Mode toggle, Play/Pause, Prev/Next */}
        <div className="flex items-center border-l border-neutral-800 shrink-0 bg-neutral-950 z-20">
          {/* Manual Real-time Refresh Button */}
          <button
            type="button"
            onClick={handleManualRefresh}
            disabled={isRefreshing}
            aria-label="তাজা ব্রেকিং সংবাদ রিফ্রেশ করুন"
            title="তাজা সংবাদ রিফ্রেশ"
            className="p-1.5 sm:p-2 text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors disabled:opacity-50 focus:outline-hidden"
          >
            <RefreshCw
              className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isRefreshing ? 'animate-spin text-red-500' : ''}`}
            />
          </button>

          {/* Play / Pause Toggle Button */}
          <button
            type="button"
            onClick={() => setIsPaused((prev) => !prev)}
            aria-label={isPaused ? 'টিকার চালু করুন' : 'টিকার থামান'}
            title={isPaused ? 'চালু করুন' : 'থামান'}
            className="p-1.5 sm:p-2 text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors focus:outline-hidden"
          >
            {isPaused ? (
              <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
            ) : (
              <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            )}
          </button>

          {/* Mode Switch Button (Marquee vs Slide) */}
          <button
            type="button"
            onClick={toggleTickerMode}
            aria-label={
              tickerMode === 'marquee'
                ? 'স্লাইড মোডে পরিবর্তন করুন'
                : 'স্ক্রলিং মোডে পরিবর্তন করুন'
            }
            title={
              tickerMode === 'marquee'
                ? 'স্লাইড ভিউ (একক সংবাদ)'
                : 'স্ক্রলিং ফিতা ভিউ'
            }
            className={`hidden sm:inline-flex p-1.5 sm:p-2 transition-colors focus:outline-hidden ${
              tickerMode === 'marquee'
                ? 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                : 'text-red-400 bg-neutral-900'
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>

          {/* Slide Navigation Buttons (only when in slide mode or on sm screens) */}
          {tickerMode === 'slide' && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="পূর্ববর্তী ব্রেকিং নিউজ"
                className="p-1.5 sm:p-2 text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors focus:outline-hidden"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="পরবর্তী ব্রেকিং নিউজ"
                className="p-1.5 sm:p-2 text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors focus:outline-hidden"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          )}
        </div>
      </div>
    </aside>
  );
};

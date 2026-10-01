'use client';
import { useState, useEffect, useRef } from "react";
import { Link } from "../../router/Link";
import { MainNavigation } from "./MainNavigation";
import { MobileMenu } from "./MobileMenu";
import { MAIN_NAVIGATION_ITEMS } from "../../config/navigation";
import { Search, Menu, Bell, Sun, Moon, ChevronRight, CloudSun } from "lucide-react";
import { useRouter } from "../../router/RouterContext";
import { getBanglaFormattedDate, toBanglaNumber } from "../../utils/banglaUtils";
export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("cricfot_theme") === "dark";
    }
    return false;
  });
  const [searchQuery, setSearchQuery] = useState("");
  const { navigate } = useRouter();
  const notificationRef = useRef(null);
  const banglaDate = getBanglaFormattedDate();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setIsNotificationOpen(false);
      }
    };
    if (isNotificationOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNotificationOpen]);
  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("cricfot_theme", newTheme ? "dark" : "light");
      if (newTheme) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    } else {
      navigate("/search");
    }
  };
  const sampleNotifications = [
    {
      id: 1,
      title: "\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6 \u09AC\u09A8\u09BE\u09AE \u0985\u09B8\u09CD\u099F\u09CD\u09B0\u09C7\u09B2\u09BF\u09AF\u09BC\u09BE \u099F\u09C7\u09B8\u09CD\u099F \u09B8\u09CD\u0995\u09CB\u09AF\u09BC\u09BE\u09A1 \u0998\u09CB\u09B7\u09A3\u09BE",
      time: "\u09E7\u09E6 \u09AE\u09BF\u09A8\u09BF\u099F \u0986\u0997\u09C7",
      unread: true,
      href: "/cricket"
    },
    {
      id: 2,
      title: "\u099A\u09CD\u09AF\u09BE\u09AE\u09CD\u09AA\u09BF\u09AF\u09BC\u09A8\u09CD\u09B8 \u09B2\u09BF\u0997: \u09AC\u09BE\u09AF\u09BC\u09BE\u09B0\u09CD\u09A8 \u0993 \u09B0\u09BF\u09AF\u09BC\u09BE\u09B2\u09C7\u09B0 \u09B0\u09CB\u09AE\u09BE\u099E\u09CD\u099A\u0995\u09B0 \u09A1\u09CD\u09B0",
      time: "\u09E9\u09EB \u09AE\u09BF\u09A8\u09BF\u099F \u0986\u0997\u09C7",
      unread: true,
      href: "/football"
    },
    {
      id: 3,
      title: "\u09B2\u09BE\u0987\u09AD \u09B8\u09CD\u0995\u09CB\u09B0 \u0986\u09AA\u09A1\u09C7\u099F: \u09AC\u09BF\u09AA\u09BF\u098F\u09B2 \u09A1\u09CD\u09B0\u09BE\u09AB\u099F\u09C7\u09B0 \u09A6\u09B2\u0997\u09A0\u09A8 \u09B8\u09AE\u09CD\u09AA\u09A8\u09CD\u09A8",
      time: "\u09E7 \u0998\u09A3\u09CD\u099F\u09BE \u0986\u0997\u09C7",
      unread: false,
      href: "/live"
    }
  ];
  return <header className="w-full bg-white border-b border-neutral-200" id="cricfot-header">
      {
    /* 1. Top Editorial Utility Bar in Bangla */
  }
      <div className="bg-neutral-950 text-neutral-300 text-[11px] py-1.5 border-b border-neutral-800">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2.5 font-sans">
            <span className="font-semibold text-neutral-100">{banglaDate}</span>
            <span className="text-neutral-700 hidden sm:inline">|</span>
            <span className="text-neutral-400 hidden sm:inline">ঢাকা সংস্করণ · অনলাইন ব্রডশিট</span>
            <span className="text-neutral-700 hidden md:inline">|</span>
            <span className="text-amber-400 hidden md:inline-flex items-center gap-1">
              <CloudSun className="w-3.5 h-3.5" />
              ঢাকা: ৩১°সে, রৌদ্রোজ্জ্বল
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-[10px] font-bold font-sans">
              <span className="text-emerald-400 font-semibold hidden lg:inline mr-2">
                ক্রীড়া বার্তা: মিরপুর টেস্ট চলছে
              </span>
              <span className="bg-emerald-950 text-emerald-300 border border-emerald-800/80 px-1.5 py-0.5 rounded-xs">
                ক্রিকেট
              </span>
              <span className="bg-blue-950 text-blue-300 border border-blue-800/80 px-1.5 py-0.5 rounded-xs">
                ফুটবল
              </span>
              <span className="bg-red-950 text-red-300 border border-red-800/80 px-1.5 py-0.5 rounded-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                লাইভ স্কোর
              </span>
            </div>
          </div>
        </div>
      </div>

      {
    /* 2. Main Header / Masthead (Clean, compact, not unnecessarily tall) */
  }
      <div className="py-2.5 sm:py-3.5 bg-white sticky top-0 z-30 shadow-xs border-b border-neutral-100">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {
    /* Left: Mobile hamburger trigger + CricFot Logo */
  }
            <div className="flex items-center gap-2 sm:gap-4">
              <button
    type="button"
    onClick={() => setIsMobileMenuOpen(true)}
    className="lg:hidden p-1.5 -ml-1.5 text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 rounded-xs focus:outline-hidden focus:ring-1 focus:ring-neutral-400"
    aria-label="মোবাইল মেনু খুলুন"
    id="mobile-menu-trigger"
  >
                <Menu className="w-6 h-6" />
              </button>

              {
    /* Logo / Text Brand - Clicking navigates to / */
  }
              <Link
    href="/"
    className="group flex flex-col justify-center focus:outline-hidden"
    aria-label="ক্রিকফুট হোমপেজ"
  >
                <div className="flex items-center gap-1 leading-none">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-serif-bengali text-neutral-950">
                    ক্রিক<span className="text-red-600">ফুট</span>
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 self-end mb-1" />
                  <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase ml-1.5 hidden sm:inline">
                    CRICFOT
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-medium text-neutral-500 tracking-tight mt-0.5 font-sans">
                  বাংলাদেশ ও আন্তর্জাতিক ক্রীড়া সংবাদপত্র
                </span>
              </Link>
            </div>

            {
    /* Center: Desktop Search Input Form */
  }
            <div className="hidden lg:flex flex-1 max-w-sm mx-4">
              <form onSubmit={handleSearchSubmit} className="relative w-full">
                <input
    type="text"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    placeholder="খেলোয়াড়, দল বা সংবাদ অনুসন্ধান..."
    className="w-full pl-9 pr-4 py-2 text-xs font-sans bg-neutral-100 border border-neutral-300 focus:border-neutral-900 focus:bg-white rounded-xs transition-colors outline-hidden placeholder:text-neutral-400"
    aria-label="সংবাদ অনুসন্ধান করুন"
  />
                <button
    type="submit"
    aria-label="অনুসন্ধান করুন"
    className="absolute left-2.5 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-900"
  >
                  <Search className="w-4 h-4" />
                </button>
              </form>
            </div>

            {
    /* Right: Search button, Notification icon, Theme toggle */
  }
            <div className="flex items-center gap-1 sm:gap-2">
              {
    /* Mobile Search Button (navigates to /search) */
  }
              <Link
    href="/search"
    className="p-2 text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 rounded-xs transition-colors lg:hidden"
    aria-label="অনুসন্ধান পৃষ্ঠা"
    title="অনুসন্ধান"
  >
                <Search className="w-5 h-5" />
              </Link>

              {
    /* Desktop Search Button link to /search if user prefers dedicated page */
  }
              <Link
    href="/search"
    className="hidden sm:inline-flex lg:hidden p-2 text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 rounded-xs transition-colors"
    aria-label="অনুসন্ধান"
    title="অনুসন্ধান করুন"
  >
                <Search className="w-4 h-4" />
              </Link>

              {
    /* Notification Icon with Alert Badge & Popover */
  }
              <div className="relative" ref={notificationRef}>
                <button
    type="button"
    onClick={() => setIsNotificationOpen((prev) => !prev)}
    className="p-2 text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 rounded-xs transition-colors relative focus:outline-hidden focus:ring-1 focus:ring-neutral-400"
    aria-label={`\u09AC\u09BF\u099C\u09CD\u099E\u09AA\u09CD\u09A4\u09BF (${toBanglaNumber(2)}\u099F\u09BF \u09A8\u09A4\u09C1\u09A8)`}
    aria-expanded={isNotificationOpen}
    title="বিজ্ঞপ্তি"
  >
                  <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="absolute top-1.5 right-1.5 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600" />
                  </span>
                </button>

                {
    /* Notifications Dropdown */
  }
                {isNotificationOpen && <div
    className="absolute right-0 mt-2 w-72 sm:w-80 bg-white border border-neutral-200 rounded-xs shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
    role="region"
    aria-label="সাম্প্রতিক ক্রীড়া বিজ্ঞপ্তি"
  >
                    <div className="px-3 py-2 border-b border-neutral-100 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-xs text-neutral-900 font-sans">
                          খেলার বিজ্ঞপ্তি
                        </span>
                        <span className="text-[10px] font-bold bg-red-100 text-red-700 px-1.5 py-0.2 rounded-xs">
                          {toBanglaNumber(2)} নতুন
                        </span>
                      </div>
                      <span className="text-[11px] text-neutral-400">তাত্ক্ষণিক আপডেট</span>
                    </div>

                    <div className="max-h-64 overflow-y-auto divide-y divide-neutral-100">
                      {sampleNotifications.map((notif) => <Link
    key={notif.id}
    href={notif.href}
    onClick={() => setIsNotificationOpen(false)}
    className="p-3 hover:bg-neutral-50 transition-colors block text-left group"
  >
                          <div className="flex items-start justify-between gap-2">
                            <p
    className={`text-xs leading-snug font-sans group-hover:text-red-600 transition-colors ${notif.unread ? "font-bold text-neutral-900" : "text-neutral-600"}`}
  >
                              {notif.title}
                            </p>
                            {notif.unread && <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0 mt-1" />}
                          </div>
                          <span className="text-[10px] text-neutral-400 mt-1 block">
                            {notif.time}
                          </span>
                        </Link>)}
                    </div>

                    <div className="px-3 py-2 border-t border-neutral-100 bg-neutral-50 flex items-center justify-between text-[11px]">
                      <span className="text-neutral-500">সবসময় খেলাধুলার সাথে থাকুন</span>
                      <Link
    href="/live"
    onClick={() => setIsNotificationOpen(false)}
    className="text-emerald-700 font-bold hover:underline inline-flex items-center gap-0.5"
  >
                        লাইভ স্কোর <ChevronRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>}
              </div>

              {
    /* Theme Toggle Button */
  }
              <button
    type="button"
    onClick={toggleTheme}
    className="p-2 text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 rounded-xs transition-colors focus:outline-hidden focus:ring-1 focus:ring-neutral-400"
    aria-label={isDarkTheme ? "\u09B2\u09BE\u0987\u099F \u09AE\u09CB\u09A1 \u099A\u09BE\u09B2\u09C1 \u0995\u09B0\u09C1\u09A8" : "\u09A1\u09BE\u09B0\u09CD\u0995 \u09B0\u09BF\u09A1\u09BE\u09B0 \u09AE\u09CB\u09A1 \u099A\u09BE\u09B2\u09C1 \u0995\u09B0\u09C1\u09A8"}
    title={isDarkTheme ? "\u09B2\u09BE\u0987\u099F \u09AE\u09CB\u09A1" : "\u09A1\u09BE\u09B0\u09CD\u0995 \u09AE\u09CB\u09A1"}
  >
                {isDarkTheme ? <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-600" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {
    /* 3. Main Horizontal Navigation Bar */
  }
      <MainNavigation items={MAIN_NAVIGATION_ITEMS} />

      {
    /* 4. Mobile Drawer Menu */
  }
      <MobileMenu
    isOpen={isMobileMenuOpen}
    onClose={() => setIsMobileMenuOpen(false)}
    items={MAIN_NAVIGATION_ITEMS}
  />
    </header>;
};

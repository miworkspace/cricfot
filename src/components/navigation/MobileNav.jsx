'use client';
import { Link } from "../../router/Link";
import { X, Search } from "lucide-react";
export const MobileNav = ({ isOpen, onClose, items }) => {
  if (!isOpen) return null;
  return <div className="fixed inset-0 z-50 lg:hidden">
      {
    /* Backdrop */
  }
      <div
    className="fixed inset-0 bg-neutral-900/60 transition-opacity"
    onClick={onClose}
    aria-hidden="true"
  />

      {
    /* Drawer */
  }
      <div className="fixed inset-y-0 left-0 w-4/5 max-w-xs bg-white shadow-xl flex flex-col z-10 border-r border-neutral-200">
        {
    /* Drawer Header */
  }
        <div className="p-4 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold text-lg tracking-tight font-sans">
              <span className="text-neutral-900">CRIC</span>
              <span className="text-red-600">FOT</span>
            </span>
            <span className="text-[10px] text-neutral-500 uppercase tracking-widest pl-1 font-semibold">
              Sports
            </span>
          </div>
          <button
    onClick={onClose}
    className="p-1.5 text-neutral-500 hover:text-neutral-900 rounded-sm"
    aria-label="Close menu"
  >
            <X className="w-5 h-5" />
          </button>
        </div>

        {
    /* Search button in mobile drawer */
  }
        <div className="p-3 border-b border-neutral-200">
          <Link
    href="/search"
    onClick={onClose}
    className="flex items-center gap-2 w-full px-3 py-2 bg-neutral-100 text-neutral-600 text-xs font-medium rounded-xs border border-neutral-200"
  >
            <Search className="w-4 h-4 text-neutral-500" />
            <span>Search cricket & football news...</span>
          </Link>
        </div>

        {
    /* Navigation links */
  }
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-2">
            Main Sections
          </div>
          {items.map((item) => <Link
    key={item.href}
    href={item.href}
    exact={item.href === "/"}
    onClick={onClose}
    className="flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-neutral-800 hover:bg-neutral-100 rounded-xs transition-colors"
    activeClassName="bg-neutral-900 text-white hover:bg-neutral-900"
  >
              <span>{item.label}</span>
              {item.banglaLabel && <span className="text-xs font-normal opacity-70">{item.banglaLabel}</span>}
            </Link>)}

          <div className="pt-6">
            <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-2">
              Popular Topics
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
    { name: "Bangladesh Cricket", href: "/search?category=Bangladesh+Cricket" },
    { name: "Bangladesh Football", href: "/search?category=Bangladesh+Football" },
    { name: "BPL", href: "/search?category=BPL" },
    { name: "IPL", href: "/search?category=IPL" },
    { name: "Premier League", href: "/search?category=Premier+League" },
    { name: "Champions League", href: "/search?category=Champions+League" }
  ].map((topic) => <Link
    key={topic.name}
    href={topic.href}
    onClick={onClose}
    className="text-xs px-2.5 py-1 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-xs border border-neutral-200"
  >
                  {topic.name}
                </Link>)}
            </div>
          </div>
        </nav>

        {
    /* Drawer footer */
  }
        <div className="p-4 border-t border-neutral-200 bg-neutral-50 text-xs text-neutral-500">
          <p className="font-semibold text-neutral-800">CricFot Sports Media</p>
          <p className="text-[11px] mt-0.5">Cricket & Football, Live & Updated</p>
        </div>
      </div>
    </div>;
};

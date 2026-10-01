'use client';
import { useEffect, useRef } from "react";
import { Link } from "../../router/Link";
import { useRouter } from "../../router/RouterContext";
import { X, Search, ChevronRight, PlayCircle } from "lucide-react";
export const MobileMenu = ({ isOpen, onClose, items }) => {
  const { currentPath } = useRouter();
  const drawerRef = useRef(null);
  const closeButtonRef = useRef(null);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  return <div
    className="fixed inset-0 z-50 lg:hidden"
    role="dialog"
    aria-modal="true"
    aria-label="মোবাইল নেভিগেশন মেনু"
  >
      {
    /* Backdrop */
  }
      <div
    className="fixed inset-0 bg-neutral-950/60 backdrop-blur-xs transition-opacity duration-200"
    onClick={onClose}
    aria-hidden="true"
  />

      {
    /* Drawer */
  }
      <div
    ref={drawerRef}
    className="fixed inset-y-0 left-0 w-4/5 max-w-xs bg-white shadow-2xl flex flex-col z-10 border-r border-neutral-200 animate-in slide-in-from-left duration-200"
  >
        {
    /* Drawer Header */
  }
        <div className="p-4 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
          <Link
    href="/"
    onClick={onClose}
    className="flex items-center gap-1.5 focus:outline-hidden"
  >
            <div className="flex items-center gap-1">
              <span className="text-xl font-extrabold tracking-tight font-sans text-neutral-950">
                ক্রিক<span className="text-red-600">ফুট</span>
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 self-end mb-1" />
            </div>
            <span className="text-[10px] text-neutral-500 uppercase tracking-widest pl-1 font-semibold border-l border-neutral-300">
              CricFot
            </span>
          </Link>

          <button
    ref={closeButtonRef}
    onClick={onClose}
    className="p-2 text-neutral-600 hover:text-neutral-950 hover:bg-neutral-200/60 rounded-sm focus:outline-hidden focus:ring-2 focus:ring-neutral-900"
    aria-label="মেনু বন্ধ করুন"
  >
            <X className="w-5 h-5" />
          </button>
        </div>

        {
    /* Quick Search trigger button in drawer */
  }
        <div className="p-3 border-b border-neutral-200 bg-white">
          <Link
    href="/search"
    onClick={onClose}
    className="flex items-center gap-2.5 w-full px-3 py-2 bg-neutral-100 hover:bg-neutral-200/70 text-neutral-700 text-xs font-medium rounded-xs border border-neutral-200 transition-colors"
  >
            <Search className="w-4 h-4 text-neutral-500" />
            <span>খবর ও দল অনুসন্ধান করুন...</span>
          </Link>
        </div>

        {
    /* Navigation list */
  }
        <nav className="flex-1 overflow-y-auto p-3 space-y-1" aria-label="মোবাইল লিঙ্ক">
          <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 px-3 py-1">
            প্রধান বিভাগসমূহ
          </div>

          {items.map((item) => {
    const isHome = item.href === "/";
    const isActive = isHome ? currentPath === "/" : currentPath.startsWith(item.href);
    const isLive = item.href === "/live";
    const isCricket = item.sport === "cricket";
    const isFootball = item.sport === "football";
    const isVideos = item.href === "/videos";
    return <Link
      key={item.href}
      href={item.href}
      onClick={onClose}
      className={`flex items-center justify-between px-3 py-2.5 rounded-sm text-sm font-medium transition-colors ${isActive ? "bg-neutral-900 text-white font-bold" : "text-neutral-800 hover:bg-neutral-100"}`}
      aria-current={isActive ? "page" : void 0}
    >
                <div className="flex items-center gap-3">
                  {
      /* Visual Sport indicator */
    }
                  {isCricket && <span
      className={`w-2 h-2 rounded-full shrink-0 ${isActive ? "bg-emerald-400" : "bg-emerald-600"}`}
    />}
                  {isFootball && <span
      className={`w-2 h-2 rounded-full shrink-0 ${isActive ? "bg-blue-400" : "bg-blue-600"}`}
    />}
                  {isLive && <span className="relative flex h-2 w-2 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600" />
                    </span>}
                  {isVideos && <PlayCircle
      className={`w-4 h-4 shrink-0 ${isActive ? "text-white" : "text-neutral-400"}`}
    />}

                  <div>
                    <span>{item.banglaLabel}</span>
                    <span
      className={`ml-2 text-[11px] ${isActive ? "text-neutral-300" : "text-neutral-400"}`}
    >
                      {item.label}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {item.badge && <span
      className={`text-[10px] font-bold px-1.5 py-0.5 rounded-xs uppercase ${isActive ? "bg-white text-neutral-900" : "bg-red-600 text-white"}`}
    >
                      {item.badge}
                    </span>}
                  <ChevronRight
      className={`w-4 h-4 ${isActive ? "text-white" : "text-neutral-400"}`}
    />
                </div>
              </Link>;
  })}
        </nav>

        {
    /* Drawer Footer info */
  }
        <div className="p-4 border-t border-neutral-200 bg-neutral-50 text-xs text-neutral-500 space-y-2">
          <div className="flex items-center justify-between text-[11px]">
            <span className="font-semibold text-neutral-700">ক্রিকফুট ডিজিটাল স্পোর্টস</span>
            <span className="text-emerald-700 font-bold">ঢাকা সংস্করণ</span>
          </div>
          <p className="text-[10px] text-neutral-400 leading-tight">
            সর্বশেষ ক্রিকেট, ফুটবল ও লাইভ খেলার বস্তুনিষ্ঠ সংবাদ
          </p>
        </div>
      </div>
    </div>;
};

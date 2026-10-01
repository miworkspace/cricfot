'use client';
import { Link } from "../../router/Link";
import { useRouter } from "../../router/RouterContext";
import { Home, Radio, Trophy, Shield, Newspaper } from "lucide-react";
import { MOBILE_BOTTOM_NAV_ITEMS } from "../../config/navigation";
export const MobileBottomNav = () => {
  const { currentPath } = useRouter();
  const renderIcon = (iconName, isActive) => {
    const iconClass = `w-5 h-5 transition-transform duration-150 ${isActive ? "scale-110 text-emerald-700" : "text-neutral-500"}`;
    switch (iconName) {
      case "home":
        return <Home className={iconClass} />;
      case "live":
        return <div className="relative">
            <Radio className={iconClass} />
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600" />
            </span>
          </div>;
      case "cricket":
        return <Trophy className={iconClass} />;
      case "football":
        return <Shield className={iconClass} />;
      case "news":
        return <Newspaper className={iconClass} />;
      default:
        return <Home className={iconClass} />;
    }
  };
  return <nav
    className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-neutral-200 md:hidden shadow-lg safe-area-bottom"
    aria-label="মোবাইল বটম নেভিগেশন (Mobile Bottom Navigation)"
    id="mobile-bottom-nav"
  >
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto px-2">
        {MOBILE_BOTTOM_NAV_ITEMS.map((item, index) => {
    const isHome = item.icon === "home" && currentPath === "/";
    const isNews = item.icon === "news" && (currentPath === "/" || currentPath.startsWith("/news"));
    const isSpecificRoute = item.href !== "/" && currentPath.startsWith(item.href);
    const isActive = item.icon === "news" ? isNews : item.icon === "home" ? isHome : isSpecificRoute;
    return <Link
      key={`${item.label}-${index}`}
      href={item.href}
      className={`flex-1 flex flex-col items-center justify-center min-h-[44px] py-1 transition-colors rounded-xs focus:outline-hidden focus:ring-1 focus:ring-neutral-400 ${isActive ? "text-neutral-950 font-bold" : "text-neutral-600 hover:text-neutral-900"}`}
      aria-current={isActive ? "page" : void 0}
    >
              <div className="relative flex items-center justify-center mb-0.5">
                {renderIcon(item.icon, isActive)}
              </div>
              <span
      className={`text-[11px] leading-tight tracking-tight ${isActive ? "font-bold text-neutral-950" : "font-medium text-neutral-500"}`}
    >
                {item.banglaLabel}
              </span>
              {isActive && <div className="w-4 h-0.5 bg-neutral-900 rounded-full mt-0.5" />}
            </Link>;
  })}
      </div>
    </nav>;
};

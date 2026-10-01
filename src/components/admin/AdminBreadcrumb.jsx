import React from "react";
import { ChevronRight, Home } from "lucide-react";
import { Link } from "../../router/Link";
export const AdminBreadcrumb = ({ items }) => {
  return <nav className="flex items-center text-xs text-neutral-500 overflow-x-auto py-1 scrollbar-none">
      <Link
    href="/admin"
    className="flex items-center gap-1 hover:text-neutral-900 transition-colors shrink-0"
  >
        <Home className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Dashboard</span>
      </Link>
      {items.map((item, idx) => {
    const isLast = idx === items.length - 1;
    return <React.Fragment key={idx}>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-400 mx-1.5 shrink-0" />
            {isLast || !item.href ? <span className="font-semibold text-neutral-900 truncate max-w-[180px] sm:max-w-xs">
                {item.label}
              </span> : <Link
      href={item.href}
      className="hover:text-neutral-900 transition-colors shrink-0"
    >
                {item.label}
              </Link>}
          </React.Fragment>;
  })}
    </nav>;
};

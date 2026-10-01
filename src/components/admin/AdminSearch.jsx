'use client';
import { Search, X } from "lucide-react";
export const AdminSearch = ({
  value,
  onChange,
  placeholder = "Search...",
  className = ""
}) => {
  return <div className={`relative flex items-center ${className}`}>
      <Search className="w-4 h-4 text-neutral-400 absolute left-3 pointer-events-none" />
      <input
    type="text"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
    className="w-full pl-9 pr-8 py-2 text-sm bg-white border border-neutral-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all placeholder:text-neutral-400"
  />
      {value && <button
    type="button"
    onClick={() => onChange("")}
    className="absolute right-2.5 p-1 rounded-full text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 transition-colors"
  >
          <X className="w-3.5 h-3.5" />
        </button>}
    </div>;
};

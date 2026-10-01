import { Clock, ShieldAlert } from "lucide-react";
export const PlaceholderNotice = ({
  title,
  description,
  phaseNote = "Planned for Phase 2: Live Engine & Media Expansion",
  badge = "Foundation Phase",
  className = ""
}) => {
  return <div
    className={`border border-dashed border-neutral-300 bg-neutral-50/80 p-6 sm:p-8 text-center rounded-sm ${className}`}
  >
      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-neutral-200/80 text-neutral-700 text-xs font-semibold uppercase tracking-wider rounded-sm mb-3">
        <Clock className="w-3.5 h-3.5 text-neutral-600" />
        <span>{badge}</span>
      </div>
      <h3 className="text-base sm:text-lg font-bold text-neutral-800">{title}</h3>
      <p className="text-sm text-neutral-600 max-w-md mx-auto mt-1.5 mb-3">{description}</p>
      <div className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-500 bg-white border border-neutral-200 px-3 py-1.5 rounded-sm shadow-xs">
        <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
        <span>{phaseNote}</span>
      </div>
    </div>;
};

export const SportBadge = ({
  sport,
  size = "sm",
  showBangla = false,
  showIcon = true,
  className = ""
}) => {
  const isCricket = sport === "cricket";
  const baseClasses = isCricket ? "bg-emerald-50 text-emerald-800 border-emerald-300" : "bg-blue-50 text-blue-800 border-blue-300";
  const sizeClasses = size === "sm" ? "text-[11px] px-2 py-0.5" : "text-xs px-2.5 py-1 font-semibold";
  return <span
    className={`inline-flex items-center gap-1 font-medium uppercase tracking-wider border rounded-xs ${baseClasses} ${sizeClasses} ${className}`}
  >
      {showIcon && <span
    className={`w-1.5 h-1.5 rounded-full ${isCricket ? "bg-emerald-600" : "bg-blue-600"}`}
    aria-hidden="true"
  />}
      <span>{sport}</span>
      {showBangla && <span className="text-[10px] opacity-80 lowercase">
          ({isCricket ? "\u0995\u09CD\u09B0\u09BF\u0995\u09C7\u099F" : "\u09AB\u09C1\u099F\u09AC\u09B2"})
        </span>}
    </span>;
};

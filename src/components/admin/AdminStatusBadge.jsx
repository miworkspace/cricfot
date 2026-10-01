export const AdminStatusBadge = ({ status, size = "sm" }) => {
  const norm = status.toLowerCase();
  let styles = "bg-neutral-100 text-neutral-700 border-neutral-200";
  let label = status;
  if (norm === "published" || norm === "active" || norm === "success") {
    styles = "bg-emerald-50 text-emerald-700 border-emerald-200";
    label = norm === "published" ? "Published" : norm === "active" ? "Active" : "Success";
  } else if (norm === "draft" || norm === "idle") {
    styles = "bg-amber-50 text-amber-700 border-amber-200";
    label = norm === "draft" ? "Draft" : "Idle";
  } else if (norm === "scheduled" || norm === "upcoming") {
    styles = "bg-blue-50 text-blue-700 border-blue-200";
    label = norm === "scheduled" ? "Scheduled" : "Upcoming";
  } else if (norm === "pending" || norm === "pending_review") {
    styles = "bg-purple-50 text-purple-700 border-purple-200";
    label = "Pending Review";
  } else if (norm === "live") {
    styles = "bg-rose-50 text-rose-700 border-rose-300 font-bold animate-pulse";
    label = "LIVE";
  } else if (norm === "disabled" || norm === "inactive" || norm === "error") {
    styles = "bg-rose-50 text-rose-700 border-rose-200";
    label = norm === "disabled" ? "Disabled" : norm === "inactive" ? "Inactive" : "Error";
  } else if (norm === "finished") {
    styles = "bg-neutral-100 text-neutral-600 border-neutral-300";
    label = "Finished";
  }
  const sizeClass = size === "sm" ? "px-2 py-0.5 text-xs" : "px-2.5 py-1 text-sm font-medium";
  return <span className={`inline-flex items-center gap-1.5 font-medium rounded-full border ${styles} ${sizeClass}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
      <span>{label}</span>
    </span>;
};

'use client';
import { ChevronLeft, ChevronRight } from "lucide-react";
export const AdminPagination = ({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange
}) => {
  const startItem = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);
  if (totalItems === 0) return null;
  return <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 py-3 bg-white border-t border-neutral-200 text-xs text-neutral-500">
      <div>
        Showing <span className="font-semibold text-neutral-900">{startItem}</span> to{" "}
        <span className="font-semibold text-neutral-900">{endItem}</span> of{" "}
        <span className="font-semibold text-neutral-900">{totalItems}</span> results
      </div>

      <div className="flex items-center gap-1.5">
        <button
    type="button"
    disabled={currentPage <= 1}
    onClick={() => onPageChange(currentPage - 1)}
    className="p-1.5 rounded-md border border-neutral-200 text-neutral-700 hover:bg-neutral-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
    title="Previous page"
  >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {Array.from({ length: Math.min(totalPages, 5) }).map((_, i) => {
    const pageNum = i + 1;
    const isActive = pageNum === currentPage;
    return <button
      key={pageNum}
      type="button"
      onClick={() => onPageChange(pageNum)}
      className={`w-7 h-7 rounded-md text-xs font-medium transition-colors ${isActive ? "bg-neutral-900 text-white" : "text-neutral-700 border border-neutral-200 hover:bg-neutral-50"}`}
    >
              {pageNum}
            </button>;
  })}

        <button
    type="button"
    disabled={currentPage >= totalPages}
    onClick={() => onPageChange(currentPage + 1)}
    className="p-1.5 rounded-md border border-neutral-200 text-neutral-700 hover:bg-neutral-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
    title="Next page"
  >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>;
};

export const AdminPageHeader = ({
  title,
  banglaTitle,
  description,
  children
}) => {
  return <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 mb-6 border-b border-neutral-200">
      <div>
        <div className="flex items-center gap-2">
          <h1 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
            {title}
          </h1>
          {banglaTitle && <span className="text-sm font-medium text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded">
              {banglaTitle}
            </span>}
        </div>
        {description && <p className="mt-1 text-sm text-neutral-500 max-w-2xl">{description}</p>}
      </div>

      {children && <div className="flex items-center flex-wrap gap-2.5 shrink-0">
          {children}
        </div>}
    </div>;
};

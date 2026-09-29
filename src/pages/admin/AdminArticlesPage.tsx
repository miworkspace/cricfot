import React, { useState, useEffect } from 'react';
import {
  Plus,
  Edit,
  Eye,
  Copy,
  Trash2,
  CheckCircle,
  XCircle,
  Filter,
  Flame,
  Star,
  TrendingUp,
  FileText,
} from 'lucide-react';
import { AdminService } from '../../services/adminService';
import { AdminArticle } from '../../types/admin';
import { AdminPageHeader } from '../../components/admin/AdminPageHeader';
import { AdminSearch } from '../../components/admin/AdminSearch';
import { AdminPagination } from '../../components/admin/AdminPagination';
import { AdminStatusBadge } from '../../components/admin/AdminStatusBadge';
import { AdminConfirmDialog } from '../../components/admin/AdminConfirmDialog';
import { AdminEmptyState, AdminLoading } from '../../components/admin/AdminEmptyState';
import { useAdminToast } from '../../components/admin/AdminToast';
import { Link } from '../../router/Link';
import { useRouter } from '../../router/RouterContext';

export const AdminArticlesPage: React.FC = () => {
  const { navigate } = useRouter();
  const { showToast } = useAdminToast();

  const [articles, setArticles] = useState<AdminArticle[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  // Filters
  const [search, setSearch] = useState('');
  const [sportFilter, setSportFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  // Deletion modal
  const [deleteTarget, setDeleteTarget] = useState<AdminArticle | null>(null);
  const [previewArticle, setPreviewArticle] = useState<AdminArticle | null>(null);

  const loadArticles = async () => {
    setIsLoading(true);
    try {
      const data = await AdminService.getArticles({
        search,
        sport: sportFilter,
        status: statusFilter,
        page: currentPage,
        limit: 10,
      });
      setArticles(data.items);
      setTotalItems(data.total);
      setTotalPages(data.totalPages);
    } catch (err) {
      showToast('Failed to load articles', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadArticles();
  }, [search, sportFilter, statusFilter, currentPage]);

  const handleDuplicate = async (id: string) => {
    try {
      const copy = await AdminService.duplicateArticle(id);
      showToast('Article duplicated as draft');
      loadArticles();
    } catch (err) {
      showToast('Could not duplicate article', 'error');
    }
  };

  const handleTogglePublish = async (article: AdminArticle) => {
    try {
      const newStatus = article.status === 'published' ? 'draft' : 'published';
      await AdminService.updateArticle(article.id, { status: newStatus });
      showToast(newStatus === 'published' ? 'Article published!' : 'Moved to drafts');
      loadArticles();
    } catch (err) {
      showToast('Failed to update status', 'error');
    }
  };

  const handleDeleteConfirm = async () => {
    if (!deleteTarget) return;
    try {
      await AdminService.deleteArticle(deleteTarget.id);
      showToast('Article deleted successfully');
      setDeleteTarget(null);
      loadArticles();
    } catch (err) {
      showToast('Failed to delete article', 'error');
    }
  };

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Article Management"
        banglaTitle="নিবন্ধ ও সংবাদ ব্যবস্থাপনা"
        description="Write, curate, schedule, and publish sports reports across cricket and football desks."
      >
        <Link
          href="/admin/articles/new"
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-xs"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Create Article</span>
        </Link>
      </AdminPageHeader>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-xl border border-neutral-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="w-full md:w-80">
          <AdminSearch
            value={search}
            onChange={(val) => {
              setSearch(val);
              setCurrentPage(1);
            }}
            placeholder="Search by headline or tags..."
          />
        </div>

        <div className="flex items-center gap-2.5 w-full md:w-auto flex-wrap">
          {/* Sport Filter */}
          <select
            value={sportFilter}
            onChange={(e) => {
              setSportFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="px-3 py-2 text-xs font-medium bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-700 focus:bg-white focus:outline-hidden"
          >
            <option value="all">All Sports (সকল খেলা)</option>
            <option value="cricket">Cricket (ক্রিকেট)</option>
            <option value="football">Football (ফুটবল)</option>
          </select>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="px-3 py-2 text-xs font-medium bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-700 focus:bg-white focus:outline-hidden"
          >
            <option value="all">All Statuses (সব অবস্থা)</option>
            <option value="published">Published (প্রকাশিত)</option>
            <option value="draft">Drafts (খসড়া)</option>
            <option value="scheduled">Scheduled (নির্ধারিত)</option>
          </select>
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-xl border border-neutral-200/80 overflow-hidden shadow-xs">
        {isLoading ? (
          <AdminLoading message="Retrieving editorial articles..." />
        ) : articles.length === 0 ? (
          <AdminEmptyState
            icon={FileText}
            title="No articles found"
            description="Try changing your search terms or filters, or write a new article."
            actionLabel="Create First Article"
            onAction={() => navigate('/admin/articles/new')}
          />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-neutral-50 border-b border-neutral-200 text-neutral-500 font-semibold uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="py-3 px-4 w-12">Photo</th>
                  <th className="py-3 px-3">Headline</th>
                  <th className="py-3 px-3">Sport</th>
                  <th className="py-3 px-3">Category</th>
                  <th className="py-3 px-3">Author</th>
                  <th className="py-3 px-3">Flags</th>
                  <th className="py-3 px-3">Status</th>
                  <th className="py-3 px-3">Published Date</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {articles.map((art) => (
                  <tr key={art.id} className="hover:bg-neutral-50/80 transition-colors">
                    {/* Thumbnail */}
                    <td className="py-3 px-4">
                      <div className="w-10 h-10 rounded-md overflow-hidden bg-neutral-100 border border-neutral-200 shrink-0">
                        {art.image?.url ? (
                          <img
                            src={art.image.url}
                            alt={art.title}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-neutral-300">
                            <FileText className="w-4 h-4" />
                          </div>
                        )}
                      </div>
                    </td>

                    {/* Title */}
                    <td className="py-3 px-3 max-w-sm">
                      <Link
                        href={`/admin/articles/${art.id}`}
                        className="font-semibold text-neutral-900 hover:text-emerald-700 line-clamp-1"
                      >
                        {art.title}
                      </Link>
                      <p className="text-[11px] text-neutral-400 line-clamp-1 font-mono">
                        /news/{art.slug}
                      </p>
                    </td>

                    {/* Sport */}
                    <td className="py-3 px-3">
                      <span className="capitalize font-semibold text-neutral-700">
                        {art.sport}
                      </span>
                    </td>

                    {/* Category */}
                    <td className="py-3 px-3 text-neutral-600 truncate max-w-[120px]">
                      {art.category}
                    </td>

                    {/* Author */}
                    <td className="py-3 px-3 text-neutral-600 truncate max-w-[120px]">
                      {art.authorBanglaName || art.authorName}
                    </td>

                    {/* Flags */}
                    <td className="py-3 px-3">
                      <div className="flex items-center gap-1 text-neutral-400">
                        {art.breaking && (
                          <span title="Breaking News Ticker">
                            <Flame className="w-3.5 h-3.5 text-rose-600" />
                          </span>
                        )}
                        {art.featured && (
                          <span title="Featured Story">
                            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                          </span>
                        )}
                        {art.trending && (
                          <span title="Trending Ranking">
                            <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
                          </span>
                        )}
                        {!art.breaking && !art.featured && !art.trending && (
                          <span className="text-[11px] text-neutral-300">—</span>
                        )}
                      </div>
                    </td>

                    {/* Status */}
                    <td className="py-3 px-3">
                      <AdminStatusBadge status={art.status} />
                    </td>

                    {/* Published Date */}
                    <td className="py-3 px-3 text-neutral-500 text-[11px]">
                      {new Date(art.publishedAt).toLocaleDateString()}
                    </td>

                    {/* Actions */}
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <Link
                          href={`/admin/articles/${art.id}`}
                          className="p-1.5 rounded hover:bg-neutral-100 text-neutral-500 hover:text-neutral-900"
                          title="Edit Article"
                        >
                          <Edit className="w-3.5 h-3.5" />
                        </Link>

                        <button
                          type="button"
                          onClick={() => setPreviewArticle(art)}
                          className="p-1.5 rounded hover:bg-neutral-100 text-neutral-500 hover:text-neutral-900"
                          title="Quick Preview"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>

                        <button
                          type="button"
                          onClick={() => handleDuplicate(art.id)}
                          className="p-1.5 rounded hover:bg-neutral-100 text-neutral-500 hover:text-neutral-900"
                          title="Duplicate Article"
                        >
                          <Copy className="w-3.5 h-3.5" />
                        </button>

                        <button
                          type="button"
                          onClick={() => handleTogglePublish(art)}
                          className="p-1.5 rounded hover:bg-neutral-100 text-neutral-500 hover:text-neutral-900"
                          title={art.status === 'published' ? 'Unpublish to Draft' : 'Publish Article'}
                        >
                          {art.status === 'published' ? (
                            <XCircle className="w-3.5 h-3.5 text-amber-600" />
                          ) : (
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                          )}
                        </button>

                        <button
                          type="button"
                          onClick={() => setDeleteTarget(art)}
                          className="p-1.5 rounded hover:bg-rose-50 text-neutral-400 hover:text-rose-600"
                          title="Delete Article"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <AdminPagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={totalItems}
          itemsPerPage={10}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>

      {/* Confirmation Dialog */}
      <AdminConfirmDialog
        isOpen={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDeleteConfirm}
        title="Delete Article"
        message={`Are you sure you want to permanently delete "${deleteTarget?.title}"? This action cannot be undone.`}
        confirmText="Delete Story"
        variant="danger"
      />

      {/* Quick Preview Modal */}
      {previewArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-xs">
          <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl p-6 max-h-[85vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-4 pb-3 border-b border-neutral-200">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  {previewArticle.sport} • {previewArticle.category}
                </span>
                <h3 className="text-lg font-bold font-serif-headline text-neutral-900 mt-2">
                  {previewArticle.title}
                </h3>
              </div>
              <button
                onClick={() => setPreviewArticle(null)}
                className="text-xs font-semibold px-2 py-1 bg-neutral-100 rounded"
              >
                Close
              </button>
            </div>

            {previewArticle.image?.url && (
              <img
                src={previewArticle.image.url}
                alt={previewArticle.title}
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
            )}

            <p className="text-xs text-neutral-500 font-semibold mb-2">
              By {previewArticle.authorBanglaName || previewArticle.authorName} •{' '}
              {new Date(previewArticle.publishedAt).toLocaleDateString()}
            </p>

            <div className="text-sm text-neutral-800 leading-relaxed whitespace-pre-line">
              {previewArticle.content || previewArticle.excerpt}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

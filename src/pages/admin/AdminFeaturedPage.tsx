import React, { useState, useEffect } from 'react';
import { Star, ArrowUp, ArrowDown, Trash2, Plus, ExternalLink, Edit } from 'lucide-react';
import { AdminService } from '../../services/adminService';
import { AdminArticle } from '../../types/admin';
import { AdminPageHeader } from '../../components/admin/AdminPageHeader';
import { AdminEmptyState, AdminLoading } from '../../components/admin/AdminEmptyState';
import { useAdminToast } from '../../components/admin/AdminToast';
import { Link } from '../../router/Link';

export const AdminFeaturedPage: React.FC = () => {
  const { showToast } = useAdminToast();
  const [featuredArticles, setFeaturedArticles] = useState<AdminArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const data = await AdminService.getArticles({ limit: 50 });
      setFeaturedArticles(data.items.filter((a) => a.featured));
    } catch (err) {
      showToast('Failed to load featured articles', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleRemoveFeatured = async (article: AdminArticle) => {
    try {
      await AdminService.updateArticle(article.id, { featured: false });
      showToast('Removed from featured stories');
      loadData();
    } catch (err) {
      showToast('Failed to update article', 'error');
    }
  };

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Featured News Curation"
        banglaTitle="ফিচার্ড ও প্রধান সংবাদ কিউরেশন"
        description="Select and order lead top-stories, homepage spotlight reports, and hero lead positions."
      >
        <Link
          href="/admin/articles"
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-xs"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Pick More Articles</span>
        </Link>
      </AdminPageHeader>

      <div className="bg-white rounded-xl border border-neutral-200/80 overflow-hidden shadow-xs">
        {isLoading ? (
          <AdminLoading message="Loading featured news line-up..." />
        ) : featuredArticles.length === 0 ? (
          <AdminEmptyState
            icon={Star}
            title="No featured articles selected"
            description="Edit any article and toggle 'Featured on Homepage' to slot it into top positions."
            actionLabel="Browse Articles"
            onAction={() => (window.location.href = '/admin/articles')}
          />
        ) : (
          <div className="divide-y divide-neutral-100">
            {featuredArticles.map((art, index) => (
              <div
                key={art.id}
                className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-neutral-50/80 transition-colors"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 font-black text-xs flex items-center justify-center shrink-0">
                    #{index + 1}
                  </div>

                  <div className="w-16 h-12 rounded-lg bg-neutral-100 overflow-hidden shrink-0 border border-neutral-200">
                    <img
                      src={art.image?.url}
                      alt={art.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.2 rounded-full bg-neutral-100 text-neutral-700">
                        {art.sport} • {art.category}
                      </span>
                      {index === 0 && (
                        <span className="text-[10px] font-bold uppercase px-2 py-0.2 rounded-full bg-emerald-100 text-emerald-800">
                          Lead Hero Story
                        </span>
                      )}
                    </div>
                    <h4 className="text-sm font-bold text-neutral-900 line-clamp-1 mt-1">
                      {art.title}
                    </h4>
                    <p className="text-xs text-neutral-500">
                      By {art.authorBanglaName || art.authorName} • {new Date(art.publishedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                  <Link
                    href={`/admin/articles/${art.id}`}
                    className="p-1.5 rounded-lg border border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 text-xs font-semibold flex items-center gap-1"
                  >
                    <Edit className="w-3.5 h-3.5" />
                    <span>Edit</span>
                  </Link>

                  <button
                    type="button"
                    onClick={() => handleRemoveFeatured(art)}
                    className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50 text-xs font-semibold flex items-center gap-1"
                    title="Remove from featured"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Unfeature</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

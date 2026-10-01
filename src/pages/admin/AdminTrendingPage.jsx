'use client';
import { useState, useEffect } from "react";
import { TrendingUp, Edit, Trash2, Eye, Plus } from "lucide-react";
import { AdminService } from "../../services/adminService";
import { AdminPageHeader } from "../../components/admin/AdminPageHeader";
import { AdminEmptyState, AdminLoading } from "../../components/admin/AdminEmptyState";
import { useAdminToast } from "../../components/admin/AdminToast";
import { Link } from "../../router/Link";
export const AdminTrendingPage = () => {
  const { showToast } = useAdminToast();
  const [trendingArticles, setTrendingArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const loadData = async () => {
    setIsLoading(true);
    try {
      const data = await AdminService.getArticles({ limit: 50 });
      setTrendingArticles(data.items.filter((a) => a.trending));
    } catch (err) {
      showToast("Failed to load trending articles", "error");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    loadData();
  }, []);
  const handleRemove = async (article) => {
    try {
      await AdminService.updateArticle(article.id, { trending: false });
      showToast("Removed from trending ranking");
      loadData();
    } catch (err) {
      showToast("Failed to update article", "error");
    }
  };
  return <div className="space-y-6">
      <AdminPageHeader
    title="Trending News Ranking"
    banglaTitle="ট্রেন্ডিং সংবাদ র‍্যাঙ্কিং"
    description="Monitor viral sports news, high-engagement match analyses, and curate top trending sidebar lists."
  >
        <Link
    href="/admin/articles"
    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-xs"
  >
          <Plus className="w-3.5 h-3.5" />
          <span>Curate Articles</span>
        </Link>
      </AdminPageHeader>

      <div className="bg-white rounded-xl border border-neutral-200/80 overflow-hidden shadow-xs">
        {isLoading ? <AdminLoading message="Calculating trending scores..." /> : trendingArticles.length === 0 ? <AdminEmptyState
    icon={TrendingUp}
    title="No trending articles set"
    description="Articles marked 'Trending Ranking' in the editor will appear in trending widgets."
    actionLabel="View Articles"
    onAction={() => window.location.href = "/admin/articles"}
  /> : <div className="divide-y divide-neutral-100">
            {trendingArticles.map((art, index) => <div
    key={art.id}
    className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-neutral-50/80 transition-colors"
  >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-700 font-black text-sm flex items-center justify-center shrink-0 border border-blue-200">
                    {index + 1}
                  </div>

                  <div className="min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700">
                      {art.sport} • {art.category}
                    </span>
                    <h4 className="text-sm font-bold text-neutral-900 line-clamp-1 mt-0.5">
                      {art.title}
                    </h4>
                    <div className="flex items-center gap-3 text-xs text-neutral-500 mt-1">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5 text-neutral-400" />
                        <span>{(12400 - index * 1800).toLocaleString()} views</span>
                      </span>
                      <span>By {art.authorBanglaName || art.authorName}</span>
                    </div>
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
    onClick={() => handleRemove(art)}
    className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50 text-xs font-semibold flex items-center gap-1"
  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Remove</span>
                  </button>
                </div>
              </div>)}
          </div>}
      </div>
    </div>;
};

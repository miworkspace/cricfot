'use client';
import { useState, useEffect } from "react";
import {
  FileText,
  Eye,
  Users,
  Radio,
  Clock,
  Plus,
  ArrowRight,
  CheckCircle2,
  Trophy
} from "lucide-react";
import { AdminService } from "../../services/adminService";
import { AdminStatCard } from "../../components/admin/AdminStatCard";
import { AdminPageHeader } from "../../components/admin/AdminPageHeader";
import { AdminStatusBadge } from "../../components/admin/AdminStatusBadge";
import { AdminLoading } from "../../components/admin/AdminEmptyState";
import { Link } from "../../router/Link";
export const AdminDashboardPage = () => {
  const [stats, setStats] = useState(null);
  const [recentArticles, setRecentArticles] = useState([]);
  const [liveMatches, setLiveMatches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function loadDashboard() {
      try {
        const [dashStats, articlesData, matchesData] = await Promise.all([
          AdminService.getDashboardStats(),
          AdminService.getArticles({ limit: 5 }),
          AdminService.getMatches()
        ]);
        setStats(dashStats);
        setRecentArticles(articlesData.items);
        setLiveMatches(matchesData);
      } catch (err) {
        console.error("Error loading dashboard stats:", err);
      } finally {
        setIsLoading(false);
      }
    }
    loadDashboard();
  }, []);
  if (isLoading || !stats) {
    return <AdminLoading message="Loading CricFot newsroom dashboard..." />;
  }
  return <div className="space-y-6">
      <AdminPageHeader
    title="Editorial Dashboard"
    banglaTitle="নিউজরুম ড্যাশবোর্ড"
    description="Comprehensive real-time overview of CricFot sports journalism, live match statuses, publication workflows and reader engagement."
  >
        <Link
    href="/admin/articles/new"
    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-xs"
  >
          <Plus className="w-3.5 h-3.5" />
          <span>New Article</span>
        </Link>
      </AdminPageHeader>

      {
    /* Top 6 Stat Cards */
  }
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4">
        <AdminStatCard
    title="Total Articles"
    value={stats.totalArticles}
    icon={FileText}
    change="+8 this week"
    color="emerald"
  />
        <AdminStatCard
    title="Published"
    value={stats.publishedArticles}
    icon={CheckCircle2}
    color="emerald"
    change="89% active"
  />
        <AdminStatCard
    title="Drafts"
    value={stats.draftArticles}
    icon={Clock}
    color="amber"
    description="In review"
  />
        <AdminStatCard
    title="Today's Views"
    value={stats.todayViews.toLocaleString()}
    icon={Eye}
    color="blue"
    change="+14.2%"
  />
        <AdminStatCard
    title="Editorial Users"
    value={stats.totalUsers}
    icon={Users}
    color="purple"
    description="Staff reporters"
  />
        <AdminStatCard
    title="Live Matches"
    value={stats.liveMatchesCount}
    icon={Radio}
    color="rose"
    description="Active coverage"
  />
      </div>

      {
    /* Two Columns: Content Workflow & Live Matches Monitor */
  }
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {
    /* Left Column (8 cols): Recent Articles Table */
  }
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-xl border border-neutral-200/80 overflow-hidden shadow-xs">
            <div className="p-4 sm:p-5 border-b border-neutral-200 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-neutral-900">Recent Articles</h3>
                <p className="text-xs text-neutral-500">Latest news stories and reporting drafts</p>
              </div>
              <Link
    href="/admin/articles"
    className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
  >
                <span>View all</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-neutral-50 border-b border-neutral-200 text-neutral-500 font-semibold uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="py-3 px-4">Headline</th>
                    <th className="py-3 px-3">Sport</th>
                    <th className="py-3 px-3">Category</th>
                    <th className="py-3 px-3">Author</th>
                    <th className="py-3 px-3">Status</th>
                    <th className="py-3 px-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {recentArticles.map((article) => <tr key={article.id} className="hover:bg-neutral-50/80 transition-colors">
                      <td className="py-3 px-4 max-w-xs">
                        <Link
    href={`/admin/articles/${article.id}`}
    className="font-medium text-neutral-900 hover:text-emerald-700 line-clamp-1"
  >
                          {article.title}
                        </Link>
                        <span className="text-[11px] text-neutral-400 line-clamp-1">
                          {new Date(article.publishedAt).toLocaleDateString()}
                        </span>
                      </td>
                      <td className="py-3 px-3">
                        <span className="capitalize font-semibold text-neutral-700">
                          {article.sport}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-neutral-600 truncate max-w-[120px]">
                        {article.category}
                      </td>
                      <td className="py-3 px-3 text-neutral-600 truncate max-w-[120px]">
                        {article.authorBanglaName || article.authorName}
                      </td>
                      <td className="py-3 px-3">
                        <AdminStatusBadge status={article.status} />
                      </td>
                      <td className="py-3 px-3 text-right">
                        <Link
    href={`/admin/articles/${article.id}`}
    className="font-semibold text-emerald-700 hover:text-emerald-800"
  >
                          Edit
                        </Link>
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {
    /* Right Column (4 cols): Live Sports Hub & Quick Actions */
  }
        <div className="lg:col-span-4 space-y-6">
          {
    /* Content Pipeline Status */
  }
          <div className="bg-white rounded-xl border border-neutral-200/80 p-5 shadow-xs">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
              Editorial Pipeline
            </h3>
            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 text-neutral-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Published Stories
                </span>
                <span className="font-bold text-neutral-900">{stats.statusCounts.published}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 text-neutral-700">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  Drafts in Progress
                </span>
                <span className="font-bold text-neutral-900">{stats.statusCounts.draft}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 text-neutral-700">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  Scheduled Releases
                </span>
                <span className="font-bold text-neutral-900">{stats.statusCounts.scheduled}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 text-neutral-700">
                  <span className="w-2 h-2 rounded-full bg-purple-500" />
                  Pending Review
                </span>
                <span className="font-bold text-neutral-900">{stats.statusCounts.pendingReview}</span>
              </div>
            </div>
          </div>

          {
    /* Live Matches Quick Monitor */
  }
          <div className="bg-white rounded-xl border border-neutral-200/80 p-5 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1.5">
                <Trophy className="w-4 h-4 text-emerald-600" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                  Matches & Scores
                </h3>
              </div>
              <Link
    href="/admin/matches"
    className="text-xs font-semibold text-emerald-700 hover:text-emerald-800"
  >
                Manage
              </Link>
            </div>

            <div className="space-y-3">
              {liveMatches.slice(0, 3).map((match) => <div
    key={match.id}
    className="p-3 rounded-lg bg-neutral-50 border border-neutral-200/80 text-xs space-y-1.5"
  >
                  <div className="flex items-center justify-between text-[11px] text-neutral-500">
                    <span className="truncate font-semibold">{match.competition}</span>
                    <AdminStatusBadge status={match.status} size="sm" />
                  </div>
                  <div className="flex items-center justify-between font-bold text-neutral-900">
                    <span>{match.homeTeam.banglaName || match.homeTeam.name}</span>
                    <span className="text-emerald-700">{match.homeTeam.score || "\u2014"}</span>
                  </div>
                  <div className="flex items-center justify-between font-bold text-neutral-900">
                    <span>{match.awayTeam.banglaName || match.awayTeam.name}</span>
                    <span className="text-emerald-700">{match.awayTeam.score || "\u2014"}</span>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </div>;
};

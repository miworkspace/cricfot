import React, { useState, useEffect } from 'react';
import { CircleDot, Plus, Calendar, Trophy, Users, FileText, ArrowRight } from 'lucide-react';
import { AdminService } from '../../services/adminService';
import { AdminArticle, AdminMatch, AdminTeam } from '../../types/admin';
import { AdminPageHeader } from '../../components/admin/AdminPageHeader';
import { AdminStatCard } from '../../components/admin/AdminStatCard';
import { AdminStatusBadge } from '../../components/admin/AdminStatusBadge';
import { AdminLoading } from '../../components/admin/AdminEmptyState';
import { Link } from '../../router/Link';

export const AdminCricketPage: React.FC = () => {
  const [articles, setArticles] = useState<AdminArticle[]>([]);
  const [matches, setMatches] = useState<AdminMatch[]>([]);
  const [teams, setTeams] = useState<AdminTeam[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadCricketData() {
      setIsLoading(true);
      try {
        const [arts, matchData, teamData] = await Promise.all([
          AdminService.getArticles({ sport: 'cricket', limit: 8 }),
          AdminService.getMatches({ sport: 'cricket' }),
          AdminService.getTeams('cricket'),
        ]);
        setArticles(arts.items);
        setMatches(matchData);
        setTeams(teamData);
      } finally {
        setIsLoading(false);
      }
    }
    loadCricketData();
  }, []);

  if (isLoading) return <AdminLoading message="Loading Cricket Newsroom Hub..." />;

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Cricket Desk Management"
        banglaTitle="ক্রিকেট ডেস্ক ও হাব"
        description="Oversee Bangladesh national team coverage, BPL, ICC tournaments, Test series and ball-by-ball editorial feeds."
      >
        <Link
          href="/admin/articles/new"
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-xs"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>New Cricket Story</span>
        </Link>
      </AdminPageHeader>

      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <AdminStatCard
          title="Cricket Articles"
          value={articles.length}
          icon={FileText}
          color="emerald"
          description="Stories published & drafts"
        />
        <AdminStatCard
          title="Scheduled Matches"
          value={matches.length}
          icon={Calendar}
          color="blue"
          description="International & BPL fixtures"
        />
        <AdminStatCard
          title="Registered Teams"
          value={teams.length}
          icon={Users}
          color="purple"
          description="National sides & franchises"
        />
      </div>

      {/* Two columns: Fixtures & Latest Cricket Stories */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Articles */}
        <div className="lg:col-span-8 bg-white rounded-xl border border-neutral-200/80 p-5 shadow-xs">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-200">
            <h3 className="text-sm font-bold text-neutral-900">Latest Cricket Stories</h3>
            <Link href="/admin/articles" className="text-xs font-semibold text-emerald-700">
              View All
            </Link>
          </div>
          <div className="divide-y divide-neutral-100">
            {articles.map((art) => (
              <div key={art.id} className="py-3 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <span className="text-[10px] font-bold uppercase text-emerald-700">
                    {art.category}
                  </span>
                  <h4 className="text-xs font-semibold text-neutral-900 truncate mt-0.5">
                    {art.title}
                  </h4>
                  <span className="text-[11px] text-neutral-400">
                    By {art.authorBanglaName || art.authorName}
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <AdminStatusBadge status={art.status} size="sm" />
                  <Link
                    href={`/admin/articles/${art.id}`}
                    className="text-xs font-semibold text-emerald-700 hover:underline"
                  >
                    Edit
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Matches */}
        <div className="lg:col-span-4 bg-white rounded-xl border border-neutral-200/80 p-5 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-neutral-200">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
              Cricket Matches
            </h3>
            <Link href="/admin/matches" className="text-xs font-semibold text-emerald-700">
              Manage
            </Link>
          </div>

          <div className="space-y-3">
            {matches.map((m) => (
              <div key={m.id} className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 text-xs">
                <div className="flex justify-between items-center mb-1 text-[11px] text-neutral-500">
                  <span>{m.competition}</span>
                  <AdminStatusBadge status={m.status} size="sm" />
                </div>
                <div className="font-bold text-neutral-900 flex justify-between">
                  <span>{m.homeTeam.banglaName || m.homeTeam.name}</span>
                  <span className="text-emerald-700">{m.homeTeam.score || '—'}</span>
                </div>
                <div className="font-bold text-neutral-900 flex justify-between">
                  <span>{m.awayTeam.banglaName || m.awayTeam.name}</span>
                  <span className="text-emerald-700">{m.awayTeam.score || '—'}</span>
                </div>
                {m.venue && (
                  <p className="text-[10px] text-neutral-400 mt-1 truncate">{m.venue}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

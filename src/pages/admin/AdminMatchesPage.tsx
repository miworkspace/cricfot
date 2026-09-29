import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Calendar, Radio, Trophy, Check } from 'lucide-react';
import { AdminService } from '../../services/adminService';
import { AdminMatch, MatchStatus } from '../../types/admin';
import { AdminPageHeader } from '../../components/admin/AdminPageHeader';
import { AdminStatusBadge } from '../../components/admin/AdminStatusBadge';
import { AdminModal } from '../../components/admin/AdminModal';
import { AdminConfirmDialog } from '../../components/admin/AdminConfirmDialog';
import { AdminEmptyState, AdminLoading } from '../../components/admin/AdminEmptyState';
import { useAdminToast } from '../../components/admin/AdminToast';

export const AdminMatchesPage: React.FC = () => {
  const { showToast } = useAdminToast();
  const [matches, setMatches] = useState<AdminMatch[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sportFilter, setSportFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMatch, setEditingMatch] = useState<AdminMatch | null>(null);

  const [sport, setSport] = useState<'cricket' | 'football'>('cricket');
  const [competition, setCompetition] = useState('Sri Lanka Tour of Bangladesh');
  const [homeTeam, setHomeTeam] = useState('Bangladesh');
  const [homeTeamBangla, setHomeTeamBangla] = useState('বাংলাদেশ');
  const [homeScore, setHomeScore] = useState('312/6 (84.2 ov)');
  const [awayTeam, setAwayTeam] = useState('Sri Lanka');
  const [awayTeamBangla, setAwayTeamBangla] = useState('শ্রীলঙ্কা');
  const [awayScore, setAwayScore] = useState('280');
  const [status, setStatus] = useState<MatchStatus>('live');
  const [statusText, setStatusText] = useState('Bangladesh lead by 32 runs');
  const [venue, setVenue] = useState('Sher-e-Bangla National Cricket Stadium, Mirpur');
  const [scheduledAt, setScheduledAt] = useState('2026-03-30T10:00:00Z');

  const [deleteTarget, setDeleteTarget] = useState<AdminMatch | null>(null);

  const loadMatches = async () => {
    setIsLoading(true);
    try {
      const data = await AdminService.getMatches({
        sport: sportFilter === 'all' ? undefined : sportFilter,
        status: statusFilter === 'all' ? undefined : statusFilter,
      });
      setMatches(data);
    } catch (err) {
      showToast('Failed to load matches', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadMatches();
  }, [sportFilter, statusFilter]);

  const openAdd = () => {
    setEditingMatch(null);
    setSport('cricket');
    setCompetition('ICC Champions Trophy');
    setHomeTeam('Bangladesh');
    setHomeTeamBangla('বাংলাদেশ');
    setHomeScore('');
    setAwayTeam('India');
    setAwayTeamBangla('ভারত');
    setAwayScore('');
    setStatus('upcoming');
    setStatusText('Starts at 2:00 PM BST');
    setVenue('Mirpur Stadium, Dhaka');
    setScheduledAt(new Date().toISOString());
    setIsModalOpen(true);
  };

  const openEdit = (m: AdminMatch) => {
    setEditingMatch(m);
    setSport(m.sport);
    setCompetition(m.competition);
    setHomeTeam(m.homeTeam.name);
    setHomeTeamBangla(m.homeTeam.banglaName || '');
    setHomeScore(m.homeTeam.score || '');
    setAwayTeam(m.awayTeam.name);
    setAwayTeamBangla(m.awayTeam.banglaName || '');
    setAwayScore(m.awayTeam.score || '');
    setStatus(m.status);
    setStatusText(m.statusText || '');
    setVenue(m.venue || '');
    setScheduledAt(m.scheduledAt || '');
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload: Partial<AdminMatch> = {
        sport,
        competition,
        homeTeam: {
          id: 'team-home',
          name: homeTeam,
          banglaName: homeTeamBangla,
          score: homeScore,
        },
        awayTeam: {
          id: 'team-away',
          name: awayTeam,
          banglaName: awayTeamBangla,
          score: awayScore,
        },
        status,
        statusText,
        venue,
        scheduledAt,
      };

      if (editingMatch) {
        await AdminService.updateMatch(editingMatch.id, payload);
        showToast('Match record updated!');
      } else {
        await AdminService.createMatch(payload as any);
        showToast('New match added!');
      }
      setIsModalOpen(false);
      loadMatches();
    } catch (err) {
      showToast('Failed to save match', 'error');
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    try {
      await AdminService.deleteMatch(deleteTarget.id);
      showToast('Match removed');
      setDeleteTarget(null);
      loadMatches();
    } catch (err) {
      showToast('Failed to delete match', 'error');
    }
  };

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Match Schedule & Score Centre"
        banglaTitle="ম্যাচ সময়সূচি ও স্কোর ব্যবস্থাপনা"
        description="Schedule fixtures, configure live score displays, input scores and post-match results."
      >
        <button
          type="button"
          onClick={openAdd}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-xs"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Match</span>
        </button>
      </AdminPageHeader>

      <div className="bg-white p-4 rounded-xl border border-neutral-200/80 shadow-xs flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2">
          <select
            value={sportFilter}
            onChange={(e) => setSportFilter(e.target.value)}
            className="px-3 py-2 text-xs bg-neutral-50 border border-neutral-200 rounded-lg"
          >
            <option value="all">All Sports</option>
            <option value="cricket">Cricket</option>
            <option value="football">Football</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 text-xs bg-neutral-50 border border-neutral-200 rounded-lg"
          >
            <option value="all">All Statuses</option>
            <option value="live">Live Matches</option>
            <option value="upcoming">Upcoming</option>
            <option value="finished">Finished</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-neutral-200/80 overflow-hidden shadow-xs">
        {isLoading ? (
          <AdminLoading message="Loading fixtures and scorecards..." />
        ) : matches.length === 0 ? (
          <AdminEmptyState
            icon={Trophy}
            title="No matches found"
            description="Create matches to populate the public live score ticker and match centres."
            actionLabel="Schedule Match"
            onAction={openAdd}
          />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-neutral-50 border-b border-neutral-200 text-neutral-500 font-semibold uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="py-3 px-4">Matchup</th>
                  <th className="py-3 px-3">Sport & Tournament</th>
                  <th className="py-3 px-3">Live Score</th>
                  <th className="py-3 px-3">Status</th>
                  <th className="py-3 px-3">Venue</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {matches.map((m) => (
                  <tr key={m.id} className="hover:bg-neutral-50/80 transition-colors">
                    <td className="py-3 px-4">
                      <div className="font-bold text-neutral-900 text-sm">
                        {m.homeTeam.banglaName || m.homeTeam.name} vs{' '}
                        {m.awayTeam.banglaName || m.awayTeam.name}
                      </div>
                      <div className="text-[11px] text-neutral-400">
                        {m.homeTeam.name} vs {m.awayTeam.name}
                      </div>
                    </td>

                    <td className="py-3 px-3">
                      <span className="capitalize font-semibold text-neutral-700">
                        {m.sport}
                      </span>
                      <p className="text-[11px] text-neutral-500">{m.competition}</p>
                    </td>

                    <td className="py-3 px-3 font-semibold text-neutral-900">
                      <div>
                        {m.homeTeam.name}: {m.homeTeam.score || '—'}
                      </div>
                      <div>
                        {m.awayTeam.name}: {m.awayTeam.score || '—'}
                      </div>
                      {m.statusText && (
                        <span className="text-[10px] text-emerald-700 font-medium block mt-0.5">
                          {m.statusText}
                        </span>
                      )}
                    </td>

                    <td className="py-3 px-3">
                      <AdminStatusBadge status={m.status} />
                    </td>

                    <td className="py-3 px-3 text-neutral-500 text-[11px] max-w-xs truncate">
                      {m.venue || 'TBD'}
                    </td>

                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          type="button"
                          onClick={() => openEdit(m)}
                          className="px-2.5 py-1 rounded text-xs font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200"
                        >
                          Update Score
                        </button>
                        <button
                          type="button"
                          onClick={() => setDeleteTarget(m)}
                          className="p-1 hover:text-rose-600 rounded text-neutral-400"
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
      </div>

      {/* Edit Match Modal */}
      <AdminModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingMatch ? 'Update Match & Live Score' : 'Add New Match'}
        maxWidth="lg"
      >
        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">Sport *</label>
              <select
                value={sport}
                onChange={(e) => setSport(e.target.value as any)}
                className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
              >
                <option value="cricket">Cricket</option>
                <option value="football">Football</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Competition / Series *
              </label>
              <input
                type="text"
                required
                value={competition}
                onChange={(e) => setCompetition(e.target.value)}
                placeholder="ICC World Cup / BPL"
                className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
              />
            </div>
          </div>

          <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
              Home Team
            </span>
            <div className="grid grid-cols-3 gap-2">
              <input
                type="text"
                required
                value={homeTeam}
                onChange={(e) => setHomeTeam(e.target.value)}
                placeholder="Team Name (Eng)"
                className="px-2.5 py-1.5 text-xs bg-white border border-neutral-200 rounded"
              />
              <input
                type="text"
                value={homeTeamBangla}
                onChange={(e) => setHomeTeamBangla(e.target.value)}
                placeholder="বাংলা নাম"
                className="px-2.5 py-1.5 text-xs bg-white border border-neutral-200 rounded"
              />
              <input
                type="text"
                value={homeScore}
                onChange={(e) => setHomeScore(e.target.value)}
                placeholder="Score (e.g. 240/4 or 2)"
                className="px-2.5 py-1.5 text-xs bg-white border border-neutral-200 rounded font-semibold text-emerald-700"
              />
            </div>
          </div>

          <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
              Away Team
            </span>
            <div className="grid grid-cols-3 gap-2">
              <input
                type="text"
                required
                value={awayTeam}
                onChange={(e) => setAwayTeam(e.target.value)}
                placeholder="Team Name (Eng)"
                className="px-2.5 py-1.5 text-xs bg-white border border-neutral-200 rounded"
              />
              <input
                type="text"
                value={awayTeamBangla}
                onChange={(e) => setAwayTeamBangla(e.target.value)}
                placeholder="বাংলা নাম"
                className="px-2.5 py-1.5 text-xs bg-white border border-neutral-200 rounded"
              />
              <input
                type="text"
                value={awayScore}
                onChange={(e) => setAwayScore(e.target.value)}
                placeholder="Score (e.g. 190/8 or 1)"
                className="px-2.5 py-1.5 text-xs bg-white border border-neutral-200 rounded font-semibold text-emerald-700"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as any)}
                className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg font-semibold"
              >
                <option value="live">LIVE</option>
                <option value="upcoming">Upcoming</option>
                <option value="finished">Finished</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">Status Text</label>
              <input
                type="text"
                value={statusText}
                onChange={(e) => setStatusText(e.target.value)}
                placeholder="e.g. Need 42 runs in 30 balls"
                className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">Venue</label>
            <input
              type="text"
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
              placeholder="Stadium, City"
              className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
            />
          </div>

          <div className="flex items-center justify-end gap-2 pt-3 border-t border-neutral-100">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-3 py-1.5 text-xs font-semibold text-neutral-600 bg-white border border-neutral-200 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 text-xs font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700"
            >
              Save Match Data
            </button>
          </div>
        </form>
      </AdminModal>

      <AdminConfirmDialog
        isOpen={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
        title="Delete Match"
        message={`Are you sure you want to delete match "${deleteTarget?.homeTeam.name} vs ${deleteTarget?.awayTeam.name}"?`}
      />
    </div>
  );
};

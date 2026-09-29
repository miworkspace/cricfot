import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Users, Shield } from 'lucide-react';
import { AdminService } from '../../services/adminService';
import { AdminTeam } from '../../types/admin';
import { AdminPageHeader } from '../../components/admin/AdminPageHeader';
import { AdminSearch } from '../../components/admin/AdminSearch';
import { AdminModal } from '../../components/admin/AdminModal';
import { AdminConfirmDialog } from '../../components/admin/AdminConfirmDialog';
import { AdminEmptyState, AdminLoading } from '../../components/admin/AdminEmptyState';
import { useAdminToast } from '../../components/admin/AdminToast';

export const AdminTeamsPage: React.FC = () => {
  const { showToast } = useAdminToast();
  const [teams, setTeams] = useState<AdminTeam[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [sportFilter, setSportFilter] = useState('all');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTeam, setEditingTeam] = useState<AdminTeam | null>(null);

  const [name, setName] = useState('');
  const [banglaName, setBanglaName] = useState('');
  const [shortName, setShortName] = useState('');
  const [sport, setSport] = useState<'cricket' | 'football'>('cricket');
  const [country, setCountry] = useState('Bangladesh');
  const [logo, setLogo] = useState('https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=100&q=80');

  const [deleteTarget, setDeleteTarget] = useState<AdminTeam | null>(null);

  const loadTeams = async () => {
    setIsLoading(true);
    try {
      const data = await AdminService.getTeams(sportFilter === 'all' ? undefined : sportFilter);
      setTeams(data);
    } catch (err) {
      showToast('Failed to load teams', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadTeams();
  }, [sportFilter]);

  const openAdd = () => {
    setEditingTeam(null);
    setName('');
    setBanglaName('');
    setShortName('');
    setSport('cricket');
    setCountry('Bangladesh');
    setIsModalOpen(true);
  };

  const openEdit = (t: AdminTeam) => {
    setEditingTeam(t);
    setName(t.name);
    setBanglaName(t.banglaName || '');
    setShortName(t.shortName || '');
    setSport(t.sport);
    setCountry(t.country || '');
    setLogo(t.logo || '');
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    try {
      if (editingTeam) {
        await AdminService.updateTeam(editingTeam.id, {
          name,
          banglaName,
          shortName,
          sport,
          country,
          logo,
        });
        showToast('Team profile updated!');
      } else {
        await AdminService.createTeam({
          name,
          banglaName,
          shortName,
          sport,
          country,
          logo,
        });
        showToast('New team registered!');
      }
      setIsModalOpen(false);
      loadTeams();
    } catch (err) {
      showToast('Failed to save team', 'error');
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    try {
      await AdminService.deleteTeam(deleteTarget.id);
      showToast('Team removed');
      setDeleteTarget(null);
      loadTeams();
    } catch (err) {
      showToast('Failed to delete team', 'error');
    }
  };

  const filtered = teams.filter(
    (t) =>
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      (t.banglaName && t.banglaName.includes(search))
  );

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Teams & Clubs Directory"
        banglaTitle="দল ও ক্লাব ব্যবস্থাপনা"
        description="National teams, BPL franchises, European football clubs, logos, and squad affiliations."
      >
        <button
          type="button"
          onClick={openAdd}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-xs"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Team</span>
        </button>
      </AdminPageHeader>

      <div className="bg-white p-4 rounded-xl border border-neutral-200/80 shadow-xs flex items-center justify-between gap-3 flex-wrap">
        <div className="w-full sm:w-80">
          <AdminSearch
            value={search}
            onChange={(val) => setSearch(val)}
            placeholder="Search teams..."
          />
        </div>

        <select
          value={sportFilter}
          onChange={(e) => setSportFilter(e.target.value)}
          className="px-3 py-2 text-xs bg-neutral-50 border border-neutral-200 rounded-lg"
        >
          <option value="all">All Sports</option>
          <option value="cricket">Cricket Teams</option>
          <option value="football">Football Clubs</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading ? (
          <div className="col-span-full">
            <AdminLoading message="Loading teams..." />
          </div>
        ) : filtered.length === 0 ? (
          <div className="col-span-full">
            <AdminEmptyState
              icon={Users}
              title="No teams registered"
              description="Register international teams or domestic clubs to use in matches and schedules."
              actionLabel="Add Team"
              onAction={openAdd}
            />
          </div>
        ) : (
          filtered.map((team) => (
            <div
              key={team.id}
              className="bg-white p-4 rounded-xl border border-neutral-200/80 shadow-xs flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center font-bold text-neutral-600 text-xs shrink-0 border border-neutral-200">
                  {team.shortName || team.name.slice(0, 3).toUpperCase()}
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-xs text-neutral-900 truncate">{team.name}</h4>
                  {team.banglaName && (
                    <p className="text-[11px] text-neutral-500 truncate">{team.banglaName}</p>
                  )}
                  <span className="inline-block mt-0.5 text-[10px] font-semibold text-neutral-600 uppercase">
                    {team.sport} • {team.country}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1 shrink-0">
                <button
                  type="button"
                  onClick={() => openEdit(team)}
                  className="p-1 text-neutral-400 hover:text-neutral-700 rounded"
                >
                  <Edit className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setDeleteTarget(team)}
                  className="p-1 text-neutral-400 hover:text-rose-600 rounded"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <AdminModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingTeam ? 'Edit Team Profile' : 'Add New Team'}
        maxWidth="md"
      >
        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Team Name (English) *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Bangladesh"
                className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Bangla Name (বাংলা)
              </label>
              <input
                type="text"
                value={banglaName}
                onChange={(e) => setBanglaName(e.target.value)}
                placeholder="বাংলাদেশ"
                className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">Abbreviation</label>
              <input
                type="text"
                value={shortName}
                onChange={(e) => setShortName(e.target.value)}
                placeholder="BAN"
                className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg uppercase"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">Sport</label>
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
              <label className="block text-xs font-bold text-neutral-700 mb-1">Country</label>
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Bangladesh"
                className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
              />
            </div>
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
              Save Team
            </button>
          </div>
        </form>
      </AdminModal>

      <AdminConfirmDialog
        isOpen={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
        title="Delete Team"
        message={`Are you sure you want to delete "${deleteTarget?.name}"?`}
      />
    </div>
  );
};

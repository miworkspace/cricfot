import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, User, Trophy } from 'lucide-react';
import { AdminService } from '../../services/adminService';
import { AdminPlayer } from '../../types/admin';
import { AdminPageHeader } from '../../components/admin/AdminPageHeader';
import { AdminSearch } from '../../components/admin/AdminSearch';
import { AdminModal } from '../../components/admin/AdminModal';
import { AdminConfirmDialog } from '../../components/admin/AdminConfirmDialog';
import { AdminEmptyState, AdminLoading } from '../../components/admin/AdminEmptyState';
import { useAdminToast } from '../../components/admin/AdminToast';

export const AdminPlayersPage: React.FC = () => {
  const { showToast } = useAdminToast();
  const [players, setPlayers] = useState<AdminPlayer[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [sportFilter, setSportFilter] = useState('all');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPlayer, setEditingPlayer] = useState<AdminPlayer | null>(null);

  const [name, setName] = useState('');
  const [banglaName, setBanglaName] = useState('');
  const [sport, setSport] = useState<'cricket' | 'football'>('cricket');
  const [team, setTeam] = useState('Bangladesh');
  const [role, setRole] = useState('All-rounder');
  const [jerseyNumber, setJerseyNumber] = useState('75');

  const [deleteTarget, setDeleteTarget] = useState<AdminPlayer | null>(null);

  const loadPlayers = async () => {
    setIsLoading(true);
    try {
      const data = await AdminService.getPlayers(sportFilter === 'all' ? undefined : sportFilter);
      setPlayers(data);
    } catch (err) {
      showToast('Failed to load players', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadPlayers();
  }, [sportFilter]);

  const openAdd = () => {
    setEditingPlayer(null);
    setName('');
    setBanglaName('');
    setSport('cricket');
    setTeam('Bangladesh');
    setRole('Batter');
    setJerseyNumber('99');
    setIsModalOpen(true);
  };

  const openEdit = (p: AdminPlayer) => {
    setEditingPlayer(p);
    setName(p.name);
    setBanglaName(p.banglaName || '');
    setSport(p.sport);
    setTeam(p.team);
    setRole(p.role);
    setJerseyNumber(p.jerseyNumber ? String(p.jerseyNumber) : '');
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    try {
      if (editingPlayer) {
        await AdminService.updatePlayer(editingPlayer.id, {
          name,
          banglaName,
          sport,
          team,
          role,
          jerseyNumber: jerseyNumber ? parseInt(jerseyNumber, 10) : undefined,
        });
        showToast('Player profile updated!');
      } else {
        await AdminService.createPlayer({
          name,
          banglaName,
          sport,
          team,
          role,
          jerseyNumber: jerseyNumber ? parseInt(jerseyNumber, 10) : undefined,
        });
        showToast('New player profile created!');
      }
      setIsModalOpen(false);
      loadPlayers();
    } catch (err) {
      showToast('Failed to save player', 'error');
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    try {
      await AdminService.deletePlayer(deleteTarget.id);
      showToast('Player profile removed');
      setDeleteTarget(null);
      loadPlayers();
    } catch (err) {
      showToast('Failed to delete player', 'error');
    }
  };

  const filtered = players.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      (p.banglaName && p.banglaName.includes(search)) ||
      p.team.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Player Roster Management"
        banglaTitle="খেলোয়াড় প্রোফাইল ও ডাটাবেস"
        description="Player stats profiles, jersey numbers, positions, and associated club contracts."
      >
        <button
          type="button"
          onClick={openAdd}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-xs"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Player</span>
        </button>
      </AdminPageHeader>

      <div className="bg-white p-4 rounded-xl border border-neutral-200/80 shadow-xs flex items-center justify-between gap-3 flex-wrap">
        <div className="w-full sm:w-80">
          <AdminSearch
            value={search}
            onChange={(val) => setSearch(val)}
            placeholder="Search players by name or team..."
          />
        </div>

        <select
          value={sportFilter}
          onChange={(e) => setSportFilter(e.target.value)}
          className="px-3 py-2 text-xs bg-neutral-50 border border-neutral-200 rounded-lg"
        >
          <option value="all">All Disciplines</option>
          <option value="cricket">Cricketers</option>
          <option value="football">Footballers</option>
        </select>
      </div>

      <div className="bg-white rounded-xl border border-neutral-200/80 overflow-hidden shadow-xs">
        {isLoading ? (
          <AdminLoading message="Loading player database..." />
        ) : filtered.length === 0 ? (
          <AdminEmptyState
            icon={User}
            title="No players found"
            description="Add cricketer and footballer profiles to tag them in match stories."
            actionLabel="Add Player"
            onAction={openAdd}
          />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-neutral-50 border-b border-neutral-200 text-neutral-500 font-semibold uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="py-3 px-4">Player</th>
                  <th className="py-3 px-3">Sport</th>
                  <th className="py-3 px-3">Team</th>
                  <th className="py-3 px-3">Role / Position</th>
                  <th className="py-3 px-3">Jersey #</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {filtered.map((player) => (
                  <tr key={player.id} className="hover:bg-neutral-50/80 transition-colors">
                    <td className="py-3 px-4">
                      <div className="font-semibold text-neutral-900">{player.name}</div>
                      {player.banglaName && (
                        <div className="text-[11px] text-neutral-500">{player.banglaName}</div>
                      )}
                    </td>

                    <td className="py-3 px-3">
                      <span className="capitalize font-semibold text-neutral-700">
                        {player.sport}
                      </span>
                    </td>

                    <td className="py-3 px-3 text-neutral-700 font-medium">
                      {player.team}
                    </td>

                    <td className="py-3 px-3 text-neutral-600">
                      {player.role}
                    </td>

                    <td className="py-3 px-3 font-mono font-bold text-neutral-500">
                      #{player.jerseyNumber || '—'}
                    </td>

                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          type="button"
                          onClick={() => openEdit(player)}
                          className="p-1.5 rounded hover:bg-neutral-100 text-neutral-500 hover:text-neutral-900"
                        >
                          <Edit className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => setDeleteTarget(player)}
                          className="p-1.5 rounded hover:bg-rose-50 text-neutral-400 hover:text-rose-600"
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

      <AdminModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingPlayer ? 'Edit Player Profile' : 'Add New Player'}
        maxWidth="md"
      >
        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Name (English) *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Shakib Al Hasan"
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
                placeholder="সাকিব আল হাসান"
                className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
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
              <label className="block text-xs font-bold text-neutral-700 mb-1">Team / Club</label>
              <input
                type="text"
                value={team}
                onChange={(e) => setTeam(e.target.value)}
                placeholder="Bangladesh"
                className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">Jersey #</label>
              <input
                type="number"
                value={jerseyNumber}
                onChange={(e) => setJerseyNumber(e.target.value)}
                placeholder="75"
                className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">Role / Position</label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="e.g. All-rounder / Left-wing Forward"
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
              Save Player Profile
            </button>
          </div>
        </form>
      </AdminModal>

      <AdminConfirmDialog
        isOpen={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
        title="Delete Player"
        message={`Are you sure you want to delete profile for "${deleteTarget?.name}"?`}
      />
    </div>
  );
};

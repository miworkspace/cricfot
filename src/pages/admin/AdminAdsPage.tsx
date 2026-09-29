import React, { useState, useEffect } from 'react';
import { Megaphone, Plus, Edit, Trash2, Eye, MousePointer } from 'lucide-react';
import { AdminService } from '../../services/adminService';
import { AdminAdSlot } from '../../types/admin';
import { AdminPageHeader } from '../../components/admin/AdminPageHeader';
import { AdminModal } from '../../components/admin/AdminModal';
import { AdminConfirmDialog } from '../../components/admin/AdminConfirmDialog';
import { AdminEmptyState, AdminLoading } from '../../components/admin/AdminEmptyState';
import { useAdminToast } from '../../components/admin/AdminToast';

export const AdminAdsPage: React.FC = () => {
  const { showToast } = useAdminToast();
  const [ads, setAds] = useState<AdminAdSlot[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAd, setEditingAd] = useState<AdminAdSlot | null>(null);

  const [name, setName] = useState('');
  const [position, setPosition] = useState<AdminAdSlot['position']>('header_banner');
  const [imageUrl, setImageUrl] = useState('');
  const [targetUrl, setTargetUrl] = useState('');

  const [deleteTarget, setDeleteTarget] = useState<AdminAdSlot | null>(null);

  const loadAds = async () => {
    setIsLoading(true);
    try {
      const data = await AdminService.getAds();
      setAds(data);
    } catch (err) {
      showToast('Failed to load ad slots', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadAds();
  }, []);

  const openAdd = () => {
    setEditingAd(null);
    setName('');
    setPosition('header_banner');
    setImageUrl('https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=728&q=80');
    setTargetUrl('https://example.com/sponsor');
    setIsModalOpen(true);
  };

  const openEdit = (ad: AdminAdSlot) => {
    setEditingAd(ad);
    setName(ad.name);
    setPosition(ad.position);
    setImageUrl(ad.imageUrl || '');
    setTargetUrl(ad.targetUrl || '');
    setIsModalOpen(true);
  };

  const handleToggle = async (id: string, current: boolean) => {
    try {
      await AdminService.toggleAdSlot(id, !current);
      showToast(!current ? 'Ad slot activated' : 'Ad slot paused');
      loadAds();
    } catch (err) {
      showToast('Failed to toggle ad', 'error');
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    try {
      if (editingAd) {
        await AdminService.updateAdSlot(editingAd.id, {
          name,
          position,
          imageUrl,
          targetUrl,
        });
        showToast('Ad placement updated!');
      } else {
        await AdminService.createAdSlot({
          name,
          position,
          active: true,
          imageUrl,
          targetUrl,
          impressions: 0,
          clicks: 0,
        });
        showToast('New ad campaign registered!');
      }
      setIsModalOpen(false);
      loadAds();
    } catch (err) {
      showToast('Failed to save ad', 'error');
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    try {
      await AdminService.deleteAdSlot(deleteTarget.id);
      showToast('Ad slot removed');
      setDeleteTarget(null);
      loadAds();
    } catch (err) {
      showToast('Failed to delete ad', 'error');
    }
  };

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Advertisement & Sponsorship Slots"
        banglaTitle="বিজ্ঞাপন ও স্পন্সরশিপ স্লট"
        description="Manage banner placements, brand takeovers, affiliate campaigns and track impression metrics."
      >
        <button
          type="button"
          onClick={openAdd}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-xs"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>New Ad Campaign</span>
        </button>
      </AdminPageHeader>

      <div className="bg-white rounded-xl border border-neutral-200/80 overflow-hidden shadow-xs">
        {isLoading ? (
          <AdminLoading message="Loading ad placements..." />
        ) : ads.length === 0 ? (
          <AdminEmptyState
            icon={Megaphone}
            title="No advertisements created"
            description="Create ad campaigns to monetize prime real estate across CricFot."
            actionLabel="Add Campaign"
            onAction={openAdd}
          />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-neutral-50 border-b border-neutral-200 text-neutral-500 font-semibold uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="py-3 px-4">Campaign Name</th>
                  <th className="py-3 px-3">Slot Position</th>
                  <th className="py-3 px-3">Impressions</th>
                  <th className="py-3 px-3">Clicks</th>
                  <th className="py-3 px-3">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {ads.map((ad) => (
                  <tr key={ad.id} className="hover:bg-neutral-50/80 transition-colors">
                    <td className="py-3 px-4">
                      <div className="font-bold text-neutral-900">{ad.name}</div>
                      <div className="text-[11px] text-neutral-400 font-mono truncate max-w-xs">
                        {ad.targetUrl}
                      </div>
                    </td>

                    <td className="py-3 px-3">
                      <span className="font-mono text-[11px] bg-neutral-100 px-2 py-0.5 rounded text-neutral-700">
                        {ad.position}
                      </span>
                    </td>

                    <td className="py-3 px-3 font-semibold text-neutral-800">
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3 text-neutral-400" />
                        <span>{ad.impressions.toLocaleString()}</span>
                      </div>
                    </td>

                    <td className="py-3 px-3 font-semibold text-neutral-800">
                      <div className="flex items-center gap-1">
                        <MousePointer className="w-3 h-3 text-neutral-400" />
                        <span>{ad.clicks.toLocaleString()}</span>
                      </div>
                    </td>

                    <td className="py-3 px-3">
                      <button
                        type="button"
                        onClick={() => handleToggle(ad.id, ad.active)}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
                          ad.active
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : 'bg-neutral-100 text-neutral-500 border border-neutral-200'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            ad.active ? 'bg-emerald-600' : 'bg-neutral-400'
                          }`}
                        />
                        <span>{ad.active ? 'Running' : 'Paused'}</span>
                      </button>
                    </td>

                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          type="button"
                          onClick={() => openEdit(ad)}
                          className="p-1.5 rounded hover:bg-neutral-100 text-neutral-500 hover:text-neutral-900"
                        >
                          <Edit className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => setDeleteTarget(ad)}
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
        title={editingAd ? 'Edit Ad Campaign' : 'Create Ad Campaign'}
        maxWidth="md"
      >
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              Campaign Name *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Grameenphone BPL Sponsor Banner"
              className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              Slot Placement *
            </label>
            <select
              value={position}
              onChange={(e) => setPosition(e.target.value as any)}
              className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
            >
              <option value="header_banner">Header Leaderboard (728x90 / 970x90)</option>
              <option value="sidebar">Sidebar Square (300x250 / 300x600)</option>
              <option value="article_middle">In-Article Inline (640x120)</option>
              <option value="footer_banner">Footer Banner (728x90)</option>
              <option value="interstitial">Full Page / Interstitial</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              Banner Creative Image URL
            </label>
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://images.unsplash.com/..."
              className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              Click-Through Target URL
            </label>
            <input
              type="text"
              value={targetUrl}
              onChange={(e) => setTargetUrl(e.target.value)}
              placeholder="https://partner.com/campaign"
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
              Save Campaign
            </button>
          </div>
        </form>
      </AdminModal>

      <AdminConfirmDialog
        isOpen={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
        title="Delete Ad Campaign"
        message={`Are you sure you want to remove ad slot "${deleteTarget?.name}"?`}
      />
    </div>
  );
};

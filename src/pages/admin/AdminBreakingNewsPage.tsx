import React, { useState, useEffect } from 'react';
import { Plus, Flame, Trash2, ArrowUp, ArrowDown, CheckCircle2, XCircle } from 'lucide-react';
import { AdminService } from '../../services/adminService';
import { AdminBreakingItem } from '../../types/admin';
import { AdminPageHeader } from '../../components/admin/AdminPageHeader';
import { AdminModal } from '../../components/admin/AdminModal';
import { AdminConfirmDialog } from '../../components/admin/AdminConfirmDialog';
import { AdminEmptyState, AdminLoading } from '../../components/admin/AdminEmptyState';
import { useAdminToast } from '../../components/admin/AdminToast';

export const AdminBreakingNewsPage: React.FC = () => {
  const { showToast } = useAdminToast();
  const [items, setItems] = useState<AdminBreakingItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [banglaTitle, setBanglaTitle] = useState('');
  const [url, setUrl] = useState('');
  const [priority, setPriority] = useState<'urgent' | 'high' | 'normal'>('high');

  const [deleteTarget, setDeleteTarget] = useState<AdminBreakingItem | null>(null);

  const loadItems = async () => {
    setIsLoading(true);
    try {
      const data = await AdminService.getBreakingNews();
      setItems(data);
    } catch (err) {
      showToast('Failed to load breaking news', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadItems();
  }, []);

  const handleToggle = async (id: string, current: boolean) => {
    try {
      await AdminService.toggleBreakingNews(id, !current);
      showToast(!current ? 'Breaking alert activated' : 'Alert deactivated');
      loadItems();
    } catch (err) {
      showToast('Failed to toggle alert', 'error');
    }
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      await AdminService.addBreakingNews({
        title,
        banglaTitle: banglaTitle || title,
        url: url || '/news/breaking',
        priority,
        active: true,
        order: items.length + 1,
      });
      showToast('Breaking news alert dispatched!');
      setIsModalOpen(false);
      setTitle('');
      setBanglaTitle('');
      setUrl('');
      loadItems();
    } catch (err) {
      showToast('Failed to add breaking news', 'error');
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    try {
      await AdminService.deleteBreakingNews(deleteTarget.id);
      showToast('Breaking alert deleted');
      setDeleteTarget(null);
      loadItems();
    } catch (err) {
      showToast('Failed to delete breaking alert', 'error');
    }
  };

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Breaking News Management"
        banglaTitle="ব্রেকিং নিউজ টিকার ব্যবস্থাপনা"
        description="Broadcast flash bulletins across the top header ticker of the public website in real time."
      >
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-700 rounded-lg transition-colors shadow-xs"
        >
          <Flame className="w-3.5 h-3.5" />
          <span>Dispatch Flash Alert</span>
        </button>
      </AdminPageHeader>

      <div className="bg-white rounded-xl border border-neutral-200/80 overflow-hidden shadow-xs">
        {isLoading ? (
          <AdminLoading message="Checking active breaking tickers..." />
        ) : items.length === 0 ? (
          <AdminEmptyState
            icon={Flame}
            title="No active breaking alerts"
            description="When a critical match moment or breaking sports headline happens, publish it here to scroll across the header."
            actionLabel="Add Alert"
            onAction={() => setIsModalOpen(true)}
          />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-neutral-50 border-b border-neutral-200 text-neutral-500 font-semibold uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="py-3 px-4">Headline (Bangla & English)</th>
                  <th className="py-3 px-3">Priority</th>
                  <th className="py-3 px-3">Destination Link</th>
                  <th className="py-3 px-3">Ticker Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {items.map((item) => (
                  <tr key={item.id} className="hover:bg-neutral-50/80 transition-colors">
                    <td className="py-3 px-4 max-w-md font-semibold text-neutral-900">
                      <div className="flex items-center gap-2">
                        <Flame className="w-4 h-4 text-rose-600 shrink-0" />
                        <div>
                          <p>{item.banglaTitle || item.title}</p>
                          {item.banglaTitle && (
                            <p className="text-[11px] text-neutral-400 font-normal">{item.title}</p>
                          )}
                        </div>
                      </div>
                    </td>

                    <td className="py-3 px-3">
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                          item.priority === 'urgent'
                            ? 'bg-rose-100 text-rose-800'
                            : item.priority === 'high'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-neutral-100 text-neutral-700'
                        }`}
                      >
                        {item.priority}
                      </span>
                    </td>

                    <td className="py-3 px-3 font-mono text-neutral-500 text-[11px] truncate max-w-[150px]">
                      {item.url}
                    </td>

                    <td className="py-3 px-3">
                      <button
                        type="button"
                        onClick={() => handleToggle(item.id, item.active)}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-colors ${
                          item.active
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : 'bg-neutral-100 text-neutral-500 border border-neutral-200'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            item.active ? 'bg-emerald-600 animate-pulse' : 'bg-neutral-400'
                          }`}
                        />
                        <span>{item.active ? 'Active On Ticker' : 'Inactive'}</span>
                      </button>
                    </td>

                    <td className="py-3 px-4 text-right">
                      <button
                        type="button"
                        onClick={() => setDeleteTarget(item)}
                        className="p-1.5 hover:bg-rose-50 text-neutral-400 hover:text-rose-600 rounded"
                        title="Delete Alert"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
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
        title="Create Breaking Alert"
        maxWidth="md"
      >
        <form onSubmit={handleAdd} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              Bangla Ticker Headline *
            </label>
            <input
              type="text"
              required
              value={banglaTitle}
              onChange={(e) => setBanglaTitle(e.target.value)}
              placeholder="মিরপুর টেস্ট: শ্রীলঙ্কার বিপক্ষে লিটন ও শান্তর দারুণ জুটি..."
              className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              English Headline (Optional)
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Mirpur Test: Liton and Shanto stage massive fightback..."
              className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Priority Level
              </label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value as any)}
                className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
              >
                <option value="urgent">Urgent (Flash red)</option>
                <option value="high">High</option>
                <option value="normal">Normal</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Article URL / Link
              </label>
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="/news/mirpur-test"
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
              className="px-4 py-1.5 text-xs font-semibold text-white bg-rose-600 rounded-lg hover:bg-rose-700"
            >
              Publish Flash Alert
            </button>
          </div>
        </form>
      </AdminModal>

      <AdminConfirmDialog
        isOpen={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
        title="Delete Breaking Alert"
        message={`Are you sure you want to remove "${deleteTarget?.banglaTitle || deleteTarget?.title}"?`}
      />
    </div>
  );
};

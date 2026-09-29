import React, { useState } from 'react';
import { Compass, Plus, Edit, Trash2, ArrowUp, ArrowDown, ExternalLink } from 'lucide-react';
import { AdminPageHeader } from '../../components/admin/AdminPageHeader';
import { AdminModal } from '../../components/admin/AdminModal';
import { useAdminToast } from '../../components/admin/AdminToast';

interface NavLinkItem {
  id: string;
  label: string;
  banglaLabel: string;
  href: string;
  target?: string;
  order: number;
}

export const AdminNavigationPage: React.FC = () => {
  const { showToast } = useAdminToast();
  const [links, setLinks] = useState<NavLinkItem[]>([
    { id: 'nav-1', label: 'Home', banglaLabel: 'প্রচ্ছদ', href: '/', order: 1 },
    { id: 'nav-2', label: 'Cricket', banglaLabel: 'ক্রিকেট', href: '/cricket', order: 2 },
    { id: 'nav-3', label: 'Football', banglaLabel: 'ফুটবল', href: '/football', order: 3 },
    { id: 'nav-4', label: 'BPL 2026', banglaLabel: 'বিপিএল', href: '/cricket/bpl', order: 4 },
    { id: 'nav-5', label: 'Premier League', banglaLabel: 'প্রিমিয়ার লিগ', href: '/football/premier-league', order: 5 },
    { id: 'nav-6', label: 'Analysis', banglaLabel: 'বিশ্লেষণ', href: '/analysis', order: 6 },
    { id: 'nav-7', label: 'Videos', banglaLabel: 'ভিডিও', href: '/videos', order: 7 },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingLink, setEditingLink] = useState<NavLinkItem | null>(null);
  const [label, setLabel] = useState('');
  const [banglaLabel, setBanglaLabel] = useState('');
  const [href, setHref] = useState('');

  const openAdd = () => {
    setEditingLink(null);
    setLabel('');
    setBanglaLabel('');
    setHref('/');
    setIsModalOpen(true);
  };

  const openEdit = (l: NavLinkItem) => {
    setEditingLink(l);
    setLabel(l.label);
    setBanglaLabel(l.banglaLabel);
    setHref(l.href);
    setIsModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!label.trim()) return;

    if (editingLink) {
      setLinks(
        links.map((l) =>
          l.id === editingLink.id ? { ...l, label, banglaLabel, href } : l
        )
      );
      showToast('Menu item updated!');
    } else {
      const newL: NavLinkItem = {
        id: `nav-${Date.now()}`,
        label,
        banglaLabel: banglaLabel || label,
        href,
        order: links.length + 1,
      };
      setLinks([...links, newL]);
      showToast('New menu link added!');
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    setLinks(links.filter((l) => l.id !== id));
    showToast('Menu link removed');
  };

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Navigation Menu Configuration"
        banglaTitle="ওয়েবসাইট নেভিগেশন ও মেনু"
        description="Configure header menus, mobile drawer categories, sub-navigation links, and footer links."
      >
        <button
          type="button"
          onClick={openAdd}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-xs"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Menu Item</span>
        </button>
      </AdminPageHeader>

      <div className="bg-white rounded-xl border border-neutral-200/80 overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-neutral-50 border-b border-neutral-200 text-neutral-500 font-semibold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3 px-4">Menu Label (English)</th>
                <th className="py-3 px-3">Bangla Label (বাংলা)</th>
                <th className="py-3 px-3">Target Route URL</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {links.map((l) => (
                <tr key={l.id} className="hover:bg-neutral-50/80 transition-colors">
                  <td className="py-3 px-4 font-bold text-neutral-900">{l.label}</td>
                  <td className="py-3 px-3 font-medium text-neutral-700">{l.banglaLabel}</td>
                  <td className="py-3 px-3 font-mono text-neutral-500 text-[11px]">{l.href}</td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        type="button"
                        onClick={() => openEdit(l)}
                        className="p-1.5 rounded hover:bg-neutral-100 text-neutral-500 hover:text-neutral-900"
                      >
                        <Edit className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(l.id)}
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
      </div>

      <AdminModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingLink ? 'Edit Menu Item' : 'Add Menu Item'}
        maxWidth="sm"
      >
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              Label (English) *
            </label>
            <input
              type="text"
              required
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              placeholder="e.g. Cricket"
              className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              Bangla Label (বাংলা)
            </label>
            <input
              type="text"
              value={banglaLabel}
              onChange={(e) => setBanglaLabel(e.target.value)}
              placeholder="e.g. ক্রিকেট"
              className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              Target URL *
            </label>
            <input
              type="text"
              required
              value={href}
              onChange={(e) => setHref(e.target.value)}
              placeholder="/cricket"
              className="w-full px-3 py-2 text-sm font-mono bg-white border border-neutral-200 rounded-lg"
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
              Save Link
            </button>
          </div>
        </form>
      </AdminModal>
    </div>
  );
};

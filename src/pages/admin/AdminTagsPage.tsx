import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Tag as TagIcon } from 'lucide-react';
import { AdminService } from '../../services/adminService';
import { AdminTag } from '../../types/admin';
import { AdminPageHeader } from '../../components/admin/AdminPageHeader';
import { AdminSearch } from '../../components/admin/AdminSearch';
import { AdminModal } from '../../components/admin/AdminModal';
import { AdminConfirmDialog } from '../../components/admin/AdminConfirmDialog';
import { AdminEmptyState, AdminLoading } from '../../components/admin/AdminEmptyState';
import { useAdminToast } from '../../components/admin/AdminToast';

export const AdminTagsPage: React.FC = () => {
  const { showToast } = useAdminToast();
  const [tags, setTags] = useState<AdminTag[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');

  // Add/Edit modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTag, setEditingTag] = useState<AdminTag | null>(null);
  const [name, setName] = useState('');
  const [banglaName, setBanglaName] = useState('');
  const [slug, setSlug] = useState('');

  // Delete modal
  const [deleteTarget, setDeleteTarget] = useState<AdminTag | null>(null);

  const loadTags = async () => {
    setIsLoading(true);
    try {
      const data = await AdminService.getTags();
      setTags(data);
    } catch (err) {
      showToast('Failed to load tags', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadTags();
  }, []);

  const openAddModal = () => {
    setEditingTag(null);
    setName('');
    setBanglaName('');
    setSlug('');
    setIsModalOpen(true);
  };

  const openEditModal = (t: AdminTag) => {
    setEditingTag(t);
    setName(t.name);
    setBanglaName(t.banglaName || '');
    setSlug(t.slug);
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      showToast('Tag name is required', 'error');
      return;
    }
    const slugFinal = slug || name.toLowerCase().replace(/\s+/g, '-');

    try {
      if (editingTag) {
        await AdminService.updateTag(editingTag.id, {
          name,
          banglaName,
          slug: slugFinal,
        });
        showToast('Tag updated!');
      } else {
        await AdminService.createTag({
          name,
          banglaName,
          slug: slugFinal,
          articleCount: 0,
        });
        showToast('New tag created!');
      }
      setIsModalOpen(false);
      loadTags();
    } catch (err) {
      showToast('Failed to save tag', 'error');
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    try {
      await AdminService.deleteTag(deleteTarget.id);
      showToast('Tag removed');
      setDeleteTarget(null);
      loadTags();
    } catch (err) {
      showToast('Failed to delete tag', 'error');
    }
  };

  const filtered = tags.filter(
    (t) =>
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      (t.banglaName && t.banglaName.includes(search)) ||
      t.slug.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Tag Management"
        banglaTitle="ট্যাগ ব্যবস্থাপনা"
        description="Curate keywords, topical hubs, and cross-story indexing tags."
      >
        <button
          type="button"
          onClick={openAddModal}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-xs"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>New Tag</span>
        </button>
      </AdminPageHeader>

      <div className="bg-white p-4 rounded-xl border border-neutral-200/80 shadow-xs flex items-center justify-between">
        <div className="w-full sm:w-80">
          <AdminSearch
            value={search}
            onChange={(val) => setSearch(val)}
            placeholder="Search tags..."
          />
        </div>
      </div>

      <div className="bg-white rounded-xl border border-neutral-200/80 overflow-hidden shadow-xs">
        {isLoading ? (
          <AdminLoading message="Loading tags..." />
        ) : filtered.length === 0 ? (
          <AdminEmptyState
            icon={TagIcon}
            title="No tags found"
            description="Create editorial tags to categorize related news topics."
            actionLabel="Add Tag"
            onAction={openAddModal}
          />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-neutral-50 border-b border-neutral-200 text-neutral-500 font-semibold uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="py-3 px-4">Tag Name</th>
                  <th className="py-3 px-3">Bangla Name</th>
                  <th className="py-3 px-3">Slug</th>
                  <th className="py-3 px-3">Associated Articles</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {filtered.map((t) => (
                  <tr key={t.id} className="hover:bg-neutral-50/80 transition-colors">
                    <td className="py-3 px-4 font-semibold text-neutral-900 flex items-center gap-2">
                      <TagIcon className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{t.name}</span>
                    </td>
                    <td className="py-3 px-3 text-neutral-600">
                      {t.banglaName || '—'}
                    </td>
                    <td className="py-3 px-3 font-mono text-neutral-500 text-[11px]">
                      /tag/{t.slug}
                    </td>
                    <td className="py-3 px-3 font-semibold text-neutral-700">
                      {t.articleCount}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          type="button"
                          onClick={() => openEditModal(t)}
                          className="p-1.5 rounded hover:bg-neutral-100 text-neutral-500 hover:text-neutral-900"
                        >
                          <Edit className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => setDeleteTarget(t)}
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
        title={editingTag ? 'Edit Tag' : 'Create Tag'}
        maxWidth="sm"
      >
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              Tag Name *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (!slug) setSlug(e.target.value.toLowerCase().replace(/\s+/g, '-'));
              }}
              placeholder="e.g. Shakib Al Hasan"
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
              placeholder="e.g. সাকিব আল হাসান"
              className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              Slug *
            </label>
            <input
              type="text"
              required
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="w-full px-3 py-2 text-xs font-mono bg-white border border-neutral-200 rounded-lg"
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
              {editingTag ? 'Update Tag' : 'Save Tag'}
            </button>
          </div>
        </form>
      </AdminModal>

      <AdminConfirmDialog
        isOpen={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
        title="Delete Tag"
        message={`Are you sure you want to delete tag "${deleteTarget?.name}"?`}
      />
    </div>
  );
};

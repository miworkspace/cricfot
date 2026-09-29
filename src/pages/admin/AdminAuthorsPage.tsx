import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, UserCheck, Mail } from 'lucide-react';
import { AdminService } from '../../services/adminService';
import { AdminAuthor } from '../../types/admin';
import { AdminPageHeader } from '../../components/admin/AdminPageHeader';
import { AdminModal } from '../../components/admin/AdminModal';
import { AdminConfirmDialog } from '../../components/admin/AdminConfirmDialog';
import { AdminEmptyState, AdminLoading } from '../../components/admin/AdminEmptyState';
import { useAdminToast } from '../../components/admin/AdminToast';

export const AdminAuthorsPage: React.FC = () => {
  const { showToast } = useAdminToast();
  const [authors, setAuthors] = useState<AdminAuthor[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAuthor, setEditingAuthor] = useState<AdminAuthor | null>(null);

  const [name, setName] = useState('');
  const [banglaName, setBanglaName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Sports Journalist');
  const [bio, setBio] = useState('');
  const [avatar, setAvatar] = useState('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80');

  const [deleteTarget, setDeleteTarget] = useState<AdminAuthor | null>(null);

  const loadAuthors = async () => {
    setIsLoading(true);
    try {
      const data = await AdminService.getAuthors();
      setAuthors(data);
    } catch (err) {
      showToast('Failed to load authors', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadAuthors();
  }, []);

  const openAdd = () => {
    setEditingAuthor(null);
    setName('');
    setBanglaName('');
    setEmail('');
    setRole('Cricket Analyst');
    setBio('');
    setAvatar('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80');
    setIsModalOpen(true);
  };

  const openEdit = (auth: AdminAuthor) => {
    setEditingAuthor(auth);
    setName(auth.name);
    setBanglaName(auth.banglaName || '');
    setEmail(auth.email);
    setRole(auth.role);
    setBio(auth.bio || '');
    setAvatar(auth.avatar);
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    try {
      if (editingAuthor) {
        await AdminService.updateAuthor(editingAuthor.id, {
          name,
          banglaName,
          email,
          role,
          bio,
          avatar,
        });
        showToast('Author updated!');
      } else {
        await AdminService.createAuthor({
          name,
          banglaName,
          email,
          role,
          bio,
          avatar,
          articleCount: 0,
        });
        showToast('New author added!');
      }
      setIsModalOpen(false);
      loadAuthors();
    } catch (err) {
      showToast('Failed to save author', 'error');
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    try {
      await AdminService.deleteAuthor(deleteTarget.id);
      showToast('Author deleted');
      setDeleteTarget(null);
      loadAuthors();
    } catch (err) {
      showToast('Failed to delete author', 'error');
    }
  };

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Author & Staff Management"
        banglaTitle="লেখক ও প্রতিবেদক ব্যবস্থাপনা"
        description="Manage sports journalists, editorial columnists, correspondent bylines, and profile bios."
      >
        <button
          type="button"
          onClick={openAdd}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-xs"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Staff Reporter</span>
        </button>
      </AdminPageHeader>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading ? (
          <div className="col-span-full">
            <AdminLoading message="Loading authors and reporters..." />
          </div>
        ) : (
          authors.map((auth) => (
            <div
              key={auth.id}
              className="bg-white rounded-xl border border-neutral-200/80 p-5 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start gap-3.5">
                  <img
                    src={auth.avatar}
                    alt={auth.name}
                    className="w-12 h-12 rounded-full object-cover border border-neutral-200 shrink-0"
                  />
                  <div className="min-w-0">
                    <h3 className="font-bold text-sm text-neutral-900 truncate">{auth.name}</h3>
                    {auth.banglaName && (
                      <p className="text-xs text-neutral-500 truncate">{auth.banglaName}</p>
                    )}
                    <span className="inline-block mt-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      {auth.role}
                    </span>
                  </div>
                </div>

                <p className="mt-3 text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                  {auth.bio || 'Editorial journalist covering Bangladesh and international sports.'}
                </p>

                <div className="mt-3 flex items-center justify-between text-xs text-neutral-500 pt-3 border-t border-neutral-100">
                  <div className="flex items-center gap-1.5 truncate">
                    <Mail className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                    <span className="truncate">{auth.email}</span>
                  </div>
                  <span className="font-bold text-neutral-900 shrink-0">
                    {auth.articleCount} articles
                  </span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-end gap-2 pt-2 border-t border-neutral-100">
                <button
                  type="button"
                  onClick={() => openEdit(auth)}
                  className="px-2.5 py-1 text-xs font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-md"
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => setDeleteTarget(auth)}
                  className="p-1 text-neutral-400 hover:text-rose-600"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <AdminModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingAuthor ? 'Edit Author Profile' : 'Add New Author'}
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
                placeholder="Rashedul Islam"
                className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Bangla Name (বাংলা নাম)
              </label>
              <input
                type="text"
                value={banglaName}
                onChange={(e) => setBanglaName(e.target.value)}
                placeholder="রাশেদুল ইসলাম"
                className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="author@cricfot.com"
                className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Role / Title
              </label>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="Senior Cricket Correspondent"
                className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              Avatar Image URL
            </label>
            <input
              type="text"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              Short Bio
            </label>
            <textarea
              rows={3}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
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
              {editingAuthor ? 'Update Profile' : 'Save Author'}
            </button>
          </div>
        </form>
      </AdminModal>

      <AdminConfirmDialog
        isOpen={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
        title="Delete Author"
        message={`Are you sure you want to delete "${deleteTarget?.name}"?`}
      />
    </div>
  );
};

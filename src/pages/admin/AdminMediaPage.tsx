import React, { useState, useEffect } from 'react';
import { Plus, Image as ImageIcon, Copy, Trash2, Eye, Check, UploadCloud } from 'lucide-react';
import { AdminService } from '../../services/adminService';
import { AdminMediaItem } from '../../types/admin';
import { AdminPageHeader } from '../../components/admin/AdminPageHeader';
import { AdminSearch } from '../../components/admin/AdminSearch';
import { AdminModal } from '../../components/admin/AdminModal';
import { AdminConfirmDialog } from '../../components/admin/AdminConfirmDialog';
import { AdminEmptyState, AdminLoading } from '../../components/admin/AdminEmptyState';
import { useAdminToast } from '../../components/admin/AdminToast';

export const AdminMediaPage: React.FC = () => {
  const { showToast } = useAdminToast();
  const [media, setMedia] = useState<AdminMediaItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');

  // Add Image Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [alt, setAlt] = useState('');
  const [caption, setCaption] = useState('');
  const [credit, setCredit] = useState('');

  // Delete modal
  const [deleteTarget, setDeleteTarget] = useState<AdminMediaItem | null>(null);

  const loadMedia = async () => {
    setIsLoading(true);
    try {
      const data = await AdminService.getMedia();
      setMedia(data);
    } catch (err) {
      showToast('Failed to load media assets', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadMedia();
  }, []);

  const handleCopyUrl = (imgUrl: string) => {
    navigator.clipboard.writeText(imgUrl);
    showToast('Image URL copied to clipboard!');
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    try {
      await AdminService.createMediaItem({
        title: title || 'Sports Photo',
        url,
        alt: alt || title,
        caption,
        credit,
        size: '1.2 MB',
        dimensions: '1920x1080',
        uploadedAt: new Date().toISOString(),
      });
      showToast('Media added to library!');
      setIsModalOpen(false);
      setUrl('');
      setTitle('');
      setAlt('');
      setCaption('');
      setCredit('');
      loadMedia();
    } catch (err) {
      showToast('Failed to add media', 'error');
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    try {
      await AdminService.deleteMediaItem(deleteTarget.id);
      showToast('Media asset removed');
      setDeleteTarget(null);
      loadMedia();
    } catch (err) {
      showToast('Failed to delete media', 'error');
    }
  };

  const filtered = media.filter((m) =>
    (m.title || m.filename || '').toLowerCase().includes(search.toLowerCase()) ||
    m.alt.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Media Gallery"
        banglaTitle="মিডিয়া গ্যালারি"
        description="High-resolution match photographs, pitch action shots, player portraits, and press assets."
      >
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-xs"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Media Asset</span>
        </button>
      </AdminPageHeader>

      <div className="bg-white p-4 rounded-xl border border-neutral-200/80 shadow-xs flex items-center justify-between">
        <div className="w-full sm:w-80">
          <AdminSearch
            value={search}
            onChange={(val) => setSearch(val)}
            placeholder="Search photos by title or alt text..."
          />
        </div>
      </div>

      {isLoading ? (
        <AdminLoading message="Loading photo gallery..." />
      ) : filtered.length === 0 ? (
        <AdminEmptyState
          icon={ImageIcon}
          title="No media assets found"
          description="Add photo URLs to build your newsroom's shared visual asset library."
          actionLabel="Add Photo"
          onAction={() => setIsModalOpen(true)}
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-neutral-200/80 overflow-hidden shadow-xs hover:border-neutral-300 transition-all flex flex-col justify-between group"
            >
              <div className="relative aspect-video bg-neutral-100 overflow-hidden">
                <img
                  src={item.url}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <button
                  type="button"
                  onClick={() => handleCopyUrl(item.url)}
                  className="absolute top-2 right-2 p-1.5 rounded-lg bg-neutral-900/80 hover:bg-neutral-900 text-white backdrop-blur-xs transition-colors shadow-xs"
                  title="Copy URL"
                >
                  <Copy className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="p-3.5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-bold text-neutral-900 line-clamp-1">{item.title}</h4>
                  <p className="text-[11px] text-neutral-500 line-clamp-1 mt-0.5">{item.caption || item.alt}</p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-400">
                  <span>{item.credit || 'CricFot'}</span>
                  <button
                    type="button"
                    onClick={() => setDeleteTarget(item)}
                    className="p-1 hover:text-rose-600 rounded"
                    title="Delete Photo"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add Media Modal */}
      <AdminModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Media Asset"
        maxWidth="md"
      >
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              Image URL *
            </label>
            <input
              type="text"
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://images.unsplash.com/..."
              className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              Asset Title *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Shakib Al Hasan Bowling Action"
              className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Alt Text
              </label>
              <input
                type="text"
                value={alt}
                onChange={(e) => setAlt(e.target.value)}
                placeholder="Accessible description"
                className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Photo Credit / Source
              </label>
              <input
                type="text"
                value={credit}
                onChange={(e) => setCredit(e.target.value)}
                placeholder="AFP / BCB / CricFot"
                className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              Caption
            </label>
            <input
              type="text"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Detailed editorial caption"
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
              Save Asset
            </button>
          </div>
        </form>
      </AdminModal>

      <AdminConfirmDialog
        isOpen={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
        title="Delete Media Asset"
        message={`Are you sure you want to delete "${deleteTarget?.title}"?`}
      />
    </div>
  );
};

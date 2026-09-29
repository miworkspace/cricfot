import React, { useState } from 'react';
import { FileText, Plus, Edit, Trash2, Eye } from 'lucide-react';
import { AdminPageHeader } from '../../components/admin/AdminPageHeader';
import { AdminModal } from '../../components/admin/AdminModal';
import { useAdminToast } from '../../components/admin/AdminToast';

interface StaticPage {
  id: string;
  title: string;
  banglaTitle: string;
  slug: string;
  updatedAt: string;
  status: 'published' | 'draft';
}

export const AdminPagesPage: React.FC = () => {
  const { showToast } = useAdminToast();
  const [pages, setPages] = useState<StaticPage[]>([
    {
      id: 'p-1',
      title: 'About Us',
      banglaTitle: 'আমাদের সম্পর্কে',
      slug: 'about-us',
      updatedAt: '2026-03-20',
      status: 'published',
    },
    {
      id: 'p-2',
      title: 'Privacy Policy',
      banglaTitle: 'গোপনীয়তা নীতি',
      slug: 'privacy-policy',
      updatedAt: '2026-03-18',
      status: 'published',
    },
    {
      id: 'p-3',
      title: 'Terms of Service',
      banglaTitle: 'ব্যবহারের শর্তাবলী',
      slug: 'terms',
      updatedAt: '2026-03-18',
      status: 'published',
    },
    {
      id: 'p-4',
      title: 'Editorial Standards',
      banglaTitle: 'সম্পাদকীয় নীতিমালা',
      slug: 'editorial-policy',
      updatedAt: '2026-03-10',
      status: 'published',
    },
    {
      id: 'p-5',
      title: 'Contact Us',
      banglaTitle: 'যোগাযোগ',
      slug: 'contact',
      updatedAt: '2026-03-15',
      status: 'published',
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPage, setEditingPage] = useState<StaticPage | null>(null);
  const [title, setTitle] = useState('');
  const [banglaTitle, setBanglaTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');

  const openAdd = () => {
    setEditingPage(null);
    setTitle('');
    setBanglaTitle('');
    setSlug('');
    setContent('');
    setIsModalOpen(true);
  };

  const openEdit = (p: StaticPage) => {
    setEditingPage(p);
    setTitle(p.title);
    setBanglaTitle(p.banglaTitle);
    setSlug(p.slug);
    setContent('Sample markdown content for ' + p.title);
    setIsModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !slug.trim()) return;

    if (editingPage) {
      setPages(
        pages.map((p) =>
          p.id === editingPage.id
            ? { ...p, title, banglaTitle, slug, updatedAt: new Date().toISOString().split('T')[0] }
            : p
        )
      );
      showToast('Static page updated!');
    } else {
      const newP: StaticPage = {
        id: `p-${Date.now()}`,
        title,
        banglaTitle: banglaTitle || title,
        slug,
        updatedAt: new Date().toISOString().split('T')[0],
        status: 'published',
      };
      setPages([...pages, newP]);
      showToast('New static page created!');
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    setPages(pages.filter((p) => p.id !== id));
    showToast('Page removed');
  };

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Custom Pages & Policies"
        banglaTitle="স্ট্যাটিক পেজ ও নীতিমালা"
        description="Create and manage policy pages, editorial guidelines, contact directories, and disclosures."
      >
        <button
          type="button"
          onClick={openAdd}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-xs"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>New Page</span>
        </button>
      </AdminPageHeader>

      <div className="bg-white rounded-xl border border-neutral-200/80 overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-neutral-50 border-b border-neutral-200 text-neutral-500 font-semibold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3 px-4">Page Title</th>
                <th className="py-3 px-3">Bangla Title</th>
                <th className="py-3 px-3">Slug / URL</th>
                <th className="py-3 px-3">Last Updated</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {pages.map((p) => (
                <tr key={p.id} className="hover:bg-neutral-50/80 transition-colors">
                  <td className="py-3 px-4 font-bold text-neutral-900">{p.title}</td>
                  <td className="py-3 px-3 text-neutral-700">{p.banglaTitle}</td>
                  <td className="py-3 px-3 font-mono text-[11px] text-neutral-500">/{p.slug}</td>
                  <td className="py-3 px-3 text-neutral-500">{p.updatedAt}</td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        type="button"
                        onClick={() => openEdit(p)}
                        className="p-1.5 rounded hover:bg-neutral-100 text-neutral-500 hover:text-neutral-900"
                      >
                        <Edit className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(p.id)}
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
        title={editingPage ? 'Edit Page' : 'Create New Page'}
        maxWidth="md"
      >
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              Page Title (English) *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                if (!slug) {
                  setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-'));
                }
              }}
              placeholder="e.g. Careers"
              className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              Bangla Title (বাংলা)
            </label>
            <input
              type="text"
              value={banglaTitle}
              onChange={(e) => setBanglaTitle(e.target.value)}
              placeholder="e.g. ক্যারিয়ার"
              className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              URL Slug *
            </label>
            <input
              type="text"
              required
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="careers"
              className="w-full px-3 py-2 text-sm font-mono bg-white border border-neutral-200 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              Page Content (Markdown)
            </label>
            <textarea
              rows={5}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write page content in markdown..."
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
              Save Page
            </button>
          </div>
        </form>
      </AdminModal>
    </div>
  );
};

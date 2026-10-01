'use client';
import { useState, useEffect } from "react";
import { Plus, Edit, Trash2, FolderTree } from "lucide-react";
import { AdminService } from "../../services/adminService";
import { AdminPageHeader } from "../../components/admin/AdminPageHeader";
import { AdminSearch } from "../../components/admin/AdminSearch";
import { AdminModal } from "../../components/admin/AdminModal";
import { AdminConfirmDialog } from "../../components/admin/AdminConfirmDialog";
import { AdminEmptyState, AdminLoading } from "../../components/admin/AdminEmptyState";
import { useAdminToast } from "../../components/admin/AdminToast";
export const AdminCategoriesPage = () => {
  const { showToast } = useAdminToast();
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sportFilter, setSportFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [name, setName] = useState("");
  const [banglaName, setBanglaName] = useState("");
  const [slug, setSlug] = useState("");
  const [sport, setSport] = useState("cricket");
  const [description, setDescription] = useState("");
  const [deleteTarget, setDeleteTarget] = useState(null);
  const loadCategories = async () => {
    setIsLoading(true);
    try {
      const data = await AdminService.getCategories();
      setCategories(data);
    } catch (err) {
      showToast("Failed to load categories", "error");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    loadCategories();
  }, []);
  const openAddModal = () => {
    setEditingCategory(null);
    setName("");
    setBanglaName("");
    setSlug("");
    setSport("cricket");
    setDescription("");
    setIsModalOpen(true);
  };
  const openEditModal = (cat) => {
    setEditingCategory(cat);
    setName(cat.name);
    setBanglaName(cat.banglaName || "");
    setSlug(cat.slug);
    setSport(cat.sport === "football" ? "football" : "cricket");
    setDescription(cat.description || "");
    setIsModalOpen(true);
  };
  const handleSave = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      showToast("Category name is required", "error");
      return;
    }
    const slugFinal = slug || name.toLowerCase().replace(/\s+/g, "-");
    try {
      if (editingCategory) {
        await AdminService.updateCategory(editingCategory.id, {
          name,
          banglaName,
          slug: slugFinal,
          sport,
          description
        });
        showToast("Category updated!");
      } else {
        await AdminService.createCategory({
          name,
          banglaName,
          slug: slugFinal,
          sport,
          description,
          order: categories.length + 1,
          articleCount: 0
        });
        showToast("New category created!");
      }
      setIsModalOpen(false);
      loadCategories();
    } catch (err) {
      showToast("Failed to save category", "error");
    }
  };
  const handleDelete = async () => {
    if (!deleteTarget) return;
    try {
      await AdminService.deleteCategory(deleteTarget.id);
      showToast("Category removed successfully");
      setDeleteTarget(null);
      loadCategories();
    } catch (err) {
      showToast("Failed to delete category", "error");
    }
  };
  const filteredCategories = categories.filter((cat) => {
    const matchesSearch = cat.name.toLowerCase().includes(search.toLowerCase()) || cat.banglaName && cat.banglaName.includes(search) || cat.slug.toLowerCase().includes(search.toLowerCase());
    const matchesSport = sportFilter === "all" || cat.sport === sportFilter;
    return matchesSearch && matchesSport;
  });
  return <div className="space-y-6">
      <AdminPageHeader
    title="Category Management"
    banglaTitle="ক্যাটাগরি ব্যবস্থাপনা"
    description="Organize articles across cricket and football beats, navigation taxonomy and URL structures."
  >
        <button
    type="button"
    onClick={openAddModal}
    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-xs"
  >
          <Plus className="w-3.5 h-3.5" />
          <span>New Category</span>
        </button>
      </AdminPageHeader>

      {
    /* Filter and Search Bar */
  }
      <div className="bg-white p-4 rounded-xl border border-neutral-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="w-full sm:w-80">
          <AdminSearch
    value={search}
    onChange={(val) => setSearch(val)}
    placeholder="Search categories..."
  />
        </div>

        <select
    value={sportFilter}
    onChange={(e) => setSportFilter(e.target.value)}
    className="w-full sm:w-auto px-3 py-2 text-xs font-medium bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-700 focus:bg-white focus:outline-hidden"
  >
          <option value="all">All Sports (উভয় খেলা)</option>
          <option value="cricket">Cricket only (ক্রিকেট)</option>
          <option value="football">Football only (ফুটবল)</option>
        </select>
      </div>

      {
    /* Categories Table */
  }
      <div className="bg-white rounded-xl border border-neutral-200/80 overflow-hidden shadow-xs">
        {isLoading ? <AdminLoading message="Loading editorial categories..." /> : filteredCategories.length === 0 ? <AdminEmptyState
    icon={FolderTree}
    title="No categories found"
    description="Create categories to organize news by tournaments, teams, or formats."
    actionLabel="Add Category"
    onAction={openAddModal}
  /> : <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-neutral-50 border-b border-neutral-200 text-neutral-500 font-semibold uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="py-3 px-4">Name (English & Bangla)</th>
                  <th className="py-3 px-3">Slug / Path</th>
                  <th className="py-3 px-3">Sport</th>
                  <th className="py-3 px-3">Articles</th>
                  <th className="py-3 px-3">Description</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {filteredCategories.map((cat) => <tr key={cat.id} className="hover:bg-neutral-50/80 transition-colors">
                    <td className="py-3 px-4 font-semibold text-neutral-900">
                      <div>{cat.name}</div>
                      {cat.banglaName && <div className="text-neutral-500 font-normal text-[11px]">
                          {cat.banglaName}
                        </div>}
                    </td>
                    <td className="py-3 px-3 font-mono text-neutral-500 text-[11px]">
                      /{cat.sport}/{cat.slug}
                    </td>
                    <td className="py-3 px-3">
                      <span className="capitalize px-2 py-0.5 rounded-full text-[11px] font-medium bg-neutral-100 text-neutral-700">
                        {cat.sport}
                      </span>
                    </td>
                    <td className="py-3 px-3 font-semibold text-neutral-700">
                      {cat.articleCount}
                    </td>
                    <td className="py-3 px-3 text-neutral-500 max-w-xs truncate">
                      {cat.description || "\u2014"}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
    type="button"
    onClick={() => openEditModal(cat)}
    className="p-1.5 rounded hover:bg-neutral-100 text-neutral-500 hover:text-neutral-900"
    title="Edit Category"
  >
                          <Edit className="w-3.5 h-3.5" />
                        </button>
                        <button
    type="button"
    onClick={() => setDeleteTarget(cat)}
    className="p-1.5 rounded hover:bg-rose-50 text-neutral-400 hover:text-rose-600"
    title="Delete Category"
  >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>}
      </div>

      {
    /* Edit / Add Modal */
  }
      <AdminModal
    isOpen={isModalOpen}
    onClose={() => setIsModalOpen(false)}
    title={editingCategory ? "Edit Category" : "Create New Category"}
    maxWidth="md"
  >
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              Category Name (English) *
            </label>
            <input
    type="text"
    required
    value={name}
    onChange={(e) => {
      setName(e.target.value);
      if (!slug) {
        setSlug(e.target.value.toLowerCase().replace(/\s+/g, "-"));
      }
    }}
    placeholder="e.g. Bangladesh Cricket"
    className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600"
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
    placeholder="e.g. বাংলাদেশ ক্রিকেট"
    className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600"
  />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Sport *
              </label>
              <select
    value={sport}
    onChange={(e) => setSport(e.target.value)}
    className="w-full px-3 py-2 text-xs bg-white border border-neutral-200 rounded-lg"
  >
                <option value="cricket">Cricket</option>
                <option value="football">Football</option>
              </select>
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
    placeholder="bangladesh-cricket"
    className="w-full px-3 py-2 text-xs font-mono bg-white border border-neutral-200 rounded-lg"
  />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              Description
            </label>
            <textarea
    rows={3}
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    placeholder="Category overview..."
    className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
  />
          </div>

          <div className="flex items-center justify-end gap-2 pt-3 border-t border-neutral-100">
            <button
    type="button"
    onClick={() => setIsModalOpen(false)}
    className="px-3 py-1.5 text-xs font-semibold text-neutral-600 bg-white border border-neutral-200 rounded-lg hover:bg-neutral-50"
  >
              Cancel
            </button>
            <button
    type="submit"
    className="px-4 py-1.5 text-xs font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700"
  >
              {editingCategory ? "Update Category" : "Create Category"}
            </button>
          </div>
        </form>
      </AdminModal>

      {
    /* Delete Confirmation */
  }
      <AdminConfirmDialog
    isOpen={!!deleteTarget}
    onClose={() => setDeleteTarget(null)}
    onConfirm={handleDelete}
    title="Delete Category"
    message={`Are you sure you want to delete category "${deleteTarget?.name}"?`}
  />
    </div>;
};

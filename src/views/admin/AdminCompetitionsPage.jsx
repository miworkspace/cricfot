'use client';
import { useState } from "react";
import { Plus, Trophy, Edit, Trash2 } from "lucide-react";
import { AdminPageHeader } from "../../components/admin/AdminPageHeader";
import { AdminModal } from "../../components/admin/AdminModal";
import { AdminConfirmDialog } from "../../components/admin/AdminConfirmDialog";
import { useAdminToast } from "../../components/admin/AdminToast";
export const AdminCompetitionsPage = () => {
  const { showToast } = useAdminToast();
  const [competitions, setCompetitions] = useState([
    {
      id: "comp-1",
      name: "Bangladesh Premier League (BPL)",
      banglaName: "\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6 \u09AA\u09CD\u09B0\u09BF\u09AE\u09BF\u09AF\u09BC\u09BE\u09B0 \u09B2\u09BF\u0997 (\u09AC\u09BF\u09AA\u09BF\u098F\u09B2)",
      sport: "cricket",
      region: "Bangladesh",
      season: "2026",
      status: "active"
    },
    {
      id: "comp-2",
      name: "ICC Champions Trophy",
      banglaName: "\u0986\u0987\u09B8\u09BF\u09B8\u09BF \u099A\u09CD\u09AF\u09BE\u09AE\u09CD\u09AA\u09BF\u09AF\u09BC\u09A8\u09CD\u09B8 \u099F\u09CD\u09B0\u09AB\u09BF",
      sport: "cricket",
      region: "International",
      season: "2026",
      status: "upcoming"
    },
    {
      id: "comp-3",
      name: "English Premier League",
      banglaName: "\u0987\u0982\u09B2\u09BF\u09B6 \u09AA\u09CD\u09B0\u09BF\u09AE\u09BF\u09AF\u09BC\u09BE\u09B0 \u09B2\u09BF\u0997",
      sport: "football",
      region: "England",
      season: "2025-26",
      status: "active"
    },
    {
      id: "comp-4",
      name: "UEFA Champions League",
      banglaName: "\u0989\u09AF\u09BC\u09C7\u09AB\u09BE \u099A\u09CD\u09AF\u09BE\u09AE\u09CD\u09AA\u09BF\u09AF\u09BC\u09A8\u09B8 \u09B2\u09BF\u0997",
      sport: "football",
      region: "Europe",
      season: "2025-26",
      status: "active"
    }
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingComp, setEditingComp] = useState(null);
  const [name, setName] = useState("");
  const [banglaName, setBanglaName] = useState("");
  const [sport, setSport] = useState("cricket");
  const [region, setRegion] = useState("");
  const [season, setSeason] = useState("2026");
  const [deleteTarget, setDeleteTarget] = useState(null);
  const openAdd = () => {
    setEditingComp(null);
    setName("");
    setBanglaName("");
    setSport("cricket");
    setRegion("Bangladesh");
    setSeason("2026");
    setIsModalOpen(true);
  };
  const openEdit = (c) => {
    setEditingComp(c);
    setName(c.name);
    setBanglaName(c.banglaName || "");
    setSport(c.sport);
    setRegion(c.region);
    setSeason(c.season);
    setIsModalOpen(true);
  };
  const handleSave = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    if (editingComp) {
      setCompetitions(
        competitions.map(
          (c) => c.id === editingComp.id ? { ...c, name, banglaName, sport, region, season } : c
        )
      );
      showToast("Competition updated!");
    } else {
      const newComp = {
        id: `comp-${Date.now()}`,
        name,
        banglaName,
        sport,
        region,
        season,
        status: "active"
      };
      setCompetitions([...competitions, newComp]);
      showToast("New tournament configured!");
    }
    setIsModalOpen(false);
  };
  const handleDelete = () => {
    if (!deleteTarget) return;
    setCompetitions(competitions.filter((c) => c.id !== deleteTarget.id));
    showToast("Competition removed");
    setDeleteTarget(null);
  };
  return <div className="space-y-6">
      <AdminPageHeader
    title="Tournaments & Competitions"
    banglaTitle="প্রতিযোগিতা ও টুর্নামেন্ট"
    description="Leagues, ICC world events, continental cups, and tournament series metadata."
  >
        <button
    type="button"
    onClick={openAdd}
    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-xs"
  >
          <Plus className="w-3.5 h-3.5" />
          <span>New Competition</span>
        </button>
      </AdminPageHeader>

      <div className="bg-white rounded-xl border border-neutral-200/80 overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-neutral-50 border-b border-neutral-200 text-neutral-500 font-semibold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3 px-4">Tournament</th>
                <th className="py-3 px-3">Sport</th>
                <th className="py-3 px-3">Region / Territory</th>
                <th className="py-3 px-3">Season</th>
                <th className="py-3 px-3">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {competitions.map((comp) => <tr key={comp.id} className="hover:bg-neutral-50/80 transition-colors">
                  <td className="py-3 px-4 font-semibold text-neutral-900">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-amber-500 shrink-0" />
                      <div>
                        <div>{comp.name}</div>
                        {comp.banglaName && <div className="text-[11px] text-neutral-500 font-normal">
                            {comp.banglaName}
                          </div>}
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-3 capitalize font-semibold text-neutral-700">
                    {comp.sport}
                  </td>
                  <td className="py-3 px-3 text-neutral-600">{comp.region}</td>
                  <td className="py-3 px-3 font-mono text-neutral-600">{comp.season}</td>
                  <td className="py-3 px-3">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {comp.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
    type="button"
    onClick={() => openEdit(comp)}
    className="p-1.5 rounded hover:bg-neutral-100 text-neutral-500 hover:text-neutral-900"
  >
                        <Edit className="w-3.5 h-3.5" />
                      </button>
                      <button
    type="button"
    onClick={() => setDeleteTarget(comp)}
    className="p-1.5 rounded hover:bg-rose-50 text-neutral-400 hover:text-rose-600"
  >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>

      <AdminModal
    isOpen={isModalOpen}
    onClose={() => setIsModalOpen(false)}
    title={editingComp ? "Edit Competition" : "Add New Competition"}
    maxWidth="md"
  >
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              Competition Name *
            </label>
            <input
    type="text"
    required
    value={name}
    onChange={(e) => setName(e.target.value)}
    placeholder="e.g. Bangladesh Premier League"
    className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
  />
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              Bangla Title (বাংলা নাম)
            </label>
            <input
    type="text"
    value={banglaName}
    onChange={(e) => setBanglaName(e.target.value)}
    placeholder="e.g. বাংলাদেশ প্রিমিয়ার লিগ"
    className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
  />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">Sport</label>
              <select
    value={sport}
    onChange={(e) => setSport(e.target.value)}
    className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
  >
                <option value="cricket">Cricket</option>
                <option value="football">Football</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">Region</label>
              <input
    type="text"
    value={region}
    onChange={(e) => setRegion(e.target.value)}
    placeholder="Bangladesh / Global"
    className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
  />
            </div>
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">Season</label>
              <input
    type="text"
    value={season}
    onChange={(e) => setSeason(e.target.value)}
    placeholder="2026"
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
              Save Competition
            </button>
          </div>
        </form>
      </AdminModal>

      <AdminConfirmDialog
    isOpen={!!deleteTarget}
    onClose={() => setDeleteTarget(null)}
    onConfirm={handleDelete}
    title="Delete Competition"
    message={`Are you sure you want to delete "${deleteTarget?.name}"?`}
  />
    </div>;
};

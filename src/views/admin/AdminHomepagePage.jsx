'use client';
import { useState, useEffect } from "react";
import { ArrowUp, ArrowDown, Save } from "lucide-react";
import { AdminService } from "../../services/adminService";
import { AdminPageHeader } from "../../components/admin/AdminPageHeader";
import { AdminLoading } from "../../components/admin/AdminEmptyState";
import { useAdminToast } from "../../components/admin/AdminToast";
export const AdminHomepagePage = () => {
  const { showToast } = useAdminToast();
  const [sections, setSections] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const loadSections = async () => {
    setIsLoading(true);
    try {
      const data = await AdminService.getHomepageSections();
      setSections(data);
    } catch (err) {
      showToast("Failed to load homepage configuration", "error");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    loadSections();
  }, []);
  const moveUp = (index) => {
    if (index === 0) return;
    const newArr = [...sections];
    const temp = newArr[index];
    newArr[index] = newArr[index - 1];
    newArr[index - 1] = temp;
    setSections(newArr);
  };
  const moveDown = (index) => {
    if (index === sections.length - 1) return;
    const newArr = [...sections];
    const temp = newArr[index];
    newArr[index] = newArr[index + 1];
    newArr[index + 1] = temp;
    setSections(newArr);
  };
  const toggleEnabled = (id) => {
    setSections(
      sections.map((s) => s.id === id ? { ...s, enabled: !s.enabled } : s)
    );
  };
  const handleSave = async () => {
    setIsSaving(true);
    try {
      await AdminService.saveHomepageSections(sections);
      showToast("Homepage layout arrangement updated!");
    } catch (err) {
      showToast("Failed to save layout", "error");
    } finally {
      setIsSaving(false);
    }
  };
  if (isLoading) return <AdminLoading message="Loading Homepage Section Architect..." />;
  return <div className="space-y-6">
      <AdminPageHeader
    title="Homepage Layout Architect"
    banglaTitle="হোমপেজ লেআউট ও সেকশন বিন্যাস"
    description="Reorder, activate, or disable major blocks across the CricFot digital newspaper frontpage."
  >
        <button
    type="button"
    disabled={isSaving}
    onClick={handleSave}
    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-xs"
  >
          <Save className="w-3.5 h-3.5" />
          <span>{isSaving ? "Saving Changes..." : "Save Layout Changes"}</span>
        </button>
      </AdminPageHeader>

      <div className="bg-white rounded-xl border border-neutral-200/80 overflow-hidden shadow-xs">
        <div className="p-4 bg-neutral-50 border-b border-neutral-200 text-xs text-neutral-500">
          Use the arrow buttons to move sections up or down to customize the hierarchy of the frontpage.
        </div>

        <div className="divide-y divide-neutral-100">
          {sections.map((sec, index) => <div
    key={sec.id}
    className={`p-4 flex items-center justify-between gap-4 transition-colors ${sec.enabled ? "bg-white hover:bg-neutral-50/60" : "bg-neutral-50/50 opacity-60"}`}
  >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-7 h-7 rounded-lg bg-neutral-100 flex items-center justify-center font-bold text-xs text-neutral-600 shrink-0">
                  {index + 1}
                </div>

                <div>
                  <h4 className="font-bold text-sm text-neutral-900">{sec.title}</h4>
                  {sec.banglaTitle && <p className="text-xs text-neutral-500">{sec.banglaTitle}</p>}
                  <span className="text-[11px] font-mono text-neutral-400">
                    Type: {sec.type}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
    type="button"
    onClick={() => toggleEnabled(sec.id)}
    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${sec.enabled ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-neutral-200 text-neutral-600"}`}
  >
                  {sec.enabled ? "Enabled" : "Hidden"}
                </button>

                <div className="flex items-center gap-1 border-l border-neutral-200 pl-2">
                  <button
    type="button"
    disabled={index === 0}
    onClick={() => moveUp(index)}
    className="p-1.5 rounded hover:bg-neutral-100 disabled:opacity-30"
    title="Move Up"
  >
                    <ArrowUp className="w-4 h-4 text-neutral-600" />
                  </button>
                  <button
    type="button"
    disabled={index === sections.length - 1}
    onClick={() => moveDown(index)}
    className="p-1.5 rounded hover:bg-neutral-100 disabled:opacity-30"
    title="Move Down"
  >
                    <ArrowDown className="w-4 h-4 text-neutral-600" />
                  </button>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
};

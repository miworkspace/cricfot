'use client';
import { useState } from "react";
import { Save } from "lucide-react";
import { AdminPageHeader } from "../../components/admin/AdminPageHeader";
import { useAdminToast } from "../../components/admin/AdminToast";
export const AdminSocialPage = () => {
  const { showToast } = useAdminToast();
  const [links, setLinks] = useState([
    {
      id: "soc-1",
      platform: "Facebook",
      handle: "@cricfotsports",
      url: "https://facebook.com/cricfotsports",
      followers: "850K",
      active: true
    },
    {
      id: "soc-2",
      platform: "YouTube",
      handle: "CricFot Official",
      url: "https://youtube.com/@cricfot",
      followers: "320K",
      active: true
    },
    {
      id: "soc-3",
      platform: "Twitter / X",
      handle: "@cricfot_bd",
      url: "https://x.com/cricfot_bd",
      followers: "95K",
      active: true
    },
    {
      id: "soc-4",
      platform: "Instagram",
      handle: "@cricfot",
      url: "https://instagram.com/cricfot",
      followers: "140K",
      active: true
    }
  ]);
  const handleToggle = (id) => {
    setLinks(
      links.map((l) => l.id === id ? { ...l, active: !l.active } : l)
    );
    showToast("Social link visibility updated");
  };
  const handleSave = (e) => {
    e.preventDefault();
    showToast("Social channel configuration saved!");
  };
  return <div className="space-y-6">
      <AdminPageHeader
    title="Social Media Channels & Feeds"
    banglaTitle="সোশ্যাল মিডিয়া চ্যানেল ও লিংক"
    description="Connect official CricFot social media accounts for footer links, share buttons, and automated video embeds."
  />

      <form onSubmit={handleSave} className="bg-white rounded-xl border border-neutral-200/80 p-6 shadow-xs space-y-6">
        <div className="divide-y divide-neutral-100">
          {links.map((link) => <div key={link.id} className="py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="font-bold text-sm text-neutral-900">{link.platform}</span>
                <p className="text-xs text-neutral-500">{link.handle} • {link.followers} Followers</p>
                <p className="text-[11px] font-mono text-neutral-400 mt-0.5">{link.url}</p>
              </div>

              <div className="flex items-center gap-3">
                <button
    type="button"
    onClick={() => handleToggle(link.id)}
    className={`px-3 py-1 rounded-full text-xs font-semibold ${link.active ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-neutral-100 text-neutral-500 border border-neutral-200"}`}
  >
                  {link.active ? "Active on Footer" : "Hidden"}
                </button>
              </div>
            </div>)}
        </div>

        <div className="pt-4 border-t border-neutral-100 flex justify-end">
          <button
    type="submit"
    className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-xs"
  >
            <Save className="w-3.5 h-3.5" />
            <span>Save Channel Links</span>
          </button>
        </div>
      </form>
    </div>;
};

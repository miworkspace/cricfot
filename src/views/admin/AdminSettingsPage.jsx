'use client';
import { useState } from "react";
import { Save } from "lucide-react";
import { AdminPageHeader } from "../../components/admin/AdminPageHeader";
import { useAdminToast } from "../../components/admin/AdminToast";
export const AdminSettingsPage = () => {
  const { showToast } = useAdminToast();
  const [siteName, setSiteName] = useState("CricFot");
  const [banglaName, setBanglaName] = useState("\u0995\u09CD\u09B0\u09BF\u0995\u09AB\u099F");
  const [tagline, setTagline] = useState("\u09B8\u09AC \u0996\u09C7\u09B2\u09BE\u09B0 \u09B8\u09C7\u09B0\u09BE \u0996\u09AC\u09B0 \u0993 \u09B2\u09BE\u0987\u09AD \u09B8\u09CD\u0995\u09CB\u09B0");
  const [contactEmail, setContactEmail] = useState("newsdesk@cricfot.com");
  const [tiplineWhatsApp, setTiplineWhatsApp] = useState("+880 1700 000000");
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [enableComments, setEnableComments] = useState(true);
  const [moderateBeforePublish, setModerateBeforePublish] = useState(true);
  const handleSave = (e) => {
    e.preventDefault();
    showToast("Platform settings saved successfully!");
  };
  return <div className="space-y-6">
      <AdminPageHeader
    title="General Platform Settings"
    banglaTitle="সাধারণ সেটিংস ও কনফিগারেশন"
    description="Core newsroom parameters, identity branding, editorial policies, and maintenance toggles."
  />

      <form onSubmit={handleSave} className="bg-white rounded-xl border border-neutral-200/80 p-6 shadow-xs space-y-6">
        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 pb-2 border-b border-neutral-200">
            Brand Identity
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Portal Name (English)
              </label>
              <input
    type="text"
    value={siteName}
    onChange={(e) => setSiteName(e.target.value)}
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
    className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
  />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              Tagline / Slogan (বাংলা)
            </label>
            <input
    type="text"
    value={tagline}
    onChange={(e) => setTagline(e.target.value)}
    className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
  />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Newsdesk Email
              </label>
              <input
    type="email"
    value={contactEmail}
    onChange={(e) => setContactEmail(e.target.value)}
    className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
  />
            </div>
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                News Tipline WhatsApp
              </label>
              <input
    type="text"
    value={tiplineWhatsApp}
    onChange={(e) => setTiplineWhatsApp(e.target.value)}
    className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
  />
            </div>
          </div>
        </div>

        {
    /* Editorial Policy Toggles */
  }
        <div className="space-y-4 pt-4 border-t border-neutral-100">
          <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 pb-2 border-b border-neutral-200">
            Editorial & Security Controls
          </h3>

          <div className="space-y-3">
            <label className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg cursor-pointer">
              <div>
                <span className="text-xs font-bold text-neutral-900 block">
                  Senior Editor Approval Workflow
                </span>
                <span className="text-[11px] text-neutral-500">
                  Reporters must submit drafts for senior editorial sign-off before public indexing.
                </span>
              </div>
              <input
    type="checkbox"
    checked={moderateBeforePublish}
    onChange={(e) => setModerateBeforePublish(e.target.checked)}
    className="rounded border-neutral-300 text-emerald-600 focus:ring-emerald-500 h-4 w-4"
  />
            </label>

            <label className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg cursor-pointer">
              <div>
                <span className="text-xs font-bold text-neutral-900 block">
                  Enable Reader Comments & Reactions
                </span>
                <span className="text-[11px] text-neutral-500">
                  Allow verified readers to comment on match articles and vote in polls.
                </span>
              </div>
              <input
    type="checkbox"
    checked={enableComments}
    onChange={(e) => setEnableComments(e.target.checked)}
    className="rounded border-neutral-300 text-emerald-600 focus:ring-emerald-500 h-4 w-4"
  />
            </label>

            <label className="flex items-center justify-between p-3 bg-rose-50/50 rounded-lg border border-rose-200/60 cursor-pointer">
              <div>
                <span className="text-xs font-bold text-rose-900 block">
                  Maintenance Mode
                </span>
                <span className="text-[11px] text-rose-700">
                  Temporarily display a maintenance page to readers while server migrations run.
                </span>
              </div>
              <input
    type="checkbox"
    checked={maintenanceMode}
    onChange={(e) => setMaintenanceMode(e.target.checked)}
    className="rounded border-neutral-300 text-rose-600 focus:ring-rose-500 h-4 w-4"
  />
            </label>
          </div>
        </div>

        <div className="pt-4 border-t border-neutral-100 flex justify-end">
          <button
    type="submit"
    className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-xs"
  >
            <Save className="w-3.5 h-3.5" />
            <span>Save Settings</span>
          </button>
        </div>
      </form>
    </div>;
};

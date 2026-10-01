'use client';
import { useState } from "react";
import { Search, Save, Globe, Share2 } from "lucide-react";
import { AdminPageHeader } from "../../components/admin/AdminPageHeader";
import { useAdminToast } from "../../components/admin/AdminToast";
export const AdminSeoPage = () => {
  const { showToast } = useAdminToast();
  const [metaTitle, setMetaTitle] = useState("CricFot | \u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6 \u0993 \u09AC\u09BF\u09B6\u09CD\u09AC \u0995\u09CD\u09B0\u09C0\u09A1\u09BC\u09BE \u09B8\u0982\u09AC\u09BE\u09A6 \u0993 \u09B2\u09BE\u0987\u09AD \u09B8\u09CD\u0995\u09CB\u09B0");
  const [metaDesc, setMetaDesc] = useState("\u0995\u09CD\u09B0\u09BF\u0995\u09C7\u099F \u0993 \u09AB\u09C1\u099F\u09AC\u09B2 \u09B8\u0982\u09AC\u09BE\u09A6\u09C7\u09B0 \u09AC\u09BF\u09B6\u09CD\u09AC\u09B8\u09CD\u09A4 \u09A0\u09BF\u0995\u09BE\u09A8\u09BE\u0964 \u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6 \u0995\u09CD\u09B0\u09BF\u0995\u09C7\u099F \u09A6\u09B2, \u09AC\u09BF\u09AA\u09BF\u098F\u09B2, \u0986\u09A8\u09CD\u09A4\u09B0\u09CD\u099C\u09BE\u09A4\u09BF\u0995 \u0995\u09CD\u09B0\u09BF\u0995\u09C7\u099F, \u0987\u0989\u09B0\u09CB\u09AA\u09BF\u09AF\u09BC\u09BE\u09A8 \u09AB\u09C1\u099F\u09AC\u09B2 \u0993 \u09B8\u09B0\u09BE\u09B8\u09B0\u09BF \u09B2\u09BE\u0987\u09AD \u09B8\u09CD\u0995\u09CB\u09B0 \u0986\u09AA\u09A1\u09C7\u099F\u0964");
  const [keywords, setKeywords] = useState("\u0995\u09CD\u09B0\u09BF\u0995\u09AB\u099F, \u0995\u09CD\u09B0\u09BF\u0995\u09C7\u099F \u09B8\u0982\u09AC\u09BE\u09A6, \u09AB\u09C1\u099F\u09AC\u09B2 \u0996\u09AC\u09B0, \u09AC\u09BF\u09AA\u09BF\u098F\u09B2 \u09B2\u09BE\u0987\u09AD \u09B8\u09CD\u0995\u09CB\u09B0, \u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6 \u0995\u09CD\u09B0\u09BF\u0995\u09C7\u099F");
  const [ogImage, setOgImage] = useState("https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1200&q=80");
  const [canonicalUrl, setCanonicalUrl] = useState("https://cricfot.com");
  const [gaId, setGaId] = useState("G-CRICFOT2026");
  const handleSave = (e) => {
    e.preventDefault();
    showToast("Global SEO & OpenGraph settings saved!");
  };
  return <div className="space-y-6">
      <AdminPageHeader
    title="SEO & Metadata Optimizer"
    banglaTitle="সার্চ ইঞ্জিন অপটিমাইজেশন (SEO)"
    description="Configure search engine title tags, meta descriptions, OpenGraph social preview cards, and indexing robots."
  />

      <form onSubmit={handleSave} className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {
    /* Left: Settings Inputs */
  }
        <div className="lg:col-span-8 bg-white p-6 rounded-xl border border-neutral-200/80 shadow-xs space-y-5">
          <h3 className="text-sm font-bold text-neutral-900 pb-2 border-b border-neutral-200 flex items-center gap-2">
            <Globe className="w-4 h-4 text-emerald-600" />
            <span>Search Engine Configuration</span>
          </h3>

          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              Global Site Title (Default)
            </label>
            <input
    type="text"
    required
    value={metaTitle}
    onChange={(e) => setMetaTitle(e.target.value)}
    className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
  />
            <p className="text-[11px] text-neutral-400 mt-1">{metaTitle.length} characters (Optimal: 50-60)</p>
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              Meta Description (Bangla)
            </label>
            <textarea
    rows={3}
    value={metaDesc}
    onChange={(e) => setMetaDesc(e.target.value)}
    className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
  />
            <p className="text-[11px] text-neutral-400 mt-1">{metaDesc.length} characters (Optimal: 140-160)</p>
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              Meta Keywords (Comma separated)
            </label>
            <input
    type="text"
    value={keywords}
    onChange={(e) => setKeywords(e.target.value)}
    className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
  />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Canonical Base URL
              </label>
              <input
    type="text"
    value={canonicalUrl}
    onChange={(e) => setCanonicalUrl(e.target.value)}
    className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg font-mono"
  />
            </div>
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Google Analytics Measurement ID
              </label>
              <input
    type="text"
    value={gaId}
    onChange={(e) => setGaId(e.target.value)}
    placeholder="G-XXXXXX"
    className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg font-mono"
  />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              Social Share OpenGraph (OG) Image URL
            </label>
            <input
    type="text"
    value={ogImage}
    onChange={(e) => setOgImage(e.target.value)}
    className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
  />
          </div>

          <div className="pt-3 border-t border-neutral-100 flex justify-end">
            <button
    type="submit"
    className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-xs"
  >
              <Save className="w-3.5 h-3.5" />
              <span>Save SEO Settings</span>
            </button>
          </div>
        </div>

        {
    /* Right: SERP & Social Preview Card */
  }
        <div className="lg:col-span-4 space-y-5">
          {
    /* Google Preview */
  }
          <div className="bg-white p-5 rounded-xl border border-neutral-200/80 shadow-xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3 flex items-center gap-1.5">
              <Search className="w-3.5 h-3.5" />
              <span>Google Search Preview</span>
            </h4>
            <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 text-left font-sans">
              <span className="text-[11px] text-neutral-500 block truncate">{canonicalUrl}</span>
              <h5 className="text-sm text-blue-700 font-medium hover:underline line-clamp-1 mt-0.5">
                {metaTitle}
              </h5>
              <p className="text-xs text-neutral-600 line-clamp-2 mt-1">
                {metaDesc}
              </p>
            </div>
          </div>

          {
    /* Social Card Preview */
  }
          <div className="bg-white p-5 rounded-xl border border-neutral-200/80 shadow-xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3 flex items-center gap-1.5">
              <Share2 className="w-3.5 h-3.5" />
              <span>Social Share Card</span>
            </h4>
            <div className="rounded-lg overflow-hidden border border-neutral-200 bg-neutral-50 text-xs">
              <div className="aspect-video bg-neutral-200 overflow-hidden">
                <img
    src={ogImage}
    alt="OG Preview"
    className="w-full h-full object-cover"
    referrerPolicy="no-referrer"
  />
              </div>
              <div className="p-2.5">
                <span className="text-[10px] text-neutral-400 uppercase tracking-wider">cricfot.com</span>
                <p className="font-bold text-neutral-900 line-clamp-1 mt-0.5">{metaTitle}</p>
                <p className="text-[11px] text-neutral-500 line-clamp-1 mt-0.5">{metaDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>;
};

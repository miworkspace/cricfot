'use client';
import { useState } from "react";
import { Save } from "lucide-react";
import { AdminPageHeader } from "../../components/admin/AdminPageHeader";
import { useAdminToast } from "../../components/admin/AdminToast";
export const AdminRolesPage = () => {
  const { showToast } = useAdminToast();
  const [roles, setRoles] = useState([
    {
      role: "Super Admin",
      banglaTitle: "\u09AA\u09CD\u09B0\u09A7\u09BE\u09A8 \u0985\u09CD\u09AF\u09BE\u09A1\u09AE\u09BF\u09A8",
      description: "Unrestricted master access to all platform databases, settings, and staff.",
      permissions: {
        createArticles: true,
        publishArticles: true,
        deleteArticles: true,
        manageLiveScore: true,
        manageAds: true,
        manageUsers: true,
        systemSettings: true
      }
    },
    {
      role: "Senior Editor",
      banglaTitle: "\u09B8\u09BF\u09A8\u09BF\u09AF\u09BC\u09B0 \u0995\u09CD\u09B0\u09C0\u09A1\u09BC\u09BE \u09B8\u09AE\u09CD\u09AA\u09BE\u09A6\u0995",
      description: "Can edit, approve, publish, and curate homepage hero slots and breaking tickers.",
      permissions: {
        createArticles: true,
        publishArticles: true,
        deleteArticles: true,
        manageLiveScore: true,
        manageAds: false,
        manageUsers: false,
        systemSettings: false
      }
    },
    {
      role: "Sports Reporter",
      banglaTitle: "\u0995\u09CD\u09B0\u09C0\u09A1\u09BC\u09BE \u09AA\u09CD\u09B0\u09A4\u09BF\u09AC\u09C7\u09A6\u0995 / \u09B8\u09BE\u0982\u09AC\u09BE\u09A6\u09BF\u0995",
      description: "Field reporters can file drafts, upload match photographs, and add quotes.",
      permissions: {
        createArticles: true,
        publishArticles: false,
        deleteArticles: false,
        manageLiveScore: true,
        manageAds: false,
        manageUsers: false,
        systemSettings: false
      }
    },
    {
      role: "Moderator",
      banglaTitle: "\u09AE\u09A1\u09BE\u09B0\u09C7\u099F\u09B0",
      description: "Review reader comments, forum reports and flagged content.",
      permissions: {
        createArticles: false,
        publishArticles: false,
        deleteArticles: false,
        manageLiveScore: false,
        manageAds: false,
        manageUsers: false,
        systemSettings: false
      }
    }
  ]);
  const handleToggle = (roleIndex, permKey) => {
    if (roleIndex === 0) return;
    const copy = [...roles];
    copy[roleIndex].permissions[permKey] = !copy[roleIndex].permissions[permKey];
    setRoles(copy);
  };
  const handleSave = () => {
    showToast("Role permissions matrix saved successfully!");
  };
  return <div className="space-y-6">
      <AdminPageHeader
    title="Roles & Permission Matrix"
    banglaTitle="ভূমিকা ও অনুমতি ম্যাট্রিক্স"
    description="Define role-based access control (RBAC) to enforce editorial approval workflows and security."
  >
        <button
    type="button"
    onClick={handleSave}
    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-xs"
  >
          <Save className="w-3.5 h-3.5" />
          <span>Save Role Matrix</span>
        </button>
      </AdminPageHeader>

      <div className="bg-white rounded-xl border border-neutral-200/80 overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-neutral-50 border-b border-neutral-200 text-neutral-500 font-semibold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3 px-4 w-64">Role</th>
                <th className="py-3 px-3 text-center">Draft News</th>
                <th className="py-3 px-3 text-center">Publish News</th>
                <th className="py-3 px-3 text-center">Delete News</th>
                <th className="py-3 px-3 text-center">Live Score</th>
                <th className="py-3 px-3 text-center">Manage Ads</th>
                <th className="py-3 px-3 text-center">Staff & Roles</th>
                <th className="py-3 px-3 text-center">System Config</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {roles.map((r, rIdx) => <tr key={r.role} className="hover:bg-neutral-50/80 transition-colors">
                  <td className="py-3 px-4">
                    <div className="font-bold text-neutral-900">{r.role}</div>
                    <div className="text-[11px] text-emerald-700 font-medium">{r.banglaTitle}</div>
                    <div className="text-[10px] text-neutral-400 mt-0.5 line-clamp-1">{r.description}</div>
                  </td>

                  {[
    "createArticles",
    "publishArticles",
    "deleteArticles",
    "manageLiveScore",
    "manageAds",
    "manageUsers",
    "systemSettings"
  ].map((key) => <td key={key} className="py-3 px-3 text-center">
                      <input
    type="checkbox"
    checked={r.permissions[key]}
    disabled={rIdx === 0}
    onChange={() => handleToggle(rIdx, key)}
    className="rounded border-neutral-300 text-emerald-600 focus:ring-emerald-500 h-4 w-4 disabled:opacity-50"
  />
                    </td>)}
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
};

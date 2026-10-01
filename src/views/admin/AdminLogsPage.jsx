'use client';
import { useState } from "react";
import { AdminPageHeader } from "../../components/admin/AdminPageHeader";
import { AdminSearch } from "../../components/admin/AdminSearch";
export const AdminLogsPage = () => {
  const [search, setSearch] = useState("");
  const [catFilter, setCatFilter] = useState("all");
  const [logs] = useState([
    {
      id: "log-1",
      user: "Tanvir Ahmed",
      action: "Updated Live Score",
      target: "BAN vs SL: 312/6 (84.2 ov)",
      category: "match",
      timestamp: "2 mins ago",
      ip: "103.230.106.12"
    },
    {
      id: "log-2",
      user: "Shakil Hasan",
      action: "Dispatched Breaking News",
      target: "\u09AE\u09BF\u09B0\u09AA\u09C1\u09B0 \u099F\u09C7\u09B8\u09CD\u099F: \u09B6\u09CD\u09B0\u09C0\u09B2\u0999\u09CD\u0995\u09BE\u09B0 \u09AC\u09BF\u09AA\u0995\u09CD\u09B7\u09C7 \u09B2\u09BF\u099F\u09A8 \u0993 \u09B6\u09BE\u09A8\u09CD\u09A4\u09B0 \u09A6\u09BE\u09B0\u09C1\u09A3 \u099C\u09C1\u099F\u09BF",
      category: "breaking",
      timestamp: "18 mins ago",
      ip: "103.230.106.45"
    },
    {
      id: "log-3",
      user: "Tanvir Ahmed",
      action: "Published Story",
      target: "\u09AE\u09BF\u09B0\u09AA\u09C1\u09B0 \u099F\u09C7\u09B8\u09CD\u099F\u09C7 \u09B2\u09BF\u099F\u09A8 \u0993 \u09B6\u09BE\u09A8\u09CD\u09A4\u09B0 \u09AC\u09C0\u09B0\u09A4\u09CD\u09AC\u0997\u09BE\u09A5\u09BE: \u099A\u09A4\u09C1\u09B0\u09CD\u09A5 \u09A6\u09BF\u09A8\u09C7\u09B0 \u09AC\u09BF\u09B8\u09CD\u09A4\u09BE\u09B0\u09BF\u09A4 \u09B0\u09BF\u09AA\u09CB\u09B0\u09CD\u099F",
      category: "article",
      timestamp: "42 mins ago",
      ip: "103.230.106.12"
    },
    {
      id: "log-4",
      user: "Rashedul Karim",
      action: "Created Draft",
      target: "\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6 \u09AA\u09CD\u09B0\u09BF\u09AE\u09BF\u09AF\u09BC\u09BE\u09B0 \u09B2\u09BF\u0997\u09C7\u09B0 \u09AB\u09BE\u0987\u09A8\u09BE\u09B2 \u09AD\u09C7\u09A8\u09CD\u09AF\u09C1 \u099A\u09C2\u09A1\u09BC\u09BE\u09A8\u09CD\u09A4",
      category: "article",
      timestamp: "2 hours ago",
      ip: "118.179.88.92"
    },
    {
      id: "log-5",
      user: "Tanvir Ahmed",
      action: "Modified Ad Slot",
      target: "Header Leaderboard (Grameenphone)",
      category: "ad",
      timestamp: "5 hours ago",
      ip: "103.230.106.12"
    },
    {
      id: "log-6",
      user: "Tanvir Ahmed",
      action: "Updated System Settings",
      target: "Editorial Approval Controls",
      category: "system",
      timestamp: "1 day ago",
      ip: "103.230.106.12"
    }
  ]);
  const filtered = logs.filter((l) => {
    const matchesSearch = l.user.toLowerCase().includes(search.toLowerCase()) || l.target.toLowerCase().includes(search.toLowerCase()) || l.action.toLowerCase().includes(search.toLowerCase());
    const matchesCat = catFilter === "all" || l.category === catFilter;
    return matchesSearch && matchesCat;
  });
  return <div className="space-y-6">
      <AdminPageHeader
    title="Audit Logs & Activity History"
    banglaTitle="অডিট লগ ও কর্মকাণ্ডের ইতিহাস"
    description="Immutable timestamped record of all staff edits, live score changes, breaking news broadcasts, and security modifications."
  />

      <div className="bg-white p-4 rounded-xl border border-neutral-200/80 shadow-xs flex items-center justify-between gap-3 flex-wrap">
        <div className="w-full sm:w-80">
          <AdminSearch
    value={search}
    onChange={(val) => setSearch(val)}
    placeholder="Search audit trail by user or action..."
  />
        </div>

        <select
    value={catFilter}
    onChange={(e) => setCatFilter(e.target.value)}
    className="px-3 py-2 text-xs bg-neutral-50 border border-neutral-200 rounded-lg"
  >
          <option value="all">All Actions</option>
          <option value="article">Articles & Content</option>
          <option value="match">Match Scores</option>
          <option value="breaking">Breaking Alerts</option>
          <option value="ad">Ad Slots</option>
          <option value="system">System Settings</option>
        </select>
      </div>

      <div className="bg-white rounded-xl border border-neutral-200/80 overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-neutral-50 border-b border-neutral-200 text-neutral-500 font-semibold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3 px-4">Operator</th>
                <th className="py-3 px-3">Action</th>
                <th className="py-3 px-3">Target Resource</th>
                <th className="py-3 px-3">Time</th>
                <th className="py-3 px-4 text-right">IP Address</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {filtered.map((log) => <tr key={log.id} className="hover:bg-neutral-50/80 transition-colors">
                  <td className="py-3 px-4 font-bold text-neutral-900">{log.user}</td>
                  <td className="py-3 px-3">
                    <span
    className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${log.category === "breaking" ? "bg-rose-100 text-rose-800" : log.category === "match" ? "bg-blue-100 text-blue-800" : log.category === "article" ? "bg-emerald-100 text-emerald-800" : "bg-neutral-100 text-neutral-700"}`}
  >
                      {log.action}
                    </span>
                  </td>
                  <td className="py-3 px-3 font-medium text-neutral-800 max-w-sm truncate">
                    {log.target}
                  </td>
                  <td className="py-3 px-3 text-neutral-500">{log.timestamp}</td>
                  <td className="py-3 px-4 text-right font-mono text-[11px] text-neutral-400">
                    {log.ip}
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
};

import React, { useState } from 'react';
import { History, Shield, Filter, Search } from 'lucide-react';
import { AdminPageHeader } from '../../components/admin/AdminPageHeader';
import { AdminSearch } from '../../components/admin/AdminSearch';

interface AuditLog {
  id: string;
  user: string;
  action: string;
  target: string;
  category: 'article' | 'match' | 'breaking' | 'ad' | 'system';
  timestamp: string;
  ip: string;
}

export const AdminLogsPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [catFilter, setCatFilter] = useState('all');

  const [logs] = useState<AuditLog[]>([
    {
      id: 'log-1',
      user: 'Tanvir Ahmed',
      action: 'Updated Live Score',
      target: 'BAN vs SL: 312/6 (84.2 ov)',
      category: 'match',
      timestamp: '2 mins ago',
      ip: '103.230.106.12',
    },
    {
      id: 'log-2',
      user: 'Shakil Hasan',
      action: 'Dispatched Breaking News',
      target: 'মিরপুর টেস্ট: শ্রীলঙ্কার বিপক্ষে লিটন ও শান্তর দারুণ জুটি',
      category: 'breaking',
      timestamp: '18 mins ago',
      ip: '103.230.106.45',
    },
    {
      id: 'log-3',
      user: 'Tanvir Ahmed',
      action: 'Published Story',
      target: 'মিরপুর টেস্টে লিটন ও শান্তর বীরত্বগাথা: চতুর্থ দিনের বিস্তারিত রিপোর্ট',
      category: 'article',
      timestamp: '42 mins ago',
      ip: '103.230.106.12',
    },
    {
      id: 'log-4',
      user: 'Rashedul Karim',
      action: 'Created Draft',
      target: 'বাংলাদেশ প্রিমিয়ার লিগের ফাইনাল ভেন্যু চূড়ান্ত',
      category: 'article',
      timestamp: '2 hours ago',
      ip: '118.179.88.92',
    },
    {
      id: 'log-5',
      user: 'Tanvir Ahmed',
      action: 'Modified Ad Slot',
      target: 'Header Leaderboard (Grameenphone)',
      category: 'ad',
      timestamp: '5 hours ago',
      ip: '103.230.106.12',
    },
    {
      id: 'log-6',
      user: 'Tanvir Ahmed',
      action: 'Updated System Settings',
      target: 'Editorial Approval Controls',
      category: 'system',
      timestamp: '1 day ago',
      ip: '103.230.106.12',
    },
  ]);

  const filtered = logs.filter((l) => {
    const matchesSearch =
      l.user.toLowerCase().includes(search.toLowerCase()) ||
      l.target.toLowerCase().includes(search.toLowerCase()) ||
      l.action.toLowerCase().includes(search.toLowerCase());
    const matchesCat = catFilter === 'all' || l.category === catFilter;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="space-y-6">
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
              {filtered.map((log) => (
                <tr key={log.id} className="hover:bg-neutral-50/80 transition-colors">
                  <td className="py-3 px-4 font-bold text-neutral-900">{log.user}</td>
                  <td className="py-3 px-3">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                        log.category === 'breaking'
                          ? 'bg-rose-100 text-rose-800'
                          : log.category === 'match'
                          ? 'bg-blue-100 text-blue-800'
                          : log.category === 'article'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-neutral-100 text-neutral-700'
                      }`}
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

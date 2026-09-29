import React from 'react';
import { BarChart3, TrendingUp, Users, Eye, Clock, Smartphone, Globe, ArrowUpRight } from 'lucide-react';
import { AdminPageHeader } from '../../components/admin/AdminPageHeader';
import { AdminStatCard } from '../../components/admin/AdminStatCard';

export const AdminAnalyticsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Audience & Traffic Analytics"
        banglaTitle="পাঠক বিশ্লেষণ ও ট্রাফিক ডেটা"
        description="Comprehensive real-time audience metrics, reading durations, sport readership breakdown and device distributions."
      />

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <AdminStatCard
          title="Monthly Pageviews"
          value="1.84M"
          change="+18.4%"
          isPositive={true}
          icon={Eye}
          color="emerald"
          description="Total article reads"
        />
        <AdminStatCard
          title="Active Readers (Now)"
          value="3,420"
          change="+32%"
          isPositive={true}
          icon={Users}
          color="blue"
          description="Live during Mirpur Test"
        />
        <AdminStatCard
          title="Avg. Time on Page"
          value="3m 42s"
          change="+8.2%"
          isPositive={true}
          icon={Clock}
          color="purple"
          description="High engagement depth"
        />
        <AdminStatCard
          title="Mobile Audience"
          value="82.4%"
          change="+2.1%"
          isPositive={true}
          icon={Smartphone}
          color="amber"
          description="Mobile-first readers"
        />
      </div>

      {/* Sport Split & Device Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Readership Split */}
        <div className="lg:col-span-6 bg-white p-5 rounded-xl border border-neutral-200/80 shadow-xs space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 pb-2 border-b border-neutral-200">
            Readership by Discipline
          </h3>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-emerald-700">Cricket (ক্রিকেট)</span>
                <span>68% (1.25M views)</span>
              </div>
              <div className="w-full bg-neutral-100 rounded-full h-2.5 overflow-hidden">
                <div className="bg-emerald-600 h-2.5 rounded-full" style={{ width: '68%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-blue-700">Football (ফুটবল)</span>
                <span>27% (496K views)</span>
              </div>
              <div className="w-full bg-neutral-100 rounded-full h-2.5 overflow-hidden">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '27%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-purple-700">General & Multi-Sport (অন্যান্য)</span>
                <span>5% (92K views)</span>
              </div>
              <div className="w-full bg-neutral-100 rounded-full h-2.5 overflow-hidden">
                <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '5%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Top Traffic Channels */}
        <div className="lg:col-span-6 bg-white p-5 rounded-xl border border-neutral-200/80 shadow-xs space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 pb-2 border-b border-neutral-200">
            Traffic Acquisition Sources
          </h3>

          <div className="space-y-3 text-xs">
            <div className="flex items-center justify-between p-2.5 bg-neutral-50 rounded-lg">
              <span className="font-semibold text-neutral-800">Google Search (Organic SEO)</span>
              <span className="font-mono font-bold text-neutral-700">46.2%</span>
            </div>
            <div className="flex items-center justify-between p-2.5 bg-neutral-50 rounded-lg">
              <span className="font-semibold text-neutral-800">Social (Facebook & Twitter/X)</span>
              <span className="font-mono font-bold text-neutral-700">31.8%</span>
            </div>
            <div className="flex items-center justify-between p-2.5 bg-neutral-50 rounded-lg">
              <span className="font-semibold text-neutral-800">Direct (Bookmarks / App PWA)</span>
              <span className="font-mono font-bold text-neutral-700">14.5%</span>
            </div>
            <div className="flex items-center justify-between p-2.5 bg-neutral-50 rounded-lg">
              <span className="font-semibold text-neutral-800">Push Notifications</span>
              <span className="font-mono font-bold text-neutral-700">7.5%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import {
  LayoutDashboard,
  FileText,
  FolderTree,
  Tags,
  UserCheck,
  Image as ImageIcon,
  Video,
  Flame,
  Star,
  TrendingUp,
  CircleDot,
  Calendar,
  Radio,
  Shield,
  User,
  Trophy,
  LayoutTemplate,
  Compass,
  FileCode,
  Megaphone,
  Search,
  Bell,
  BarChart3,
  Share2,
  Users,
  KeyRound,
  Settings,
  History,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  X,
} from 'lucide-react';
import { useRouter } from '../../router/RouterContext';
import { Link } from '../../router/Link';
import { authService } from '../../services/authService';
import { canRoleAccessRoute } from '../../lib/permissions/rbac';

interface NavItem {
  label: string;
  banglaLabel?: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

interface NavGroup {
  id: string;
  title: string;
  items: NavItem[];
}

const navGroups: NavGroup[] = [
  {
    id: 'overview',
    title: 'Overview',
    items: [
      { label: 'Dashboard', banglaLabel: 'ড্যাশবোর্ড', href: '/admin', icon: LayoutDashboard },
    ],
  },
  {
    id: 'content',
    title: 'Content',
    items: [
      { label: 'Articles', banglaLabel: 'নিবন্ধ ও সংবাদ', href: '/admin/articles', icon: FileText },
      { label: 'Categories', banglaLabel: 'ক্যাটাগরি', href: '/admin/categories', icon: FolderTree },
      { label: 'Tags', banglaLabel: 'ট্যাগ', href: '/admin/tags', icon: Tags },
      { label: 'Authors', banglaLabel: 'লেখক ও প্রতিবেদক', href: '/admin/authors', icon: UserCheck },
      { label: 'Media Library', banglaLabel: 'মিডিয়া গ্যালারি', href: '/admin/media', icon: ImageIcon },
      { label: 'Videos', banglaLabel: 'ভিডিও', href: '/admin/videos', icon: Video },
      { label: 'Breaking News', banglaLabel: 'ব্রেকিং নিউজ', href: '/admin/breaking-news', icon: Flame },
      { label: 'Featured News', banglaLabel: 'ফিচার্ড নিউজ', href: '/admin/featured', icon: Star },
      { label: 'Trending News', banglaLabel: 'ট্রেন্ডিং', href: '/admin/trending', icon: TrendingUp },
    ],
  },
  {
    id: 'sports',
    title: 'Sports',
    items: [
      { label: 'Cricket', banglaLabel: 'ক্রিকেট হাব', href: '/admin/cricket', icon: CircleDot },
      { label: 'Football', banglaLabel: 'ফুটবল হাব', href: '/admin/football', icon: Shield },
      { label: 'Matches', banglaLabel: 'ম্যাচ ব্যবস্থাপনা', href: '/admin/matches', icon: Calendar },
      { label: 'Live Scores', banglaLabel: 'লাইভ স্কোর ফিড', href: '/admin/live', icon: Radio, badge: 'Demo' },
      { label: 'Teams', banglaLabel: 'দলসমূহ', href: '/admin/teams', icon: Users },
      { label: 'Players', banglaLabel: 'খেলোয়াড়', href: '/admin/players', icon: User },
      { label: 'Competitions', banglaLabel: 'প্রতিযোগিতা', href: '/admin/competitions', icon: Trophy },
    ],
  },
  {
    id: 'website',
    title: 'Website',
    items: [
      { label: 'Homepage', banglaLabel: 'হোমপেজ লেআউট', href: '/admin/homepage', icon: LayoutTemplate },
      { label: 'Navigation', banglaLabel: 'নেভিগেশন মেনু', href: '/admin/navigation', icon: Compass },
      { label: 'Static Pages', banglaLabel: 'স্থির পৃষ্ঠা', href: '/admin/pages', icon: FileCode },
      { label: 'Advertisements', banglaLabel: 'বিজ্ঞাপন', href: '/admin/ads', icon: Megaphone },
      { label: 'SEO Settings', banglaLabel: 'এসইও কনফিগ', href: '/admin/seo', icon: Search },
      { label: 'Notifications', banglaLabel: 'নোটিফিকেশন', href: '/admin/notifications', icon: Bell },
    ],
  },
  {
    id: 'marketing',
    title: 'Marketing & Analytics',
    items: [
      { label: 'Analytics', banglaLabel: 'অ্যানালিটিক্স', href: '/admin/analytics', icon: BarChart3 },
      { label: 'Social Media', banglaLabel: 'সোশ্যাল প্রকাশনা', href: '/admin/social', icon: Share2 },
    ],
  },
  {
    id: 'administration',
    title: 'Administration',
    items: [
      { label: 'Users', banglaLabel: 'ব্যবহারকারী', href: '/admin/users', icon: Users },
      { label: 'Roles & Permissions', banglaLabel: 'রোল ও পারমিশন', href: '/admin/roles', icon: KeyRound },
      { label: 'Site Settings', banglaLabel: 'সাইট সেটিংস', href: '/admin/settings', icon: Settings },
      { label: 'Activity Logs', banglaLabel: 'অ্যাক্টিভিটি লগ', href: '/admin/logs', icon: History },
    ],
  },
];

interface AdminSidebarProps {
  isMobileOpen: boolean;
  onMobileClose: () => void;
  isCollapsed: boolean;
}

export const AdminSidebar: React.FC<AdminSidebarProps> = ({
  isMobileOpen,
  onMobileClose,
  isCollapsed,
}) => {
  const { currentPath } = useRouter();
  const [collapsedGroups, setCollapsedGroups] = useState<Record<string, boolean>>({});
  const currentUser = authService.getCurrentUser();
  const userRole = (currentUser?.role === 'admin' ? 'admin' : 'manager') as 'admin' | 'manager';

  const toggleGroup = (groupId: string) => {
    setCollapsedGroups((prev) => ({ ...prev, [groupId]: !prev[groupId] }));
  };

  const isItemActive = (href: string) => {
    if (href === '/admin') {
      return currentPath === '/admin' || currentPath === '/admin/';
    }
    return currentPath === href || currentPath.startsWith(`${href}/`);
  };

  // Filter groups according to RBAC role
  const visibleGroups = navGroups
    .map((group) => ({
      ...group,
      items: group.items.filter((item) => canRoleAccessRoute(userRole, item.href)),
    }))
    .filter((group) => group.items.length > 0);

  const sidebarContent = (
    <div className="flex flex-col h-full bg-neutral-900 text-neutral-300">
      {/* Brand Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-neutral-800 shrink-0">
        <Link href="/admin" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center font-black text-white text-base shadow-sm">
            CF
          </div>
          {!isCollapsed && (
            <div className="flex flex-col">
              <span className="text-base font-black tracking-tight text-white leading-none">
                Cric<span className="text-emerald-400">Fot</span>
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-[10px] font-semibold tracking-wider uppercase text-neutral-400">
                  CMS
                </span>
                <span
                  className={`text-[9px] font-mono px-1.5 py-0.2 rounded font-bold uppercase ${
                    userRole === 'admin'
                      ? 'bg-red-950/80 text-red-300 border border-red-800/60'
                      : 'bg-blue-950/80 text-blue-300 border border-blue-800/60'
                  }`}
                >
                  {userRole}
                </span>
              </div>
            </div>
          )}
        </Link>

        {isMobileOpen && (
          <button
            onClick={onMobileClose}
            className="p-1 rounded-md text-neutral-400 hover:text-white lg:hidden"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Nav List */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6 scrollbar-thin scrollbar-thumb-neutral-800">
        {visibleGroups.map((group) => {
          const isGroupCollapsed = collapsedGroups[group.id] && !isCollapsed;

          return (
            <div key={group.id} className="space-y-1">
              {!isCollapsed ? (
                <button
                  type="button"
                  onClick={() => toggleGroup(group.id)}
                  className="w-full flex items-center justify-between px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-neutral-500 hover:text-neutral-300 transition-colors"
                >
                  <span>{group.title}</span>
                  {isGroupCollapsed ? (
                    <ChevronRight className="w-3.5 h-3.5" />
                  ) : (
                    <ChevronDown className="w-3.5 h-3.5" />
                  )}
                </button>
              ) : (
                <div className="h-px bg-neutral-800 my-2" />
              )}

              {!isGroupCollapsed && (
                <div className="space-y-0.5">
                  {group.items.map((item) => {
                    const active = isItemActive(item.href);
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => {
                          if (isMobileOpen) onMobileClose();
                        }}
                        className={`group relative flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                          active
                            ? 'bg-emerald-600 text-white shadow-xs font-semibold'
                            : 'text-neutral-300 hover:bg-neutral-800/80 hover:text-white'
                        }`}
                        title={isCollapsed ? item.label : undefined}
                      >
                        <Icon
                          className={`w-4 h-4 shrink-0 transition-transform ${
                            active ? 'text-white' : 'text-neutral-400 group-hover:text-emerald-400'
                          }`}
                        />
                        {!isCollapsed && (
                          <div className="flex items-center justify-between flex-1 truncate">
                            <span className="truncate">{item.label}</span>
                            {item.badge && (
                              <span
                                className={`text-[10px] px-1.5 py-0.2 rounded-xs font-bold uppercase ${
                                  active ? 'bg-emerald-700 text-white' : 'bg-neutral-800 text-amber-400'
                                }`}
                              >
                                {item.badge}
                              </span>
                            )}
                          </div>
                        )}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer Profile & Live Link */}
      <div className="p-3 border-t border-neutral-800 bg-neutral-950/60 shrink-0">
        <Link
          href="/"
          className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-neutral-400 hover:text-emerald-400 rounded-lg hover:bg-neutral-900 transition-colors"
        >
          <ExternalLink className="w-4 h-4 shrink-0" />
          {!isCollapsed && <span>View Public Website</span>}
        </Link>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`hidden lg:flex flex-col shrink-0 border-r border-neutral-800 transition-all duration-200 ${
          isCollapsed ? 'w-16' : 'w-64'
        }`}
      >
        {sidebarContent}
      </aside>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-neutral-950/60 backdrop-blur-xs"
            onClick={onMobileClose}
            aria-hidden="true"
          />
          <div className="relative w-72 max-w-[85vw] h-full shadow-2xl z-10">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
};

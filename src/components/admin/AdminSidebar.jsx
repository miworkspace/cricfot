'use client';
import { useState } from "react";
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
  X
} from "lucide-react";
import { useRouter } from "../../router/RouterContext";
import { Link } from "../../router/Link";
import { authService } from "../../services/authService";
import { canRoleAccessRoute } from "../../lib/permissions/rbac";
const navGroups = [
  {
    id: "overview",
    title: "Overview",
    items: [
      { label: "Dashboard", banglaLabel: "\u09A1\u09CD\u09AF\u09BE\u09B6\u09AC\u09CB\u09B0\u09CD\u09A1", href: "/admin", icon: LayoutDashboard }
    ]
  },
  {
    id: "content",
    title: "Content",
    items: [
      { label: "Articles", banglaLabel: "\u09A8\u09BF\u09AC\u09A8\u09CD\u09A7 \u0993 \u09B8\u0982\u09AC\u09BE\u09A6", href: "/admin/articles", icon: FileText },
      { label: "Categories", banglaLabel: "\u0995\u09CD\u09AF\u09BE\u099F\u09BE\u0997\u09B0\u09BF", href: "/admin/categories", icon: FolderTree },
      { label: "Tags", banglaLabel: "\u099F\u09CD\u09AF\u09BE\u0997", href: "/admin/tags", icon: Tags },
      { label: "Authors", banglaLabel: "\u09B2\u09C7\u0996\u0995 \u0993 \u09AA\u09CD\u09B0\u09A4\u09BF\u09AC\u09C7\u09A6\u0995", href: "/admin/authors", icon: UserCheck },
      { label: "Media Library", banglaLabel: "\u09AE\u09BF\u09A1\u09BF\u09AF\u09BC\u09BE \u0997\u09CD\u09AF\u09BE\u09B2\u09BE\u09B0\u09BF", href: "/admin/media", icon: ImageIcon },
      { label: "Videos", banglaLabel: "\u09AD\u09BF\u09A1\u09BF\u0993", href: "/admin/videos", icon: Video },
      { label: "Breaking News", banglaLabel: "\u09AC\u09CD\u09B0\u09C7\u0995\u09BF\u0982 \u09A8\u09BF\u0989\u099C", href: "/admin/breaking-news", icon: Flame },
      { label: "Featured News", banglaLabel: "\u09AB\u09BF\u099A\u09BE\u09B0\u09CD\u09A1 \u09A8\u09BF\u0989\u099C", href: "/admin/featured", icon: Star },
      { label: "Trending News", banglaLabel: "\u099F\u09CD\u09B0\u09C7\u09A8\u09CD\u09A1\u09BF\u0982", href: "/admin/trending", icon: TrendingUp }
    ]
  },
  {
    id: "sports",
    title: "Sports",
    items: [
      { label: "Cricket", banglaLabel: "\u0995\u09CD\u09B0\u09BF\u0995\u09C7\u099F \u09B9\u09BE\u09AC", href: "/admin/cricket", icon: CircleDot },
      { label: "Football", banglaLabel: "\u09AB\u09C1\u099F\u09AC\u09B2 \u09B9\u09BE\u09AC", href: "/admin/football", icon: Shield },
      { label: "Matches", banglaLabel: "\u09AE\u09CD\u09AF\u09BE\u099A \u09AC\u09CD\u09AF\u09AC\u09B8\u09CD\u09A5\u09BE\u09AA\u09A8\u09BE", href: "/admin/matches", icon: Calendar },
      { label: "Live Scores", banglaLabel: "\u09B2\u09BE\u0987\u09AD \u09B8\u09CD\u0995\u09CB\u09B0 \u09AB\u09BF\u09A1", href: "/admin/live", icon: Radio, badge: "Demo" },
      { label: "Teams", banglaLabel: "\u09A6\u09B2\u09B8\u09AE\u09C2\u09B9", href: "/admin/teams", icon: Users },
      { label: "Players", banglaLabel: "\u0996\u09C7\u09B2\u09CB\u09AF\u09BC\u09BE\u09A1\u09BC", href: "/admin/players", icon: User },
      { label: "Competitions", banglaLabel: "\u09AA\u09CD\u09B0\u09A4\u09BF\u09AF\u09CB\u0997\u09BF\u09A4\u09BE", href: "/admin/competitions", icon: Trophy }
    ]
  },
  {
    id: "website",
    title: "Website",
    items: [
      { label: "Homepage", banglaLabel: "\u09B9\u09CB\u09AE\u09AA\u09C7\u099C \u09B2\u09C7\u0986\u0989\u099F", href: "/admin/homepage", icon: LayoutTemplate },
      { label: "Navigation", banglaLabel: "\u09A8\u09C7\u09AD\u09BF\u0997\u09C7\u09B6\u09A8 \u09AE\u09C7\u09A8\u09C1", href: "/admin/navigation", icon: Compass },
      { label: "Static Pages", banglaLabel: "\u09B8\u09CD\u09A5\u09BF\u09B0 \u09AA\u09C3\u09B7\u09CD\u09A0\u09BE", href: "/admin/pages", icon: FileCode },
      { label: "Advertisements", banglaLabel: "\u09AC\u09BF\u099C\u09CD\u099E\u09BE\u09AA\u09A8", href: "/admin/ads", icon: Megaphone },
      { label: "SEO Settings", banglaLabel: "\u098F\u09B8\u0987\u0993 \u0995\u09A8\u09AB\u09BF\u0997", href: "/admin/seo", icon: Search },
      { label: "Notifications", banglaLabel: "\u09A8\u09CB\u099F\u09BF\u09AB\u09BF\u0995\u09C7\u09B6\u09A8", href: "/admin/notifications", icon: Bell }
    ]
  },
  {
    id: "marketing",
    title: "Marketing & Analytics",
    items: [
      { label: "Analytics", banglaLabel: "\u0985\u09CD\u09AF\u09BE\u09A8\u09BE\u09B2\u09BF\u099F\u09BF\u0995\u09CD\u09B8", href: "/admin/analytics", icon: BarChart3 },
      { label: "Social Media", banglaLabel: "\u09B8\u09CB\u09B6\u09CD\u09AF\u09BE\u09B2 \u09AA\u09CD\u09B0\u0995\u09BE\u09B6\u09A8\u09BE", href: "/admin/social", icon: Share2 }
    ]
  },
  {
    id: "administration",
    title: "Administration",
    items: [
      { label: "Users", banglaLabel: "\u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0\u0995\u09BE\u09B0\u09C0", href: "/admin/users", icon: Users },
      { label: "Roles & Permissions", banglaLabel: "\u09B0\u09CB\u09B2 \u0993 \u09AA\u09BE\u09B0\u09AE\u09BF\u09B6\u09A8", href: "/admin/roles", icon: KeyRound },
      { label: "Site Settings", banglaLabel: "\u09B8\u09BE\u0987\u099F \u09B8\u09C7\u099F\u09BF\u0982\u09B8", href: "/admin/settings", icon: Settings },
      { label: "Activity Logs", banglaLabel: "\u0985\u09CD\u09AF\u09BE\u0995\u09CD\u099F\u09BF\u09AD\u09BF\u099F\u09BF \u09B2\u0997", href: "/admin/logs", icon: History }
    ]
  }
];
export const AdminSidebar = ({
  isMobileOpen,
  onMobileClose,
  isCollapsed
}) => {
  const { currentPath } = useRouter();
  const [collapsedGroups, setCollapsedGroups] = useState({});
  const currentUser = authService.getCurrentUser();
  const userRole = currentUser?.role === "admin" ? "admin" : "manager";
  const toggleGroup = (groupId) => {
    setCollapsedGroups((prev) => ({ ...prev, [groupId]: !prev[groupId] }));
  };
  const isItemActive = (href) => {
    if (href === "/admin") {
      return currentPath === "/admin" || currentPath === "/admin/";
    }
    return currentPath === href || currentPath.startsWith(`${href}/`);
  };
  const visibleGroups = navGroups.map((group) => ({
    ...group,
    items: group.items.filter((item) => canRoleAccessRoute(userRole, item.href))
  })).filter((group) => group.items.length > 0);
  const sidebarContent = <div className="flex flex-col h-full bg-neutral-900 text-neutral-300">
      {
    /* Brand Header */
  }
      <div className="flex items-center justify-between px-4 py-4 border-b border-neutral-800 shrink-0">
        <Link href="/admin" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center font-black text-white text-base shadow-sm">
            CF
          </div>
          {!isCollapsed && <div className="flex flex-col">
              <span className="text-base font-black tracking-tight text-white leading-none">
                Cric<span className="text-emerald-400">Fot</span>
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-[10px] font-semibold tracking-wider uppercase text-neutral-400">
                  CMS
                </span>
                <span
    className={`text-[9px] font-mono px-1.5 py-0.2 rounded font-bold uppercase ${userRole === "admin" ? "bg-red-950/80 text-red-300 border border-red-800/60" : "bg-blue-950/80 text-blue-300 border border-blue-800/60"}`}
  >
                  {userRole}
                </span>
              </div>
            </div>}
        </Link>

        {isMobileOpen && <button
    onClick={onMobileClose}
    className="p-1 rounded-md text-neutral-400 hover:text-white lg:hidden"
  >
            <X className="w-5 h-5" />
          </button>}
      </div>

      {
    /* Nav List */
  }
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6 scrollbar-thin scrollbar-thumb-neutral-800">
        {visibleGroups.map((group) => {
    const isGroupCollapsed = collapsedGroups[group.id] && !isCollapsed;
    return <div key={group.id} className="space-y-1">
              {!isCollapsed ? <button
      type="button"
      onClick={() => toggleGroup(group.id)}
      className="w-full flex items-center justify-between px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-neutral-500 hover:text-neutral-300 transition-colors"
    >
                  <span>{group.title}</span>
                  {isGroupCollapsed ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button> : <div className="h-px bg-neutral-800 my-2" />}

              {!isGroupCollapsed && <div className="space-y-0.5">
                  {group.items.map((item) => {
      const active = isItemActive(item.href);
      const Icon = item.icon;
      return <Link
        key={item.href}
        href={item.href}
        onClick={() => {
          if (isMobileOpen) onMobileClose();
        }}
        className={`group relative flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-all ${active ? "bg-emerald-600 text-white shadow-xs font-semibold" : "text-neutral-300 hover:bg-neutral-800/80 hover:text-white"}`}
        title={isCollapsed ? item.label : void 0}
      >
                        <Icon
        className={`w-4 h-4 shrink-0 transition-transform ${active ? "text-white" : "text-neutral-400 group-hover:text-emerald-400"}`}
      />
                        {!isCollapsed && <div className="flex items-center justify-between flex-1 truncate">
                            <span className="truncate">{item.label}</span>
                            {item.badge && <span
        className={`text-[10px] px-1.5 py-0.2 rounded-xs font-bold uppercase ${active ? "bg-emerald-700 text-white" : "bg-neutral-800 text-amber-400"}`}
      >
                                {item.badge}
                              </span>}
                          </div>}
                      </Link>;
    })}
                </div>}
            </div>;
  })}
      </div>

      {
    /* Footer Profile & Live Link */
  }
      <div className="p-3 border-t border-neutral-800 bg-neutral-950/60 shrink-0">
        <Link
    href="/"
    className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-neutral-400 hover:text-emerald-400 rounded-lg hover:bg-neutral-900 transition-colors"
  >
          <ExternalLink className="w-4 h-4 shrink-0" />
          {!isCollapsed && <span>View Public Website</span>}
        </Link>
      </div>
    </div>;
  return <>
      {
    /* Desktop Sidebar */
  }
      <aside
    className={`hidden lg:flex flex-col shrink-0 border-r border-neutral-800 transition-all duration-200 ${isCollapsed ? "w-16" : "w-64"}`}
  >
        {sidebarContent}
      </aside>

      {
    /* Mobile Drawer */
  }
      {isMobileOpen && <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
    className="fixed inset-0 bg-neutral-950/60 backdrop-blur-xs"
    onClick={onMobileClose}
    aria-hidden="true"
  />
          <div className="relative w-72 max-w-[85vw] h-full shadow-2xl z-10">
            {sidebarContent}
          </div>
        </div>}
    </>;
};

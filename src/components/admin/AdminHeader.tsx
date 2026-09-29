import React, { useState, useRef, useEffect } from 'react';
import {
  Menu,
  Search,
  Bell,
  ExternalLink,
  ChevronDown,
  User,
  LogOut,
  Shield,
  CheckCircle2,
  AlertCircle,
  FileText,
} from 'lucide-react';
import { Link } from '../../router/Link';
import { useRouter } from '../../router/RouterContext';
import { AdminBreadcrumb, BreadcrumbItem } from './AdminBreadcrumb';
import { authService } from '../../services/authService';

interface AdminHeaderProps {
  onToggleSidebar: () => void;
  onOpenMobileMenu: () => void;
  onOpenSearch: () => void;
  breadcrumbs?: BreadcrumbItem[];
}

export const AdminHeader: React.FC<AdminHeaderProps> = ({
  onToggleSidebar,
  onOpenMobileMenu,
  onOpenSearch,
  breadcrumbs = [],
}) => {
  const { navigate } = useRouter();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(() => authService.getCurrentUser());

  const profileRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsubscribe = authService.subscribe((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setIsProfileOpen(false);
      }
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setIsNotifOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    setIsProfileOpen(false);
    authService.logout();
    navigate('/admin/login');
  };

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between h-14 px-4 bg-white border-b border-neutral-200">
      {/* Left controls */}
      <div className="flex items-center gap-3 min-w-0">
        <button
          type="button"
          onClick={onOpenMobileMenu}
          className="p-1.5 rounded-lg text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 lg:hidden transition-colors"
          title="Open Menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <button
          type="button"
          onClick={onToggleSidebar}
          className="hidden lg:flex p-1.5 rounded-lg text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
          title="Toggle Sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="hidden sm:block min-w-0">
          <AdminBreadcrumb items={breadcrumbs} />
        </div>
      </div>

      {/* Right controls */}
      <div className="flex items-center gap-2">
        {/* Global Search Button */}
        <button
          type="button"
          onClick={onOpenSearch}
          className="flex items-center gap-2 px-3 py-1.5 text-xs text-neutral-500 bg-neutral-100 hover:bg-neutral-200/80 rounded-lg border border-neutral-200 transition-colors"
          title="Search anything (Ctrl+K)"
        >
          <Search className="w-3.5 h-3.5" />
          <span className="hidden md:inline">Quick Search...</span>
          <kbd className="hidden md:inline-flex items-center text-[10px] font-mono bg-white px-1.5 py-0.5 rounded border border-neutral-200 text-neutral-400">
            ⌘K
          </kbd>
        </button>

        {/* Notifications Dropdown */}
        <div className="relative" ref={notifRef}>
          <button
            type="button"
            onClick={() => setIsNotifOpen((v) => !v)}
            className="relative p-2 rounded-lg text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
            title="Notifications"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-white" />
          </button>

          {isNotifOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-neutral-200 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2">
              <div className="px-4 py-3 border-b border-neutral-200 flex items-center justify-between">
                <span className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
                  Notifications
                </span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded-full">
                  3 New
                </span>
              </div>

              <div className="max-h-72 overflow-y-auto divide-y divide-neutral-100 text-xs">
                <div className="p-3 hover:bg-neutral-50 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-neutral-800">Article published</p>
                    <p className="text-neutral-500 text-[11px] line-clamp-1">
                      মিরপুর টেস্টে শ্রীলঙ্কার বিপক্ষে লিটন ও শান্তর দারুণ জুটি
                    </p>
                    <span className="text-[10px] text-neutral-400">10 mins ago</span>
                  </div>
                </div>

                <div className="p-3 hover:bg-neutral-50 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-neutral-800">Draft awaiting review</p>
                    <p className="text-neutral-500 text-[11px] line-clamp-1">
                      মুস্তাফিজের কাটারের সামনে কেন পরাস্ত বিশ্বসেরা ব্যাটাররা?
                    </p>
                    <span className="text-[10px] text-neutral-400">1 hour ago</span>
                  </div>
                </div>

                <div className="p-3 hover:bg-neutral-50 flex items-start gap-2.5">
                  <FileText className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-neutral-800">Breaking ticker updated</p>
                    <p className="text-neutral-500 text-[11px]">
                      Prioritized Mirpur Test fourth day report.
                    </p>
                    <span className="text-[10px] text-neutral-400">2 hours ago</span>
                  </div>
                </div>
              </div>

              <div className="p-2 border-t border-neutral-200 bg-neutral-50 text-center">
                <Link
                  href="/admin/notifications"
                  onClick={() => setIsNotifOpen(false)}
                  className="text-xs font-semibold text-emerald-700 hover:text-emerald-800"
                >
                  Manage all notifications
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* View Public Website */}
        <Link
          href="/"
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-200 transition-colors"
          title="Open Public Website"
        >
          <span>View Website</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </Link>

        {/* User Profile */}
        <div className="relative" ref={profileRef}>
          <button
            type="button"
            onClick={() => setIsProfileOpen((v) => !v)}
            className="flex items-center gap-2 p-1 pl-2 rounded-lg hover:bg-neutral-100 transition-colors"
          >
            <img
              src={currentUser?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80'}
              alt={currentUser?.name || 'Admin Avatar'}
              className="w-7 h-7 rounded-full object-cover border border-neutral-300"
            />
            <div className="hidden xl:flex flex-col text-left">
              <span className="text-xs font-bold text-neutral-900 leading-tight">
                {currentUser?.name || 'Admin User'}
              </span>
              <span className="text-[10px] text-neutral-500 leading-tight">
                {currentUser?.roleName || 'Super Admin'}
              </span>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-neutral-200 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2">
              <div className="px-4 py-3 bg-neutral-50 border-b border-neutral-200">
                <p className="text-xs font-bold text-neutral-900 truncate">
                  {currentUser?.name || 'Chief Newsroom Editor'}
                </p>
                <p className="text-[11px] text-neutral-500 truncate">
                  {currentUser?.email || 'admin@cricfot.com'}
                </p>
                <div className="mt-1.5 flex items-center gap-1 text-[10px] text-emerald-700 font-semibold">
                  <Shield className="w-3 h-3" />
                  <span>Role: {currentUser?.roleName || 'Super Admin'}</span>
                </div>
              </div>

              <div className="p-1 text-xs">
                <Link
                  href="/admin/users"
                  onClick={() => setIsProfileOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors"
                >
                  <User className="w-4 h-4 text-neutral-400" />
                  <span>My Profile & Users</span>
                </Link>
                <Link
                  href="/admin/settings"
                  onClick={() => setIsProfileOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors"
                >
                  <Shield className="w-4 h-4 text-neutral-400" />
                  <span>Site Configuration</span>
                </Link>
              </div>

              <div className="p-1 border-t border-neutral-200">
                <button
                  type="button"
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-rose-600 hover:bg-rose-50 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Log Out</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

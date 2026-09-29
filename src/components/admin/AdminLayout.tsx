import React, { useState } from 'react';
import { AdminSidebar } from './AdminSidebar';
import { AdminHeader } from './AdminHeader';
import { AdminCommandPalette } from './AdminCommandPalette';
import { ToastProvider } from './AdminToast';
import { BreadcrumbItem } from './AdminBreadcrumb';

interface AdminLayoutProps {
  children: React.ReactNode;
  breadcrumbs?: BreadcrumbItem[];
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children, breadcrumbs = [] }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <ToastProvider>
      <div className="flex h-screen bg-neutral-100/70 overflow-hidden font-sans text-neutral-900">
        {/* Left Sidebar */}
        <AdminSidebar
          isCollapsed={isSidebarCollapsed}
          isMobileOpen={isMobileSidebarOpen}
          onMobileClose={() => setIsMobileSidebarOpen(false)}
        />

        {/* Right Content Area */}
        <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
          <AdminHeader
            onToggleSidebar={() => setIsSidebarCollapsed((prev) => !prev)}
            onOpenMobileMenu={() => setIsMobileSidebarOpen(true)}
            onOpenSearch={() => setIsSearchOpen(true)}
            breadcrumbs={breadcrumbs}
          />

          <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">{children}</div>
          </main>
        </div>

        {/* Global Command Palette */}
        <AdminCommandPalette
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
        />
      </div>
    </ToastProvider>
  );
};

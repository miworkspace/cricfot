import React from 'react';
import { ShieldAlert, ArrowLeft, Lock, LayoutDashboard } from 'lucide-react';
import { Link } from '../../router/Link';
import { authService } from '../../services/authService';

interface AdminAccessDeniedProps {
  attemptedPath?: string;
  requiredRole?: string;
}

export const AdminAccessDenied: React.FC<AdminAccessDeniedProps> = ({
  attemptedPath = '',
  requiredRole = 'admin',
}) => {
  const currentUser = authService.getCurrentUser();

  return (
    <div className="py-12 sm:py-20 flex flex-col items-center justify-center text-center px-4">
      <div className="w-16 h-16 rounded-2xl bg-red-100 text-red-600 border border-red-200 flex items-center justify-center mb-5 shadow-xs">
        <ShieldAlert className="w-8 h-8" />
      </div>

      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-50 text-red-700 border border-red-200 mb-3">
        <Lock className="w-3.5 h-3.5" />
        <span>403 — অ্যাক্সেস সংরক্ষিত / Access Forbidden</span>
      </div>

      <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight font-serif-bengali mb-2">
        এই মডিউলে প্রবেশের অনুমতি নেই
      </h1>

      <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed mb-6 font-sans">
        আপনার বর্তমান অ্যাকাউন্টটি <strong className="font-semibold text-neutral-900 uppercase">'{currentUser?.role || 'manager'}'</strong> রোলযুক্ত।
        এই সেকশনটি পরিচালনা করার জন্য <strong className="font-semibold text-red-700 uppercase">'{requiredRole}'</strong> অধিকার প্রয়োজন।
        {attemptedPath && (
          <span className="block text-xs font-mono text-neutral-400 mt-2 bg-neutral-100 py-1 px-2 rounded-xs">
            Path: {attemptedPath}
          </span>
        )}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/admin"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-xs font-bold transition-colors shadow-xs"
        >
          <LayoutDashboard className="w-4 h-4 text-emerald-400" />
          <span>ড্যাশবোর্ডে ফিরুন</span>
        </Link>

        <Link
          href="/admin/articles"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-300 rounded-lg text-xs font-bold transition-colors shadow-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>নিবন্ধ তালিকায় যান</span>
        </Link>
      </div>
    </div>
  );
};

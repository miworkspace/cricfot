import React, { useState, useEffect } from 'react';
import { Users, Plus, Edit, Trash2, Shield, Mail, CheckCircle2, AlertTriangle, KeyRound } from 'lucide-react';
import { AdminPageHeader } from '../../components/admin/AdminPageHeader';
import { AdminConfirmDialog } from '../../components/admin/AdminConfirmDialog';
import { useAdminToast } from '../../components/admin/AdminToast';
import { mongoDB, MongoUser } from '../../lib/mongodb/db';
import { authService } from '../../services/authService';
import { Link } from '../../router/Link';
import { useRouter } from '../../router/RouterContext';

export const AdminUsersPage: React.FC = () => {
  const { showToast } = useAdminToast();
  const { navigate } = useRouter();
  const currentUser = authService.getCurrentUser();

  const [users, setUsers] = useState<MongoUser[]>([]);
  const [deleteTarget, setDeleteTarget] = useState<MongoUser | null>(null);

  const loadUsers = () => {
    setUsers([...mongoDB.getUsers()]);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleToggleStatus = (targetUser: MongoUser) => {
    if (!currentUser || currentUser.role !== 'admin') {
      showToast('শুধুমাত্র অ্যাডমিন স্ট্যাটাস পরিবর্তন করতে পারেন।', 'error');
      return;
    }

    const newStatus = targetUser.status === 'active' ? 'inactive' : 'active';
    try {
      mongoDB.updateUser(
        targetUser._id,
        { status: newStatus },
        { id: currentUser.id, name: currentUser.name, role: 'admin' }
      );
      showToast(`ব্যবহারকারী '${targetUser.name}' এর অ্যাকাউন্ট ${newStatus === 'active' ? 'সক্রিয়' : 'নিষ্ক্রিয়'} করা হয়েছে।`);
      loadUsers();
    } catch (err: unknown) {
      if (err instanceof Error) {
        showToast(err.message, 'error');
      }
    }
  };

  const handleDelete = () => {
    if (!deleteTarget || !currentUser) return;
    try {
      mongoDB.deleteUser(deleteTarget._id, { id: currentUser.id, name: currentUser.name, role: 'admin' });
      showToast(`'${deleteTarget.name}' অ্যাকাউন্ট অপসারিত হয়েছে।`);
      loadUsers();
    } catch (err: unknown) {
      if (err instanceof Error) {
        showToast(err.message, 'error');
      }
    } finally {
      setDeleteTarget(null);
    }
  };

  return (
    <div className="space-y-6 pb-12">
      <AdminPageHeader
        title="User & Staff Management"
        banglaTitle="ব্যবহারকারী ব্যবস্থাপনা"
        description="অ্যাডমিন ও ম্যানেজার রোল বরাদ্দ, স্ট্যাটাস পর্যবেক্ষণ ও অ্যাক্টিভিটি নিয়ন্ত্রণ করুন"
      >
        <Link
          href="/admin/users/new"
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-xs"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>নতুন ম্যানেজার / অ্যাডমিন যোগ করুন</span>
        </Link>
      </AdminPageHeader>

      {/* Info notice about role safety */}
      <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 flex items-start gap-3 text-xs text-neutral-600">
        <Shield className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
        <div>
          <strong className="text-neutral-900 font-bold block mb-0.5">রোল-বেসড অ্যাক্সেস কন্ট্রোল (RBAC):</strong>
          সিস্টেমে শুধুমাত্র দুটি সক্রিয় রোল রয়েছে: <span className="font-semibold text-neutral-900">Admin</span> (পূর্ণ নিয়ন্ত্রণ) এবং <span className="font-semibold text-neutral-900">Manager</span> (সংবাদ ও কন্টেন্ট সিএমএস)। সিস্টেমের সুরক্ষার জন্য শেষ সক্রিয় অ্যাডমিন অ্যাকাউন্ট মুছে ফেলা বা নিষ্ক্রিয় করা প্রতিরোধিত।
        </div>
      </div>

      <div className="bg-white rounded-xl border border-neutral-200/80 overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-neutral-50 border-b border-neutral-200 text-neutral-500 font-semibold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3 px-4">ব্যবহারকারী / Staff</th>
                <th className="py-3 px-3">ইমেইল ঠিকানা</th>
                <th className="py-3 px-3">বরাদ্দকৃত রোল</th>
                <th className="py-3 px-3">স্ট্যাটাস</th>
                <th className="py-3 px-3">সর্বশেষ লগইন</th>
                <th className="py-3 px-3">তৈরির তারিখ</th>
                <th className="py-3 px-4 text-right">পদক্ষেপ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {users.map((u) => {
                const isAdmin = u.role === 'admin';
                return (
                  <tr key={u._id} className="hover:bg-neutral-50/80 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={u.profileImage || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'}
                          alt={u.name}
                          className="w-8 h-8 rounded-full object-cover border border-neutral-200"
                        />
                        <div>
                          <span className="font-bold text-neutral-900 block">{u.name}</span>
                          <span className="text-[10px] text-neutral-400 font-mono">ID: {u._id}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-3 font-mono text-neutral-600">{u.email}</td>
                    <td className="py-3 px-3">
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                          isAdmin
                            ? 'bg-red-100 text-red-800 border border-red-200'
                            : 'bg-blue-100 text-blue-800 border border-blue-200'
                        }`}
                      >
                        {u.role}
                      </span>
                    </td>
                    <td className="py-3 px-3">
                      <button
                        type="button"
                        onClick={() => handleToggleStatus(u)}
                        className={`px-2 py-0.5 rounded-xs text-[10px] font-semibold transition-colors ${
                          u.status === 'active'
                            ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                            : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
                        }`}
                      >
                        {u.status === 'active' ? '● Active' : '○ Inactive'}
                      </button>
                    </td>
                    <td className="py-3 px-3 text-neutral-500 font-mono text-[11px]">
                      {u.lastLoginAt ? new Date(u.lastLoginAt).toLocaleString('bn-BD') : 'লগইন রেকর্ড নেই'}
                    </td>
                    <td className="py-3 px-3 text-neutral-400 font-mono text-[11px]">
                      {new Date(u.createdAt).toLocaleDateString('bn-BD')}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <Link
                          href={`/admin/users/${u._id}`}
                          className="p-1.5 text-neutral-500 hover:text-emerald-600 hover:bg-neutral-100 rounded transition-colors"
                          title="সম্পাদনা করুন"
                        >
                          <Edit className="w-4 h-4" />
                        </Link>
                        <button
                          type="button"
                          onClick={() => setDeleteTarget(u)}
                          className="p-1.5 text-neutral-400 hover:text-red-600 hover:bg-neutral-100 rounded transition-colors"
                          title="অ্যাকাউন্ট মুছে ফেলুন"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {deleteTarget && (
        <AdminConfirmDialog
          isOpen={true}
          title="ব্যবহারকারী অ্যাকাউন্ট মুছে ফেলতে চান?"
          message={`আপনি '${deleteTarget.name}' (${deleteTarget.email}) এর অ্যাকাউন্ট ও সমস্ত পারমিশন স্থায়ীভাবে প্রত্যাহার করতে যাচ্ছেন।`}
          confirmText="মুছে ফেলুন"
          variant="danger"
          onConfirm={handleDelete}
          onClose={() => setDeleteTarget(null)}
        />
      )}
    </div>
  );
};

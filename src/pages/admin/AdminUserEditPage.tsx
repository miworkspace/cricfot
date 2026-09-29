import React, { useState, useEffect } from 'react';
import { Users, ArrowLeft, Save, Shield, Mail, KeyRound, CheckCircle2, AlertCircle } from 'lucide-react';
import { Link } from '../../router/Link';
import { useRouter } from '../../router/RouterContext';
import { AdminPageHeader } from '../../components/admin/AdminPageHeader';
import { useAdminToast } from '../../components/admin/AdminToast';
import { mongoDB, MongoUser } from '../../lib/mongodb/db';
import { authService } from '../../services/authService';
import { userSchema } from '../../lib/validations/schemas';

interface AdminUserEditPageProps {
  userId?: string;
  isNew?: boolean;
}

export const AdminUserEditPage: React.FC<AdminUserEditPageProps> = ({ userId, isNew = false }) => {
  const { navigate } = useRouter();
  const { showToast } = useAdminToast();
  const currentUser = authService.getCurrentUser();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'admin' | 'manager'>('manager');
  const [status, setStatus] = useState<'active' | 'inactive'>('active');
  const [profileImage, setProfileImage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [existingUser, setExistingUser] = useState<MongoUser | null>(null);

  useEffect(() => {
    if (!isNew && userId) {
      const u = mongoDB.getUserById(userId);
      if (u) {
        setExistingUser(u);
        setName(u.name);
        setEmail(u.email);
        setRole(u.role);
        setStatus(u.status);
        setProfileImage(u.profileImage || '');
      }
    }
  }, [userId, isNew]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const parseResult = userSchema.safeParse({
      name,
      email,
      password: isNew ? password : password || undefined,
      role,
      status,
      profileImage,
    });

    if (!parseResult.success) {
      const fieldErrors: Record<string, string> = {};
      parseResult.error.issues.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0].toString()] = err.message;
        }
      });
      setErrors(fieldErrors);
      showToast('অনুগ্রহ করে ফর্মের ভুলগুলো সংশোধন করুন।', 'error');
      return;
    }

    if (!currentUser || currentUser.role !== 'admin') {
      showToast('শুধুমাত্র অ্যাডমিন নতুন ব্যবহারকারী তৈরি বা পরিবর্তন করতে পারেন।', 'error');
      return;
    }

    setIsSubmitting(true);
    try {
      const actor = {
        id: currentUser.id,
        name: currentUser.name,
        role: currentUser.role as 'admin' | 'manager',
      };

      if (isNew) {
        mongoDB.createUser(
          {
            name,
            email,
            role,
            status,
            profileImage: profileImage || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
            lastLoginAt: undefined,
          },
          actor
        );
        showToast(`ব্যবহারকারী '${name}' সফলভাবে তৈরি হয়েছে!`);
      } else if (userId) {
        mongoDB.updateUser(
          userId,
          {
            name,
            email,
            role,
            status,
            profileImage,
          },
          actor
        );
        showToast(`ব্যবহারকারী '${name}' আপডেট সম্পন্ন হয়েছে!`);
      }

      setTimeout(() => {
        navigate('/admin/users');
      }, 500);
    } catch (err: unknown) {
      if (err instanceof Error) {
        showToast(err.message, 'error');
      } else {
        showToast('ব্যবহারকারী সংরক্ষণে ত্রুটি হয়েছে।', 'error');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6 pb-12">
      <AdminPageHeader
        title={isNew ? 'Create New User / Manager' : 'Edit User Profile'}
        banglaTitle={isNew ? 'নতুন ব্যবহারকারী' : 'ব্যবহারকারী সম্পাদনা'}
        description={isNew ? 'সিএমএস অ্যাডমিন বা ম্যানেজার অ্যাকাউন্ট তৈরি করুন' : `আইডি: ${userId}`}
      />

      <div className="max-w-2xl bg-white border border-neutral-200 rounded-lg p-6 sm:p-8 shadow-xs">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
              পুরো নাম / Full Name *
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Shakil Mahmud"
              className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600"
            />
            {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
              অফিসিয়াল ইমেইল / Work Email *
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="editor@cricfot.com"
                className="w-full pl-9 pr-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 font-mono"
              />
            </div>
            {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
              {isNew ? 'পাসওয়ার্ড / Initial Password *' : 'নতুন পাসওয়ার্ড (পরিবর্তন করতে চাইলে)'}
            </label>
            <div className="relative">
              <KeyRound className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={isNew ? 'কমপক্ষে ৬ অক্ষরের পাসওয়ার্ড দিন' : 'অপরিবর্তিত রাখতে ফাঁকা রাখুন'}
                className="w-full pl-9 pr-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 font-mono"
              />
            </div>
            {errors.password && <p className="text-xs text-red-600 mt-1">{errors.password}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                ড্যাশবোর্ড রোল / Assigned Role *
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value as 'admin' | 'manager')}
                className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 font-semibold"
              >
                <option value="manager">Manager (ম্যানেজার - কন্টেন্ট ও নিউজ সিএমএস)</option>
                <option value="admin">Admin (অ্যাডমিন - পূর্ণ নিয়ন্ত্রণ ও সেটিংস)</option>
              </select>
              <p className="text-[11px] text-neutral-500 mt-1">
                ম্যানেজার কেবল সংবাদ, মিডিয়া ও ক্যাটাগরি তৈরি করতে পারেন।
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                অ্যাকাউন্ট স্ট্যাটাস / Status
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as 'active' | 'inactive')}
                className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 font-semibold"
              >
                <option value="active">Active (সক্রিয়)</option>
                <option value="inactive">Inactive (সাময়িক স্থগিত)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
              প্রোফাইল ছবির লিংক / Avatar URL
            </label>
            <input
              type="url"
              value={profileImage}
              onChange={(e) => setProfileImage(e.target.value)}
              placeholder="https://images.unsplash.com/..."
              className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 font-mono text-xs"
            />
          </div>

          <div className="pt-4 border-t border-neutral-200 flex items-center justify-end gap-3">
            <Link
              href="/admin/users"
              className="px-4 py-2 text-xs font-semibold text-neutral-600 hover:text-neutral-900 border border-neutral-200 rounded-lg hover:bg-neutral-50"
            >
              বাতিল
            </Link>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-xs"
            >
              <Save className="w-4 h-4" />
              <span>{isSubmitting ? 'সংরক্ষণ হচ্ছে...' : isNew ? 'ব্যবহারকারী তৈরি করুন' : 'আপডেট সম্পন্ন করুন'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

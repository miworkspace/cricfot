'use client';
import { useState, useEffect } from "react";
import { Save, Mail, KeyRound } from "lucide-react";
import { Link } from "../../router/Link";
import { useRouter } from "../../router/RouterContext";
import { AdminPageHeader } from "../../components/admin/AdminPageHeader";
import { useAdminToast } from "../../components/admin/AdminToast";
import { mongoDB } from "../../lib/mongodb/db";
import { authService } from "../../services/authService";
import { userSchema } from "../../lib/validations/schemas";
export const AdminUserEditPage = ({ userId, isNew = false }) => {
  const { navigate } = useRouter();
  const { showToast } = useAdminToast();
  const currentUser = authService.getCurrentUser();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("manager");
  const [status, setStatus] = useState("active");
  const [profileImage, setProfileImage] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [existingUser, setExistingUser] = useState(null);
  useEffect(() => {
    if (!isNew && userId) {
      const u = mongoDB.getUserById(userId);
      if (u) {
        setExistingUser(u);
        setName(u.name);
        setEmail(u.email);
        setRole(u.role);
        setStatus(u.status);
        setProfileImage(u.profileImage || "");
      }
    }
  }, [userId, isNew]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    const parseResult = userSchema.safeParse({
      name,
      email,
      password: isNew ? password : password || void 0,
      role,
      status,
      profileImage
    });
    if (!parseResult.success) {
      const fieldErrors = {};
      parseResult.error.issues.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0].toString()] = err.message;
        }
      });
      setErrors(fieldErrors);
      showToast("\u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u09AB\u09B0\u09CD\u09AE\u09C7\u09B0 \u09AD\u09C1\u09B2\u0997\u09C1\u09B2\u09CB \u09B8\u0982\u09B6\u09CB\u09A7\u09A8 \u0995\u09B0\u09C1\u09A8\u0964", "error");
      return;
    }
    if (!currentUser || currentUser.role !== "admin") {
      showToast("\u09B6\u09C1\u09A7\u09C1\u09AE\u09BE\u09A4\u09CD\u09B0 \u0985\u09CD\u09AF\u09BE\u09A1\u09AE\u09BF\u09A8 \u09A8\u09A4\u09C1\u09A8 \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0\u0995\u09BE\u09B0\u09C0 \u09A4\u09C8\u09B0\u09BF \u09AC\u09BE \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8 \u0995\u09B0\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u09A8\u0964", "error");
      return;
    }
    setIsSubmitting(true);
    try {
      const actor = {
        id: currentUser.id,
        name: currentUser.name,
        role: currentUser.role
      };
      if (isNew) {
        mongoDB.createUser(
          {
            name,
            email,
            role,
            status,
            profileImage: profileImage || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
            lastLoginAt: void 0
          },
          actor
        );
        showToast(`\u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0\u0995\u09BE\u09B0\u09C0 '${name}' \u09B8\u09AB\u09B2\u09AD\u09BE\u09AC\u09C7 \u09A4\u09C8\u09B0\u09BF \u09B9\u09AF\u09BC\u09C7\u099B\u09C7!`);
      } else if (userId) {
        mongoDB.updateUser(
          userId,
          {
            name,
            email,
            role,
            status,
            profileImage
          },
          actor
        );
        showToast(`\u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0\u0995\u09BE\u09B0\u09C0 '${name}' \u0986\u09AA\u09A1\u09C7\u099F \u09B8\u09AE\u09CD\u09AA\u09A8\u09CD\u09A8 \u09B9\u09AF\u09BC\u09C7\u099B\u09C7!`);
      }
      setTimeout(() => {
        navigate("/admin/users");
      }, 500);
    } catch (err) {
      if (err instanceof Error) {
        showToast(err.message, "error");
      } else {
        showToast("\u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0\u0995\u09BE\u09B0\u09C0 \u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09A3\u09C7 \u09A4\u09CD\u09B0\u09C1\u099F\u09BF \u09B9\u09AF\u09BC\u09C7\u099B\u09C7\u0964", "error");
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  return <div className="space-y-6 pb-12">
      <AdminPageHeader
    title={isNew ? "Create New User / Manager" : "Edit User Profile"}
    banglaTitle={isNew ? "\u09A8\u09A4\u09C1\u09A8 \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0\u0995\u09BE\u09B0\u09C0" : "\u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0\u0995\u09BE\u09B0\u09C0 \u09B8\u09AE\u09CD\u09AA\u09BE\u09A6\u09A8\u09BE"}
    description={isNew ? "\u09B8\u09BF\u098F\u09AE\u098F\u09B8 \u0985\u09CD\u09AF\u09BE\u09A1\u09AE\u09BF\u09A8 \u09AC\u09BE \u09AE\u09CD\u09AF\u09BE\u09A8\u09C7\u099C\u09BE\u09B0 \u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09C1\u09A8" : `\u0986\u0987\u09A1\u09BF: ${userId}`}
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
              {isNew ? "\u09AA\u09BE\u09B8\u0993\u09AF\u09BC\u09BE\u09B0\u09CD\u09A1 / Initial Password *" : "\u09A8\u09A4\u09C1\u09A8 \u09AA\u09BE\u09B8\u0993\u09AF\u09BC\u09BE\u09B0\u09CD\u09A1 (\u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8 \u0995\u09B0\u09A4\u09C7 \u099A\u09BE\u0987\u09B2\u09C7)"}
            </label>
            <div className="relative">
              <KeyRound className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
              <input
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    placeholder={isNew ? "\u0995\u09AE\u09AA\u0995\u09CD\u09B7\u09C7 \u09EC \u0985\u0995\u09CD\u09B7\u09B0\u09C7\u09B0 \u09AA\u09BE\u09B8\u0993\u09AF\u09BC\u09BE\u09B0\u09CD\u09A1 \u09A6\u09BF\u09A8" : "\u0985\u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09BF\u09A4 \u09B0\u09BE\u0996\u09A4\u09C7 \u09AB\u09BE\u0981\u0995\u09BE \u09B0\u09BE\u0996\u09C1\u09A8"}
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
    onChange={(e) => setRole(e.target.value)}
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
    onChange={(e) => setStatus(e.target.value)}
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
              <span>{isSubmitting ? "\u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09A3 \u09B9\u099A\u09CD\u099B\u09C7..." : isNew ? "\u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0\u0995\u09BE\u09B0\u09C0 \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09C1\u09A8" : "\u0986\u09AA\u09A1\u09C7\u099F \u09B8\u09AE\u09CD\u09AA\u09A8\u09CD\u09A8 \u0995\u09B0\u09C1\u09A8"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>;
};

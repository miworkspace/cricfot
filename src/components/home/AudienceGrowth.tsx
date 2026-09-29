import React, { useState } from 'react';
import { Mail, CheckCircle2, Share2 } from 'lucide-react';

export const AudienceGrowth: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      // UI-only for now; ready for backend integration in future prompt
      setTimeout(() => {
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="py-8 sm:py-10 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 text-white rounded-xs p-6 sm:p-8 md:p-10 my-8 shadow-sm">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-600/20 text-red-500 mb-4 border border-red-500/30">
          <Mail className="w-6 h-6" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold font-serif-headline text-white tracking-tight mb-3">
          CricFot-এর সর্বশেষ আপডেট পান
        </h2>

        <p className="text-sm sm:text-base text-neutral-300 max-w-xl mx-auto leading-relaxed mb-6 font-sans">
          ক্রিকেট ও ফুটবলের সর্বশেষ খবর, বিশ্লেষণ ও ম্যাচ আপডেট পেতে আমাদের সঙ্গে থাকুন।
        </p>

        {/* Newsletter Signup (UI-only, ready for backend integration) */}
        <div className="max-w-md mx-auto mb-8">
          {isSubscribed ? (
            <div className="p-3 bg-emerald-950/80 border border-emerald-500/50 rounded-xs text-emerald-300 text-xs sm:text-sm flex items-center justify-center gap-2 animate-in fade-in">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>ধন্যবাদ! CricFot আপডেট তালিকায় আপনাকে যুক্ত করা হয়েছে।</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="আপনার ইমেইল ঠিকানা লিখুন..."
                required
                className="flex-1 px-4 py-2.5 bg-neutral-800/90 border border-neutral-700 text-white text-xs sm:text-sm rounded-xs placeholder:text-neutral-400 focus:outline-hidden focus:border-red-500 focus:ring-1 focus:ring-red-500"
                aria-label="ইমেইল সাবস্ক্রিপশন"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold rounded-xs transition-colors shadow-sm focus:outline-hidden focus:ring-2 focus:ring-red-500"
              >
                যুক্ত হোন
              </button>
            </form>
          )}
          <p className="text-[11px] text-neutral-400 mt-2">
            আমরা স্প্যাম করি না। যেকোনো সময় আনসাবস্ক্রাইব করতে পারবেন।
          </p>
        </div>

        {/* Social Follow Buttons */}
        <div className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
          <span className="text-xs text-neutral-400 font-medium flex items-center gap-1.5">
            <Share2 className="w-3.5 h-3.5" />
            সোশ্যাল মিডিয়ায় ফলো করুন:
          </span>

          <div className="flex items-center gap-2.5">
            <a
              href="#facebook"
              onClick={(e) => e.preventDefault()}
              className="px-3 py-1.5 bg-neutral-800 hover:bg-blue-600 text-neutral-200 hover:text-white text-xs font-semibold rounded-xs transition-colors flex items-center gap-1.5"
              aria-label="ফেসবুক পেজ"
            >
              <span>Facebook</span>
            </a>

            <a
              href="#youtube"
              onClick={(e) => e.preventDefault()}
              className="px-3 py-1.5 bg-neutral-800 hover:bg-red-600 text-neutral-200 hover:text-white text-xs font-semibold rounded-xs transition-colors flex items-center gap-1.5"
              aria-label="ইউটিউব চ্যানেল"
            >
              <span>YouTube</span>
            </a>

            <a
              href="#x"
              onClick={(e) => e.preventDefault()}
              className="px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white text-xs font-semibold rounded-xs transition-colors flex items-center gap-1.5"
              aria-label="এক্স (টুইটার)"
            >
              <span>X</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

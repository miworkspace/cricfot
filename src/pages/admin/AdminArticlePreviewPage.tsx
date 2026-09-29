import React, { useEffect, useState } from 'react';
import { ArrowLeft, CheckCircle, Clock, Eye, Edit3, Newspaper, Share2, Tag, User } from 'lucide-react';
import { Link } from '../../router/Link';
import { useRouter } from '../../router/RouterContext';
import { AdminService } from '../../services/adminService';
import { AdminArticle } from '../../types/admin';
import { toBanglaNumber } from '../../utils/banglaUtils';
import { GoogleAdSlot } from '../../components/ads/GoogleAdSlot';

interface AdminArticlePreviewPageProps {
  articleId: string;
}

export const AdminArticlePreviewPage: React.FC<AdminArticlePreviewPageProps> = ({ articleId }) => {
  const { navigate } = useRouter();
  const [article, setArticle] = useState<AdminArticle | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const data = await AdminService.getArticleById(articleId);
      setArticle(data || null);
      setLoading(false);
    }
    load();
  }, [articleId]);

  if (loading) {
    return (
      <div className="py-20 text-center">
        <div className="w-8 h-8 border-3 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
        <p className="text-xs text-neutral-500 font-sans">প্রিভিউ মোড লোড হচ্ছে...</p>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="py-16 text-center bg-white border border-neutral-200 rounded-lg p-8">
        <h2 className="text-base font-bold text-neutral-900 mb-2">প্রতিবেদন খুঁজে পাওয়া যায়নি</h2>
        <p className="text-xs text-neutral-500 mb-4">অনুরোধকৃত আর্টিকেল আইডিটি বিদ্যমান নেই।</p>
        <Link
          href="/admin/articles"
          className="inline-flex items-center gap-1.5 px-3 py-2 bg-neutral-900 text-white rounded text-xs font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>আর্টিকেল তালিকায় ফিরুন</span>
        </Link>
      </div>
    );
  }

  const paragraphs = (article.content || article.excerpt).split('\n\n');

  return (
    <div className="space-y-6 pb-12">
      {/* Top Preview Status Bar */}
      <div className="bg-amber-500 text-neutral-950 px-4 py-3 rounded-lg border border-amber-600 flex flex-wrap items-center justify-between gap-3 shadow-xs">
        <div className="flex items-center gap-2">
          <Eye className="w-4 h-4 shrink-0 text-neutral-900" />
          <span className="text-xs font-bold font-sans">
            নিউজ প্রিভিউ মোড (CMS Public Layout Simulation)
          </span>
          <span className="text-[10px] bg-neutral-950 text-white px-2 py-0.5 rounded font-mono font-bold uppercase">
            {article.status}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={`/admin/articles/${article.id}`}
            className="inline-flex items-center gap-1 px-3 py-1.5 bg-neutral-950 hover:bg-neutral-800 text-white rounded text-xs font-semibold transition-colors"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>এডিটরে ফিরে যান</span>
          </Link>
          <Link
            href="/admin/articles"
            className="inline-flex items-center gap-1 px-3 py-1.5 bg-white/90 hover:bg-white text-neutral-900 rounded text-xs font-semibold transition-colors border border-amber-600/40"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>তালিকায় ফিরুন</span>
          </Link>
        </div>
      </div>

      {/* Simulated Actual CricFot Broadsheet Article Page */}
      <div className="bg-white border border-neutral-200 rounded-lg p-5 sm:p-8 max-w-4xl mx-auto shadow-sm">
        {/* Category & Sport Kicker */}
        <div className="flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider mb-3">
          <span className="text-red-700">{article.sport === 'cricket' ? 'ক্রিকেট' : 'ফুটবল'}</span>
          <span className="text-neutral-300">•</span>
          <span className="text-neutral-600">{article.category}</span>
        </div>

        {/* Headline */}
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif-bengali text-neutral-950 leading-tight mb-4">
          {article.banglaTitle || article.title}
        </h1>

        {/* Subtitle / Excerpt */}
        {article.subtitle && (
          <p className="text-base sm:text-lg font-serif-bengali text-neutral-700 italic leading-snug mb-5 border-l-2 border-red-600 pl-3">
            {article.subtitle}
          </p>
        )}

        {/* Author Byline & Dateline */}
        <div className="flex flex-wrap items-center justify-between gap-3 py-3 border-t border-b border-neutral-200 text-xs font-sans text-neutral-600 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center font-bold text-neutral-700 text-xs">
              <User className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-neutral-900 block">
                {article.authorBanglaName || article.authorName}
              </span>
              <span className="text-[11px] text-neutral-500">স্পোর্টস করেসপন্ডেন্ট · ক্রিকফুট ঢাকা</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-neutral-500 font-mono">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-neutral-400" />
              <span>{toBanglaNumber(article.readTimeMinutes || 4)} মিনিট পাঠ</span>
            </span>
            <span>প্রকাশিত: {new Date(article.publishedAt).toLocaleDateString('bn-BD')}</span>
          </div>
        </div>

        {/* Lead Featured Image */}
        <figure className="mb-7 bg-neutral-950 overflow-hidden border border-neutral-200 rounded-sm">
          <img
            src={article.image.url}
            alt={article.image.alt || article.title}
            className="w-full h-auto max-h-[460px] object-cover"
          />
          {article.image.caption && (
            <figcaption className="p-2.5 text-xs text-neutral-600 bg-neutral-50 border-t border-neutral-200 italic font-sans flex items-center justify-between">
              <span>ছবি: {article.image.caption}</span>
              <span className="text-[10px] text-neutral-400 not-italic">ক্রিকফুট ফটো গ্যালারি</span>
            </figcaption>
          )}
        </figure>

        {/* Body content with drop-cap */}
        <div className="text-neutral-800 space-y-4 font-sans text-base leading-relaxed">
          {paragraphs.map((para, idx) => {
            if (idx === 0) {
              return (
                <p
                  key={idx}
                  className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-neutral-900 leading-relaxed font-sans"
                >
                  {para}
                </p>
              );
            }
            if (idx === 1) {
              return (
                <React.Fragment key={idx}>
                  <p>{para}</p>
                  <GoogleAdSlot format="in-article" className="my-6" />
                </React.Fragment>
              );
            }
            return <p key={idx}>{para}</p>;
          })}
        </div>

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="mt-8 pt-5 border-t border-neutral-200 flex items-center flex-wrap gap-2">
            <span className="text-xs font-bold text-neutral-500 uppercase flex items-center gap-1 font-sans mr-1">
              <Tag className="w-3.5 h-3.5" />
              <span>ট্যাগসমূহ:</span>
            </span>
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 bg-neutral-100 text-neutral-700 rounded border border-neutral-200 font-sans"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

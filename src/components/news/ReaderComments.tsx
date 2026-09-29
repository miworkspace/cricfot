import React, { useState } from 'react';
import { MessageSquare, Send, Heart, User, ShieldCheck } from 'lucide-react';
import { toBanglaNumber } from '../../utils/banglaUtils';

interface Comment {
  id: string;
  name: string;
  time: string;
  text: string;
  likes: number;
}

const INITIAL_COMMENTS: Comment[] = [
  {
    id: 'c-1',
    name: 'ফারহান আহমেদ',
    time: '১৫ মিনিট আগে',
    text: 'মিরপুরের উইকেটে শান্ত আর লিটনের ধৈর্যশীল জুটি দেখে সত্যিই ভালো লাগল। পেসারদের দ্বিতীয় ইনিংসেও এই নিয়ন্ত্রণ ধরে রাখতে হবে।',
    likes: 18,
  },
  {
    id: 'c-2',
    name: 'কাজী শাহরিয়ার',
    time: '১ ঘণ্টা আগে',
    text: 'অস্ট্রেলিয়ার সাথে টেস্ট জয়ের দারুণ সুযোগ তৈরি হয়েছে। টিম ম্যানেজমেন্টকে অভিনন্দন এমন ইতিবাচক ক্রিকেট উপহার দেওয়ার জন্য।',
    likes: 12,
  },
];

export const ReaderComments: React.FC<{ articleId: string }> = ({ articleId }) => {
  const [comments, setComments] = useState<Comment[]>(INITIAL_COMMENTS);
  const [name, setName] = useState('');
  const [commentText, setCommentText] = useState('');
  const [likedIds, setLikedIds] = useState<Set<string>>(new Set());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    const newComment: Comment = {
      id: `c-${Date.now()}`,
      name: name.trim() || 'ক্রীড়ামোদী পাঠক',
      time: 'এইমাত্র',
      text: commentText.trim(),
      likes: 0,
    };

    setComments([newComment, ...comments]);
    setCommentText('');
  };

  const handleLike = (id: string) => {
    if (likedIds.has(id)) return;

    setLikedIds(new Set([...likedIds, id]));
    setComments((prev) =>
      prev.map((c) => (c.id === id ? { ...c, likes: c.likes + 1 } : c))
    );
  };

  return (
    <section className="pt-8 border-t border-neutral-200" id="reader-comments">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-5 border-b border-neutral-200">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-red-600" />
          <h3 className="text-base sm:text-lg font-bold font-serif-bengali text-neutral-900">
            পাঠক মতামত ও প্রতিক্রিয়া ({toBanglaNumber(comments.length)})
          </h3>
        </div>
        <span className="text-xs text-neutral-500 font-sans">
          সুস্থ ও শালীন মন্তব্য কাম্য
        </span>
      </div>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-6 bg-neutral-50 p-4 rounded-xs border border-neutral-200">
        <div className="mb-3">
          <label htmlFor="reader-name" className="block text-xs font-semibold text-neutral-700 font-sans mb-1">
            আপনার নাম (ঐচ্ছিক):
          </label>
          <input
            id="reader-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="আপনার নাম লিখুন..."
            className="w-full px-3 py-1.5 text-xs bg-white border border-neutral-300 rounded-xs focus:outline-hidden focus:border-neutral-800 font-sans"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reader-comment" className="block text-xs font-semibold text-neutral-700 font-sans mb-1">
            আপনার মন্তব্য:
          </label>
          <textarea
            id="reader-comment"
            rows={3}
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="এই সংবাদ বা খেলা সম্পর্কে আপনার মতামত লিখুন..."
            required
            className="w-full p-3 text-xs bg-white border border-neutral-300 rounded-xs focus:outline-hidden focus:border-neutral-800 font-sans resize-none"
          />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[11px] text-neutral-400 font-sans">
            মন্তব্য প্রকাশের পূর্বে মডারেশন নীতি কার্যকর থাকবে।
          </span>
          <button
            type="submit"
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xs transition-colors font-sans inline-flex items-center gap-1.5 shadow-xs"
          >
            <span>মন্তব্য প্রকাশ করুন</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-3.5">
        {comments.map((comment) => {
          const isLiked = likedIds.has(comment.id);
          return (
            <div
              key={comment.id}
              className="p-3.5 bg-white border border-neutral-200 rounded-xs hover:border-neutral-300 transition-colors"
            >
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-neutral-200 text-neutral-700 flex items-center justify-center text-xs font-bold">
                    <User className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-neutral-900 font-sans">
                    {comment.name}
                  </span>
                </div>
                <span className="text-[11px] text-neutral-400 font-sans">
                  {comment.time}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-700 font-sans leading-relaxed pl-8">
                {comment.text}
              </p>

              <div className="mt-2.5 pl-8 flex items-center gap-3 text-xs text-neutral-500 font-sans">
                <button
                  type="button"
                  onClick={() => handleLike(comment.id)}
                  disabled={isLiked}
                  className={`inline-flex items-center gap-1 transition-colors ${
                    isLiked ? 'text-red-600 font-bold' : 'hover:text-red-600'
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-red-600' : ''}`} />
                  <span>{toBanglaNumber(comment.likes)}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

'use client';
import { useState } from "react";
import { MessageSquare, Send, Heart, User } from "lucide-react";
import { toBanglaNumber } from "../../utils/banglaUtils";
const INITIAL_COMMENTS = [
  {
    id: "c-1",
    name: "\u09AB\u09BE\u09B0\u09B9\u09BE\u09A8 \u0986\u09B9\u09AE\u09C7\u09A6",
    time: "\u09E7\u09EB \u09AE\u09BF\u09A8\u09BF\u099F \u0986\u0997\u09C7",
    text: "\u09AE\u09BF\u09B0\u09AA\u09C1\u09B0\u09C7\u09B0 \u0989\u0987\u0995\u09C7\u099F\u09C7 \u09B6\u09BE\u09A8\u09CD\u09A4 \u0986\u09B0 \u09B2\u09BF\u099F\u09A8\u09C7\u09B0 \u09A7\u09C8\u09B0\u09CD\u09AF\u09B6\u09C0\u09B2 \u099C\u09C1\u099F\u09BF \u09A6\u09C7\u0996\u09C7 \u09B8\u09A4\u09CD\u09AF\u09BF\u0987 \u09AD\u09BE\u09B2\u09CB \u09B2\u09BE\u0997\u09B2\u0964 \u09AA\u09C7\u09B8\u09BE\u09B0\u09A6\u09C7\u09B0 \u09A6\u09CD\u09AC\u09BF\u09A4\u09C0\u09AF\u09BC \u0987\u09A8\u09BF\u0982\u09B8\u09C7\u0993 \u098F\u0987 \u09A8\u09BF\u09AF\u09BC\u09A8\u09CD\u09A4\u09CD\u09B0\u09A3 \u09A7\u09B0\u09C7 \u09B0\u09BE\u0996\u09A4\u09C7 \u09B9\u09AC\u09C7\u0964",
    likes: 18
  },
  {
    id: "c-2",
    name: "\u0995\u09BE\u099C\u09C0 \u09B6\u09BE\u09B9\u09B0\u09BF\u09AF\u09BC\u09BE\u09B0",
    time: "\u09E7 \u0998\u09A3\u09CD\u099F\u09BE \u0986\u0997\u09C7",
    text: "\u0985\u09B8\u09CD\u099F\u09CD\u09B0\u09C7\u09B2\u09BF\u09AF\u09BC\u09BE\u09B0 \u09B8\u09BE\u09A5\u09C7 \u099F\u09C7\u09B8\u09CD\u099F \u099C\u09AF\u09BC\u09C7\u09B0 \u09A6\u09BE\u09B0\u09C1\u09A3 \u09B8\u09C1\u09AF\u09CB\u0997 \u09A4\u09C8\u09B0\u09BF \u09B9\u09AF\u09BC\u09C7\u099B\u09C7\u0964 \u099F\u09BF\u09AE \u09AE\u09CD\u09AF\u09BE\u09A8\u09C7\u099C\u09AE\u09C7\u09A8\u09CD\u099F\u0995\u09C7 \u0985\u09AD\u09BF\u09A8\u09A8\u09CD\u09A6\u09A8 \u098F\u09AE\u09A8 \u0987\u09A4\u09BF\u09AC\u09BE\u099A\u0995 \u0995\u09CD\u09B0\u09BF\u0995\u09C7\u099F \u0989\u09AA\u09B9\u09BE\u09B0 \u09A6\u09C7\u0993\u09AF\u09BC\u09BE\u09B0 \u099C\u09A8\u09CD\u09AF\u0964",
    likes: 12
  }
];
export const ReaderComments = ({ articleId }) => {
  const [comments, setComments] = useState(INITIAL_COMMENTS);
  const [name, setName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [likedIds, setLikedIds] = useState(/* @__PURE__ */ new Set());
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    const newComment = {
      id: `c-${Date.now()}`,
      name: name.trim() || "\u0995\u09CD\u09B0\u09C0\u09A1\u09BC\u09BE\u09AE\u09CB\u09A6\u09C0 \u09AA\u09BE\u09A0\u0995",
      time: "\u098F\u0987\u09AE\u09BE\u09A4\u09CD\u09B0",
      text: commentText.trim(),
      likes: 0
    };
    setComments([newComment, ...comments]);
    setCommentText("");
  };
  const handleLike = (id) => {
    if (likedIds.has(id)) return;
    setLikedIds(/* @__PURE__ */ new Set([...likedIds, id]));
    setComments(
      (prev) => prev.map((c) => c.id === id ? { ...c, likes: c.likes + 1 } : c)
    );
  };
  return <section className="pt-8 border-t border-neutral-200" id="reader-comments">
      {
    /* Header */
  }
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

      {
    /* Comment Form */
  }
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

      {
    /* Comments List */
  }
      <div className="space-y-3.5">
        {comments.map((comment) => {
    const isLiked = likedIds.has(comment.id);
    return <div
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
      className={`inline-flex items-center gap-1 transition-colors ${isLiked ? "text-red-600 font-bold" : "hover:text-red-600"}`}
    >
                  <Heart className={`w-3.5 h-3.5 ${isLiked ? "fill-red-600" : ""}`} />
                  <span>{toBanglaNumber(comment.likes)}</span>
                </button>
              </div>
            </div>;
  })}
      </div>
    </section>;
};

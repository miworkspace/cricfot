'use client';
import React, { useEffect, useState } from "react";
import { Container } from "../components/common/Container";
import { ArticleHeader } from "../components/news/ArticleHeader";
import { NewsCard } from "../components/news/NewsCard";
import { ArticleJsonViewer } from "../components/news/ArticleJsonViewer";
import { GoogleAdSlot } from "../components/ads/GoogleAdSlot";
import { SponsoredArticleGrid } from "../components/ads/SponsoredArticleGrid";
import { ReaderComments } from "../components/news/ReaderComments";
import { SocialShareWidget } from "../components/news/SocialShareWidget";
import { NewsService } from "../services/newsService";
import { Link } from "../router/Link";
import {
  ArrowLeft,
  Tag,
  Flame,
  User,
  ChevronRight,
  Newspaper
} from "lucide-react";
import { toBanglaNumber } from "../utils/banglaUtils";
export const NewsDetailPage = ({ slug }) => {
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [trendingArticles, setTrendingArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fontSize, setFontSize] = useState("normal");
  const [imageError, setImageError] = useState(false);
  const [reactions, setReactions] = useState({
    clap: 184,
    fire: 256,
    heart: 92
  });
  const [userReaction, setUserReaction] = useState(null);
  useEffect(() => {
    let isMounted = true;
    async function loadArticle() {
      setLoading(true);
      const [articleData, trending] = await Promise.all([
        NewsService.getArticleBySlug(slug),
        NewsService.getTrendingArticles()
      ]);
      if (isMounted) {
        setArticle(articleData);
        setTrendingArticles(trending.slice(0, 4));
        if (articleData) {
          const related = await NewsService.getArticles({
            sport: articleData.sport,
            limit: 4
          });
          setRelatedArticles(related.filter((a) => a.id !== articleData.id).slice(0, 3));
        }
        setLoading(false);
      }
    }
    loadArticle();
    return () => {
      isMounted = false;
    };
  }, [slug]);
  const handleReaction = (type) => {
    if (userReaction === type) return;
    setUserReaction(type);
    setReactions((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };
  if (loading) {
    return <Container size="wide" className="py-20 text-center">
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="w-9 h-9 border-3 border-red-600 border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-neutral-600 font-sans">
            ক্রীড়া প্রতিবেদন ও বিজ্ঞাপন কনটেন্ট লোড হচ্ছে...
          </p>
        </div>
      </Container>;
  }
  if (!article) {
    return <Container size="narrow" className="py-16 text-center">
        <div className="bg-white border border-neutral-200 p-8 shadow-xs rounded-xs">
          <h2 className="text-xl font-bold font-serif-bengali text-neutral-900 mb-2">
            সংবাদটি খুঁজে পাওয়া যায়নি
          </h2>
          <p className="text-sm text-neutral-600 mb-6 font-sans">
            অনুরোধকৃত প্রতিবেদনটি হয়তো স্থানান্তরিত বা আর্কাইভ করা হয়েছে।
          </p>
          <Link
      href="/"
      className="inline-flex items-center gap-1.5 px-4 py-2 bg-neutral-900 text-white text-xs font-bold uppercase tracking-wider rounded-xs font-sans hover:bg-neutral-800 transition-colors"
    >
            <ArrowLeft className="w-4 h-4" />
            <span>হোমপেজে ফিরে যান</span>
          </Link>
        </div>
      </Container>;
  }
  const fontSizeClass = fontSize === "xlarge" ? "text-lg sm:text-xl leading-relaxed sm:leading-loose" : fontSize === "large" ? "text-base sm:text-lg leading-relaxed" : "text-sm sm:text-base leading-relaxed";
  const paragraphs = (article.content || article.excerpt).split("\n\n");
  return <div className="py-4 sm:py-8" id={`article-page-${article.id}`}>
      <Container size="wide">
        {
    /* 1. Top Google Leaderboard Ad Slot (728x90) */
  }
        <GoogleAdSlot
    format="leaderboard"
    slotId="ca-pub-cricfot-top-leaderboard-994"
    className="max-w-4xl mx-auto mb-6"
  />

        {
    /* 2. Main Two-Column Editorial Broadsheet Layout */
  }
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {
    /* Main Article Reading Column (8 cols on desktop) */
  }
          <main className="lg:col-span-8 bg-white border border-neutral-200/90 rounded-xs p-4 sm:p-7 shadow-2xs">
            {
    /* Article Header with Reading Controls */
  }
            <ArticleHeader
    article={article}
    onFontSizeChange={setFontSize}
    currentFontSize={fontSize}
  />

            {
    /* Lead Featured Image Frame */
  }
            <figure className="mb-7 bg-neutral-950 overflow-hidden border border-neutral-200 rounded-xs">
              {!imageError ? <img
    src={article.image.url}
    alt={article.image.alt || article.title}
    className="w-full h-auto max-h-[500px] object-cover"
    onError={() => setImageError(true)}
    loading="eager"
  /> : <div className="w-full py-16 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 flex flex-col items-center justify-center p-6 text-center text-white">
                  <Newspaper className="w-12 h-12 text-red-500/80 mb-2" />
                  <p className="font-serif-bengali text-lg font-bold">
                    {article.banglaTitle || article.title}
                  </p>
                </div>}
              {article.image.caption && <figcaption className="p-3 text-xs text-neutral-500 bg-neutral-50 border-t border-neutral-200 italic font-sans flex items-center justify-between">
                  <span>ছবি: {article.image.caption}</span>
                  <span className="text-[10px] text-neutral-400 not-italic">
                    ক্রিকফুট স্পেশাল ফ্রেম
                  </span>
                </figcaption>}
            </figure>

            {
    /* Editorial Body Content with Newspaper Drop Cap & Mid-Article Google Ad */
  }
            <div className={`text-neutral-800 space-y-5 font-sans ${fontSizeClass}`}>
              {paragraphs.map((paragraph, idx) => {
    if (idx === 0) {
      return <p
        key={idx}
        className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-neutral-900 leading-relaxed font-sans"
      >
                      {paragraph}
                    </p>;
    }
    if (idx === 1) {
      return <React.Fragment key={idx}>
                      <p className="leading-relaxed">{paragraph}</p>
                      {
        /* Mid-Article In-Feed Google Ad */
      }
                      <GoogleAdSlot
        format="in-article"
        slotId="ca-pub-cricfot-in-article-432"
        className="my-6"
      />
                    </React.Fragment>;
    }
    if (idx === 2) {
      return <React.Fragment key={idx}>
                      <blockquote className="my-6 p-4 sm:p-5 border-l-4 border-red-600 bg-neutral-50 rounded-r-xs">
                        <p className="text-base sm:text-lg font-bold font-serif-bengali text-neutral-900 italic leading-snug">
                          "{article.excerpt}"
                        </p>
                        <cite className="block text-xs text-neutral-500 font-sans mt-2 not-italic">
                          — {article.author.banglaName || article.author.name},{" "}
                          {article.author.role || "\u09B8\u09CD\u09AA\u09CB\u09B0\u09CD\u099F\u09B8 \u0995\u09B0\u09C7\u09B8\u09AA\u09A8\u09CD\u09A1\u09C7\u09A8\u09CD\u099F"}
                        </cite>
                      </blockquote>
                      <p className="leading-relaxed">{paragraph}</p>
                    </React.Fragment>;
    }
    return <p key={idx} className="leading-relaxed">
                    {paragraph}
                  </p>;
  })}
            </div>

            {
    /* Reader Reactions Bar */
  }
            <div className="mt-8 pt-5 pb-5 border-t border-b border-neutral-200 flex flex-wrap items-center justify-between gap-3 bg-neutral-50/70 p-4 rounded-xs">
              <span className="text-xs font-bold text-neutral-700 font-sans">
                এই প্রতিবেদন সম্পর্কে আপনার মতামত:
              </span>

              <div className="flex items-center gap-2">
                <button
    type="button"
    onClick={() => handleReaction("clap")}
    className={`px-3 py-1.5 rounded-xs border text-xs font-sans transition-all inline-flex items-center gap-1.5 ${userReaction === "clap" ? "bg-amber-100 border-amber-400 text-amber-900 font-bold" : "bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-100"}`}
  >
                  <span>👏 দারুণ</span>
                  <span className="text-neutral-500 font-mono">
                    ({toBanglaNumber(reactions.clap)})
                  </span>
                </button>

                <button
    type="button"
    onClick={() => handleReaction("fire")}
    className={`px-3 py-1.5 rounded-xs border text-xs font-sans transition-all inline-flex items-center gap-1.5 ${userReaction === "fire" ? "bg-red-100 border-red-400 text-red-900 font-bold" : "bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-100"}`}
  >
                  <span>🔥 দুর্দান্ত</span>
                  <span className="text-neutral-500 font-mono">
                    ({toBanglaNumber(reactions.fire)})
                  </span>
                </button>

                <button
    type="button"
    onClick={() => handleReaction("heart")}
    className={`px-3 py-1.5 rounded-xs border text-xs font-sans transition-all inline-flex items-center gap-1.5 ${userReaction === "heart" ? "bg-rose-100 border-rose-400 text-rose-900 font-bold" : "bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-100"}`}
  >
                  <span>❤️ প্রিয়</span>
                  <span className="text-neutral-500 font-mono">
                    ({toBanglaNumber(reactions.heart)})
                  </span>
                </button>
              </div>
            </div>

            {
    /* Social Media Sharing Widget (Facebook, Twitter/X, WhatsApp, Copy Link) */
  }
            <SocialShareWidget article={article} variant="bar" className="my-6" />

            {
    /* Topic Tags */
  }
            {article.tags.length > 0 && <div className="pt-5 mt-5 border-t border-neutral-100 flex items-center flex-wrap gap-2">
                <span className="text-xs font-bold uppercase text-neutral-500 flex items-center gap-1 mr-1 font-sans">
                  <Tag className="w-3.5 h-3.5" />
                  <span>টপিকস:</span>
                </span>
                {article.tags.map((tag) => <Link
    key={tag}
    href={`/search?q=${encodeURIComponent(tag)}`}
    className="text-xs px-2.5 py-1 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-xs border border-neutral-200 transition-colors font-sans"
  >
                    #{tag}
                  </Link>)}
              </div>}

            {
    /* 3. Generated Fake JSON Data & Schema.org Payload Viewer Component */
  }
            <ArticleJsonViewer article={article} />

            {
    /* 4. Native Sponsored Article Grid */
  }
            <SponsoredArticleGrid />

            {
    /* 5. Reader Comments Discussion Section */
  }
            <ReaderComments articleId={article.id} />

            {
    /* 6. Related Editorial Coverage */
  }
            {relatedArticles.length > 0 && <section className="pt-10 mt-10 border-t-2 border-neutral-900">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-base sm:text-lg font-bold font-serif-bengali text-neutral-900">
                    সম্পর্কিত আরও ক্রীড়া প্রতিবেদন
                  </h3>
                  <Link
    href={`/${article.sport}`}
    className="text-xs font-bold text-red-600 hover:text-red-800 font-sans"
  >
                    সব {article.sport === "cricket" ? "\u0995\u09CD\u09B0\u09BF\u0995\u09C7\u099F" : "\u09AB\u09C1\u099F\u09AC\u09B2"} সংবাদ →
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {relatedArticles.map((rel) => <NewsCard key={rel.id} article={rel} variant="standard" showSport={false} />)}
                </div>
              </section>}
          </main>

          {
    /* Right Sidebar Column (4 cols on desktop) */
  }
          <aside className="lg:col-span-4 space-y-6">
            {
    /* Sidebar MPU Google Ad (300x250) */
  }
            <GoogleAdSlot
    format="mpu"
    slotId="ca-pub-cricfot-sidebar-mpu-501"
    className="mt-0"
  />

            {
    /* Trending Sports Stories Widget */
  }
            <div className="bg-white border border-neutral-200 rounded-xs p-4 shadow-2xs">
              <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-neutral-100">
                <div className="flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-red-600" />
                  <h3 className="text-xs font-bold text-neutral-900 font-sans uppercase tracking-wider">
                    জনপ্রিয় ও ট্রেন্ডিং সংবাদ
                  </h3>
                </div>
                <span className="text-[10px] bg-red-100 text-red-700 font-bold px-1.5 py-0.2 rounded-2xs font-sans">
                  শীর্ষ ৫
                </span>
              </div>

              <div className="divide-y divide-neutral-100">
                {trendingArticles.map((item, idx) => <Link
    key={item.id}
    href={`/news/${item.slug}`}
    className="py-3 flex items-start gap-3 group hover:text-red-600 transition-colors block"
  >
                    <span className="text-lg font-black font-serif-headline text-neutral-300 group-hover:text-red-600 shrink-0 w-5">
                      {idx + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-bold text-red-700 uppercase tracking-wide block mb-0.5 font-sans">
                        {item.category}
                      </span>
                      <h4 className="text-xs font-bold font-serif-bengali text-neutral-900 leading-snug line-clamp-2 group-hover:text-red-600 transition-colors">
                        {item.banglaTitle || item.title}
                      </h4>
                    </div>
                  </Link>)}
              </div>
            </div>

            {
    /* Social Media Sharing Widget Card */
  }
            <SocialShareWidget article={article} variant="card" />

            {
    /* Writer / Journalist Profile Card */
  }
            <div className="bg-white border border-neutral-200 rounded-xs p-4 shadow-2xs">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block mb-2 font-sans">
                প্রতিবেদক পরিচিতি
              </span>

              <div className="flex items-center gap-3 mb-3">
                {article.author.avatar ? <img
    src={article.author.avatar}
    alt={article.author.name}
    className="w-12 h-12 rounded-full object-cover border border-neutral-200"
  /> : <div className="w-12 h-12 rounded-full bg-neutral-200 text-neutral-700 flex items-center justify-center font-bold text-base">
                    <User className="w-5 h-5" />
                  </div>}
                <div>
                  <h4 className="text-sm font-bold text-neutral-900 font-sans">
                    {article.author.banglaName || article.author.name}
                  </h4>
                  <p className="text-xs text-neutral-500 font-sans">
                    {article.author.role || "\u09B8\u09CD\u09AA\u09CB\u09B0\u09CD\u099F\u09B8 \u0995\u09B0\u09C7\u09B8\u09AA\u09A8\u09CD\u09A1\u09C7\u09A8\u09CD\u099F"}
                  </p>
                </div>
              </div>

              <p className="text-xs text-neutral-600 font-sans leading-relaxed">
                বাংলাদেশ জাতীয় ক্রিকেট দল, বিপিএল ও ইউরোপিয়ান ফুটবলের ম্যাচ বিশ্লেষণ এবং বিশেষ প্রতিবেদন নিয়ে কাজ করছেন।
              </p>
            </div>

            {
    /* Live Scores Fast Hub Callout */
  }
            <div className="bg-neutral-950 text-white p-4 rounded-xs border border-neutral-800 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <span className="text-xs font-bold font-sans text-red-400 uppercase tracking-wider">
                  ম্যাচ সেন্টার
                </span>
              </div>
              <h4 className="text-sm font-bold font-serif-bengali mb-1.5">
                চলমান ক্রিকেট ও ফুটবলের লাইভ স্কোর
              </h4>
              <p className="text-xs text-neutral-400 font-sans mb-3">
                বল-বাই-বল কমেন্ট্রি ও পূর্ণ স্কোরকার্ড দেখতে এখনই প্রবেশ করুন।
              </p>
              <Link
    href="/live"
    className="w-full py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xs transition-colors font-sans inline-flex items-center justify-center gap-1.5"
  >
                <span>লাইভ স্কোর দেখুন</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {
    /* Sticky Half-Page Google Ad / Sponsor Slot (300x600) */
  }
            <div className="sticky top-20">
              <GoogleAdSlot
    format="halfpage"
    slotId="ca-pub-cricfot-sidebar-halfpage-812"
  />
            </div>
          </aside>
        </div>
      </Container>
    </div>;
};

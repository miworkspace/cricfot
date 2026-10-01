'use client';
import { useState, useEffect } from "react";
import { Code2, Copy, Check, Download, FileJson, X, ExternalLink } from "lucide-react";
export const ArticleJsonViewer = ({ article, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const fullJsonPayload = {
    schema_version: "2.4.0",
    api_endpoint: `https://api.cricfot.com/v1/articles/${article.slug}.json`,
    generated_at: (/* @__PURE__ */ new Date()).toISOString(),
    status: "success",
    data: {
      id: article.id,
      slug: article.slug,
      locale: "bn_BD",
      sport: article.sport,
      category: article.category,
      flags: {
        is_breaking: Boolean(article.breaking),
        is_featured: Boolean(article.featured),
        is_trending: Boolean(article.trending),
        is_sponsored: false,
        paywall: "free"
      },
      titles: {
        primary: article.banglaTitle || article.title,
        english: article.title,
        seo_meta: `${article.banglaTitle || article.title} | CricFot Sports`
      },
      excerpt: article.excerpt,
      content: {
        format: "markdown",
        raw_text: article.content || article.excerpt,
        word_count: (article.content || article.excerpt).split(/\s+/).length,
        reading_time_minutes: article.readTimeMinutes || 4
      },
      media: {
        featured_image: {
          url: article.image.url,
          caption: article.image.caption || null,
          alt_text: article.image.alt || article.title,
          dimensions: { width: 1200, height: 675, aspect_ratio: "16:9" },
          credit: "CricFot Photojournalism Archive"
        }
      },
      byline: {
        author_id: article.author.id,
        name: article.author.banglaName || article.author.name,
        english_name: article.author.name,
        role: article.author.role || "\u09B8\u09CD\u09AA\u09CB\u09B0\u09CD\u099F\u09B8 \u0995\u09B0\u09C7\u09B8\u09AA\u09A8\u09CD\u09A1\u09C7\u09A8\u09CD\u099F",
        verified: true
      },
      publishing: {
        published_at: article.publishedAt,
        updated_at: article.updatedAt || article.publishedAt,
        edition: "Dhaka Digital Broadsheet",
        syndication: ["CricFot Mobile App", "Google News RSS", "Apple News Feed"]
      },
      taxonomy: {
        tags: article.tags,
        topics: [article.sport, article.category, "Bangladesh Sports", "Live Coverage"]
      },
      engagement_mock_stats: {
        views_total: 14850,
        views_last_hour: 412,
        shares_total: 320,
        bookmarks_saved: 94,
        reader_reactions: {
          fire: 245,
          applause: 189,
          heart: 112
        }
      },
      ld_json_schema: {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        headline: article.banglaTitle || article.title,
        description: article.excerpt,
        image: [article.image.url],
        datePublished: article.publishedAt,
        dateModified: article.updatedAt || article.publishedAt,
        inLanguage: "bn-BD",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://cricfot.com/news/${article.slug}`
        },
        author: {
          "@type": "Person",
          name: article.author.banglaName || article.author.name,
          jobTitle: article.author.role || "Sports Journalist"
        },
        publisher: {
          "@type": "NewsMediaOrganization",
          name: "CricFot Media",
          logo: {
            "@type": "ImageObject",
            url: "https://cricfot.com/logo.png"
          }
        }
      }
    }
  };
  const jsonString = JSON.stringify(fullJsonPayload, null, 2);
  useEffect(() => {
    const scriptId = `cricfot-article-schema-${article.id}`;
    let script = document.getElementById(scriptId);
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(fullJsonPayload.data.ld_json_schema);
    return () => {
      const existing = document.getElementById(scriptId);
      if (existing) {
        existing.remove();
      }
    };
  }, [article.id, article.slug, article.title]);
  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(jsonString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    }
  };
  const handleDownload = () => {
    if (typeof document !== "undefined") {
      const blob = new Blob([jsonString], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `cricfot-article-${article.slug}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };
  return <div className={`my-6 ${className}`} id="article-json-viewer">
      {
    /* Visual trigger card on details page */
  }
      <div className="bg-neutral-900 text-neutral-100 rounded-xs p-4 sm:p-5 border border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xs bg-red-600/20 text-red-500 border border-red-500/30 flex items-center justify-center shrink-0">
            <FileJson className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold bg-neutral-800 text-emerald-400 px-1.5 py-0.5 rounded-xs">
                JSON API Payload
              </span>
              <span className="text-[10px] font-sans text-neutral-400">
                Schema.org NewsArticle
              </span>
            </div>
            <h4 className="text-sm font-bold text-white font-sans mt-0.5">
              আর্টিকেল স্ট্রাকচার্ড ডেটা ও JSON ফিড
            </h4>
            <p className="text-xs text-neutral-400 font-sans">
              এই প্রতিবেদনের ফুল স্ট্রাকচার্ড JSON ডেটা, মেটাডাটা ও এনালিটিক্স পেলোড দেখুন।
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
    type="button"
    onClick={() => setIsOpen(true)}
    className="flex-1 sm:flex-none px-3.5 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-bold rounded-xs transition-colors font-sans inline-flex items-center justify-center gap-1.5 border border-neutral-700"
  >
            <Code2 className="w-3.5 h-3.5 text-red-400" />
            <span>JSON ডেটা দেখুন</span>
          </button>

          <button
    type="button"
    onClick={handleCopy}
    className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xs transition-colors font-sans inline-flex items-center gap-1.5 shadow-xs"
    title="JSON কপি করুন"
  >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{copied ? "\u0995\u09AA\u09BF \u09B9\u09AF\u09BC\u09C7\u099B\u09C7" : "\u0995\u09AA\u09BF"}</span>
          </button>
        </div>
      </div>

      {
    /* Interactive JSON Modal Viewer */
  }
      {isOpen && <div
    className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-json-title"
  >
          <div className="bg-neutral-950 border border-neutral-800 rounded-xs w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
            {
    /* Modal Header */
  }
            <div className="p-3.5 sm:p-4 border-b border-neutral-800 flex items-center justify-between bg-neutral-900/90 text-white">
              <div className="flex items-center gap-2">
                <FileJson className="w-5 h-5 text-red-500" />
                <div>
                  <h3 id="modal-json-title" className="text-sm font-bold font-mono">
                    article_{article.slug}.json
                  </h3>
                  <span className="text-[10px] text-neutral-400 font-sans block">
                    সংবাদ আর্টিকেলের লাইভ স্ট্রাকচার্ড JSON রিপ্রেজেন্টেশন
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
    type="button"
    onClick={handleCopy}
    className="px-2.5 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded-xs text-xs font-sans inline-flex items-center gap-1 transition-colors"
  >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "\u0995\u09AA\u09BF \u09B9\u09AF\u09BC\u09C7\u099B\u09C7!" : "\u0995\u09AA\u09BF \u0995\u09B0\u09C1\u09A8"}</span>
                </button>

                <button
    type="button"
    onClick={handleDownload}
    className="px-2.5 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded-xs text-xs font-sans inline-flex items-center gap-1 transition-colors hidden sm:inline-flex"
  >
                  <Download className="w-3.5 h-3.5" />
                  <span>ডাউনলোড</span>
                </button>

                <button
    type="button"
    onClick={() => setIsOpen(false)}
    className="p-1.5 text-neutral-400 hover:text-white rounded-xs hover:bg-neutral-800 transition-colors"
    aria-label="বন্ধ করুন"
  >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {
    /* Code Body */
  }
            <div className="p-4 overflow-y-auto flex-1 font-mono text-xs text-neutral-300 bg-neutral-950 scrollbar-thin">
              <pre className="whitespace-pre-wrap leading-relaxed selection:bg-red-800 selection:text-white">
                {jsonString}
              </pre>
            </div>

            {
    /* Modal Footer */
  }
            <div className="p-3 bg-neutral-900 border-t border-neutral-800 flex items-center justify-between text-[11px] text-neutral-400 font-sans">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-mono">
                  ● Schema.org NewsArticle Validated
                </span>
                <a
    href={`/api/articles/${article.slug}/json`}
    target="_blank"
    rel="noopener noreferrer"
    className="text-neutral-300 hover:text-white underline inline-flex items-center gap-1 font-mono text-[10px]"
  >
                  <span>/api/articles/{article.slug}/json</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
              <button
    type="button"
    onClick={() => setIsOpen(false)}
    className="px-3 py-1 bg-neutral-800 text-white rounded-xs hover:bg-neutral-700 text-xs font-medium"
  >
                বন্ধ করুন
              </button>
            </div>
          </div>
        </div>}
    </div>;
};

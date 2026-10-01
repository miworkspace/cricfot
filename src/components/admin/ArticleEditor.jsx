'use client';
import { useState, useEffect } from "react";
import {
  Save,
  Eye,
  CheckCircle,
  Clock,
  Image as ImageIcon,
  Link as LinkIcon,
  Bold,
  Italic,
  Heading1,
  Heading2,
  Heading3,
  Quote,
  List,
  ListOrdered,
  Table as TableIcon,
  Minus,
  Tag,
  Underline,
  Strikethrough,
  Code,
  ArrowLeft
} from "lucide-react";
import { AdminService } from "../../services/adminService";
import { useAdminToast } from "./AdminToast";
import { useRouter } from "../../router/RouterContext";
import { Link } from "../../router/Link";
export const ArticleEditor = ({ initialArticle, isNew = false }) => {
  const { navigate } = useRouter();
  const { showToast } = useAdminToast();
  const [activeTab, setActiveTab] = useState("content");
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [title, setTitle] = useState(initialArticle?.title || "");
  const [banglaTitle, setBanglaTitle] = useState(initialArticle?.banglaTitle || "");
  const [slug, setSlug] = useState(initialArticle?.slug || "");
  const [subtitle, setSubtitle] = useState(initialArticle?.subtitle || "");
  const [excerpt, setExcerpt] = useState(initialArticle?.excerpt || "");
  const [content, setContent] = useState(initialArticle?.content || "");
  const [sport, setSport] = useState(initialArticle?.sport || "cricket");
  const [category, setCategory] = useState(initialArticle?.category || "Bangladesh Cricket");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState(initialArticle?.tags || ["\u0995\u09CD\u09B0\u09BF\u0995\u09C7\u099F", "\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6"]);
  const [authorId, setAuthorId] = useState(initialArticle?.authorId || "auth-1");
  const [imageUrl, setImageUrl] = useState(initialArticle?.image?.url || "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1200&q=80");
  const [imageCaption, setImageCaption] = useState(initialArticle?.image?.caption || "");
  const [imageAlt, setImageAlt] = useState(initialArticle?.image?.alt || "Featured match image");
  const [imageSource, setImageSource] = useState(initialArticle?.image?.source || "CricFot Staff / AFP");
  const [featured, setFeatured] = useState(initialArticle?.featured || false);
  const [breaking, setBreaking] = useState(initialArticle?.breaking || false);
  const [trending, setTrending] = useState(initialArticle?.trending || false);
  const [editorsPick, setEditorsPick] = useState(initialArticle?.editorsPick || false);
  const [status, setStatus] = useState(initialArticle?.status || "draft");
  const [scheduledDate, setScheduledDate] = useState(initialArticle?.scheduledAt || "");
  const [seoTitle, setSeoTitle] = useState(initialArticle?.seo?.title || "");
  const [seoDescription, setSeoDescription] = useState(initialArticle?.seo?.description || "");
  const [canonicalUrl, setCanonicalUrl] = useState(initialArticle?.seo?.canonical || "");
  const [ogTitle, setOgTitle] = useState(initialArticle?.seo?.ogTitle || "");
  const [ogDescription, setOgDescription] = useState(initialArticle?.seo?.ogDescription || "");
  const [fbTitle, setFbTitle] = useState(initialArticle?.social?.facebookTitle || "");
  const [xTitle, setXTitle] = useState(initialArticle?.social?.xTitle || "");
  const [newsType, setNewsType] = useState("Regular News");
  const [autosaveStatus, setAutosaveStatus] = useState("Saved");
  const [lastSavedSeconds, setLastSavedSeconds] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      if (title.trim() || content.trim()) {
        setAutosaveStatus("Saving...");
        try {
          if (typeof window !== "undefined") {
            const draft = { title, banglaTitle, slug, subtitle, excerpt, content, sport, category, tags, updatedAt: (/* @__PURE__ */ new Date()).toISOString() };
            localStorage.setItem(`cricfot_autosave_draft_${slug || "current"}`, JSON.stringify(draft));
          }
          setTimeout(() => {
            setAutosaveStatus("Saved");
            setLastSavedSeconds(0);
          }, 400);
        } catch {
        }
      }
    }, 2e4);
    const secondsTicker = setInterval(() => {
      setLastSavedSeconds((prev) => {
        const next = prev + 1;
        if (next > 5) {
          setAutosaveStatus(`Last saved ${next} seconds ago`);
        }
        return next;
      });
    }, 1e3);
    return () => {
      clearInterval(timer);
      clearInterval(secondsTicker);
    };
  }, [title, banglaTitle, slug, subtitle, excerpt, content, sport, category, tags]);
  const handleTitleChange = (val) => {
    setTitle(val);
    if (!banglaTitle) setBanglaTitle(val);
    if (!slug || isNew) {
      const generatedSlug = val.toLowerCase().replace(/[^a-z0-9\u0980-\u09FF\s-]/g, "").trim().replace(/\s+/g, "-").slice(0, 80);
      setSlug(generatedSlug || `article-${Date.now()}`);
    }
  };
  const handleAddTag = (e) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput("");
    }
  };
  const removeTag = (t) => {
    setTags(tags.filter((item) => item !== t));
  };
  const insertFormatting = (prefix, suffix = "") => {
    const textarea = document.getElementById("article-content-area");
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = content.substring(start, end) || "text";
    const replacement = `${prefix}${selected}${suffix}`;
    const newContent = content.substring(0, start) + replacement + content.substring(end);
    setContent(newContent);
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + prefix.length, start + prefix.length + selected.length);
    }, 50);
  };
  const handleSave = async (targetStatus) => {
    if (!title.trim()) {
      showToast("Article headline is required.", "error");
      return;
    }
    setIsSubmitting(true);
    try {
      const payload = {
        title,
        banglaTitle: banglaTitle || title,
        slug: slug || `story-${Date.now()}`,
        subtitle,
        excerpt: excerpt || title,
        content: content || "No article content provided.",
        sport,
        category,
        tags,
        authorId,
        authorName: authorId === "auth-1" ? "Rashedul Islam" : "Tanvir Ahmed",
        authorBanglaName: authorId === "auth-1" ? "\u09B0\u09BE\u09B6\u09C7\u09A6\u09C1\u09B2 \u0987\u09B8\u09B2\u09BE\u09AE" : "\u09A4\u09BE\u09A8\u09AD\u09C0\u09B0 \u0986\u09B9\u09AE\u09C7\u09A6",
        image: {
          url: imageUrl,
          caption: imageCaption,
          alt: imageAlt,
          source: imageSource
        },
        status: targetStatus,
        publishedAt: initialArticle?.publishedAt || (/* @__PURE__ */ new Date()).toISOString(),
        featured,
        breaking,
        trending,
        editorsPick,
        readTimeMinutes: Math.max(1, Math.round(content.split(/\s+/).length / 180)) || 4,
        seo: {
          title: seoTitle || title,
          description: seoDescription || excerpt,
          canonical: canonicalUrl,
          ogTitle: ogTitle || title,
          ogDescription: ogDescription || excerpt,
          ogImage: imageUrl
        },
        social: {
          facebookTitle: fbTitle || title,
          xTitle: xTitle || title,
          socialImage: imageUrl
        }
      };
      if (isNew || !initialArticle?.id) {
        await AdminService.createArticle(payload);
        showToast(targetStatus === "published" ? "Article published successfully!" : "Draft saved!");
        navigate("/admin/articles");
      } else {
        await AdminService.updateArticle(initialArticle.id, payload);
        showToast("Article updated successfully!");
      }
    } catch (err) {
      showToast(err?.message || "Failed to save article.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };
  return <div className="space-y-6 pb-12">
      {
    /* Top Action Bar */
  }
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-neutral-200">
        <div className="flex items-center gap-3">
          <Link
    href="/admin/articles"
    className="p-2 rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
    title="Back to Articles"
  >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-xl font-bold text-neutral-900">
              {isNew ? "Create New Article" : "Edit Article"}
            </h1>
            <p className="text-xs text-neutral-500">
              {isNew ? "Draft news, analysis or match reports" : `Editing ID: ${initialArticle?.id}`}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {
    /* Autosave Status Indicator */
  }
          <span className="text-[11px] font-mono text-neutral-500 bg-neutral-100 px-2.5 py-1.5 rounded border border-neutral-200 flex items-center gap-1.5">
            <Clock className="w-3 h-3 text-neutral-400" />
            <span>{autosaveStatus}</span>
          </span>

          {initialArticle?.id && <Link
    href={`/admin/articles/${initialArticle.id}/preview`}
    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-neutral-700 bg-white border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors shadow-xs"
  >
              <Eye className="w-3.5 h-3.5 text-blue-600" />
              <span>Full Preview</span>
            </Link>}

          <button
    type="button"
    onClick={() => setIsPreviewModalOpen(true)}
    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-neutral-700 bg-white border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors shadow-xs"
  >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick Preview</span>
          </button>

          <button
    type="button"
    disabled={isSubmitting}
    onClick={() => handleSave("draft")}
    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-neutral-700 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors shadow-xs"
  >
            <Save className="w-3.5 h-3.5" />
            <span>Save Draft</span>
          </button>

          <button
    type="button"
    disabled={isSubmitting}
    onClick={() => handleSave("published")}
    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-xs"
  >
            <CheckCircle className="w-3.5 h-3.5" />
            <span>{isSubmitting ? "Saving..." : "Publish Article"}</span>
          </button>
        </div>
      </div>

      {
    /* Editor Layout: Main Content (Left) + Settings Rail (Right) */
  }
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {
    /* Left Column (8 cols): Editor & Tabs */
  }
        <div className="lg:col-span-8 space-y-6">
          {
    /* Tabs */
  }
          <div className="flex items-center gap-1 border-b border-neutral-200 bg-white px-3 pt-2 rounded-t-xl">
            <button
    type="button"
    onClick={() => setActiveTab("content")}
    className={`px-4 py-2.5 text-xs font-semibold border-b-2 transition-colors ${activeTab === "content" ? "border-emerald-600 text-emerald-700" : "border-transparent text-neutral-500 hover:text-neutral-900"}`}
  >
              Story Content
            </button>
            <button
    type="button"
    onClick={() => setActiveTab("classification")}
    className={`px-4 py-2.5 text-xs font-semibold border-b-2 transition-colors ${activeTab === "classification" ? "border-emerald-600 text-emerald-700" : "border-transparent text-neutral-500 hover:text-neutral-900"}`}
  >
              Classification
            </button>
            <button
    type="button"
    onClick={() => setActiveTab("media")}
    className={`px-4 py-2.5 text-xs font-semibold border-b-2 transition-colors ${activeTab === "media" ? "border-emerald-600 text-emerald-700" : "border-transparent text-neutral-500 hover:text-neutral-900"}`}
  >
              Featured Media
            </button>
            <button
    type="button"
    onClick={() => setActiveTab("seo")}
    className={`px-4 py-2.5 text-xs font-semibold border-b-2 transition-colors ${activeTab === "seo" ? "border-emerald-600 text-emerald-700" : "border-transparent text-neutral-500 hover:text-neutral-900"}`}
  >
              SEO
            </button>
            <button
    type="button"
    onClick={() => setActiveTab("social")}
    className={`px-4 py-2.5 text-xs font-semibold border-b-2 transition-colors ${activeTab === "social" ? "border-emerald-600 text-emerald-700" : "border-transparent text-neutral-500 hover:text-neutral-900"}`}
  >
              Social Sharing
            </button>
          </div>

          {
    /* TAB 1: STORY CONTENT */
  }
          {activeTab === "content" && <div className="bg-white p-6 rounded-b-xl rounded-tr-xl border border-neutral-200/80 shadow-xs space-y-5">
              {
    /* Primary Headline */
  }
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                  Headline (শিরোনাম) *
                </label>
                <input
    type="text"
    value={title}
    onChange={(e) => handleTitleChange(e.target.value)}
    placeholder="মিরপুর টেস্টে শ্রীলঙ্কার বিপক্ষে লিটন ও শান্তর দারুণ জুটি..."
    className="w-full px-3.5 py-2.5 text-base font-semibold bg-neutral-50 border border-neutral-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 text-neutral-900 placeholder:text-neutral-400 font-serif-headline"
  />
              </div>

              {
    /* Bangla Title Alternative (if needed) & Subtitle */
  }
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-600 mb-1">
                    Bangla Title (বাংলা শিরোনাম)
                  </label>
                  <input
    type="text"
    value={banglaTitle}
    onChange={(e) => setBanglaTitle(e.target.value)}
    placeholder="বাংলা শিরোনাম..."
    className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600"
  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-600 mb-1">
                    Subtitle / Lead Kicker
                  </label>
                  <input
    type="text"
    value={subtitle}
    onChange={(e) => setSubtitle(e.target.value)}
    placeholder="চতুর্থ ইনিংসে ১৮২ রানের জুটিতে জয়ের দ্বারপ্রান্তে..."
    className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600"
  />
                </div>
              </div>

              {
    /* Excerpt */
  }
              <div>
                <label className="block text-xs font-semibold text-neutral-600 mb-1">
                  Excerpt / Summary (সংক্ষেপ)
                </label>
                <textarea
    rows={2}
    value={excerpt}
    onChange={(e) => setExcerpt(e.target.value)}
    placeholder="সংবাদের সংক্ষিপ্ত সারাংশ যা হোমপেজ ও কার্ডে দৃশ্যমান হবে..."
    className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600"
  />
              </div>

              {
    /* Rich-Text Formatting Toolbar */
  }
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                    Editorial Body (মূল প্রতিবেদন)
                  </label>
                  <span className="text-[11px] text-neutral-400">
                    Markdown & Rich formatting supported
                  </span>
                </div>

                <div className="border border-neutral-200 rounded-lg overflow-hidden bg-neutral-50">
                  {
    /* Toolbar */
  }
                  <div className="flex items-center flex-wrap gap-1 p-2 bg-neutral-100/80 border-b border-neutral-200 text-neutral-700">
                    <button
    type="button"
    onClick={() => insertFormatting("# ")}
    className="p-1.5 rounded hover:bg-white text-xs font-bold"
    title="Heading 1"
  >
                      <Heading1 className="w-4 h-4" />
                    </button>
                    <button
    type="button"
    onClick={() => insertFormatting("## ")}
    className="p-1.5 rounded hover:bg-white text-xs font-bold"
    title="Heading 2"
  >
                      <Heading2 className="w-4 h-4" />
                    </button>
                    <button
    type="button"
    onClick={() => insertFormatting("### ")}
    className="p-1.5 rounded hover:bg-white text-xs font-bold"
    title="Heading 3"
  >
                      <Heading3 className="w-4 h-4" />
                    </button>

                    <span className="w-px h-4 bg-neutral-300 mx-1" />

                    <button
    type="button"
    onClick={() => insertFormatting("**", "**")}
    className="p-1.5 rounded hover:bg-white text-xs font-bold"
    title="Bold"
  >
                      <Bold className="w-4 h-4" />
                    </button>
                    <button
    type="button"
    onClick={() => insertFormatting("*", "*")}
    className="p-1.5 rounded hover:bg-white text-xs"
    title="Italic"
  >
                      <Italic className="w-4 h-4" />
                    </button>
                    <button
    type="button"
    onClick={() => insertFormatting("<u>", "</u>")}
    className="p-1.5 rounded hover:bg-white text-xs"
    title="Underline"
  >
                      <Underline className="w-4 h-4" />
                    </button>
                    <button
    type="button"
    onClick={() => insertFormatting("~~", "~~")}
    className="p-1.5 rounded hover:bg-white text-xs"
    title="Strikethrough"
  >
                      <Strikethrough className="w-4 h-4" />
                    </button>
                    <button
    type="button"
    onClick={() => insertFormatting("`", "`")}
    className="p-1.5 rounded hover:bg-white text-xs font-mono"
    title="Inline Code / Source"
  >
                      <Code className="w-4 h-4" />
                    </button>

                    <span className="w-px h-4 bg-neutral-300 mx-1" />

                    <button
    type="button"
    onClick={() => insertFormatting("> ")}
    className="p-1.5 rounded hover:bg-white text-xs"
    title="Quote"
  >
                      <Quote className="w-4 h-4" />
                    </button>
                    <button
    type="button"
    onClick={() => insertFormatting("- ")}
    className="p-1.5 rounded hover:bg-white text-xs"
    title="Bullet List"
  >
                      <List className="w-4 h-4" />
                    </button>
                    <button
    type="button"
    onClick={() => insertFormatting("1. ")}
    className="p-1.5 rounded hover:bg-white text-xs"
    title="Numbered List"
  >
                      <ListOrdered className="w-4 h-4" />
                    </button>

                    <span className="w-px h-4 bg-neutral-300 mx-1" />

                    <button
    type="button"
    onClick={() => insertFormatting("[Link Text](", ")")}
    className="p-1.5 rounded hover:bg-white text-xs"
    title="Insert Link"
  >
                      <LinkIcon className="w-4 h-4" />
                    </button>
                    <button
    type="button"
    onClick={() => insertFormatting("![Caption](", ")")}
    className="p-1.5 rounded hover:bg-white text-xs"
    title="Insert Image"
  >
                      <ImageIcon className="w-4 h-4" />
                    </button>
                    <button
    type="button"
    onClick={() => insertFormatting("\n| \u0995\u09B2\u09BE\u09AE \u09E7 | \u0995\u09B2\u09BE\u09AE \u09E8 |\n| --- | --- |\n| \u09AE\u09BE\u09A8 \u09E7 | \u09AE\u09BE\u09A8 \u09E8 |\n")}
    className="p-1.5 rounded hover:bg-white text-xs"
    title="Insert Table"
  >
                      <TableIcon className="w-4 h-4" />
                    </button>
                    <button
    type="button"
    onClick={() => insertFormatting("\n---\n")}
    className="p-1.5 rounded hover:bg-white text-xs"
    title="Horizontal Divider"
  >
                      <Minus className="w-4 h-4" />
                    </button>
                  </div>

                  {
    /* Body Textarea */
  }
                  <textarea
    id="article-content-area"
    rows={14}
    value={content}
    onChange={(e) => setContent(e.target.value)}
    placeholder="এখানে প্রতিবেদনের বিস্তারিত লিখুন..."
    className="w-full p-4 bg-white text-sm sm:text-base text-neutral-800 leading-relaxed font-sans focus:outline-hidden resize-y min-h-[300px]"
  />
                </div>
              </div>
            </div>}

          {
    /* TAB 2: CLASSIFICATION */
  }
          {activeTab === "classification" && <div className="bg-white p-6 rounded-b-xl rounded-tr-xl border border-neutral-200/80 shadow-xs space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Sport Discipline *
                  </label>
                  <select
    value={sport}
    onChange={(e) => setSport(e.target.value)}
    className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600"
  >
                    <option value="cricket">Cricket (ক্রিকেট)</option>
                    <option value="football">Football (ফুটবল)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Category *
                  </label>
                  <select
    value={category}
    onChange={(e) => setCategory(e.target.value)}
    className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600"
  >
                    {sport === "cricket" ? <>
                        <option value="Bangladesh Cricket">Bangladesh Cricket</option>
                        <option value="International Cricket">International Cricket</option>
                        <option value="BPL">BPL</option>
                        <option value="IPL">IPL</option>
                        <option value="ICC">ICC</option>
                        <option value="Analysis">Analysis</option>
                      </> : <>
                        <option value="Bangladesh Football">Bangladesh Football</option>
                        <option value="International Football">International Football</option>
                        <option value="Premier League">Premier League</option>
                        <option value="Champions League">Champions League</option>
                        <option value="Transfer News">Transfer News</option>
                        <option value="Analysis">Analysis</option>
                      </>}
                  </select>
                </div>
              </div>

              {
    /* Author */
  }
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Author / Reporter
                </label>
                <select
    value={authorId}
    onChange={(e) => setAuthorId(e.target.value)}
    className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600"
  >
                  <option value="auth-1">Rashedul Islam (রাশেদুল ইসলাম - Chief Cricket)</option>
                  <option value="auth-2">Tanvir Ahmed (তানভীর আহমেদ - Football Analyst)</option>
                  <option value="auth-3">Mahmudul Hasan (মাহমুদুল হাসান - BPL Reporter)</option>
                  <option value="auth-4">Sourav Datta (সৌরভ দত্ত - Bangladesh Football)</option>
                </select>
              </div>

              {
    /* Tags */
  }
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Tags (Press Enter to add)
                </label>
                <div className="flex items-center gap-2 mb-2">
                  <input
    type="text"
    value={tagInput}
    onChange={(e) => setTagInput(e.target.value)}
    onKeyDown={handleAddTag}
    placeholder="ট্যাগের নাম লিখুন এবং Enter চাপুন..."
    className="flex-1 px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600"
  />
                  <button
    type="button"
    onClick={() => {
      if (tagInput.trim() && !tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
        setTagInput("");
      }
    }}
    className="px-3.5 py-2 text-xs font-semibold bg-neutral-900 text-white rounded-lg hover:bg-neutral-800"
  >
                    Add
                  </button>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {tags.map((t) => <span
    key={t}
    className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-neutral-100 text-neutral-800 rounded-md border border-neutral-200"
  >
                      <Tag className="w-3 h-3 text-neutral-400" />
                      <span>{t}</span>
                      <button
    type="button"
    onClick={() => removeTag(t)}
    className="ml-1 text-neutral-400 hover:text-neutral-700"
  >
                        ×
                      </button>
                    </span>)}
                </div>
              </div>
            </div>}

          {
    /* TAB 3: MEDIA */
  }
          {activeTab === "media" && <div className="bg-white p-6 rounded-b-xl rounded-tr-xl border border-neutral-200/80 shadow-xs space-y-5">
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Featured Image URL *
                </label>
                <input
    type="text"
    value={imageUrl}
    onChange={(e) => setImageUrl(e.target.value)}
    placeholder="https://..."
    className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600"
  />
              </div>

              {imageUrl && <div className="relative aspect-video max-w-md rounded-lg overflow-hidden border border-neutral-200 bg-neutral-100">
                  <img
    src={imageUrl}
    alt={imageAlt}
    className="w-full h-full object-cover"
    referrerPolicy="no-referrer"
  />
                </div>}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-600 mb-1">
                    Image Caption
                  </label>
                  <input
    type="text"
    value={imageCaption}
    onChange={(e) => setImageCaption(e.target.value)}
    placeholder="ছবি ক্যাপশন..."
    className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-600 mb-1">
                    Alt Text (Accessibility)
                  </label>
                  <input
    type="text"
    value={imageAlt}
    onChange={(e) => setImageAlt(e.target.value)}
    placeholder="Alt text describing image..."
    className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-600 mb-1">
                  Photo Copyright & Source
                </label>
                <input
    type="text"
    value={imageSource}
    onChange={(e) => setImageSource(e.target.value)}
    placeholder="AFP / Reuters / CricFot Staff"
    className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
  />
              </div>
            </div>}

          {
    /* TAB 4: SEO */
  }
          {activeTab === "seo" && <div className="bg-white p-6 rounded-b-xl rounded-tr-xl border border-neutral-200/80 shadow-xs space-y-5">
              {
    /* Google Search Snippet Preview */
  }
              <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider block mb-2">
                  Google Search Snippet Preview
                </span>
                <p className="text-xs text-neutral-600 truncate">
                  https://cricfot.com/news/{slug || "article-slug"}
                </p>
                <h4 className="text-base text-blue-700 hover:underline font-medium cursor-pointer line-clamp-1">
                  {seoTitle || title || "Article Title - CricFot Sports News"}
                </h4>
                <p className="text-xs text-neutral-600 line-clamp-2 mt-0.5">
                  {seoDescription || excerpt || "Detailed cricket and football sports news coverage on CricFot Bangladesh."}
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  SEO Title
                </label>
                <input
    type="text"
    value={seoTitle}
    onChange={(e) => setSeoTitle(e.target.value)}
    placeholder="Defaults to article headline"
    className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
  />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Meta Description
                </label>
                <textarea
    rows={3}
    value={seoDescription}
    onChange={(e) => setSeoDescription(e.target.value)}
    placeholder="Defaults to article excerpt (150-160 characters)"
    className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
  />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-600 mb-1">
                  Canonical URL
                </label>
                <input
    type="text"
    value={canonicalUrl}
    onChange={(e) => setCanonicalUrl(e.target.value)}
    placeholder="https://cricfot.com/news/..."
    className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
  />
              </div>
            </div>}

          {
    /* TAB 5: SOCIAL */
  }
          {activeTab === "social" && <div className="bg-white p-6 rounded-b-xl rounded-tr-xl border border-neutral-200/80 shadow-xs space-y-5">
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Facebook Share Headline
                </label>
                <input
    type="text"
    value={fbTitle}
    onChange={(e) => setFbTitle(e.target.value)}
    placeholder="Defaults to headline"
    className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
  />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  X (Twitter) Post Text
                </label>
                <input
    type="text"
    value={xTitle}
    onChange={(e) => setXTitle(e.target.value)}
    placeholder="Defaults to headline"
    className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
  />
              </div>
            </div>}
        </div>

        {
    /* Right Rail (4 cols): Publishing, Editorial Flags, Slug */
  }
        <div className="lg:col-span-4 space-y-6">
          {
    /* Publishing Card */
  }
          <div className="bg-white p-5 rounded-xl border border-neutral-200/80 shadow-xs space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
              Publishing Control
            </h3>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                Publication Status
              </label>
              <select
    value={status}
    onChange={(e) => setStatus(e.target.value)}
    className="w-full px-3 py-2 text-xs font-medium bg-white border border-neutral-200 rounded-lg"
  >
                <option value="draft">Draft (খসড়া)</option>
                <option value="published">Published (প্রকাশিত)</option>
                <option value="scheduled">Scheduled (নির্ধারিত)</option>
                <option value="pending">Pending Review (পর্যালোচনাধীন)</option>
              </select>
            </div>

            {status === "scheduled" && <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Schedule Date & Time
                </label>
                <input
    type="datetime-local"
    value={scheduledDate}
    onChange={(e) => setScheduledDate(e.target.value)}
    className="w-full px-3 py-2 text-xs bg-white border border-neutral-200 rounded-lg"
  />
              </div>}

            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                URL Slug
              </label>
              <input
    type="text"
    value={slug}
    onChange={(e) => setSlug(e.target.value)}
    className="w-full px-3 py-2 text-xs font-mono bg-neutral-50 border border-neutral-200 rounded-lg"
  />
              <span className="text-[10px] text-neutral-400 mt-1 block">
                /news/{slug || "..."}
              </span>
            </div>
          </div>

          {
    /* Editorial Flags Card */
  }
          <div className="bg-white p-5 rounded-xl border border-neutral-200/80 shadow-xs space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
              Editorial Curation Flags
            </h3>

            <label className="flex items-center justify-between p-2 rounded-lg hover:bg-neutral-50 cursor-pointer">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-600" />
                <span className="text-xs font-semibold text-neutral-800">Breaking News Ticker</span>
              </div>
              <input
    type="checkbox"
    checked={breaking}
    onChange={(e) => setBreaking(e.target.checked)}
    className="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500"
  />
            </label>

            <label className="flex items-center justify-between p-2 rounded-lg hover:bg-neutral-50 cursor-pointer">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span className="text-xs font-semibold text-neutral-800">Featured on Homepage</span>
              </div>
              <input
    type="checkbox"
    checked={featured}
    onChange={(e) => setFeatured(e.target.checked)}
    className="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500"
  />
            </label>

            <label className="flex items-center justify-between p-2 rounded-lg hover:bg-neutral-50 cursor-pointer">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span className="text-xs font-semibold text-neutral-800">Trending Ranking</span>
              </div>
              <input
    type="checkbox"
    checked={trending}
    onChange={(e) => setTrending(e.target.checked)}
    className="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500"
  />
            </label>

            <label className="flex items-center justify-between p-2 rounded-lg hover:bg-neutral-50 cursor-pointer">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-600" />
                <span className="text-xs font-semibold text-neutral-800">Editor's Pick</span>
              </div>
              <input
    type="checkbox"
    checked={editorsPick}
    onChange={(e) => setEditorsPick(e.target.checked)}
    className="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500"
  />
            </label>
          </div>
        </div>
      </div>

      {
    /* Live Preview Modal */
  }
      {isPreviewModalOpen && <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-xs">
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-xl shadow-2xl overflow-y-auto p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-200">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
                Live Article Preview
              </span>
              <button
    type="button"
    onClick={() => setIsPreviewModalOpen(false)}
    className="text-xs font-semibold px-3 py-1 bg-neutral-100 hover:bg-neutral-200 rounded"
  >
                Close Preview
              </button>
            </div>

            <article className="space-y-4">
              <div className="text-xs font-semibold text-emerald-700 uppercase">
                {category} • {sport}
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold font-serif-headline text-neutral-950 leading-tight">
                {title || "Headline will appear here"}
              </h1>
              {subtitle && <p className="text-base text-neutral-600 font-medium">{subtitle}</p>}

              {imageUrl && <figure className="my-4">
                  <img src={imageUrl} alt={imageAlt} className="w-full rounded-lg object-cover max-h-80" />
                  {imageCaption && <figcaption className="text-xs text-neutral-500 mt-1 italic">{imageCaption}</figcaption>}
                </figure>}

              <div className="prose prose-neutral max-w-none text-neutral-800 whitespace-pre-line text-sm sm:text-base leading-relaxed">
                {content || excerpt || "Article body text will appear here..."}
              </div>
            </article>
          </div>
        </div>}
    </div>;
};

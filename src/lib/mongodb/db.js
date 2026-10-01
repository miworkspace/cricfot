import { MOCK_ARTICLES } from "../../data/mockArticles";
const INITIAL_USERS = [
  {
    _id: "usr-admin-1",
    name: "Chief Newsroom Admin",
    email: "admin@cricfot.com",
    role: "admin",
    profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    status: "active",
    lastLoginAt: (/* @__PURE__ */ new Date()).toISOString(),
    createdAt: "2026-01-01T00:00:00Z",
    updatedAt: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    _id: "usr-manager-1",
    name: "Editorial News Desk Manager",
    email: "manager@cricfot.com",
    role: "manager",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    status: "active",
    lastLoginAt: new Date(Date.now() - 36e5).toISOString(),
    createdAt: "2026-02-01T00:00:00Z",
    updatedAt: (/* @__PURE__ */ new Date()).toISOString()
  }
];
const INITIAL_CATEGORIES = [
  { _id: "cat-1", name: "Bangladesh Cricket", slug: "bangladesh-cricket", sport: "cricket", status: "active" },
  { _id: "cat-2", name: "BPL", slug: "bpl", sport: "cricket", status: "active" },
  { _id: "cat-3", name: "International Cricket", slug: "international-cricket", sport: "cricket", status: "active" },
  { _id: "cat-4", name: "Bangladesh Football", slug: "bangladesh-football", sport: "football", status: "active" },
  { _id: "cat-5", name: "Premier League", slug: "premier-league", sport: "football", status: "active" },
  { _id: "cat-6", name: "Champions League", slug: "champions-league", sport: "football", status: "active" },
  { _id: "cat-7", name: "La Liga", slug: "la-liga", sport: "football", status: "active" }
];
const INITIAL_TAGS = [
  { _id: "tag-1", name: "Bangladesh Cricket", slug: "bangladesh-cricket" },
  { _id: "tag-2", name: "BCB", slug: "bcb" },
  { _id: "tag-3", name: "Test Cricket", slug: "test-cricket" },
  { _id: "tag-4", name: "BPL 2026", slug: "bpl-2026" },
  { _id: "tag-5", name: "Premier League", slug: "premier-league" },
  { _id: "tag-6", name: "Champions League", slug: "champions-league" },
  { _id: "tag-7", name: "Real Madrid", slug: "real-madrid" },
  { _id: "tag-8", name: "Manchester City", slug: "manchester-city" }
];
const INITIAL_AUTHORS = [
  {
    _id: "auth-1",
    name: "Rashedul Islam",
    banglaName: "\u09B0\u09BE\u09B6\u09C7\u09A6\u09C1\u09B2 \u0987\u09B8\u09B2\u09BE\u09AE",
    slug: "rashedul-islam",
    profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    bio: "Senior Cricket Correspondent covering Bangladesh national team and ICC tournaments for over a decade.",
    designation: "Senior Cricket Correspondent",
    status: "active"
  },
  {
    _id: "auth-2",
    name: "Tanvir Ahmed",
    banglaName: "\u09A4\u09BE\u09A8\u09AD\u09C0\u09B0 \u0986\u09B9\u09AE\u09C7\u09A6",
    slug: "tanvir-ahmed",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    bio: "Lead European Football Analyst with specialized focus on English Premier League tactics and UEFA competitions.",
    designation: "European Football Lead",
    status: "active"
  },
  {
    _id: "auth-3",
    name: "Kazi Shakil",
    banglaName: "\u0995\u09BE\u099C\u09C0 \u09B6\u09BE\u0995\u09BF\u09B2",
    slug: "kazi-shakil",
    profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    bio: "Investigative sports reporter tracking grassroots football development and domestic leagues in Bangladesh.",
    designation: "Domestic Sports Desk",
    status: "active"
  }
];
const INITIAL_BREAKING_NEWS = [
  {
    _id: "brk-1",
    text: "\u09AE\u09BF\u09B0\u09AA\u09C1\u09B0 \u099F\u09C7\u09B8\u09CD\u099F: \u09B6\u09BE\u09A8\u09CD\u09A4 \u0993 \u09B2\u09BF\u099F\u09A8\u09C7\u09B0 \u0985\u09AA\u09B0\u09BE\u099C\u09BF\u09A4 \u09B8\u09C7\u099E\u09CD\u099A\u09C1\u09B0\u09BF\u09A4\u09C7 \u09B6\u09CD\u09B0\u09C0\u09B2\u0999\u09CD\u0995\u09BE\u09B0 \u09AC\u09BF\u09AA\u0995\u09CD\u09B7\u09C7 \u099A\u09BE\u09B2\u0995\u09C7\u09B0 \u0986\u09B8\u09A8\u09C7 \u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6\u0964",
    url: "/news/shanto-praises-pacers-tigers-test-campaign",
    priority: "urgent",
    status: "active",
    startAt: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    _id: "brk-2",
    text: "\u099A\u09CD\u09AF\u09BE\u09AE\u09CD\u09AA\u09BF\u09AF\u09BC\u09A8\u09CD\u09B8 \u09B2\u09BF\u0997: \u09B6\u09C7\u09B7 \u09AE\u09C1\u09B9\u09C2\u09B0\u09CD\u09A4\u09C7\u09B0 \u09A8\u09BE\u099F\u0995\u09C0\u09AF\u09BC \u0997\u09CB\u09B2\u09C7 \u09B8\u09BE\u09A8\u09CD\u09A4\u09BF\u09AF\u09BC\u09BE\u0997\u09CB \u09AC\u09BE\u09B0\u09CD\u09A8\u09BE\u09AC\u09CD\u09AF\u09C1\u09A4\u09C7 \u099C\u09AF\u09BC \u09A4\u09C1\u09B2\u09C7 \u09A8\u09BF\u09B2 \u09B0\u09BF\u09AF\u09BC\u09BE\u09B2 \u09AE\u09BE\u09A6\u09CD\u09B0\u09BF\u09A6\u0964",
    url: "/football",
    priority: "high",
    status: "active",
    startAt: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    _id: "brk-3",
    text: "\u09AC\u09BF\u09AA\u09BF\u098F\u09B2 \u09E8\u09E6\u09E8\u09EC: \u09AA\u09CD\u09B2\u09C7\u09AF\u09BC\u09BE\u09B0\u09CD\u09B8 \u09A1\u09CD\u09B0\u09BE\u09AB\u099F\u09C7 \u09A6\u09B2 \u09AA\u09C7\u09B2\u09C7\u09A8 \u09A6\u09C7\u09B6\u09B8\u09C7\u09B0\u09BE \u09A4\u09B0\u09C1\u09A3 \u09AA\u09C7\u09B8\u09BE\u09B0\u09B0\u09BE\u0964",
    url: "/news/bpl-2026-season-draft-franchise-strategies-local-pacers",
    priority: "normal",
    status: "active",
    startAt: (/* @__PURE__ */ new Date()).toISOString()
  }
];
const INITIAL_LOGS = [
  {
    _id: "log-1",
    userId: "usr-admin-1",
    userName: "Chief Newsroom Admin",
    role: "admin",
    action: "User logged in",
    resource: "auth",
    description: "Admin logged into CricFot CMS session.",
    ipAddress: "127.0.0.1",
    createdAt: new Date(Date.now() - 18e5).toISOString()
  },
  {
    _id: "log-2",
    userId: "usr-admin-1",
    userName: "Chief Newsroom Admin",
    role: "admin",
    action: "Article published",
    resource: "article",
    resourceId: "art-1",
    description: "Published headline article on Mirpur Test preparations.",
    ipAddress: "127.0.0.1",
    createdAt: new Date(Date.now() - 36e5).toISOString()
  },
  {
    _id: "log-3",
    userId: "usr-manager-1",
    userName: "Editorial News Desk Manager",
    role: "manager",
    action: "Category created",
    resource: "category",
    resourceId: "cat-2",
    description: "Manager created BPL category entry.",
    ipAddress: "127.0.0.1",
    createdAt: new Date(Date.now() - 72e5).toISOString()
  }
];
class MongoStorageEngine {
  users = [...INITIAL_USERS];
  articles = [];
  categories = [...INITIAL_CATEGORIES];
  tags = [...INITIAL_TAGS];
  authors = [...INITIAL_AUTHORS];
  breakingNews = [...INITIAL_BREAKING_NEWS];
  logs = [...INITIAL_LOGS];
  constructor() {
    this.seedArticlesFromPublicMock();
    this.loadFromStorage();
  }
  seedArticlesFromPublicMock() {
    this.articles = MOCK_ARTICLES.map((art) => ({
      _id: art.id,
      title: art.title,
      banglaTitle: art.banglaTitle,
      slug: art.slug,
      shortDescription: art.excerpt,
      content: art.content || art.excerpt,
      sport: art.sport,
      categoryId: art.category,
      tagIds: art.tags,
      authorId: art.author?.id || "auth-1",
      featuredImage: {
        url: art.image.url,
        alt: art.image.alt || art.title,
        caption: art.image.caption
      },
      gallery: [],
      type: art.featured ? "Featured News" : art.breaking ? "Breaking News" : "Regular News",
      status: "published",
      isFeatured: Boolean(art.featured),
      isTrending: Boolean(art.trending),
      isBreaking: Boolean(art.breaking),
      views: 12500,
      seo: {
        metaTitle: art.banglaTitle || art.title,
        metaDescription: art.excerpt
      },
      publishedAt: art.publishedAt,
      createdAt: art.publishedAt,
      updatedAt: art.updatedAt || art.publishedAt
    }));
  }
  loadFromStorage() {
    if (typeof window === "undefined") return;
    try {
      const storedUsers = localStorage.getItem("cricfot_db_users");
      if (storedUsers) this.users = JSON.parse(storedUsers);
      const storedArticles = localStorage.getItem("cricfot_db_articles");
      if (storedArticles) this.articles = JSON.parse(storedArticles);
      const storedLogs = localStorage.getItem("cricfot_db_logs");
      if (storedLogs) this.logs = JSON.parse(storedLogs);
    } catch {
    }
  }
  saveToStorage() {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem("cricfot_db_users", JSON.stringify(this.users));
      localStorage.setItem("cricfot_db_articles", JSON.stringify(this.articles));
      localStorage.setItem("cricfot_db_logs", JSON.stringify(this.logs));
    } catch {
    }
  }
  // --- Users Collection ---
  getUsers() {
    return this.users;
  }
  getUserById(id) {
    return this.users.find((u) => u._id === id) || null;
  }
  getUserByEmail(email) {
    return this.users.find((u) => u.email.toLowerCase() === email.toLowerCase().trim()) || null;
  }
  createUser(data, actor) {
    if (actor.role !== "admin") {
      throw new Error("Unauthorized: Only administrators can create users");
    }
    const newUser = {
      _id: `usr-${Date.now()}`,
      ...data,
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    this.users.push(newUser);
    this.saveToStorage();
    this.logActivity({
      userId: actor.id,
      userName: actor.name,
      role: actor.role,
      action: "User created",
      resource: "users",
      resourceId: newUser._id,
      description: `Created new ${newUser.role} account for ${newUser.name} (${newUser.email}).`
    });
    return newUser;
  }
  updateUser(id, updates, actor) {
    if (actor.role !== "admin") {
      throw new Error("Unauthorized: Only administrators can modify users");
    }
    const user = this.users.find((u) => u._id === id);
    if (!user) throw new Error("User not found");
    if (user.role === "admin" && (updates.role === "manager" || updates.status === "inactive")) {
      const activeAdmins = this.users.filter((u) => u.role === "admin" && u.status === "active" && u._id !== id);
      if (activeAdmins.length === 0) {
        throw new Error("Cannot downgrade or deactivate the last active administrator");
      }
    }
    Object.assign(user, updates, { updatedAt: (/* @__PURE__ */ new Date()).toISOString() });
    this.saveToStorage();
    this.logActivity({
      userId: actor.id,
      userName: actor.name,
      role: actor.role,
      action: "User updated",
      resource: "users",
      resourceId: id,
      description: `Updated profile & role for ${user.name}.`
    });
    return user;
  }
  deleteUser(id, actor) {
    if (actor.role !== "admin") {
      throw new Error("Unauthorized: Only administrators can delete users");
    }
    const user = this.users.find((u) => u._id === id);
    if (!user) return false;
    if (user.role === "admin") {
      const activeAdmins = this.users.filter((u) => u.role === "admin" && u.status === "active" && u._id !== id);
      if (activeAdmins.length === 0) {
        throw new Error("Cannot delete the last active administrator account");
      }
    }
    this.users = this.users.filter((u) => u._id !== id);
    this.saveToStorage();
    this.logActivity({
      userId: actor.id,
      userName: actor.name,
      role: actor.role,
      action: "User deleted",
      resource: "users",
      resourceId: id,
      description: `Deleted user ${user.name} (${user.email}).`
    });
    return true;
  }
  // --- Articles Collection ---
  getArticles(filters = {}) {
    let result = [...this.articles];
    if (filters.sport) result = result.filter((a) => a.sport === filters.sport);
    if (filters.status) result = result.filter((a) => a.status === filters.status);
    if (filters.category) result = result.filter((a) => a.categoryId === filters.category);
    return result;
  }
  getArticleById(id) {
    return this.articles.find((a) => a._id === id || a.slug === id) || null;
  }
  createArticle(articleData, actor) {
    const newArt = {
      _id: `art-${Date.now()}`,
      ...articleData,
      views: 0,
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    this.articles.unshift(newArt);
    this.saveToStorage();
    this.logActivity({
      userId: actor.id,
      userName: actor.name,
      role: actor.role,
      action: "Article created",
      resource: "articles",
      resourceId: newArt._id,
      description: `Created article: "${newArt.title}".`
    });
    return newArt;
  }
  updateArticle(id, updates, actor) {
    const art = this.articles.find((a) => a._id === id);
    if (!art) throw new Error("Article not found");
    Object.assign(art, updates, { updatedAt: (/* @__PURE__ */ new Date()).toISOString() });
    this.saveToStorage();
    this.logActivity({
      userId: actor.id,
      userName: actor.name,
      role: actor.role,
      action: updates.status === "published" && art.status !== "published" ? "Article published" : "Article edited",
      resource: "articles",
      resourceId: id,
      description: `Modified article: "${art.title}".`
    });
    return art;
  }
  deleteArticle(id, actor) {
    const art = this.articles.find((a) => a._id === id);
    if (!art) return false;
    this.articles = this.articles.filter((a) => a._id !== id);
    this.saveToStorage();
    this.logActivity({
      userId: actor.id,
      userName: actor.name,
      role: actor.role,
      action: "Article deleted",
      resource: "articles",
      resourceId: id,
      description: `Deleted article: "${art.title}".`
    });
    return true;
  }
  // --- Activity Logs (Immutable Audit Trail) ---
  getLogs() {
    return [...this.logs].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }
  logActivity(log) {
    const newLog = {
      _id: `log-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      ...log,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    this.logs.unshift(newLog);
    this.saveToStorage();
  }
}
export const mongoDB = new MongoStorageEngine();

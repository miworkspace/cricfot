import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { MOCK_ARTICLES } from './src/data/mockArticles';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// In-memory comments store for MERN stack API persistence
const commentsStore: Record<string, Array<{ id: string; name: string; time: string; text: string; likes: number }>> = {
  'art-1': [
    {
      id: 'c1',
      name: 'তানভীর আহমেদ',
      time: '২০ মিনিট আগে',
      text: 'মিরপুরের উইকেটে পেসারদের এমন দাপট সত্যিই অনুপ্রেরণাদায়ক। আসন্ন সিরিজে তাসকিন ও হাসানের ফর্ম দেখার অপেক্ষায় রইলাম।',
      likes: 14,
    },
    {
      id: 'c2',
      name: 'মাহমুদ হাসান',
      time: '৪৫ মিনিট আগে',
      text: 'শান্ত অধিনায়ক হিসেবে দলের তরুণ খেলোয়াড়দের চমৎকার আত্মবিশ্বাস দিচ্ছেন।',
      likes: 8,
    },
  ],
};

// 1. Health check & technology stack metadata (MERN Stack REST API)
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    stack: 'MERN (Express REST API, React 19 SPA, Node.js)',
    framework: 'React + Express Server (Vite Powered)',
    uptime_seconds: Math.floor(process.uptime()),
  });
});

// 2. Categories API for Homepage Category Filter Navigation
app.get('/api/categories', (_req: Request, res: Response) => {
  const cricketCount = MOCK_ARTICLES.filter((a) => a.sport === 'cricket').length;
  const footballCount = MOCK_ARTICLES.filter((a) => a.sport === 'football').length;

  res.json({
    categories: [
      {
        id: 'all',
        label: 'সব খবর',
        englishLabel: 'All News',
        count: MOCK_ARTICLES.length,
      },
      {
        id: 'cricket',
        label: 'ক্রিকেট',
        englishLabel: 'Cricket',
        count: cricketCount,
      },
      {
        id: 'football',
        label: 'ফুটবল',
        englishLabel: 'Football',
        count: footballCount,
      },
    ],
  });
});

// 3. Articles REST API with sport/category filtering
app.get('/api/articles', (req: Request, res: Response) => {
  const { sport, category, q, limit } = req.query;
  let articles = [...MOCK_ARTICLES];

  if (sport && typeof sport === 'string' && sport !== 'all') {
    articles = articles.filter((a) => a.sport === sport.toLowerCase());
  }

  if (category && typeof category === 'string') {
    articles = articles.filter((a) => a.category.toLowerCase().includes(category.toLowerCase()));
  }

  if (q && typeof q === 'string') {
    const term = q.toLowerCase();
    articles = articles.filter(
      (a) =>
        a.title.toLowerCase().includes(term) ||
        (a.banglaTitle && a.banglaTitle.includes(term)) ||
        a.excerpt.toLowerCase().includes(term) ||
        a.tags.some((t) => t.toLowerCase().includes(term))
    );
  }

  if (limit) {
    articles = articles.slice(0, Number(limit));
  }

  res.json({
    total: articles.length,
    articles,
  });
});

// 4. Single article endpoint
app.get('/api/articles/:slug', (req: Request, res: Response) => {
  const { slug } = req.params;
  const article = MOCK_ARTICLES.find((a) => a.slug === slug || a.id === slug);

  if (!article) {
    res.status(404).json({ error: 'Article not found' });
    return;
  }

  res.json(article);
});

// 5. Fake JSON Data Endpoint on Details Page (as requested by user)
app.get('/api/articles/:slug/json', (req: Request, res: Response) => {
  const { slug } = req.params;
  const article = MOCK_ARTICLES.find((a) => a.slug === slug || a.id === slug);

  if (!article) {
    res.status(404).json({ error: 'Article not found' });
    return;
  }

  const fakeJsonData = {
    schema_version: '2.4.0',
    api_endpoint: `https://api.cricfot.com/v1/articles/${article.slug}.json`,
    generated_at: new Date().toISOString(),
    status: 'success',
    data: {
      id: article.id,
      slug: article.slug,
      locale: 'bn_BD',
      sport: article.sport,
      category: article.category,
      flags: {
        is_breaking: Boolean(article.breaking),
        is_featured: Boolean(article.featured),
        is_trending: Boolean(article.trending),
        is_sponsored: false,
        paywall: 'free',
      },
      titles: {
        primary: article.banglaTitle || article.title,
        english: article.title,
        seo_meta: `${article.banglaTitle || article.title} | CricFot Sports`,
      },
      excerpt: article.excerpt,
      content: {
        format: 'markdown',
        raw_text: article.content || article.excerpt,
        word_count: (article.content || article.excerpt).split(/\s+/).length,
        reading_time_minutes: article.readTimeMinutes || 4,
      },
      media: {
        featured_image: {
          url: article.image.url,
          caption: article.image.caption || null,
          alt_text: article.image.alt || article.title,
          dimensions: { width: 1200, height: 675, aspect_ratio: '16:9' },
          credit: 'CricFot Photojournalism Archive',
        },
      },
      byline: {
        author_id: article.author.id,
        name: article.author.banglaName || article.author.name,
        english_name: article.author.name,
        role: article.author.role || 'স্পোর্টস করেসপন্ডেন্ট',
        verified: true,
      },
      publishing: {
        published_at: article.publishedAt,
        updated_at: article.updatedAt || article.publishedAt,
        edition: 'Dhaka Digital Broadsheet',
        syndication: ['CricFot Mobile App', 'Google News RSS', 'Apple News Feed'],
      },
      taxonomy: {
        tags: article.tags,
        topics: [article.sport, article.category, 'Bangladesh Sports', 'Live Coverage'],
      },
      engagement_mock_stats: {
        views_total: 14850,
        views_last_hour: 412,
        shares_total: 320,
        bookmarks_saved: 94,
        reader_reactions: {
          fire: 245,
          applause: 189,
          heart: 112,
        },
      },
      ld_json_schema: {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: article.banglaTitle || article.title,
        description: article.excerpt,
        image: [article.image.url],
        datePublished: article.publishedAt,
        dateModified: article.updatedAt || article.publishedAt,
        inLanguage: 'bn-BD',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://cricfot.com/news/${article.slug}`,
        },
        author: {
          '@type': 'Person',
          name: article.author.banglaName || article.author.name,
          jobTitle: article.author.role || 'Sports Journalist',
        },
        publisher: {
          '@type': 'NewsMediaOrganization',
          name: 'CricFot Media',
          logo: {
            '@type': 'ImageObject',
            url: 'https://cricfot.com/logo.png',
          },
        },
      },
    },
  };

  res.json(fakeJsonData);
});

// 6. Google Ad & Sponsored Slots Inventory API
app.get('/api/ads', (_req: Request, res: Response) => {
  res.json({
    provider: 'Google AdSense & CricFot Direct Sponsorships',
    slots: [
      {
        id: 'ca-pub-cricfot-top-leaderboard-994',
        name: 'Top Leaderboard Google Ad',
        format: 'leaderboard',
        dimensions: '728x90',
        sponsor: 'Banglalink 4G',
        badge: 'অফিসিয়াল টেলিকম পার্টনার',
      },
      {
        id: 'ca-pub-cricfot-sidebar-mpu-501',
        name: 'Sidebar Medium Rectangle MPU',
        format: 'mpu',
        dimensions: '300x250',
        sponsor: 'Apex Sports Footwear',
        badge: 'স্পোর্টস গিয়ার',
      },
      {
        id: 'ca-pub-cricfot-in-article-432',
        name: 'Mid-Article In-Feed Native Ad',
        format: 'in-article',
        dimensions: 'Responsive (Fluid)',
        sponsor: 'Walton Smart TV',
        badge: 'অফিসিয়াল ব্রডকাস্ট পার্টনার',
      },
      {
        id: 'ca-pub-cricfot-sidebar-halfpage-812',
        name: 'Sticky Half-Page Google Ad / Sponsor Slot',
        format: 'halfpage',
        dimensions: '300x600',
        sponsor: 'Prime Bank Cricket Card',
        badge: 'এক্সক্লুসিভ পার্টনারশিপ',
      },
    ],
    sponsored_articles: [
      {
        id: 'sp-1',
        title: 'খেলাধুলার প্রতিটি মুহূর্তে হাই-স্পিড ৫G কানেক্টিভিটি',
        sponsor: 'গ্রামীনফোন স্পোর্টস প্যাক',
        category: 'টেলিকম স্পনসরড',
      },
      {
        id: 'sp-2',
        title: 'ক্রিকেট ও ফুটবল খেলোয়াড়দের ইনজুরি রিকভারির সেরা গাইডলাইন',
        sponsor: 'এভারকেয়ার স্পোর্টস মেডিসিন',
        category: 'হেলথ পার্টনার',
      },
      {
        id: 'sp-3',
        title: 'প্রিমিয়াম স্পোর্টস বাইকে নতুন অফার ও এক্সচেঞ্জ সুবিধা',
        sponsor: 'ইয়ামাহা বাংলাদেশ',
        category: 'অটোমোবাইল স্পনসরড',
      },
    ],
  });
});

// 7. Reader comments API
app.get('/api/comments/:articleId', (req: Request, res: Response) => {
  const { articleId } = req.params;
  const list = commentsStore[articleId] || [
    {
      id: 'default-1',
      name: 'তানভীর আহমেদ',
      time: '২০ মিনিট আগে',
      text: 'মিরপুরের উইকেটে পেসারদের এমন দাপট সত্যিই অনুপ্রেরণাদায়ক।',
      likes: 12,
    },
  ];
  res.json({ comments: list });
});

app.post('/api/comments/:articleId', (req: Request, res: Response) => {
  const { articleId } = req.params;
  const { name, text } = req.body;

  if (!text || !text.trim()) {
    res.status(400).json({ error: 'Comment text is required' });
    return;
  }

  const newComment = {
    id: `c-${Date.now()}`,
    name: name && name.trim() ? name.trim() : 'ক্রীড়াপ্রেমী পাঠক',
    time: 'এইমাত্র',
    text: text.trim(),
    likes: 0,
  };

  if (!commentsStore[articleId]) {
    commentsStore[articleId] = [];
  }
  commentsStore[articleId].unshift(newComment);

  res.status(201).json({ success: true, comment: newComment });
});

// 8. Server-Side RBAC Authentication & Role Verification (PDF Section 2, 3, 4, 40)
const requireAdmin = (req: Request, res: Response, next: () => void) => {
  const role = req.headers['x-user-role'] || req.query.role;
  if (role !== 'admin') {
    res.status(403).json({
      error: 'Forbidden: Admin access required for this operation.',
      userRole: role || 'unauthenticated',
      status: 403,
    });
    return;
  }
  next();
};

// Auth Login API
app.post('/api/auth/login', (req: Request, res: Response) => {
  const { email, password } = req.body;
  const normalizedEmail = (email || '').trim().toLowerCase();

  if (normalizedEmail === 'admin@cricfot.com' && password === 'admin123') {
    res.json({
      success: true,
      token: `cricfot_jwt_${Date.now()}`,
      user: {
        id: 'usr-admin-1',
        name: 'Chief Newsroom Admin',
        email: 'admin@cricfot.com',
        role: 'admin',
        roleName: 'Admin (Full Access)',
      },
    });
    return;
  }

  if (normalizedEmail === 'manager@cricfot.com' && password === 'manager123') {
    res.json({
      success: true,
      token: `cricfot_jwt_${Date.now()}`,
      user: {
        id: 'usr-manager-1',
        name: 'Editorial Desk Manager',
        email: 'manager@cricfot.com',
        role: 'manager',
        roleName: 'Manager (Limited CMS)',
      },
    });
    return;
  }

  res.status(401).json({ error: 'Invalid email or password.' });
});

// Admin-only User Management Endpoints (PDF Section 4 & 40)
app.get('/api/admin/users', requireAdmin, (_req: Request, res: Response) => {
  res.json({
    users: [
      {
        id: 'usr-admin-1',
        name: 'Chief Newsroom Admin',
        email: 'admin@cricfot.com',
        role: 'admin',
        status: 'active',
        createdAt: '2026-01-01T00:00:00Z',
        lastLogin: new Date().toISOString(),
      },
      {
        id: 'usr-manager-1',
        name: 'Editorial Desk Manager',
        email: 'manager@cricfot.com',
        role: 'manager',
        status: 'active',
        createdAt: '2026-02-01T00:00:00Z',
        lastLogin: new Date(Date.now() - 3600000).toISOString(),
      },
    ],
  });
});

app.post('/api/admin/users', requireAdmin, (req: Request, res: Response) => {
  const { name, email, role, status } = req.body;
  if (!name || !email) {
    res.status(400).json({ error: 'Name and email are required' });
    return;
  }

  const newUser = {
    id: `usr-${Date.now()}`,
    name,
    email,
    role: role === 'admin' ? 'admin' : 'manager',
    status: status || 'active',
    createdAt: new Date().toISOString(),
    lastLogin: null,
  };

  res.status(201).json({ success: true, user: newUser });
});

// Admin-only Activity Logs Endpoint (PDF Section 37)
app.get('/api/admin/logs', requireAdmin, (_req: Request, res: Response) => {
  res.json({
    logs: [
      {
        id: 'log-1',
        action: 'User logged in',
        userName: 'Chief Newsroom Admin',
        role: 'admin',
        timestamp: new Date().toISOString(),
      },
      {
        id: 'log-2',
        action: 'Article published',
        userName: 'Editorial Desk Manager',
        role: 'manager',
        timestamp: new Date(Date.now() - 3600000).toISOString(),
      },
    ],
  });
});

// Start Express server with Vite middleware in development or static files in production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production static serving
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`CricFot Full-Stack MERN server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();

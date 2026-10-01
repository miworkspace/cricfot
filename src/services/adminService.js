let mockArticles = [
  {
    id: "art-1",
    title: "\u09AE\u09BF\u09B0\u09AA\u09C1\u09B0 \u099F\u09C7\u09B8\u09CD\u099F\u09C7 \u09B6\u09CD\u09B0\u09C0\u09B2\u0999\u09CD\u0995\u09BE\u09B0 \u09AC\u09BF\u09AA\u0995\u09CD\u09B7\u09C7 \u09B2\u09BF\u099F\u09A8 \u0993 \u09B6\u09BE\u09A8\u09CD\u09A4\u09B0 \u09A6\u09BE\u09B0\u09C1\u09A3 \u099C\u09C1\u099F\u09BF, \u099A\u09BE\u09B2\u0995\u09C7\u09B0 \u0986\u09B8\u09A8\u09C7 \u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6",
    banglaTitle: "\u09AE\u09BF\u09B0\u09AA\u09C1\u09B0 \u099F\u09C7\u09B8\u09CD\u099F\u09C7 \u09B6\u09CD\u09B0\u09C0\u09B2\u0999\u09CD\u0995\u09BE\u09B0 \u09AC\u09BF\u09AA\u0995\u09CD\u09B7\u09C7 \u09B2\u09BF\u099F\u09A8 \u0993 \u09B6\u09BE\u09A8\u09CD\u09A4\u09B0 \u09A6\u09BE\u09B0\u09C1\u09A3 \u099C\u09C1\u099F\u09BF, \u099A\u09BE\u09B2\u0995\u09C7\u09B0 \u0986\u09B8\u09A8\u09C7 \u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6",
    slug: "mirpur-test-liton-shanto-partnership-bangladesh-leads",
    subtitle: "\u099A\u09A4\u09C1\u09B0\u09CD\u09A5 \u0987\u09A8\u09BF\u0982\u09B8\u09C7 \u09E7\u09EE\u09E8 \u09B0\u09BE\u09A8\u09C7\u09B0 \u099C\u09C1\u099F\u09BF\u09A4\u09C7 \u099C\u09AF\u09BC\u09C7\u09B0 \u09A6\u09CD\u09AC\u09BE\u09B0\u09AA\u09CD\u09B0\u09BE\u09A8\u09CD\u09A4\u09C7 \u099F\u09BE\u0987\u0997\u09BE\u09B0\u09B0\u09BE",
    excerpt: "\u099A\u09A4\u09C1\u09B0\u09CD\u09A5 \u0987\u09A8\u09BF\u0982\u09B8\u09C7 \u09A6\u09C3\u09A2\u09BC\u099A\u09C7\u09A4\u09BE \u09AC\u09CD\u09AF\u09BE\u099F\u09BF\u0982\u09AF\u09BC\u09C7 \u09B2\u09BF\u099F\u09A8 \u09A6\u09BE\u09B8\u09C7\u09B0 \u099D\u0995\u099D\u0995\u09C7 \u09B8\u09C7\u099E\u09CD\u099A\u09C1\u09B0\u09BF \u098F\u09AC\u0982 \u0985\u09A7\u09BF\u09A8\u09BE\u09AF\u09BC\u0995 \u09B6\u09BE\u09A8\u09CD\u09A4\u09B0 \u09A8\u09BF\u09AF\u09BC\u09A8\u09CD\u09A4\u09CD\u09B0\u09BF\u09A4 \u0987\u09A8\u09BF\u0982\u09B8\u09C7 \u09B6\u09C7\u09B0-\u0987-\u09AC\u09BE\u0982\u09B2\u09BE \u09B8\u09CD\u099F\u09C7\u09A1\u09BF\u09AF\u09BC\u09BE\u09AE\u09C7 \u09AA\u09CD\u09B0\u09A5\u09AE \u099F\u09C7\u09B8\u09CD\u099F\u09C7 \u099C\u09AF\u09BC\u09C7\u09B0 \u09B8\u09C1\u09AC\u09BE\u09B8 \u09AA\u09BE\u099A\u09CD\u099B\u09C7 \u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6 \u0995\u09CD\u09B0\u09BF\u0995\u09C7\u099F \u09A6\u09B2\u0964",
    content: `\u09AE\u09BF\u09B0\u09AA\u09C1\u09B0 \u09B6\u09C7\u09B0-\u0987-\u09AC\u09BE\u0982\u09B2\u09BE \u099C\u09BE\u09A4\u09C0\u09AF\u09BC \u0995\u09CD\u09B0\u09BF\u0995\u09C7\u099F \u09B8\u09CD\u099F\u09C7\u09A1\u09BF\u09AF\u09BC\u09BE\u09AE\u09C7 \u09B6\u09CD\u09B0\u09C0\u09B2\u0999\u09CD\u0995\u09BE\u09B0 \u09AC\u09BF\u09AA\u0995\u09CD\u09B7\u09C7 \u09B8\u09BF\u09B0\u09BF\u099C\u09C7\u09B0 \u09AA\u09CD\u09B0\u09A5\u09AE \u099F\u09C7\u09B8\u09CD\u099F\u09C7\u09B0 \u099A\u09A4\u09C1\u09B0\u09CD\u09A5 \u09A6\u09BF\u09A8\u09C7 \u09A6\u09C1\u09B0\u09CD\u09A6\u09BE\u09A8\u09CD\u09A4 \u09AC\u09CD\u09AF\u09BE\u099F\u09BF\u0982 \u09AA\u09CD\u09B0\u09A6\u09B0\u09CD\u09B6\u09A8 \u0995\u09B0\u09C7\u099B\u09C7 \u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6\u0964

\u09B2\u09BF\u099F\u09A8 \u09A6\u09BE\u09B8 \u0993 \u09A8\u09BE\u099C\u09AE\u09C1\u09B2 \u09B9\u09CB\u09B8\u09C7\u09A8 \u09B6\u09BE\u09A8\u09CD\u09A4\u09B0 \u09B0\u09C7\u0995\u09B0\u09CD\u09A1 \u0997\u09A1\u09BC\u09BE \u09E7\u09EE\u09E8 \u09B0\u09BE\u09A8\u09C7\u09B0 \u099C\u09C1\u099F\u09BF\u09A4\u09C7 \u09AD\u09B0 \u0995\u09B0\u09C7 \u099C\u09AF\u09BC\u09C7\u09B0 \u09A6\u09CD\u09AC\u09BE\u09B0\u09AA\u09CD\u09B0\u09BE\u09A8\u09CD\u09A4\u09C7 \u09AA\u09CC\u0981\u099B\u09C7 \u0997\u09C7\u099B\u09C7 \u099F\u09BE\u0987\u0997\u09BE\u09B0\u09B0\u09BE\u0964 \u0989\u0987\u0995\u09C7\u099F\u09C7 \u0985\u09B8\u09AE\u09BE\u09A8 \u09AC\u09BE\u0989\u09A8\u09CD\u09B8 \u0993 \u09B8\u09CD\u09AA\u09BF\u09A8 \u09B8\u09B9\u09BE\u09AF\u09BC\u0995 \u0995\u09A8\u09CD\u09A1\u09BF\u09B6\u09A8\u09C7\u0993 \u099A\u09B0\u09AE \u09A7\u09C8\u09B0\u09CD\u09AF \u098F\u09AC\u0982 \u09A8\u09BF\u0996\u09C1\u0981\u09A4 \u09B6\u099F \u09A8\u09BF\u09B0\u09CD\u09AC\u09BE\u099A\u09A8\u09C7 \u09B6\u09CD\u09B0\u09C0\u09B2\u0999\u09CD\u0995\u09BE\u09A8 \u09B8\u09CD\u09AA\u09BF\u09A8\u09BE\u09B0\u09A6\u09C7\u09B0 \u098F\u0995\u09C7\u09B0 \u09AA\u09B0 \u098F\u0995 \u09AC\u09BE\u0989\u09A8\u09CD\u09A1\u09BE\u09B0\u09BF\u09A4\u09C7 \u09B8\u09BE\u099C\u09BE \u09A6\u09C7\u09A8 \u09B2\u09BF\u099F\u09A8\u0964

\u09AE\u09CD\u09AF\u09BE\u099A \u09B6\u09C7\u09B7\u09C7 \u09B8\u0982\u09AC\u09BE\u09A6 \u09B8\u09AE\u09CD\u09AE\u09C7\u09B2\u09A8\u09C7 \u09A6\u09B2\u09C7\u09B0 \u09B8\u09CD\u09AA\u09BF\u09A8 \u0995\u09CB\u099A \u09AC\u09B2\u09C7\u09A8, "\u0986\u09AE\u09BE\u09A6\u09C7\u09B0 \u09AC\u09CD\u09AF\u09BE\u099F\u09BE\u09B0\u09B0\u09BE \u0995\u09A8\u09CD\u09A1\u09BF\u09B6\u09A8 \u0985\u09A8\u09C1\u09AF\u09BE\u09AF\u09BC\u09C0 \u09A8\u09BF\u099C\u09C7\u09A6\u09C7\u09B0 \u099F\u09C7\u0995\u09A8\u09BF\u0995 \u099A\u09AE\u09CE\u0995\u09BE\u09B0\u09AD\u09BE\u09AC\u09C7 \u09AA\u09CD\u09B0\u09AF\u09BC\u09CB\u0997 \u0995\u09B0\u09C7\u099B\u09C7\u09A8\u0964"`,
    sport: "cricket",
    category: "Bangladesh Cricket",
    tags: ["\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6 \u0995\u09CD\u09B0\u09BF\u0995\u09C7\u099F", "\u09AE\u09BF\u09B0\u09AA\u09C1\u09B0 \u099F\u09C7\u09B8\u09CD\u099F", "\u09B2\u09BF\u099F\u09A8 \u09A6\u09BE\u09B8", "\u09A8\u09BE\u099C\u09AE\u09C1\u09B2 \u09B6\u09BE\u09A8\u09CD\u09A4"],
    authorId: "auth-1",
    authorName: "Rashedul Islam",
    authorBanglaName: "\u09B0\u09BE\u09B6\u09C7\u09A6\u09C1\u09B2 \u0987\u09B8\u09B2\u09BE\u09AE",
    image: {
      url: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1200&q=80",
      caption: "\u09AE\u09BF\u09B0\u09AA\u09C1\u09B0\u09C7 \u099A\u09A4\u09C1\u09B0\u09CD\u09A5 \u09A6\u09BF\u09A8\u09C7 \u09AC\u09CD\u09AF\u09BE\u099F \u09B9\u09BE\u09A4\u09C7 \u09B8\u09C7\u099E\u09CD\u099A\u09C1\u09B0\u09BF \u0989\u09A6\u09AF\u09BE\u09AA\u09A8\u09C7 \u09B2\u09BF\u099F\u09A8 \u09A6\u09BE\u09B8\u0964",
      alt: "\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6 \u09A6\u09B2\u09C7\u09B0 \u099F\u09C7\u09B8\u09CD\u099F \u09AE\u09CD\u09AF\u09BE\u099A \u0989\u09A6\u09AF\u09BE\u09AA\u09A8",
      source: "CricFot Media / AFP"
    },
    status: "published",
    publishedAt: "2026-09-22T07:45:00Z",
    updatedAt: "2026-09-22T08:10:00Z",
    featured: true,
    breaking: true,
    trending: true,
    editorsPick: true,
    views: 18450,
    readTimeMinutes: 5,
    seo: {
      title: "\u09AE\u09BF\u09B0\u09AA\u09C1\u09B0 \u099F\u09C7\u09B8\u09CD\u099F\u09C7 \u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6 \u099A\u09BE\u09B2\u0995\u09C7\u09B0 \u0986\u09B8\u09A8\u09C7 | CricFot",
      description: "\u09B2\u09BF\u099F\u09A8 \u09A6\u09BE\u09B8 \u0993 \u09B6\u09BE\u09A8\u09CD\u09A4\u09B0 \u09B0\u09C7\u0995\u09B0\u09CD\u09A1 \u099C\u09C1\u099F\u09BF\u09A4\u09C7 \u099F\u09C7\u09B8\u09CD\u099F\u09C7 \u099C\u09AF\u09BC\u09C7\u09B0 \u09B8\u09C1\u09AC\u09BE\u09B8 \u099F\u09BE\u0987\u0997\u09BE\u09B0\u09A6\u09C7\u09B0\u0964 \u09AC\u09BF\u09B8\u09CD\u09A4\u09BE\u09B0\u09BF\u09A4 \u09AA\u09CD\u09B0\u09A4\u09BF\u09AC\u09C7\u09A6\u09A8 CricFot-\u098F\u0964"
    }
  },
  {
    id: "art-2",
    title: "\u099A\u09CD\u09AF\u09BE\u09AE\u09CD\u09AA\u09BF\u09AF\u09BC\u09A8\u09CD\u09B8 \u09B2\u09BF\u0997 \u09B0\u09CB\u09AE\u09BE\u099E\u09CD\u099A: \u0987\u09A4\u09BF\u09B9\u09BE\u09A6\u09C7 \u09B6\u09C7\u09B7 \u09AE\u09C1\u09B9\u09C2\u09B0\u09CD\u09A4\u09C7\u09B0 \u0997\u09CB\u09B2\u09C7 \u0986\u09B0\u09CD\u09B8\u09C7\u09A8\u09BE\u09B2\u0995\u09C7 \u09B0\u09C1\u0996\u09C7 \u09A6\u09BF\u09B2 \u09B0\u09BF\u09AF\u09BC\u09BE\u09B2 \u09AE\u09BE\u09A6\u09CD\u09B0\u09BF\u09A6",
    banglaTitle: "\u099A\u09CD\u09AF\u09BE\u09AE\u09CD\u09AA\u09BF\u09AF\u09BC\u09A8\u09CD\u09B8 \u09B2\u09BF\u0997 \u09B0\u09CB\u09AE\u09BE\u099E\u09CD\u099A: \u0987\u09A4\u09BF\u09B9\u09BE\u09A6\u09C7 \u09B6\u09C7\u09B7 \u09AE\u09C1\u09B9\u09C2\u09B0\u09CD\u09A4\u09C7\u09B0 \u0997\u09CB\u09B2\u09C7 \u0986\u09B0\u09CD\u09B8\u09C7\u09A8\u09BE\u09B2\u0995\u09C7 \u09B0\u09C1\u0996\u09C7 \u09A6\u09BF\u09B2 \u09B0\u09BF\u09AF\u09BC\u09BE\u09B2 \u09AE\u09BE\u09A6\u09CD\u09B0\u09BF\u09A6",
    slug: "champions-league-real-madrid-arsenal-thriller-draw",
    subtitle: "\u09AF\u09CB\u0997 \u0995\u09B0\u09BE \u09B8\u09AE\u09AF\u09BC\u09C7\u09B0 \u09EF\u09E8 \u09AE\u09BF\u09A8\u09BF\u099F\u09C7 \u09AD\u09BF\u09A8\u09BF\u09B8\u09BF\u09AF\u09BC\u09C1\u09B8\u09C7\u09B0 \u09A8\u09BE\u099F\u0995\u09C0\u09AF\u09BC \u0997\u09CB\u09B2",
    excerpt: "\u09AF\u09CB\u0997 \u0995\u09B0\u09BE \u09B8\u09AE\u09AF\u09BC\u09C7\u09B0 \u09A6\u09CD\u09AC\u09BF\u09A4\u09C0\u09AF\u09BC \u09AE\u09BF\u09A8\u09BF\u099F\u09C7 \u09AD\u09BF\u09A8\u09BF\u09B8\u09BF\u09AF\u09BC\u09C1\u09B8\u09C7\u09B0 \u09A6\u09C2\u09B0\u09AA\u09BE\u09B2\u09CD\u09B2\u09BE\u09B0 \u09B6\u099F\u09C7 \u09A8\u09BE\u099F\u0995\u09C0\u09AF\u09BC \u09A1\u09CD\u09B0 \u09A8\u09BF\u09AF\u09BC\u09C7 \u09AE\u09BE\u09A0 \u099B\u09BE\u09A1\u09BC\u09B2 \u0995\u09BE\u09B0\u09CD\u09B2\u09CB \u0986\u09A8\u099A\u09C7\u09B2\u09A4\u09CD\u09A4\u09BF\u09B0 \u09B6\u09BF\u09B7\u09CD\u09AF\u09B0\u09BE\u0964",
    content: `\u0989\u09AF\u09BC\u09C7\u09AB\u09BE \u099A\u09CD\u09AF\u09BE\u09AE\u09CD\u09AA\u09BF\u09AF\u09BC\u09A8\u09CD\u09B8 \u09B2\u09BF\u0997\u09C7\u09B0 \u09B0\u09CB\u09AE\u09BE\u099E\u09CD\u099A\u0995\u09B0 \u09AE\u09CD\u09AF\u09BE\u099A\u09C7 \u0986\u09B0\u09CD\u09B8\u09C7\u09A8\u09BE\u09B2\u09C7\u09B0 \u0998\u09B0\u09C7\u09B0 \u09AE\u09BE\u09A0\u09C7 \u09E8-\u09E8 \u0997\u09CB\u09B2\u09C7 \u09A1\u09CD\u09B0 \u0995\u09B0\u09C7\u099B\u09C7 \u09B0\u09BF\u09AF\u09BC\u09BE\u09B2 \u09AE\u09BE\u09A6\u09CD\u09B0\u09BF\u09A6\u0964

\u09AA\u09CD\u09B0\u09A5\u09AE\u09BE\u09B0\u09CD\u09A7\u09C7 \u09B8\u09BE\u0995\u09BE\u09B0 \u0997\u09CB\u09B2\u09C7 \u0986\u09B0\u09CD\u09B8\u09C7\u09A8\u09BE\u09B2 \u098F\u0997\u09BF\u09AF\u09BC\u09C7 \u09A5\u09BE\u0995\u09B2\u09C7\u0993 \u09A6\u09CD\u09AC\u09BF\u09A4\u09C0\u09AF\u09BC\u09BE\u09B0\u09CD\u09A7\u09C7 \u099C\u09C1\u09A1 \u09AC\u09C7\u09B2\u09BF\u0982\u09B9\u09BE\u09AE\u09C7\u09B0 \u0997\u09CB\u09B2\u09C7 \u09B8\u09AE\u09A4\u09BE\u09AF\u09BC \u09AB\u09C7\u09B0\u09C7 \u09AE\u09BE\u09A6\u09CD\u09B0\u09BF\u09A6\u0964 \u09B6\u09C7\u09B7 \u09AC\u09BE\u0981\u09B6\u09BF \u09AC\u09BE\u099C\u09BE\u09B0 \u09A0\u09BF\u0995 \u0986\u0997 \u09AE\u09C1\u09B9\u09C2\u09B0\u09CD\u09A4\u09C7 \u09AD\u09BF\u09A8\u09BF\u09B8\u09BF\u09AF\u09BC\u09C1\u09B8 \u099C\u09C1\u09A8\u09BF\u09AF\u09BC\u09B0\u09C7\u09B0 \u09A6\u09C1\u09B0\u09CD\u09A6\u09BE\u09A8\u09CD\u09A4 \u09B6\u099F\u09C7 \u09AA\u09AF\u09BC\u09C7\u09A8\u09CD\u099F \u09AD\u09BE\u0997\u09BE\u09AD\u09BE\u0997\u09BF \u09B9\u09AF\u09BC\u0964`,
    sport: "football",
    category: "Champions League",
    tags: ["\u0989\u09AF\u09BC\u09C7\u09AB\u09BE \u099A\u09CD\u09AF\u09BE\u09AE\u09CD\u09AA\u09BF\u09AF\u09BC\u09A8\u09CD\u09B8 \u09B2\u09BF\u0997", "\u09B0\u09BF\u09AF\u09BC\u09BE\u09B2 \u09AE\u09BE\u09A6\u09CD\u09B0\u09BF\u09A6", "\u0986\u09B0\u09CD\u09B8\u09C7\u09A8\u09BE\u09B2"],
    authorId: "auth-2",
    authorName: "Tanvir Ahmed",
    authorBanglaName: "\u09A4\u09BE\u09A8\u09AD\u09C0\u09B0 \u0986\u09B9\u09AE\u09C7\u09A6",
    image: {
      url: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80",
      caption: "\u0989\u09A4\u09CD\u09A4\u09C7\u099C\u09A8\u09BE\u0995\u09B0 \u09AE\u09C1\u09B9\u09C2\u09B0\u09CD\u09A4\u09C7 \u09B0\u09BF\u09AF\u09BC\u09BE\u09B2\u09C7\u09B0 \u09B8\u09AE\u09A4\u09BE\u09B8\u09C2\u099A\u0995 \u0997\u09CB\u09B2\u09C7\u09B0 \u0989\u09B2\u09CD\u09B2\u09BE\u09B8\u0964",
      alt: "\u09AB\u09C1\u099F\u09AC\u09B2 \u09AE\u09CD\u09AF\u09BE\u099A\u09C7\u09B0 \u0986\u0995\u09CD\u09B0\u09AE\u09A3\u09BE\u09A4\u09CD\u09AE\u0995 \u09AE\u09C1\u09B9\u09C2\u09B0\u09CD\u09A4",
      source: "Reuters / CricFot"
    },
    status: "published",
    publishedAt: "2026-09-22T07:15:00Z",
    featured: true,
    trending: true,
    views: 14200,
    readTimeMinutes: 3
  },
  {
    id: "art-3",
    title: "\u09AC\u09BF\u09AA\u09BF\u098F\u09B2 \u09E8\u09E6\u09E8\u09EC \u09A1\u09CD\u09B0\u09BE\u09AB\u099F: \u09A6\u09C7\u09B6\u09C0\u09AF\u09BC \u09AA\u09C7\u09B8\u09BE\u09B0 \u0993 \u09AB\u09BF\u09A8\u09BF\u09B6\u09BE\u09B0\u09A6\u09C7\u09B0 \u09A6\u09BF\u0995\u09C7\u0987 \u09B8\u09AC\u099A\u09C7\u09AF\u09BC\u09C7 \u09AC\u09C7\u09B6\u09BF \u099D\u09C1\u0981\u0995\u09B2 \u09AB\u09CD\u09B0\u09CD\u09AF\u09BE\u099E\u09CD\u099A\u09BE\u0987\u099C\u09BF\u0997\u09C1\u09B2\u09CB",
    banglaTitle: "\u09AC\u09BF\u09AA\u09BF\u098F\u09B2 \u09E8\u09E6\u09E8\u09EC \u09A1\u09CD\u09B0\u09BE\u09AB\u099F: \u09A6\u09C7\u09B6\u09C0\u09AF\u09BC \u09AA\u09C7\u09B8\u09BE\u09B0 \u0993 \u09AB\u09BF\u09A8\u09BF\u09B6\u09BE\u09B0\u09A6\u09C7\u09B0 \u09A6\u09BF\u0995\u09C7\u0987 \u09B8\u09AC\u099A\u09C7\u09AF\u09BC\u09C7 \u09AC\u09C7\u09B6\u09BF \u099D\u09C1\u0981\u0995\u09B2 \u09AB\u09CD\u09B0\u09CD\u09AF\u09BE\u099E\u09CD\u099A\u09BE\u0987\u099C\u09BF\u0997\u09C1\u09B2\u09CB",
    slug: "bpl-2026-draft-franchises-prioritize-local-fast-bowlers",
    excerpt: "\u09A1\u09CD\u09B0\u09BE\u09AB\u099F\u09C7\u09B0 \u09AA\u09CD\u09B0\u09A5\u09AE \u09A6\u09C1\u0987 \u09B0\u09BE\u0989\u09A8\u09CD\u09A1\u09C7\u0987 \u09A6\u09B2 \u09AA\u09C7\u09AF\u09BC\u09C7\u099B\u09C7\u09A8 \u09A4\u09B0\u09C1\u09A3 \u09AA\u09C7\u09B8\u09BE\u09B0\u09B0\u09BE; \u0985\u09AD\u09BF\u099C\u09CD\u099E\u09A6\u09C7\u09B0 \u099A\u09C7\u09AF\u09BC\u09C7 \u099F\u09BF-\u099F\u09CB\u09AF\u09BC\u09C7\u09A8\u09CD\u099F\u09BF \u09B8\u09CD\u09AA\u09C7\u09B6\u09BE\u09B2\u09BF\u09B8\u09CD\u099F\u09A6\u09C7\u09B0 \u09A6\u09B0 \u09AC\u09C7\u09B6\u09BF\u0964",
    content: "\u09AC\u09BF\u09AA\u09BF\u098F\u09B2 \u09E8\u09E6\u09E8\u09EC-\u098F\u09B0 \u0996\u09C7\u09B2\u09CB\u09AF\u09BC\u09BE\u09A1\u09BC \u09A8\u09BF\u09B2\u09BE\u09AE\u09C7 \u09A6\u09B2\u0997\u09C1\u09B2\u09CB\u09B0 \u0995\u09CC\u09B6\u09B2\u0997\u09A4 \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8 \u099A\u09CB\u0996\u09C7 \u09AA\u09A1\u09BC\u09BE\u09B0 \u09AE\u09A4\u09CB\u0964",
    sport: "cricket",
    category: "BPL",
    tags: ["\u09AC\u09BF\u09AA\u09BF\u098F\u09B2 \u09E8\u09E6\u09E8\u09EC", "\u09AC\u09BF\u09B8\u09BF\u09AC\u09BF", "\u09A1\u09CD\u09B0\u09BE\u09AB\u099F"],
    authorId: "auth-3",
    authorName: "Mahmudul Hasan",
    authorBanglaName: "\u09AE\u09BE\u09B9\u09AE\u09C1\u09A6\u09C1\u09B2 \u09B9\u09BE\u09B8\u09BE\u09A8",
    image: {
      url: "https://images.unsplash.com/photo-1531415074868-036b1c57e3b0?auto=format&fit=crop&w=800&q=80",
      alt: "\u09AC\u09BF\u09AA\u09BF\u098F\u09B2 \u09AB\u09CD\u09B2\u09BE\u09A1\u09B2\u09BE\u0987\u099F"
    },
    status: "published",
    publishedAt: "2026-09-22T06:50:00Z",
    featured: true,
    views: 9800,
    readTimeMinutes: 4
  },
  {
    id: "art-4",
    title: "\u09AC\u09BE\u09AB\u09C1\u09AB\u09C7 \u098F\u09B6\u09BF\u09AF\u09BC\u09BE\u09A8 \u0995\u09BE\u09AA \u09AC\u09BE\u099B\u09BE\u0987: \u09B9\u09BE\u09AE\u099C\u09BE \u099A\u09CC\u09A7\u09C1\u09B0\u09C0\u0995\u09C7 \u0998\u09BF\u09B0\u09C7 \u09B2\u09BE\u09B2-\u09B8\u09AC\u09C1\u099C\u09C7\u09B0 \u0986\u0995\u09CD\u09B0\u09AE\u09A3\u09AD\u09BE\u0997\u09C7 \u09A8\u09A4\u09C1\u09A8 \u0986\u09B6\u09BE\u09B0 \u09B8\u099E\u09CD\u099A\u09BE\u09B0",
    banglaTitle: "\u09AC\u09BE\u09AB\u09C1\u09AB\u09C7 \u098F\u09B6\u09BF\u09AF\u09BC\u09BE\u09A8 \u0995\u09BE\u09AA \u09AC\u09BE\u099B\u09BE\u0987: \u09B9\u09BE\u09AE\u099C\u09BE \u099A\u09CC\u09A7\u09C1\u09B0\u09C0\u0995\u09C7 \u0998\u09BF\u09B0\u09C7 \u09B2\u09BE\u09B2-\u09B8\u09AC\u09C1\u099C\u09C7\u09B0 \u0986\u0995\u09CD\u09B0\u09AE\u09A3\u09AD\u09BE\u0997\u09C7 \u09A8\u09A4\u09C1\u09A8 \u0986\u09B6\u09BE\u09B0 \u09B8\u099E\u09CD\u099A\u09BE\u09B0",
    slug: "baff-asian-cup-qualifiers-hamza-choudhury-hopes",
    excerpt: "\u099C\u09BE\u09A4\u09C0\u09AF\u09BC \u09A6\u09B2\u09C7\u09B0 \u0985\u09A8\u09C1\u09B6\u09C0\u09B2\u09A8\u09C7 \u09AA\u09C1\u09B0\u09CB\u09A6\u09AE\u09C7 \u09AF\u09CB\u0997 \u09A6\u09BF\u09AF\u09BC\u09C7\u099B\u09C7\u09A8 \u09A4\u09BE\u09B0\u0995\u09BE \u09AE\u09BF\u09A1\u09AB\u09BF\u09B2\u09CD\u09A1\u09BE\u09B0; \u0995\u09CB\u099A \u0995\u09BE\u09AC\u09B0\u09C7\u09B0\u09BE \u09B8\u09BE\u099C\u09BE\u099A\u09CD\u099B\u09C7\u09A8 \u09B8\u09AE\u09A8\u09CD\u09AC\u09BF\u09A4 \u09EA-\u09E9-\u09E9 \u09AB\u09B0\u09CD\u09AE\u09C7\u09B6\u09A8\u0964",
    content: "\u09B9\u09BE\u09AE\u099C\u09BE \u099A\u09CC\u09A7\u09C1\u09B0\u09C0\u09B0 \u0985\u09A8\u09CD\u09A4\u09B0\u09CD\u09AD\u09C1\u0995\u09CD\u09A4\u09BF \u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6\u09C7\u09B0 \u09AE\u09BE\u099D\u09AE\u09BE\u09A0 \u0993 \u0986\u0995\u09CD\u09B0\u09AE\u09A3\u09AD\u09BE\u0997\u09C7\u09B0 \u0997\u09A4\u09BF \u09AC\u09C3\u09A6\u09CD\u09A7\u09BF \u0995\u09B0\u09C7\u099B\u09C7 \u09AC\u09B9\u09C1\u0997\u09C1\u09A3\u0964",
    sport: "football",
    category: "Bangladesh Football",
    tags: ["\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6 \u09AB\u09C1\u099F\u09AC\u09B2", "\u09AC\u09BE\u09AB\u09C1\u09AB\u09C7", "\u09B9\u09BE\u09AE\u099C\u09BE \u099A\u09CC\u09A7\u09C1\u09B0\u09C0"],
    authorId: "auth-4",
    authorName: "Sourav Datta",
    authorBanglaName: "\u09B8\u09CC\u09B0\u09AD \u09A6\u09A4\u09CD\u09A4",
    image: {
      url: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80",
      alt: "\u09AB\u09C1\u099F\u09AC\u09B2 \u099F\u09CD\u09B0\u09C7\u09A8\u09BF\u0982 \u09B8\u09C7\u09B6\u09A8"
    },
    status: "published",
    publishedAt: "2026-09-22T05:30:00Z",
    featured: true,
    views: 11300,
    readTimeMinutes: 4
  },
  {
    id: "art-5",
    title: "\u09AE\u09C1\u09B8\u09CD\u09A4\u09BE\u09AB\u09BF\u099C\u09C7\u09B0 \u0995\u09BE\u099F\u09BE\u09B0\u09C7\u09B0 \u09B8\u09BE\u09AE\u09A8\u09C7 \u0995\u09C7\u09A8 \u09AA\u09B0\u09BE\u09B8\u09CD\u09A4 \u09AC\u09BF\u09B6\u09CD\u09AC\u09B8\u09C7\u09B0\u09BE \u09AC\u09CD\u09AF\u09BE\u099F\u09BE\u09B0\u09B0\u09BE? \u09B8\u09CD\u09AA\u09CB\u09B0\u09CD\u099F\u09B8 \u09A1\u09C7\u099F\u09BE \u0985\u09CD\u09AF\u09BE\u09A8\u09BE\u09B2\u09BF\u09B8\u09BF\u09B8",
    banglaTitle: "\u09AE\u09C1\u09B8\u09CD\u09A4\u09BE\u09AB\u09BF\u099C\u09C7\u09B0 \u0995\u09BE\u099F\u09BE\u09B0\u09C7\u09B0 \u09B8\u09BE\u09AE\u09A8\u09C7 \u0995\u09C7\u09A8 \u09AA\u09B0\u09BE\u09B8\u09CD\u09A4 \u09AC\u09BF\u09B6\u09CD\u09AC\u09B8\u09C7\u09B0\u09BE \u09AC\u09CD\u09AF\u09BE\u099F\u09BE\u09B0\u09B0\u09BE? \u09B8\u09CD\u09AA\u09CB\u09B0\u09CD\u099F\u09B8 \u09A1\u09C7\u099F\u09BE \u0985\u09CD\u09AF\u09BE\u09A8\u09BE\u09B2\u09BF\u09B8\u09BF\u09B8",
    slug: "mustafizur-cutters-data-analytics-bowling-mastery",
    excerpt: "\u09A1\u09C7\u09A5 \u0993\u09AD\u09BE\u09B0\u09C7 \u09A8\u09BF\u09AF\u09BC\u09A8\u09CD\u09A4\u09CD\u09B0\u09BF\u09A4 \u0987\u0995\u09CB\u09A8\u09AE\u09BF \u0993 \u09B8\u09CD\u09B2\u09CB\u09AF\u09BC\u09BE\u09B0 \u09AC\u09BE\u0989\u09A8\u09CD\u09B8\u09BE\u09B0\u09C7\u09B0 \u09B8\u09C1\u0987\u0982 \u0995\u09CB\u09A3 \u09A8\u09BF\u09AF\u09BC\u09C7 \u0986\u09A7\u09C1\u09A8\u09BF\u0995 \u0995\u09CD\u09B0\u09BF\u0995\u09C7\u099F \u09AA\u09CD\u09B0\u09AF\u09C1\u0995\u09CD\u09A4\u09BF\u09B0 \u09AC\u09BF\u09B6\u09CD\u09B2\u09C7\u09B7\u09A3\u0964",
    content: "\u09AE\u09C1\u09B8\u09CD\u09A4\u09BE\u09AB\u09BF\u099C\u09C1\u09B0 \u09B0\u09B9\u09AE\u09BE\u09A8\u09C7\u09B0 \u09B8\u09CD\u09B2\u09CB\u09AF\u09BC\u09BE\u09B0 \u0995\u09BE\u099F\u09BE\u09B0\u09C7\u09B0 \u09B0\u09BF\u09B2\u09BF\u099C \u09AA\u09AF\u09BC\u09C7\u09A8\u09CD\u099F \u0993 \u0997\u09CD\u09B0\u09BF\u09AA\u09C7\u09B0 \u0993\u09AA\u09B0 \u09AC\u09BF\u09B8\u09CD\u09A4\u09BE\u09B0\u09BF\u09A4 \u09AC\u09C8\u099C\u09CD\u099E\u09BE\u09A8\u09BF\u0995 \u09AA\u09CD\u09B0\u09A4\u09BF\u09AC\u09C7\u09A6\u09A8\u0964",
    sport: "cricket",
    category: "Analysis",
    tags: ["\u09AE\u09C1\u09B8\u09CD\u09A4\u09BE\u09AB\u09BF\u099C\u09C1\u09B0 \u09B0\u09B9\u09AE\u09BE\u09A8", "\u0986\u0987\u09AA\u09BF\u098F\u09B2", "\u0985\u09CD\u09AF\u09BE\u09A8\u09BE\u09B2\u09BF\u09B8\u09BF\u09B8"],
    authorId: "auth-1",
    authorName: "Rashedul Islam",
    authorBanglaName: "\u09B0\u09BE\u09B6\u09C7\u09A6\u09C1\u09B2 \u0987\u09B8\u09B2\u09BE\u09AE",
    image: {
      url: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=600&q=80",
      alt: "\u09AE\u09C1\u09B8\u09CD\u09A4\u09BE\u09AB\u09BF\u099C \u09AC\u09CB\u09B2\u09BF\u0982 \u09AC\u09BF\u09B6\u09CD\u09B2\u09C7\u09B7\u09A3"
    },
    status: "draft",
    publishedAt: "2026-09-22T08:15:00Z",
    views: 450,
    readTimeMinutes: 6
  },
  {
    id: "art-6",
    title: "\u09AA\u09CD\u09B0\u09BF\u09AE\u09BF\u09AF\u09BC\u09BE\u09B0 \u09B2\u09BF\u0997\u09C7 \u0985\u09CD\u09AF\u09BE\u09A8\u09AB\u09BF\u09B2\u09CD\u09A1\u09C7 \u0986\u09B0\u09CD\u09A8\u09C7 \u09B8\u09CD\u09B2\u099F\u09C7\u09B0 \u09B2\u09BF\u09AD\u09BE\u09B0\u09AA\u09C1\u09B2\u09C7\u09B0 \u099F\u09BE\u09A8\u09BE \u09B7\u09B7\u09CD\u09A0 \u099C\u09AF\u09BC\u09C7\u09B0 \u09B0\u09A3\u0995\u09CC\u09B6\u09B2",
    banglaTitle: "\u09AA\u09CD\u09B0\u09BF\u09AE\u09BF\u09AF\u09BC\u09BE\u09B0 \u09B2\u09BF\u0997\u09C7 \u0985\u09CD\u09AF\u09BE\u09A8\u09AB\u09BF\u09B2\u09CD\u09A1\u09C7 \u0986\u09B0\u09CD\u09A8\u09C7 \u09B8\u09CD\u09B2\u099F\u09C7\u09B0 \u09B2\u09BF\u09AD\u09BE\u09B0\u09AA\u09C1\u09B2\u09C7\u09B0 \u099F\u09BE\u09A8\u09BE \u09B7\u09B7\u09CD\u09A0 \u099C\u09AF\u09BC\u09C7\u09B0 \u09B0\u09A3\u0995\u09CC\u09B6\u09B2",
    slug: "premier-league-liverpool-arne-slot-sixth-straight-win",
    excerpt: "\u09AE\u09CB\u09B9\u09BE\u09AE\u09CD\u09AE\u09A6 \u09B8\u09BE\u09B2\u09BE\u09B9 \u0993 \u09A8\u09C1\u09A8\u09C7\u099C\u09C7\u09B0 \u09AF\u09C1\u0997\u09B2\u09AC\u09A8\u09CD\u09A6\u09C0\u09A4\u09C7 \u09AB\u09C1\u09B2\u09B9\u09CD\u09AF\u09BE\u09AE\u0995\u09C7 \u09E9-\u09E7 \u0997\u09CB\u09B2\u09C7 \u0989\u09A1\u09BC\u09BF\u09AF\u09BC\u09C7 \u09A6\u09BF\u09B2 \u0985\u09B2\u09B0\u09C7\u09A1\u09B0\u09BE\u0964",
    content: "\u09B2\u09BF\u09AD\u09BE\u09B0\u09AA\u09C1\u09B2\u09C7\u09B0 \u09A8\u09A4\u09C1\u09A8 \u0995\u09CC\u09B6\u09B2\u09C7 \u09AB\u09C1\u09B2\u09B9\u09CD\u09AF\u09BE\u09AE \u09AE\u09CD\u09AF\u09BE\u099A \u09A8\u09BF\u09AF\u09BC\u09A8\u09CD\u09A4\u09CD\u09B0\u09A3 \u09A8\u09BF\u09AF\u09BC\u09C7\u099B\u09C7 \u09AA\u09C1\u09B0\u09CB\u09AA\u09C1\u09B0\u09BF\u0964",
    sport: "football",
    category: "Premier League",
    tags: ["\u09AA\u09CD\u09B0\u09BF\u09AE\u09BF\u09AF\u09BC\u09BE\u09B0 \u09B2\u09BF\u0997", "\u09B2\u09BF\u09AD\u09BE\u09B0\u09AA\u09C1\u09B2"],
    authorId: "auth-2",
    authorName: "Tanvir Ahmed",
    authorBanglaName: "\u09A4\u09BE\u09A8\u09AD\u09C0\u09B0 \u0986\u09B9\u09AE\u09C7\u09A6",
    image: {
      url: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?auto=format&fit=crop&w=600&q=80",
      alt: "\u0985\u09CD\u09AF\u09BE\u09A8\u09AB\u09BF\u09B2\u09CD\u09A1 \u09AB\u09C1\u099F\u09AC\u09B2 \u09AE\u09CD\u09AF\u09BE\u099A"
    },
    status: "scheduled",
    scheduledAt: "2026-09-23T10:00:00Z",
    publishedAt: "2026-09-22T07:55:00Z",
    views: 0,
    readTimeMinutes: 4
  }
];
let mockCategories = [
  // Cricket
  { id: "cat-1", name: "Bangladesh Cricket", banglaName: "\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6 \u0995\u09CD\u09B0\u09BF\u0995\u09C7\u099F", slug: "bangladesh-cricket", sport: "cricket", description: "\u099F\u09BE\u0987\u0997\u09BE\u09B0\u09A6\u09C7\u09B0 \u099F\u09C7\u09B8\u09CD\u099F, \u0993\u09AF\u09BC\u09BE\u09A8\u09A1\u09C7 \u0993 \u099F\u09BF-\u099F\u09CB\u09AF\u09BC\u09C7\u09A8\u09CD\u099F\u09BF \u0996\u09AC\u09B0\u09BE\u0996\u09AC\u09B0", articleCount: 42, enabled: true },
  { id: "cat-2", name: "International Cricket", banglaName: "\u0986\u09A8\u09CD\u09A4\u09B0\u09CD\u099C\u09BE\u09A4\u09BF\u0995 \u0995\u09CD\u09B0\u09BF\u0995\u09C7\u099F", slug: "international-cricket", sport: "cricket", description: "\u09AC\u09BF\u09B6\u09CD\u09AC \u0995\u09CD\u09B0\u09BF\u0995\u09C7\u099F\u09C7\u09B0 \u09B6\u09C0\u09B0\u09CD\u09B7 \u09A6\u09B2 \u0993 \u09A6\u09CD\u09AC\u09BF\u09AA\u09BE\u0995\u09CD\u09B7\u09BF\u0995 \u09B8\u09BF\u09B0\u09BF\u099C", articleCount: 38, enabled: true },
  { id: "cat-3", name: "BPL", banglaName: "\u09AC\u09BF\u09AA\u09BF\u098F\u09B2", slug: "bpl", sport: "cricket", description: "\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6 \u09AA\u09CD\u09B0\u09BF\u09AE\u09BF\u09AF\u09BC\u09BE\u09B0 \u09B2\u09BF\u0997\u09C7\u09B0 \u09B8\u0995\u09B2 \u0986\u09AA\u09A1\u09C7\u099F", articleCount: 29, enabled: true },
  { id: "cat-4", name: "IPL", banglaName: "\u0986\u0987\u09AA\u09BF\u098F\u09B2", slug: "ipl", sport: "cricket", description: "\u0987\u09A8\u09CD\u09A1\u09BF\u09AF\u09BC\u09BE\u09A8 \u09AA\u09CD\u09B0\u09BF\u09AE\u09BF\u09AF\u09BC\u09BE\u09B0 \u09B2\u09BF\u0997\u09C7\u09B0 \u09AE\u09CD\u09AF\u09BE\u099A \u0993 \u09A8\u09BF\u09B2\u09BE\u09AE", articleCount: 31, enabled: true },
  { id: "cat-5", name: "ICC", banglaName: "\u0986\u0987\u09B8\u09BF\u09B8\u09BF", slug: "icc", sport: "cricket", description: "\u0986\u0987\u09B8\u09BF\u09B8\u09BF \u099F\u09C1\u09B0\u09CD\u09A8\u09BE\u09AE\u09C7\u09A8\u09CD\u099F, \u09B0\u09CD\u09AF\u09BE\u0999\u09CD\u0995\u09BF\u0982 \u0993 \u09A8\u09BF\u09AF\u09BC\u09AE\u09BE\u09AC\u09B2\u09C0", articleCount: 19, enabled: true },
  { id: "cat-6", name: "Test Cricket", banglaName: "\u099F\u09C7\u09B8\u09CD\u099F \u0995\u09CD\u09B0\u09BF\u0995\u09C7\u099F", slug: "test-cricket", sport: "cricket", description: "\u09AC\u09BF\u09B6\u09CD\u09AC \u099F\u09C7\u09B8\u09CD\u099F \u099A\u09CD\u09AF\u09BE\u09AE\u09CD\u09AA\u09BF\u09AF\u09BC\u09A8\u09B6\u09BF\u09AA \u0993 \u09B2\u09BE\u09B2 \u09AC\u09B2\u09C7\u09B0 \u0996\u09C7\u09B2\u09BE", articleCount: 24, enabled: true },
  { id: "cat-7", name: "ODI", banglaName: "\u0993\u09AF\u09BC\u09BE\u09A8\u09A1\u09C7", slug: "odi", sport: "cricket", description: "\u09EB\u09E6 \u0993\u09AD\u09BE\u09B0\u09C7\u09B0 \u0986\u09A8\u09CD\u09A4\u09B0\u09CD\u099C\u09BE\u09A4\u09BF\u0995 \u0995\u09CD\u09B0\u09BF\u0995\u09C7\u099F \u09AA\u09CD\u09B0\u09A4\u09BF\u09AF\u09CB\u0997\u09BF\u09A4\u09BE", articleCount: 22, enabled: true },
  { id: "cat-8", name: "T20", banglaName: "\u099F\u09BF-\u099F\u09CB\u09AF\u09BC\u09C7\u09A8\u09CD\u099F\u09BF", slug: "t20", sport: "cricket", description: "\u099F\u09BF-\u099F\u09CB\u09AF\u09BC\u09C7\u09A8\u09CD\u099F\u09BF \u0995\u09CD\u09B0\u09BF\u0995\u09C7\u099F \u0993 \u09AB\u09CD\u09B0\u09CD\u09AF\u09BE\u099E\u09CD\u099A\u09BE\u0987\u099C\u09BF \u09B2\u09BF\u0997", articleCount: 35, enabled: true },
  { id: "cat-9", name: "Women's Cricket", banglaName: "\u09A8\u09BE\u09B0\u09C0 \u0995\u09CD\u09B0\u09BF\u0995\u09C7\u099F", slug: "womens-cricket", sport: "cricket", description: "\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6 \u09A8\u09BE\u09B0\u09C0 \u0995\u09CD\u09B0\u09BF\u0995\u09C7\u099F \u09A6\u09B2 \u0993 \u09AC\u09C8\u09B6\u09CD\u09AC\u09BF\u0995 \u099F\u09C1\u09B0\u09CD\u09A8\u09BE\u09AE\u09C7\u09A8\u09CD\u099F", articleCount: 14, enabled: true },
  // Football
  { id: "cat-10", name: "Bangladesh Football", banglaName: "\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6 \u09AB\u09C1\u099F\u09AC\u09B2", slug: "bangladesh-football", sport: "football", description: "\u09AC\u09BE\u09AB\u09C1\u09AB\u09C7, \u099C\u09BE\u09A4\u09C0\u09AF\u09BC \u09A6\u09B2 \u0993 \u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6 \u09AA\u09CD\u09B0\u09BF\u09AE\u09BF\u09AF\u09BC\u09BE\u09B0 \u09B2\u09BF\u0997", articleCount: 34, enabled: true },
  { id: "cat-11", name: "International Football", banglaName: "\u0986\u09A8\u09CD\u09A4\u09B0\u09CD\u099C\u09BE\u09A4\u09BF\u0995 \u09AB\u09C1\u099F\u09AC\u09B2", slug: "international-football", sport: "football", description: "\u09AC\u09BF\u09B6\u09CD\u09AC\u0995\u09BE\u09AA, \u0995\u09CB\u09AA\u09BE \u0986\u09AE\u09C7\u09B0\u09BF\u0995\u09BE \u0993 \u0987\u0989\u09B0\u09CB \u099A\u09CD\u09AF\u09BE\u09AE\u09CD\u09AA\u09BF\u09AF\u09BC\u09A8\u09B6\u09BF\u09AA", articleCount: 46, enabled: true },
  { id: "cat-12", name: "Premier League", banglaName: "\u0987\u0982\u09B2\u09BF\u09B6 \u09AA\u09CD\u09B0\u09BF\u09AE\u09BF\u09AF\u09BC\u09BE\u09B0 \u09B2\u09BF\u0997", slug: "premier-league", sport: "football", description: "\u0987\u0982\u09B2\u09CD\u09AF\u09BE\u09A8\u09CD\u09A1\u09C7\u09B0 \u09B6\u09C0\u09B0\u09CD\u09B7 \u09B2\u09BF\u0997 \u09AB\u09C1\u099F\u09AC\u09B2", articleCount: 52, enabled: true },
  { id: "cat-13", name: "Champions League", banglaName: "\u099A\u09CD\u09AF\u09BE\u09AE\u09CD\u09AA\u09BF\u09AF\u09BC\u09A8\u09CD\u09B8 \u09B2\u09BF\u0997", slug: "champions-league", sport: "football", description: "\u0989\u09AF\u09BC\u09C7\u09AB\u09BE \u099A\u09CD\u09AF\u09BE\u09AE\u09CD\u09AA\u09BF\u09AF\u09BC\u09A8\u09CD\u09B8 \u09B2\u09BF\u0997\u09C7\u09B0 \u09AE\u09CD\u09AF\u09BE\u099A \u0993 \u09AC\u09BF\u09B6\u09CD\u09B2\u09C7\u09B7\u09A3", articleCount: 40, enabled: true },
  { id: "cat-14", name: "La Liga", banglaName: "\u09B2\u09BE \u09B2\u09BF\u0997\u09BE", slug: "la-liga", sport: "football", description: "\u09B8\u09CD\u09AA\u09CD\u09AF\u09BE\u09A8\u09BF\u09B6 \u09AB\u09C1\u099F\u09AC\u09B2 \u09B2\u09BF\u0997 \u0993 \u098F\u09B2 \u0995\u09CD\u09B2\u09BE\u09B8\u09BF\u0995\u09CB", articleCount: 28, enabled: true },
  { id: "cat-15", name: "Serie A", banglaName: "\u09B8\u09BF\u09B0\u09BF \u0986", slug: "serie-a", sport: "football", description: "\u0987\u09A4\u09BE\u09B2\u09BF\u09AF\u09BC\u09BE\u09A8 \u09AB\u09C1\u099F\u09AC\u09B2 \u09B2\u09BF\u0997", articleCount: 16, enabled: true },
  { id: "cat-16", name: "Bundesliga", banglaName: "\u09AC\u09C1\u09A8\u09CD\u09A6\u09C7\u09B8\u09B2\u09BF\u0997\u09BE", slug: "bundesliga", sport: "football", description: "\u099C\u09BE\u09B0\u09CD\u09AE\u09BE\u09A8 \u09AB\u09C1\u099F\u09AC\u09B2 \u09B2\u09BF\u0997\u09C7\u09B0 \u09AE\u09CD\u09AF\u09BE\u099A \u09B8\u0982\u09AC\u09BE\u09A6", articleCount: 15, enabled: true },
  { id: "cat-17", name: "Transfer News", banglaName: "\u09A6\u09B2\u09AC\u09A6\u09B2 \u0993 \u099F\u09CD\u09B0\u09BE\u09A8\u09CD\u09B8\u09AB\u09BE\u09B0", slug: "transfer-news", sport: "football", description: "\u0987\u0989\u09B0\u09CB\u09AA\u09BF\u09AF\u09BC\u09BE\u09A8 \u09AB\u09C1\u099F\u09AC\u09B2\u09C7\u09B0 \u0996\u09C7\u09B2\u09CB\u09AF\u09BC\u09BE\u09A1\u09BC \u099F\u09CD\u09B0\u09BE\u09A8\u09CD\u09B8\u09AB\u09BE\u09B0 \u0986\u09AA\u09A1\u09C7\u099F", articleCount: 39, enabled: true },
  // General
  { id: "cat-18", name: "Analysis", banglaName: "\u09AC\u09BF\u09B6\u09CD\u09B2\u09C7\u09B7\u09A3", slug: "analysis", sport: "general", description: "\u0997\u09AD\u09C0\u09B0 \u0995\u09CC\u09B6\u09B2\u0997\u09A4 \u0993 \u099F\u09CD\u09AF\u09BE\u0995\u099F\u09BF\u0995\u09CD\u09AF\u09BE\u09B2 \u09AC\u09BF\u09B6\u09CD\u09B2\u09C7\u09B7\u09A3", articleCount: 27, enabled: true },
  { id: "cat-19", name: "Opinion", banglaName: "\u09AE\u09A4\u09BE\u09AE\u09A4", slug: "opinion", sport: "general", description: "\u09AC\u09BF\u09B6\u09C7\u09B7\u099C\u09CD\u099E \u0995\u09B2\u09BE\u09AE \u0993 \u0985\u09AD\u09BF\u09AE\u09A4", articleCount: 18, enabled: true },
  { id: "cat-20", name: "Features", banglaName: "\u09AB\u09BF\u099A\u09BE\u09B0", slug: "features", sport: "general", description: "\u0996\u09C7\u09B2\u09CB\u09AF\u09BC\u09BE\u09A1\u09BC\u09A6\u09C7\u09B0 \u099C\u09C0\u09AC\u09A8 \u0993 \u09AC\u09BF\u09B6\u09C7\u09B7 \u0997\u09B2\u09CD\u09AA", articleCount: 21, enabled: true },
  { id: "cat-21", name: "Videos", banglaName: "\u09AD\u09BF\u09A1\u09BF\u0993", slug: "videos", sport: "general", description: "\u09AE\u09CD\u09AF\u09BE\u099A \u09B9\u09BE\u0987\u09B2\u09BE\u0987\u099F\u09B8 \u0993 \u09B8\u09BE\u0995\u09CD\u09B7\u09BE\u09CE\u0995\u09BE\u09B0 \u09AD\u09BF\u09A1\u09BF\u0993", articleCount: 30, enabled: true }
];
let mockTags = [
  { id: "tag-1", name: "\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6 \u0995\u09CD\u09B0\u09BF\u0995\u09C7\u099F", slug: "bangladesh-cricket", articleCount: 48 },
  { id: "tag-2", name: "\u09A8\u09BE\u099C\u09AE\u09C1\u09B2 \u09B9\u09CB\u09B8\u09C7\u09A8 \u09B6\u09BE\u09A8\u09CD\u09A4", slug: "najmul-shanto", articleCount: 18 },
  { id: "tag-3", name: "\u09B2\u09BF\u099F\u09A8 \u09A6\u09BE\u09B8", slug: "liton-das", articleCount: 22 },
  { id: "tag-4", name: "\u09A4\u09BE\u09B8\u0995\u09BF\u09A8 \u0986\u09B9\u09AE\u09C7\u09A6", slug: "taskin-ahmed", articleCount: 15 },
  { id: "tag-5", name: "\u09AC\u09BF\u09B8\u09BF\u09AC\u09BF", slug: "bcb", articleCount: 34 },
  { id: "tag-6", name: "\u09B9\u09BE\u09AE\u099C\u09BE \u099A\u09CC\u09A7\u09C1\u09B0\u09C0", slug: "hamza-choudhury", articleCount: 12 },
  { id: "tag-7", name: "\u09B0\u09BF\u09AF\u09BC\u09BE\u09B2 \u09AE\u09BE\u09A6\u09CD\u09B0\u09BF\u09A6", slug: "real-madrid", articleCount: 26 },
  { id: "tag-8", name: "\u0986\u09B0\u09CD\u09B8\u09C7\u09A8\u09BE\u09B2", slug: "arsenal", articleCount: 20 },
  { id: "tag-9", name: "\u09B2\u09BF\u09AD\u09BE\u09B0\u09AA\u09C1\u09B2", slug: "liverpool", articleCount: 19 },
  { id: "tag-10", name: "\u09AC\u09BF\u09AA\u09BF\u098F\u09B2 \u09E8\u09E6\u09E8\u09EC", slug: "bpl-2026", articleCount: 29 },
  { id: "tag-11", name: "\u0986\u0987\u09AA\u09BF\u098F\u09B2 \u09E8\u09E6\u09E8\u09EC", slug: "ipl-2026", articleCount: 31 },
  { id: "tag-12", name: "\u09AE\u09C1\u09B8\u09CD\u09A4\u09BE\u09AB\u09BF\u099C\u09C1\u09B0 \u09B0\u09B9\u09AE\u09BE\u09A8", slug: "mustafizur-rahman", articleCount: 16 }
];
let mockAuthors = [
  {
    id: "auth-1",
    name: "Rashedul Islam",
    banglaName: "\u09B0\u09BE\u09B6\u09C7\u09A6\u09C1\u09B2 \u0987\u09B8\u09B2\u09BE\u09AE",
    slug: "rashedul-islam",
    email: "rashedul@cricfot.com",
    role: "Chief Cricket Correspondent",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    bio: "\u09E7\u09EB \u09AC\u099B\u09B0 \u09A7\u09B0\u09C7 \u0986\u09A8\u09CD\u09A4\u09B0\u09CD\u099C\u09BE\u09A4\u09BF\u0995 \u0995\u09CD\u09B0\u09BF\u0995\u09C7\u099F \u0993 \u09AC\u09BF\u09B8\u09BF\u09AC\u09BF \u0995\u09BE\u09AD\u09BE\u09B0 \u0995\u09B0\u09BE \u09B8\u09BF\u09A8\u09BF\u09AF\u09BC\u09B0 \u0995\u09CD\u09B0\u09C0\u09A1\u09BC\u09BE \u09B8\u09BE\u0982\u09AC\u09BE\u09A6\u09BF\u0995\u0964",
    articlesCount: 64,
    status: "active"
  },
  {
    id: "auth-2",
    name: "Tanvir Ahmed",
    banglaName: "\u09A4\u09BE\u09A8\u09AD\u09C0\u09B0 \u0986\u09B9\u09AE\u09C7\u09A6",
    slug: "tanvir-ahmed",
    email: "tanvir@cricfot.com",
    role: "International Football Analyst",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    bio: "\u0987\u0989\u09B0\u09CB\u09AA\u09BF\u09AF\u09BC\u09BE\u09A8 \u09AB\u09C1\u099F\u09AC\u09B2 \u0993 \u099F\u09CD\u09AF\u09BE\u0995\u099F\u09BF\u0995\u09CD\u09AF\u09BE\u09B2 \u09AC\u09BF\u09B6\u09CD\u09B2\u09C7\u09B7\u09A3\u09C7\u09B0 \u09AC\u09BF\u09B6\u09C7\u09B7\u099C\u09CD\u099E \u0995\u09B2\u09BE\u09AE\u09BF\u09B8\u09CD\u099F\u0964",
    articlesCount: 51,
    status: "active"
  },
  {
    id: "auth-3",
    name: "Mahmudul Hasan",
    banglaName: "\u09AE\u09BE\u09B9\u09AE\u09C1\u09A6\u09C1\u09B2 \u09B9\u09BE\u09B8\u09BE\u09A8",
    slug: "mahmudul-hasan",
    email: "mahmudul@cricfot.com",
    role: "Domestic Sports & BPL Reporter",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    bio: "\u0998\u09B0\u09CB\u09AF\u09BC\u09BE \u09AA\u09CD\u09B0\u09A5\u09AE \u09B6\u09CD\u09B0\u09C7\u09A3\u09BF, \u09A2\u09BE\u0995\u09BE \u09AA\u09CD\u09B0\u09BF\u09AE\u09BF\u09AF\u09BC\u09BE\u09B0 \u09B2\u09BF\u0997 \u0993 \u09AC\u09BF\u09AA\u09BF\u098F\u09B2 \u0995\u09BE\u09AD\u09BE\u09B0\u09C7\u099C\u09C7 \u0985\u09AD\u09BF\u099C\u09CD\u099E\u0964",
    articlesCount: 39,
    status: "active"
  },
  {
    id: "auth-4",
    name: "Sourav Datta",
    banglaName: "\u09B8\u09CC\u09B0\u09AD \u09A6\u09A4\u09CD\u09A4",
    slug: "sourav-datta",
    email: "sourav@cricfot.com",
    role: "Bangladesh Football & Transfer Specialist",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80",
    bio: "\u09AC\u09BE\u09AB\u09C1\u09AB\u09C7, \u099C\u09BE\u09A4\u09C0\u09AF\u09BC \u09AB\u09C1\u099F\u09AC\u09B2 \u09A6\u09B2 \u0993 \u099F\u09CD\u09B0\u09BE\u09A8\u09CD\u09B8\u09AB\u09BE\u09B0 \u09AE\u09BE\u09B0\u09CD\u0995\u09C7\u099F\u09C7\u09B0 \u09A8\u09BF\u09B0\u09CD\u09AD\u09B0\u09AF\u09CB\u0997\u09CD\u09AF \u09B0\u09BF\u09AA\u09CB\u09B0\u09CD\u099F\u09BE\u09B0\u0964",
    articlesCount: 45,
    status: "active"
  }
];
let mockMedia = [
  {
    id: "med-1",
    filename: "shanto-mirpur-nets.jpg",
    url: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1200&q=80",
    type: "image",
    size: "1.4 MB",
    dimensions: "1920x1080",
    alt: "\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6 \u099C\u09BE\u09A4\u09C0\u09AF\u09BC \u09A6\u09B2\u09C7\u09B0 \u09AE\u09BF\u09B0\u09AA\u09C1\u09B0 \u0985\u09A8\u09C1\u09B6\u09C0\u09B2\u09A8",
    caption: "\u09AE\u09BF\u09B0\u09AA\u09C1\u09B0 \u099F\u09C7\u09B8\u09CD\u099F\u09C7\u09B0 \u0986\u0997\u09C7\u09B0 \u09A6\u09BF\u09A8 \u09A8\u09C7\u099F\u09C7 \u09AC\u09CD\u09AF\u09BE\u099F\u09BE\u09B0\u09A6\u09C7\u09B0 \u09AA\u09CD\u09B0\u09B8\u09CD\u09A4\u09C1\u09A4\u09BF\u0964",
    source: "CricFot Staff",
    uploadedAt: "2026-09-22T06:00:00Z",
    usedInCount: 4
  },
  {
    id: "med-2",
    filename: "champions-league-etihad.jpg",
    url: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80",
    type: "image",
    size: "2.1 MB",
    dimensions: "2400x1600",
    alt: "\u099A\u09CD\u09AF\u09BE\u09AE\u09CD\u09AA\u09BF\u09AF\u09BC\u09A8\u09CD\u09B8 \u09B2\u09BF\u0997 \u09B0\u09CB\u09AE\u09BE\u099E\u09CD\u099A\u0995\u09B0 \u09AE\u09CD\u09AF\u09BE\u099A",
    caption: "\u0986\u09B0\u09CD\u09B8\u09C7\u09A8\u09BE\u09B2 \u09AC\u09A8\u09BE\u09AE \u09B0\u09BF\u09AF\u09BC\u09BE\u09B2 \u09AE\u09BE\u09A6\u09CD\u09B0\u09BF\u09A6 \u09B9\u09BE\u0987-\u09AD\u09CB\u09B2\u09CD\u099F\u09C7\u099C \u09AE\u09CD\u09AF\u09BE\u099A\u0964",
    source: "Reuters / CricFot",
    uploadedAt: "2026-09-21T22:30:00Z",
    usedInCount: 3
  },
  {
    id: "med-3",
    filename: "bpl-stadium-lights.jpg",
    url: "https://images.unsplash.com/photo-1531415074868-036b1c57e3b0?auto=format&fit=crop&w=1200&q=80",
    type: "image",
    size: "1.8 MB",
    dimensions: "2000x1333",
    alt: "\u09AC\u09BF\u09AA\u09BF\u098F\u09B2 \u0995\u09CD\u09B0\u09BF\u0995\u09C7\u099F \u09AB\u09CD\u09B2\u09BE\u09A1\u09B2\u09BE\u0987\u099F",
    caption: "\u099A\u099F\u09CD\u099F\u0997\u09CD\u09B0\u09BE\u09AE \u099C\u09B9\u09C1\u09B0 \u0986\u09B9\u09AE\u09C7\u09A6 \u09B8\u09CD\u099F\u09C7\u09A1\u09BF\u09AF\u09BC\u09BE\u09AE\u09C7\u09B0 \u09B8\u09BE\u09A8\u09CD\u09A7\u09CD\u09AF \u09AA\u09CD\u09B0\u09B8\u09CD\u09A4\u09C1\u09A4\u09BF\u0964",
    source: "BCB Official",
    uploadedAt: "2026-09-21T18:00:00Z",
    usedInCount: 2
  },
  {
    id: "med-4",
    filename: "football-training-grass.jpg",
    url: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=80",
    type: "image",
    size: "1.2 MB",
    dimensions: "1920x1280",
    alt: "\u09AB\u09C1\u099F\u09AC\u09B2 \u099F\u09CD\u09B0\u09C7\u09A8\u09BF\u0982 \u0997\u09CD\u09B0\u09BE\u0989\u09A8\u09CD\u09A1 \u0993 \u09AC\u09B2",
    caption: "\u098F\u09B6\u09BF\u09AF\u09BC\u09BE\u09A8 \u0995\u09BE\u09AA \u09AC\u09BE\u099B\u09BE\u0987\u09AF\u09BC\u09C7\u09B0 \u0986\u0997\u09C7 \u099C\u09BE\u09A4\u09C0\u09AF\u09BC \u09AB\u09C1\u099F\u09AC\u09B2 \u09A6\u09B2\u09C7\u09B0 \u09AC\u09C1\u099F \u0995\u09CD\u09AF\u09BE\u09AE\u09CD\u09AA\u0964",
    source: "BFF Media",
    uploadedAt: "2026-09-20T14:15:00Z",
    usedInCount: 5
  }
];
let mockVideos = [
  {
    id: "vid-1",
    title: "Highlights: Liton Das 100 vs SL at Mirpur",
    banglaTitle: "\u09B9\u09BE\u0987\u09B2\u09BE\u0987\u099F\u09B8: \u09AE\u09BF\u09B0\u09AA\u09C1\u09B0 \u099F\u09C7\u09B8\u09CD\u099F\u09C7 \u09B2\u09BF\u099F\u09A8 \u09A6\u09BE\u09B8\u09C7\u09B0 \u0985\u09A8\u09AC\u09A6\u09CD\u09AF \u09B8\u09C7\u099E\u09CD\u099A\u09C1\u09B0\u09BF \u0987\u09A8\u09BF\u0982\u09B8",
    slug: "highlights-liton-das-century-mirpur-test",
    thumbnail: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=600&q=80",
    duration: "\u09EE:\u09EA\u09EB",
    sport: "cricket",
    category: "Bangladesh Cricket",
    views: "\u09EA\u09EB,\u09E8\u09E6\u09E6",
    status: "published",
    publishedAt: "2026-09-22T08:00:00Z"
  },
  {
    id: "vid-2",
    title: "Post Match Presser: Carlo Ancelotti on Arsenal draw",
    banglaTitle: "\u09B8\u0982\u09AC\u09BE\u09A6 \u09B8\u09AE\u09CD\u09AE\u09C7\u09B2\u09A8: \u0986\u09B0\u09CD\u09B8\u09C7\u09A8\u09BE\u09B2 \u09AE\u09CD\u09AF\u09BE\u099A \u09B6\u09C7\u09B7\u09C7 \u0986\u09A8\u099A\u09C7\u09B2\u09A4\u09CD\u09A4\u09BF\u09B0 \u09AA\u09CD\u09B0\u09A4\u09BF\u0995\u09CD\u09B0\u09BF\u09AF\u09BC\u09BE",
    slug: "post-match-carlo-ancelotti-arsenal-reaction",
    thumbnail: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80",
    duration: "\u09EB:\u09E8\u09E6",
    sport: "football",
    category: "Champions League",
    views: "\u09E9\u09E8,\u09E7\u09E6\u09E6",
    status: "published",
    publishedAt: "2026-09-22T07:15:00Z"
  },
  {
    id: "vid-3",
    title: "Exclusive: Hamza Choudhury first day with Bangladesh Squad",
    banglaTitle: "\u098F\u0995\u09CD\u09B8\u0995\u09CD\u09B2\u09C1\u09B8\u09BF\u09AD \u09B8\u09BE\u0995\u09CD\u09B7\u09BE\u09CE\u0995\u09BE\u09B0: \u099C\u09BE\u09A4\u09C0\u09AF\u09BC \u09A6\u09B2\u09C7\u09B0 \u0985\u09A8\u09C1\u09B6\u09C0\u09B2\u09A8\u09C7 \u09AA\u09CD\u09B0\u09A5\u09AE \u09A6\u09BF\u09A8 \u0995\u09C7\u09AE\u09A8 \u0995\u09BE\u099F\u09B2 \u09B9\u09BE\u09AE\u099C\u09BE\u09B0?",
    slug: "exclusive-hamza-choudhury-first-day-bangladesh",
    thumbnail: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=600&q=80",
    duration: "\u09E7\u09E7:\u09E7\u09E6",
    sport: "football",
    category: "Bangladesh Football",
    views: "\u09ED\u09EE,\u09EC\u09E6\u09E6",
    status: "published",
    publishedAt: "2026-09-22T06:30:00Z"
  }
];
let mockBreakingItems = [
  {
    id: "brk-1",
    headline: "\u09AE\u09BF\u09B0\u09AA\u09C1\u09B0 \u099F\u09C7\u09B8\u09CD\u099F: \u09B2\u09BF\u099F\u09A8 \u09A6\u09BE\u09B8\u09C7\u09B0 \u09B8\u09C7\u099E\u09CD\u099A\u09C1\u09B0\u09BF, \u09B6\u09CD\u09B0\u09C0\u09B2\u0999\u09CD\u0995\u09BE\u09B0 \u09AC\u09BF\u09AA\u0995\u09CD\u09B7\u09C7 \u09B6\u0995\u09CD\u09A4 \u0985\u09AC\u09B8\u09CD\u09A5\u09BE\u09A8\u09C7 \u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6",
    link: "/news/mirpur-test-liton-shanto-partnership-bangladesh-leads",
    active: true,
    priority: "urgent",
    startTime: "2026-09-22T07:00:00Z",
    sport: "cricket"
  },
  {
    id: "brk-2",
    headline: "\u099A\u09CD\u09AF\u09BE\u09AE\u09CD\u09AA\u09BF\u09AF\u09BC\u09A8\u09CD\u09B8 \u09B2\u09BF\u0997\u09C7 \u09A8\u09BE\u099F\u0995\u09C0\u09AF\u09BC \u09A1\u09CD\u09B0: \u09B6\u09C7\u09B7 \u09AE\u09C1\u09B9\u09C2\u09B0\u09CD\u09A4\u09C7 \u09AD\u09BF\u09A8\u09BF\u09B8\u09BF\u09AF\u09BC\u09C1\u09B8\u09C7\u09B0 \u0997\u09CB\u09B2\u09C7 \u0986\u09B0\u09CD\u09B8\u09C7\u09A8\u09BE\u09B2\u0995\u09C7 \u09B0\u09C1\u0996\u09C7 \u09A6\u09BF\u09B2 \u09B0\u09BF\u09AF\u09BC\u09BE\u09B2 \u09AE\u09BE\u09A6\u09CD\u09B0\u09BF\u09A6",
    link: "/news/champions-league-real-madrid-arsenal-thriller-draw",
    active: true,
    priority: "high",
    startTime: "2026-09-22T06:30:00Z",
    sport: "football"
  },
  {
    id: "brk-3",
    headline: "\u09AC\u09BF\u09AA\u09BF\u098F\u09B2 \u09E8\u09E6\u09E8\u09EC \u09A1\u09CD\u09B0\u09BE\u09AB\u099F \u09B8\u09AE\u09CD\u09AA\u09A8\u09CD\u09A8: \u09A6\u09C7\u09B6\u09C0\u09AF\u09BC \u09AA\u09C7\u09B8\u09BE\u09B0 \u0993 \u09AA\u09BE\u0993\u09AF\u09BC\u09BE\u09B0 \u09B9\u09BF\u099F\u09BE\u09B0\u09A6\u09C7\u09B0 \u09AC\u09C7\u09B6\u09BF \u0997\u09C1\u09B0\u09C1\u09A4\u09CD\u09AC \u09A6\u09BF\u09B2 \u09A6\u09B2\u0997\u09C1\u09B2\u09CB",
    link: "/news/bpl-2026-draft-franchises-prioritize-local-fast-bowlers",
    active: true,
    priority: "normal",
    startTime: "2026-09-22T05:00:00Z",
    sport: "cricket"
  }
];
let mockMatches = [
  {
    id: "m-1",
    sport: "cricket",
    competition: "ICC World Test Championship",
    competitionBangla: "\u0986\u0987\u09B8\u09BF\u09B8\u09BF \u09AC\u09BF\u09B6\u09CD\u09AC \u099F\u09C7\u09B8\u09CD\u099F \u099A\u09CD\u09AF\u09BE\u09AE\u09CD\u09AA\u09BF\u09AF\u09BC\u09A8\u09B6\u09BF\u09AA",
    season: "2025-2027",
    homeTeam: { id: "t-ban", name: "Bangladesh", banglaName: "\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6", score: "\u09E9\u09E8\u09EA & \u09E7\u09EE\u09EB/\u09E9", overs: "\u09EB\u09EC.\u09EA \u0993\u09AD\u09BE\u09B0" },
    awayTeam: { id: "t-sl", name: "Sri Lanka", banglaName: "\u09B6\u09CD\u09B0\u09C0\u09B2\u0999\u09CD\u0995\u09BE", score: "\u09E8\u09EE\u09E6 & \u09E8\u09E8\u09EB", overs: "\u09ED\u09EE.\u09E8 \u0993\u09AD\u09BE\u09B0" },
    venue: "Sher-e-Bangla National Cricket Stadium, Mirpur",
    date: "2026-09-22",
    time: "09:30",
    status: "live",
    statusText: "\u09B8\u09B0\u09BE\u09B8\u09B0\u09BF \u2022 \u09EA\u09B0\u09CD\u09A5 \u09A6\u09BF\u09A8",
    result: "\u099C\u09AF\u09BC\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6\u09C7\u09B0 \u09AA\u09CD\u09B0\u09AF\u09BC\u09CB\u099C\u09A8 \u0986\u09B0\u0993 \u09EF\u09ED \u09B0\u09BE\u09A8",
    externalApiId: "cricket_live_98124",
    isDemo: true
  },
  {
    id: "m-2",
    sport: "football",
    competition: "UEFA Champions League",
    competitionBangla: "\u0989\u09AF\u09BC\u09C7\u09AB\u09BE \u099A\u09CD\u09AF\u09BE\u09AE\u09CD\u09AA\u09BF\u09AF\u09BC\u09A8\u09CD\u09B8 \u09B2\u09BF\u0997",
    season: "2025-2026",
    homeTeam: { id: "t-liv", name: "Liverpool", banglaName: "\u09B2\u09BF\u09AD\u09BE\u09B0\u09AA\u09C1\u09B2", score: "\u09E8" },
    awayTeam: { id: "t-bay", name: "Bayern Munich", banglaName: "\u09AC\u09BE\u09AF\u09BC\u09BE\u09B0\u09CD\u09A8 \u09AE\u09BF\u0989\u09A8\u09BF\u0996", score: "\u09E7" },
    venue: "Anfield, Liverpool",
    date: "2026-09-22",
    time: "20:00",
    status: "live",
    statusText: "\u09B8\u09B0\u09BE\u09B8\u09B0\u09BF \u2022 \u09ED\u09EB \u09AE\u09BF\u09A8\u09BF\u099F",
    result: "\u09A6\u09CD\u09AC\u09BF\u09A4\u09C0\u09AF\u09BC\u09BE\u09B0\u09CD\u09A7\u09C7 \u09B2\u09BF\u09AD\u09BE\u09B0\u09AA\u09C1\u09B2\u09C7\u09B0 \u09AA\u09CD\u09B0\u09BE\u09A7\u09BE\u09A8\u09CD\u09AF",
    externalApiId: "football_live_38219",
    isDemo: true
  },
  {
    id: "m-3",
    sport: "cricket",
    competition: "BPL T20 2026",
    competitionBangla: "\u09AC\u09BF\u09AA\u09BF\u098F\u09B2 \u099F\u09BF-\u099F\u09CB\u09AF\u09BC\u09C7\u09A8\u09CD\u099F\u09BF \u09E8\u09E6\u09E8\u09EC",
    season: "2026",
    homeTeam: { id: "t-cv", name: "Comilla Victorians", banglaName: "\u0995\u09C1\u09AE\u09BF\u09B2\u09CD\u09B2\u09BE \u09AD\u09BF\u0995\u09CD\u099F\u09CB\u09B0\u09BF\u09AF\u09BC\u09BE\u09A8\u09CD\u09B8" },
    awayTeam: { id: "t-fb", name: "Fortune Barishal", banglaName: "\u09AB\u09B0\u099A\u09C1\u09A8 \u09AC\u09B0\u09BF\u09B6\u09BE\u09B2" },
    venue: "Zahur Ahmed Chowdhury Stadium, Chattogram",
    date: "2026-09-22",
    time: "19:00",
    status: "upcoming",
    statusText: "\u0986\u099C \u09B8\u09A8\u09CD\u09A7\u09CD\u09AF\u09BE \u09ED:\u09E6\u09E6",
    externalApiId: "bpl_up_5511",
    isDemo: true
  },
  {
    id: "m-4",
    sport: "football",
    competition: "AFC Asian Cup Qualifier",
    competitionBangla: "\u098F\u09B6\u09BF\u09AF\u09BC\u09BE\u09A8 \u0995\u09BE\u09AA \u09AC\u09BE\u099B\u09BE\u0987\u09AA\u09B0\u09CD\u09AC",
    season: "2026",
    homeTeam: { id: "t-ban-fb", name: "Bangladesh", banglaName: "\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6", score: "\u09E8" },
    awayTeam: { id: "t-nep", name: "Nepal", banglaName: "\u09A8\u09C7\u09AA\u09BE\u09B2", score: "\u09E6" },
    venue: "Bangabandhu National Stadium, Dhaka",
    date: "2026-09-21",
    time: "18:00",
    status: "finished",
    statusText: "\u09AA\u09C2\u09B0\u09CD\u09A3 \u09B8\u09AE\u09AF\u09BC",
    result: "\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6 \u09E8-\u09E6 \u0997\u09CB\u09B2\u09C7 \u099C\u09AF\u09BC\u09C0",
    externalApiId: "afc_fin_2299",
    isDemo: true
  }
];
let mockTeams = [
  { id: "t-1", name: "Bangladesh National Cricket Team", banglaName: "\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6 \u099C\u09BE\u09A4\u09C0\u09AF\u09BC \u0995\u09CD\u09B0\u09BF\u0995\u09C7\u099F \u09A6\u09B2", shortName: "BAN", slug: "bangladesh-cricket-team", sport: "cricket", country: "Bangladesh", logo: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=100&q=80", status: "active" },
  { id: "t-2", name: "Sri Lanka National Cricket Team", banglaName: "\u09B6\u09CD\u09B0\u09C0\u09B2\u0999\u09CD\u0995\u09BE \u099C\u09BE\u09A4\u09C0\u09AF\u09BC \u0995\u09CD\u09B0\u09BF\u0995\u09C7\u099F \u09A6\u09B2", shortName: "SL", slug: "sri-lanka-cricket-team", sport: "cricket", country: "Sri Lanka", logo: "https://images.unsplash.com/photo-1531415074868-036b1c57e3b0?auto=format&fit=crop&w=100&q=80", status: "active" },
  { id: "t-3", name: "Comilla Victorians", banglaName: "\u0995\u09C1\u09AE\u09BF\u09B2\u09CD\u09B2\u09BE \u09AD\u09BF\u0995\u09CD\u099F\u09CB\u09B0\u09BF\u09AF\u09BC\u09BE\u09A8\u09CD\u09B8", shortName: "CV", slug: "comilla-victorians", sport: "cricket", country: "Bangladesh", logo: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=100&q=80", status: "active" },
  { id: "t-4", name: "Fortune Barishal", banglaName: "\u09AB\u09B0\u099A\u09C1\u09A8 \u09AC\u09B0\u09BF\u09B6\u09BE\u09B2", shortName: "FB", slug: "fortune-barishal", sport: "cricket", country: "Bangladesh", logo: "https://images.unsplash.com/photo-1531415074868-036b1c57e3b0?auto=format&fit=crop&w=100&q=80", status: "active" },
  { id: "t-5", name: "Bangladesh Football Team", banglaName: "\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6 \u099C\u09BE\u09A4\u09C0\u09AF\u09BC \u09AB\u09C1\u099F\u09AC\u09B2 \u09A6\u09B2", shortName: "BAN", slug: "bangladesh-football-team", sport: "football", country: "Bangladesh", logo: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=100&q=80", status: "active" },
  { id: "t-6", name: "Real Madrid CF", banglaName: "\u09B0\u09BF\u09AF\u09BC\u09BE\u09B2 \u09AE\u09BE\u09A6\u09CD\u09B0\u09BF\u09A6", shortName: "RMA", slug: "real-madrid", sport: "football", country: "Spain", logo: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=100&q=80", status: "active" },
  { id: "t-7", name: "Arsenal FC", banglaName: "\u0986\u09B0\u09CD\u09B8\u09C7\u09A8\u09BE\u09B2", shortName: "ARS", slug: "arsenal", sport: "football", country: "England", logo: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=100&q=80", status: "active" },
  { id: "t-8", name: "Liverpool FC", banglaName: "\u09B2\u09BF\u09AD\u09BE\u09B0\u09AA\u09C1\u09B2", shortName: "LIV", slug: "liverpool", sport: "football", country: "England", logo: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?auto=format&fit=crop&w=100&q=80", status: "active" }
];
let mockPlayers = [
  { id: "p-1", name: "Najmul Hossain Shanto", banglaName: "\u09A8\u09BE\u099C\u09AE\u09C1\u09B2 \u09B9\u09CB\u09B8\u09C7\u09A8 \u09B6\u09BE\u09A8\u09CD\u09A4", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80", country: "Bangladesh", sport: "cricket", team: "Bangladesh National Cricket Team", role: "Captain / Top-order Batter", status: "active" },
  { id: "p-2", name: "Liton Kumar Das", banglaName: "\u09B2\u09BF\u099F\u09A8 \u0995\u09C1\u09AE\u09BE\u09B0 \u09A6\u09BE\u09B8", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80", country: "Bangladesh", sport: "cricket", team: "Bangladesh National Cricket Team", role: "Wicketkeeper Batter", status: "active" },
  { id: "p-3", name: "Taskin Ahmed", banglaName: "\u09A4\u09BE\u09B8\u0995\u09BF\u09A8 \u0986\u09B9\u09AE\u09C7\u09A6", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80", country: "Bangladesh", sport: "cricket", team: "Bangladesh National Cricket Team", role: "Fast Bowler", status: "active" },
  { id: "p-4", name: "Hamza Choudhury", banglaName: "\u09B9\u09BE\u09AE\u099C\u09BE \u099A\u09CC\u09A7\u09C1\u09B0\u09C0", photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80", country: "Bangladesh", sport: "football", team: "Bangladesh National Football Team", role: "Midfielder", status: "active" },
  { id: "p-5", name: "Kylian Mbappe", banglaName: "\u0995\u09BF\u09B2\u09BF\u09AF\u09BC\u09BE\u09A8 \u098F\u09AE\u09AC\u09BE\u09AA\u09CD\u09AA\u09C7", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80", country: "France", sport: "football", team: "Real Madrid CF", role: "Forward", status: "active" },
  { id: "p-6", name: "Erling Haaland", banglaName: "\u0986\u09B0\u09CD\u09B2\u09BF\u0982 \u09B9\u09BE\u09B2\u09BE\u09A8\u09CD\u09A1", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80", country: "Norway", sport: "football", team: "Manchester City", role: "Striker", status: "active" }
];
let mockCompetitions = [
  { id: "comp-1", name: "ICC World Test Championship", banglaName: "\u0986\u0987\u09B8\u09BF\u09B8\u09BF \u09AC\u09BF\u09B6\u09CD\u09AC \u099F\u09C7\u09B8\u09CD\u099F \u099A\u09CD\u09AF\u09BE\u09AE\u09CD\u09AA\u09BF\u09AF\u09BC\u09A8\u09B6\u09BF\u09AA", sport: "cricket", season: "2025-2027", status: "active" },
  { id: "comp-2", name: "Bangladesh Premier League", banglaName: "\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6 \u09AA\u09CD\u09B0\u09BF\u09AE\u09BF\u09AF\u09BC\u09BE\u09B0 \u09B2\u09BF\u0997 (\u09AC\u09BF\u09AA\u09BF\u098F\u09B2)", sport: "cricket", season: "2026", country: "Bangladesh", status: "active" },
  { id: "comp-3", name: "Indian Premier League", banglaName: "\u0987\u09A8\u09CD\u09A1\u09BF\u09AF\u09BC\u09BE\u09A8 \u09AA\u09CD\u09B0\u09BF\u09AE\u09BF\u09AF\u09BC\u09BE\u09B0 \u09B2\u09BF\u0997 (\u0986\u0987\u09AA\u09BF\u098F\u09B2)", sport: "cricket", season: "2026", country: "India", status: "active" },
  { id: "comp-4", name: "Premier League", banglaName: "\u0987\u0982\u09B2\u09BF\u09B6 \u09AA\u09CD\u09B0\u09BF\u09AE\u09BF\u09AF\u09BC\u09BE\u09B0 \u09B2\u09BF\u0997", sport: "football", season: "2025-2026", country: "England", status: "active" },
  { id: "comp-5", name: "UEFA Champions League", banglaName: "\u0989\u09AF\u09BC\u09C7\u09AB\u09BE \u099A\u09CD\u09AF\u09BE\u09AE\u09CD\u09AA\u09BF\u09AF\u09BC\u09A8\u09CD\u09B8 \u09B2\u09BF\u0997", sport: "football", season: "2025-2026", status: "active" },
  { id: "comp-6", name: "AFC Asian Cup Qualifiers", banglaName: "\u098F\u098F\u09AB\u09B8\u09BF \u098F\u09B6\u09BF\u09AF\u09BC\u09BE\u09A8 \u0995\u09BE\u09AA \u09AC\u09BE\u099B\u09BE\u0987\u09AA\u09B0\u09CD\u09AC", sport: "football", season: "2026", status: "active" }
];
let mockHomepageSections = [
  { id: "sec-1", key: "breaking_news", name: "Breaking News Ticker", banglaName: "\u09AC\u09CD\u09B0\u09C7\u0995\u09BF\u0982 \u09A8\u09BF\u0989\u099C \u09AC\u09BE\u09B0", enabled: true, order: 1 },
  { id: "sec-2", key: "hero_featured", name: "Hero / Featured News", banglaName: "\u09B9\u09BF\u09B0\u09CB \u0993 \u09AB\u09BF\u099A\u09BE\u09B0\u09CD\u09A1 \u09A8\u09BF\u0989\u099C", enabled: true, order: 2, customArticleIds: ["art-1", "art-2", "art-3", "art-4"] },
  { id: "sec-3", key: "latest_news", name: "Latest News Stream", banglaName: "\u09B8\u09B0\u09CD\u09AC\u09B6\u09C7\u09B7 \u09B8\u0982\u09AC\u09BE\u09A6", enabled: true, order: 3, articleCount: 8 },
  { id: "sec-4", key: "live_scores", name: "Live Scores Centre", banglaName: "\u09B2\u09BE\u0987\u09AD \u09B8\u09CD\u0995\u09CB\u09B0 \u09B9\u09BE\u09AC", enabled: true, order: 4 },
  { id: "sec-5", key: "cricket_section", name: "Cricket News Hub", banglaName: "\u0995\u09CD\u09B0\u09BF\u0995\u09C7\u099F \u09B8\u0982\u09AC\u09BE\u09A6 \u09AC\u09BF\u09AD\u09BE\u0997", enabled: true, order: 5, articleCount: 4 },
  { id: "sec-6", key: "football_section", name: "Football News Hub", banglaName: "\u09AB\u09C1\u099F\u09AC\u09B2 \u09B8\u0982\u09AC\u09BE\u09A6 \u09AC\u09BF\u09AD\u09BE\u0997", enabled: true, order: 6, articleCount: 4 },
  { id: "sec-7", key: "trending_news", name: "Trending News (Ranked)", banglaName: "\u099F\u09CD\u09B0\u09C7\u09A8\u09CD\u09A1\u09BF\u0982 \u09B8\u0982\u09AC\u09BE\u09A6 (\u09B6\u09C0\u09B0\u09CD\u09B7 \u09EB)", enabled: true, order: 7 },
  { id: "sec-8", key: "analysis_section", name: "Tactical Analysis & Columns", banglaName: "\u09AC\u09BF\u09B6\u09CD\u09B2\u09C7\u09B7\u09A3 \u0993 \u0995\u09B2\u09BE\u09AE", enabled: true, order: 8, articleCount: 3 },
  { id: "sec-9", key: "videos_section", name: "Video Highlights", banglaName: "\u09AD\u09BF\u09A1\u09BF\u0993 \u09B9\u09BE\u0987\u09B2\u09BE\u0987\u099F\u09B8", enabled: true, order: 9, articleCount: 4 },
  { id: "sec-10", key: "newsletter_follow", name: "Audience & Newsletter", banglaName: "\u09A8\u09BF\u0989\u099C\u09B2\u09C7\u099F\u09BE\u09B0 \u0993 \u09AB\u09B2\u09CB", enabled: true, order: 10 }
];
let mockNavigationItems = [
  { id: "nav-1", label: "Home", banglaLabel: "\u09AA\u09CD\u09B0\u099A\u09CD\u099B\u09A6", url: "/", order: 1, active: true },
  { id: "nav-2", label: "Cricket", banglaLabel: "\u0995\u09CD\u09B0\u09BF\u0995\u09C7\u099F", url: "/cricket", order: 2, active: true },
  { id: "nav-3", label: "Football", banglaLabel: "\u09AB\u09C1\u099F\u09AC\u09B2", url: "/football", order: 3, active: true },
  { id: "nav-4", label: "Live Score", banglaLabel: "\u09B2\u09BE\u0987\u09AD \u09B8\u09CD\u0995\u09CB\u09B0", url: "/live", order: 4, active: true },
  { id: "nav-5", label: "Matches", banglaLabel: "\u09AE\u09CD\u09AF\u09BE\u099A \u09B8\u09C2\u099A\u09BF", url: "/matches", order: 5, active: true },
  { id: "nav-6", label: "Results", banglaLabel: "\u09AB\u09B2\u09BE\u09AB\u09B2", url: "/results", order: 6, active: true },
  { id: "nav-7", label: "Analysis", banglaLabel: "\u09AC\u09BF\u09B6\u09CD\u09B2\u09C7\u09B7\u09A3", url: "/analysis", order: 7, active: true },
  { id: "nav-8", label: "Videos", banglaLabel: "\u09AD\u09BF\u09A1\u09BF\u0993", url: "/videos", order: 8, active: true }
];
let mockAds = [
  { id: "ad-1", name: "Header Leaderboard Banner", slot: "header", type: "banner", active: true, image: "https://images.unsplash.com/photo-1531415074868-036b1c57e3b0?auto=format&fit=crop&w=728&q=80", link: "https://cricfot.com", startDate: "2026-09-01", impressions: 45200, clicks: 1240 },
  { id: "ad-2", name: "Homepage Mid-section Ad", slot: "homepage", type: "code", active: true, htmlCode: "<!-- CricFot Responsive Ad Unit -->", startDate: "2026-09-10", impressions: 28900, clicks: 810 },
  { id: "ad-3", name: "Article Right Rail Sidebar", slot: "sidebar", type: "banner", active: true, image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=300&q=80", link: "https://cricfot.com", startDate: "2026-09-15", impressions: 18400, clicks: 490 }
];
let mockSeoConfig = {
  siteTitle: "CricFot | Cricket & Football News, Live Scores & Analysis",
  metaDescription: "\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6\u09C7\u09B0 \u0995\u09CD\u09B0\u09BF\u0995\u09C7\u099F \u0993 \u09AB\u09C1\u099F\u09AC\u09B2\u09C7\u09B0 \u09B8\u09B0\u09CD\u09AC\u09B6\u09C7\u09B7 \u0996\u09AC\u09B0, \u09AC\u09CD\u09B0\u09C7\u0995\u09BF\u0982 \u09A8\u09BF\u0989\u099C, \u09AE\u09CD\u09AF\u09BE\u099A \u09B8\u09C2\u099A\u09BF, \u099F\u09CD\u09AF\u09BE\u0995\u099F\u09BF\u0995\u09CD\u09AF\u09BE\u09B2 \u09AC\u09BF\u09B6\u09CD\u09B2\u09C7\u09B7\u09A3 \u0993 \u09B2\u09BE\u0987\u09AD \u09B8\u09CD\u0995\u09CB\u09B0 \u09A6\u09C7\u0996\u09C1\u09A8 CricFot-\u098F\u0964",
  defaultOgImage: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1200&q=80",
  twitterCard: "summary_large_image",
  canonicalBaseUrl: "https://cricfot.com",
  robotsTxt: "User-agent: *\nAllow: /\nDisallow: /admin/\nSitemap: https://cricfot.com/sitemap.xml",
  sitemapEnabled: true,
  noIndexSite: false,
  redirects: [
    { id: "red-1", from: "/bpl-news", to: "/cricket?category=BPL", type: "301", active: true },
    { id: "red-2", from: "/epl-today", to: "/football?category=Premier+League", type: "301", active: true }
  ]
};
let mockStaticPages = [
  { id: "p-about", title: "About Us", banglaTitle: "\u0986\u09AE\u09BE\u09A6\u09C7\u09B0 \u09B8\u09AE\u09CD\u09AA\u09B0\u09CD\u0995\u09C7", slug: "about", content: "\u0995\u09CD\u09B0\u09BF\u0995\u09AB\u09C1\u099F \u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6 \u0993 \u09AC\u09C8\u09B6\u09CD\u09AC\u09BF\u0995 \u0995\u09CD\u09B0\u09C0\u09A1\u09BC\u09BE\u0999\u09CD\u0997\u09A8\u09C7\u09B0 \u09A8\u09BF\u09B0\u09CD\u09AD\u09B0\u09AF\u09CB\u0997\u09CD\u09AF \u0993 \u09A4\u09A5\u09CD\u09AF\u09AC\u09B9\u09C1\u09B2 \u09A1\u09BF\u099C\u09BF\u099F\u09BE\u09B2 \u09B8\u09CD\u09AA\u09CB\u09B0\u09CD\u099F\u09B8 \u09B8\u0982\u09AC\u09BE\u09A6 \u09AA\u09CD\u09B2\u09CD\u09AF\u09BE\u099F\u09AB\u09B0\u09CD\u09AE\u0964", status: "published", updatedAt: "2026-09-22T05:00:00Z" },
  { id: "p-contact", title: "Contact Us", banglaTitle: "\u09AF\u09CB\u0997\u09BE\u09AF\u09CB\u0997", slug: "contact", content: "\u0986\u09AE\u09BE\u09A6\u09C7\u09B0 \u09A8\u09BF\u0989\u099C\u09B0\u09C1\u09AE \u0993 \u09AC\u09BF\u099C\u09CD\u099E\u09BE\u09AA\u09A8\u09C7\u09B0 \u09B8\u09BE\u09A5\u09C7 \u09AF\u09CB\u0997\u09BE\u09AF\u09CB\u0997 \u0995\u09B0\u09A4\u09C7 \u0987\u09AE\u09C7\u0987\u09B2 \u0995\u09B0\u09C1\u09A8: desk@cricfot.com", status: "published", updatedAt: "2026-09-22T05:00:00Z" },
  { id: "p-editorial", title: "Editorial Policy", banglaTitle: "\u09B8\u09AE\u09CD\u09AA\u09BE\u09A6\u0995\u09C0\u09AF\u09BC \u09A8\u09C0\u09A4\u09BF\u09AE\u09BE\u09B2\u09BE", slug: "editorial-policy", content: "\u09AC\u09B8\u09CD\u09A4\u09C1\u09A8\u09BF\u09B7\u09CD\u09A0\u09A4\u09BE, \u09A8\u09BF\u09B0\u09CD\u09AD\u09C1\u09B2\u09A4\u09BE \u0993 \u09AF\u09BE\u099A\u09BE\u0987\u0995\u09C3\u09A4 \u09A4\u09A5\u09CD\u09AF\u09C7\u09B0 \u09AD\u09BF\u09A4\u09CD\u09A4\u09BF\u09A4\u09C7 \u09B8\u0982\u09AC\u09BE\u09A6 \u09AA\u09CD\u09B0\u0995\u09BE\u09B6\u09C7 \u0995\u09CD\u09B0\u09BF\u0995\u09AB\u09C1\u099F \u0985\u0999\u09CD\u0997\u09C0\u0995\u09BE\u09B0\u09AC\u09A6\u09CD\u09A7\u0964", status: "published", updatedAt: "2026-09-22T05:00:00Z" },
  { id: "p-correction", title: "Correction Policy", banglaTitle: "\u09B8\u0982\u09B6\u09CB\u09A7\u09A8\u09C0 \u09A8\u09C0\u09A4\u09BF\u09AE\u09BE\u09B2\u09BE", slug: "correction-policy", content: "\u09B8\u0982\u09AC\u09BE\u09A6\u09C7 \u09AF\u09C7\u0995\u09CB\u09A8\u09CB \u0985\u09A8\u09BF\u099A\u09CD\u099B\u09BE\u0995\u09C3\u09A4 \u09AD\u09C1\u09B2\u09A4\u09CD\u09B0\u09C1\u099F\u09BF \u09A6\u09CD\u09B0\u09C1\u09A4 \u0993 \u09B8\u09CD\u09AC\u099A\u09CD\u099B\u09A4\u09BE\u09B0 \u09B8\u09BE\u09A5\u09C7 \u09B8\u0982\u09B6\u09CB\u09A7\u09A8 \u0995\u09B0\u09BE \u09B9\u09AF\u09BC\u0964", status: "published", updatedAt: "2026-09-22T05:00:00Z" },
  { id: "p-privacy", title: "Privacy Policy", banglaTitle: "\u0997\u09CB\u09AA\u09A8\u09C0\u09AF\u09BC\u09A4\u09BE \u09A8\u09C0\u09A4\u09BF", slug: "privacy-policy", content: "\u09AA\u09BE\u09A0\u0995 \u0993 \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0\u0995\u09BE\u09B0\u09C0\u09A6\u09C7\u09B0 \u09AC\u09CD\u09AF\u0995\u09CD\u09A4\u09BF\u0997\u09A4 \u09A4\u09A5\u09CD\u09AF\u09C7\u09B0 \u09B8\u09C1\u09B0\u0995\u09CD\u09B7\u09BE\u09AF\u09BC \u0986\u09AE\u09B0\u09BE \u09B8\u09B0\u09CD\u09AC\u09CB\u099A\u09CD\u099A \u09A8\u09BF\u09B0\u09BE\u09AA\u09A4\u09CD\u09A4\u09BE \u09AE\u09C7\u09A8\u09C7 \u099A\u09B2\u09BF\u0964", status: "published", updatedAt: "2026-09-22T05:00:00Z" },
  { id: "p-terms", title: "Terms of Use", banglaTitle: "\u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0\u09C7\u09B0 \u09B6\u09B0\u09CD\u09A4\u09BE\u09AC\u09B2\u09C0", slug: "terms-of-use", content: "\u0995\u09CD\u09B0\u09BF\u0995\u09AB\u09C1\u099F \u0993\u09AF\u09BC\u09C7\u09AC\u09B8\u09BE\u0987\u099F \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0\u09C7\u09B0 \u09A8\u09BF\u09AF\u09BC\u09AE \u0993 \u0986\u0987\u09A8\u09BF \u09A8\u09BF\u09B0\u09CD\u09A6\u09C7\u09B6\u09A8\u09BE\u09B8\u09AE\u09C2\u09B9\u0964", status: "published", updatedAt: "2026-09-22T05:00:00Z" }
];
let mockNotifications = [
  { id: "notif-1", title: "\u09AE\u09BF\u09B0\u09AA\u09C1\u09B0 \u099F\u09C7\u09B8\u09CD\u099F\u09C7 \u09B8\u09C7\u099E\u09CD\u099A\u09C1\u09B0\u09BF", message: "\u09B6\u09CD\u09B0\u09C0\u09B2\u0999\u09CD\u0995\u09BE\u09B0 \u09AC\u09BF\u09AA\u0995\u09CD\u09B7\u09C7 \u099A\u09A4\u09C1\u09B0\u09CD\u09A5 \u0987\u09A8\u09BF\u0982\u09B8\u09C7 \u09B2\u09BF\u099F\u09A8 \u09A6\u09BE\u09B8\u09C7\u09B0 \u0985\u09A8\u09AC\u09A6\u09CD\u09AF \u09B8\u09C7\u099E\u09CD\u099A\u09C1\u09B0\u09BF!", type: "breaking", sport: "cricket", status: "sent", sentAt: "2026-09-22T07:45:00Z" },
  { id: "notif-2", title: "\u099A\u09CD\u09AF\u09BE\u09AE\u09CD\u09AA\u09BF\u09AF\u09BC\u09A8\u09CD\u09B8 \u09B2\u09BF\u0997 \u09A1\u09CD\u09B0", message: "\u0987\u09A4\u09BF\u09B9\u09BE\u09A6\u09C7 \u09B6\u09C7\u09B7 \u09AE\u09C1\u09B9\u09C2\u09B0\u09CD\u09A4\u09C7\u09B0 \u0997\u09CB\u09B2\u09C7 \u0986\u09B0\u09CD\u09B8\u09C7\u09A8\u09BE\u09B2\u0995\u09C7 \u09B0\u09C1\u0996\u09C7 \u09A6\u09BF\u09B2 \u09B0\u09BF\u09AF\u09BC\u09BE\u09B2 \u09AE\u09BE\u09A6\u09CD\u09B0\u09BF\u09A6\u0964", type: "match_result", sport: "football", status: "sent", sentAt: "2026-09-22T07:20:00Z" },
  { id: "notif-3", title: "\u09AC\u09BF\u09AA\u09BF\u098F\u09B2 \u099F\u09BF-\u099F\u09CB\u09AF\u09BC\u09C7\u09A8\u09CD\u099F\u09BF \u09AE\u09CD\u09AF\u09BE\u099A \u09B6\u09C1\u09B0\u09C1", message: "\u0995\u09C1\u09AE\u09BF\u09B2\u09CD\u09B2\u09BE \u09AD\u09BF\u0995\u09CD\u099F\u09CB\u09B0\u09BF\u09AF\u09BC\u09BE\u09A8\u09CD\u09B8 \u09AC\u09A8\u09BE\u09AE \u09AB\u09B0\u099A\u09C1\u09A8 \u09AC\u09B0\u09BF\u09B6\u09BE\u09B2 \u09AE\u09CD\u09AF\u09BE\u099A \u09B6\u09C1\u09B0\u09C1 \u0986\u099C \u09B8\u09A8\u09CD\u09A7\u09CD\u09AF\u09BE \u09ED:\u09E6\u09E6\u099F\u09BE\u09AF\u09BC\u0964", type: "match_start", sport: "cricket", status: "scheduled", scheduledAt: "2026-09-22T18:45:00Z" }
];
let mockUsers = [
  { id: "usr-1", name: "Super Admin", email: "admin@cricfot.com", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80", role: "super_admin", status: "active", createdAt: "2026-01-15", lastLogin: "2026-09-22T08:15:00Z" },
  { id: "usr-2", name: "Chief Editor", email: "editor@cricfot.com", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80", role: "editor", status: "active", createdAt: "2026-02-01", lastLogin: "2026-09-22T07:50:00Z" },
  { id: "usr-3", name: "Rashedul Islam", email: "rashedul@cricfot.com", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80", role: "author", status: "active", createdAt: "2026-03-10", lastLogin: "2026-09-22T06:30:00Z" },
  { id: "usr-4", name: "Tanvir Ahmed", email: "tanvir@cricfot.com", avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80", role: "author", status: "active", createdAt: "2026-03-12", lastLogin: "2026-09-22T05:40:00Z" },
  { id: "usr-5", name: "Data Analyst", email: "analytics@cricfot.com", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80", role: "analyst", status: "active", createdAt: "2026-04-01", lastLogin: "2026-09-21T16:00:00Z" }
];
let mockRoles = [
  { id: "role-1", name: "Super Admin", description: "Full unlimited access across all modules and system configurations.", permissions: ["*"], userCount: 1 },
  { id: "role-2", name: "Admin", description: "Manage content, sports entities, site layout, ads and users.", permissions: ["articles.*", "categories.*", "sports.*", "media.*", "homepage.*", "navigation.*", "ads.*", "users.read", "analytics.read"], userCount: 2 },
  { id: "role-3", name: "Editor", description: "Publish, unpublish, review and curate all editorial articles and breaking tickers.", permissions: ["articles.*", "categories.*", "tags.*", "media.*", "featured.*", "breaking.*", "trending.*"], userCount: 3 },
  { id: "role-4", name: "Author", description: "Create and draft news and feature articles for editorial review.", permissions: ["articles.create", "articles.edit_own", "media.upload"], userCount: 8 },
  { id: "role-5", name: "Social Manager", description: "Manage social channels, alerts, breaking notifications and social cards.", permissions: ["social.*", "notifications.*", "articles.read"], userCount: 2 },
  { id: "role-6", name: "Analyst", description: "Read-only access to reader analytics, traffic metrics and user engagement.", permissions: ["analytics.read", "articles.read"], userCount: 2 },
  { id: "role-7", name: "Moderator", description: "Moderate comments and visitor feedback.", permissions: ["comments.moderate"], userCount: 1 }
];
let mockActivityLogs = [
  { id: "log-1", user: { id: "usr-1", name: "Super Admin", email: "admin@cricfot.com" }, action: "Article Published", module: "Articles", details: 'Published "\u09AE\u09BF\u09B0\u09AA\u09C1\u09B0 \u099F\u09C7\u09B8\u09CD\u099F\u09C7 \u09B6\u09CD\u09B0\u09C0\u09B2\u0999\u09CD\u0995\u09BE\u09B0 \u09AC\u09BF\u09AA\u0995\u09CD\u09B7\u09C7 \u09B2\u09BF\u099F\u09A8 \u0993 \u09B6\u09BE\u09A8\u09CD\u09A4\u09B0 \u09A6\u09BE\u09B0\u09C1\u09A3 \u099C\u09C1\u099F\u09BF"', timestamp: "2026-09-22T07:45:12Z", ipPlaceholder: "103.114.98.24", status: "success" },
  { id: "log-2", user: { id: "usr-2", name: "Chief Editor", email: "editor@cricfot.com" }, action: "Breaking News Ticker Updated", module: "Breaking News", details: "Activated priority ticker for Mirpur Test", timestamp: "2026-09-22T07:15:30Z", ipPlaceholder: "103.114.98.55", status: "success" },
  { id: "log-3", user: { id: "usr-1", name: "Super Admin", email: "admin@cricfot.com" }, action: "Homepage Section Reordered", module: "Homepage", details: "Moved Live Scores section below Latest News", timestamp: "2026-09-22T06:40:10Z", ipPlaceholder: "103.114.98.24", status: "success" },
  { id: "log-4", user: { id: "usr-3", name: "Rashedul Islam", email: "rashedul@cricfot.com" }, action: "New Draft Created", module: "Articles", details: 'Created draft "\u09AE\u09C1\u09B8\u09CD\u09A4\u09BE\u09AB\u09BF\u099C\u09C7\u09B0 \u0995\u09BE\u099F\u09BE\u09B0\u09C7\u09B0 \u09B8\u09BE\u09AE\u09A8\u09C7 \u0995\u09C7\u09A8 \u09AA\u09B0\u09BE\u09B8\u09CD\u09A4 \u09AC\u09BF\u09B6\u09CD\u09AC\u09B8\u09C7\u09B0\u09BE \u09AC\u09CD\u09AF\u09BE\u099F\u09BE\u09B0\u09B0\u09BE?"', timestamp: "2026-09-22T05:55:00Z", ipPlaceholder: "202.134.12.8", status: "success" },
  { id: "log-5", user: { id: "usr-1", name: "Super Admin", email: "admin@cricfot.com" }, action: "Sports API Sync", module: "Live Scores", details: "Simulated synchronisation with mock provider", timestamp: "2026-09-22T05:00:00Z", ipPlaceholder: "127.0.0.1", status: "success" }
];
export const AdminService = {
  // --- DASHBOARD OVERVIEW ---
  async getDashboardStats() {
    const published = mockArticles.filter((a) => a.status === "published").length;
    const draft = mockArticles.filter((a) => a.status === "draft").length;
    const scheduled = mockArticles.filter((a) => a.status === "scheduled").length;
    const pendingReview = mockArticles.filter((a) => a.status === "pending").length;
    const liveMatches = mockMatches.filter((m) => m.status === "live").length;
    const totalViews = mockArticles.reduce((sum, a) => sum + (a.views || 0), 0);
    return {
      totalArticles: mockArticles.length,
      publishedArticles: published,
      draftArticles: draft,
      todayViews: totalViews + 14250,
      totalUsers: mockUsers.length,
      liveMatchesCount: liveMatches,
      statusCounts: {
        published,
        draft,
        scheduled,
        pendingReview
      }
    };
  },
  // --- ARTICLES ---
  async getArticles(params) {
    let result = [...mockArticles];
    if (params?.search) {
      const q = params.search.toLowerCase();
      result = result.filter(
        (a) => a.title.toLowerCase().includes(q) || a.banglaTitle && a.banglaTitle.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q) || a.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    if (params?.sport && params.sport !== "all") {
      result = result.filter((a) => a.sport === params.sport);
    }
    if (params?.category && params.category !== "all") {
      result = result.filter((a) => a.category === params.category);
    }
    if (params?.status && params.status !== "all") {
      result = result.filter((a) => a.status === params.status);
    }
    const total = result.length;
    const page = params?.page || 1;
    const limit = params?.limit || 10;
    const offset = (page - 1) * limit;
    const paginatedItems = result.slice(offset, offset + limit);
    return {
      items: paginatedItems,
      total,
      page,
      totalPages: Math.ceil(total / limit) || 1
    };
  },
  async getArticleById(id) {
    const found = mockArticles.find((a) => a.id === id);
    return found ? { ...found } : null;
  },
  async createArticle(data) {
    const newArticle = {
      ...data,
      id: `art-${Date.now()}`,
      views: 0,
      publishedAt: data.publishedAt || (/* @__PURE__ */ new Date()).toISOString()
    };
    mockArticles.unshift(newArticle);
    this.logActivity("Article Created", "Articles", `Created article "${newArticle.title}"`);
    return newArticle;
  },
  async updateArticle(id, data) {
    const idx = mockArticles.findIndex((a) => a.id === id);
    if (idx === -1) throw new Error("Article not found");
    mockArticles[idx] = {
      ...mockArticles[idx],
      ...data,
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    this.logActivity("Article Updated", "Articles", `Updated article "${mockArticles[idx].title}"`);
    return { ...mockArticles[idx] };
  },
  async deleteArticle(id) {
    const article = mockArticles.find((a) => a.id === id);
    mockArticles = mockArticles.filter((a) => a.id !== id);
    if (article) {
      this.logActivity("Article Deleted", "Articles", `Deleted article "${article.title}"`);
    }
    return true;
  },
  async duplicateArticle(id) {
    const original = mockArticles.find((a) => a.id === id);
    if (!original) throw new Error("Article not found");
    const copy = {
      ...original,
      id: `art-${Date.now()}`,
      title: `${original.title} (Copy)`,
      slug: `${original.slug}-copy`,
      status: "draft",
      views: 0,
      publishedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    mockArticles.unshift(copy);
    this.logActivity("Article Duplicated", "Articles", `Duplicated article "${original.title}"`);
    return copy;
  },
  // --- CATEGORIES ---
  async getCategories() {
    return [...mockCategories];
  },
  async saveCategory(cat) {
    if (cat.id) {
      const idx = mockCategories.findIndex((c) => c.id === cat.id);
      if (idx !== -1) {
        mockCategories[idx] = { ...mockCategories[idx], ...cat };
        return mockCategories[idx];
      }
    }
    const newCat = {
      id: `cat-${Date.now()}`,
      name: cat.name || "New Category",
      banglaName: cat.banglaName || "\u09A8\u09A4\u09C1\u09A8 \u0995\u09CD\u09AF\u09BE\u099F\u09BE\u0997\u09B0\u09BF",
      slug: cat.slug || `category-${Date.now()}`,
      sport: cat.sport || "general",
      description: cat.description || "",
      articleCount: 0,
      enabled: cat.enabled !== void 0 ? cat.enabled : true
    };
    mockCategories.push(newCat);
    this.logActivity("Category Created", "Categories", `Created category "${newCat.name}"`);
    return newCat;
  },
  async createCategory(cat) {
    return this.saveCategory(cat);
  },
  async updateCategory(id, cat) {
    return this.saveCategory({ ...cat, id });
  },
  async deleteCategory(id) {
    mockCategories = mockCategories.filter((c) => c.id !== id);
    this.logActivity("Category Deleted", "Categories", `Deleted category ID: ${id}`);
    return true;
  },
  // --- TAGS ---
  async getTags() {
    return [...mockTags];
  },
  async saveTag(tag) {
    if (tag.id) {
      const idx = mockTags.findIndex((t) => t.id === tag.id);
      if (idx !== -1) {
        mockTags[idx] = { ...mockTags[idx], ...tag };
        return mockTags[idx];
      }
    }
    const newTag = {
      id: `tag-${Date.now()}`,
      name: tag.name || "New Tag",
      slug: tag.slug || `tag-${Date.now()}`,
      articleCount: 0
    };
    mockTags.push(newTag);
    return newTag;
  },
  async createTag(tag) {
    return this.saveTag(tag);
  },
  async updateTag(id, tag) {
    return this.saveTag({ ...tag, id });
  },
  async deleteTag(id) {
    mockTags = mockTags.filter((t) => t.id !== id);
    return true;
  },
  // --- AUTHORS ---
  async getAuthors() {
    return [...mockAuthors];
  },
  async saveAuthor(author) {
    if (author.id) {
      const idx = mockAuthors.findIndex((a) => a.id === author.id);
      if (idx !== -1) {
        mockAuthors[idx] = { ...mockAuthors[idx], ...author };
        return mockAuthors[idx];
      }
    }
    const newAuthor = {
      id: `auth-${Date.now()}`,
      name: author.name || "New Author",
      banglaName: author.banglaName || "\u09A8\u09A4\u09C1\u09A8 \u09AA\u09CD\u09B0\u09A4\u09BF\u09AC\u09C7\u09A6\u0995",
      slug: author.slug || `author-${Date.now()}`,
      email: author.email || "author@cricfot.com",
      role: author.role || "Sports Reporter",
      avatar: author.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      articlesCount: 0,
      status: "active"
    };
    mockAuthors.push(newAuthor);
    return newAuthor;
  },
  async createAuthor(author) {
    return this.saveAuthor(author);
  },
  async updateAuthor(id, author) {
    return this.saveAuthor({ ...author, id });
  },
  async deleteAuthor(id) {
    mockAuthors = mockAuthors.filter((a) => a.id !== id);
    return true;
  },
  // --- MEDIA ---
  async getMedia() {
    return [...mockMedia];
  },
  async uploadMedia(item) {
    const newItem = {
      id: `med-${Date.now()}`,
      filename: item.filename || "uploaded-asset.jpg",
      url: item.url || "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1200&q=80",
      type: item.type || "image",
      size: item.size || "1.5 MB",
      dimensions: item.dimensions || "1920x1080",
      alt: item.alt || "Sports Media Asset",
      caption: item.caption || "",
      copyright: item.copyright || "CricFot Media",
      source: item.source || "CricFot Staff",
      uploadedAt: (/* @__PURE__ */ new Date()).toISOString(),
      usedInCount: 0,
      ...item
    };
    mockMedia.unshift(newItem);
    this.logActivity("Media Uploaded", "Media Library", `Uploaded "${newItem.filename}"`);
    return newItem;
  },
  async createMediaItem(item) {
    return this.uploadMedia(item);
  },
  async deleteMedia(id) {
    mockMedia = mockMedia.filter((m) => m.id !== id);
    this.logActivity("Media Deleted", "Media Library", `Deleted media ID ${id}`);
    return true;
  },
  async deleteMediaItem(id) {
    return this.deleteMedia(id);
  },
  // --- VIDEOS ---
  async getVideos() {
    return [...mockVideos];
  },
  async saveVideo(video) {
    if (video.id) {
      const idx = mockVideos.findIndex((v) => v.id === video.id);
      if (idx !== -1) {
        mockVideos[idx] = { ...mockVideos[idx], ...video };
        return mockVideos[idx];
      }
    }
    const newVideo = {
      id: `vid-${Date.now()}`,
      title: video.title || "New Video Highlight",
      banglaTitle: video.banglaTitle || "\u09A8\u09A4\u09C1\u09A8 \u09AD\u09BF\u09A1\u09BF\u0993 \u09B9\u09BE\u0987\u09B2\u09BE\u0987\u099F\u09B8",
      slug: video.slug || `video-${Date.now()}`,
      thumbnail: video.thumbnail || "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=600&q=80",
      duration: video.duration || "\u09E6\u09EB:\u09E6\u09E6",
      sport: video.sport || "cricket",
      category: video.category || "Cricket",
      views: "\u09E6 \u09AD\u09BF\u0989",
      status: "published",
      publishedAt: (/* @__PURE__ */ new Date()).toISOString(),
      ...video
    };
    mockVideos.unshift(newVideo);
    return newVideo;
  },
  async createVideo(video) {
    return this.saveVideo(video);
  },
  async updateVideo(id, video) {
    return this.saveVideo({ ...video, id });
  },
  async deleteVideo(id) {
    mockVideos = mockVideos.filter((v) => v.id !== id);
    return true;
  },
  // --- BREAKING NEWS ---
  async getBreakingNews() {
    return [...mockBreakingItems];
  },
  async saveBreakingNews(item) {
    if (item.id) {
      const idx = mockBreakingItems.findIndex((b) => b.id === item.id);
      if (idx !== -1) {
        mockBreakingItems[idx] = { ...mockBreakingItems[idx], ...item };
        return mockBreakingItems[idx];
      }
    }
    const newItem = {
      id: `brk-${Date.now()}`,
      headline: item.headline || "\u09AC\u09CD\u09B0\u09C7\u0995\u09BF\u0982 \u09A8\u09BF\u0989\u099C \u09B6\u09BF\u09B0\u09CB\u09A8\u09BE\u09AE...",
      link: item.link || "/",
      active: item.active !== void 0 ? item.active : true,
      priority: item.priority || "high",
      startTime: (/* @__PURE__ */ new Date()).toISOString(),
      sport: item.sport || "cricket"
    };
    mockBreakingItems.unshift(newItem);
    this.logActivity("Breaking News Added", "Breaking News", `Added ticker: "${newItem.headline}"`);
    return newItem;
  },
  async addBreakingNews(item) {
    return this.saveBreakingNews(item);
  },
  async toggleBreakingNews(id, active) {
    const item = mockBreakingItems.find((b) => b.id === id);
    if (!item) return null;
    item.active = active !== void 0 ? active : !item.active;
    return item;
  },
  async deleteBreakingNews(id) {
    mockBreakingItems = mockBreakingItems.filter((b) => b.id !== id);
    return true;
  },
  // --- MATCHES & LIVE SCORES ---
  async getMatches(filters) {
    let result = [...mockMatches];
    if (filters?.sport && filters.sport !== "all") {
      result = result.filter((m) => m.sport === filters.sport);
    }
    if (filters?.status && filters.status !== "all") {
      result = result.filter((m) => m.status === filters.status);
    }
    return result;
  },
  async saveMatch(match) {
    if (match.id) {
      const idx = mockMatches.findIndex((m) => m.id === match.id);
      if (idx !== -1) {
        mockMatches[idx] = { ...mockMatches[idx], ...match };
        return mockMatches[idx];
      }
    }
    const newMatch = {
      id: `m-${Date.now()}`,
      sport: match.sport || "cricket",
      competition: match.competition || "International Fixture",
      competitionBangla: match.competitionBangla || "\u0986\u09A8\u09CD\u09A4\u09B0\u09CD\u099C\u09BE\u09A4\u09BF\u0995 \u09AA\u09CD\u09B0\u09A4\u09BF\u09AF\u09CB\u0997\u09BF\u09A4\u09BE",
      season: match.season || "2026",
      homeTeam: match.homeTeam || { id: "t-1", name: "Team A", banglaName: "\u09A6\u09B2 \u09E7" },
      awayTeam: match.awayTeam || { id: "t-2", name: "Team B", banglaName: "\u09A6\u09B2 \u09E8" },
      venue: match.venue || "Stadium Venue",
      date: match.date || "2026-09-22",
      time: match.time || "18:00",
      status: match.status || "upcoming",
      statusText: match.statusText || "\u0986\u09B8\u09A8\u09CD\u09A8",
      isDemo: true
    };
    mockMatches.push(newMatch);
    this.logActivity("Match Saved", "Matches", `Saved match ${newMatch.competition}`);
    return newMatch;
  },
  async createMatch(match) {
    return this.saveMatch(match);
  },
  async updateMatch(id, match) {
    return this.saveMatch({ ...match, id });
  },
  async deleteMatch(id) {
    mockMatches = mockMatches.filter((m) => m.id !== id);
    return true;
  },
  async getLiveProviderStatus() {
    return {
      providerStatus: "idle",
      providerName: "CricFot Mock Sports Feeder (Demo Mode)",
      lastSync: new Date(Date.now() - 5 * 60 * 1e3).toLocaleTimeString("bn-BD"),
      nextSync: "\u09B8\u09CD\u09AC\u09AF\u09BC\u0982\u0995\u09CD\u09B0\u09BF\u09AF\u09BC \u09AA\u09C1\u09B2\u09BF\u0982 \u09B8\u0995\u09CD\u09B0\u09BF\u09AF\u09BC (\u09AA\u09CD\u09B0\u09A4\u09BF \u09E9 \u09AE\u09BF\u09A8\u09BF\u099F)",
      activeLiveMatches: mockMatches.filter((m) => m.status === "live").length,
      lastError: null
    };
  },
  // --- TEAMS, PLAYERS, COMPETITIONS ---
  async getTeams(sport) {
    if (sport && sport !== "all") {
      return mockTeams.filter((t) => t.sport === sport);
    }
    return [...mockTeams];
  },
  async saveTeam(team) {
    if (team.id) {
      const idx = mockTeams.findIndex((t) => t.id === team.id);
      if (idx !== -1) {
        mockTeams[idx] = { ...mockTeams[idx], ...team };
        return mockTeams[idx];
      }
    }
    const newTeam = {
      id: `team-${Date.now()}`,
      name: team.name || "New Team",
      banglaName: team.banglaName || "\u09A8\u09A4\u09C1\u09A8 \u09A6\u09B2",
      shortName: team.shortName || "NT",
      slug: team.slug || `team-${Date.now()}`,
      sport: team.sport || "cricket",
      country: team.country || "Bangladesh",
      logo: team.logo || "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=200&q=80",
      status: "active",
      ...team
    };
    mockTeams.push(newTeam);
    return newTeam;
  },
  async createTeam(team) {
    return this.saveTeam(team);
  },
  async updateTeam(id, team) {
    return this.saveTeam({ ...team, id });
  },
  async deleteTeam(id) {
    mockTeams = mockTeams.filter((t) => t.id !== id);
    return true;
  },
  async getPlayers(sport) {
    if (sport && sport !== "all") {
      return mockPlayers.filter((p) => p.sport === sport);
    }
    return [...mockPlayers];
  },
  async savePlayer(player) {
    if (player.id) {
      const idx = mockPlayers.findIndex((p) => p.id === player.id);
      if (idx !== -1) {
        mockPlayers[idx] = { ...mockPlayers[idx], ...player };
        return mockPlayers[idx];
      }
    }
    const newPlayer = {
      id: `ply-${Date.now()}`,
      name: player.name || "New Player",
      banglaName: player.banglaName || "\u09A8\u09A4\u09C1\u09A8 \u0996\u09C7\u09B2\u09CB\u09AF\u09BC\u09BE\u09A1\u09BC",
      photo: player.photo || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      country: player.country || "Bangladesh",
      sport: player.sport || "cricket",
      team: player.team || "National Team",
      role: player.role || "All-rounder",
      status: "active",
      ...player
    };
    mockPlayers.push(newPlayer);
    return newPlayer;
  },
  async createPlayer(player) {
    return this.savePlayer(player);
  },
  async updatePlayer(id, player) {
    return this.savePlayer({ ...player, id });
  },
  async deletePlayer(id) {
    mockPlayers = mockPlayers.filter((p) => p.id !== id);
    return true;
  },
  async getCompetitions(sport) {
    if (sport && sport !== "all") {
      return mockCompetitions.filter((c) => c.sport === sport);
    }
    return [...mockCompetitions];
  },
  async saveCompetition(comp) {
    if (comp.id) {
      const idx = mockCompetitions.findIndex((c) => c.id === comp.id);
      if (idx !== -1) {
        mockCompetitions[idx] = { ...mockCompetitions[idx], ...comp };
        return mockCompetitions[idx];
      }
    }
    const newComp = {
      id: `comp-${Date.now()}`,
      name: comp.name || "New Competition",
      banglaName: comp.banglaName || "\u09A8\u09A4\u09C1\u09A8 \u099F\u09C1\u09B0\u09CD\u09A8\u09BE\u09AE\u09C7\u09A8\u09CD\u099F",
      sport: comp.sport || "cricket",
      season: comp.season || "2026",
      status: "active",
      ...comp
    };
    mockCompetitions.push(newComp);
    return newComp;
  },
  async deleteCompetition(id) {
    mockCompetitions = mockCompetitions.filter((c) => c.id !== id);
    return true;
  },
  // --- HOMEPAGE CONFIGURATION ---
  async getHomepageConfig() {
    return [...mockHomepageSections].sort((a, b) => a.order - b.order);
  },
  async getHomepageSections() {
    return this.getHomepageConfig();
  },
  async updateHomepageSections(sections) {
    mockHomepageSections = [...sections];
    this.logActivity("Homepage Config Updated", "Homepage", "Sections reordered or toggled");
    return [...mockHomepageSections];
  },
  async saveHomepageSections(sections) {
    return this.updateHomepageSections(sections);
  },
  // --- NAVIGATION ---
  async getNavigationItems() {
    return [...mockNavigationItems].sort((a, b) => a.order - b.order);
  },
  async saveNavigationItem(item) {
    if (item.id) {
      const idx = mockNavigationItems.findIndex((n) => n.id === item.id);
      if (idx !== -1) {
        mockNavigationItems[idx] = { ...mockNavigationItems[idx], ...item };
        return mockNavigationItems[idx];
      }
    }
    const newItem = {
      id: `nav-${Date.now()}`,
      label: item.label || "New Item",
      banglaLabel: item.banglaLabel || "\u09A8\u09A4\u09C1\u09A8 \u09AE\u09C7\u09A8\u09C1",
      url: item.url || "/",
      order: mockNavigationItems.length + 1,
      active: true
    };
    mockNavigationItems.push(newItem);
    return newItem;
  },
  // --- ADS ---
  async getAds() {
    return [...mockAds];
  },
  async getAdSlots() {
    return this.getAds();
  },
  async saveAd(ad) {
    if (ad.id) {
      const idx = mockAds.findIndex((a) => a.id === ad.id);
      if (idx !== -1) {
        mockAds[idx] = { ...mockAds[idx], ...ad };
        return mockAds[idx];
      }
    }
    const newAd = {
      id: `ad-${Date.now()}`,
      name: ad.name || "New Ad Slot",
      slot: ad.slot || "homepage",
      type: ad.type || "banner",
      active: ad.active !== void 0 ? ad.active : true,
      startDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      impressions: 0,
      clicks: 0,
      ...ad
    };
    mockAds.push(newAd);
    return newAd;
  },
  async createAdSlot(ad) {
    return this.saveAd(ad);
  },
  async updateAdSlot(id, ad) {
    return this.saveAd({ ...ad, id });
  },
  async toggleAdSlot(id, active) {
    const ad = mockAds.find((a) => a.id === id);
    if (!ad) return null;
    ad.active = active !== void 0 ? active : !ad.active;
    return ad;
  },
  async deleteAdSlot(id) {
    mockAds = mockAds.filter((a) => a.id !== id);
    return true;
  },
  // --- SEO ---
  async getSeoConfig() {
    return { ...mockSeoConfig };
  },
  async saveSeoConfig(config) {
    mockSeoConfig = { ...mockSeoConfig, ...config };
    this.logActivity("SEO Settings Updated", "SEO", "Updated global meta tags and robots.txt");
    return { ...mockSeoConfig };
  },
  // --- STATIC PAGES ---
  async getStaticPages() {
    return [...mockStaticPages];
  },
  async saveStaticPage(page) {
    const idx = mockStaticPages.findIndex((p) => p.id === page.id);
    if (idx !== -1) {
      mockStaticPages[idx] = {
        ...mockStaticPages[idx],
        ...page,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      return mockStaticPages[idx];
    }
    const newPage = {
      id: `page-${Date.now()}`,
      title: page.title || "New Page",
      banglaTitle: page.banglaTitle || "\u09A8\u09A4\u09C1\u09A8 \u09AA\u09C3\u09B7\u09CD\u09A0\u09BE",
      slug: page.slug || `page-${Date.now()}`,
      content: page.content || "",
      status: "published",
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    mockStaticPages.push(newPage);
    return newPage;
  },
  // --- NOTIFICATIONS ---
  async getNotifications() {
    return [...mockNotifications];
  },
  async createNotification(notif) {
    const newNotif = {
      id: `notif-${Date.now()}`,
      title: notif.title || "Alert",
      message: notif.message || "",
      type: notif.type || "general",
      sport: notif.sport,
      status: notif.scheduledAt ? "scheduled" : "sent",
      sentAt: notif.scheduledAt ? void 0 : (/* @__PURE__ */ new Date()).toISOString(),
      scheduledAt: notif.scheduledAt
    };
    mockNotifications.unshift(newNotif);
    this.logActivity("Notification Scheduled", "Notifications", `Prepared notification "${newNotif.title}"`);
    return newNotif;
  },
  // --- USERS & ROLES ---
  async getUsers() {
    return [...mockUsers];
  },
  async saveUser(user) {
    if (user.id) {
      const idx = mockUsers.findIndex((u) => u.id === user.id);
      if (idx !== -1) {
        mockUsers[idx] = { ...mockUsers[idx], ...user };
        return mockUsers[idx];
      }
    }
    const newUser = {
      id: `usr-${Date.now()}`,
      name: user.name || "Staff User",
      email: user.email || "user@cricfot.com",
      avatar: user.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      role: user.role || "author",
      status: "active",
      createdAt: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      lastLogin: "Never"
    };
    mockUsers.push(newUser);
    this.logActivity("User Created", "Users", `Created user account for ${newUser.email}`);
    return newUser;
  },
  async deleteUser(id) {
    mockUsers = mockUsers.filter((u) => u.id !== id);
    this.logActivity("User Removed", "Users", `Deleted user ID ${id}`);
    return true;
  },
  async getRoles() {
    return [...mockRoles];
  },
  // --- ACTIVITY LOGS ---
  async getActivityLogs() {
    return [...mockActivityLogs];
  },
  logActivity(action, module, details) {
    const newLog = {
      id: `log-${Date.now()}`,
      user: {
        id: "usr-1",
        name: "Super Admin",
        email: "admin@cricfot.com"
      },
      action,
      module,
      details,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      ipPlaceholder: "103.114.98.24",
      status: "success"
    };
    mockActivityLogs.unshift(newLog);
  },
  // --- GLOBAL ADMIN SEARCH ---
  async searchEverything(query) {
    const q = query.toLowerCase().trim();
    if (!q) return { articles: [], categories: [], matches: [], teams: [] };
    return {
      articles: mockArticles.filter((a) => a.title.toLowerCase().includes(q) || a.tags.some((t) => t.toLowerCase().includes(q))).slice(0, 5).map((a) => ({ id: a.id, title: a.title, slug: a.slug, sport: a.sport })),
      categories: mockCategories.filter((c) => c.name.toLowerCase().includes(q) || c.banglaName.toLowerCase().includes(q)).slice(0, 4).map((c) => ({ id: c.id, name: c.name, slug: c.slug })),
      matches: mockMatches.filter((m) => m.competition.toLowerCase().includes(q) || m.homeTeam.name.toLowerCase().includes(q) || m.awayTeam.name.toLowerCase().includes(q)).slice(0, 3).map((m) => ({ id: m.id, competition: m.competition, teams: `${m.homeTeam.name} vs ${m.awayTeam.name}` })),
      teams: mockTeams.filter((t) => t.name.toLowerCase().includes(q) || t.banglaName.toLowerCase().includes(q)).slice(0, 4).map((t) => ({ id: t.id, name: t.name, sport: t.sport }))
    };
  }
};

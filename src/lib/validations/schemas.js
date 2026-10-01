import { z } from "zod";
export const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
export const articleSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters").max(200, "Title cannot exceed 200 characters"),
  slug: z.string().min(3, "Slug is required").regex(/^[a-z0-9\u0980-\u09FF-]+$/, "Slug must only contain lowercase alphanumeric or hyphen characters"),
  shortDescription: z.string().min(10, "Excerpt/Short description must be at least 10 characters").max(500, "Short description cannot exceed 500 characters"),
  content: z.string().min(20, "Article content must be at least 20 characters"),
  sport: z.enum(["cricket", "football"]),
  category: z.string().min(2, "Category is required"),
  subcategory: z.string().optional(),
  tags: z.array(z.string()).min(1, "At least one tag is required"),
  authorId: z.string().min(1, "Author selection is required"),
  featuredImage: z.object({
    url: z.string().url("Featured image must be a valid URL"),
    alt: z.string().min(2, "Alt text is required for accessibility"),
    caption: z.string().optional()
  }),
  gallery: z.array(z.string().url()).optional(),
  status: z.enum(["draft", "published", "scheduled", "archived"]),
  publishDate: z.string().optional(),
  scheduledDate: z.string().optional(),
  type: z.enum([
    "Regular News",
    "Breaking News",
    "Featured News",
    "Analysis",
    "Match Report",
    "Interview",
    "Opinion"
  ]).default("Regular News"),
  seo: z.object({
    metaTitle: z.string().max(70, "Meta title should not exceed 70 characters").optional(),
    metaDescription: z.string().max(160, "Meta description should not exceed 160 characters").optional(),
    focusKeyword: z.string().optional(),
    canonicalUrl: z.string().url().optional().or(z.literal("")),
    ogTitle: z.string().optional(),
    ogDescription: z.string().optional(),
    ogImage: z.string().url().optional().or(z.literal("")),
    twitterTitle: z.string().optional(),
    twitterDescription: z.string().optional(),
    twitterImage: z.string().url().optional().or(z.literal(""))
  }).optional(),
  social: z.object({
    facebookTitle: z.string().optional(),
    facebookDescription: z.string().optional(),
    facebookImage: z.string().url().optional().or(z.literal(""))
  }).optional()
});
export const userSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters").optional().or(z.literal("")),
  role: z.enum(["admin", "manager"]),
  status: z.enum(["active", "inactive"]).default("active"),
  profileImage: z.string().url().optional().or(z.literal(""))
});
export const categorySchema = z.object({
  name: z.string().min(2, "Category name is required"),
  slug: z.string().min(2, "Slug is required"),
  description: z.string().optional(),
  sport: z.enum(["cricket", "football", "general"]),
  image: z.string().url().optional().or(z.literal("")),
  status: z.enum(["active", "inactive"]).default("active"),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional()
});
export const tagSchema = z.object({
  name: z.string().min(2, "Tag name is required"),
  slug: z.string().min(2, "Slug is required"),
  description: z.string().optional()
});
export const authorSchema = z.object({
  name: z.string().min(2, "Author name is required"),
  slug: z.string().min(2, "Slug is required"),
  profileImage: z.string().url().optional().or(z.literal("")),
  bio: z.string().optional(),
  designation: z.string().min(2, "Designation is required"),
  status: z.enum(["active", "inactive"]).default("active")
});
export const mediaSchema = z.object({
  filename: z.string().min(1, "Filename is required"),
  url: z.string().url("Valid URL is required"),
  alt: z.string().min(1, "Alt description is required"),
  caption: z.string().optional(),
  mimeType: z.string().default("image/jpeg"),
  fileSize: z.string().optional()
});
export const breakingNewsSchema = z.object({
  text: z.string().min(5, "Breaking headline is required"),
  url: z.string().optional().or(z.literal("")),
  priority: z.enum(["urgent", "high", "normal"]).default("normal"),
  status: z.enum(["active", "inactive"]).default("active"),
  startAt: z.string().optional(),
  endAt: z.string().optional()
});
export const matchSchema = z.object({
  sport: z.enum(["cricket", "football"]),
  competition: z.string().min(2, "Competition name is required"),
  homeTeam: z.string().min(2, "Home team is required"),
  awayTeam: z.string().min(2, "Away team is required"),
  venue: z.string().min(2, "Venue is required"),
  matchDate: z.string().min(1, "Match date is required"),
  matchTime: z.string().min(1, "Match time is required"),
  status: z.enum(["Upcoming", "Live", "Finished", "Postponed", "Cancelled"]),
  score: z.string().optional()
});
export const videoSchema = z.object({
  title: z.string().min(5, "Title is required"),
  slug: z.string().min(3, "Slug is required"),
  description: z.string().optional(),
  thumbnail: z.string().url("Valid thumbnail URL is required"),
  videoUrl: z.string().url("Valid video URL is required"),
  platform: z.enum(["YouTube", "Facebook", "Other"]),
  sport: z.enum(["cricket", "football"]),
  category: z.string().min(2, "Category is required"),
  status: z.enum(["published", "draft"]).default("published")
});
export const adSchema = z.object({
  name: z.string().min(2, "Ad campaign name is required"),
  position: z.enum([
    "Header Ad",
    "Homepage Ad",
    "Article Top Ad",
    "Article Middle Ad",
    "Article Bottom Ad",
    "Sidebar Ad",
    "Mobile Ad",
    "Footer Ad"
  ]),
  code: z.string().optional(),
  image: z.string().url().optional().or(z.literal("")),
  link: z.string().url().optional().or(z.literal("")),
  status: z.enum(["active", "inactive"]).default("active"),
  startDate: z.string().optional(),
  endDate: z.string().optional()
});
export const seoSettingsSchema = z.object({
  siteName: z.string().min(2, "Site name is required"),
  siteTitle: z.string().min(5, "Site title is required"),
  siteDescription: z.string().min(10, "Site description is required"),
  keywords: z.string().optional(),
  defaultOgImage: z.string().url().optional().or(z.literal("")),
  twitterHandle: z.string().optional(),
  facebookPage: z.string().optional(),
  organizationName: z.string().optional()
});
export const staticPageSchema = z.object({
  title: z.string().min(2, "Title is required"),
  slug: z.string().min(2, "Slug is required"),
  content: z.string().min(10, "Content is required"),
  status: z.enum(["published", "draft"]).default("published"),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional()
});

'use client';
import { useRouter } from "../../router/RouterContext";
import { AdminLayout } from "./AdminLayout";
import { authService } from "../../services/authService";
import { canRoleAccessRoute } from "../../lib/permissions/rbac";
import { AdminAccessDenied } from "./AdminAccessDenied";
import { AdminDashboardPage } from "../../views/admin/AdminDashboardPage";
import { AdminLoginPage } from "../../views/admin/AdminLoginPage";
import { AdminArticlesPage } from "../../views/admin/AdminArticlesPage";
import { AdminArticleEditPage } from "../../views/admin/AdminArticleEditPage";
import { AdminArticlePreviewPage } from "../../views/admin/AdminArticlePreviewPage";
import { AdminCategoriesPage } from "../../views/admin/AdminCategoriesPage";
import { AdminTagsPage } from "../../views/admin/AdminTagsPage";
import { AdminAuthorsPage } from "../../views/admin/AdminAuthorsPage";
import { AdminMediaPage } from "../../views/admin/AdminMediaPage";
import { AdminVideosPage } from "../../views/admin/AdminVideosPage";
import { AdminBreakingNewsPage } from "../../views/admin/AdminBreakingNewsPage";
import { AdminFeaturedPage } from "../../views/admin/AdminFeaturedPage";
import { AdminTrendingPage } from "../../views/admin/AdminTrendingPage";
import { AdminCricketPage } from "../../views/admin/AdminCricketPage";
import { AdminFootballPage } from "../../views/admin/AdminFootballPage";
import { AdminMatchesPage } from "../../views/admin/AdminMatchesPage";
import { AdminLiveScorePage } from "../../views/admin/AdminLiveScorePage";
import { AdminTeamsPage } from "../../views/admin/AdminTeamsPage";
import { AdminPlayersPage } from "../../views/admin/AdminPlayersPage";
import { AdminCompetitionsPage } from "../../views/admin/AdminCompetitionsPage";
import { AdminHomepagePage } from "../../views/admin/AdminHomepagePage";
import { AdminNavigationPage } from "../../views/admin/AdminNavigationPage";
import { AdminAdsPage } from "../../views/admin/AdminAdsPage";
import { AdminSeoPage } from "../../views/admin/AdminSeoPage";
import { AdminPagesPage } from "../../views/admin/AdminPagesPage";
import { AdminNotificationsPage } from "../../views/admin/AdminNotificationsPage";
import { AdminAnalyticsPage } from "../../views/admin/AdminAnalyticsPage";
import { AdminSocialPage } from "../../views/admin/AdminSocialPage";
import { AdminUsersPage } from "../../views/admin/AdminUsersPage";
import { AdminUserEditPage } from "../../views/admin/AdminUserEditPage";
import { AdminRolesPage } from "../../views/admin/AdminRolesPage";
import { AdminSettingsPage } from "../../views/admin/AdminSettingsPage";
import { AdminLogsPage } from "../../views/admin/AdminLogsPage";
export const AdminRouter = () => {
  const { currentPath } = useRouter();
  const currentUser = authService.getCurrentUser();
  if (currentPath === "/admin/login") {
    return <AdminLoginPage />;
  }
  if (!currentUser) {
    return <AdminLoginPage />;
  }
  const userRole = currentUser.role === "admin" ? "admin" : "manager";
  if (!canRoleAccessRoute(userRole, currentPath)) {
    return <AdminLayout breadcrumbs={[{ label: "Dashboard", href: "/admin" }, { label: "\u0985\u09CD\u09AF\u09BE\u0995\u09CD\u09B8\u09C7\u09B8 \u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09BF\u09A4" }]}>
        <AdminAccessDenied attemptedPath={currentPath} requiredRole="admin" />
      </AdminLayout>;
  }
  let pageContent = <AdminDashboardPage />;
  let breadcrumbs = [{ label: "Dashboard" }];
  if (currentPath === "/admin" || currentPath === "/admin/dashboard") {
    pageContent = <AdminDashboardPage />;
    breadcrumbs = [{ label: "Dashboard" }];
  } else if (currentPath === "/admin/articles/new") {
    pageContent = <AdminArticleEditPage isNew={true} />;
    breadcrumbs = [{ label: "Articles", href: "/admin/articles" }, { label: "New Article" }];
  } else if (currentPath.match(/^\/admin\/articles\/([^/]+)\/preview$/)) {
    const match = currentPath.match(/^\/admin\/articles\/([^/]+)\/preview$/);
    const articleId = match ? match[1] : "";
    pageContent = <AdminArticlePreviewPage articleId={articleId} />;
    breadcrumbs = [{ label: "Articles", href: "/admin/articles" }, { label: "Article Preview" }];
  } else if (currentPath.startsWith("/admin/articles/")) {
    const articleId = currentPath.replace("/admin/articles/", "");
    pageContent = <AdminArticleEditPage articleId={articleId} />;
    breadcrumbs = [{ label: "Articles", href: "/admin/articles" }, { label: "Edit Article" }];
  } else if (currentPath === "/admin/articles") {
    pageContent = <AdminArticlesPage />;
    breadcrumbs = [{ label: "Articles" }];
  } else if (currentPath === "/admin/categories") {
    pageContent = <AdminCategoriesPage />;
    breadcrumbs = [{ label: "Categories" }];
  } else if (currentPath === "/admin/tags") {
    pageContent = <AdminTagsPage />;
    breadcrumbs = [{ label: "Tags" }];
  } else if (currentPath === "/admin/authors") {
    pageContent = <AdminAuthorsPage />;
    breadcrumbs = [{ label: "Authors & Journalists" }];
  } else if (currentPath === "/admin/media") {
    pageContent = <AdminMediaPage />;
    breadcrumbs = [{ label: "Media Library" }];
  } else if (currentPath === "/admin/videos") {
    pageContent = <AdminVideosPage />;
    breadcrumbs = [{ label: "Videos & Highlights" }];
  } else if (currentPath === "/admin/breaking" || currentPath === "/admin/breaking-news") {
    pageContent = <AdminBreakingNewsPage />;
    breadcrumbs = [{ label: "Breaking News Ticker" }];
  } else if (currentPath === "/admin/featured") {
    pageContent = <AdminFeaturedPage />;
    breadcrumbs = [{ label: "Featured Top Stories" }];
  } else if (currentPath === "/admin/trending") {
    pageContent = <AdminTrendingPage />;
    breadcrumbs = [{ label: "Trending News" }];
  } else if (currentPath === "/admin/cricket") {
    pageContent = <AdminCricketPage />;
    breadcrumbs = [{ label: "Cricket Desk" }];
  } else if (currentPath === "/admin/football") {
    pageContent = <AdminFootballPage />;
    breadcrumbs = [{ label: "Football Desk" }];
  } else if (currentPath === "/admin/matches") {
    pageContent = <AdminMatchesPage />;
    breadcrumbs = [{ label: "Matches & Fixtures" }];
  } else if (currentPath === "/admin/live" || currentPath === "/admin/live-score") {
    pageContent = <AdminLiveScorePage />;
    breadcrumbs = [{ label: "Live Commentary & Scores" }];
  } else if (currentPath === "/admin/teams") {
    pageContent = <AdminTeamsPage />;
    breadcrumbs = [{ label: "Teams & Clubs" }];
  } else if (currentPath === "/admin/players") {
    pageContent = <AdminPlayersPage />;
    breadcrumbs = [{ label: "Players Roster" }];
  } else if (currentPath === "/admin/competitions") {
    pageContent = <AdminCompetitionsPage />;
    breadcrumbs = [{ label: "Competitions & Leagues" }];
  } else if (currentPath === "/admin/homepage") {
    pageContent = <AdminHomepagePage />;
    breadcrumbs = [{ label: "Homepage Architect" }];
  } else if (currentPath === "/admin/navigation") {
    pageContent = <AdminNavigationPage />;
    breadcrumbs = [{ label: "Navigation Menus" }];
  } else if (currentPath === "/admin/ads") {
    pageContent = <AdminAdsPage />;
    breadcrumbs = [{ label: "Advertisements" }];
  } else if (currentPath === "/admin/seo") {
    pageContent = <AdminSeoPage />;
    breadcrumbs = [{ label: "SEO & Metadata" }];
  } else if (currentPath === "/admin/pages") {
    pageContent = <AdminPagesPage />;
    breadcrumbs = [{ label: "Custom Pages" }];
  } else if (currentPath === "/admin/notifications") {
    pageContent = <AdminNotificationsPage />;
    breadcrumbs = [{ label: "Push Notifications" }];
  } else if (currentPath === "/admin/analytics") {
    pageContent = <AdminAnalyticsPage />;
    breadcrumbs = [{ label: "Audience Analytics" }];
  } else if (currentPath === "/admin/social") {
    pageContent = <AdminSocialPage />;
    breadcrumbs = [{ label: "Social Channels" }];
  } else if (currentPath === "/admin/users/new") {
    pageContent = <AdminUserEditPage isNew={true} />;
    breadcrumbs = [{ label: "Newsroom Staff", href: "/admin/users" }, { label: "New User" }];
  } else if (currentPath.startsWith("/admin/users/")) {
    const userId = currentPath.replace("/admin/users/", "");
    pageContent = <AdminUserEditPage userId={userId} />;
    breadcrumbs = [{ label: "Newsroom Staff", href: "/admin/users" }, { label: "Edit User" }];
  } else if (currentPath === "/admin/users") {
    pageContent = <AdminUsersPage />;
    breadcrumbs = [{ label: "Newsroom Staff" }];
  } else if (currentPath === "/admin/roles") {
    pageContent = <AdminRolesPage />;
    breadcrumbs = [{ label: "Roles & Permissions" }];
  } else if (currentPath === "/admin/settings") {
    pageContent = <AdminSettingsPage />;
    breadcrumbs = [{ label: "Site Settings" }];
  } else if (currentPath === "/admin/logs") {
    pageContent = <AdminLogsPage />;
    breadcrumbs = [{ label: "Audit Logs" }];
  }
  return <AdminLayout breadcrumbs={breadcrumbs}>{pageContent}</AdminLayout>;
};

export const ROLE_PERMISSIONS = {
  admin: {
    canViewDashboard: true,
    canManageNews: true,
    canCreateNews: true,
    canEditNews: true,
    canDeleteNews: true,
    canPublishNews: true,
    canManageCategories: true,
    canManageTags: true,
    canManageAuthors: true,
    canManageMedia: true,
    canManageBreakingNews: true,
    canManageFeaturedNews: true,
    canManageTrendingNews: true,
    canManageCricket: true,
    canManageFootball: true,
    canManageMatches: true,
    canManageLiveScore: true,
    canManageTeams: true,
    canManagePlayers: true,
    canManageCompetitions: true,
    canManageVideos: true,
    canManageStaticPages: true,
    canManageNotifications: true,
    canViewAnalytics: true,
    // Admin exclusive
    canManageUsers: true,
    canCreateUsers: true,
    canEditUsers: true,
    canDeleteUsers: true,
    canManageRoles: true,
    canManageSettings: true,
    canManageSecurity: true,
    canManageDatabase: true,
    canManageSystem: true,
    canViewActivityLogs: true,
    canDeleteActivityLogs: false,
    // Protected: logs cannot be erased
    canManageSeo: true,
    canManageAds: true,
    canManageHomepage: true,
    canManageSocial: true,
    canManageNavigation: true
  },
  manager: {
    canViewDashboard: true,
    canManageNews: true,
    canCreateNews: true,
    canEditNews: true,
    canDeleteNews: true,
    canPublishNews: true,
    canManageCategories: true,
    canManageTags: true,
    canManageAuthors: true,
    canManageMedia: true,
    canManageBreakingNews: true,
    canManageFeaturedNews: true,
    canManageTrendingNews: true,
    canManageCricket: true,
    canManageFootball: true,
    canManageMatches: true,
    canManageLiveScore: true,
    canManageTeams: true,
    canManagePlayers: true,
    canManageCompetitions: true,
    canManageVideos: true,
    canManageStaticPages: true,
    canManageNotifications: true,
    canViewAnalytics: true,
    // Manager RESTRICTED (Must NOT have access to these)
    canManageUsers: false,
    canCreateUsers: false,
    canEditUsers: false,
    canDeleteUsers: false,
    canManageRoles: false,
    canManageSettings: false,
    canManageSecurity: false,
    canManageDatabase: false,
    canManageSystem: false,
    canViewActivityLogs: false,
    canDeleteActivityLogs: false,
    canManageSeo: false,
    canManageAds: false,
    canManageHomepage: false,
    canManageSocial: false,
    canManageNavigation: false
  }
};
export function canRoleAccessRoute(role, path) {
  if (!role) return false;
  if (role === "admin") return true;
  const cleanPath = path.split("?")[0].replace(/\/+$/, "") || "/admin";
  const adminOnlyRoutes = [
    "/admin/users",
    "/admin/roles",
    "/admin/settings",
    "/admin/logs",
    "/admin/seo",
    "/admin/ads",
    "/admin/homepage",
    "/admin/social",
    "/admin/navigation"
  ];
  for (const forbidden of adminOnlyRoutes) {
    if (cleanPath === forbidden || cleanPath.startsWith(`${forbidden}/`)) {
      return false;
    }
  }
  return true;
}
export function checkPermission(role, permission) {
  if (!role) return false;
  const perms = ROLE_PERMISSIONS[role];
  return perms ? Boolean(perms[permission]) : false;
}

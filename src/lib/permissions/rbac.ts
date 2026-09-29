/**
 * CricFot Admin Dashboard - Role-Based Access Control (RBAC)
 * Strictly enforces two roles: 'admin' and 'manager'
 * as specified in Section 3 & 40 of the CricFot CMS Specification.
 */

export type DashboardRole = 'admin' | 'manager';

export interface RolePermissions {
  // News & Content CMS (Both Admin & Manager)
  canViewDashboard: boolean;
  canManageNews: boolean;
  canCreateNews: boolean;
  canEditNews: boolean;
  canDeleteNews: boolean;
  canPublishNews: boolean;
  canManageCategories: boolean;
  canManageTags: boolean;
  canManageAuthors: boolean;
  canManageMedia: boolean;
  canManageBreakingNews: boolean;
  canManageFeaturedNews: boolean;
  canManageTrendingNews: boolean;
  canManageCricket: boolean;
  canManageFootball: boolean;
  canManageMatches: boolean;
  canManageLiveScore: boolean;
  canManageTeams: boolean;
  canManagePlayers: boolean;
  canManageCompetitions: boolean;
  canManageVideos: boolean;
  canManageStaticPages: boolean;
  canManageNotifications: boolean;
  canViewAnalytics: boolean;

  // Administration & Critical Settings (ADMIN ONLY)
  canManageUsers: boolean;
  canCreateUsers: boolean;
  canEditUsers: boolean;
  canDeleteUsers: boolean;
  canManageRoles: boolean;
  canManageSettings: boolean;
  canManageSecurity: boolean;
  canManageDatabase: boolean;
  canManageSystem: boolean;
  canViewActivityLogs: boolean;
  canDeleteActivityLogs: boolean; // false for everyone! Logs are immutable
  canManageSeo: boolean;
  canManageAds: boolean;
  canManageHomepage: boolean;
  canManageSocial: boolean;
  canManageNavigation: boolean;
}

export const ROLE_PERMISSIONS: Record<DashboardRole, RolePermissions> = {
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
    canDeleteActivityLogs: false, // Protected: logs cannot be erased
    canManageSeo: true,
    canManageAds: true,
    canManageHomepage: true,
    canManageSocial: true,
    canManageNavigation: true,
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
    canManageNavigation: false,
  },
};

/**
 * Checks if a specific route is accessible by the user's role
 */
export function canRoleAccessRoute(role: DashboardRole | undefined, path: string): boolean {
  if (!role) return false;
  if (role === 'admin') return true;

  // Clean path to match base route
  const cleanPath = path.split('?')[0].replace(/\/+$/, '') || '/admin';

  // Routes explicitly prohibited for managers
  const adminOnlyRoutes = [
    '/admin/users',
    '/admin/roles',
    '/admin/settings',
    '/admin/logs',
    '/admin/seo',
    '/admin/ads',
    '/admin/homepage',
    '/admin/social',
    '/admin/navigation',
  ];

  for (const forbidden of adminOnlyRoutes) {
    if (cleanPath === forbidden || cleanPath.startsWith(`${forbidden}/`)) {
      return false;
    }
  }

  return true;
}

/**
 * Checks permission on a specific action
 */
export function checkPermission(
  role: DashboardRole | undefined,
  permission: keyof RolePermissions
): boolean {
  if (!role) return false;
  const perms = ROLE_PERMISSIONS[role];
  return perms ? Boolean(perms[permission]) : false;
}

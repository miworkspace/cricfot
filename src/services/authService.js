const STORAGE_KEY = "cricfot_admin_session";
export const DEMO_ACCOUNTS = [
  {
    id: "usr-admin-1",
    name: "Chief Newsroom Admin",
    email: "admin@cricfot.com",
    role: "admin",
    roleLabel: "Admin (Full Access)",
    description: "Complete unrestricted control over entire website, user management, and settings",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "usr-manager-1",
    name: "Editorial Desk Manager",
    email: "manager@cricfot.com",
    role: "manager",
    roleLabel: "Manager (Limited CMS)",
    description: "Content authoring, news publishing, media, and sports desk management",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  }
];
const listeners = /* @__PURE__ */ new Set();
function notifyListeners(user) {
  listeners.forEach((fn) => {
    try {
      fn(user);
    } catch (err) {
      console.error("Auth change listener error:", err);
    }
  });
}
export const authService = {
  /**
   * Retrieves the current authenticated session from persistent storage
   */
  getSession() {
    if (typeof window === "undefined") return null;
    try {
      const raw = localStorage.getItem(STORAGE_KEY) || sessionStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      const session = JSON.parse(raw);
      if (session.expiresAt && Date.now() > session.expiresAt) {
        this.logout();
        return null;
      }
      return session;
    } catch {
      return null;
    }
  },
  /**
   * Returns the current authenticated user or null
   */
  getCurrentUser() {
    const session = this.getSession();
    return session ? session.user : null;
  },
  /**
   * Checks if user is currently authenticated
   */
  isAuthenticated() {
    return this.getCurrentUser() !== null;
  },
  /**
   * Simulates authentication with credentials.
   * Designed to easily switch to backend API endpoints (e.g. POST /api/auth/login)
   * or OAuth / Firebase Auth in production.
   */
  async login(credentials) {
    await new Promise((resolve) => setTimeout(resolve, 600));
    const email = credentials.email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("Please enter a valid work email address (e.g. editor@cricfot.com).");
    }
    if (!credentials.password || credentials.password.length < 4) {
      throw new Error("Password must be at least 4 characters.");
    }
    const matchedAccount = DEMO_ACCOUNTS.find((acc) => acc.email.toLowerCase() === email);
    if (credentials.twoFactorCode !== void 0) {
      if (credentials.twoFactorCode.trim() !== "123456" && credentials.twoFactorCode.trim().length !== 6) {
        throw new Error('Invalid verification code. Use demo OTP "123456" to verify.');
      }
    }
    const authUser = matchedAccount ? {
      id: matchedAccount.id,
      name: matchedAccount.name,
      email: matchedAccount.email,
      avatar: matchedAccount.avatar,
      role: matchedAccount.role,
      roleName: matchedAccount.roleLabel,
      permissions: matchedAccount.role === "admin" ? ["*"] : ["news.*", "categories.*", "tags.*", "media.*", "sports.*"]
    } : {
      id: `usr-${Date.now()}`,
      name: email.split("@")[0].replace(".", " ").replace(/^\w/, (c) => c.toUpperCase()),
      email,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      role: email.includes("admin") ? "admin" : "manager",
      roleName: email.includes("admin") ? "Admin (Full Access)" : "Manager (Editorial CMS)",
      permissions: email.includes("admin") ? ["*"] : ["news.*", "categories.*", "tags.*", "media.*"]
    };
    const remember = credentials.rememberMe ?? true;
    const session = {
      token: `mock_jwt_token_${Date.now()}_${Math.random().toString(36).substring(2)}`,
      refreshToken: `mock_refresh_${Date.now()}`,
      expiresAt: Date.now() + (remember ? 7 * 24 * 60 * 60 * 1e3 : 8 * 60 * 60 * 1e3),
      // 7 days or 8 hours
      user: authUser,
      rememberMe: remember
    };
    if (typeof window !== "undefined") {
      const serialized = JSON.stringify(session);
      if (remember) {
        localStorage.setItem(STORAGE_KEY, serialized);
        sessionStorage.removeItem(STORAGE_KEY);
      } else {
        sessionStorage.setItem(STORAGE_KEY, serialized);
        localStorage.removeItem(STORAGE_KEY);
      }
    }
    notifyListeners(authUser);
    return { session };
  },
  /**
   * Log out and clear session tokens
   */
  logout() {
    if (typeof window !== "undefined") {
      localStorage.removeItem(STORAGE_KEY);
      sessionStorage.removeItem(STORAGE_KEY);
    }
    notifyListeners(null);
  },
  /**
   * Simulates a password reset recovery email dispatch
   */
  async requestPasswordReset(email) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      throw new Error("Please provide a valid work email address.");
    }
    return {
      success: true,
      message: `Password reset instructions have been dispatched to ${email.trim()}. Please inspect your newsroom inbox.`
    };
  },
  /**
   * Subscribe to authentication state changes
   */
  subscribe(callback) {
    listeners.add(callback);
    return () => {
      listeners.delete(callback);
    };
  }
};

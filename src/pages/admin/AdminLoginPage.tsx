import React, { useState } from 'react';
import {
  Lock,
  Mail,
  ShieldCheck,
  ArrowRight,
  Eye,
  EyeOff,
  AlertCircle,
  KeyRound,
  ShieldAlert,
  CheckCircle2,
  Globe,
  HelpCircle,
  Sparkles,
  ArrowLeft,
  Smartphone,
} from 'lucide-react';
import { useRouter } from '../../router/RouterContext';
import { Link } from '../../router/Link';
import { authService, DEMO_ACCOUNTS, DemoAccount } from '../../services/authService';

export const AdminLoginPage: React.FC = () => {
  const { navigate } = useRouter();

  // Form states
  const [email, setEmail] = useState('admin@cricfot.com');
  const [password, setPassword] = useState('admin123');
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isCapsLockOn, setIsCapsLockOn] = useState(false);

  // Flow states
  const [isForgotMode, setIsForgotMode] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetSuccessMessage, setResetSuccessMessage] = useState<string | null>(null);

  // 2FA state support
  const [requires2FA, setRequires2FA] = useState(false);
  const [twoFactorCode, setTwoFactorCode] = useState('');

  // UI status
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successToast, setSuccessToast] = useState<string | null>(null);

  // Active selected demo account
  const [selectedDemo, setSelectedDemo] = useState<string>('admin@cricfot.com');

  const handleSelectDemo = (acc: DemoAccount) => {
    setSelectedDemo(acc.email);
    setEmail(acc.email);
    setPassword('admin123');
    setErrorMessage(null);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setIsCapsLockOn(e.getModifierState('CapsLock'));
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsLoading(true);

    try {
      const res = await authService.login({
        email,
        password,
        rememberMe,
        twoFactorCode: requires2FA ? twoFactorCode : undefined,
      });

      if (res.session) {
        setSuccessToast(`Welcome back, ${res.session.user.name}!`);
        setTimeout(() => {
          navigate('/admin');
        }, 500);
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage('Authentication failed. Please verify your credentials.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordResetSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsLoading(true);

    try {
      const res = await authService.requestPasswordReset(resetEmail || email);
      setResetSuccessMessage(res.message);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage('Failed to send reset email. Please contact editorial support.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSSOLogin = () => {
    setIsLoading(true);
    setErrorMessage(null);
    // Simulates Enterprise Google Workspace SSO hook
    setTimeout(async () => {
      try {
        await authService.login({
          email: 'editor@cricfot.com',
          password: 'sso_authenticated',
          rememberMe: true,
        });
        setSuccessToast('SSO Authentication successful with Google Workspace');
        setTimeout(() => {
          navigate('/admin');
        }, 400);
      } catch {
        setErrorMessage('Enterprise SSO authentication temporarily unavailable.');
        setIsLoading(false);
      }
    }, 600);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col justify-between py-8 px-4 sm:px-6 lg:px-8 font-sans selection:bg-emerald-500 selection:text-white">
      {/* Top Bar: Quick Public Return */}
      <div className="max-w-4xl mx-auto w-full flex items-center justify-between pb-6 border-b border-neutral-900">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-emerald-400 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to CricFot Public Portal</span>
        </Link>

        <div className="flex items-center gap-2 text-[11px] text-neutral-500">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono">Newsroom Gateway v2.4</span>
        </div>
      </div>

      {/* Main Login Card Area */}
      <div className="my-auto py-8 sm:mx-auto sm:w-full sm:max-w-md">
        {/* Brand Presentation */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center gap-2.5 mb-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center font-black text-white text-xl shadow-lg shadow-emerald-900/30 border border-emerald-400/20">
              CF
            </div>
            <div className="text-left">
              <div className="text-2xl font-black text-white tracking-tight leading-none">
                Cric<span className="text-emerald-400">Fot</span>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-medium">
                Newsroom CMS
              </span>
            </div>
          </div>

          <h1 className="text-xl font-bold text-white tracking-tight">
            {isForgotMode ? 'Reset Editorial Password' : 'Staff Sign In'}
          </h1>
          <p className="mt-1 text-xs text-neutral-400 max-w-xs mx-auto">
            {isForgotMode
              ? 'Enter your verified newsroom email to receive recovery instructions.'
              : 'Secure credentials required for editorial publishing and sports data management.'}
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-neutral-900/90 backdrop-blur-md rounded-2xl border border-neutral-800 shadow-2xl p-6 sm:p-8 relative overflow-hidden">
          {/* Subtle Top Accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600" />

          {/* Success Toast */}
          {successToast && (
            <div className="mb-5 p-3.5 bg-emerald-950/80 border border-emerald-800/80 rounded-xl flex items-center gap-2.5 text-xs text-emerald-300 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{successToast}</span>
            </div>
          )}

          {/* Error Alert */}
          {errorMessage && (
            <div className="mb-5 p-3.5 bg-rose-950/70 border border-rose-800/70 rounded-xl flex items-start gap-2.5 text-xs text-rose-300 animate-in fade-in">
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-rose-200">Authentication Alert:</span>
                <p className="mt-0.5 text-rose-300/90">{errorMessage}</p>
              </div>
            </div>
          )}

          {!isForgotMode ? (
            <>
              {/* Demo Account Quick Switcher */}
              <div className="mb-5 p-3 bg-neutral-950/70 rounded-xl border border-neutral-800/80">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-semibold text-neutral-300 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-emerald-400" />
                    Quick Demo Credentials
                  </span>
                  <span className="text-[10px] text-neutral-500">Tap to load</span>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {DEMO_ACCOUNTS.map((acc) => {
                    const isSelected = selectedDemo === acc.email;
                    return (
                      <button
                        key={acc.id}
                        type="button"
                        onClick={() => handleSelectDemo(acc)}
                        className={`text-left p-2 rounded-lg text-xs transition-all border ${
                          isSelected
                            ? 'bg-emerald-950/50 border-emerald-600/60 text-emerald-300 shadow-xs'
                            : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-neutral-200 hover:bg-neutral-850'
                        }`}
                      >
                        <div className="font-medium truncate">{acc.roleLabel}</div>
                        <div className="text-[10px] opacity-70 truncate">{acc.email}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Login Form */}
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                {/* Email Input */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Work Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3 pointer-events-none" />
                    <input
                      type="email"
                      required
                      autoComplete="username"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errorMessage) setErrorMessage(null);
                      }}
                      placeholder="editor@cricfot.com"
                      className="w-full pl-10 pr-3 py-2.5 text-sm bg-neutral-950 border border-neutral-800 rounded-xl text-white placeholder:text-neutral-600 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-semibold text-neutral-300">
                      Password
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        setIsForgotMode(true);
                        setResetEmail(email);
                        setErrorMessage(null);
                      }}
                      className="text-[11px] font-medium text-emerald-400 hover:text-emerald-300 hover:underline transition-colors"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <div className="relative">
                    <Lock className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3 pointer-events-none" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      autoComplete="current-password"
                      value={password}
                      onKeyUp={handleKeyUp}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        if (errorMessage) setErrorMessage(null);
                      }}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-10 py-2.5 text-sm bg-neutral-950 border border-neutral-800 rounded-xl text-white placeholder:text-neutral-600 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-3 top-2.5 text-neutral-500 hover:text-neutral-300 p-0.5 rounded-md"
                      title={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Caps Lock Warning */}
                  {isCapsLockOn && (
                    <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-amber-400">
                      <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
                      <span>Caps Lock is ON</span>
                    </div>
                  )}
                </div>

                {/* Optional Two-Factor Authentication Prompt Toggle */}
                {requires2FA && (
                  <div className="p-3 bg-neutral-950 rounded-xl border border-neutral-800 space-y-2 animate-in fade-in">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-neutral-300 flex items-center gap-1.5">
                        <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                        Two-Factor Code (2FA)
                      </span>
                      <span className="text-[10px] text-emerald-400 font-mono">Demo: 123456</span>
                    </div>
                    <input
                      type="text"
                      maxLength={6}
                      value={twoFactorCode}
                      onChange={(e) => setTwoFactorCode(e.target.value)}
                      placeholder="123456"
                      className="w-full text-center tracking-widest font-mono text-base py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                )}

                {/* Remember Me & 2FA Test Option */}
                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center text-xs text-neutral-400 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 rounded bg-neutral-950 border-neutral-800 text-emerald-600 focus:ring-emerald-500 focus:ring-offset-neutral-900"
                    />
                    <span className="ml-2">Remember this device (7 days)</span>
                  </label>

                  <button
                    type="button"
                    onClick={() => setRequires2FA((prev) => !prev)}
                    className="text-[11px] text-neutral-500 hover:text-neutral-300 transition-colors"
                    title="Simulate 2FA security enforcement"
                  >
                    {requires2FA ? 'Disable 2FA' : '+ Test 2FA'}
                  </button>
                </div>

                {/* Primary Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-md shadow-emerald-950"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Authenticating Credentials...</span>
                    </div>
                  ) : (
                    <>
                      <span>Sign in to Newsroom</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* SSO Divider */}
              <div className="relative my-5">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-neutral-800" />
                </div>
                <div className="relative flex justify-center text-[11px] uppercase tracking-wider">
                  <span className="bg-neutral-900 px-3 text-neutral-500 font-semibold">
                    Or Editorial SSO
                  </span>
                </div>
              </div>

              {/* Enterprise SSO Button */}
              <button
                type="button"
                onClick={handleSSOLogin}
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2.5 py-2.5 px-4 bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 rounded-xl text-xs font-semibold text-neutral-200 transition-all"
              >
                <Globe className="w-4 h-4 text-emerald-400" />
                <span>Single Sign-On (Google Workspace)</span>
              </button>
            </>
          ) : (
            /* Forgot Password Form */
            <div className="space-y-4">
              {resetSuccessMessage ? (
                <div className="p-4 bg-emerald-950/60 border border-emerald-800/80 rounded-xl text-center space-y-3">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <p className="text-xs text-neutral-200">{resetSuccessMessage}</p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsForgotMode(false);
                      setResetSuccessMessage(null);
                    }}
                    className="w-full py-2 bg-neutral-900 hover:bg-neutral-800 text-xs font-semibold text-white rounded-lg border border-neutral-700 transition-colors"
                  >
                    Return to Sign In
                  </button>
                </div>
              ) : (
                <form onSubmit={handlePasswordResetSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Newsroom Work Email
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3 pointer-events-none" />
                      <input
                        type="email"
                        required
                        value={resetEmail}
                        onChange={(e) => setResetEmail(e.target.value)}
                        placeholder="editor@cricfot.com"
                        className="w-full pl-10 pr-3 py-2.5 text-sm bg-neutral-950 border border-neutral-800 rounded-xl text-white placeholder:text-neutral-600 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <p className="mt-1.5 text-[11px] text-neutral-500">
                      A cryptographically signed recovery token will be sent to this email.
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setIsForgotMode(false);
                        setErrorMessage(null);
                      }}
                      className="w-1/3 py-2.5 px-3 bg-neutral-950 hover:bg-neutral-800 text-xs font-semibold text-neutral-300 rounded-xl border border-neutral-800 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-2/3 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-500 text-xs font-semibold text-white rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                      {isLoading ? 'Sending...' : 'Send Recovery Link'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* Security Guarantee Box */}
          <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-[11px] text-neutral-500">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>TLS 256-bit Encrypted</span>
            </span>
            <span className="font-mono">Audited Session</span>
          </div>
        </div>

        {/* Support Help Footer */}
        <div className="mt-6 text-center text-xs text-neutral-500">
          <span>Need access or editorial credentials? Contact{' '}</span>
          <span className="text-emerald-400 font-medium">desk@cricfot.com</span>
        </div>
      </div>

      {/* Page Bottom Copyright */}
      <div className="text-center text-[11px] text-neutral-600 py-3 border-t border-neutral-900">
        © {new Date().getFullYear()} CricFot Digital Sports Network. All administrative sessions are logged for security.
      </div>
    </div>
  );
};

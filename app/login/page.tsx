"use client";

import { Eye, EyeOff, Lock, Mail, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AuthShell from "../../components/AuthShell";

function getPreferredTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "dark";

  const savedTheme = window.localStorage.getItem("nova-theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function LoginPage() {
  const router = useRouter();
  const [theme, setTheme] = useState<"light" | "dark">(getPreferredTheme);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    document.documentElement.style.colorScheme = nextTheme;
    window.localStorage.setItem("nova-theme", nextTheme);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    const email = formState.email.trim();
    const password = formState.password;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid work email.");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    setLoading(true);
    window.setTimeout(() => {
      if (rememberMe) {
        window.localStorage.setItem("nova-demo-auth", "true");
      }
      router.push("/dashboard");
    }, 900);
  };

  return (
    <AuthShell
      title="Sign in"
      subtitle="Access your workspace and continue building with NOVA."
      bottomText="Don't have an account?"
      bottomLinkLabel="Create account"
      bottomLinkHref="/signup"
      theme={theme}
      onThemeToggle={toggleTheme}
    >
      <form className="space-y-5" onSubmit={handleSubmit} noValidate>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-[var(--foreground)]">
            Email
          </label>
          <div className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--background)]/80 px-3 py-3 transition focus-within:border-violet-400/50 focus-within:ring-2 focus-within:ring-violet-500/10">
            <Mail className="h-4 w-4 text-[var(--muted-foreground)]" />
            <input
              id="email"
              type="email"
              autoComplete="email"
              value={formState.email}
              onChange={(event) => setFormState((current) => ({ ...current, email: event.target.value }))}
              placeholder="team@nova.ai"
              className="w-full bg-transparent text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted-foreground)]"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="text-sm font-medium text-[var(--foreground)]">
              Password
            </label>
            <button type="button" className="text-sm font-medium text-violet-500 transition hover:text-violet-400">
              Forgot password?
            </button>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--background)]/80 px-3 py-3 transition focus-within:border-violet-400/50 focus-within:ring-2 focus-within:ring-violet-500/10">
            <Lock className="h-4 w-4 text-[var(--muted-foreground)]" />
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              value={formState.password}
              onChange={(event) => setFormState((current) => ({ ...current, password: event.target.value }))}
              placeholder="Enter your password"
              className="w-full bg-transparent text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted-foreground)]"
            />
            <button
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={() => setShowPassword((visible) => !visible)}
              className="flex h-8 w-8 items-center justify-center rounded-full text-[var(--muted-foreground)] transition hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 text-sm">
          <label className="flex items-center gap-2 text-[var(--muted-foreground)]">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(event) => setRememberMe(event.target.checked)}
              className="h-4 w-4 rounded border-[var(--border)] bg-[var(--background)] text-violet-500 focus:ring-violet-500"
            />
            Remember me
          </label>
        </div>

        {error ? (
          <div className="rounded-2xl border border-rose-500/30 bg-rose-500/10 px-3 py-2 text-sm text-rose-500">
            {error}
          </div>
        ) : null}

        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-4 py-3.5 text-sm font-medium text-white shadow-lg shadow-violet-500/20 transition hover:-translate-y-0.5 hover:bg-[var(--primary-strong)] disabled:cursor-not-allowed disabled:opacity-80"
        >
          {loading ? "Signing in..." : "Sign In"}
          {!loading ? <ArrowRight className="h-4 w-4" /> : null}
        </button>
      </form>
    </AuthShell>
  );
}

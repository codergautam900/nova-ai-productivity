"use client";

import { ArrowRight, CheckCircle2, Eye, EyeOff, Lock, Mail, UserRound } from "lucide-react";
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

export default function SignupPage() {
  const router = useRouter();
  const [theme, setTheme] = useState<"light" | "dark">(getPreferredTheme);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<{ type: "idle" | "error" | "success"; message: string }>({
    type: "idle",
    message: "",
  });
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

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
    setStatus({ type: "idle", message: "" });

    const fullName = formState.fullName.trim();
    const email = formState.email.trim();
    const password = formState.password;
    const confirmPassword = formState.confirmPassword;

    if (!fullName) {
      setStatus({ type: "error", message: "Please enter your full name." });
      return;
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ type: "error", message: "Please use a valid work email address." });
      return;
    }

    if (password.length < 8) {
      setStatus({ type: "error", message: "Password must be at least 8 characters." });
      return;
    }

    if (password !== confirmPassword) {
      setStatus({ type: "error", message: "Passwords do not match." });
      return;
    }

    if (!agreed) {
      setStatus({ type: "error", message: "Please accept the terms to continue." });
      return;
    }

    setLoading(true);
    window.setTimeout(() => {
      window.localStorage.setItem("nova-demo-auth", "true");
      setStatus({ type: "success", message: "Account created. Redirecting to your dashboard..." });
      window.setTimeout(() => router.push("/dashboard"), 700);
    }, 900);
  };

  return (
    <AuthShell
      title="Create account"
      subtitle="Start building with a workspace built for focused execution."
      bottomText="Already have an account?"
      bottomLinkLabel="Sign in"
      bottomLinkHref="/login"
      theme={theme}
      onThemeToggle={toggleTheme}
    >
      <form className="space-y-5" onSubmit={handleSubmit} noValidate>
        <div className="space-y-2">
          <label htmlFor="fullName" className="text-sm font-medium text-[var(--foreground)]">
            Full Name
          </label>
          <div className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--background)]/80 px-3 py-3 transition focus-within:border-violet-400/50 focus-within:ring-2 focus-within:ring-violet-500/10">
            <UserRound className="h-4 w-4 text-[var(--muted-foreground)]" />
            <input
              id="fullName"
              type="text"
              autoComplete="name"
              value={formState.fullName}
              onChange={(event) => setFormState((current) => ({ ...current, fullName: event.target.value }))}
              placeholder="Alex Morgan"
              className="w-full bg-transparent text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted-foreground)]"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="workEmail" className="text-sm font-medium text-[var(--foreground)]">
            Work Email
          </label>
          <div className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--background)]/80 px-3 py-3 transition focus-within:border-violet-400/50 focus-within:ring-2 focus-within:ring-violet-500/10">
            <Mail className="h-4 w-4 text-[var(--muted-foreground)]" />
            <input
              id="workEmail"
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
          <label htmlFor="password" className="text-sm font-medium text-[var(--foreground)]">
            Password
          </label>
          <div className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--background)]/80 px-3 py-3 transition focus-within:border-violet-400/50 focus-within:ring-2 focus-within:ring-violet-500/10">
            <Lock className="h-4 w-4 text-[var(--muted-foreground)]" />
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              value={formState.password}
              onChange={(event) => setFormState((current) => ({ ...current, password: event.target.value }))}
              placeholder="Create a password"
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

        <div className="space-y-2">
          <label htmlFor="confirmPassword" className="text-sm font-medium text-[var(--foreground)]">
            Confirm Password
          </label>
          <div className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--background)]/80 px-3 py-3 transition focus-within:border-violet-400/50 focus-within:ring-2 focus-within:ring-violet-500/10">
            <Lock className="h-4 w-4 text-[var(--muted-foreground)]" />
            <input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              autoComplete="new-password"
              value={formState.confirmPassword}
              onChange={(event) => setFormState((current) => ({ ...current, confirmPassword: event.target.value }))}
              placeholder="Confirm your password"
              className="w-full bg-transparent text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted-foreground)]"
            />
            <button
              type="button"
              aria-label={showConfirmPassword ? "Hide password" : "Show password"}
              onClick={() => setShowConfirmPassword((visible) => !visible)}
              className="flex h-8 w-8 items-center justify-center rounded-full text-[var(--muted-foreground)] transition hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
            >
              {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <label className="flex items-start gap-3 text-sm text-[var(--muted-foreground)]">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(event) => setAgreed(event.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-[var(--border)] bg-[var(--background)] text-violet-500 focus:ring-violet-500"
          />
          <span>
            I agree to the <span className="font-medium text-violet-500">Terms of Service</span> and <span className="font-medium text-violet-500">Privacy Policy</span>.
          </span>
        </label>

        {status.type !== "idle" ? (
          <div
            className={[
              "flex items-center gap-2 rounded-2xl border px-3 py-2 text-sm",
              status.type === "error"
                ? "border-rose-500/30 bg-rose-500/10 text-rose-500"
                : "border-emerald-500/30 bg-emerald-500/10 text-emerald-500",
            ].join(" ")}
          >
            {status.type === "success" ? <CheckCircle2 className="h-4 w-4" /> : null}
            {status.message}
          </div>
        ) : null}

        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-4 py-3.5 text-sm font-medium text-white shadow-lg shadow-violet-500/20 transition hover:-translate-y-0.5 hover:bg-[var(--primary-strong)] disabled:cursor-not-allowed disabled:opacity-80"
        >
          {loading ? "Creating account..." : "Create Account"}
          {!loading ? <ArrowRight className="h-4 w-4" /> : null}
        </button>
      </form>
    </AuthShell>
  );
}

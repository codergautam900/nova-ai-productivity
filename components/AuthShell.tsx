import Link from "next/link";
import { Sparkles } from "lucide-react";
import ThemeToggleButton from "./ThemeToggleButton";

type AuthShellProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  bottomText: string;
  bottomLinkLabel: string;
  bottomLinkHref: string;
  theme: "light" | "dark";
  onThemeToggle: () => void;
};

export default function AuthShell({
  title,
  subtitle,
  children,
  bottomText,
  bottomLinkLabel,
  bottomLinkHref,
  theme,
  onThemeToggle,
}: AuthShellProps) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.14),transparent_24%),var(--background)] px-4 py-8 text-[var(--foreground)] sm:px-6">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-[var(--foreground)] transition hover:opacity-90">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 shadow-lg shadow-violet-500/30">
              <Sparkles className="h-4 w-4 text-white" />
            </span>
            <span className="text-lg font-semibold tracking-[-0.06em]">NOVA</span>
          </Link>

          <ThemeToggleButton theme={theme} onToggle={onThemeToggle} />
        </header>

        <div className="mx-auto max-w-md rounded-[28px] border border-[var(--border)] bg-[var(--surface)]/80 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-7">
          <div className="mb-6 text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-violet-500">Welcome back</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-[-0.08em] text-[var(--foreground)]">{title}</h1>
            <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">{subtitle}</p>
          </div>

          {children}

          <p className="mt-6 text-center text-sm text-[var(--muted-foreground)]">
            {bottomText}{" "}
            <Link href={bottomLinkHref} className="font-medium text-violet-500 transition hover:text-violet-400">
              {bottomLinkLabel}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

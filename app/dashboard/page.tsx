"use client";

import {
  ArrowRight,
  Bell,
  BrainCircuit,
  CalendarRange,
  CheckCircle2,
  ChevronRight,
  MessageSquareText,
  Plus,
  Search,
  Sparkles,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggleButton from "../../components/ThemeToggleButton";

const statCards = [
  { label: "AI tasks completed", value: "1,248", detail: "+18% vs last week", tone: "bg-violet-500/10 text-violet-500" },
  { label: "Automation runs", value: "96", detail: "Across 12 workflows", tone: "bg-sky-500/10 text-sky-500" },
  { label: "Avg. response time", value: "1.8m", detail: "Faster than target", tone: "bg-emerald-500/10 text-emerald-500" },
  { label: "Team health", value: "94%", detail: "Strong delivery", tone: "bg-amber-500/10 text-amber-500" },
];

const activities = [
  { title: "Weekly strategy brief generated", time: "10 min ago", status: "Ready" },
  { title: "Campaign review approved by legal", time: "32 min ago", status: "Approved" },
  { title: "Sales sequence optimized for Q4", time: "1 hour ago", status: "Synced" },
];

function getPreferredTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "dark";

  const savedTheme = window.localStorage.getItem("nova-theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function DashboardPage() {
  const [theme, setTheme] = useState<"light" | "dark">(getPreferredTheme);

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

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.12),transparent_26%),var(--background)] text-[var(--foreground)]">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-8 flex items-center justify-between gap-4 rounded-[28px] border border-[var(--border)] bg-[var(--surface)]/80 p-4 shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 shadow-lg shadow-violet-500/30">
              <Sparkles className="h-4 w-4 text-white" />
            </span>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-violet-500">NOVA</p>
              <h1 className="text-lg font-semibold tracking-[-0.06em]">Workspace</h1>
            </div>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            {[
              { label: "Overview", active: true },
              { label: "Projects" },
              { label: "Automations" },
              { label: "Insights" },
            ].map((item) => (
              <button
                key={item.label}
                type="button"
                className={[
                  "text-sm font-medium transition",
                  item.active ? "text-[var(--foreground)]" : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]",
                ].join(" ")}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button type="button" className="hidden rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm font-medium text-[var(--foreground)] md:inline-flex">
              <Bell className="h-4 w-4" />
            </button>
            <ThemeToggleButton theme={theme} onToggle={toggleTheme} />
            <Link href="/" className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-violet-500/20 transition hover:bg-[var(--primary-strong)]">
              Go to site
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </header>

        <main className="space-y-6">
          <section className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[30px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--muted-foreground)]">Good morning</p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-[-0.07em] text-[var(--foreground)]">Welcome back, Alex.</h2>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-500">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  System healthy
                </span>
              </div>

              <div className="rounded-[24px] border border-[var(--border)] bg-[linear-gradient(135deg,_rgba(124,58,237,0.12),rgba(14,165,233,0.08))] p-5">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted-foreground)]">Quarterly focus</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.06em] text-[var(--foreground)]">Build automated momentum</h3>
                  </div>
                  <button type="button" className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white shadow-lg shadow-violet-500/20">
                    New workflow
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    { label: "Productivity lift", value: "31%" },
                    { label: "Campaign IQ", value: "87/100" },
                    { label: "Forecast accuracy", value: "96%" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]">{item.label}</p>
                      <p className="mt-3 text-2xl font-semibold tracking-[-0.06em] text-[var(--foreground)]">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="rounded-[30px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--muted-foreground)]">Search</p>
                  <h3 className="mt-2 text-xl font-semibold text-[var(--foreground)]">Quick actions</h3>
                </div>
                <button type="button" className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)]">
                  <Search className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-3">
                {[
                  { title: "Customer insights", icon: BrainCircuit },
                  { title: "Team updates", icon: MessageSquareText },
                  { title: "Launch calendar", icon: CalendarRange },
                ].map(({ title, icon: Icon }) => (
                  <button
                    key={title}
                    type="button"
                    className="flex w-full items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-left transition hover:-translate-y-0.5 hover:border-violet-400/40"
                  >
                    <span className="flex items-center gap-3 text-[var(--foreground)]">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/10 text-violet-500">
                        <Icon className="h-4 w-4" />
                      </span>
                      {title}
                    </span>
                    <ChevronRight className="h-4 w-4 text-[var(--muted-foreground)]" />
                  </button>
                ))}
              </div>
            </aside>
          </section>

          <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {statCards.map(({ label, value, detail, tone }) => (
              <div key={label} className="rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
                <div className={`mb-4 inline-flex rounded-full px-2.5 py-1.5 text-xs font-medium ${tone}`}>{label}</div>
                <div className="text-3xl font-semibold tracking-[-0.07em] text-[var(--foreground)]">{value}</div>
                <p className="mt-2 text-sm text-[var(--muted-foreground)]">{detail}</p>
              </div>
            ))}
          </section>

          <section className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[30px] border border-[var(--border)] bg-[var(--card)] p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--muted-foreground)]">Workflow</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.06em] text-[var(--foreground)]">Today’s priorities</h3>
                </div>
                <span className="rounded-full border border-[var(--border)] bg-[var(--background)] px-2.5 py-1 text-xs font-medium text-[var(--muted-foreground)]">Updated 4m ago</span>
              </div>

              <div className="space-y-4">
                {[
                  { title: "Build project handoff brief", time: "9:00 AM" },
                  { title: "Review launch checklist", time: "11:30 AM" },
                  { title: "Approve AI-assisted response draft", time: "2:15 PM" },
                ].map((item) => (
                  <div key={item.title} className="flex items-center justify-between gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                        <CheckCircle2 className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="font-medium text-[var(--foreground)]">{item.title}</p>
                        <p className="text-sm text-[var(--muted-foreground)]">{item.time}</p>
                      </div>
                    </div>
                    <button type="button" className="rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 text-xs font-medium text-[var(--foreground)]">
                      Open
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-[var(--border)] bg-[var(--card)] p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--muted-foreground)]">Pulse</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.06em] text-[var(--foreground)]">Recent activity</h3>
                </div>
                <button type="button" className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm font-medium text-[var(--foreground)]">
                  <Users className="h-4 w-4" />
                  Team
                </button>
              </div>

              <div className="space-y-4">
                {activities.map((activity) => (
                  <div key={activity.title} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-medium text-[var(--foreground)]">{activity.title}</p>
                      <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-500">
                        {activity.status}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-[var(--muted-foreground)]">{activity.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

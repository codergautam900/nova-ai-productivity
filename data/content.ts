import {
  ArrowRight,
  BarChart3,
  Blocks,
  Bot,
  Briefcase,
  Building2,
  CalendarRange,
  Check,
  Cpu,
  Database,
  Gauge,
  Layers3,
  MessageSquareText,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
  Zap,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const trustedBy = ["Vertex", "Orbit", "Lumio", "Northstar", "Quantix", "ArcLabs"];

export const featureData = [
  {
    icon: Zap,
    title: "AI Task Automation",
    description:
      "Turn repetitive work into autonomous flows with AI that prioritizes, assigns, and executes tasks across your team.",
    stat: "3.2x faster execution",
    glow: "from-violet-500/24 via-violet-500/8 to-transparent",
  },
  {
    icon: CalendarRange,
    title: "Smart Project Planning",
    description:
      "Map timelines, dependencies, and critical paths automatically so teams stay aligned and goals stay realistic.",
    stat: "94% schedule confidence",
    glow: "from-sky-500/24 via-sky-500/8 to-transparent",
  },
  {
    icon: MessageSquareText,
    title: "Real-Time Collaboration",
    description:
      "Keep stakeholders informed with live updates, shared context, and AI-suggested next steps in one workspace.",
    stat: "1.8x engagement",
    glow: "from-cyan-500/24 via-cyan-500/8 to-transparent",
  },
  {
    icon: BarChart3,
    title: "AI Productivity Insights",
    description:
      "Surface bottlenecks, team velocity, and workload balance before they become delivery risks.",
    stat: "40% avg. lift",
    glow: "from-indigo-500/24 via-indigo-500/8 to-transparent",
  },
  {
    icon: Search,
    title: "Intelligent Search",
    description:
      "Find decisions, files, and project history instantly using natural language instead of hunting through threads.",
    stat: "15 min saved daily",
    glow: "from-fuchsia-500/24 via-fuchsia-500/8 to-transparent",
  },
  {
    icon: Workflow,
    title: "Workflow Integrations",
    description:
      "Connect your tools and automate handoffs so work flows from planning to delivery without context switching.",
    stat: "32 integrations",
    glow: "from-emerald-500/24 via-emerald-500/8 to-transparent",
  },
];

export const stats = [
  { value: 10, suffix: "K+", label: "Teams" },
  { value: 2.4, suffix: "M+", label: "Tasks automated" },
  { value: 98.7, suffix: "%", label: "Platform uptime" },
  { value: 40, suffix: "%", label: "Avg productivity gain" },
];

export const solutionCards = [
  {
    icon: Rocket,
    title: "Startups",
    description: "Move fast without operational chaos. NOVA helps lean teams align work, automate busywork, and keep momentum high.",
  },
  {
    icon: Cpu,
    title: "Engineering Teams",
    description: "Ship faster with intelligent workflows, clearer priorities, and AI-guided delivery insights across every sprint.",
  },
  {
    icon: Briefcase,
    title: "Agencies",
    description: "Manage clients, timelines, and resource planning with a single operating layer for project clarity and accountability.",
  },
  {
    icon: Building2,
    title: "Enterprise",
    description: "Scale collaboration, governance, and operational visibility across departments without adding complexity.",
  },
];

export const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Lead",
    company: "Vertex",
    quote:
      "NOVA replaced three different tools for our team. The AI automation alone saves us hours every week.",
  },
  {
    name: "Marcus Reed",
    role: "Engineering Manager",
    company: "Orbit",
    quote:
      "The combination of project visibility and AI insights completely changed how our team plans work.",
  },
  {
    name: "Emily Carter",
    role: "Operations Director",
    company: "Lumio",
    quote:
      "Our teams adopted NOVA incredibly quickly. The interface feels powerful without feeling complicated.",
  },
];

export const pricingPlans = [
  {
    name: "Starter",
    description: "For small teams starting to operate smarter.",
    monthlyPrice: 0,
    annualPrice: 0,
    cta: "Get started",
    highlight: false,
    features: ["Up to 3 workspaces", "Basic automations", "Task tracking", "Email support"],
  },
  {
    name: "Pro",
    description: "For product and operations teams moving at scale.",
    monthlyPrice: 19,
    annualPrice: 15,
    cta: "Start free trial",
    highlight: true,
    features: ["Unlimited projects", "AI workflow builder", "Team analytics", "Priority support"],
  },
  {
    name: "Enterprise",
    description: "For organizations with complex workflows and security requirements.",
    monthlyPrice: null,
    annualPrice: null,
    cta: "Talk to sales",
    highlight: false,
    features: ["Custom security reviews", "SSO and SCIM", "Dedicated onboarding", "Advanced governance"],
  },
];

export const faqs = [
  {
    question: "What is NOVA?",
    answer:
      "NOVA is an AI-powered productivity platform that brings workflows, project visibility, automation, and team collaboration into one unified workspace.",
  },
  {
    question: "Is there a free plan?",
    answer:
      "Yes. The Starter plan is free and gives you a lightweight workspace to manage projects and automate recurring tasks without a credit card.",
  },
  {
    question: "Can NOVA integrate with our existing tools?",
    answer:
      "Absolutely. NOVA connects with common project, communication, and productivity tools so work can flow seamlessly without constant context switching.",
  },
  {
    question: "How does AI automation work?",
    answer:
      "NOVA analyzes your team activity, priorities, and project context to suggest task assignments, detect bottlenecks, and automate routine follow-ups based on your workflow rules.",
  },
  {
    question: "Is my team's data secure?",
    answer:
      "Yes. We apply enterprise-grade security controls, role-based permissions, and secure infrastructure practices to keep your team's data protected at every layer.",
  },
  {
    question: "Can I upgrade or cancel anytime?",
    answer:
      "Yes. You can switch plans or cancel at any time from your workspace settings. No long-term contracts are required for monthly plans.",
  },
];

export const footerLinks = {
  product: ["Features", "Solutions", "Pricing", "Integrations"],
  resources: ["Documentation", "Guides", "Blog", "Support"],
  company: ["About", "Careers", "Contact", "Privacy"],
};

export const dashboardMetrics = [
  { label: "Tasks complete", value: "86%", tone: "violet" },
  { label: "AI automations", value: "24", tone: "cyan" },
  { label: "Team focus", value: "9.4h", tone: "emerald" },
];

export const productBullets = [
  "Align projects, priorities, and team capacity in one place.",
  "Use AI to automate follow-ups, planning, and reporting.",
  "Track performance with actionable productivity insights.",
];

export const steps = [
  { number: "01", title: "Connect your workspace", description: "Sync projects, files, and team context into NOVA in a few minutes." },
  { number: "02", title: "Let NOVA automate the busywork", description: "AI drafts tasks, assigns ownership, and keeps progress moving without manual prompting." },
  { number: "03", title: "Make better decisions with AI insights", description: "See trends, blockers, and opportunities before they impact delivery or team morale." },
];

export const brandMarks = [
  { label: "Vertex", icon: Layers3 },
  { label: "Orbit", icon: Gauge },
  { label: "Lumio", icon: Sparkles },
  { label: "Northstar", icon: Target },
  { label: "Quantix", icon: Database },
  { label: "ArcLabs", icon: Blocks },
];

export const quickSignals = [
  { label: "Sprint health", value: "90%" },
  { label: "Focus score", value: "8.7/10" },
  { label: "Automation gain", value: "+32%" },
];

export const socialLinks = [
  { name: "X", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "GitHub", href: "#" },
  { name: "Dribbble", href: "#" },
];

export const heroBadges = [
  { icon: ShieldCheck, label: "SOC 2 ready" },
  { icon: Bot, label: "AI assistant" },
  { icon: Check, label: "Trusted by teams" },
];

export const snapshotBars = [42, 68, 58, 88, 73, 94];

export const navSectionIds = ["home", "features", "solutions", "pricing", "faq"];

export const visualStats = [
  { label: "Velocity", value: "+28%" },
  { label: "Focus", value: "8.9/10" },
  { label: "Tasks", value: "1.4k" },
];

export const productHighlights = [
  { icon: Sparkles, label: "AI responses" },
  { icon: Workflow, label: "Process flow" },
  { icon: ArrowRight, label: "Next step" },
];

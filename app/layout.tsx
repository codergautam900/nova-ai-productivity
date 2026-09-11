import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import LoadingScreen from "../components/LoadingScreen";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NOVA — Build Better. Work Smarter.",
  description:
    "NOVA is an AI-powered productivity platform that helps teams manage projects, automate workflows, and collaborate smarter.",
  openGraph: {
    title: "NOVA — Build Better. Work Smarter.",
    description:
      "NOVA is an AI-powered productivity platform that helps teams manage projects, automate workflows, and collaborate smarter.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#090b12",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)]">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                try {
                  const saved = localStorage.getItem('nova-theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const theme = saved || (prefersDark ? 'dark' : 'light');
                  document.documentElement.classList.toggle('dark', theme === 'dark');
                  document.documentElement.style.colorScheme = theme;
                } catch (e) {}
              })();
            `,
          }}
        />
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}

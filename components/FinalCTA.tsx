import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 pb-24 pt-8 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[32px] border border-violet-500/20 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.22),transparent_37%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.22),transparent_32%),linear-gradient(135deg,_rgba(17,24,39,0.96),rgba(9,11,23,0.9))] p-8 shadow-[0_0_70px_rgba(124,58,237,0.22)] sm:p-10 lg:p-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-violet-200">Ready to launch</p>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.08em] text-white sm:text-5xl">
            Your team&apos;s next productivity leap starts here.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-300">
            Bring your work, people, and AI together in one intelligent workspace.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
            >
              Start Free
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Talk to Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

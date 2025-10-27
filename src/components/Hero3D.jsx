import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield, Star, MessageCircle } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/30 to-slate-950" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-slate-950 to-transparent" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-20 pb-16 text-center md:pt-28">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs backdrop-blur">
          <Shield className="h-4 w-4 text-emerald-300" />
          <span className="text-emerald-200">Beginner-proof Bubble MVP Guide</span>
        </div>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          EasyFlow — build a friendlier accounting MVP in Bubble
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-200 md:text-lg">
          A step-by-step, no-code playbook to launch a freemium, cross-platform MVP with
          bank sync, receipt scanning, voice invoicing, AI tips, and a playful dashboard.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#guide"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-4 py-2 font-medium text-slate-900 transition hover:bg-emerald-300"
          >
            <Rocket className="h-5 w-5" />
            Start building
          </a>
          <a
            href="#workflows"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 font-medium text-white transition hover:bg-white/10"
          >
            <MessageCircle className="h-5 w-5" />
            View automations
          </a>
        </div>

        <div className="mt-8 flex items-center gap-4 text-sm text-slate-300">
          <div className="inline-flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-300" />
            <span>Free-tier friendly</span>
          </div>
          <div className="inline-flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-300" />
            <span>No custom code required</span>
          </div>
        </div>
      </div>
    </section>
  );
}

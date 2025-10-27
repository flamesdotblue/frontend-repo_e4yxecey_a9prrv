import React from 'react';

export default function Section({ id, icon: Icon, title, subtitle, children }) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-12">
      <div className="mb-6 flex items-start gap-3">
        {Icon ? (
          <div className="mt-1 rounded-lg bg-emerald-500/10 p-2 text-emerald-400 ring-1 ring-emerald-500/20">
            <Icon className="h-5 w-5" />
          </div>
        ) : null}
        <div>
          <h2 className="text-2xl font-semibold text-slate-100 md:text-3xl">{title}</h2>
          {subtitle ? (
            <p className="mt-1 text-slate-300">{subtitle}</p>
          ) : null}
        </div>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-200 shadow-2xl shadow-black/20 backdrop-blur">
        {children}
      </div>
    </section>
  );
}

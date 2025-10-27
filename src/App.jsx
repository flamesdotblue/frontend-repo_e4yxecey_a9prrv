import React from 'react';
import Hero3D from './components/Hero3D';
import BuildGuide from './components/BuildGuide';
import Section from './components/Section';
import WorkflowList from './components/WorkflowList';
import { Plug } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-50">
      <Hero3D />
      <BuildGuide />

      <Section
        id="workflows"
        icon={Plug}
        title="Workflows & automations"
        subtitle="Visual flow summaries you can rebuild 1:1 in Bubble workflows."
      >
        <WorkflowList />
      </Section>

      <footer className="mx-auto max-w-6xl px-6 py-12 text-sm text-slate-400">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <span>EasyFlow • No‑code MVP guide</span>
          <nav className="flex items-center gap-4">
            <a href="#prereqs" className="hover:text-slate-200">Prereqs</a>
            <a href="#db" className="hover:text-slate-200">Database</a>
            <a href="#pages" className="hover:text-slate-200">Pages</a>
            <a href="#plugins" className="hover:text-slate-200">Plugins</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;

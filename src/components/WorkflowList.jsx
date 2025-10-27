import React from 'react';

const items = [
  {
    title: 'On scan: OCR → Categorize → Save → Notify',
    steps: [
      'Button Scan tapped',
      'Call OCR (Bubble OCR or Google Vision via API Connector)',
      'Send text to OpenAI (rules prompt) → get category + confidence',
      'Create Transaction with receipt image + tags',
      'Show toast: “Groceries ✓”'
    ]
  },
  {
    title: 'Plaid connect: Link token → Accounts → Webhook ingest',
    steps: [
      'Create Plaid link token',
      'Open Plaid Link (modal)',
      'On success: store access token (securely)',
      'Schedule backend workflow: poll/ingest transactions'
    ]
  },
  {
    title: 'Daily health check: Score → Emoji → Tips',
    steps: [
      'Every day 8am: calculate budget progress + cashflow',
      'Compute score 0–100 → map to emoji 🙂😬🚀',
      'Create Tip records (plain English) for dashboard'
    ]
  },
  {
    title: 'Voice invoice: Mic → Transcribe → Generate PDF → Send',
    steps: [
      'Record audio → speech-to-text (OpenAI Whisper API or browser)',
      'Create Invoice draft from transcript',
      'Generate PDF (PDFMonkey) with template variables',
      'Send via email and optional SMS (Twilio)'
    ]
  },
  {
    title: 'Freemium gate: Lock premium cards',
    steps: [
      'If current user premium = false → hide/blur premium',
      'Click CTA → open upgrade modal',
      'Offer Stripe link (later) or waitlist form'
    ]
  },
  {
    title: 'Chat advice: Ask → OpenAI → Save thread',
    steps: [
      'User submits question',
      'Send with short rules prompt + safe context',
      'Save Q/A to Messages for history',
      'Show quick actions: categorize last receipt, set budget'
    ]
  },
  {
    title: 'Receipt nudge: Incomplete → Reminder',
    steps: [
      'Detect transactions without receipts',
      'Send in-app nudge + optional SMS reminder'
    ]
  },
  {
    title: 'Budget sliders: Update → Recalc limits',
    steps: [
      'On slider change: update Category.budget',
      'Recalc remaining → update score'
    ]
  },
  {
    title: 'Reports export: Date range → CSV/PDF',
    steps: [
      'User picks range',
      'Do search Transactions by date + category',
      'Download CSV or generate PDF'
    ]
  },
  {
    title: 'Onboarding personas: Sarah/Mike/Lena presets',
    steps: [
      'Pick persona',
      'Create default categories and tips',
      'Skip any accounting jargon'
    ]
  }
];

export default function WorkflowList() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((wf, idx) => (
        <div key={idx} className="rounded-xl border border-white/10 bg-slate-900/50 p-4">
          <h4 className="text-lg font-semibold text-slate-100">{wf.title}</h4>
          <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-slate-300">
            {wf.steps.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}

import React from 'react';
import Section from './Section';
import { Database, Plug, Settings, BarChart3, Camera, Mic, Mail, Lock, CheckCircle, PlayCircle, Smartphone } from 'lucide-react';

export default function BuildGuide() {
  return (
    <div id="guide" className="bg-slate-950">
      <Section
        id="prereqs"
        icon={CheckCircle}
        title="Prerequisites (free tier)"
        subtitle="Plan 60 minutes to set up all accounts before building."
      >
        <ul className="grid gap-2 sm:grid-cols-2">
          <li className="rounded-lg bg-slate-900/60 p-3">Bubble.io account (free). Create a new app: EasyFlow.</li>
          <li className="rounded-lg bg-slate-900/60 p-3">OpenAI API key for chat, categorization, optional speech-to-text.</li>
          <li className="rounded-lg bg-slate-900/60 p-3">Plaid developer account for bank sandbox and Link token.</li>
          <li className="rounded-lg bg-slate-900/60 p-3">Twilio trial for SMS reminders (optional for MVP).</li>
          <li className="rounded-lg bg-slate-900/60 p-3">PDFMonkey free plan for invoice PDF generation.</li>
          <li className="rounded-lg bg-slate-900/60 p-3">Airtable/Google Sheets (optional) for imports.</li>
        </ul>
      </Section>

      <Section id="db" icon={Database} title="Database setup (Bubble Data Types)" subtitle="Simple, human-first schema.">
        <div className="rounded-xl bg-slate-900/60 p-4 font-mono text-sm text-slate-300">
          ERD (text)
          ├─ User
          │   ├ id (auto)
          │   ├ email (text)
          │   ├ name (text)
          │   ├ premium (yes/no)
          │   ├ score (number)
          │   └ persona (text: Sarah | Mike | Lena)
          ├─ Transaction
          │   ├ user (User)
          │   ├ date (date)
          │   ├ amount (number)
          │   ├ category (Category)
          │   ├ description (text)
          │   ├ source (text: plaid | receipt)
          │   └ receipt_image (image)
          ├─ Category
          │   ├ user (User)
          │   ├ name (text)
          │   ├ icon (text)
          │   ├ budget (number)
          │   └ type (text: spend | earn)
          ├─ Invoice
          │   ├ user (User)
          │   ├ customer_name (text)
          │   ├ items (list of text or separate type)
          │   ├ total (number)
          │   ├ pdf_url (text)
          │   └ status (text: draft | sent | paid)
          └─ Message
              ├ user (User)
              ├ role (text: user | assistant)
              ├ content (text)
              └ created_at (date)
        </div>
        <div className="mt-4 text-sm text-slate-300">
          Sample Categories: Groceries, Rent, Fuel, Tools, Kids, Coffee, Income. Add budget per month.
        </div>
      </Section>

      <Section id="pages" icon={Smartphone} title="Page-by-page build" subtitle="Five core screens with drag-drop elements and simple logic.">
        <div className="grid gap-4">
          <GuideCard
            icon={Lock}
            title="Login"
            notes="Email/Google. On success → go to Dashboard."
            bullets={[
              'Place logo top-left; center a card 360x420 with email field + Sign in button.',
              'Add Google login button below (Bubble plugin).',
              'Footer link to Privacy and Terms.'
            ]}
            coords="Card x=Center, y=40%; Green heart icon at x=10, y=20"
          />

          <GuideCard
            icon={BarChart3}
            title="Dashboard"
            notes="Gamified score, emoji calendar, budget sliders, scan button, chat bubble."
            bullets={[
              'Top bar: score badge (big number) + emoji 🙂😬🚀 based on thresholds.',
              'Grid: Today, This Week, This Month mini-cards with totals.',
              'Horizontal list of categories with slider controls.',
              'Primary floating Scan button bottom-right.',
              'Chat bubble fixed bottom-left to open advice panel.'
            ]}
            coords="Score badge x=40, y=40; Scan button x=92%, y=86%"
          />

          <GuideCard
            icon={Camera}
            title="Scanner"
            notes="Photo → OCR → auto-tag with keywords."
            bullets={[
              'Popup: full-screen modal with camera input (mobile) or file uploader.',
              'Preview image; button: Extract text (OCR workflow).',
              'Show suggested category pills; user can confirm or change.'
            ]}
            coords="Scan modal x=0, y=0 (fullscreen)"
          />

          <GuideCard
            icon={Mic}
            title="Invoicing"
            notes="Voice-to-text → PDF → email/SMS send + reminder."
            bullets={[
              'Mic button: start/stop recording; show transcript field.',
              'Add items table (name, qty, price) → auto total.',
              'Generate PDF button → store URL; Send via email + optional SMS.'
            ]}
            coords="Mic button x=24, y=24; PDF button x=80%, y=86%"
          />

          <GuideCard
            icon={Settings}
            title="Settings"
            notes="Plaid connect, persona presets, premium upsell."
            bullets={[
              'Buttons: Connect bank (Plaid), Choose persona, Upgrade.',
              'Show plan badge; lock premium features with blur and CTA.'
            ]}
            coords="Connect button x=40, y=120; Upgrade x=40, y=260"
          />
        </div>
      </Section>

      <Section id="plugins" icon={Plug} title="Plugins & Integrations" subtitle="Use free or dev-tier plugins. No custom code needed today.">
        <ul className="space-y-2 text-slate-300">
          <li>
            Plaid: install Bubble Plaid plugin → Create Link token action → open Plaid Link
            → on success store access token (Bubble secrets) → schedule transaction sync.
          </li>
          <li>
            OpenAI: use Bubble OpenAI plugin or API Connector. Model: gpt-4o-mini for
            categorization and chat. Send concise system prompt with safe rules.
          </li>
          <li>PDFMonkey: set template variables for invoice fields; receive pdf_url.</li>
          <li>Twilio: send SMS reminders and payment nudges (trial supports verified numbers).</li>
        </ul>
      </Section>

      <Section id="freemium" icon={Lock} title="Freemium logic" subtitle="Delight free users; tease premium gracefully.">
        <ul className="list-disc space-y-2 pl-5 text-slate-300">
          <li>If current user's premium is no: hide Forecasts and Advanced reports. Show Upgrade CTA.</li>
          <li>Blur premium cards using conditional formatting; click opens upsell modal.</li>
          <li>Limit bank sync to 1 account on free; 3 on premium.</li>
        </ul>
      </Section>

      <Section id="testing" icon={PlayCircle} title="Testing & debugging" subtitle="Five real-world scenarios to validate.">
        <ol className="list-decimal space-y-2 pl-5 text-slate-300">
          <li>Sarah scans a grocery receipt → expect auto-tag “Groceries” with confidence ≥ 0.7.</li>
          <li>Mike connects Plaid sandbox → transactions appear within 1–2 min.</li>
          <li>Lena records voice invoice → PDF generated and email delivered.</li>
          <li>Change budget sliders → dashboard score updates instantly.</li>
          <li>Ask the chat “Why is my score down?” → gets 1–2 actionable tips.</li>
        </ol>
        <div className="mt-4 text-slate-400 text-sm">
          Common fixes: confirm API keys, check privacy rules for data types, enable CORS in plugins, inspect workflow logs, reduce prompt size.
        </div>
      </Section>

      <Section id="deploy" icon={Settings} title="Deployment & scale" subtitle="Ship as a PWA now; keep a path to native and code.">
        <ul className="list-disc space-y-2 pl-5 text-slate-300">
          <li>Enable Bubble responsive settings and PWA manifest. Add icons and splash screens.</li>
          <li>Connect a custom domain when ready; set up privacy policy and terms.</li>
          <li>Add analytics (Plausible/Google Analytics) via header script.</li>
          <li>Migration path: when scaling, move AI and heavy logic to a backend (FastAPI) and use Bubble as UI, or rebuild with React Native sharing database.</li>
        </ul>
        <div className="mt-4 rounded-lg bg-emerald-500/10 p-4 text-emerald-200">
          Quick wins: reusable scanner popup, budget slider row, and chat bubble element—copy to multiple pages for speed.
        </div>
      </Section>
    </div>
  );
}

function GuideCard({ icon: Icon, title, notes, bullets, coords }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
      <div className="mb-2 flex items-center gap-2">
        <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-400 ring-1 ring-emerald-500/20">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
      </div>
      <p className="text-sm text-slate-300">{notes}</p>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      <div className="mt-3 text-xs text-slate-400">Layout refs: {coords}</div>
    </div>
  );
}

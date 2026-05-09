import { createFileRoute } from "@tanstack/react-router";
import { PCard } from "@/components/processiq/Card";
import { useState } from "react";

export const Route = createFileRoute("/_app/settings")({
  head: () => ({ meta: [{ title: "Settings — ProcessIQ" }] }),
  component: Settings,
});

const tabs = ["Company profile", "Upload preferences", "Notifications", "AI analysis"];

function Settings() {
  const [tab, setTab] = useState(0);
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Settings</h1>
        <p className="text-sm text-muted-foreground">Manage your workspace, uploads and AI preferences.</p>
      </div>

      <div className="flex flex-wrap gap-1 rounded-xl border border-subtle bg-card p-1">
        {tabs.map((t,i)=>(
          <button key={t} onClick={()=>setTab(i)} className={`rounded-lg px-4 py-2 text-sm transition ${tab===i?"bg-gradient-primary text-primary-foreground shadow-glow":"text-muted-foreground hover:bg-muted hover:text-foreground"}`}>{t}</button>
        ))}
      </div>

      {tab===0 && (
        <PCard>
          <SectionTitle title="Company profile" sub="Used in your reports and exports." />
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Company name" defaultValue="Northwind Co." />
            <Field label="Industry" defaultValue="Logistics & Distribution" />
            <Field label="Country" defaultValue="United States" />
            <Field label="Currency" defaultValue="USD" />
            <Field label="Fiscal year start" defaultValue="January" />
            <Field label="Team size" defaultValue="11–50" />
          </div>
          <div className="mt-6 flex justify-end gap-2"><button className="btn-ghost">Cancel</button><button className="btn-primary">Save changes</button></div>
        </PCard>
      )}
      {tab===1 && (
        <PCard>
          <SectionTitle title="Upload preferences" sub="How we interpret your spreadsheets." />
          <div className="space-y-4">
            <Toggle label="Auto-detect column headers" desc="Read the first row as field names." defaultChecked />
            <Toggle label="Skip empty rows" desc="Ignore fully blank rows during analysis." defaultChecked />
            <Toggle label="Treat negative values as refunds" desc="Useful for accounting exports." />
            <Field label="Default date format" defaultValue="YYYY-MM-DD" />
          </div>
        </PCard>
      )}
      {tab===2 && (
        <PCard>
          <SectionTitle title="Notification preferences" sub="Decide where and when we reach out." />
          <div className="space-y-4">
            <Toggle label="Email me when an analysis finishes" defaultChecked />
            <Toggle label="Critical alerts (overdue, suspicious)" defaultChecked />
            <Toggle label="Weekly executive summary" defaultChecked />
            <Toggle label="Product updates and tips" />
          </div>
        </PCard>
      )}
      {tab===3 && (
        <PCard>
          <SectionTitle title="AI analysis preferences" sub="Tune how aggressive the AI should be." />
          <div className="space-y-5">
            <div>
              <div className="mb-2 flex items-center justify-between text-sm"><span>Anomaly sensitivity</span><span className="text-muted-foreground">Balanced</span></div>
              <input type="range" defaultValue={60} className="w-full accent-[oklch(0.65_0.20_265)]" />
            </div>
            <Toggle label="Detect duplicate suppliers (fuzzy match)" defaultChecked />
            <Toggle label="Flag values above historical average (3σ)" defaultChecked />
            <Toggle label="Generate plain-English insights" defaultChecked />
          </div>
        </PCard>
      )}
    </div>
  );
}

function SectionTitle({ title, sub }: { title: string; sub: string }) { return <div className="mb-6"><div className="font-semibold">{title}</div><div className="text-xs text-muted-foreground">{sub}</div></div>; }
function Field({ label, defaultValue }: { label: string; defaultValue?: string }) { return <label className="block"><div className="mb-1.5 text-xs font-medium text-muted-foreground">{label}</div><input className="input" defaultValue={defaultValue}/></label>; }
function Toggle({ label, desc, defaultChecked }: { label: string; desc?: string; defaultChecked?: boolean }) {
  const [on, setOn] = useState(!!defaultChecked);
  return (
    <div className="flex items-start justify-between gap-4 rounded-lg border border-subtle bg-background/40 p-4">
      <div><div className="text-sm font-medium">{label}</div>{desc && <div className="text-xs text-muted-foreground">{desc}</div>}</div>
      <button onClick={()=>setOn(!on)} className={`relative h-6 w-11 rounded-full transition ${on?"bg-gradient-primary":"bg-muted"}`}>
        <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-background shadow transition ${on?"left-[22px]":"left-0.5"}`} />
      </button>
    </div>
  );
}

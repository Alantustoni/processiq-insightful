import { createFileRoute } from "@tanstack/react-router";
import { PCard } from "@/components/processiq/Card";
import { FileDown, FileSpreadsheet } from "lucide-react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { monthlyVolume } from "@/lib/mock-data";

export const Route = createFileRoute("/_app/reports")({
  head: () => ({ meta: [{ title: "Reports — ProcessIQ" }] }),
  component: Reports,
});

function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Reports</h1>
          <p className="text-sm text-muted-foreground">Executive-ready summaries of your operational performance.</p>
        </div>
        <div className="flex gap-2">
          <button className="btn-outline"><FileDown className="h-3.5 w-3.5" /> Export PDF</button>
          <button className="btn-outline"><FileSpreadsheet className="h-3.5 w-3.5" /> Export Excel</button>
        </div>
      </div>

      <PCard className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-40" />
        <div className="relative">
          <div className="text-xs uppercase tracking-wider text-primary">Executive summary</div>
          <h2 className="mt-2 text-xl font-semibold">May 2026 — Operations report</h2>
          <p className="mt-3 max-w-3xl text-sm text-muted-foreground">
            Operational performance improved this month. We analyzed <strong className="text-foreground">12,480 records</strong> across <strong className="text-foreground">48 suppliers</strong>, with a <strong className="text-foreground">12% drop in detected errors</strong> and an <strong className="text-foreground">8-point increase in your Health Score</strong>. Three duplicate vendors were identified — merging them is projected to save approximately <strong className="text-foreground">$4,200/quarter</strong> in duplicated payments.
          </p>
        </div>
      </PCard>

      <div className="grid gap-4 lg:grid-cols-3">
        <PCard className="lg:col-span-2">
          <div className="mb-3 text-sm font-semibold">Financial overview</div>
          <div className="h-64">
            <ResponsiveContainer>
              <BarChart data={monthlyVolume}>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(1 0 0 / 0.06)" />
                <XAxis dataKey="month" stroke="oklch(0.7 0 0)" fontSize={12} />
                <YAxis stroke="oklch(0.7 0 0)" fontSize={12} tickFormatter={(v)=>`$${v/1000}k`} />
                <Tooltip contentStyle={{ background: "oklch(0.20 0.025 265)", border: "1px solid oklch(0.28 0.025 265)", borderRadius: 12, fontSize: 12 }} />
                <Bar dataKey="volume" fill="oklch(0.70 0.18 300)" radius={[6,6,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </PCard>
        <PCard>
          <div className="mb-3 text-sm font-semibold">Operational score</div>
          <div className="flex items-center justify-center py-6">
            <div className="relative h-40 w-40">
              <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
                <circle cx="50" cy="50" r="42" stroke="oklch(0.28 0.025 265)" strokeWidth="10" fill="none" />
                <circle cx="50" cy="50" r="42" stroke="url(#sg)" strokeWidth="10" fill="none" strokeDasharray="263" strokeDashoffset="42" strokeLinecap="round" />
                <defs><linearGradient id="sg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="oklch(0.65 0.20 265)"/><stop offset="100%" stopColor="oklch(0.70 0.18 300)"/></linearGradient></defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center"><div className="text-3xl font-semibold">84</div><div className="text-xs text-muted-foreground">/ 100</div></div>
            </div>
          </div>
          <div className="text-center text-xs text-muted-foreground">+8 points vs last month</div>
        </PCard>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <PCard>
          <div className="mb-3 text-sm font-semibold">Error summary</div>
          <div className="space-y-2 text-sm">
            {[
              ["Duplicate suppliers", 14, "warning"],
              ["Suspicious values", 9, "destructive"],
              ["Missing data", 6, "info"],
              ["Overdue payments", 11, "destructive"],
            ].map(([n,v,c]: any)=>(
              <div key={n} className="flex items-center justify-between rounded-lg border border-subtle bg-background/40 px-3 py-2">
                <span>{n}</span>
                <span className={`rounded-full px-2 py-0.5 text-[11px] bg-${c}/15 text-${c}`}>{v}</span>
              </div>
            ))}
          </div>
        </PCard>
        <PCard>
          <div className="mb-3 text-sm font-semibold">Recommendations</div>
          <ul className="space-y-3 text-sm">
            <li className="rounded-lg border border-subtle bg-background/40 p-3">Merge 3 duplicate supplier records this week.</li>
            <li className="rounded-lg border border-subtle bg-background/40 p-3">Set automated reminders 5 days before due dates.</li>
            <li className="rounded-lg border border-subtle bg-background/40 p-3">Review Helix Labs invoice pattern with the requester.</li>
            <li className="rounded-lg border border-subtle bg-background/40 p-3">Move Stellar Freight to monthly contract review.</li>
          </ul>
        </PCard>
      </div>
    </div>
  );
}

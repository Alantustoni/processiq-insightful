import { createFileRoute } from "@tanstack/react-router";
import { PCard } from "@/components/processiq/Card";
import { Tag } from "@/components/processiq/Badge";
import { records } from "@/lib/mock-data";
import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, Download } from "lucide-react";

export const Route = createFileRoute("/_app/analysis")({
  head: () => ({ meta: [{ title: "Analysis — ProcessIQ" }] }),
  component: Analysis,
});

function Analysis() {
  const [status, setStatus] = useState("All");
  const [risk, setRisk] = useState("All");
  const [category, setCategory] = useState("All");
  const [q, setQ] = useState("");

  const categories = ["All", ...Array.from(new Set(records.map(r => r.category)))];
  const filtered = useMemo(() => records.filter(r =>
    (status === "All" || r.status === status) &&
    (risk === "All" || r.risk === risk) &&
    (category === "All" || r.category === category) &&
    (q === "" || r.supplier.toLowerCase().includes(q.toLowerCase()) || r.id.includes(q))
  ), [status, risk, category, q]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Analysis results</h1>
          <p className="text-sm text-muted-foreground">{filtered.length} of {records.length} records · suppliers_april_2026.xlsx</p>
        </div>
        <div className="flex gap-2">
          <button className="btn-outline"><Download className="h-3.5 w-3.5" /> Export CSV</button>
          <button className="btn-outline"><SlidersHorizontal className="h-3.5 w-3.5" /> Columns</button>
        </div>
      </div>

      <PCard className="!p-4">
        <div className="flex flex-wrap items-center gap-2">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search supplier or ID…" className="input pl-9" />
          </div>
          <Select label="Status" value={status} onChange={setStatus} options={["All","Paid","Pending","Overdue"]} />
          <Select label="Risk" value={risk} onChange={setRisk} options={["All","Low","Medium","High"]} />
          <Select label="Category" value={category} onChange={setCategory} options={categories} />
          <input type="date" className="input w-[160px]" defaultValue="2026-05-01" />
          <span className="text-xs text-muted-foreground">to</span>
          <input type="date" className="input w-[160px]" defaultValue="2026-06-30" />
        </div>
      </PCard>

      <PCard className="!p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b border-subtle bg-background/40 text-left text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr>{["ID","Supplier","Category","Due date","Amount","Status","Risk","Issue"].map(h=>(<th key={h} className="px-4 py-3 font-medium">{h}</th>))}</tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filtered.map(r=>(
                <tr key={r.id} className="transition hover:bg-muted/40">
                  <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{r.id}</td>
                  <td className="px-4 py-3 font-medium">{r.supplier}</td>
                  <td className="px-4 py-3 text-muted-foreground">{r.category}</td>
                  <td className="px-4 py-3 text-muted-foreground">{r.dueDate}</td>
                  <td className="px-4 py-3 tabular-nums">${r.amount.toLocaleString()}</td>
                  <td className="px-4 py-3"><Tag variant={r.status}>{r.status}</Tag></td>
                  <td className="px-4 py-3"><Tag variant={r.risk}>{r.risk}</Tag></td>
                  <td className="px-4 py-3">{r.issue ? <Tag variant={r.issue}>{r.issue}</Tag> : <span className="text-xs text-muted-foreground">—</span>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </PCard>
    </div>
  );
}

function Select({ label, value, onChange, options }: any) {
  return (
    <label className="inline-flex items-center gap-2 text-xs text-muted-foreground">
      {label}
      <select value={value} onChange={(e)=>onChange(e.target.value)} className="input h-9 w-auto pr-8 text-xs">
        {options.map((o: string)=>(<option key={o} value={o}>{o}</option>))}
      </select>
    </label>
  );
}

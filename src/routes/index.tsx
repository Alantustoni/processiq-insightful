import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BarChart3, BrainCircuit, ShieldCheck, Sparkles, Upload, Zap, Check, FileSpreadsheet, AlertTriangle, TrendingUp, Bell } from "lucide-react";
import { Logo } from "@/components/processiq/Logo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ProcessIQ — Turn spreadsheets into business intelligence" },
      { name: "description", content: "ProcessIQ helps small businesses automate analysis, detect errors, monitor payments, and generate smart operational insights from spreadsheets." },
      { property: "og:title", content: "ProcessIQ — Business Intelligence for small teams" },
      { property: "og:description", content: "Upload Excel or CSV. Get instant insights, error detection and operational health scores." },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* nav */}
      <header className="sticky top-0 z-40 border-b border-subtle glass">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#features" className="hover:text-foreground">Features</a>
            <a href="#preview" className="hover:text-foreground">Product</a>
            <a href="#pricing" className="hover:text-foreground">Pricing</a>
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/login" className="hidden text-sm text-muted-foreground hover:text-foreground sm:block">Sign in</Link>
            <Link to="/signup" className="rounded-lg bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow transition hover:opacity-90">Start Free</Link>
          </div>
        </div>
      </header>

      {/* hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-glow" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 md:pt-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-subtle bg-card/50 px-3 py-1 text-xs text-muted-foreground">
              <Sparkles className="h-3 w-3 text-primary" />
              AI-powered spreadsheet intelligence
            </div>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
              Transform messy spreadsheets into <span className="text-gradient">intelligent business decisions.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
              ProcessIQ helps small businesses automate analysis, detect errors, monitor payments, and generate smart operational insights from spreadsheets.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/signup" className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow transition hover:opacity-90">
                Start Free <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/dashboard" className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-muted">
                View Demo
              </Link>
            </div>
            <div className="mt-6 text-xs text-muted-foreground">No credit card required · 14-day Pro trial</div>
          </div>

          {/* hero preview card */}
          <div className="relative mx-auto mt-16 max-w-5xl">
            <div className="absolute inset-x-10 -top-10 h-40 rounded-full bg-primary/30 blur-3xl" />
            <div className="relative rounded-2xl border border-subtle bg-card/80 p-2 shadow-card backdrop-blur">
              <div className="rounded-xl border border-subtle bg-background p-6">
                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    { l: "Records analyzed", v: "12,480", d: "+8.2%" },
                    { l: "Errors detected", v: "37", d: "-12%" },
                    { l: "Health score", v: "84", d: "+8 pts" },
                  ].map((m) => (
                    <div key={m.l} className="rounded-xl border border-subtle bg-card p-4">
                      <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{m.l}</div>
                      <div className="mt-2 text-2xl font-semibold">{m.v}</div>
                      <div className="text-xs text-success">{m.d}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-5">
                  <div className="md:col-span-3 rounded-xl border border-subtle bg-card p-4">
                    <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground"><span>Monthly payment volume</span><span className="text-primary">↗ Trending up</span></div>
                    <div className="flex h-32 items-end gap-2">
                      {[40,55,38,62,70,84,96].map((h,i)=>(<div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-primary/20 to-primary/80" style={{height:`${h}%`}} />))}
                    </div>
                  </div>
                  <div className="md:col-span-2 rounded-xl border border-subtle bg-card p-4">
                    <div className="mb-3 text-xs text-muted-foreground">AI insights</div>
                    <ul className="space-y-2 text-xs">
                      <li className="flex items-start gap-2"><BrainCircuit className="mt-0.5 h-3.5 w-3.5 text-accent" /> 12 payments due in 7 days</li>
                      <li className="flex items-start gap-2"><AlertTriangle className="mt-0.5 h-3.5 w-3.5 text-warning" /> 3 duplicate suppliers</li>
                      <li className="flex items-start gap-2"><TrendingUp className="mt-0.5 h-3.5 w-3.5 text-success" /> Health score +8% MoM</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* problem */}
      <section className="border-t border-subtle py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-center">
          <div>
            <div className="text-xs font-medium uppercase tracking-wider text-primary">The problem</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Your business runs on spreadsheets — and they're costing you.</h2>
            <p className="mt-4 text-muted-foreground">Small teams lose hours every week chasing duplicate suppliers, late payments and silent data errors hiding inside Excel. No one sees the picture until something breaks.</p>
            <ul className="mt-6 space-y-3 text-sm">
              {["Hidden duplicates inflate costs and approvals","Manual reconciliation eats finance hours","Late payments quietly damage supplier trust","No single source of truth across files"].map(t=>(
                <li key={t} className="flex items-start gap-3"><div className="mt-0.5 rounded-md bg-destructive/15 p-1 text-destructive"><AlertTriangle className="h-3.5 w-3.5" /></div>{t}</li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-subtle bg-card p-6 shadow-card">
              <div className="flex items-center gap-2 border-b border-subtle pb-3 text-xs text-muted-foreground"><FileSpreadsheet className="h-4 w-4" /> suppliers_april.xlsx</div>
              <div className="mt-3 space-y-1.5 font-mono text-[11px]">
                {[
                  ["Acme Logistics","$4,820","Pending","ok"],
                  ["Acme Logistic","$4,810","Pending","dup"],
                  ["BlueOcean Sup","$12,300","Overdue","warn"],
                  ["Northwind Co.","$980","Pending","ok"],
                  ["Helix Labs","$18,250","Pending","susp"],
                ].map((r,i)=>(
                  <div key={i} className={`grid grid-cols-4 gap-2 rounded-md px-2 py-1.5 ${r[3]==="dup"?"bg-warning/10":r[3]==="warn"?"bg-destructive/10":r[3]==="susp"?"bg-destructive/15":"bg-muted/40"}`}>
                    <div className="truncate">{r[0]}</div><div>{r[1]}</div><div className="text-muted-foreground">{r[2]}</div>
                    <div className="text-right text-[10px] uppercase tracking-wider">
                      {r[3]==="dup" && <span className="text-warning">duplicate</span>}
                      {r[3]==="warn" && <span className="text-destructive">overdue</span>}
                      {r[3]==="susp" && <span className="text-destructive">suspicious</span>}
                      {r[3]==="ok" && <span className="text-muted-foreground">ok</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* solution */}
      <section className="border-t border-subtle bg-card/30 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="text-xs font-medium uppercase tracking-wider text-accent">The solution</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Upload a file. Get a full operational picture in seconds.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">ProcessIQ reads your spreadsheets, normalizes the data, finds anomalies, and turns it into a dashboard your whole team understands.</p>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            {[
              { icon: Upload, t: "1. Upload", d: "Drag and drop Excel or CSV. We map columns automatically." },
              { icon: BrainCircuit, t: "2. Analyze", d: "AI scans every row for errors, duplicates and anomalies." },
              { icon: BarChart3, t: "3. Decide", d: "A live dashboard with insights, alerts and exportable reports." },
            ].map((s) => (
              <div key={s.t} className="rounded-2xl border border-subtle bg-card p-6 text-left transition hover:border-primary/40">
                <div className="inline-flex rounded-lg bg-gradient-primary p-2.5 text-primary-foreground shadow-glow"><s.icon className="h-5 w-5" /></div>
                <div className="mt-4 text-lg font-semibold">{s.t}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* features */}
      <section id="features" className="border-t border-subtle py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Everything finance and operations need.</h2>
            <p className="mt-3 text-muted-foreground">Six powerful modules in one workspace. No more juggling tabs and pivot tables.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { i: Zap, t: "Instant analysis", d: "Process thousands of rows in seconds with smart column detection." },
              { i: ShieldCheck, t: "Error detection", d: "Find duplicates, missing fields and suspicious values automatically." },
              { i: Bell, t: "Smart alerts", d: "Get notified about overdue payments, anomalies and supplier risk." },
              { i: BrainCircuit, t: "AI insights", d: "Plain-English summaries of what changed and what to do next." },
              { i: BarChart3, t: "Visual dashboards", d: "Beautiful charts that update with every new file you upload." },
              { i: FileSpreadsheet, t: "Export anywhere", d: "PDF executive reports and Excel exports for your stakeholders." },
            ].map((f) => (
              <div key={f.t} className="group rounded-2xl border border-subtle bg-card p-6 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-glow">
                <div className="inline-flex rounded-lg border border-subtle bg-background p-2.5 text-primary"><f.i className="h-5 w-5" /></div>
                <div className="mt-4 font-semibold">{f.t}</div>
                <div className="mt-1 text-sm text-muted-foreground">{f.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* preview */}
      <section id="preview" className="border-t border-subtle bg-card/30 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-medium uppercase tracking-wider text-primary">The dashboard</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">A control center built for clarity.</h2>
          </div>
          <div className="relative mt-12 rounded-2xl border border-subtle bg-card p-2 shadow-card">
            <img alt="Dashboard preview" className="rounded-xl"
              src="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'%3E%3Crect width='1200' height='600' fill='%23161826'/%3E%3C/svg%3E" />
            <div className="absolute inset-2 grid grid-cols-12 gap-3 p-4">
              {[0,1,2,3].map(i=>(<div key={i} className="col-span-3 rounded-xl border border-subtle bg-background/60 p-3"><div className="h-2 w-12 rounded bg-muted" /><div className="mt-3 h-5 w-20 rounded bg-foreground/80" /><div className="mt-2 h-1.5 w-24 rounded bg-primary/60" /></div>))}
              <div className="col-span-8 rounded-xl border border-subtle bg-background/60 p-3">
                <div className="flex h-40 items-end gap-2">
                  {[35,52,40,68,55,80,72,90,65,78,88,96].map((h,i)=>(<div key={i} className="flex-1 rounded-t bg-gradient-to-t from-primary/30 to-accent" style={{height:`${h}%`}}/>))}
                </div>
              </div>
              <div className="col-span-4 rounded-xl border border-subtle bg-background/60 p-3">
                {["Acme Logistics","BlueOcean","Northwind","Helix Labs","Vertex Cloud"].map(s=>(<div key={s} className="flex items-center justify-between border-b border-subtle py-1.5 text-[10px] last:border-0"><span className="text-muted-foreground">{s}</span><span className="rounded bg-primary/15 px-1.5 py-0.5 text-primary">live</span></div>))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* pricing */}
      <section id="pricing" className="border-t border-subtle py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Simple pricing. Built for small teams.</h2>
            <p className="mt-3 text-muted-foreground">Start free. Upgrade when you're ready.</p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            {[
              { name: "Free", price: "$0", desc: "For solo founders", features: ["Up to 50 analyses/mo","1 user","Basic insights","CSV & Excel"], cta: "Start Free" },
              { name: "Pro", price: "$29", desc: "Most popular", features: ["Unlimited analyses","5 users","AI insights","PDF & Excel exports","Priority alerts"], cta: "Start trial", highlight: true },
              { name: "Business", price: "$79", desc: "For growing teams", features: ["Everything in Pro","Unlimited users","API access","Custom rules","SLA support"], cta: "Contact sales" },
            ].map(p=>(
              <div key={p.name} className={`relative rounded-2xl border p-6 ${p.highlight?"border-primary/60 bg-card shadow-glow":"border-subtle bg-card"}`}>
                {p.highlight && <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider">Recommended</div>}
                <div className="text-sm text-muted-foreground">{p.name}</div>
                <div className="mt-2 flex items-baseline gap-1"><span className="text-4xl font-semibold">{p.price}</span><span className="text-sm text-muted-foreground">/mo</span></div>
                <div className="mt-1 text-xs text-muted-foreground">{p.desc}</div>
                <ul className="mt-6 space-y-2 text-sm">
                  {p.features.map(f=>(<li key={f} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-success" />{f}</li>))}
                </ul>
                <Link to="/signup" className={`mt-6 block w-full rounded-lg px-4 py-2 text-center text-sm font-medium ${p.highlight?"bg-gradient-primary text-primary-foreground shadow-glow":"border border-border bg-background hover:bg-muted"}`}>{p.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="border-t border-subtle py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
          <Logo />
          <div>© 2026 ProcessIQ. Built for the spreadsheet-first generation.</div>
          <div className="flex gap-4"><a href="#" className="hover:text-foreground">Privacy</a><a href="#" className="hover:text-foreground">Terms</a><a href="#" className="hover:text-foreground">Contact</a></div>
        </div>
      </footer>
    </div>
  );
}

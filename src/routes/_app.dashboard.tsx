import { createFileRoute, Link } from "@tanstack/react-router";
import { StatCard, PCard } from "@/components/processiq/Card";
import { FileSpreadsheet, AlertTriangle, Calendar, Copy, Activity, DollarSign, Sparkles, ArrowUpRight } from "lucide-react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts";
import { monthlyVolume, errorTypes, dueDates, supplierRisk } from "@/lib/mock-data";

export const Route = createFileRoute("/_app/dashboard")({
  head: () => ({ meta: [{ title: "Painel — ProcessIQ" }] }),
  component: Dashboard,
});

const PIE = ["oklch(0.65 0.20 265)", "oklch(0.70 0.18 300)", "oklch(0.72 0.15 200)", "oklch(0.78 0.16 75)"];

function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Painel operacional</h1>
          <p className="text-sm text-muted-foreground">Resumo inteligente dos seus arquivos, vencimentos e riscos.</p>
        </div>
        <Link to="/upload" className="btn-primary"><FileSpreadsheet className="mr-2 h-4 w-4" />Enviar nova planilha</Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <StatCard label="Registros analisados" value="12.480" delta="+8,2% vs mês anterior" icon={Activity} accent="primary" />
        <StatCard label="Valor monitorado" value="R$ 248.900" delta="48 fornecedores ativos" icon={DollarSign} accent="primary" />
        <StatCard label="Erros encontrados" value="37" delta="-12% vs mês anterior" icon={AlertTriangle} accent="destructive" />
        <StatCard label="Pagamentos próximos" value="18" delta="Vencem em 7 dias" icon={Calendar} accent="accent" />
        <StatCard label="Fornecedores duplicados" value="3" delta="2 resolvidos esta semana" icon={Copy} accent="warning" />
        <StatCard label="Saúde operacional" value="84 / 100" delta="+8 pts no mês" icon={Sparkles} accent="success" />
      </div>

      {/* AI insights */}
      <PCard className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-50" />
        <div className="relative">
          <div className="flex items-center gap-2 text-sm font-medium"><Sparkles className="h-4 w-4 text-primary" /> Resumo inteligente</div>
          <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "18 pagamentos vencem nos próximos 7 dias.", k: "Programar transferências", c: "info" },
              { t: "3 fornecedores podem estar duplicados.", k: "Revisar cadastros", c: "warning" },
              { t: "37 registros precisam de revisão.", k: "Ver detalhes", c: "destructive" },
              { t: "R$ 18.250,00 foi identificado como valor fora do padrão.", k: "Validar lançamento", c: "success" },
            ].map((i) => (
              <div key={i.t} className="rounded-xl border border-subtle bg-background/60 p-4 backdrop-blur transition hover:border-primary/40">
                <div className="text-sm leading-snug">{i.t}</div>
                <button className="mt-3 inline-flex items-center gap-1 text-xs text-primary hover:underline">{i.k} <ArrowUpRight className="h-3 w-3" /></button>
              </div>
            ))}
          </div>
        </div>
      </PCard>

      <div className="grid gap-4 lg:grid-cols-3">
        <PCard className="lg:col-span-2">
          <Header title="Volume financeiro mensal" sub="Últimos 7 meses" />
          <div className="h-64">
            <ResponsiveContainer>
              <AreaChart data={monthlyVolume}>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.65 0.20 265)" stopOpacity={0.6} />
                    <stop offset="100%" stopColor="oklch(0.65 0.20 265)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(1 0 0 / 0.06)" />
                <XAxis dataKey="month" stroke="oklch(0.7 0 0)" fontSize={12} />
                <YAxis stroke="oklch(0.7 0 0)" fontSize={12} tickFormatter={(v)=>`R$ ${v/1000}k`} />
                <Tooltip contentStyle={{ background: "oklch(0.20 0.025 265)", border: "1px solid oklch(0.28 0.025 265)", borderRadius: 12, fontSize: 12 }} />
                <Area type="monotone" dataKey="volume" stroke="oklch(0.65 0.20 265)" strokeWidth={2} fill="url(#g1)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </PCard>

        <PCard>
          <Header title="Distribuição de erros" sub="Este mês" />
          <div className="h-64">
            <ResponsiveContainer>
              <PieChart>
                <Pie data={errorTypes} dataKey="value" innerRadius={50} outerRadius={80} paddingAngle={3}>
                  {errorTypes.map((_, i) => <Cell key={i} fill={PIE[i % PIE.length]} />)}
                </Pie>
                <Legend wrapperStyle={{ fontSize: 11 }} />
                <Tooltip contentStyle={{ background: "oklch(0.20 0.025 265)", border: "1px solid oklch(0.28 0.025 265)", borderRadius: 12, fontSize: 12 }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </PCard>

        <PCard>
          <Header title="Vencimentos próximos" sub="Próximos 7 dias" />
          <div className="h-56">
            <ResponsiveContainer>
              <BarChart data={dueDates}>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(1 0 0 / 0.06)" />
                <XAxis dataKey="day" stroke="oklch(0.7 0 0)" fontSize={12} />
                <YAxis stroke="oklch(0.7 0 0)" fontSize={12} />
                <Tooltip contentStyle={{ background: "oklch(0.20 0.025 265)", border: "1px solid oklch(0.28 0.025 265)", borderRadius: 12, fontSize: 12 }} />
                <Bar dataKey="count" fill="oklch(0.70 0.18 230)" radius={[6,6,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </PCard>

        <PCard className="lg:col-span-2">
          <Header title="Risco por fornecedor" sub="48 fornecedores ativos" />
          <div className="grid grid-cols-3 gap-4">
            {supplierRisk.map((r,i)=>(
              <div key={r.name} className="rounded-xl border border-subtle bg-background/40 p-4">
                <div className="text-xs text-muted-foreground">Risco {r.name.toLowerCase()}</div>
                <div className="mt-2 text-2xl font-semibold">{r.value}</div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">
                  <div className="h-full" style={{ width: `${(r.value/48)*100}%`, background: PIE[i] }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 space-y-2">
            {[
              { n: "Tech Serviços ME", r: "Alto", d: "Valor 43% acima da média histórica" },
              { n: "Transportes Estrela", r: "Alto", d: "Atrasos nos últimos 3 pagamentos" },
              { n: "Mercado Central Ltda / LTDA", r: "Médio", d: "Possível fornecedor duplicado" },
            ].map((s)=>(
              <div key={s.n} className="flex items-center justify-between rounded-lg border border-subtle bg-background/40 px-3 py-2 text-sm">
                <div><div className="font-medium">{s.n}</div><div className="text-xs text-muted-foreground">{s.d}</div></div>
                <span className={`rounded-full px-2 py-0.5 text-[11px] ${s.r==="Alto"?"bg-destructive/15 text-destructive":"bg-warning/15 text-warning"}`}>{s.r}</span>
              </div>
            ))}
          </div>
        </PCard>
      </div>
    </div>
  );
}

function Header({ title, sub }: { title: string; sub?: string }) {
  return <div className="mb-4 flex items-end justify-between"><div><div className="text-sm font-semibold">{title}</div>{sub && <div className="text-xs text-muted-foreground">{sub}</div>}</div></div>;
}

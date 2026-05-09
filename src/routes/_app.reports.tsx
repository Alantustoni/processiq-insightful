import { createFileRoute } from "@tanstack/react-router";
import { PCard } from "@/components/processiq/Card";
import { FileDown, FileSpreadsheet } from "lucide-react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { monthlyVolume } from "@/lib/mock-data";

export const Route = createFileRoute("/_app/reports")({
  head: () => ({ meta: [{ title: "Relatórios — ProcessIQ" }] }),
  component: Reports,
});

function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Relatórios executivos</h1>
          <p className="text-sm text-muted-foreground">Resumos profissionais para sócios, gestores e equipes financeiras.</p>
        </div>
        <div className="flex gap-2">
          <button className="btn-outline"><FileDown className="h-3.5 w-3.5" /> Exportar PDF</button>
          <button className="btn-outline"><FileSpreadsheet className="h-3.5 w-3.5" /> Exportar Excel</button>
          <button className="btn-outline">Compartilhar</button>
        </div>
      </div>

      <PCard className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-40" />
        <div className="relative">
          <div className="text-xs uppercase tracking-wider text-primary">Resumo operacional</div>
          <h2 className="mt-2 text-xl font-semibold">Maio de 2026 — Relatório operacional</h2>
          <p className="mt-3 max-w-3xl text-sm text-muted-foreground">
            Sua operação evoluiu este mês. Foram analisados <strong className="text-foreground">12.480 registros</strong> em <strong className="text-foreground">48 fornecedores</strong>, com <strong className="text-foreground">12% menos erros</strong> e <strong className="text-foreground">+8 pontos na saúde operacional</strong>. Três fornecedores duplicados foram identificados — unificá-los pode economizar cerca de <strong className="text-foreground">R$ 12.500 por trimestre</strong> em pagamentos duplicados.
          </p>
        </div>
      </PCard>

      <div className="grid gap-4 lg:grid-cols-3">
        <PCard className="lg:col-span-2">
          <div className="mb-3 text-sm font-semibold">Visão financeira</div>
          <div className="h-64">
            <ResponsiveContainer>
              <BarChart data={monthlyVolume}>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(1 0 0 / 0.06)" />
                <XAxis dataKey="month" stroke="oklch(0.7 0 0)" fontSize={12} />
                <YAxis stroke="oklch(0.7 0 0)" fontSize={12} tickFormatter={(v)=>`R$ ${v/1000}k`} />
                <Tooltip contentStyle={{ background: "oklch(0.20 0.025 265)", border: "1px solid oklch(0.28 0.025 265)", borderRadius: 12, fontSize: 12 }} />
                <Bar dataKey="volume" fill="oklch(0.70 0.18 300)" radius={[6,6,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </PCard>
        <PCard>
          <div className="mb-3 text-sm font-semibold">Saúde operacional</div>
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
          <div className="text-center text-xs text-muted-foreground">+8 pontos vs mês anterior</div>
        </PCard>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <PCard>
          <div className="mb-3 text-sm font-semibold">Erros encontrados</div>
          <div className="space-y-2 text-sm">
            {[
              { n: "Fornecedores duplicados", v: 14, c: "bg-warning/15 text-warning" },
              { n: "Valores suspeitos", v: 9, c: "bg-destructive/15 text-destructive" },
              { n: "Dados incompletos", v: 6, c: "bg-info/15 text-info" },
              { n: "Pagamentos vencidos", v: 11, c: "bg-destructive/15 text-destructive" },
            ].map((e)=>(
              <div key={e.n} className="flex items-center justify-between rounded-lg border border-subtle bg-background/40 px-3 py-2">
                <span>{e.n}</span>
                <span className={`rounded-full px-2 py-0.5 text-[11px] ${e.c}`}>{e.v}</span>
              </div>
            ))}
          </div>
        </PCard>
        <PCard>
          <div className="mb-3 text-sm font-semibold">Recomendações da IA</div>
          <ul className="space-y-3 text-sm">
            <li className="rounded-lg border border-subtle bg-background/40 p-3">Unificar 3 cadastros de fornecedores duplicados ainda esta semana.</li>
            <li className="rounded-lg border border-subtle bg-background/40 p-3">Configurar lembretes automáticos 5 dias antes do vencimento.</li>
            <li className="rounded-lg border border-subtle bg-background/40 p-3">Validar com o solicitante o lançamento de Tech Serviços ME.</li>
            <li className="rounded-lg border border-subtle bg-background/40 p-3">Reavaliar o contrato com Transportes Estrela neste mês.</li>
          </ul>
        </PCard>
      </div>
    </div>
  );
}

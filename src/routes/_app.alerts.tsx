import { createFileRoute } from "@tanstack/react-router";
import { PCard } from "@/components/processiq/Card";
import { Tag } from "@/components/processiq/Badge";
import { alerts } from "@/lib/mock-data";
import { AlertTriangle, Bell, Clock, ShieldAlert } from "lucide-react";

export const Route = createFileRoute("/_app/alerts")({
  head: () => ({ meta: [{ title: "Alertas — ProcessIQ" }] }),
  component: Alerts,
});

const ICONS: Record<string, any> = { critical: ShieldAlert, high: AlertTriangle, medium: Clock, low: Bell };

function Alerts() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Alertas inteligentes</h1>
        <p className="text-sm text-muted-foreground">Problemas detectados em tempo real nos seus dados operacionais.</p>
      </div>

      <div className="grid gap-3 md:grid-cols-4">
        {[
          { l: "Crítica", v: alerts.filter(a=>a.severity==="critical").length, key: "critical" },
          { l: "Alta", v: alerts.filter(a=>a.severity==="high").length, key: "high" },
          { l: "Média", v: alerts.filter(a=>a.severity==="medium").length, key: "medium" },
          { l: "Baixa", v: alerts.filter(a=>a.severity==="low").length, key: "low" },
        ].map(s=>(
          <PCard key={s.l} className="!p-4">
            <div className="flex items-center justify-between">
              <div className="text-xs text-muted-foreground">{s.l}</div>
              <Tag variant={s.key}>{s.l}</Tag>
            </div>
            <div className="mt-2 text-2xl font-semibold">{s.v}</div>
          </PCard>
        ))}
      </div>

      <div className="space-y-3">
        {alerts.map(a => {
          const Icon = ICONS[a.severity];
          return (
            <PCard key={a.id} className="!p-5 transition hover:border-primary/40">
              <div className="flex items-start gap-4">
                <div className={`rounded-xl p-3 ${a.severity==="critical"||a.severity==="high"?"bg-destructive/15 text-destructive":a.severity==="medium"?"bg-warning/15 text-warning":"bg-info/15 text-info"}`}><Icon className="h-5 w-5" /></div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="font-semibold">{a.title}</div>
                    <Tag variant={a.severity}>{a.severity}</Tag>
                    <span className="text-xs text-muted-foreground">· {a.timestamp}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{a.description}</p>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-lg border border-subtle bg-background/40 px-3 py-1.5 text-xs">
                    <Bell className="h-3 w-3 text-primary" /> Recomendado: <span className="text-foreground">{a.action}</span>
                  </div>
                </div>
                <button className="btn-outline">Resolver</button>
              </div>
            </PCard>
          );
        })}
      </div>
    </div>
  );
}

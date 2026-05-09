import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function PCard({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("rounded-2xl border border-subtle bg-card p-5 shadow-card", className)}>{children}</div>;
}

export function StatCard({ label, value, delta, icon: Icon, accent = "primary" }: {
  label: string; value: string; delta?: string; icon: any; accent?: "primary" | "accent" | "success" | "warning" | "destructive";
}) {
  const accents: Record<string,string> = {
    primary: "from-primary/30 to-primary/0 text-primary",
    accent: "from-accent/30 to-accent/0 text-accent",
    success: "from-success/30 to-success/0 text-success",
    warning: "from-warning/30 to-warning/0 text-warning",
    destructive: "from-destructive/30 to-destructive/0 text-destructive",
  };
  return (
    <PCard className="group relative overflow-hidden transition hover:border-primary/40">
      <div className={cn("pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br opacity-60 blur-2xl transition-opacity group-hover:opacity-100", accents[accent])} />
      <div className="flex items-start justify-between">
        <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className={cn("rounded-lg border border-subtle bg-background/40 p-2", accents[accent].split(" ")[2])}>
          <Icon className="h-4 w-4" />
        </div>
      </div>
      <div className="mt-3 text-2xl font-semibold tracking-tight">{value}</div>
      {delta && <div className="mt-1 text-xs text-muted-foreground">{delta}</div>}
    </PCard>
  );
}

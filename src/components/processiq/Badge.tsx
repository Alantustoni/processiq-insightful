import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const map: Record<string, string> = {
  // Status
  Pago: "bg-success/15 text-success border-success/30",
  Pendente: "bg-info/15 text-info border-info/30",
  Vencido: "bg-destructive/15 text-destructive border-destructive/30",
  "Em revisão": "bg-warning/15 text-warning border-warning/30",
  // Risco
  Baixo: "bg-success/15 text-success border-success/30",
  Médio: "bg-warning/15 text-warning border-warning/30",
  Alto: "bg-destructive/15 text-destructive border-destructive/30",
  Crítico: "bg-destructive/15 text-destructive border-destructive/30",
  // Problemas
  "Fornecedor duplicado": "bg-warning/15 text-warning border-warning/30",
  "Valor suspeito": "bg-destructive/15 text-destructive border-destructive/30",
  "Data vencida": "bg-destructive/15 text-destructive border-destructive/30",
  "Campo incompleto": "bg-muted text-muted-foreground border-border",
  // Severidade alertas
  critical: "bg-destructive/15 text-destructive border-destructive/30",
  high: "bg-destructive/15 text-destructive border-destructive/30",
  medium: "bg-warning/15 text-warning border-warning/30",
  low: "bg-info/15 text-info border-info/30",
  Crítica: "bg-destructive/15 text-destructive border-destructive/30",
  Alta: "bg-destructive/15 text-destructive border-destructive/30",
  Média: "bg-warning/15 text-warning border-warning/30",
  Baixa: "bg-info/15 text-info border-info/30",
};

export function Tag({ children, variant }: { children: ReactNode; variant: string }) {
  return <span className={cn("inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium capitalize", map[variant] || "bg-muted text-muted-foreground border-border")}>{children}</span>;
}

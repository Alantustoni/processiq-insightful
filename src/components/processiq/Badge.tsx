import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const map: Record<string, string> = {
  Paid: "bg-success/15 text-success border-success/30",
  Pending: "bg-info/15 text-info border-info/30",
  Overdue: "bg-destructive/15 text-destructive border-destructive/30",
  Duplicate: "bg-warning/15 text-warning border-warning/30",
  Suspicious: "bg-destructive/15 text-destructive border-destructive/30",
  "Missing Data": "bg-muted text-muted-foreground border-border",
  Low: "bg-success/15 text-success border-success/30",
  Medium: "bg-warning/15 text-warning border-warning/30",
  High: "bg-destructive/15 text-destructive border-destructive/30",
  critical: "bg-destructive/15 text-destructive border-destructive/30",
  high: "bg-destructive/15 text-destructive border-destructive/30",
  medium: "bg-warning/15 text-warning border-warning/30",
  low: "bg-info/15 text-info border-info/30",
};

export function Tag({ children, variant }: { children: ReactNode; variant: string }) {
  return <span className={cn("inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium capitalize", map[variant] || "bg-muted text-muted-foreground border-border")}>{children}</span>;
}

import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { LayoutDashboard, Upload, Table2, Bell, FileBarChart, Settings, LogOut, Search } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";
import { useState } from "react";

const items = [
  { to: "/dashboard", label: "Painel", icon: LayoutDashboard },
  { to: "/upload", label: "Upload de Arquivos", icon: Upload },
  { to: "/analysis", label: "Análises", icon: Table2 },
  { to: "/alerts", label: "Alertas", icon: Bell },
  { to: "/reports", label: "Relatórios", icon: FileBarChart },
  { to: "/settings", label: "Configurações", icon: Settings },
];

export function AppShell() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile top bar */}
      <header className="sticky top-0 z-40 flex h-14 items-center justify-between border-b border-subtle glass px-4 md:hidden">
        <Logo />
        <button onClick={() => setOpen(!open)} className="rounded-md p-2 hover:bg-muted">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        </button>
      </header>

      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 flex-col border-r border-sidebar-border bg-sidebar p-4 transition-transform md:flex md:translate-x-0",
        open ? "translate-x-0 flex" : "-translate-x-full hidden md:flex"
      )}>
        <div className="px-2 pb-6 pt-2"><Logo /></div>
        <nav className="flex flex-col gap-1">
          {items.map((it) => {
            const active = path === it.to || path.startsWith(it.to + "/");
            const Icon = it.icon;
            return (
              <Link key={it.to} to={it.to} onClick={() => setOpen(false)}
                className={cn(
                  "group flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                  active
                    ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-card"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground"
                )}>
                <Icon className="h-4 w-4" />
                <span>{it.label}</span>
                {active && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary" />}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto space-y-3">
          <div className="rounded-xl border border-sidebar-border bg-sidebar-accent/40 p-3">
            <div className="text-xs font-medium text-sidebar-foreground">Plano Gratuito</div>
            <div className="mt-1 text-[11px] text-muted-foreground">8 / 20 análises utilizadas</div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-background">
              <div className="h-full w-2/5 bg-gradient-primary" />
            </div>
            <button className="mt-3 w-full rounded-md bg-gradient-primary px-3 py-1.5 text-xs font-medium text-primary-foreground shadow-glow transition hover:opacity-90">Fazer upgrade</button>
          </div>
          <div className="flex items-center gap-3 rounded-lg p-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-primary text-xs font-semibold">RM</div>
            <div className="flex-1 text-xs">
              <div className="font-medium">Rafael Moraes</div>
              <div className="text-muted-foreground">rafael@empresa.com.br</div>
            </div>
            <Link to="/" className="rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"><LogOut className="h-4 w-4" /></Link>
          </div>
        </div>
      </aside>

      <div className="md:pl-64">
        <header className="sticky top-0 z-30 hidden h-14 items-center gap-4 border-b border-subtle glass px-6 md:flex">
          <div className="relative flex-1 max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input placeholder="Buscar registros, fornecedores, alertas..." className="h-9 w-full rounded-lg border border-input bg-input/50 pl-9 pr-3 text-sm outline-none transition focus:border-primary focus:bg-input" />
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button className="rounded-md border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground">⌘K</button>
            <Link to="/upload" className="rounded-md bg-gradient-primary px-3 py-1.5 text-xs font-medium text-primary-foreground shadow-glow">+ Nova análise</Link>
          </div>
        </header>
        <main className="p-4 md:p-8"><Outlet /></main>
      </div>
    </div>
  );
}

import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import type { ReactNode } from "react";

export function AuthLayout({ title, subtitle, footer, children }: { title: string; subtitle: string; footer: ReactNode; children: ReactNode }) {
  return (
    <div className="grid min-h-screen md:grid-cols-2">
      <div className="relative hidden overflow-hidden border-r border-subtle bg-card md:block">
        <div className="absolute inset-0 bg-gradient-glow" />
        <div className="absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative flex h-full flex-col justify-between p-10">
          <Logo />
          <div>
            <blockquote className="text-2xl font-medium leading-snug tracking-tight">
              "Substituímos 4 planilhas e uma reunião semanal pelo ProcessIQ. Nosso financeiro recuperou as sextas-feiras."
            </blockquote>
            <div className="mt-4 text-sm text-muted-foreground">Marina Ribeiro · Diretora de Operações, Distribuidora Sul</div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-sm">
          <div className="mb-8 md:hidden"><Logo /></div>
          <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
          <div className="mt-8">{children}</div>
          <div className="mt-6 text-center text-sm text-muted-foreground">{footer}</div>
          <div className="mt-8 text-center text-xs text-muted-foreground"><Link to="/" className="hover:text-foreground">← Voltar ao início</Link></div>
        </div>
      </div>
    </div>
  );
}

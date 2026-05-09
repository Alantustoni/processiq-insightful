import { createFileRoute, Link } from "@tanstack/react-router";
import { PCard } from "@/components/processiq/Card";
import { useState } from "react";
import { UploadCloud, FileSpreadsheet, CheckCircle2, Loader2, X } from "lucide-react";

export const Route = createFileRoute("/_app/upload")({
  head: () => ({ meta: [{ title: "Upload — ProcessIQ" }] }),
  component: UploadPage,
});

type State = "empty" | "selected" | "analyzing" | "done";

function UploadPage() {
  const [state, setState] = useState<State>("empty");
  const [hover, setHover] = useState(false);

  function pick() {
    setState("selected");
  }
  function analyze() {
    setState("analyzing");
    setTimeout(() => setState("done"), 1800);
  }
  function reset() { setState("empty"); }

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Upload de arquivos</h1>
        <p className="text-sm text-muted-foreground">Envie planilhas Excel ou CSV para análise automática.</p>
      </div>

      <PCard>
        {state === "empty" && (
          <div
            onDragOver={(e)=>{e.preventDefault();setHover(true);}}
            onDragLeave={()=>setHover(false)}
            onDrop={(e)=>{e.preventDefault();setHover(false);pick();}}
            onClick={pick}
            className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-16 text-center transition ${hover?"border-primary bg-primary/5":"border-border bg-background/30 hover:bg-background/50"}`}>
            <div className="mb-4 rounded-2xl bg-gradient-primary p-4 shadow-glow"><UploadCloud className="h-8 w-8 text-primary-foreground" /></div>
            <div className="text-lg font-semibold">Arraste sua planilha aqui ou clique para selecionar</div>
            <div className="mt-1 text-sm text-muted-foreground">Formatos aceitos: .xlsx, .xls e .csv · até 50 MB</div>
            <button className="btn-primary mt-6">Selecionar arquivo</button>
          </div>
        )}

        {state === "selected" && (
          <FileRow name="pagamentos_maio.xlsx" size="284 KB" status="Pronto para análise" onCancel={reset}>
            <button onClick={analyze} className="btn-primary">Iniciar análise</button>
          </FileRow>
        )}

        {state === "analyzing" && (
          <FileRow name="pagamentos_maio.xlsx" size="284 KB" status="Analisando dados…" onCancel={reset}>
            <div className="inline-flex items-center gap-2 text-sm text-primary"><Loader2 className="h-4 w-4 animate-spin" /> Processando</div>
          </FileRow>
        )}

        {state === "done" && (
          <div>
            <div className="flex items-center gap-3 rounded-xl border border-success/30 bg-success/10 p-4">
              <CheckCircle2 className="h-5 w-5 text-success" />
              <div className="flex-1"><div className="text-sm font-medium">Análise concluída com sucesso</div><div className="text-xs text-muted-foreground">12 registros · 8 colunas · 4 problemas detectados</div></div>
              <Link to="/analysis" className="btn-primary">Ver análise</Link>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Info label="Nome do arquivo" value="pagamentos_maio.xlsx" />
              <Info label="Linhas analisadas" value="12" />
              <Info label="Colunas detectadas" value="ID · Fornecedor · Categoria · Vencimento · Valor · Status · Risco · Problema" />
              <Info label="Status da análise" value="Concluída" />
            </div>
            <div className="mt-6"><button onClick={reset} className="btn-ghost">Enviar outro arquivo</button></div>
          </div>
        )}
      </PCard>

      <PCard>
        <div className="text-sm font-semibold">Uploads recentes</div>
        <div className="mt-4 divide-y divide-border">
          {[
            ["folha_pagamento_q1_2026.xlsx", "Ontem", "Concluída"],
            ["despesas_marco.csv", "há 3 dias", "Concluída"],
            ["fornecedores_master.xlsx", "Semana passada", "Concluída"],
          ].map(([n,d,s]) => (
            <div key={n} className="flex items-center justify-between py-3 text-sm">
              <div className="flex items-center gap-3"><FileSpreadsheet className="h-4 w-4 text-muted-foreground" /><div><div className="font-medium">{n}</div><div className="text-xs text-muted-foreground">{d}</div></div></div>
              <div className="rounded-full bg-success/15 px-2 py-0.5 text-[11px] text-success">{s}</div>
            </div>
          ))}
        </div>
      </PCard>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return <div className="rounded-xl border border-subtle bg-background/40 p-4"><div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div><div className="mt-1 text-sm">{value}</div></div>;
}
function FileRow({ name, size, status, onCancel, children }: any) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-subtle bg-background/40 p-4">
      <div className="rounded-lg bg-primary/15 p-2.5 text-primary"><FileSpreadsheet className="h-5 w-5" /></div>
      <div className="flex-1">
        <div className="font-medium">{name}</div>
        <div className="text-xs text-muted-foreground">{size} · {status}</div>
      </div>
      {children}
      <button onClick={onCancel} className="rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground"><X className="h-4 w-4" /></button>
    </div>
  );
}

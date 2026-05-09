import { createFileRoute } from "@tanstack/react-router";
import { PCard } from "@/components/processiq/Card";
import { useState } from "react";

export const Route = createFileRoute("/_app/settings")({
  head: () => ({ meta: [{ title: "Configurações — ProcessIQ" }] }),
  component: Settings,
});

const tabs = ["Perfil da empresa", "Preferências de upload", "Notificações", "Análise com IA"];

function Settings() {
  const [tab, setTab] = useState(0);
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Configurações</h1>
        <p className="text-sm text-muted-foreground">Gerencie sua empresa, uploads e preferências de IA.</p>
      </div>

      <div className="flex flex-wrap gap-1 rounded-xl border border-subtle bg-card p-1">
        {tabs.map((t,i)=>(
          <button key={t} onClick={()=>setTab(i)} className={`rounded-lg px-4 py-2 text-sm transition ${tab===i?"bg-gradient-primary text-primary-foreground shadow-glow":"text-muted-foreground hover:bg-muted hover:text-foreground"}`}>{t}</button>
        ))}
      </div>

      {tab===0 && (
        <PCard>
          <SectionTitle title="Perfil da empresa" sub="Usado em relatórios e exportações." />
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Nome da empresa" defaultValue="Distribuidora Sul Ltda" />
            <Field label="CNPJ" defaultValue="12.345.678/0001-90" />
            <Field label="Segmento" defaultValue="Distribuição e Atacado" />
            <Field label="Número de funcionários" defaultValue="11–50" />
          </div>
          <div className="mt-6 flex justify-end gap-2"><button className="btn-ghost">Cancelar</button><button className="btn-primary">Salvar alterações</button></div>
        </PCard>
      )}
      {tab===1 && (
        <PCard>
          <SectionTitle title="Preferências de upload" sub="Como o ProcessIQ interpreta suas planilhas." />
          <div className="space-y-4">
            <Toggle label="Detectar duplicados automaticamente" desc="Identifica fornecedores com nomes parecidos." defaultChecked />
            <Toggle label="Validar datas de vencimento" desc="Marca pagamentos vencidos e próximos do vencimento." defaultChecked />
            <Toggle label="Identificar valores suspeitos" desc="Sinaliza lançamentos fora do padrão histórico." defaultChecked />
            <Toggle label="Gerar resumo automático" desc="Cria um resumo executivo após cada análise." />
          </div>
        </PCard>
      )}
      {tab===2 && (
        <PCard>
          <SectionTitle title="Notificações" sub="Escolha quando e como avisamos você." />
          <div className="space-y-4">
            <Toggle label="Alertas de vencimento" desc="Avisos sobre pagamentos vencidos ou próximos." defaultChecked />
            <Toggle label="Erros críticos" desc="Notificação imediata para problemas graves." defaultChecked />
            <Toggle label="Relatório semanal" desc="Resumo executivo enviado todo segunda-feira." defaultChecked />
            <Toggle label="Atualizações do sistema" desc="Novidades e melhorias do ProcessIQ." />
          </div>
        </PCard>
      )}
      {tab===3 && (
        <PCard>
          <SectionTitle title="Análise com IA" sub="Ajuste como a inteligência artificial atua nos seus dados." />
          <div className="space-y-5">
            <div>
              <div className="mb-2 flex items-center justify-between text-sm"><span>Sensibilidade de anomalias</span><span className="text-muted-foreground">Equilibrada</span></div>
              <input type="range" defaultValue={60} className="w-full accent-[oklch(0.65_0.20_265)]" />
            </div>
            <Toggle label="Ativar insights automáticos" desc="Gera resumos inteligentes em cada análise." defaultChecked />
            <Toggle label="Gerar recomendações" desc="Sugestões de ação baseadas nos seus dados." defaultChecked />
            <Toggle label="Priorizar riscos financeiros" desc="Destaca problemas com maior impacto monetário." defaultChecked />
            <Toggle label="Detectar anomalias estatísticas" desc="Marca valores fora do padrão histórico (3σ)." defaultChecked />
          </div>
        </PCard>
      )}
    </div>
  );
}

function SectionTitle({ title, sub }: { title: string; sub: string }) { return <div className="mb-6"><div className="font-semibold">{title}</div><div className="text-xs text-muted-foreground">{sub}</div></div>; }
function Field({ label, defaultValue }: { label: string; defaultValue?: string }) { return <label className="block"><div className="mb-1.5 text-xs font-medium text-muted-foreground">{label}</div><input className="input" defaultValue={defaultValue}/></label>; }
function Toggle({ label, desc, defaultChecked }: { label: string; desc?: string; defaultChecked?: boolean }) {
  const [on, setOn] = useState(!!defaultChecked);
  return (
    <div className="flex items-start justify-between gap-4 rounded-lg border border-subtle bg-background/40 p-4">
      <div><div className="text-sm font-medium">{label}</div>{desc && <div className="text-xs text-muted-foreground">{desc}</div>}</div>
      <button onClick={()=>setOn(!on)} className={`relative h-6 w-11 rounded-full transition ${on?"bg-gradient-primary":"bg-muted"}`}>
        <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-background shadow transition ${on?"left-[22px]":"left-0.5"}`} />
      </button>
    </div>
  );
}

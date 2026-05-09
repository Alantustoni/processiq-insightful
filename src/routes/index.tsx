import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BarChart3, BrainCircuit, ShieldCheck, Sparkles, Upload, Check, FileSpreadsheet, AlertTriangle, TrendingUp, Bell, Calendar, Copy } from "lucide-react";
import { Logo } from "@/components/processiq/Logo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ProcessIQ — Transforme planilhas em decisões inteligentes" },
      { name: "description", content: "ProcessIQ ajuda pequenas empresas brasileiras a analisar planilhas, encontrar erros, monitorar vencimentos e gerar relatórios inteligentes em segundos." },
      { property: "og:title", content: "ProcessIQ — Inteligência operacional para pequenas empresas" },
      { property: "og:description", content: "Suba planilhas Excel ou CSV e tenha controle de pagamentos, fornecedores e riscos em um painel simples." },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* nav */}
      <header className="sticky top-0 z-40 border-b border-subtle glass">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#recursos" className="hover:text-foreground">Recursos</a>
            <a href="#produto" className="hover:text-foreground">Produto</a>
            <a href="#precos" className="hover:text-foreground">Preços</a>
            <a href="#demo" className="hover:text-foreground">Demonstração</a>
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/login" className="hidden text-sm text-muted-foreground hover:text-foreground sm:block">Entrar</Link>
            <Link to="/signup" className="rounded-lg bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow transition hover:opacity-90">Começar grátis</Link>
          </div>
        </div>
      </header>

      {/* hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-glow" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 md:pt-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-subtle bg-card/50 px-3 py-1 text-xs text-muted-foreground">
              <Sparkles className="h-3 w-3 text-primary" />
              Inteligência operacional para pequenas empresas
            </div>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
              Transforme planilhas bagunçadas em <span className="text-gradient">decisões inteligentes.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
              O ProcessIQ ajuda pequenas empresas a analisar planilhas, encontrar erros, monitorar vencimentos, identificar fornecedores duplicados e gerar relatórios inteligentes em poucos segundos.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/signup" className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow transition hover:opacity-90">
                Começar grátis <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/dashboard" className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-muted">
                Ver demonstração
              </Link>
            </div>
            <div className="mt-6 text-xs text-muted-foreground">Sem cartão de crédito · Teste grátis por 14 dias</div>
          </div>

          {/* hero preview card */}
          <div id="demo" className="relative mx-auto mt-16 max-w-5xl">
            <div className="absolute inset-x-10 -top-10 h-40 rounded-full bg-primary/30 blur-3xl" />
            <div className="relative rounded-2xl border border-subtle bg-card/80 p-2 shadow-card backdrop-blur">
              <div className="rounded-xl border border-subtle bg-background p-6">
                <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-6">
                  {[
                    { l: "Registros analisados", v: "12.480", i: BarChart3 },
                    { l: "Erros encontrados", v: "37", i: AlertTriangle },
                    { l: "Saúde operacional", v: "84/100", i: Sparkles },
                    { l: "Valor monitorado", v: "R$ 248.900", i: TrendingUp },
                    { l: "Pagamentos próximos", v: "18", i: Calendar },
                    { l: "Fornecedores duplicados", v: "3", i: Copy },
                  ].map((m) => (
                    <div key={m.l} className="rounded-xl border border-subtle bg-card p-3">
                      <div className="flex items-center justify-between">
                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{m.l}</div>
                        <m.i className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <div className="mt-2 text-lg font-semibold">{m.v}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-5">
                  <div className="md:col-span-3 rounded-xl border border-subtle bg-card p-4">
                    <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground"><span>Volume financeiro mensal (R$)</span><span className="text-primary">↗ Em crescimento</span></div>
                    <div className="flex h-32 items-end gap-2">
                      {[40,55,38,62,70,84,96].map((h,i)=>(<div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-primary/20 to-primary/80" style={{height:`${h}%`}} />))}
                    </div>
                  </div>
                  <div className="md:col-span-2 rounded-xl border border-subtle bg-card p-4">
                    <div className="mb-3 text-xs text-muted-foreground">Insights da IA</div>
                    <ul className="space-y-2 text-xs">
                      <li className="flex items-start gap-2"><BrainCircuit className="mt-0.5 h-3.5 w-3.5 text-accent" /> 18 pagamentos vencem nos próximos 7 dias.</li>
                      <li className="flex items-start gap-2"><AlertTriangle className="mt-0.5 h-3.5 w-3.5 text-warning" /> 3 fornecedores duplicados foram encontrados.</li>
                      <li className="flex items-start gap-2"><TrendingUp className="mt-0.5 h-3.5 w-3.5 text-success" /> A saúde operacional melhorou 8% este mês.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* problem */}
      <section className="border-t border-subtle py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-center">
          <div>
            <div className="text-xs font-medium uppercase tracking-wider text-primary">O problema</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Sua empresa perde tempo e dinheiro quando depende só de planilhas.</h2>
            <p className="mt-4 text-muted-foreground">Pequenas empresas ainda controlam pagamentos, fornecedores e processos em Excel, WhatsApp e anotações manuais. O problema aparece quando um pagamento vence, um fornecedor é duplicado ou um erro passa despercebido.</p>
            <ul className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
              {[
                { t: "Pagamentos vencidos", d: "Sem alertas automáticos, vencimentos importantes passam despercebidos." },
                { t: "Fornecedores duplicados", d: "Cadastros repetidos geram confusão, retrabalho e risco financeiro." },
                { t: "Dados incompletos", d: "Linhas sem data, valor ou categoria dificultam qualquer análise confiável." },
                { t: "Falta de visão do negócio", d: "Sem dashboard, a empresa só descobre problemas quando já causaram prejuízo." },
              ].map(c=>(
                <li key={c.t} className="rounded-xl border border-subtle bg-card p-4">
                  <div className="flex items-center gap-2 font-medium"><AlertTriangle className="h-4 w-4 text-destructive" />{c.t}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{c.d}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-subtle bg-card p-6 shadow-card">
              <div className="flex items-center gap-2 border-b border-subtle pb-3 text-xs text-muted-foreground"><FileSpreadsheet className="h-4 w-4" /> pagamentos_maio.xlsx</div>
              <div className="mt-3 space-y-1.5 font-mono text-[11px]">
                {[
                  ["Mercado Central Ltda","R$ 4.820,00","Pendente","ok"],
                  ["Mercado Central LTDA","R$ 4.810,00","Pendente","dup"],
                  ["Distribuidora Alpha","R$ 12.300,00","Vencido","warn"],
                  ["Clínica São Lucas","R$ 980,00","Pendente","ok"],
                  ["Tech Serviços ME","R$ 18.250,00","Pendente","susp"],
                ].map((r,i)=>(
                  <div key={i} className={`grid grid-cols-4 gap-2 rounded-md px-2 py-1.5 ${r[3]==="dup"?"bg-warning/10":r[3]==="warn"?"bg-destructive/10":r[3]==="susp"?"bg-destructive/15":"bg-muted/40"}`}>
                    <div className="truncate">{r[0]}</div><div>{r[1]}</div><div className="text-muted-foreground">{r[2]}</div>
                    <div className="text-right text-[10px] uppercase tracking-wider">
                      {r[3]==="dup" && <span className="text-warning">duplicado</span>}
                      {r[3]==="warn" && <span className="text-destructive">alto risco</span>}
                      {r[3]==="susp" && <span className="text-destructive">valor suspeito</span>}
                      {r[3]==="ok" && <span className="text-muted-foreground">ok</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* solution */}
      <section id="produto" className="border-t border-subtle bg-card/30 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="text-xs font-medium uppercase tracking-wider text-accent">A solução</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Suba sua planilha. O ProcessIQ analisa o resto.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">O sistema lê seus arquivos Excel ou CSV, organiza os dados, encontra inconsistências e transforma tudo em um painel simples para tomada de decisão.</p>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            {[
              { icon: Upload, t: "1. Envie", d: "Faça upload de planilhas Excel ou CSV em poucos segundos." },
              { icon: BrainCircuit, t: "2. Analise", d: "O ProcessIQ identifica erros, duplicidades, vencimentos e valores suspeitos." },
              { icon: BarChart3, t: "3. Decida", d: "Visualize alertas, indicadores e relatórios prontos para agir." },
            ].map((s) => (
              <div key={s.t} className="rounded-2xl border border-subtle bg-card p-6 text-left transition hover:border-primary/40">
                <div className="inline-flex rounded-lg bg-gradient-primary p-2.5 text-primary-foreground shadow-glow"><s.icon className="h-5 w-5" /></div>
                <div className="mt-4 text-lg font-semibold">{s.t}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* features */}
      <section id="recursos" className="border-t border-subtle py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Tudo que uma pequena empresa precisa para sair do controle manual.</h2>
            <p className="mt-3 text-muted-foreground">Uma plataforma simples para transformar arquivos em controle, alertas e decisões.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { i: Upload, t: "Upload inteligente de planilhas", d: "Importe arquivos Excel e CSV sem configuração complexa." },
              { i: ShieldCheck, t: "Detecção de erros operacionais", d: "Encontre campos vazios, registros duplicados e inconsistências." },
              { i: Bell, t: "Alertas de vencimento", d: "Veja pagamentos vencidos e próximos do vencimento antes que virem problema." },
              { i: Copy, t: "Fornecedores duplicados", d: "Identifique nomes parecidos e cadastros repetidos automaticamente." },
              { i: Sparkles, t: "Score de saúde operacional", d: "Receba uma nota clara sobre a qualidade dos seus dados e processos." },
              { i: FileSpreadsheet, t: "Relatórios executivos", d: "Gere resumos profissionais para sócios, gestores e equipes financeiras." },
            ].map((f) => (
              <div key={f.t} className="group rounded-2xl border border-subtle bg-card p-6 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-glow">
                <div className="inline-flex rounded-lg border border-subtle bg-background p-2.5 text-primary"><f.i className="h-5 w-5" /></div>
                <div className="mt-4 font-semibold">{f.t}</div>
                <div className="mt-1 text-sm text-muted-foreground">{f.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* dashboard preview */}
      <section className="border-t border-subtle bg-card/30 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-medium uppercase tracking-wider text-primary">O painel</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Um painel de controle para enxergar sua operação com clareza.</h2>
            <p className="mt-3 text-muted-foreground">Veja pagamentos, riscos, erros e indicadores em uma tela simples.</p>
          </div>
          <div className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-2 text-xs">
            {["Visão geral","Pagamentos","Fornecedores","Alertas","Relatórios","Saúde operacional"].map(t=>(
              <span key={t} className="rounded-full border border-subtle bg-card px-3 py-1 text-muted-foreground">{t}</span>
            ))}
          </div>
          <div className="relative mt-10 rounded-2xl border border-subtle bg-card p-2 shadow-card">
            <div className="rounded-xl border border-subtle bg-background p-6">
              <div className="grid grid-cols-12 gap-3">
                {["Volume financeiro mensal","Distribuição de erros","Vencimentos próximos","Risco por fornecedor"].map((t,i)=>(
                  <div key={t} className={`${i===0?"col-span-12 lg:col-span-7":i===1?"col-span-12 lg:col-span-5":"col-span-6 lg:col-span-6"} rounded-xl border border-subtle bg-card p-4`}>
                    <div className="text-xs text-muted-foreground">{t}</div>
                    <div className="mt-3 flex h-28 items-end gap-1.5">
                      {[35,52,40,68,55,80,72,90,65,78,88,96].map((h,j)=>(<div key={j} className="flex-1 rounded-t bg-gradient-to-t from-primary/30 to-accent" style={{height:`${h}%`}}/>))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* pricing */}
      <section id="precos" className="border-t border-subtle py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Planos simples para empresas que querem mais controle.</h2>
            <p className="mt-3 text-muted-foreground">Comece grátis e evolua conforme sua operação crescer.</p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            {[
              { name: "Free", price: "R$ 0", desc: "Para testar o ProcessIQ", features: ["Até 20 análises por mês","1 usuário","Upload Excel e CSV","Insights básicos"], cta: "Começar grátis" },
              { name: "Pro", price: "R$ 49", desc: "Para pequenas empresas", features: ["Análises ilimitadas","Até 5 usuários","Insights com IA","Alertas de vencimento","Exportação PDF e Excel","Histórico de análises"], cta: "Testar plano Pro", highlight: true },
              { name: "Business", price: "R$ 149", desc: "Para empresas em crescimento", features: ["Tudo do Pro","Usuários ilimitados","Regras personalizadas","Integrações futuras","Suporte prioritário","Relatórios avançados"], cta: "Falar com vendas" },
            ].map(p=>(
              <div key={p.name} className={`relative rounded-2xl border p-6 ${p.highlight?"border-primary/60 bg-card shadow-glow":"border-subtle bg-card"}`}>
                {p.highlight && <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider">Mais recomendado</div>}
                <div className="text-sm text-muted-foreground">{p.name}</div>
                <div className="mt-2 flex items-baseline gap-1"><span className="text-4xl font-semibold">{p.price}</span><span className="text-sm text-muted-foreground">/mês</span></div>
                <div className="mt-1 text-xs text-muted-foreground">{p.desc}</div>
                <ul className="mt-6 space-y-2 text-sm">
                  {p.features.map(f=>(<li key={f} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-success" />{f}</li>))}
                </ul>
                <Link to="/signup" className={`mt-6 block w-full rounded-lg px-4 py-2 text-center text-sm font-medium ${p.highlight?"bg-gradient-primary text-primary-foreground shadow-glow":"border border-border bg-background hover:bg-muted"}`}>{p.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="border-t border-subtle py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">Controle inteligente para empresas que ainda dependem de planilhas.</p>
          </div>
          <div>
            <div className="text-sm font-semibold">Produto</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><a href="#produto" className="hover:text-foreground">Produto</a></li>
              <li><a href="#recursos" className="hover:text-foreground">Recursos</a></li>
              <li><a href="#precos" className="hover:text-foreground">Preços</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold">Empresa</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Privacidade</a></li>
              <li><a href="#" className="hover:text-foreground">Termos</a></li>
              <li><a href="#" className="hover:text-foreground">Contato</a></li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-subtle px-6 pt-6 text-center text-xs text-muted-foreground">
          © 2026 ProcessIQ. Criado para pequenas empresas que querem mais controle.
        </div>
      </footer>

    </div>
  );
}
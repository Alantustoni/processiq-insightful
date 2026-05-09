import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AuthLayout } from "@/components/processiq/AuthLayout";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Entrar — ProcessIQ" }, { name: "description", content: "Acesse seu painel operacional ProcessIQ." }] }),
  component: Login,
});

function Login() {
  const nav = useNavigate();
  return (
    <AuthLayout title="Entrar no ProcessIQ" subtitle="Acesse seu painel operacional." footer={<>Ainda não tem conta? <Link to="/signup" className="text-primary hover:underline">Criar conta grátis</Link></>}>
      <form onSubmit={(e)=>{e.preventDefault(); nav({ to: "/dashboard" });}} className="space-y-4">
        <Field label="E-mail"><input type="email" required defaultValue="rafael@empresa.com.br" className="input" /></Field>
        <Field label="Senha" hint={<a href="#" className="text-xs text-muted-foreground hover:text-foreground">Esqueci minha senha</a>}><input type="password" required defaultValue="••••••••" className="input" /></Field>
        <button className="btn-primary w-full">Entrar</button>
        <button type="button" className="btn-ghost w-full">Continuar com Google</button>
      </form>
    </AuthLayout>
  );
}

function Field({ label, hint, children }: any) {
  return (
    <label className="block">
      <div className="mb-1.5 flex items-center justify-between text-xs font-medium text-muted-foreground"><span>{label}</span>{hint}</div>
      {children}
    </label>
  );
}

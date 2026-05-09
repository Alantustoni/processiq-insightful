import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AuthLayout } from "@/components/processiq/AuthLayout";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Criar conta — ProcessIQ" }, { name: "description", content: "Comece a analisar suas planilhas em poucos minutos." }] }),
  component: Signup,
});

function Signup() {
  const nav = useNavigate();
  return (
    <AuthLayout title="Crie sua conta grátis" subtitle="Comece a analisar suas planilhas em poucos minutos." footer={<>Já tem uma conta? <Link to="/login" className="text-primary hover:underline">Entrar</Link></>}>
      <form onSubmit={(e)=>{e.preventDefault(); nav({ to: "/dashboard" });}} className="space-y-4">
        <label className="block"><div className="mb-1.5 text-xs font-medium text-muted-foreground">Nome completo</div><input className="input" defaultValue="Rafael Moraes"/></label>
        <label className="block"><div className="mb-1.5 text-xs font-medium text-muted-foreground">E-mail</div><input type="email" className="input" defaultValue="rafael@empresa.com.br"/></label>
        <label className="block"><div className="mb-1.5 text-xs font-medium text-muted-foreground">Empresa</div><input className="input" defaultValue="Distribuidora Sul"/></label>
        <label className="block"><div className="mb-1.5 text-xs font-medium text-muted-foreground">Senha</div><input type="password" className="input" defaultValue="••••••••"/></label>
        <button className="btn-primary w-full">Começar grátis</button>
        <p className="text-center text-[11px] text-muted-foreground">Ao continuar você concorda com nossos Termos e Política de Privacidade.</p>
      </form>
    </AuthLayout>
  );
}

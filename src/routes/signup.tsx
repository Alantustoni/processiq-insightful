import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AuthLayout } from "@/components/processiq/AuthLayout";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Create account — ProcessIQ" }, { name: "description", content: "Start your free ProcessIQ workspace." }] }),
  component: Signup,
});

function Signup() {
  const nav = useNavigate();
  return (
    <AuthLayout title="Create your account" subtitle="Start free — no credit card required." footer={<>Already have an account? <Link to="/login" className="text-primary hover:underline">Sign in</Link></>}>
      <form onSubmit={(e)=>{e.preventDefault(); nav({ to: "/dashboard" });}} className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <label className="block"><div className="mb-1.5 text-xs font-medium text-muted-foreground">First name</div><input className="input" defaultValue="Alex"/></label>
          <label className="block"><div className="mb-1.5 text-xs font-medium text-muted-foreground">Last name</div><input className="input" defaultValue="Becker"/></label>
        </div>
        <label className="block"><div className="mb-1.5 text-xs font-medium text-muted-foreground">Work email</div><input type="email" className="input" defaultValue="alex@company.io"/></label>
        <label className="block"><div className="mb-1.5 text-xs font-medium text-muted-foreground">Company</div><input className="input" defaultValue="Northwind Co."/></label>
        <label className="block"><div className="mb-1.5 text-xs font-medium text-muted-foreground">Password</div><input type="password" className="input" defaultValue="••••••••"/></label>
        <button className="btn-primary w-full">Create account</button>
        <p className="text-center text-[11px] text-muted-foreground">By continuing you agree to our Terms and Privacy Policy.</p>
      </form>
    </AuthLayout>
  );
}

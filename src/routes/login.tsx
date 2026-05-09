import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AuthLayout } from "@/components/processiq/AuthLayout";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in — ProcessIQ" }, { name: "description", content: "Sign in to your ProcessIQ workspace." }] }),
  component: Login,
});

function Login() {
  const nav = useNavigate();
  return (
    <AuthLayout title="Welcome back" subtitle="Sign in to continue to your workspace." footer={<>New to ProcessIQ? <Link to="/signup" className="text-primary hover:underline">Create an account</Link></>}>
      <form onSubmit={(e)=>{e.preventDefault(); nav({ to: "/dashboard" });}} className="space-y-4">
        <Field label="Email"><input type="email" required defaultValue="alex@company.io" className="input" /></Field>
        <Field label="Password" hint={<a href="#" className="text-xs text-muted-foreground hover:text-foreground">Forgot?</a>}><input type="password" required defaultValue="••••••••" className="input" /></Field>
        <button className="btn-primary w-full">Sign in</button>
        <button type="button" className="btn-ghost w-full">Continue with Google</button>
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

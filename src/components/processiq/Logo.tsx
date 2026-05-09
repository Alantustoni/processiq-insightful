import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-2 font-semibold ${className}`}>
      <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary shadow-glow">
        <div className="h-3 w-3 rounded-sm bg-background/90" />
      </div>
      <span className="text-base tracking-tight">
        Process<span className="text-gradient">IQ</span>
      </span>
    </Link>
  );
}

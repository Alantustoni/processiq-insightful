import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/processiq/Sidebar";

export const Route = createFileRoute("/_app")({
  component: AppShell,
});

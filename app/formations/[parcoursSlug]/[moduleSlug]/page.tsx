import { notFound } from "next/navigation";
import { ModuleScreen } from "@/components/module/module-screen";
import { getModule, getParcours } from "@/lib/content";

export default async function ModulePage({
  params,
}: {
  params: Promise<{ parcoursSlug: string; moduleSlug: string }>;
}) {
  const { parcoursSlug, moduleSlug } = await params;
  const parcours = getParcours(parcoursSlug);
  const module = parcours ? getModule(parcoursSlug, moduleSlug) : undefined;

  if (!parcours || !module) notFound();

  return <ModuleScreen parcours={parcours} module={module} />;
}

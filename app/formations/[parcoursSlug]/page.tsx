import { notFound } from "next/navigation";
import { ParcoursDetail } from "@/components/formations/parcours-detail";
import { getParcours } from "@/lib/content";

export default async function ParcoursPage({
  params,
}: {
  params: Promise<{ parcoursSlug: string }>;
}) {
  const { parcoursSlug } = await params;
  const parcours = getParcours(parcoursSlug);

  if (!parcours) notFound();

  return <ParcoursDetail parcours={parcours} />;
}

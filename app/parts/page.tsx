import PartsCTA from "@/components/parts/PartsCTA";
import PartsGrid from "@/components/parts/PartsGrid";
import PartsHero from "@/components/parts/PartsHero";
import { getParts } from "@/lib/strapi";

export default async function PartsPage() {
  const parts = await getParts();

  return (
    <main>
      <PartsHero />
      <PartsGrid parts={parts} />
      <PartsCTA />
    </main>
  );
}

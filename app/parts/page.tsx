import PartsCTA from "@/components/parts/PartsCTA";
import PartsGrid from "@/components/parts/PartsGrid";
import PartsHero from "@/components/parts/PartsHero";

export default function PartsPage() {
  return (
    <main>
      <PartsHero />
      <PartsGrid />
      <PartsCTA />
    </main>
  );
}

import ServicesCTA from "@/components/services/ServicesCTA";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesHero from "@/components/services/ServicesHero";
import WorkProcess from "@/components/services/WorkProcess";

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesGrid />
      <WorkProcess />
      <ServicesCTA />
    </main>
  );
}

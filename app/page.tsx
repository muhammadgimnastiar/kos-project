import CardCampaign from "@/components/templates/card-campaign";
import Features from "@/components/templates/features";
import Hero from "@/components/templates/hero";
import HeroSectionImage from "@/components/templates/hero-image";
import WaitingList from "@/components/templates/waiting-list";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <HeroSectionImage />
      <CardCampaign />
      <WaitingList></WaitingList>
    </>
  );
}

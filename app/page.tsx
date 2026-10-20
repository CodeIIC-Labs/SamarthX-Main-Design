import BigCta from "@/components/BigCta";
import FieldNotes from "@/components/FieldNotes";
import Hero from "@/components/Hero";
import PortalGrid from "@/components/PortalGrid";
import SmarterWay from "@/components/SmarterWay";
import Story from "@/components/Story";
import WhyBand from "@/components/WhyBand";

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <WhyBand />
      <Story />
      <PortalGrid />
      <SmarterWay />
      <FieldNotes />
      <BigCta />
    </div>
  );
}

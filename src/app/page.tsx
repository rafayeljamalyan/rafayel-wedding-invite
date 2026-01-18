import HeroSection from "@/components/HeroSection";
import DetailsSection from "@/components/DetailsSection";
import ReceptionSection from "@/components/ReceptionSection";
import ScheduleSection from "@/components/ScheduleSection";
import RSVPSection from "@/components/RSVPSection";
import ImagesSection from "@/components/ImagesSection";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <HeroSection />
      <DetailsSection />
      <ScheduleSection />
      <ReceptionSection />
      <ImagesSection />
      <RSVPSection />
    </div>
  );
}

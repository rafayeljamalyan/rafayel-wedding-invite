import HeroSection from "@/components/HeroSection";
import DetailsSection from "@/components/DetailsSection";
import ReceptionSection from "@/components/ReceptionSection";
import ScheduleSection from "@/components/ScheduleSection";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <HeroSection />
      <DetailsSection />
      <ReceptionSection />
      <ScheduleSection />
    </div>
  );
}

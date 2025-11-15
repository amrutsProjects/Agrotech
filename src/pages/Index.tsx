import Navigation from "@/components/Navigation";
import TabToggle from "@/components/TabToggle";
import VisionSection from "@/components/VisionSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <TabToggle />
      <VisionSection />
    </div>
  );
};

export default Index;

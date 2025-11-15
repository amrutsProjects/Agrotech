import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import WhatWeOffer from "./WhatWeOffer";
import HowWeHelp from "./HowWeHelp";

const TabToggle = () => {
  return (
    <div className="container mx-auto px-6 lg:px-12 py-12">
      <Tabs defaultValue="offer" className="w-full">
        <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 h-14 bg-secondary rounded-2xl p-1.5 shadow-soft">
          <TabsTrigger
            value="offer"
            className="rounded-xl text-base font-medium data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-soft transition-all duration-300"
          >
            What We Offer
          </TabsTrigger>
          <TabsTrigger
            value="help"
            className="rounded-xl text-base font-medium data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-soft transition-all duration-300"
          >
            How We Help You
          </TabsTrigger>
        </TabsList>

        <TabsContent value="offer" className="mt-12">
          <WhatWeOffer />
        </TabsContent>

        <TabsContent value="help" className="mt-12">
          <HowWeHelp />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabToggle;

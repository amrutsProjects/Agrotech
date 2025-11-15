import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { ArrowLeft, Sprout, Satellite, Brain, Package, Shield, CreditCard, Handshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCard {
  id: string;
  title: string;
  icon: any;
  content: string;
}

const WhatWeOffer = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const services: ServiceCard[] = [
    {
      id: "soil-testing",
      title: "Satellite-based soil testing",
      icon: Satellite,
      content:
        "Advanced satellite technology provides precise soil analysis without physical sampling. Get detailed reports on soil health, nutrient levels, and recommendations for optimal crop growth. Our AI-powered analysis covers macro and micronutrients, pH levels, organic matter content, and moisture retention capacity.",
    },
    {
      id: "crop-monitoring",
      title: "AI crop monitoring",
      icon: Brain,
      content:
        "Real-time crop health monitoring using artificial intelligence and satellite imagery. Detect diseases, pest infestations, and stress conditions early. Receive instant alerts and actionable insights to protect your crops and maximize yields throughout the growing season.",
    },
    {
      id: "agronomy",
      title: "Agronomy advisory",
      icon: Sprout,
      content:
        "Expert agronomic guidance tailored to your farm's specific needs. Our team of certified agronomists provides personalized advice on crop selection, planting schedules, irrigation management, and sustainable farming practices to optimize your agricultural operations.",
    },
    {
      id: "inputs",
      title: "35 residue-free inputs",
      icon: Package,
      content:
        "Access to 35+ certified organic and residue-free agricultural inputs including fertilizers, pesticides, and growth enhancers. All products are rigorously tested and certified to meet international organic standards, ensuring safe and sustainable farming practices.",
    },
    {
      id: "insurance",
      title: "Parametric insurance",
      icon: Shield,
      content:
        "Weather-based parametric insurance that provides automatic payouts when predefined weather conditions occur. No lengthy claim processes - instant compensation for adverse weather events like drought, excess rainfall, or temperature extremes based on satellite and weather station data.",
    },
    {
      id: "credit",
      title: "Farm credit",
      icon: CreditCard,
      content:
        "Flexible farm credit solutions with competitive interest rates and farmer-friendly terms. Quick approval process using alternative credit scoring based on your farm's productivity data. Get the financial support you need for seeds, equipment, or operational expenses.",
    },
    {
      id: "buyback",
      title: "Buy-back program",
      icon: Handshake,
      content:
        "Guaranteed market access through our buy-back program. We ensure fair prices for your produce based on quality standards. Eliminate market uncertainty with pre-agreed contracts, quality-based pricing, and timely payments directly to your bank account.",
    },
  ];

  const selectedService = services.find((s) => s.id === selectedCard);

  if (selectedCard && selectedService) {
    return (
      <div className="animate-in fade-in slide-in-from-right-8 duration-500">
        <Button
          onClick={() => setSelectedCard(null)}
          variant="ghost"
          className="mb-8 gap-2 hover:bg-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all services
        </Button>

        <Card className="border-border shadow-large bg-gradient-to-br from-background to-green-light/30">
          <CardContent className="p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-primary/10">
                <selectedService.icon className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-4xl font-bold text-foreground">
                {selectedService.title}
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">
              {selectedService.content}
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-500">
      {/* Carbon Credits Card */}
      <Sheet>
        <SheetTrigger asChild>
          <Card
            id="carbon-credits"
            className="border-primary/20 shadow-large hover:shadow-xl transition-all duration-300 cursor-pointer bg-gradient-to-br from-primary/5 to-green-medium/30 overflow-hidden group"
          >
            <CardContent className="p-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Sprout className="h-10 w-10 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">
                      Carbon Credits
                    </h3>
                    <p className="text-muted-foreground">
                      Generate revenue through sustainable farming practices
                    </p>
                  </div>
                </div>
                <ArrowLeft className="h-6 w-6 text-primary rotate-180 group-hover:translate-x-2 transition-transform" />
              </div>
            </CardContent>
          </Card>
        </SheetTrigger>
        <SheetContent className="sm:max-w-2xl overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="text-3xl font-bold mb-4">Carbon Credits</SheetTitle>
          </SheetHeader>
          <div className="prose prose-lg max-w-none text-foreground">
            <h2 className="text-2xl font-semibold text-foreground mb-4">What Are Carbon Credits?</h2>
            <p className="text-muted-foreground mb-6">
              Carbon credits are tradable certificates that represent the removal or reduction of one metric ton of carbon dioxide (CO2) 
              or equivalent greenhouse gases from the atmosphere. Through sustainable agricultural practices, farmers can generate these 
              credits and participate in global climate action while earning additional income.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mb-4">How It Works</h2>
            <p className="text-muted-foreground mb-6">
              Our platform helps farmers transition to regenerative agricultural practices such as no-till farming, cover cropping, 
              and efficient fertilizer use. These practices sequester carbon in the soil, and we verify and quantify this carbon 
              capture using satellite monitoring and AI technology. The verified carbon reduction is then converted into tradable 
              carbon credits.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mb-4">Benefits for Farmers</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Generate additional revenue streams from your existing farmland</li>
              <li>Improve soil health and long-term farm productivity</li>
              <li>Access premium markets that value sustainable practices</li>
              <li>Reduce input costs through optimized resource usage</li>
              <li>Contribute to global climate change mitigation efforts</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mb-4">Our Verification Process</h2>
            <p className="text-muted-foreground mb-6">
              We use advanced satellite imagery, IoT sensors, and AI algorithms to continuously monitor and verify carbon sequestration 
              on your farm. Our methodology is certified by international carbon standards, ensuring transparency and credibility in 
              the carbon market. Farmers receive regular reports on their carbon capture performance and credit generation.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mb-4">Market Opportunities</h2>
            <p className="text-muted-foreground mb-6">
              With increasing global demand for carbon offsets from corporations committed to net-zero targets, carbon credits 
              generated through agriculture are becoming increasingly valuable. We connect farmers directly with buyers, ensuring 
              fair pricing and transparent transactions. Our platform handles all the complexity of carbon credit registration, 
              verification, and trading.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mb-4">Getting Started</h2>
            <p className="text-muted-foreground">
              Join our carbon credit program by registering your farm and implementing recommended sustainable practices. Our 
              agronomy experts will guide you through the transition, and you can start generating carbon credits within the 
              first growing season. No upfront costs - we handle the verification and certification process.
            </p>
          </div>
        </SheetContent>
      </Sheet>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card
            key={service.id}
            className="border-border shadow-medium hover:shadow-large transition-all duration-300 cursor-pointer bg-card overflow-hidden group hover:-translate-y-1"
            onClick={() => setSelectedCard(service.id)}
          >
            <CardContent className="p-8">
              <div className="mb-6 p-3 rounded-xl bg-accent w-fit group-hover:bg-primary/10 transition-colors">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                {service.content}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WhatWeOffer;

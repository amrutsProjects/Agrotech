import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import {
  ArrowLeft,
  Sprout,
  Satellite,
  Brain,
  Package,
  Shield,
  CreditCard,
  Handshake,
  Check, // Import the Check icon
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import carbonCreditsImage from "@/assets/carbonCredits.jpg"; // Import the image

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
            <SheetTitle className="text-3xl font-bold mb-4">
              Carbon Credits Made Simple
            </SheetTitle>
          </SheetHeader>
          {/* Removed 'prose' to apply custom vibrant styles */}
          <div className="max-w-none text-foreground space-y-8 py-4">
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-3">
                What is a Carbon Credit?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A carbon credit is a <strong className="font-bold text-primary">reward given</strong> when your farm helps the earth
                by <strong className="font-bold text-primary">storing carbon in the soil</strong>. Companies buy these credits to
                balance their pollution. <strong className="font-bold text-primary">You earn money</strong> for keeping your soil
                healthy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-3">
                How Farming Creates Carbon Credits
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                You can earn carbon credits when your farm captures and stores
                carbon. This happens when you use regenerative farming and
                natural, soil-friendly methods.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Regenerative farming includes:
              </p>
              <ul className="list-none p-0 m-0 space-y-3 mt-4 text-lg text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <span>Using less chemicals</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <span>Adding organic matter like compost</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <span>Keeping the soil covered</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <span>Growing different crops</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <span>Reducing tilling</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <span>Planting trees or agroforestry</span>
                </li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                These practices make soil healthier and increase soil organic
                carbon.
              </p>
              <p className="text-lg font-semibold text-center text-primary bg-primary/10 p-4 rounded-lg mt-4">
                More carbon in soil = more credits = more income.
              </p>
            </section>

            {/* --- IMAGE INSERTED HERE --- */}
            <section>
              <img
                src={carbonCreditsImage}
                alt="Visual explanation of how carbon credits work for farmers"
                className="w-full h-auto rounded-lg my-4"
              />
            </section>
            {/* --- END OF IMAGE --- */}

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-3">
                How Rupiya.app Measures Carbon
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Rupiya.app checks your farm's carbon in two ways:
              </p>
              <ul className="list-none p-0 m-0 space-y-3 mt-4 text-lg text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <span>Satellite images</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <span>On-ground soil tests</span>
                </li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                We track how much carbon your soil gains every year. <strong className="font-bold text-primary">Only a
                real increase in carbon gives you money</strong>. This keeps
                everything honest and transparent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-3">
                How Farmers Earn Money
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For every <strong className="font-bold text-primary">1 tonne of CO2 stored</strong> in your soil, you earn extra
                income.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                You get:
              </p>
              <ul className="list-none p-0 m-0 space-y-3 mt-4 text-lg text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong className="font-bold text-primary">80%</strong> of the amount in the same year</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <span>
                    <strong className="font-bold text-primary">20%</strong> kept safely as a reserve, paid after 5 years (This
                    protects you even if your carbon drops someday)
                  </span>
                </li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4 bg-primary/10 p-4 rounded-lg">
                Farmers usually earn <strong className="font-bold text-primary whitespace-nowrap">₹2,000-₹5,000 per acre per year</strong>,
                depending on practices and carbon growth.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-3">
                Rupiya's Global Partnership
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Rupiya.app works with <strong className="font-bold text-primary">Carboneg (Europe)</strong> - a trusted global
                carbon program. This ensures high standards, proper
                verification, and good returns for farmers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-3">
                Why This Benefits Farmers
              </h2>
              <ul className="list-none p-0 m-0 space-y-3 mt-4 text-lg text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong className="font-bold text-primary">Extra income</strong> without changing your main crop</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong className="font-bold text-primary">Healthier soil</strong> and better yield over time</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <span>Less money spent on fertilizers</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <span>More moisture in soil</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <span>Long-term support from Rupiya experts</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <span>Easy onboarding and monitoring</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-3">
                Our Goal
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Rupiya.app aims to bring <strong className="font-bold text-primary">50,000+ farmers</strong> and <strong className="font-bold text-primary">5 lakh hectares</strong> under
                regenerative farming and carbon credit income in the
                next 3 years.
              </p>
              <p className="text-xl font-semibold text-center text-primary bg-primary/10 p-4 rounded-lg mt-6">
                More farmers → more income → healthier soil → better climate.
              </p>
            </section>
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
import { Smartphone, Gem, Plane, Shield, Wallet, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface VisionItem {
  id: string;
  title: string;
  icon: any;
  description: string;
}

const VisionSection = () => {
  const visionItems: VisionItem[] = [
    {
      id: "recharge",
      title: "Recharge & bill payments",
      icon: Smartphone,
      description:
        "Seamlessly manage all your mobile recharges, utility bills, and digital payments in one place. Save time and enjoy instant transactions with attractive cashback offers. Our platform supports all major operators and utilities across the country.",
    },
    {
      id: "digital-gold",
      title: "Digital gold",
      icon: Gem,
      description:
        "Invest in 24K pure digital gold starting from just ₹1. Buy, sell, or gift gold instantly with live market prices and zero making charges. Your gold is securely vaulted and 100% insured, giving you the flexibility to convert it to physical gold anytime.",
    },
    {
      id: "travel",
      title: "Travel bookings",
      icon: Plane,
      description:
        "Book flights, trains, buses, and hotels at competitive prices with special discounts for farmers. Enjoy hassle-free travel planning with 24/7 customer support and flexible cancellation policies. Earn rewards points on every booking.",
    },
    {
      id: "insurance",
      title: "Insurance",
      icon: Shield,
      description:
        "Comprehensive insurance solutions including health, life, crop, and livestock insurance tailored for farming families. Get instant policy issuance, easy claim processes, and affordable premiums. Protect what matters most with coverage you can trust.",
    },
    {
      id: "credit",
      title: "Credit access",
      icon: Wallet,
      description:
        "Quick and easy access to personal loans, business loans, and overdraft facilities designed for agricultural needs. Minimal documentation, competitive interest rates, and flexible repayment options. Get instant approval with our digital-first lending process.",
    },
    {
      id: "services",
      title: "Other farmer-centric financial services",
      icon: Sparkles,
      description:
        "Explore a complete ecosystem of financial services including mutual funds, fixed deposits, pension plans, and savings schemes. Build wealth systematically with expert guidance. Benefit from financial literacy programs and investment advisory tailored for farming communities.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-background via-green-light/30 to-background py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Long-Term Vision
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building a comprehensive financial ecosystem for farmers beyond agriculture
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {visionItems.map((item, index) => (
            <Card
              key={item.id}
              className="border-border shadow-medium hover:shadow-large transition-all duration-300 bg-card overflow-hidden animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-10">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="p-4 rounded-2xl bg-primary/10 flex-shrink-0">
                    <item.icon className="h-10 w-10 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {item.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;

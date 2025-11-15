import { useState } from "react";
import { Users, Building2, ShoppingCart, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface UserType {
  id: string;
  title: string;
  icon: any;
  benefits: string[];
}

const HowWeHelp = () => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  const userTypes: UserType[] = [
    {
      id: "farmer",
      title: "Farmer",
      icon: Users,
      benefits: [
        "Access to advanced farming technology without upfront investment",
        "Guaranteed market access through buy-back programs",
        "Expert agronomic support and real-time crop monitoring",
        "Flexible credit options tailored for agricultural needs",
        "Additional income through carbon credit generation",
        "Protection against weather risks with parametric insurance",
      ],
    },
    {
      id: "fpo",
      title: "FPO",
      icon: Building2,
      benefits: [
        "Collective bargaining power for better input prices",
        "Streamlined access to technology for all member farmers",
        "Bulk procurement advantages for agricultural inputs",
        "Professional support in quality management and certification",
        "Enhanced market linkages and better price realization",
        "Capacity building programs for sustainable farming practices",
      ],
    },
    {
      id: "buyer",
      title: "Institutional Buyer",
      icon: ShoppingCart,
      benefits: [
        "Assured supply of quality-certified agricultural produce",
        "Traceability and transparency throughout the supply chain",
        "Direct farmer connections eliminating middlemen",
        "Customizable procurement based on specific quality parameters",
        "ESG compliance through sustainable sourcing practices",
        "Year-round supply planning with predictable pricing",
      ],
    },
    {
      id: "investor",
      title: "Investor / Carbon Buyer",
      icon: TrendingUp,
      benefits: [
        "Verified carbon credits from regenerative agriculture",
        "Transparent monitoring and reporting of carbon sequestration",
        "Direct impact on sustainable farming practices",
        "Compliance with international carbon credit standards",
        "Portfolio diversification with agricultural carbon assets",
        "Measurable social and environmental impact metrics",
      ],
    },
  ];

  const selectedUserType = userTypes.find((u) => u.id === selectedUser);

  return (
    <div className="space-y-12">
      {/* User Type Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {userTypes.map((user) => (
          <Button
            key={user.id}
            variant={selectedUser === user.id ? "default" : "outline"}
            className={`h-32 flex flex-col items-center justify-center gap-4 text-base font-semibold transition-all duration-300 ${
              selectedUser === user.id
                ? "shadow-large scale-105"
                : "shadow-soft hover:shadow-medium hover:-translate-y-1"
            }`}
            onClick={() => setSelectedUser(user.id)}
          >
            <user.icon className="h-8 w-8" />
            {user.title}
          </Button>
        ))}
      </div>

      {/* Benefits Area */}
      <Card className="border-border shadow-large bg-gradient-to-br from-background to-green-light/20">
        <CardContent className="p-12">
          {selectedUserType ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-primary/10">
                  <selectedUserType.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-foreground">
                  Benefits for {selectedUserType.title}
                </h3>
              </div>
              <ul className="space-y-4">
                {selectedUserType.benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-lg text-muted-foreground animate-in fade-in slide-in-from-left-4 duration-500"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                Select a user type above to see how we can help you
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default HowWeHelp;

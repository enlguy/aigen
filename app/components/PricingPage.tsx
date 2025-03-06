import React, { useState } from "react";
import PricingCard from "./ui/PricingCard";
import Switch from "react-switch";

const PricingPage: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  const togglePricing = () => {
    setIsYearly(!isYearly);
  };

  const pricingTiers = [
    {
      name: "Basic",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
      monthlyPrice: 10,
      yearlyPrice: 120,
    },
    {
      name: "Pro",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
      monthlyPrice: 20,
      yearlyPrice: 240,
    },
    {
      name: "Enterprise",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
      monthlyPrice: 30,
      yearlyPrice: 360,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Pricing Plans</h1>
      <div className="flex justify-center items-center mb-15">
        <span className="mr-4">Monthly</span>
        <Switch
          onChange={togglePricing}
          checked={isYearly}
          offColor="#888"
          onColor="#0d6efd"
          offHandleColor="#fff"
          onHandleColor="#fff"
          uncheckedIcon={false}
          checkedIcon={false}
        />
        <span className="ml-4">Yearly</span>
      </div>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingTiers.map((tier, index) => (
          <div
            key={index}
            className={`flex justify-center ${
              index === 1 ? "relative z-10 -mt-8" : ""
            }`}
          >
            <div className="w-full max-w-sm">
              <PricingCard {...tier} isYearly={isYearly} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;

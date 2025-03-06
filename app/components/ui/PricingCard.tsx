import React from "react";

interface PricingCardProps {
  name: string;
  features: string[];
  monthlyPrice: number;
  yearlyPrice: number;
  isYearly: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  name,
  features,
  monthlyPrice,
  yearlyPrice,
  isYearly,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-200">
      <h2 className="text-2xl font-bold mb-4">{name}</h2>
      <p className="text-4xl font-bold mb-4">
        ${isYearly ? yearlyPrice : monthlyPrice}
        <span className="text-lg">/{isYearly ? "year" : "month"}</span>
      </p>
      <ul className="mb-4">
        {features.map((feature, index) => (
          <li key={index} className="mb-2">
            - {feature}
          </li>
        ))}
      </ul>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Get Started
      </button>
    </div>
  );
};

export default PricingCard;

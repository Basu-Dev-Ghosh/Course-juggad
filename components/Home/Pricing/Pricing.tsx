import React from "react";

import PricingCard from "./PricingCard";
import PricingHeader from "./PricingHeader";

const pricing_plans: Pricing[] = [
  {
    title: "Basic",
    price: "₹0",
    description: "Free forever",
    features: [
      "Access to add up to 2 AI-generated courses",
      "Choose from up to 2 options of YouTube videos for each topic.",
      "Standard certification upon completion.",
      "Option to purchase additional courses.",
      "Email support.",
    ],
  },
  {
    title: "Standard",
    price: "₹499",
    description: "Great value",
    features: [
      "Access to add up to 10 AI-generated courses.",
      "Choose from up to 5 options of YouTube videos for each topic.",
      "Standard certification upon completion.",
      "Limited editing capabilities.",
      "Email support.",
    ],
  },
  {
    title: "Premium",
    price: "₹999",
    description: "Top choice",
    features: [
      "Unlimited access to all AI-generated courses.",
      "Choose from up to 10 options of YouTube videos for each topic.",
      "Advanced editing features for complete customization.",
      "Priority certification processing.",
      "Priority email, chat, and phone support.",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="w-full max-w-7xl mx-auto h-auto my-10  md:my-20">
      <PricingHeader />
      <div className="grid place-items-center grid-cols-1 md:grid-cols-3 py-10">
        {pricing_plans.map((plan: Pricing, i) => {
          return <PricingCard key={i} plan={plan} />;
        })}
      </div>
    </section>
  );
};

export default Pricing;

import {
  featuresAdvanced,
  featuresBasic,
  featuresBusiness,
} from "./dataPricing";
import PricingCard from "./PricingCard";

const ListPricing = () => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <li>
        <PricingCard
          plan="Basic"
          period="Month"
          price={35}
          description="Best for personal use"
          features={featuresBasic}
        />
      </li>
      <li>
        <PricingCard
          plan="Expert"
          period="Annual"
          price={20}
          description="Best for professionals"
          features={featuresAdvanced}
        />
      </li>
      <li>
        <PricingCard
          plan="Expert Duo"
          period="Annual"
          price={28}
          description="For 2 people"
          features={featuresBusiness}
          /* active */
          offer
        />
      </li>
    </ul>
  );
};

export default ListPricing;

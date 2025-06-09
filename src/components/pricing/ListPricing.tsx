import {
  featuresAdvanced,
  featuresBasic,
  featuresBusiness,
} from "./dataPricing";
import PricingCard from "./PricingCard";
import { useTranslation } from "react-i18next";

const ListPricing = () => {
  const { t } = useTranslation();
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <li>
        <PricingCard
          plan={t("pricing.basic")}
          period={t("pricing.period.month")}
          price={35}
          description={t("pricing.description.basic")}
          features={featuresBasic}
        />
      </li>
      <li>
        <PricingCard
          plan={t("pricing.expert")}
          period={t("pricing.period.year")}
          price={20}
          description={t("pricing.description.expert")}
          features={featuresAdvanced}
        />
      </li>
      <li>
        <PricingCard
          plan={t("pricing.expert_duo")}
          period={t("pricing.period.year")}
          price={28}
          description={t("pricing.description.expert_duo")}
          features={featuresBusiness}
          /* active */
          offer
        />
      </li>
    </ul>
  );
};

export default ListPricing;

import { useState } from "react";
import HeaderPricing from "./HeaderPricing";
import ListPricing from "./ListPricing";
import { useTranslation } from "react-i18next";

const Pricing = () => {
  const [plan, setPlan] = useState<"monthly" | "yearly">("monthly");
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-10 items-center justify-center min-h-screen mt-20 2xl:mt-0">
      <h3 className="font-bold text-3xl">{t("pricing.title")}</h3>
      <HeaderPricing
        plan={plan}
        onClickMonthly={() => setPlan("monthly")}
        onClickYearly={() => setPlan("yearly")}
      />
      <ListPricing />
    </div>
  );
};

export default Pricing;

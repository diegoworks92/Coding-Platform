import { useState } from "react";
import HeaderPricing from "./HeaderPricing";
import ListPricing from "./ListPricing";

const Pricing = () => {
  const [plan, setPlan] = useState("monthly");
  return (
    <div className="flex flex-col gap-10 items-center justify-center min-h-screen mt-20 2xl:mt-0">
      <h3 className="font-bold text-3xl">Choose the ideal plan for you</h3>
      <HeaderPricing
        plan={plan}
        onClickMonthly={() => setPlan("monthly")}
        onClickYearly={() => setPlan("yearly")}
      />
      <ListPricing plan={plan} />
    </div>
  );
};

export default Pricing;

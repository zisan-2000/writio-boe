import React from "react";
import { billingOptions, planOptions } from "../Data/Data";
import BillingToggle from "../components/BillingToggle";
import PlanOption from "../components/PlanOption";
import TrialInfo from "../components/TrialInfo";

const PlanPage = () => {
  return (
    <div className="all-content">
      {/* Trial Info */}
      <TrialInfo
        trialPlan={billingOptions.trialPlan}
        trialDaysLeft={billingOptions.trialDaysLeft}
      />

      {/* Billing Toggle */}
      <BillingToggle />

      {/* Plan Options */}
      <div className="flex justify-center space-x-8">
        {planOptions.map((plan, index) => (
          <PlanOption
            key={index}
            title={plan.title}
            price={plan.price}
            save={plan.save}
            mostPopular={plan.mostPopular}
            switchBilling={plan.switchBilling}
          />
        ))}
      </div>
    </div>
  );
};

export default PlanPage;

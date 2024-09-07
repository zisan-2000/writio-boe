import React, { useState } from "react";
import { billingOptions } from "../Data/Data";
import ToggleSwitch from "./ToggleSwitch"; // Import the new ToggleSwitch component

const BillingToggle = () => {
  const [isYearly, setIsYearly] = useState(true);

  const toggleBilling = () => {
    setIsYearly(!isYearly); // Function to toggle billing
  };

  return (
    <div className="mb-8 flex items-center justify-center space-x-4">
      <span className={`text-sm ${!isYearly ? "font-semibold" : ""}`}>
        Monthly
      </span>

      {/* Use the ToggleSwitch component */}
      <ToggleSwitch isYearly={isYearly} toggleBilling={toggleBilling} />

      <span className={`text-sm ${isYearly ? "font-semibold" : ""}`}>
        Yearly
      </span>
      <span className="ml-2 text-sm text-orange-500">
        Save up to {billingOptions.yearlyDiscount}%
      </span>
    </div>
  );
};

export default BillingToggle;

import React from "react";

const ToggleSwitch = ({ isYearly, toggleBilling }) => {
  return (
    <div className="relative">
      <button
        className={`h-6 w-12 rounded-full bg-gray-200 shadow-inner transition-all ${
          isYearly ? "bg-blue-500" : "bg-gray-200"
        }`}
        onClick={toggleBilling} // Call the toggle function passed as props
      >
        <span
          className={`block h-4 w-4 transform rounded-full bg-white shadow-md transition-all ${
            isYearly ? "translate-x-6" : "translate-x-0"
          }`}
        ></span>
      </button>
    </div>
  );
};

export default ToggleSwitch;

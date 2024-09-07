import React from "react";

const PlanOption = ({ title, price, save, mostPopular, switchBilling }) => {
  return (
    <div className="card">
      {mostPopular && (
        <div className="mb-2 text-sm font-semibold text-orange-500">
          MOST POPULAR
        </div>
      )}
      <h3 className="mb-2 text-2xl font-bold">{title}</h3>
      <p className="mb-2 text-4xl font-bold text-orange-500">${price}</p>
      <p className="mb-4 text-gray-500">/ month</p>
      <p className="text-blue-500">{save}</p>
      <p className="mt-2 cursor-pointer text-blue-500 underline">
        {switchBilling}
      </p>
      <button className="card-button">Activate now</button>
    </div>
  );
};

export default PlanOption;

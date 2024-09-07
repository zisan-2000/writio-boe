// Data.jsx

export const menuItems = [
  { name: "Dashboard", icon: "fas fa-home", path: "/" }, // Link to the Dashboard
  { name: "Templates", icon: "fas fa-folder", path: "/templates" }, // Link to the Templates page
  { name: "Categories", icon: "fas fa-list", path: "/categories" },
  { name: "Plans", icon: "fas fa-briefcase", path: "/plans" },
  { name: "Users", icon: "fas fa-users", path: "/users" },
  { name: "Settings", icon: "fas fa-cog", path: "/settings" },
];

import { FaCheckCircle, FaClipboardList, FaCog, FaTasks } from "react-icons/fa"; // React-Icons থেকে ইমপোর্ট করা

export const tasks = [
  { task: "Connect your OpenAI Key", status: "Done", icon: <FaCheckCircle /> },
  { task: "Configure payment gateways", status: "Done", icon: <FaCog /> },
  { task: "Set business details", status: "Done", icon: <FaClipboardList /> },
  { task: "Setup membership plans", status: "Done", icon: <FaTasks /> },
];

// Data.jsx

export const billingOptions = {
  trialPlan: "Basic",
  trialDaysLeft: 6,
  yearlyDiscount: 17,
  subscriptionLink: "#", // replace with actual subscription link if needed
};

export const planOptions = [
  {
    title: "Basic",
    price: "8.32",
    save: "Save $20 annually",
    switchBilling: "Switch to monthly billing",
    mostPopular: false,
  },
  {
    title: "Developer",
    price: "16.64",
    save: "Save $40 annually",
    switchBilling: "Switch to monthly billing",
    mostPopular: true,
  },
  {
    title: "Pro",
    price: "83.32",
    save: "Save $200 annually",
    switchBilling: "Switch to monthly billing",
    mostPopular: false,
  },
];

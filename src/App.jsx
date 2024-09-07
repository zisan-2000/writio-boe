import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout"; // Main layout that includes Sidebar
import Dashboard from "./pages/Dashboard"; // Dashboard component
import PlanPage from "./pages/PlanPage";
import Template from "./pages/Template"; // Template component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} /> {/* Default route */}
          <Route path="templates" element={<Template />} />{" "}
          {/* Templates route */}
          <Route path="plans" element={<PlanPage />} />{" "}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

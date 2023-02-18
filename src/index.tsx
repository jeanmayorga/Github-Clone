import React from "react";
import ReactDOM from "react-dom/client";
import { QueryParamProvider } from "use-query-params";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { ProfileView } from "./modules";

import "./index.css";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <QueryParamProvider adapter={ReactRouter6Adapter}>
      <Routes>
        <Route path="/:user" element={<ProfileView />} />
        <Route
          path="*"
          element={<Navigate to="/gaearon?tab=repositories" replace />}
        />
      </Routes>
    </QueryParamProvider>
  </BrowserRouter>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./index.css";
import Layout from "./components/layout";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
          <Route
            path="/destination"
            element={<Navigate to="/destination/moon" replace />}
          />
          {/* dynamic route */}
          <Route path="/destination/:planetId" element={<Destination />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

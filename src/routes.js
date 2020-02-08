import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./pages/main/index";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
}

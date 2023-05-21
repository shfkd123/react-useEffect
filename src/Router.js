import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Other from "./Other";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/other" element={<Other />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Dictionary from "./pages/DictionaryApi";
import Error from "./pages/Error";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Dictionary" element={<Dictionary />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

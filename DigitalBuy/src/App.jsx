import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar2 } from "./components/NavBar2";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <BrowserRouter>
      <NavBar2 />
      <Routes></Routes>
      <Footer />
    </BrowserRouter>
  );
}

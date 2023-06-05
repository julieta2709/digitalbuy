import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import {Footer} from "./components/Footer";

export function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes></Routes>
      <Footer />
    </BrowserRouter>
  );
}

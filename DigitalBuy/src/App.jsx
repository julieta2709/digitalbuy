import React from "react";
import "./Styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar2 } from "./components/NavBar2";
import { Footer } from "./components/Footer";
import { ItemListContainer } from "./components/ItemListContainer";

export function App() {
  return (
    <BrowserRouter>
      <NavBar2 />
      <ItemListContainer />
      <Footer />
    </BrowserRouter>
  );
}

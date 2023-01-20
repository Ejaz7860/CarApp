import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserManagement from "./pages/UserManagement";
import CarServices from "./pages/CarServices";
import Cars from "./pages/Cars";
import "./styles/register.css"
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Home />
        <Routes>
          <Route path="/user/management" element={<UserManagement />} />
          <Route path="/car/services" element={<Hero/>} />
          <Route path="/car/services/:id" element={<CarServices />} />
          <Route path="/user/cars/:id" element={<Cars />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

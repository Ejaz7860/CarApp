import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import UserManagement from "./pages/UserManagement";
import CarServices from "./pages/CarServices";
import Cars from "./pages/Cars";
import "./styles/register.css"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Home />
        <Routes>
          <Route path="/user/management" element={<UserManagement />} />
          <Route path="/car/services/:id" element={<CarServices />} />
          <Route path="/user/cars/:id" element={<Cars />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

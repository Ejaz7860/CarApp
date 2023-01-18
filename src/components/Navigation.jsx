import React from "react";
import { HStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <HStack>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "ch")}
          to="/user/management"
        >
          User
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "ch")}
          to="/car/services"
        >
          Services
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "ch")}
          to="/car/cars"
        >
          Car
        </NavLink>
      </HStack>
    </>
  );
};

export default Navigation;

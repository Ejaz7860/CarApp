import React from "react";
import { HStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <HStack>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "ch")}
          to="/car/services"
        >
          Our Services
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "ch")}
          to="/user/management"
        >
          User
        </NavLink>
      </HStack>
    </>
  );
};

export default Navigation;

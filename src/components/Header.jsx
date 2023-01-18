import React from "react";
import { Heading, HStack } from "@chakra-ui/react";
import "../styles/header.css";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <>
      <div className="Header">
        <Heading
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontWeight="extrabold"
          fontSize={{ md: "2xl", sm: "xl" }}
        >
          Car Maintenance
        </Heading>
        <HStack>
          <Navigation />
        </HStack>
      </div>
    </>
  );
};

export default Header;

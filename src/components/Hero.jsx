import React from "react";
import { Heading, Text, Box, Image } from "@chakra-ui/react";
import pngImg from "../assets/hero.png";

const Hero = () => {
  return (
    <>
      <div  className="hero_box">
        <div>
          <Heading color={"blackAlpha.700"} fontSize={"3xl"}>
            Welcome to car maintenance
          </Heading>
          <Text color={"blackAlpha.700"} textAlign={"center"} fontSize={"xl"}>
            We are providing servies for car maintenance
          </Text>
        </div>
        <div>
          <Box boxSize="md">
            <Image src={pngImg} alt="Service" />
          </Box>
        </div>
      </div>
    </>
  );
};

export default Hero;

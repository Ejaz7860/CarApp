import React from "react";
import { Container, Heading, Text } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Container
      w={"full"}
      flexDirection="column"
      display={"flex"}
      h={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Heading color={"blackAlpha.700"} fontSize={"6xl"}>
        Welcome
      </Heading>
      <Text color={"blackAlpha.700"} textAlign={"center"} fontSize={"3xl"}>
        we are providing servies for car maintenance
      </Text>
    </Container>
  );
};

export default NotFound;

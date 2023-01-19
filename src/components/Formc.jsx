import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../redux/actions/user.action";
import { ToastContainer, toast } from "react-toastify";
import {
  Heading,
  Box,
  HStack,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Button,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import "../styles/register.css";
import "react-toastify/dist/ReactToastify.css";

const Formc = () => {
  const [name, setName] = useState("");
  const [phone_no, setPhone] = useState("");
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.userSuccess);

  const isError = name === "" && phone_no === "";
  const collectData = (e) => {
    e.preventDefault();
    if (name && phone_no.length) {
      dispatch(createUser({ name, phone_no }));
      setTimeout(() => {
        toast(`${selector.message}`);
      }, [500]);
    } else {
      toast.warning("Name and Phone no required!");
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="left__container">
        <Box
          margin={"auto"}
          position={"fixed"}
          boxShadow="2xl"
          w={{ base: "450px", md: "400px", sm: "400px" }}
          p={{ sm: "4" }}
          mt={2}
          h={"1000"}
          backgroundColor={"whiteAlpha.100"}
        >
          <Heading
            textAlign={"center"}
            mt={6}
            fontSize={{ base: "24px", md: "26px", lg: "24px" }}
          >
            Create User
          </Heading>
          <HStack p={4}>
            <FormControl isRequired>
              <SimpleGrid columns={{ md: "1", sm: "1" }} spacing={1}>
                <Box>
                  <FormLabel fontWeight={{ sm: "black" }}>Enter name</FormLabel>
                  <Input
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    placeholder="Enter name"
                  />
                  {!isError ? (
                    <FormHelperText>Enter Name.</FormHelperText>
                  ) : (
                    <FormErrorMessage>Name is required.</FormErrorMessage>
                  )}
                </Box>
              </SimpleGrid>
              <SimpleGrid mt={2} column={1}>
                <FormLabel fontWeight={{ sm: "black" }}>Mobile no</FormLabel>
                <Input
                  value={phone_no}
                  type="tel"
                  placeholder="9999XXXXXX"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
                {!isError ? (
                  <FormHelperText>Enter Mobile No.</FormHelperText>
                ) : (
                  <FormErrorMessage>Mobile is required.</FormErrorMessage>
                )}
              </SimpleGrid>

              <SimpleGrid mt={2} column={1}>
                <Button
                  color={"#fff"}
                  _hover={false}
                  bgGradient="linear(to-l, #7928CA, #FF0080)"
                  onClick={(e) => collectData(e)}
                >
                  Create User
                </Button>
              </SimpleGrid>
            </FormControl>
          </HStack>
        </Box>
      </div>
    </div>
  );
};

export default Formc;

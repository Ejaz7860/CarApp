import React, { useState } from "react";
import { createService } from "../redux/actions/services.action";
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
  Select,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
const ServicesForm = ({ id }) => {
  const [services, setServices] = useState({
    carid: id,
    servicing_date: "",
    status: "",
  });

  const dispatch = useDispatch();
  const statusMessage = useSelector((state) => state.serviceRequest);
  const isError = services.servicing_date === "" && services.status === "";

  const collectData = (e) => {
    e.preventDefault();
    if (services.servicing_date && services.status) {
      dispatch(createService(services));
      setTimeout(() => {
        toast(statusMessage.message);
      }, [500]);
      setTimeout(() => {
        window.location.reload();
      }, [1000]);
    } else {
      toast.warning(statusMessage.message);
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="left__container">
        <form action="">
          <Box
            margin={"auto"}
            boxShadow="2xl"
            position={"fixed"}
            w={{ base: "450px", md: "400px", sm: "400px" }}
            p={{ sm: "4" }}
            mt={2}
            h={"1000"}
            backgroundColor={"white"}
          >
            <Heading
              textAlign={"center"}
              mt={6}
              fontSize={{ base: "24px", md: "26px", lg: "24px" }}
            >
              Servicing Form
            </Heading>
            <HStack p={4}>
              <FormControl isRequired>
                <SimpleGrid columns={{ md: "1", sm: "1" }} spacing={1}>
                  <Box>
                    <FormLabel fontWeight={{ sm: "black" }}>Status</FormLabel>
                    {/* <Input
                      value={services.status}
                      onChange={(e) => {
                        setServices({ ...services, status: e.target.value });
                      }}
                      placeholder="Status"
                      required
                    /> */}
                    <Select
                      placeholder="Select Status"
                      onChange={(e) => {
                        setServices({ ...services, status: e.target.value });
                      }}
                    >
                      <option value="finished">Finished</option>
                      <option value="unfinished">Unfinished</option>
                    </Select>
                    {!isError ? (
                      <FormHelperText>Status.</FormHelperText>
                    ) : (
                      <FormErrorMessage>Status is required.</FormErrorMessage>
                    )}
                  </Box>
                </SimpleGrid>
                <SimpleGrid columns={{ md: "1", sm: "1" }} spacing={1}>
                  <Box>
                    <FormLabel fontWeight={{ sm: "black" }}>
                      Purchase Date
                    </FormLabel>
                    <Input
                      type="date"
                      value={services.servicing_date}
                      onChange={(e) => {
                        setServices({
                          ...services,
                          servicing_date: e.target.value,
                        });
                      }}
                      placeholder="Servicing Date"
                      required
                    />
                    {!isError ? (
                      <FormHelperText>Servicing Date.</FormHelperText>
                    ) : (
                      <FormErrorMessage>
                        Servicing date is required.
                      </FormErrorMessage>
                    )}
                  </Box>
                </SimpleGrid>
                <SimpleGrid mt={2} column={1}>
                  <Button
                    color={"#fff"}
                    _hover={false}
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    onClick={collectData}
                  >
                    Submit
                  </Button>
                </SimpleGrid>
              </FormControl>
            </HStack>
          </Box>
        </form>
      </div>
    </div>
  );
};

export default ServicesForm;

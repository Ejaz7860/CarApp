import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCar } from "../redux/actions/car.action";
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

const FormCar = ({ ownerid }) => {
  const [carData, setCarData] = useState({
    model: "",
    color: "",
    ownerid: ownerid,
    purchase_date: "",
  });

  const dispatch = useDispatch();
  const selector = useSelector((state) => state.onCarRequest);

  const isError =
    carData.model === "" &&
    carData.color === "" &&
    carData.purchase_date === "";
  const collectData = (e) => {
    e.preventDefault();
    if (carData.model && carData.color && carData.purchase_date) {
      dispatch(createCar(carData));
      setTimeout(() => {
        toast(selector.message);
      }, [500]);
    } else {
      toast.warning(selector.message);
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
              Add Car Details
            </Heading>
            <HStack p={4}>
              <FormControl isRequired>
                <SimpleGrid columns={{ md: "1", sm: "1" }} spacing={1}>
                  <Box>
                    <FormLabel fontWeight={{ sm: "black" }}>
                      Model name
                    </FormLabel>
                    <Input
                      value={carData.model}
                      onChange={(e) => {
                        setCarData({ ...carData, model: e.target.value });
                      }}
                      placeholder="Model name"
                      required
                    />
                    {!isError ? (
                      <FormHelperText>Model.</FormHelperText>
                    ) : (
                      <FormErrorMessage>Model is required.</FormErrorMessage>
                    )}
                  </Box>
                </SimpleGrid>
                <SimpleGrid columns={{ md: "1", sm: "1" }} spacing={1}>
                  <Box>
                    <FormLabel fontWeight={{ sm: "black" }}>Color</FormLabel>
                    <Input
                      value={carData.color}
                      onChange={(e) => {
                        setCarData({ ...carData, color: e.target.value });
                      }}
                      placeholder="Model Color"
                      required
                    />
                    {!isError ? (
                      <FormHelperText>Color.</FormHelperText>
                    ) : (
                      <FormErrorMessage>Color is required.</FormErrorMessage>
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
                      value={carData.purchase_date}
                      onChange={(e) => {
                        setCarData({
                          ...carData,
                          purchase_date: e.target.value,
                        });
                      }}
                      placeholder="Purchase Date"
                      required
                    />
                    {!isError ? (
                      <FormHelperText>Purchase Date.</FormHelperText>
                    ) : (
                      <FormErrorMessage>
                        Purchase Date is required.
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

export default FormCar;

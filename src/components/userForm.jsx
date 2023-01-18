import { useEffect } from "react";
import Formc from "./Formc";
import {
  Container,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import "../styles/register.css";
import "react-toastify/dist/ReactToastify.css";
import { getUserDetails } from "../redux/actions/user.action";
import { useDispatch,useSelector } from "react-redux";
const UserForm = () => {
  const selector = useSelector((state) => state.userFeature);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDetails());
  }, []);
  console.log(selector ? selector : null)
  return (
    <>
      <div className="container">
        {/* FORM */}
        <Formc />
        {/* ACCORDIAN FOR USER AND CAR DETAILS */}
        <div className="right__container">
          <Container
            mt={4}
            display={"flex"}
            alignItems={"center"}
            bgColor={"#f22a88"}
            justifyContent="space-between"
            color="#fff"
          >
            <Accordion>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Section 1 title
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Section 2 title
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Container>
        </div>
      </div>
    </>
  );
};

export default UserForm;

import React, { useEffect } from "react";
import { Heading, Text, Button } from "@chakra-ui/react";
import { useParams, useLocation, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserbyid } from "../redux/actions/user.action";
import FormCar from "../components/FormCar";
import "../styles/register.css";
import Card from "../components/Card";


const Cars = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.userById);
  const { state } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getUserbyid(id));
  }, [dispatch, id]);

  return (
    <>
      <div className="container">
        <FormCar ownerid={id} />
        <div className="right__container">
          <Button
            onClick={() => navigate(-1)}
            colorScheme="black"
            variant="outline"
            width='7%'
            ml={3}
            mt={1}
            position={"fixed"}
            borderRadius={5}
          >
            Back
          </Button>
          <div style={{ marginTop: "30px" }} className="m">
            <Card Username={state.name} phone_no={state.phone_no} />
          </div>

          <div style={{ marginTop: "30px" }} className="m">
            {selector.length ? (
              selector.map((data) => {
                return data.Cars.length !== 0 ? (
                  data.Cars.reverse().map((data, index) => {
                    return (
                      <div key={index}>
                        <ul>
                          <Link
                            className="car__services"
                            to={`/car/services/${data.id}`}
                            state={{
                              name: data.model,
                              color: data.color,
                              purchase_date: data.purchase_date,
                            }}
                          >
                            {" "}
                            <Text fontSize="xs">check services</Text>
                          </Link>

                          <li>Model- {data.model}</li>
                          <li>Color- {data.color} </li>
                          <li>Purchase Date - {data.purchase_date} </li>
                        </ul>
                      </div>
                    );
                  })
                ) : (
                  <Heading textAlign={"center"}>Car Data Not available</Heading>
                );
              })
            ) : (
              <Heading textAlign={"center"}>Car Data Not available</Heading>
            )}{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cars;

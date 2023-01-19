import React, { useEffect } from "react";
import { Heading, Text } from "@chakra-ui/react";
import { useParams, useLocation, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserbyid } from "../redux/actions/user.action";
import FormCar from "../components/FormCar";
import "../styles/register.css";
import { IoArrowBackOutline } from "react-icons/io5";

const Cars = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.userById);
  const { state } = useLocation();
  const navigate = useNavigate();

  console.log(selector);
  useEffect(() => {
    dispatch(getUserbyid(id));
  }, [dispatch, id]);

  return (
    <>
      <div className="container">
        <FormCar ownerid={id} />
        <div className="right__container">
          <div  style={{
                fontSize: "20px",
                position: "fixed",
                marginLeft:"4px",
                display:"flex",
                alignItems:"center",
                cursor:"pointer",
                width:"60px",
                justifyContent:"center",
                marginTop:"5px",
                borderRadius:"4px"
                
              }}>
            {" "}
            <IoArrowBackOutline
              onClick={() => navigate(-1)}
             
            />
     
          </div>
          <div style={{ marginTop: "24px" }} className="m">
            <ul className="car__user">
              <li>User Name - {state.name}</li>
              <li>Mobile - {state.phone_no}</li>
            </ul>
          </div>

          <div style={{ marginTop: "30px" }} className="m">
            {selector.length ? (
              selector.map((data) => {
                return data.Cars.length !== 0 ? (
                  data.Cars.map((data, index) => {
                    return (
                      <div key={index}>
                        <ul>
                          <Link
                            className="car__services"
                            to={`/car/services/${data.id}`}
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

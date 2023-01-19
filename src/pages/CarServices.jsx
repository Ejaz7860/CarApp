import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import ServicesForm from "../components/ServicesForm";
import { useDispatch, useSelector } from "react-redux";
import { getCarbyid } from "../redux/actions/car.action.js";
import Card from "../components/Card";
import { Heading } from "@chakra-ui/react";
import { IoArrowBackOutline } from "react-icons/io5";


const CarServices = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.carById);
  const navigate = useNavigate();
  const { state } = useLocation();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCarbyid(id));
  }, [dispatch, id]);

  return (
    <div className="container">
      <ServicesForm id={id} />
      <div className="right__container">
        <div
          style={{
            fontSize: "20px",
            position: "fixed",
            marginLeft: "4px",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            width: "60px",
            justifyContent: "center",
            marginTop: "5px",
            borderRadius: "4px",
          }}
        >
          {" "}
          <IoArrowBackOutline onClick={() => navigate(-1)} />
        </div>
        <div style={{ marginTop: "24px" }} className="m">
          <Card
            car={state.name}
            color={state.color}
            purchase_date={state.purchase_date}
          />
        </div>
        <div style={{ marginTop: "30px" }} className="m">
          {selector.length ? (
            selector.map((data) => {
              return data.Servicing.length !== 0 ? (
                data.Servicing.map((data, index) => {
                  return (
                    <div key={index}>
                      <ul>
                     { data.status === "finished" ?<li style={{color:"green"}}>Status- {data.status}</li> : <li style={{color:"red"}}>Status- {data.status}</li> }
                        <li>Servicing Date - {data.servicing_date} </li>
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
  );
};

export default CarServices;

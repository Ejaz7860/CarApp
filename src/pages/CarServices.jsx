import React, { useEffect } from "react";
import { Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ServicesForm from "../components/ServicesForm";
import { useDispatch,useSelector } from "react-redux";
import { getCarbyid } from "../redux/actions/car.action.js";
const CarServices = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state)=>state.carById);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCarbyid(id));
  }, [dispatch, id]);

  console.log(selector)
  return (
    <div className="container">
      <ServicesForm id={id} />
    </div>
  );
};

export default CarServices;

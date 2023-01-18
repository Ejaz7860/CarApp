import React, { useEffect } from "react";
import { Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserbyid } from "../redux/actions/user.action";
import Formc from "../components/Formc";
const Cars = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.userById);

  useEffect(() => {
    dispatch(getUserbyid(id));
  }, [dispatch, id]);

  return (
    <>
      <div className="container">
        <Formc />
        <div className="right__container">
          <div className="m">
            {selector.length
              ? selector.map((data) => {
                return(
             data.Cars.length !== 0 ?    data.Cars.map((data, index) => {
                    return (
                      <div key={index}>
                        {" "}
                        <ul>
                          <li>Model- {data.model}</li>
                          <li>Color- {data.color} </li>
                          <li>Purchase Date - {data.purchase_date} </li>
                        </ul>
                      </div>
                    );
                  }) : <Heading textAlign={'center'}>Car Data Not available</Heading>
                )
                  
                })
              : <Heading textAlign={'center'}>Car Data Not available</Heading>}{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cars;

import { useEffect } from "react";
import { Link } from "react-router-dom";
import Formc from "./Formc";
import "../styles/register.css";
import { Text } from "@chakra-ui/react";
import "react-toastify/dist/ReactToastify.css";
import { getUserDetails } from "../redux/actions/user.action";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { useState } from "react";
const UserForm = () => {
  const [loader, setLoader] = useState(true);
  const selector = useSelector((state) => state.userFeature);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDetails());
    setLoader(false);
  }, [dispatch]);

  return (
    <>
      <div className="container">
        {/* FORM */}
        <Formc />
        {/* CARD */}
        {/* ACCORDIAN FOR USER AND CAR DETAILS */}
        {loader ? (
          <div className="loading__circle">
            <h1>...Loading</h1>
          </div>
        ) : (
          <div className="right__container">
            <div style={{ marginTop: "24px" }} className="m">
              <Card des="Welcome to user" user="Check car for user" />
            </div>
            <div className="m">
              {selector.reverse().map((data, index) => {
                return (
                  <div key={index}>
                    {" "}
                    <ul>
                      <Link
                        className="car__services"
                        to={`/user/cars/${data.id}`}
                        state={{ name: data.name, phone_no: data.phone_no }}
                      >
                        <Text fontSize="xs">check car</Text>
                      </Link>
                      <li>S.NO - {data.id}</li>
                      <li>Name - {data.name}</li>
                      <li>Mobile - {data.phone_no}</li>
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserForm;

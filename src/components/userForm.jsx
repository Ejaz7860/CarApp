import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Formc from "./Formc";
import "../styles/register.css";
import "react-toastify/dist/ReactToastify.css";
import { getUserDetails } from "../redux/actions/user.action";
import { useDispatch, useSelector } from "react-redux";
import { Oval } from "react-loader-spinner";
const UserForm = () => {
  const selector = useSelector((state) => state.userFeature);
  const [loader, setLoader] = useState(true);

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
        {/* ACCORDIAN FOR USER AND CAR DETAILS */}
        <div className="right__container">
          {loader ? (
            <div className="oval">
              <Oval
                height={80}
                width={80}
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            </div>
          ) : (
            <div className="m">
              { selector.map((data, index) => {
                    return (
                      <div key={index}>
                        {" "}
                        <Link to={`/user/cars/${data.id}`} state={{ name: data.name,phone_no:data.phone_no }}>
                          <ul>
                            <li>{data.id} User Details</li>
                            <li>Name - {data.name}</li>
                            <li>Mobile - {data.phone_no}</li>
                          </ul>
                        </Link>
                      </div>
                    );
                  })
               }{" "}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserForm;

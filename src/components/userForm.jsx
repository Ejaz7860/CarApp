import { useEffect } from "react";
import { Link } from "react-router-dom";
import Formc from "./Formc";
import "../styles/register.css";
import "react-toastify/dist/ReactToastify.css";
import { getUserDetails } from "../redux/actions/user.action";
import { useDispatch, useSelector } from "react-redux";
const UserForm = () => {
  const selector = useSelector((state) => state.userFeature);
  // const [loader, setLoader] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDetails());
  }, [dispatch]);

  return (
    <>
      <div className="container">
        {/* FORM */}
        <Formc />
        {/* ACCORDIAN FOR USER AND CAR DETAILS */}
        <div className="right__container">
          <div className="m">
            {selector.length
              ? selector.map((data, index) => {
                  return (
                    <div key={index}>
                      {" "}
                      <Link to={`/user/cars/${data.id}`}>
                        <ul>
                          <li>{data.id} User Details</li>
                          <li>Name - {data.name}</li>
                          <li>Mobile - {data.phone_no}</li>
                        </ul>
                      </Link>
                    </div>
                  );
                })
              : "Data is Not available"}{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserForm;

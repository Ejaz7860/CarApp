import React from "react";

const Card = ({ Username, phone_no, car, color, purchase_date }) => {
  return (
    <div>
      {" "}
      <ul className="car__user">
        {Username ? <li>User Name - {Username}</li> : null}
        {phone_no ? <li>Mobile no: - {phone_no}</li> : null}
        {car ? <li>Car name - {car}</li> : null}
        {color ? <li>Color - {color}</li> : null}
        {purchase_date ? <li>Purchase Date - {purchase_date}</li> : null}
      </ul>
    </div>
  );
};

export default Card;

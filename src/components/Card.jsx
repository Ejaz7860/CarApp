import React from "react";
import { Text,Heading } from "@chakra-ui/react";
const Card = ({
  Username,
  phone_no,
  car,
  color,
  purchase_date,
  title,
  des,
  user,
}) => {
  return (
    <div>
      {" "}
      <ul className="car__user">
        {Username ? <li>User - {Username}</li> : null}
        {car ? <li>Model- {car}</li> : null}
        {color ? <li>Color - {color}</li> : null}
        {purchase_date ? <li>Purchase Date - {purchase_date}</li> : null}
        {phone_no ? <li>Mobile no: - {phone_no}</li> : null}
        {des ? <Heading fontSize={'xl'} color={'#fff'} textAlign={'center'} >{des}</Heading> : null}
        {user ? <Text color={'#fff'} textAlign={'center'} >{user}</Text> : null}
        {title ? <Text>{title}</Text> : null}
      </ul>
    </div>
  );
};

export default Card;

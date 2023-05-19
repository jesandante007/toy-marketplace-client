import React from "react";
import { Link } from "react-router-dom";

const ToyRow = ({ toy, index }) => {
  const { _id, name, seller, category, availableQuantity, price } = toy;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{seller}</td>
      <td>{category}</td>
      <td>${price}</td>
      <td>{availableQuantity}</td>
      <td>
        <Link to={`/toyDetails/${_id}`}>
          <button className="btn btn-outline my-btn">View Details</button>
        </Link>
      </td>
    </tr>
  );
};

export default ToyRow;
